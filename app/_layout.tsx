import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PrivyProvider } from "@privy-io/expo";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    WorkSansRegular: require("../assets/fonts/WorkSans-Regular.ttf"),
    WorkSansBold: require("../assets/fonts/WorkSans-Bold.ttf"),
    WorkSansSemibold: require("../assets/fonts/WorkSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <PrivyProvider
      appId={"cm7xkvtk000nu8c9wxq0s55mk"}
      clientId={"client-WY5hBzBMEHsuoW457P3Kh2D6EPKjRSpqeWwEkwaixG5TQ"}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            title: "Onboarding",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signin"
          options={{
            title: "Signin",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-wallet"
          options={{
            title: "Create Wallet",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="new-login"
          options={{
            title: "Glad to see you back",
            headerShown: true,
            presentation: "modal",
          }}
        />
      </Stack>
    </PrivyProvider>
  );
}
