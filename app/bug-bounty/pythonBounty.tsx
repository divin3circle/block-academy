import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Colors } from "@/constants/colors";
import { spacing } from "@/constants/spacings";
import { Ionicons } from "@expo/vector-icons";
import { bugBusterPython } from "@/constants/data";
import GameLevelCard from "@/components/games/GameLevelCard";

const Header = () => {
  return (
    <View
      style={{
        marginBottom: spacing.componentTopMargin / 2,
      }}
    >
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 16,
          textAlign: "center",
          marginTop: 7,
          color: Colors.light.subtitles,
        }}
      >
        Bounty Levels
      </Text>
      <Text
        style={{
          fontFamily: "WorkSansRegular",
          fontSize: 14,
          textAlign: "center",

          color: Colors.light.subtitles,
        }}
      >
        Hint: Difficult levels have more bounty awards
      </Text>
    </View>
  );
};

const pythonBounty = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: spacing.componentTopMargin / 2,
          paddingHorizontal: spacing.horizontalPadding,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFF3E0",
            }}
          >
            <Image
              source={require("../../assets/images/py.png")}
              contentFit="contain"
              transition={1000}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 16,
              textAlign: "center",
              marginTop: 7,
              color: Colors.light.subtitles,
            }}
          >
            Python
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Ionicons name="bug" size={16} color={Colors.light.muted} />
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 14,
                textAlign: "center",

                color: Colors.light.subtitles,
              }}
            >
              17 Bugs
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Ionicons name="flame" size={16} color={Colors.light.muted} />
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 14,
                textAlign: "center",

                color: Colors.light.subtitles,
              }}
            >
              100+ XP
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={bugBusterPython.levels}
        renderItem={({ item }) => <GameLevelCard level={item} />}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: spacing.horizontalPadding,
        }}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
};

export default pythonBounty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
