import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { spacing } from "@/constants/spacings";
import ContinueLearnCard from "./ContinueLearnCard";
import { continueLearningCourses } from "@/constants/data";

const Continue = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 24,
        }}
      >
        Hi Sylus Abel,
      </Text>
      <Text
        style={{
          fontFamily: "WorkSansLight",
          fontSize: 16,
          marginTop: 4,
        }}
      >
        What Would you like to learn Today?
      </Text>
      <FlatList
        data={continueLearningCourses}
        renderItem={({ item }) => (
          <ContinueLearnCard continueLearningItem={item} />
        )}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Continue;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.componentTopMargin,
    paddingHorizontal: spacing.horizontalPadding,
  },
});
