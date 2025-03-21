import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Module, Slide } from "@/constants/types";
import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { spacing, windowWidth } from "@/constants/spacings";
import Progress from "@/components/home/progress";
import { Ionicons } from "@expo/vector-icons";
import { courses } from "@/constants/data";

const LearnCourse = () => {
  const { id } = useLocalSearchParams();
  const course = courses.find((course) => course.id === id);
  const [module, setModule] = useState<Module | null>(
    course?.modules[0] || null
  );
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [learning, setLearning] = useState(false);
  const router = useRouter();

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
          Courser with id {id} could not be found.
        </Text>
        <TouchableOpacity onPress={() => router.navigate("/(tabs)")}>
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
  if (!module) {
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
          Modules couldn't be loaded
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 16,
              color: Colors.light.primary,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  const ModuleIntro = () => {
    return (
      <View style={styles.container}>
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
            {course.name}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {module?.name || "Loading"}
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
            source={module?.bannerImage}
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
            {module?.about}
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
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => setLearning(true)}
            >
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  fontSize: 16,
                  color: "#f6f7f9",
                }}
              >
                {currentModuleIndex === 0
                  ? "Proceed to Module"
                  : "Continue Learning"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const Paragraph = ({ paragraph }: { paragraph: string }) => {
    return (
      <Text
        style={{
          fontFamily: "WorkSansRegular",
          fontSize: 18,
          lineHeight: 26,
        }}
      >
        {paragraph}
      </Text>
    );
  };

  const ModuleContent = () => {
    const [currentSlide, setCurrentSlide] = useState<Slide>(module.slides[0]);

    const handlePreviousSlide = () => {
      if (module.slides.indexOf(currentSlide) === 0) {
        router.back();
      }
      setCurrentSlide(module.slides[module.slides.indexOf(currentSlide) - 1]);
    };

    const handleNextSlide = () => {
      if (module.slides.indexOf(currentSlide) === module.slides.length - 1) {
        setCurrentSlide(module.slides[0]);
        router.navigate("/course/1");
        return;
      }
      setCurrentSlide(module.slides[module.slides.indexOf(currentSlide) + 1]);
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity
          style={[
            {
              marginHorizontal: spacing.horizontalPadding,
            },
          ]}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back-outline"
            color={Colors.light.titles}
            size={30}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 20,
              marginTop: 8,
              paddingVertical: spacing.horizontalPadding / 2,
              textAlign: "center",
            }}
          >
            {currentSlide.title}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSansLight",
              fontSize: 18,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            {currentSlide.summary}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: spacing.horizontalPadding,
          }}
        >
          <Image
            source={currentSlide.content[0].exampleImage}
            contentFit="cover"
            transition={1000}
            style={{
              width: windowWidth * 0.9,
              height: windowWidth * 0.7,
              borderRadius: 14,
              marginVertical: spacing.componentTopMargin / 2,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: spacing.horizontalPadding,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 18,
              marginVertical: spacing.componentTopMargin / 3,
            }}
          >
            {currentSlide.content[0].introductionParagraph}
          </Text>
          {currentSlide.content[0].AdditionalParagraph.split("\n").map(
            (paragraph) => (
              <Paragraph paragraph={paragraph} />
            )
          )}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={handlePreviousSlide}
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
          <TouchableOpacity style={styles.startBtn} onPress={handleNextSlide}>
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 16,
                color: "#f6f7f9",
              }}
            >
              {module.slides.indexOf(currentSlide) === module.slides.length - 1
                ? "Finish"
                : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {learning ? <ModuleContent /> : <ModuleIntro />}
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
