import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={34} color={Colors.light.primary} />
        <TextInput
          onChangeText={() => {}}
          placeholder="Search"
          inputMode="text"
          autoCorrect={false}
          style={{
            padding: 10,
            fontFamily: "WorkSansRegular",
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: spacing.componentTopMargin / 2,
  },
  searchContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    backgroundColor: "#f6f7f9",
    borderColor: Colors.light.primary,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    height: 50,
    width: "95%",
    paddingHorizontal: spacing.horizontalPadding,
    elevation: 20,
    shadowColor: Colors.light.subtitles,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
