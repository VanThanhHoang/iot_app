import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import TempScreen from "./Temperature";
import HumScreen from "./Humidity";
import HumiditySreen from "./Humidity";
import GasScreen from "./Gas";
import AirScreen from "./Air";

import DustScreen from "./Dust";
import AccountScreen from "./Account";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
};
function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStatusBarHeight: 0,
        tabBarStyle: {
          height: 100,
        },
      }}
    >
       <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Air quality
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/ai.png")}
              />
            );
          },
        }}
        name="Air quality"
        component={AirScreen}
      />
      <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Temperature
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/thermometer.png")}
              />
            );
          },
        }}
        name="Temperature"
        component={TempScreen}
      />
      <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Humidity
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/humidity.png")}
              />
            );
          },
        }}
        name="Humidity"
        component={HumiditySreen}
      />
      <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Gas
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/gas.png")}
              />
            );
          },
        }}
        name="Gas"
        component={GasScreen}
      />
      <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Dust
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/dust.png")}
              />
            );
          },
        }}
        name="Dust"
        component={DustScreen}
      />
      <Tab.Screen
        options={{
          ...screenOptions,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#ffb74d" : "gray",
                fontSize: 11,
                fontWeight: "bold",
              }}
            >
              Account
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ffb74d" : "gray",
                }}
                source={require("../assets/user.png")}
              />
            );
          },
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}
export default HomeTab;
