import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
// import { Image } from "expo-image";

const { width, height } = Dimensions.get("window");
const SuccessCard = ({ loading }: { loading?: boolean }) => {
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
        <Image
          source={require("../assets/images/success.png")}
          style={{ width: 150, height: 150 }}
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
          Congratulations
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
          Your Account is Ready to Use. You will be redirected to the Home Page
          in a Few Seconds.
        </Text>
        {!loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.light.primary}
            style={{ marginTop: 20 }}
          />
        ) : (
          <Ionicons
            name="checkmark-circle"
            size={40}
            color={Colors.light.primary}
            style={{ marginTop: 20 }}
          />
        )}
      </View>
    </View>
  );
};

export default SuccessCard;

const styles = StyleSheet.create({});
