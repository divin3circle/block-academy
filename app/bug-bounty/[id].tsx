import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { bugBusterPython } from "@/constants/data";

const Bounty = () => {
  const { id } = useLocalSearchParams();
  const bountyLevel = bugBusterPython.levels.find((level) => level.name === id);
  if (!bountyLevel) {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
          }}
        >
          Level not found
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Bounty: {bountyLevel?.name}</Text>
    </View>
  );
};

export default Bounty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
