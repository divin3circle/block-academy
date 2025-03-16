import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Lottie from "lottie-react-native";
import { LoadingCardProps } from "@/utils/types";
import { Colors } from "@/constants/colors";

const { width, height } = Dimensions.get("window");

const LoadingCard = ({ status }: { status: LoadingCardProps | undefined }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: width * 0.9,
          width: width * 0.9,
          paddingTop: 40,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <Image
          source={require("../../assets/images/success.png")}
          style={{ width: 150, height: 150 }}
        /> */}
        <Lottie
          source={status?.animationPath}
          autoPlay
          loop
          style={{
            width: "45%",
            height: "45%",
          }}
        />
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 20,
            textAlign: "center",
            color: "black",
            marginTop: 30,
          }}
        >
          {status?.title}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 14,
            textAlign: "center",
            color: "black",
            lineHeight: 20,
            marginTop: 10,
          }}
        >
          {status?.description}
        </Text>
        {status?.status === "loading" ? (
          <ActivityIndicator
            size="large"
            color={Colors.light.primary}
            style={{ marginTop: 20 }}
          />
        ) : (
          <Link
            href={"/bug-bounty"}
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 16,
              color: Colors.light.primary,
              marginTop: 24,
            }}
          >
            Try Another
          </Link>
        )}
      </View>
    </View>
  );
};

export default LoadingCard;

const styles = StyleSheet.create({});
