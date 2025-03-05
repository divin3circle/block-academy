import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";
import Lottie from "lottie-react-native";
import { Colors } from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const onboarding = () => {
  const router = useRouter();

  const handleDone = () => {
    router.push("/sigin");
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={() => (
          <TouchableOpacity onPress={handleDone}>Register</TouchableOpacity>
        )}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: Colors.light.tint,
            titleStyles: {
              fontFamily: "WorkSansBold",
            },
            subTitleStyles: {
              fontFamily: "WorkSansRegular",
              lineHeight: 24,
              fontSize: 16,
            },
            image: (
              <Lottie
                source={require("../assets/lottie/how.json")}
                autoPlay
                loop
                style={{
                  width: 300,
                  height: 400,
                }}
              />
            ),
            title: "Block Academy",
            subtitle:
              "Discover a new era of learning, where gamification meets AI and DeFi. Dive into a dynamic platform that transforms education into an engaging, rewarding experience",
          },
          {
            backgroundColor: Colors.light.primary,
            titleStyles: {
              fontFamily: "WorkSansBold",
            },
            subTitleStyles: {
              fontFamily: "WorkSansRegular",
              lineHeight: 24,
              fontSize: 16,
            },
            image: (
              <View>
                <Lottie
                  source={require("../assets/lottie/two.json")}
                  autoPlay
                  loop
                  style={styles.animationContainer}
                />
              </View>
            ),
            title: "Learn, Earn, and Grow",
            subtitle:
              "Engage with interactive quizzes and personalized guidance from our smart AI assistant. Earn tokens as you master new skills and track your progress every step of the way",
          },
          {
            backgroundColor: Colors.light.secondary,

            titleStyles: {
              color: "#fff",
              fontFamily: "WorkSansBold",
            },
            subTitleStyles: {
              color: "#fff",
              fontFamily: "WorkSansRegular",
              lineHeight: 24,
              fontSize: 16,
            },
            image: (
              <View style={styles.animationContainer}>
                <Lottie
                  source={require("../assets/lottie/wallet.json")}
                  autoPlay
                  loop
                  style={styles.animationContainer}
                />
              </View>
            ),
            title: "Trade & Thrive",
            subtitle:
              "Unlock a decentralized marketplace for educational content. Buy, sell, and trade high-quality learning assets seamlessly, and turn your achievements into real-world rewards",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  animationContainer: {
    width: width * 0.9,
    height: width,
  },
});

export default onboarding;
