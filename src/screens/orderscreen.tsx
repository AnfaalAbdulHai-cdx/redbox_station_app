import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; 

const Tab = createMaterialTopTabNavigator();

const OrderScreen = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [key, setKey] = useState(0); // Key to force re-render

  const toggleLanguage = async () => {
    const newLang = language === "en" ? "ar" : "en";
    await AsyncStorage.setItem("appLanguage", newLang);
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    //when switch languages, the tabs will properly update their names
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  };

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem("appLanguage");
      if (storedLang) {
        i18n.changeLanguage(storedLang);
        setLanguage(storedLang);
        setKey((prevKey) => prevKey + 1); // Force re-render on language change
      }
    };
    loadLanguage();
  }, []);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white" key={key}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* Header Section */}
      <BoxDX className="bg-black px-2 py-5 flex-row justify-between items-center rounded-b-md w-full">
        <HeadingDX className="text-white text-xl">{t("redOrders")}</HeadingDX>

        {/* By Bag + Switch */}
        <BoxDX className="flex-row items-center">
          <LabelDX className="text-white text-md">{t("byBag")}</LabelDX>
          <ImageDX 
            source={require("../assets/Switch.png")} 
            alt="Switch Icon"
            className="w-8 h-4 ml-2"
          />
        </BoxDX>
      </BoxDX>

      {/* Material Top Tab Navigator */}
      <Tab.Navigator
        key={key} // Ensure re-render when language changes
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15, fontWeight: "normal" },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarIndicatorStyle: { backgroundColor: "red", height: 2 },
        }}
      >
        <Tab.Screen name={t("today")} component={TodayScreen} />
        <Tab.Screen name={t("tomorrow")} component={TomorrowScreen} />
        <Tab.Screen name={t("in24h")} component={In24hScreen} />
        <Tab.Screen name={t("overdue")} component={OverdueScreen} />
      </Tab.Navigator>

      {/* Search Bar */}
      {/* <BoxDX className="p-3">
        <TextFieldDX
          placeholder={t("searchAndFilter")}
          isReadOnly
          leftIcon={require("../assets/search.png")}
          rightIcon={require("../assets/mdi_filter.png")}
          className="px-4 py-2"
        />
      </BoxDX> */}
    </SafeAreaView>
  );
};

export default OrderScreen;
