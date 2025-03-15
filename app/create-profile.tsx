import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "@/utils/queries";
import { Country } from "@/utils/types";
import { Image } from "expo-image";
import SuccessCard from "@/components/SuccessCard";

const createProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries", "all"],
    queryFn: () => fetchCountries(),
  });
  const [showModal, setShowModal] = React.useState(false);

  // loading state below will be used to await user profile creation on the server
  const [loading, setLoading] = React.useState(false);
  const handleCreateProfile = () => {
    setShowModal(true);
  };
  if (isLoading || !data)
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={26} />
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      {!showModal && <SuccessCard loading />}
      <Text
        style={{
          fontFamily: "WorkSansSemibold",
          fontSize: 24,
          color: Colors.light.primary,
          marginTop: 20,
        }}
      >
        Let's get to know You
      </Text>
      <View>
        <Image
          source={require("../assets/images/Profile.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 40,
          }}
        />
      </View>
      <View style={styles.profileContainer}>
        <TextInput
          onChangeText={() => {}}
          placeholder="Full Name"
          inputMode="numeric"
          style={{
            backgroundColor: Colors.light.background,
            width: 300,
            height: 50,
            borderRadius: 10,
            padding: 10,
            marginVertical: 20,
            borderColor: Colors.light.muted,
            borderWidth: 1,
            fontFamily: "WorkSansRegular",
          }}
        />
        <TextInput
          onChangeText={() => {}}
          placeholder="Username"
          inputMode="numeric"
          style={{
            backgroundColor: Colors.light.background,
            width: 300,
            height: 50,
            borderRadius: 10,
            padding: 10,
            borderColor: Colors.light.muted,
            borderWidth: 1,
            fontFamily: "WorkSansRegular",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            borderColor: Colors.light.muted,
            borderWidth: 1,
            backgroundColor: Colors.light.background,
            borderRadius: 10,
            width: 300,
            marginTop: 20,
          }}
        >
          <Ionicons name="calendar" size={24} color={Colors.light.muted} />
          <TextInput
            onChangeText={() => {}}
            placeholder="Date of Birth"
            inputMode="numeric"
            style={{
              width: 250,
              height: 50,
              fontFamily: "WorkSansRegular",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            borderColor: Colors.light.muted,
            borderWidth: 1,
            backgroundColor: Colors.light.background,
            borderRadius: 10,
            width: 300,
            marginTop: 20,
          }}
        >
          <View style={{ width: 100, height: "80%" }}>
            {data ? (
              <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                renderButton={(selectedItem: Country, isOpened) => {
                  return (
                    <View style={styles.dropdownButtonStyle}>
                      {!selectedItem && (
                        <Image
                          source={data[0].flags.png}
                          style={{
                            width: 60,
                            height: 40,
                            objectFit: "contain",
                            borderRadius: 8,
                            marginLeft: 60,
                          }}
                        />
                      )}
                      <Image
                        source={{ uri: selectedItem?.flags?.png }}
                        style={{
                          width: 60,
                          height: 40,
                          objectFit: "contain",
                          borderRadius: 8,
                        }}
                      />
                    </View>
                  );
                }}
                renderItem={(item: Country, index, isSelected) => {
                  return (
                    <View
                      style={{
                        ...styles.dropdownItemStyle,
                        ...(isSelected && { backgroundColor: "#D2D9DF" }),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={item.flags.png}
                          style={{
                            width: 50,
                            height: 40,
                            objectFit: "contain",
                            borderRadius: 8,
                          }}
                        />
                        <Text
                          style={{
                            fontFamily: "WorkSansRegular",
                            fontSize: 11,
                            color: "#151E26",
                          }}
                        >
                          {item.name.common.substring(0, 10)}
                        </Text>
                      </View>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
                search
                searchInputStyle={styles.dropdownSearchInputStyle}
                searchInputTxtColor={"#151E26"}
                searchInputTxtStyle={{
                  fontFamily: "WorkSansRegular",
                  fontSize: 11,
                }}
                searchPlaceHolder={"Search here"}
                searchPlaceHolderColor={"#72808D"}
                renderSearchInputLeftIcon={() => {
                  return (
                    <FontAwesome name={"search"} color={"#72808D"} size={18} />
                  );
                }}
              />
            ) : null}
          </View>

          <TextInput
            onChangeText={() => {}}
            placeholder="+234 567 890 123"
            inputMode="numeric"
            style={{
              width: 215,
              height: 50,
              fontFamily: "WorkSansRegular",
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleCreateProfile}>
        <Text
          style={{
            fontFamily: "WorkSansSemibold",
            textAlign: "center",
            color: Colors.light.tint,
          }}
        >
          Create Profile
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default createProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "#f7f6f8",
  },
  profileContainer: {
    flexDirection: "column",
    gap: 20,
    marginTop: 40,
  },
  dropdownButtonStyle: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {},
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownSearchInputStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#B1BDC8",
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
    marginTop: 60,
  },
});
