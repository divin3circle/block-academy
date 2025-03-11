import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Progress from "@/components/home/progress";
import Continue from "@/components/home/continue";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Progress />
        <Continue />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
