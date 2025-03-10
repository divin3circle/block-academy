import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Progress from "@/components/home/progress";
import Continue from "@/components/home/continue";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Progress />
      <Continue />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {},
});
