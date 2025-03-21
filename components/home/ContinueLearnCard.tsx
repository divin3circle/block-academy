import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ContinueLearning } from "@/constants/types";
import { spacing } from "@/constants/spacings";
import { Colors } from "@/constants/colors";
import CustomProgress from "../reusable/progress-component";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const ContinueLearnCard = ({
  continueLearningItem,
}: {
  continueLearningItem: ContinueLearning;
}) => {
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: continueLearningItem.bgColor,
          marginHorizontal: 6,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 6,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 24,
          }}
        >
          {continueLearningItem.title}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 20,
          }}
        >
          {continueLearningItem.units} Units
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "WorkSansLight",
              fontSize: 14,
              marginBottom: 6,
            }}
          >
            2 units remaining
          </Text>
          <CustomProgress
            progressDetails={{
              width: 200,
              value: continueLearningItem.progress.value,
              fillColor: continueLearningItem.progress.color,
              height: 10,
            }}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: continueLearningItem.btnColor,
            },
          ]}
          onPress={() => router.navigate("/course/1")}
        >
          <Text
            style={{
              fontFamily: "WorkSansSemibold",
              fontSize: 16,
              marginVertical: 6,
              color: "#fff",
            }}
          >
            Lets Go
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={continueLearningItem.image}
          contentFit="cover"
          transition={1000}
          style={{
            width: 150,
            height: 200,
          }}
        />
      </View>
    </View>
  );
};

export default ContinueLearnCard;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.componentTopMargin / 2,
    borderWidth: 1,
    borderColor: Colors.light.titles,
    width: width * 0.9,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: spacing.horizontalPadding,
    paddingVertical: spacing.horizontalPadding,
  },
  btn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    gap: 4,
    width: 100,
    marginTop: 24,
    paddingVertical: 6,
    borderColor: Colors.light.titles,
    borderWidth: 1,
  },
});
