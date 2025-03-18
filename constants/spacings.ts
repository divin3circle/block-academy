import { Dimensions } from "react-native";

const spacing = {
  horizontalPadding: 14,
  componentTopMargin: 40,
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export { spacing, windowHeight, windowWidth };
