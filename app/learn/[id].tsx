import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Course, Module } from "@/constants/types";
import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { spacing, windowWidth } from "@/constants/spacings";
import Progress from "@/components/home/progress";
import { Ionicons } from "@expo/vector-icons";

const LearnCourse = () => {
  const { course } = useLocalSearchParams();
  const parsedCourse: Course = JSON.parse(course as string);
  const [module, setModule] = useState<Module>(parsedCourse.modules[0]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansLight",
            fontSize: 16,
            textAlign: "center",
            color: Colors.light.primary,
          }}
        >
          {parsedCourse.name}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {module.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={module.bannerImage}
          contentFit="contain"
          transition={1000}
          style={{
            width: windowWidth * 0.9,
            height: windowWidth * 0.9,
            borderRadius: 14,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansLight",
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: spacing.horizontalPadding,
            marginBottom: spacing.componentTopMargin,
          }}
        >
          {module.about}
        </Text>
        <View style={{}}>
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
                color: Colors.light.titles,
                paddingHorizontal: 4,
                paddingVertical: 8,
              }}
            >
              My Progress
            </Text>
            <Text
              style={{
                fontFamily: "WorkSansRegular",
                fontSize: 14,
                color: Colors.light.titles,
                paddingHorizontal: 4,
                paddingVertical: 8,
              }}
            >
              Rank: 111 / 16,000
            </Text>
          </View>
          <Progress />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back-circle"
              color={Colors.light.titles}
              size={20}
            />
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 16,
                color: Colors.light.titles,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startBtn}>
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 16,
                color: "#f6f7f9",
              }}
            >
              {currentModuleIndex === 0
                ? "Start Learning"
                : "Continue Learning"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LearnCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: spacing.horizontalPadding * 2,
    gap: 16,
    marginTop: spacing.componentTopMargin,
  },
  backBtn: {
    height: 50,
    width: "25%",
    backgroundColor: Colors.light.tint,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    flexDirection: "row",
    gap: 4,
  },
  startBtn: {
    height: 50,
    width: "75%",
    backgroundColor: Colors.light.primary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    flexDirection: "row",
    gap: 4,
  },
});
