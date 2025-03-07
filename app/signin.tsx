import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { Colors } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

const sigin = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require("../assets/lottie/signin.json")}
        autoPlay
        loop
        style={{
          width: 300,
          height: 400,
        }}
      />
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 24,
        }}
      >
        Let's get started
      </Text>
      <Text
        style={{
          fontFamily: "WorkSansRegular",
          fontSize: 14,
          marginTop: 10,
        }}
      >
        Use your email to authenticate into Block Academy
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: Colors.light.tint,
          }}
        >
          Email sign in
        </Text>
        <AntDesign name="google" size={16} color="#E8F1FF" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 14,
          marginVertical: 40,
        }}
      >
        OR
      </Text>
      <Text
        style={{
          fontFamily: "WorkSansRegular",
          fontSize: 20,
          textDecorationLine: "underline",
        }}
      >
        Social sign in
      </Text>
      <View style={styles.socials}>
        <FontAwesome6 name="discord" size={44} color="#0961F5" />
        <FontAwesome5 name="spotify" size={44} color="#0961F5" />
        <FontAwesome5 name="telegram" size={44} color="#0961F5" />
        <FontAwesome name="github" size={44} color="#0961F5" />
      </View>
    </View>
  );
};

export default sigin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: Colors.light.tint,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: Colors.light.primary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    gap: 4,
    marginTop: 40,
  },
  socials: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
});
