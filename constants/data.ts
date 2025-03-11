import { ContinueLearning } from "./types";

export const continueLearningCourses: ContinueLearning[] = [
  {
    title: "Blockchain Basics",
    units: 5,
    bgColor: "#E3F2FD", // light blue background
    image: require("../assets/images/c1.webp"),
    progress: { value: 50, color: "#4CAF50" }, // 50% progress, green indicator
    btnColor: "#2196F3", // blue button
  },
  {
    title: "AI for Beginners",
    units: 7,
    bgColor: "#FFF3E0", // light orange background
    image: require("../assets/images/c2.webp"),
    progress: { value: 30, color: "#FF9800" }, // 30% progress, orange indicator
    btnColor: "#FF5722", // deep orange button
  },
  {
    title: "DeFi Essentials",
    units: 6,
    bgColor: "#D3E6D5FF", // light green background
    image: require("../assets/images/c3.webp"),
    progress: { value: 80, color: "#ECEF0EFF" }, // 80% progress, lime green indicator
    btnColor: "#00BCD4", // cyan button
  },
];
