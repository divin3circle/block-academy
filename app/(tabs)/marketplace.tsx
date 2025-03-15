import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { courses } from "@/constants/data";
import CourseCard from "@/components/reusable/courseCard";
import { spacing } from "@/constants/spacings";

const marketplace = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: spacing.componentTopMargin,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 24,
          }}
        >
          Buy & Access Courses
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Buy & Access Courses
        </Text>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 14,
        }}
      />
    </View>
  );
};

export default marketplace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.horizontalPadding,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
