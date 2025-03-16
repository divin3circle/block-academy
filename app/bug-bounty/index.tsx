import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Colors } from "@/constants/colors";
import { spacing } from "@/constants/spacings";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const BugBounty = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/vulnerability.webp")}
          contentFit="contain"
          transition={1000}
          style={{
            width: 300,
            height: 250,
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 24,
            textAlign: "center",
            marginTop: 7,
            color: Colors.light.titles,
          }}
        >
          Hunt for Bugs with AI
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 16,
            textAlign: "center",
            marginTop: 7,
            color: Colors.light.subtitles,
            paddingHorizontal: spacing.horizontalPadding / 2,
          }}
        >
          Choose a programming language below to debug with AI assistance
        </Text>
      </View>
      <View style={styles.languagesContainer}>
        <View
          style={{
            flexDirection: "column",
            gap: 14,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("/bug-bounty/pythonBounty")}
            style={{
              borderBottomColor: Colors.light.muted,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 14,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 14,
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

              <TouchableOpacity>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={Colors.light.primary}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Link
            asChild
            href={"/bug-bounty/pythonBounty"}
            style={{
              borderBottomColor: Colors.light.muted,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 14,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 14,
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
                  }}
                >
                  <Image
                    source={require("../../assets/images/js.png")}
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
                  JavaScript
                </Text>
              </View>

              <TouchableOpacity>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={Colors.light.primary}
                />
              </TouchableOpacity>
            </View>
          </Link>
          <Link
            asChild
            href={"/bug-bounty/pythonBounty"}
            style={{
              borderBottomColor: Colors.light.muted,
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 14,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 14,
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
                    source={require("../../assets/images/sol.png")}
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
                  Solidity
                </Text>
              </View>

              <TouchableOpacity>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={Colors.light.primary}
                />
              </TouchableOpacity>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default BugBounty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginVertical: spacing.componentTopMargin,
  },
  languagesContainer: {
    marginVertical: spacing.componentTopMargin,
    paddingHorizontal: spacing.horizontalPadding,
    gap: spacing.componentTopMargin / 2,
  },
});
