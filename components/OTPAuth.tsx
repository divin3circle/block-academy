import { Colors } from "@/constants/colors";
import { useLoginWithEmail } from "@privy-io/expo";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";

export default function OTPAuth({ userEmail }: { userEmail: string }) {
  const [code, setCode] = useState("");
  const { loginWithCode, state } = useLoginWithEmail();

  const handleLogin = async () => {
    console.log("Logging in with code", code, userEmail);
    const response = loginWithCode({ email: userEmail, code });
    // if (response) {
    //   console.log("Logged in");
    // } else {
    //   console.log("Login failed");
    // }
    console.log(response);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Code"
        inputMode="numeric"
        style={{
          backgroundColor: Colors.light.background,
          width: 300,
          height: 50,
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
          borderColor: Colors.light.tint,
          borderWidth: 1,
        }}
      />
      <TouchableOpacity
        onPress={handleLogin}
        disabled={state.status === "submitting-code"}
        style={{
          width: 200,
          height: 50,
          backgroundColor: Colors.light.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          gap: 4,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            fontSize: 16,
            color: Colors.light.tint,
          }}
        >
          {state.status === "submitting-code" ? "Submitting in..." : "Submit"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
