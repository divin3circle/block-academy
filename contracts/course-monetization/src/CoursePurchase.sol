// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

error NotOwner();

contract Purchase is Ownable {
    error CourseDoesNotExist();
    error NotEnoughFunds(uint256 amountEarned, uint256 withdrawalAmount);
    error ZeroAmount();

    struct CourseDetails {
        uint256 courseId; // Unique ID of the course
        string name; // Name of the course
        string description; // Description of the course
        uint256 price; // in wei
        address creator; // Creator of the course
    }

    uint256 courses;
    mapping(uint256 courseIndex => CourseDetails details) private s_courseDetails;
    mapping(address => CourseDetails[] details) private s_creatorToCourseDetails;
    mapping(address creator => uint256 amountEarned) private s_creatorToAmountEarned;
    mapping(address => uint256[]) private s_learnerToCoursesPurchased;
    mapping(address => uint256) private s_addressToAmountSpent;

    event CoursePurchased(string name, address buyer, address creator, uint256 price);

    constructor() Ownable(msg.sender) {
        courses = 0;
    }

    function createCourse(string memory _name, string memory _description, uint256 _price) external {
        CourseDetails memory course = CourseDetails(courses, _name, _description, _price, msg.sender);
        s_courseDetails[courses] = course;
        s_creatorToCourseDetails[msg.sender].push(course);
        courses++;
    }

    function purchaseCourse(uint256 _index) public payable {
        if (_index <= courses) {
            revert CourseDoesNotExist();
        }
        require(msg.value >= s_courseDetails[_index].price, "Incorrect amount sent");
        CourseDetails memory course = s_courseDetails[_index];
        address creator = course.creator;
        s_creatorToAmountEarned[creator] += course.price;
        s_addressToAmountSpent[msg.sender] += course.price;
        s_learnerToCoursesPurchased[msg.sender].push(_index);
        if (msg.value > course.price) {
            (bool callSuccess,) = payable(msg.sender).call{value: msg.value - course.price}("");
            require(callSuccess, "Refund failed");
        }
        emit CoursePurchased(course.name, msg.sender, creator, course.price);
    }

    function creatorWithdrawal(uint256 _withdrawalAmount) public payable {
        if (_withdrawalAmount == 0) {
            revert ZeroAmount();
        }
        uint256 amountEarned = s_creatorToAmountEarned[msg.sender];
        if (amountEarned < _withdrawalAmount) {
            revert NotEnoughFunds(amountEarned, _withdrawalAmount);
        }
        s_creatorToAmountEarned[msg.sender] -= _withdrawalAmount;
        (bool callSuccess,) = payable(msg.sender).call{value: _withdrawalAmount}("");
        require(callSuccess, "Call failed");
    }

    function getCourseDetails(uint256 _courseIndex) public view returns (CourseDetails memory) {
        return s_courseDetails[_courseIndex];
    }

    function getAllCourseDetails() public view returns (CourseDetails[] memory) {
        uint256 totalCourses = courses;
        CourseDetails[] memory allCourses = new CourseDetails[](totalCourses);
        for (uint256 i = 0; i <= totalCourses; i++) {
            allCourses[i] = s_courseDetails[i];
        }
        return allCourses;
    }

    function getCoursesPurchased(address _learner) external view returns (CourseDetails[] memory) {
        uint256[] memory coursesPurchased = s_learnerToCoursesPurchased[_learner];
        uint256 totalCourses = coursesPurchased.length;
        CourseDetails[] memory allCourses = new CourseDetails[](totalCourses);
        for (uint256 i = 0; i < totalCourses; i++) {
            allCourses[i] = s_courseDetails[coursesPurchased[i]];
        }
        return allCourses;
    }

    function removeCourse(uint256 _index) external onlyOwner {
        uint256 lastCourse = courses;
        CourseDetails memory course = s_courseDetails[_index];
        uint256 creatorCourses = s_creatorToCourseDetails[course.creator].length;
        // remove the course from the creator's list of courses
        for (uint256 i = 0; i < creatorCourses; i++) {
            if (s_creatorToCourseDetails[course.creator][i].courseId == course.courseId) {
                s_creatorToCourseDetails[course.creator][i] =
                    s_creatorToCourseDetails[course.creator][creatorCourses - 1];
                delete s_creatorToCourseDetails[course.creator][creatorCourses - 1];
                break;
            }
        }
        s_courseDetails[_index] = s_courseDetails[lastCourse];
        delete s_courseDetails[lastCourse];
        courses--;
    }

    fallback() external payable {}

    receive() external payable {}
}
