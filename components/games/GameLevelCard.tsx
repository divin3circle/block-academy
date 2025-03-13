import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Level } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { spacing } from "@/constants/spacings";
import { Image } from "expo-image";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

function getRandomAngle() {
  const angles = [-45, 0, 45, 70, 110, 150];
  return angles[Math.floor(Math.random() * angles.length)];
}

const GameLevelCard = ({ level }: { level: Level }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: level.bgColor,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 4,
        }}
      >
        <View style={[styles.infoContainer, ,]}>
          <MaterialCommunityIcons
            name="bug-check"
            size={16}
            color={level.color}
          />
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 16,
              color: level.color,
            }}
          >
            2 Bugs
          </Text>
        </View>
        <View style={[styles.infoContainer]}>
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              fontSize: 14,
              color: level.color,
            }}
          >
            + {level.points} XP
          </Text>
        </View>
      </View>
      <Link
        href={{
          pathname: "/bug-bounty/[id]",
          params: { id: level.name },
        }}
        asChild
        style={{
          position: "absolute",
          bottom: 10,
          marginHorizontal: spacing.horizontalPadding / 2,
          borderColor: level.color,
          borderWidth: 1,
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 6,
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: level.color,
            textAlign: "center",
          }}
        >
          {level.name}
        </Text>
      </Link>
      <Image
        source={level.image}
        style={{
          width: 50,
          height: 50,
          position: "absolute",
          top: 2,
          right: 0,
          transform: [{ rotate: `${getRandomAngle()}deg` }],
        }}
      />
    </View>
  );
};

export default GameLevelCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,
    height: width / 2.5,
    marginVertical: 14,
    marginHorizontal: 14,
    borderRadius: 14,
    padding: 7,
    position: "relative",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    width: "50%",
    padding: 2,
    borderRadius: 4,
  },
});
