import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Progress from "@/components/home/progress";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const games = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
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
              backgroundColor: "#fff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                fontFamily: "WorkSansSemibold",
                fontSize: 16,
              }}
            >
              5
            </Text>
          </View>

          <Ionicons name="flame" size={26} color={Colors.light.primary} />
        </View>
      </View>
    </View>
  );
};

export default games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progressContainer: {
    paddingVertical: 6,
    borderBottomWidth: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.light.muted,
  },
});
