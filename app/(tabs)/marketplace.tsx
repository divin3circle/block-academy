import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { courses } from "@/constants/data";
import CourseCard from "@/components/reusable/courseCard";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import Search from "@/components/reusable/Search";

const marketplace = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        style={{
          paddingBottom: 14,
        }}
        ListHeaderComponent={<Search />}
      />
    </SafeAreaView>
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
