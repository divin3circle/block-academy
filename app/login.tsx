import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { useLoginWithEmail } from "@privy-io/expo";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import ToastManager, { Toast } from "toastify-react-native";

export default function login() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state, sendCode, loginWithCode } = useLoginWithEmail({
    onLoginSuccess(user, isNewUser) {
      console.log("Logged in", user, isNewUser);
      router.navigate("/create-wallet");
    },
  });

  const handleSendCode = async () => {
    console.log("Sending code to", email);
    const response = await sendCode({ email });
    if (response.success) {
      Toast.success("OTP sent");
      setOtpSent(true);
    } else {
      console.log("Failed to send code");
      setOtpSent(false);
    }
  };

  const handleLogin = async () => {
    console.log("Logging in", code, email);
    try {
      setLoading(true);
      const response = await loginWithCode({ code });
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      console.log("Login failed");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ToastManager style={styles.toast} />
      <View>
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 24,
          }}
        >
          Block Academy
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            fontSize: 20,
            marginTop: 20,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          One tap Email Signin
        </Text>
        <TextInput
          onChangeText={setEmail}
          inputMode="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          style={{
            backgroundColor: Colors.light.background,
            width: 300,
            height: 50,
            borderRadius: 10,
            padding: 10,
            borderColor: Colors.light.tint,
            borderWidth: 1,
            fontFamily: "WorkSansRegular",
          }}
        />
        {!otpSent && (
          <TouchableOpacity
            // Keeps button disabled while code is being sent
            style={styles.btn}
            disabled={state.status === "sending-code"}
            onPress={handleSendCode}
          >
            <Text
              style={{
                fontFamily: "WorkSansSemibold",
                textAlign: "center",
                color: Colors.light.tint,
              }}
            >
              Send Code
            </Text>
          </TouchableOpacity>
        )}

        {state.status === "sending-code" && (
          //  Shows only while the code is sending
          <Text
            style={{
              fontFamily: "WorkSansRegular",
              textAlign: "center",
              color: Colors.light.tint,
            }}
          >
            Sending Code...
          </Text>
        )}
      </View>

      {otpSent && (
        <View>
          <TextInput
            onChangeText={setCode}
            placeholder="OTP"
            inputMode="numeric"
            style={{
              backgroundColor: Colors.light.background,
              width: 300,
              height: 50,
              borderRadius: 10,
              padding: 10,
              marginVertical: 20,
              borderColor: Colors.light.tint,
              borderWidth: 1,
              fontFamily: "WorkSansRegular",
            }}
          />
          <TouchableOpacity
            // Keeps button disabled until the code has been sent
            disabled={state.status !== "awaiting-code-input"}
            onPress={handleLogin}
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "WorkSansRegular",
                fontSize: 20,
                textAlign: "center",
                color: Colors.light.primary,
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {state.status === "submitting-code" && (
        // Shows only while the login is being attempted
        <Text
          style={{
            fontFamily: "WorkSansRegular",
            textAlign: "center",
            color: Colors.light.tint,
          }}
        >
          Logging you in...
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "#f7f6f8",
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: Colors.light.primary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    gap: 4,
    marginTop: 40,
  },
  toast: {
    fontFamily: "WorkSansRegular",
    fontSize: 14,
    color: Colors.light.tint,
    backgroundColor: "#f7f6f8",
  },
});
