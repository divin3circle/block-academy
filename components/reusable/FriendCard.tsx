import { View, Text } from "react-native";
import React from "react";
import { Friend } from "@/constants/types";
import { Image } from "expo-image";
import { Colors } from "@/constants/colors";

const FriendCard = ({ friend }: { friend: Friend }) => {
  return (
    <View style={{}}>
      <Image
        source={friend.image}
        contentFit="contain"
        transition={1000}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          marginTop: 14,
          marginHorizontal: 4,
          borderWidth: 1,
          borderColor: Colors.light.muted,
        }}
      />
    </View>
  );
};

export default FriendCard;
