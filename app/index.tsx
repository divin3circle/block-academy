import { Link, useRouter } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/index.png")}
        style={{
          objectFit: "contain",
          height: width * 0.9,
          width: width,
        }}
      />
      <Text
        style={{
          fontSize: 34,
          fontFamily: "WorkSansSemibold",
          width: width * 0.7,
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 34,
          fontFamily: "WorkSansSemibold",
          width: width * 0.7,
          marginTop: 5,
        }}
      >
        Block Academy
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "WorkSansRegular",
          width: width * 0.7,
          marginTop: 20,
        }}
      >
        Experience the future of education with smart tutoring, interactive
        challenges, and decentralized rewards.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.light.primary,
          padding: 10,
          paddingVertical: 15,
          width: width * 0.7,
          borderRadius: 10,
          marginTop: 40,
          alignItems: "center",
        }}
        onPress={() => router.push("/onboarding")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "WorkSansSemibold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
