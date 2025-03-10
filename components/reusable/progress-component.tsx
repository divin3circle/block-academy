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
        height: 10,
        borderRadius: 14,
        backgroundColor: Colors.light.muted,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.primary,
          width: innerWidth,
          height: 10,
          borderRadius: 14,
          borderColor: Colors.light.titles,
          borderWidth: 1,
        }}
      ></View>
    </View>
  );
};

export default CustomProgress;

const styles = StyleSheet.create({});
