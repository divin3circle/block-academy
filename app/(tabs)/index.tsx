import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Progress from "@/components/home/progress";
import Continue from "@/components/home/continue";
import Friends from "@/components/home/friends";
import Upcoming from "@/components/home/upcoming";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Progress showNotifications />
        <Continue />
        <Friends />
        <Upcoming />
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
