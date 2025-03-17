import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import CodeBlock from "@/components/reusable/CodeBlock";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import LoadingCard from "@/components/reusable/LoadingCard";
import { LoadingCardProps } from "@/utils/types";

const loadingStatus: LoadingCardProps = {
  status: "loading",
  title: "Checking with our AI",
  description:
    "We're cross checking your response with our AI, this shouldn't take long",
  next: "/bug-bounty",
  animationPath: require("../../assets/lottie/loadingCode.json"),
};
const successStatus: LoadingCardProps = {
  status: "success",
  title: "Correct you Got it!",
  description:
    "In python we use the print statement to directly print to the console.",
  next: "/bug-bounty",
  animationPath: require("../../assets/lottie/correctCode.json"),
};
const failedStatus: LoadingCardProps = {
  status: "failed",
  title: "Oops, Not quite.",
  description:
    "That's not quite right, feel free to head back and change difficulty or try again.",
  next: "/bug-bounty",
  animationPath: require("../../assets/lottie/wrongCode.json"),
};
const errorStatus: LoadingCardProps = {
  status: "error",
  title: "Something went Wrong",
  description:
    "Seems like something broke on our end.Please bare with us and try again in a few minutes.",
  next: "/bug-bounty",
  animationPath: require("../../assets/lottie/failed.json"),
};

const AIChat = () => {
  const { id, level } = useLocalSearchParams();
  const gameLevel = JSON.parse(level as string);
  const [loading, setIsLoading] = useState(true);
  const [userAns, setUSerAns] = useState("");
  const [status, setStatus] = useState<LoadingCardProps | undefined>(undefined);

  async function checkUserAnswer() {
    setIsLoading(true);
    //set status loading, title: Checking with our AI, desc: We're cross checking
    //your response with our AI, this shouldn't take long, next: disabled
    //try to make an api call to our Masumi AI Agent
    //if success, return true or false plus short explanation why
    //set the status to res.status, title to "Correct / Opps you
    //got that right / wrong", description: res.message, next: "/bug-bounty"
    //setIsLoading to false
    //if call fails, set status to false, title to an error occurred,
    // desc: something went wrong on our side, next: try again
    setIsLoading(false);
  }

  return (
    <>
      {!loading ? (
        <LoadingCard status={successStatus} />
      ) : (
        <SafeAreaView style={styles.container}>
          <View
            style={{
              marginVertical: spacing.componentTopMargin / 2,
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              Seen the Bug
            </Text>
            <Text
              style={{
                fontFamily: "WorkSansRegular",
                fontSize: 14,
                textAlign: "center",
                color: Colors.light.subtitles,
              }}
            >
              Tell our AI where the bug is and a potential solution to earn
              points.
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: spacing.horizontalPadding,
            }}
          >
            <CodeBlock code={gameLevel.bug.code} language="python" />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 40,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TextInput
              onChangeText={() => {}}
              placeholder="Enter your answer here"
              autoCapitalize="none"
              autoCorrect={false}
              style={{
                backgroundColor: Colors.light.background,
                width: "90%",
                height: 60,
                borderRadius: 10,
                padding: 10,
                borderColor: Colors.light.primary,
                borderWidth: 1,
                fontFamily: "WorkSansRegular",
              }}
            />
            <TouchableOpacity
              style={{
                width: "90%",
                height: 50,
                backgroundColor: Colors.light.primary,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                flexDirection: "row",
                gap: 4,
                marginTop: 10,
              }}
              onPress={checkUserAnswer}
            >
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  fontSize: 16,
                  textAlign: "center",
                  color: "#f6f7f9",
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default AIChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
});
