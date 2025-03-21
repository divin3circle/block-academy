import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PrivyProvider } from "@privy-io/expo";
import { useEffect } from "react";
import "react-native-reanimated";
import openCampusChain from "@/constants/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    WorkSansRegular: require("../assets/fonts/WorkSans-Regular.ttf"),
    WorkSansBold: require("../assets/fonts/WorkSans-Bold.ttf"),
    WorkSansSemibold: require("../assets/fonts/WorkSans-SemiBold.ttf"),
    WorkSansLight: require("../assets/fonts/WorkSans-Light.ttf"),
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
      config={{
        embedded: {
          ethereum: {
            createOnLogin: "all-users",
          },
        },
      }}
      supportedChains={[openCampusChain]}
    >
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            presentation: "card",
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
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
            name="create-profile"
            options={{
              title: "Create Profile",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="new-login"
            options={{
              title: "Glad to see you back",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="bug-bounty/index"
            options={{
              title: "Bug Bounty",
            }}
          />
          <Stack.Screen
            name="bug-bounty/pythonBounty"
            options={{
              title: "Python",
            }}
          />
          <Stack.Screen
            name="bug-bounty/[id]"
            options={{
              title: "Solve the Bug",
            }}
          />
          <Stack.Screen
            name="bug-bounty/ai-chat"
            options={{
              title: "Submit Answer",
            }}
          />
          <Stack.Screen
            name="course/[id]"
            options={{
              title: "Course",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="learn/[id]"
            options={{
              title: "Learn",
              headerShown: false,
            }}
          />
        </Stack>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
