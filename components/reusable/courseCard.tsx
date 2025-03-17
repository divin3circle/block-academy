import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Course } from "@/constants/types";
import { Image } from "expo-image";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { spacing } from "@/constants/spacings";
import { Link, useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");

const CourseCard = ({ course }: { course: Course }) => {
  const parsedCourse = JSON.stringify(course);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          marginBottom: 8,
        }}
      >
        <Image
          source={course.logo}
          contentFit="cover"
          transition={1000}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 6,
          paddingHorizontal: spacing.horizontalPadding,
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
          <Link
            asChild
            href={{
              pathname: "/course/[id]",
              params: { id: course.id, course: parsedCourse },
            }}
            // style={styles.container}
          >
            <Ionicons
              name="arrow-forward"
              color={Colors.light.primary}
              size={22}
            />
          </Link>
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
    paddingBottom: 12,
    elevation: 20,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
