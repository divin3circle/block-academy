import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { bugBusterPython } from "@/constants/data";
import { Image } from "expo-image";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import CodeBlock from "@/components/reusable/CodeBlock";

const Bounty = () => {
  const { id } = useLocalSearchParams();
  const bountyLevel = bugBusterPython.levels.find((level) => level.name === id);
  if (!bountyLevel) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
          }}
        >
          Level not found
        </Text>
      </View>
    );
  }
  const difficulty =
    bountyLevel.name === "Ant" || bountyLevel.name === "Ladybug"
      ? "Easy"
      : bountyLevel.name === "Cockroach" || bountyLevel.name === "Fly"
      ? "Medium"
      : "Hard";

  const { height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.headerContainer}>
          <Image
            source={bountyLevel.image}
            contentFit="contain"
            transition={1000}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  fontSize: 18,
                }}
              >
                {bountyLevel.name} Level
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                }}
              >
                {difficulty}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 1,
          }}
        >
          <View style={[styles.infoContainer]}>
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 18,
                color: bountyLevel.color,
              }}
            >
              + {bountyLevel.points} XP
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 14,
            color: Colors.light.subtitles,
          }}
        >
          {bountyLevel.bug.question}
        </Text>

        <CodeBlock code={bountyLevel.bug.code} language="python" />

        <Link
          href={{
            pathname: "/bug-bounty/ai-chat",
            params: {
              id: bountyLevel.name,
              level: JSON.stringify(bountyLevel),
            },
          }}
          asChild
          style={{
            marginHorizontal: spacing.horizontalPadding / 2,
            borderColor: Colors.light.primary,
            backgroundColor: Colors.light.primary,
            borderWidth: 1,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            borderRadius: 7,
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 16,
              color: "#f6f7f8",
              textAlign: "center",
            }}
          >
            Eureka! 🎉
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Bounty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: spacing.horizontalPadding,
    position: "relative",
  },
  headerContainer: {
    marginTop: spacing.componentTopMargin / 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
  },
  contentContainer: {
    marginTop: spacing.componentTopMargin,
  },
});
