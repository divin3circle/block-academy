import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
import { spacing } from "@/constants/spacings";
import CustomProgress from "../reusable/progress-component";

const Progress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/p1.avif")}
          alt="profile image"
          style={styles.image}
        />
        <View
          style={{
            flexDirection: "column",
            gap: 4,
          }}
        >
          <View style={styles.progress}>
            <Text
              style={{
                fontFamily: "WorkSansRegular",
                fontSize: 16,
              }}
            >
              My Progress
            </Text>
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 16,
                color: Colors.light.primary,
              }}
            >
              322 XP
            </Text>
          </View>
          <CustomProgress
            progressDetails={{
              width: 250,
              value: 50,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: 44,
          width: 44,
          borderColor: Colors.light.muted,
          borderRadius: 22,
          borderWidth: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <View
          style={{
            width: 14,
            height: 14,
            backgroundColor: Colors.light.primary,
            borderRadius: 7,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 11,
              fontFamily: "WorkSansRegular",
            }}
          >
            2
          </Text>
        </View>
        <Ionicons name="notifications" color={Colors.light.muted} size={30} />
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.horizontalPadding,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    marginTop: 4,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250,
  },
});
