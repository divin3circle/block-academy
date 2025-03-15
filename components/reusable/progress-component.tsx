import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { ProgressProps } from "@/constants/types";

const CustomProgress = ({
  progressDetails,
}: {
  progressDetails: ProgressProps;
}) => {
  const innerWidth = (progressDetails.value / 100) * progressDetails.width;
  return (
    <View
      style={{
        width: progressDetails.width,
        height: progressDetails.height ? progressDetails.height - 1 : 10,
        borderRadius: 14,
        backgroundColor: Colors.light.muted,
      }}
    >
      <View
        style={{
          backgroundColor: progressDetails.fillColor
            ? progressDetails.fillColor
            : Colors.light.primary,
          width: innerWidth,
          height: progressDetails.height ? progressDetails.height : 10,
          borderRadius: 14,
          borderColor: "#000",
          borderWidth: 1,
        }}
      ></View>
    </View>
  );
};

export default CustomProgress;

const styles = StyleSheet.create({});
