import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CourseCard from "../reusable/courseCard";
import { courses } from "@/constants/data";

const Upcoming = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 24,
          }}
        >
          Upcoming
        </Text>
        <TouchableOpacity onPress={() => router.navigate("/(tabs)/profile")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 14,
                color: Colors.light.primary,
              }}
            >
              SEE ALL
            </Text>
            <Ionicons
              name="arrow-forward"
              color={Colors.light.primary}
              size={14}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 7,
        }}
      />
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingBottom: 14,
        }}
      />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.horizontalPadding,
    marginTop: spacing.componentTopMargin,
    marginBottom: spacing.componentTopMargin,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
