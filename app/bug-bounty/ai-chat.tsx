import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const AIChat = () => {
  const { id, level } = useLocalSearchParams();
  console.log(JSON.parse(level as string));
  return (
    <View>
      <Text>AIChat</Text>
    </View>
  );
};

export default AIChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
