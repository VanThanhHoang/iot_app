import React, { useContext } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import LoadingDialog from "./components/LoadingDialog";
const AppStack = createStackNavigator();
import { AppContext } from "./AppContext";
import { getAuth } from "firebase/auth";
import HomeTab from './screens/BottomTab'
import ChangePassScreen from './screens/ChangePass'
const AppNavigation = () => {
  const { isLoading } = useContext(AppContext);
  const auth = getAuth();
  return (
    <View style={{ flex: 1 }}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="HomeTab" component={HomeTab} />

        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={SignUp} />
        <AppStack.Screen name="Changepass" component={ChangePassScreen} />
      </AppStack.Navigator>
      <LoadingDialog open={isLoading} />
    </View>
  );
};
export default AppNavigation;
