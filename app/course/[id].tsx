import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
import { Course } from "@/constants/types";
import { Image } from "expo-image";
import { spacing } from "@/constants/spacings";

const { width } = Dimensions.get("window");

const CoursePage = () => {
  const { id, course } = useLocalSearchParams();
  const router = useRouter();
  const parsedCourse: Course = JSON.parse(course as string);
  const [cardContent, setCardContent] = useState<"about" | "instructors">(
    "about"
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          top: 40,
          left: 30,
          zIndex: 40,
        }}
      >
        <Ionicons
          name="arrow-back-circle"
          color={Colors.light.primary}
          size={44}
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <Image
          source={parsedCourse.logo}
          contentFit="cover"
          transition={1000}
          style={{
            width: width,
            height: 200,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          marginTop: 100,
        }}
      >
        <View style={styles.mainContent}>
          <View
            style={{
              marginTop: spacing.componentTopMargin,
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
                  fontSize: 16,
                  color: Colors.light.primary,
                }}
              >
                {parsedCourse.topic}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons name="star" color={Colors.light.accent} size={16} />
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 16,
                    color: Colors.light.primary,
                  }}
                >
                  {parsedCourse.rating}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 24,
                color: Colors.light.titles,
                paddingVertical: 4,
              }}
            >
              {parsedCourse.name}
            </Text>
            <View
              style={{
                marginTop: spacing.componentTopMargin / 4,
                flexDirection: "row",
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons name="people" color={Colors.light.accent} size={16} />
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 16,
                    color: Colors.light.subtitles,
                  }}
                >
                  {parsedCourse.enrolledUsers} Enrolled
                </Text>
              </View>
              <View
                style={{
                  width: 2,
                  height: "100%",
                  backgroundColor: Colors.light.subtitles,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons name="book" color={Colors.light.accent} size={16} />
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 16,
                    color: Colors.light.subtitles,
                  }}
                >
                  {parsedCourse.modules.length} Modules
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 0,
              marginTop: 16,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.light.tint,
                width: "50%",
                padding: spacing.horizontalPadding,
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 16,
                }}
              >
                About
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: Colors.light.tint,
                width: "50%",
                padding: spacing.horizontalPadding,
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 16,
                }}
              >
                Curriculum
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 14,
            }}
          >
            {cardContent === "about" && (
              <Text
                style={{
                  fontFamily: "WorkSansLight",
                  lineHeight: 26,
                  fontSize: 16,
                }}
              >
                Start your journey with the public Hedera network by learning
                the basics — from understanding the network’s architecture to
                who’s building next-generation applications, you’ll have a
                proper foundation to start building.
              </Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CoursePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    position: "relative",
  },
  mainContent: {
    elevation: 20,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 24,
    height: width * 0.9,
    width: width * 0.9,
    zIndex: 50,
    backgroundColor: "#f6f7f9",
    padding: spacing.horizontalPadding,
  },
});
