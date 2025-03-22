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
import { Course, Module, Slide } from "@/constants/types";
import { Image } from "expo-image";
import { spacing } from "@/constants/spacings";
import { Instructor } from "@/utils/types";
import { courses, instructors } from "@/constants/data";

const { width } = Dimensions.get("window");

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 6,
      }}
      onPress={() => router.navigate("/(tabs)/profile")}
    >
      <View>
        <Image
          source={instructor.image}
          contentFit="contain"
          transition={1000}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
          }}
        >
          {instructor.name}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
          }}
        >
          {instructor.role}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function SlidesCard({ slide }: { slide: Slide }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/blocklogo.png")}
          contentFit="cover"
          transition={1000}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 16,
            }}
          >
            {slide.title}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSansLight",
            }}
          >
            {slide.summary.substring(0, 20)}...
          </Text>
        </View>
      </View>
    </View>
  );
}

function ModuleCard({ module }: { module: Module }) {
  const [expand, setExpand] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        minHeight: 60,
        padding: spacing.horizontalPadding,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => setExpand(!expand)}
      >
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 20,
            width: "75%",
          }}
        >
          {module.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Ionicons
            name="document-outline"
            size={16}
            color={Colors.light.muted}
          />
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
            }}
          >
            {module.slides.length} Slides
          </Text>
        </View>
      </TouchableOpacity>
      {expand && (
        <View
          style={{
            flexDirection: "column",
            gap: spacing.componentTopMargin / 3,
            marginTop: spacing.componentTopMargin / 3,
          }}
        >
          {module.slides.map((slide) => (
            <SlidesCard slide={slide} />
          ))}
        </View>
      )}
    </View>
  );
}

const CoursePage = () => {
  const { id } = useLocalSearchParams();
  const course = courses.find((course) => course.id === id);

  const router = useRouter();
  const [cardContent, setCardContent] = useState<"about" | "curriculum">(
    "curriculum"
  );

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

  const handleNavigateToLearn = async () => {
    // check if the user has already purchased
    // this course, if not initiate a wallet
    // popover message to sign the txn
    // navigate to the course's leaning page
    router.push({
      pathname: "/learn/[id]",
      params: { id: course.id },
    });
  };

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
          source={course.logo}
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
                {course.topic}
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
                  {course.rating}
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
              {course.name}
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
                  {course.enrolledUsers} Enrolled
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
                  {course.modules.length} Modules
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
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  cardContent === "about" ? Colors.light.tint : "transparent",
                width: "50%",
                padding: spacing.horizontalPadding,
                borderRadius: 10,
              }}
              onPress={() => setCardContent("about")}
            >
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 16,
                }}
              >
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  cardContent === "curriculum"
                    ? Colors.light.tint
                    : "transparent",
                width: "50%",
                padding: spacing.horizontalPadding,
                borderRadius: 10,
              }}
              onPress={() => setCardContent("curriculum")}
            >
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 16,
                }}
              >
                Curriculum
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 14,
            }}
          >
            {cardContent === "about" && (
              <View>
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 20,
                    marginTop: spacing.componentTopMargin / 2,
                  }}
                >
                  Instructors
                </Text>
                {instructors.map((instructor) => (
                  <InstructorCard instructor={instructor} />
                ))}
                <Text
                  style={{
                    fontFamily: "WorkSansLight",
                    lineHeight: 26,
                    fontSize: 16,
                    marginTop: spacing.componentTopMargin / 2,
                  }}
                >
                  Start your journey with the public Hedera network by learning
                  the basics — from understanding the network’s architecture to
                  who’s building next-generation applications, you’ll have a
                  proper foundation to start building. Continue utilizing
                  familiar Ethereum development tools such as Web3.js, Truffle,
                  Ethers, Hardhat, and Foundry to build on Hedera using the
                  JSON-RPC Relay. As an Ethereum developer, your workflow does
                  not have to change.
                </Text>
              </View>
            )}
            {cardContent === "curriculum" && (
              <View
                style={{
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 8,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 20,
                    marginTop: 14,
                  }}
                >
                  Modules
                </Text>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 4,
                    marginTop: 7,
                  }}
                >
                  {course.modules.map((module) => (
                    <ModuleCard module={module} />
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleNavigateToLearn}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: "#f6f7f9",
          }}
        >
          Enroll, {"(FREE)"}
        </Text>
        <Ionicons name="arrow-forward-circle" color="#f6f7f9" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 14,
          height: 50,
          backgroundColor: Colors.light.tint,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          flexDirection: "row",
          gap: 4,
          position: "sticky",
          bottom: 0,
          marginVertical: 0,
          zIndex: 60,
        }}
        onPress={() => router.replace("/quiz/1")}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: Colors.light.titles,
          }}
        >
          Take Quiz
        </Text>
        <Ionicons
          name="arrow-forward-circle"
          color={Colors.light.titles}
          size={20}
        />
      </TouchableOpacity>
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

    width: width * 0.9,
    zIndex: 50,
    backgroundColor: "#f6f7f9",
    padding: spacing.horizontalPadding,
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
    position: "sticky",
    bottom: 0,
    marginVertical: 30,
    zIndex: 60,
  },
});
