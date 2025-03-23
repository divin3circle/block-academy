import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Lottie from "lottie-react-native";
import { friends, nfts, tokens } from "@/constants/data";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const wallet = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [viewAsset, setViewAsset] = useState<"tokens" | "agents">("tokens");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
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
          <View style={styles.nftCard}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "WorkSansSemibold",
                  fontSize: 20,
                  color: Colors.light.titles,
                }}
              >
                My NFTs
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={nfts}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginHorizontal: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    contentFit="cover"
                    transition={1000}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.network}
                      contentFit="cover"
                      transition={1000}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 15,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "WorkSansSemibold",
                        fontSize: 16,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: spacing.horizontalPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                fontSize: 24,
                color: Colors.light.titles,
              }}
            >
              My Assets
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor:
                    viewAsset === "tokens" ? Colors.light.tint : "transparent",
                  padding: 8,
                  borderRadius: 8,
                }}
                onPress={() => setViewAsset("tokens")}
              >
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 14,
                  }}
                >
                  Tokens
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    viewAsset === "agents" ? Colors.light.tint : "transparent",
                  padding: 8,
                  borderRadius: 8,
                }}
                onPress={() => setViewAsset("agents")}
              >
                <Text
                  style={{
                    fontFamily: "WorkSansRegular",
                    fontSize: 14,
                  }}
                >
                  Agents
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {viewAsset === "tokens" ? (
              <View
                style={{
                  marginTop: 8,
                }}
              >
                {tokens.map((token, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 8,
                        alignItems: "center",
                        marginVertical: 6,
                      }}
                    >
                      <Image
                        source={token.image}
                        contentFit="cover"
                        transition={1000}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                        }}
                      />
                      <View style={{}}>
                        <Text
                          style={{
                            fontFamily: "WorkSansRegular",
                            fontSize: 16,
                          }}
                        >
                          {token.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "WorkSansRegular",
                            fontSize: 12,
                          }}
                        >
                          {token.network}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "WorkSansSemibold",
                          fontSize: 14,
                        }}
                      >
                        KES {token.balanceKES.toLocaleString()}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "WorkSansRegular",
                          fontSize: 12,
                        }}
                      >
                        {token.balance}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View
                style={{
                  marginTop: 8,
                }}
              >
                {friends.map((friend, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 8,
                        alignItems: "center",
                        marginVertical: 6,
                      }}
                    >
                      <Image
                        source={friend.image}
                        contentFit="contain"
                        transition={1000}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                        }}
                      />
                      <View style={{}}>
                        <Text
                          style={{
                            fontFamily: "WorkSansRegular",
                            fontSize: 16,
                          }}
                        >
                          {friend.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "WorkSansRegular",
                            fontSize: 12,
                          }}
                        >
                          {friend.category}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "WorkSansSemibold",
                          fontSize: 14,
                        }}
                      >
                        {friend.iq === 0 ? "" : `IQ ${friend.iq}`}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "WorkSansRegular",
                          fontSize: 12,
                        }}
                      >
                        {friend.iq === 0 ? "" : "$0.1 / token"}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
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
    height: width * 0.6,
    borderRadius: 14,
    position: "relative",
  },
  nftCard: {
    width: width * 0.95,
    height: width * 0.55,
    backgroundColor: "#eff0f3",
    borderRadius: 14,
    marginVertical: spacing.componentTopMargin,
    padding: 20,
  },
});
