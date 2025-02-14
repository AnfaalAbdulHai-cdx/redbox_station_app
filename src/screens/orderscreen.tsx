import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import LabelDX from "../components/controls/labeldx";
import ImageDX from "../components/controls/imagedx";
import TextFieldDX from "../components/controls/textfielddx";

// Import individual tab screens
import TodayScreen from "./TodayScreen";
import TomorrowScreen from "./TomorrowScreen";
import In24hScreen from "./In24hScreen";
import OverdueScreen from "./OverdueScreen";

// Create Material Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* Header Section */}
      <BoxDX className="bg-black px-2 py-5 flex-row justify-between items-center rounded-b-md w-full">
        <HeadingDX className="text-white text-xl">Red: Orders</HeadingDX>

        {/* By Bag + Switch */}
        <BoxDX className="flex-row items-center">
          <LabelDX className="text-white text-md">By Bag</LabelDX>
          <ImageDX 
            source={require("../assets/Switch.png")} 
            alt="Switch Icon"
            className="w-8 h-4 ml-2"
          />
        </BoxDX>
      </BoxDX>

      {/* Material Top Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, fontWeight: "normal" },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarIndicatorStyle: { backgroundColor: "red", height: 2 },
        }}
      >
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Tomorrow" component={TomorrowScreen} />
        <Tab.Screen name="In 24h+" component={In24hScreen} />
        <Tab.Screen name="Overdue" component={OverdueScreen} />
      </Tab.Navigator>

      {/* Search Bar */}
      <BoxDX className="p-3">
        <TextFieldDX
          placeholder="Search and Filter"
          isReadOnly
          leftIcon={require("../assets/search.png")}
          rightIcon={require("../assets/mdi_filter.png")}
          className="px-4 py-2"
        />
      </BoxDX>
    </SafeAreaView>
  );
};

export default OrderScreen;
