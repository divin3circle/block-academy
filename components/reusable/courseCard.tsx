import { Dimensions, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { Course } from "@/constants/types";
import { Image } from "expo-image";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { spacing } from "@/constants/spacings";
const { width, height } = Dimensions.get("window");

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={course.logo}
          contentFit="contain"
          transition={1000}
          style={{
            width: "100%",
            height: 150,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 6,
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
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              color: Colors.light.primary,
            }}
          >
            {course.topic}
          </Text>
          <Ionicons name="book" color={Colors.light.muted} size={16} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 18,
              color: Colors.light.titles,
            }}
          >
            {course.name}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              color: Colors.light.titles,
            }}
          >
            {course.bountyPoints} XP
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              color: Colors.light.subtitles,
            }}
          >
            {course.enrollmentFee}
          </Text>
          <View
            style={{
              height: 14,
              width: 2,
              backgroundColor: Colors.light.titles,
              marginHorizontal: 12,
            }}
          />
          <View
            style={{
              gap: 2,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="star" color={Colors.light.accent} size={14} />
            <Text
              style={{
                fontFamily: "WorkSansRegular",
                fontSize: 14,
                color: Colors.light.subtitles,
              }}
            >
              {course.rating}
            </Text>
          </View>
          <View
            style={{
              height: 14,
              width: 2,
              backgroundColor: Colors.light.titles,
              marginHorizontal: 12,
            }}
          />
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              color: Colors.light.subtitles,
            }}
          >
            {course.enrolledUsers} Enrolled
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    borderRadius: 15,
    backgroundColor: "#f6f7f9",
    paddingHorizontal: spacing.horizontalPadding,
    paddingBottom: 12,
    elevation: 20,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 8,
  },
});
