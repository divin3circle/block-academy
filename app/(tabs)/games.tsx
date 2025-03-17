import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import Progress from "@/components/home/progress";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { spacing } from "@/constants/spacings";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const games = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <BlurView intensity={100} style={styles.progressContainer}>
        <Progress />
        <View
          style={{
            borderRadius: 27,
            height: 54,
            width: 54,
            borderColor: Colors.light.muted,
            borderWidth: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 14,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: Colors.light.primary,
              width: 18,
              height: 18,
              borderRadius: 10,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#f6f7f9",
                fontFamily: "WorkSansSemibold",
                fontSize: 14,
              }}
            >
              5
            </Text>
          </View>
          <Ionicons name="flame" size={26} color={Colors.light.primary} />
        </View>
      </BlurView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gameContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 18,
              }}
            >
              Bug Bounty
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
              onPress={() => router.navigate("/bug-bounty")}
            >
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  color: Colors.light.primary,
                }}
              >
                Play
              </Text>
              <Ionicons
                name="arrow-forward"
                size={16}
                color={Colors.light.primary}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              lineHeight: 22,
            }}
          >
            Solve and Identify bugs in you favorite programming language to
            increase you experience points.
          </Text>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing.componentTopMargin,
            }}
          >
            <Image
              source={require("../../assets/images/bugbounty.webp")}
              contentFit="contain"
              transition={1000}
              style={{
                width: 300,
                height: 300,
              }}
            />
          </View>
        </View>
        <View style={styles.gameContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 18,
              }}
            >
              Head 2 Head
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
              onPress={() => {}}
              disabled
            >
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  color: Colors.light.muted,
                }}
              >
                Coming Soon
              </Text>
              <Ionicons
                name="arrow-forward"
                size={16}
                color={Colors.light.primary}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              lineHeight: 22,
            }}
          >
            Choose you language and compete with others users for limited NFTs
            and weekly points
          </Text>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing.componentTopMargin,
            }}
          >
            <Image
              source={require("../../assets/images/h2h.png")}
              contentFit="contain"
              transition={1000}
              style={{
                width: 300,
                height: 250,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
  },
  progressContainer: {
    paddingVertical: 6,
    borderBottomWidth: 0.12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.light.muted,
    paddingBottom: 7,
  },
  gameContainer: {
    paddingHorizontal: spacing.horizontalPadding,
    paddingTop: spacing.horizontalPadding * 2,
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 7,
  },
});
