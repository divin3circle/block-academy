import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Lottie from "lottie-react-native";

const { width } = Dimensions.get("window");

const wallet = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginVertical: spacing.componentTopMargin / 2,
          paddingHorizontal: spacing.horizontalPadding,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansLight",
            fontSize: 16,
          }}
        >
          Good Afternoon,
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 20,
          }}
        >
          Sylus Abel
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: spacing.horizontalPadding,
        }}
      >
        <View style={styles.walletCard}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 26,
                  marginVertical: 4,
                  color: "#f6f7f9",
                }}
              >
                Total Balance
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "WorkSansSemibold",
                    fontSize: 36,
                    marginVertical: 8,
                    color: "#f6f7f9",
                  }}
                >
                  {isHidden ? "******" : " $192.07"}
                </Text>
                <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
                  {isHidden ? (
                    <Ionicons name="eye" size={30} color="#f6f7f9" />
                  ) : (
                    <Ionicons name="eye-off" size={30} color="#f6f7f9" />
                  )}
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontFamily: "WorkSansLight",
                  fontSize: 18,
                  marginVertical: 4,
                  color: "#f6f7f9",
                }}
              >
                +$67.48{"(12.54%)"}
              </Text>
            </View>
            <View>
              <Lottie
                source={require("../../assets/lottie/userWallet.json")}
                autoPlay
                loop
                style={{
                  width: width * 0.4,
                  height: width * 0.4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 15,
              right: 0,
              left: 0,
              gap: 8,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.light.tint,
                padding: 10,
                borderRadius: 24,
                flexDirection: "row",
                gap: 4,
                width: 110,
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="arrow-up-circle"
                size={20}
                color={Colors.light.titles}
              />
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 18,
                }}
              >
                Send
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.light.tint,
                padding: 10,
                borderRadius: 24,
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                width: 110,
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="arrow-down-circle"
                size={20}
                color={Colors.light.titles}
              />
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 18,
                }}
              >
                Receive
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.light.tint,
                padding: 10,
                borderRadius: 24,
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
                width: 110,
              }}
            >
              <Ionicons
                name="swap-horizontal"
                size={20}
                color={Colors.light.titles}
              />
              <Text
                style={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 18,
                }}
              >
                Swap
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  walletCard: {
    backgroundColor: Colors.light.primary,
    width: width * 0.95,
    height: width * 0.55,
    borderRadius: 14,
    position: "relative",
  },
});
