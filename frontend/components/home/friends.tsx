import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { spacing } from "@/constants/spacings";
import { friends } from "@/constants/data";
import FriendCard from "../reusable/FriendCard";

const Friends = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 24,
        }}
      >
        My Friends
      </Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => <FriendCard friend={item} />}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.componentTopMargin,
    paddingHorizontal: spacing.horizontalPadding,
  },
});
