// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {RewardNft} from "src/RewardNFT.sol";

contract DeployRewardNFT is Script {
    function run() public {
        vm.startBroadcast();
        deployReward();
        vm.stopBroadcast();
    }

    function deployReward() public returns (address) {
        RewardNft rewardNFT = new RewardNft();
        address rewardNFTAddress = address(rewardNFT);
        return rewardNFTAddress;
    }
}
