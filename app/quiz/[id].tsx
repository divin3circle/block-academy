import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { courses } from "@/constants/data";
import { Colors } from "@/constants/colors";
import { spacing } from "@/constants/spacings";
import { Quiz as QuizType, UserOptions } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";

function QuestionCard({
  quiz,
  index,
  selectedOption,
  setSelectedOption,
  submitted,
}: {
  index: number;
  quiz: QuizType;
  selectedOption: number | null;
  setSelectedOption: (index: number, optionIndex: number) => void;
  submitted: boolean;
}) {
  // Check if the selected answer is correct
  const isCorrect =
    selectedOption !== null &&
    quiz.questions[0].options[selectedOption].option ===
      quiz.questions[0].answer;

  return (
    <View
      style={{
        marginVertical: spacing.componentTopMargin / 2,
        // Add a colored border if submitted
        ...(submitted && {
          borderWidth: 2,
          borderRadius: 16,
          padding: 12,
          borderColor: isCorrect ? "#4CAF50" : "#e50303",
          backgroundColor: isCorrect
            ? "rgba(76, 175, 80, 0.1)"
            : "rgba(255, 82, 82, 0.1)",
        }),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 20,
          }}
        >
          {index + 1}. {quiz.name}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 16,
            color: Colors.light.primary,
          }}
        >
          +{quiz.maxPoints} XP
        </Text>
      </View>
      <View
        style={{
          marginTop: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 18,
            marginVertical: 4,
          }}
        >
          {quiz.questions[0].question}
        </Text>
        {quiz.questions[0].options.map((option, i) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor:
                selectedOption === i
                  ? Colors.light.primary
                  : submitted && option.option === quiz.questions[0].answer
                  ? "#4CAF50" // Highlight correct answer when submitted
                  : Colors.light.tint,
              borderRadius: 14,
              backgroundColor:
                selectedOption === i
                  ? Colors.light.primary
                  : submitted && option.option === quiz.questions[0].answer
                  ? "rgba(76, 175, 80, 0.2)" // Light green for correct answer
                  : "#f6f7f9",
              marginVertical: 4,
            }}
            onPress={() => !submitted && setSelectedOption(index, i)}
            key={i}
            disabled={submitted} // Disable selection after submission
          >
            <Text
              style={{
                fontFamily:
                  selectedOption === i ? "WorkSansSemibold" : "WorkSansRegular",
                fontSize: 16,
                lineHeight: 26,
                color:
                  selectedOption === i
                    ? "#f6f7f9"
                    : submitted && option.option === quiz.questions[0].answer
                    ? "#4CAF50" // Green text for correct answer
                    : Colors.light.titles,
              }}
            >
              {option.option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Show feedback message if submitted */}
      {submitted && (
        <Text
          style={{
            marginTop: 10,
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: isCorrect ? "#4CAF50" : "#FF5252",
          }}
        >
          {isCorrect
            ? "✓ Correct!"
            : "✗ Incorrect. The correct answer is: " + quiz.questions[0].answer}
        </Text>
      )}
    </View>
  );
}

const Quiz = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 16,
          }}
        >
          Course with id {id} could not be found.
        </Text>
        <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 16,
              color: Colors.light.primary,
            }}
          >
            Back Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Initialize selected options array if empty
  if (selectedOptions.length === 0 && course.bountyQuiz.length > 0) {
    setSelectedOptions(new Array(course.bountyQuiz.length).fill(null));
  }

  const handleOptionSelect = (quizIndex: number, optionIndex: number) => {
    const newOptions = [...selectedOptions];
    newOptions[quizIndex] = optionIndex;
    setSelectedOptions(newOptions);
  };

  const handleSubmit = () => {
    // Calculate score
    let newScore = 0;

    course.bountyQuiz.forEach((quiz, index) => {
      const selectedOption = selectedOptions[index];
      if (
        selectedOption !== null &&
        quiz.questions[0].options[selectedOption].option ===
          quiz.questions[0].answer
      ) {
        newScore += quiz.maxPoints;
      }
    });

    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text
        style={{
          fontFamily: "WorkSansRegular",
          fontSize: 18,
          textAlign: "center",
          color: Colors.light.titles,
          marginVertical: 10,
        }}
      >
        {course.name} Bounty Quiz
      </Text>

      {/* Score display when submitted */}
      {submitted && (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Your Score: {score} /{" "}
            {course.bountyQuiz.reduce(
              (total, quiz) => total + quiz.maxPoints,
              0
            )}{" "}
            points
          </Text>
          <Text style={styles.scoreSubtext}>
            {score >=
            course.bountyQuiz.reduce(
              (total, quiz) => total + quiz.maxPoints,
              0
            ) *
              0.7
              ? "Excellent work! You've earned bounty points!"
              : "Keep studying to improve your score."}
          </Text>
        </View>
      )}

      {course.bountyQuiz.map((quiz, index) => (
        <QuestionCard
          index={index}
          key={index}
          quiz={quiz}
          selectedOption={selectedOptions[index]}
          setSelectedOption={handleOptionSelect}
          submitted={submitted}
        />
      ))}

      {!submitted ? (
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 16,
              color: "#f6f7f9",
            }}
          >
            Submit Answers
          </Text>
          <Ionicons name="arrow-forward-circle" color="#f6f7f9" size={20} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: "#4CAF50" }}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 16,
              color: "#f6f7f9",
            }}
          >
            Back to Home
          </Text>
          <Ionicons name="home" color="#f6f7f9" size={20} />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: spacing.horizontalPadding,
  },
  btn: {
    marginHorizontal: 14,
    height: 50,
    backgroundColor: Colors.light.primary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
    gap: 4,
    marginVertical: 20,
    zIndex: 60,
  },
  scoreContainer: {
    backgroundColor: "#E3F2FD",
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
    alignItems: "center",
  },
  scoreText: {
    fontFamily: "WorkSansSemibold",
    fontSize: 20,
    color: "#1976D2",
    marginBottom: 8,
  },
  scoreSubtext: {
    fontFamily: "WorkSansRegular",
    fontSize: 16,
    color: "#424242",
    textAlign: "center",
  },
});
