import { AppContext } from "@/AppContext";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const AccountScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AppContext);
  return (
    <View
      style={{
        backgroundColor: "#f0f5f9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Microsoft_Account_Logo.svg/1200px-Microsoft_Account_Logo.svg.png",
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#232B5D",
          marginBottom: 20,
        }}
      >
        {user?.userName ?? "User"}
      </Text>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          width: "100%",
          height: 150,
          elevation: 5,
        }}
      >
        <AccountButton
          onPress={() => {
            navigation.navigate("Changepass");
          }}
          title="Change password"
        />
        <AccountButton
          onPress={() => {
            const auth = getAuth();
            auth.signOut();
            navigation.reset({
              index: 0,
              routes: [{ name: "Login" }],
            });
          }}
          title="Logout"
        />
      </View>
    </View>
  );
};
const AccountButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        height: 60,
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 5,
        borderBottomColor: "#d0d3db",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#232B5D",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default AccountScreen;
