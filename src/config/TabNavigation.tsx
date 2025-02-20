import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StatusBar, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import HomePage from "../screens/HomePage";
import HomePage from "../screens/homepage";
import OrderScreen from "../screens/orderscreen";
import HistoryPage from "../screens/historypage";
import ScanScreen from "../screens/ScanScreen";
import SupportScreen from "../screens/SupportScreen";
import HistoryDetails from "../screens/historydetails";
import HistoryStackNavigator from "./HistoryStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "white" },
          tabBarActiveTintColor: "#E21F26",
          tabBarInactiveTintColor: "#A0AEC0",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home": iconName = "home"; break;
              case "Orders": iconName = "cart-outline"; break;
              case "Scan": iconName = "qrcode-scan"; break;
              case "History": iconName = "history"; break;
              case "Support": iconName = "lifebuoy"; break;
              default: iconName = "help-circle";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HistoryStackNavigator} />
        {/* <Tab.Screen name="History" component={HistoryPage} /> */}
        <Tab.Screen name="Support" component={SupportScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;