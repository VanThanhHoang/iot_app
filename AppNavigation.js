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
import HistoryScreen from './screens/HistoryScreen'
import App from "./app";
import {authUser} from './firebaseConfig'
const AppNavigation = () => {
  const { isLoading } = useContext(AppContext);
  return (
    <View style={{ flex: 1 }}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={authUser.currentUser ? "HomeTab" : "Login"}
      >
        <AppStack.Screen name="HomeTab" component={HomeTab} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={SignUp} />
        <AppStack.Screen name="Changepass" component={ChangePassScreen} />
        <AppStack.Screen name="History" component={HistoryScreen} />
      </AppStack.Navigator>
      <LoadingDialog open={isLoading} />
    </View>
  );
};
export default AppNavigation;
