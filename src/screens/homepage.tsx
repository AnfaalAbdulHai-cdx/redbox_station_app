import React, { useEffect, useState } from "react";
import {StatusBar,TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import HeadingDX from '../components/controls/headingdx';
import {dummyData} from '../services/dummyData';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import IconDX from '../components/controls/icondx';
import ImageDX from '../components/controls/imagedx';
import DividerDX from '../components/controls/dividerdx';
import HomeBoxDX from "../components/controls/homeboxdx";
import {PlayIcon, ChevronRightIcon} from '../components/ui/icon';
import {getOrders} from '../services/orderservice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; 




const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isLoading, setIsLoading] = useState(false);
  const [dueOrders, setDueOrders] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    let request = {};
    getOrders(request)
      .then(response => setDueOrders(response))
      .catch(error => {})
      .finally(() => setIsLoading(false));
  }, []);

  const toggleLanguage = async () => {
    const newLang = language === "en" ? "ar" : "en";
    await AsyncStorage.setItem("appLanguage", newLang);
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem("appLanguage");
      if (storedLang) {
        i18n.changeLanguage(storedLang);
        setLanguage(storedLang);
      }
    };
    loadLanguage();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" barStyle="light-content" />
 
      <GridDX className="flex-row items-center bg-background-0 h-full">
      <GridItemDX className="col-span-full p-0">
          <HomeBoxDX variant="header">
            <HeadingDX className="text-white text-xl mt-[-10px] ml-[10px]">{t("title")}</HeadingDX>


            {/* Language Toggle Button */}
            <TouchableOpacity onPress={toggleLanguage} className="bg-white px-3 py-1 rounded items-center justify-center">
              <Text className="text-black">{language === "en" ? "عربي" : "English"}</Text>
            </TouchableOpacity>

            {/* Logo Image Inside GridDX */}
            <GridDX className="w-10 h-10 rounded-full overflow-hidden mt-[-10px] mr-[12px]">
              <ImageDX
                source={require("../assets/headerlogo.png")}
                alt="Header Logo"
                className="w-full h-full"
                style={{ resizeMode: "contain" }}
              />
            </GridDX>
            </HomeBoxDX>

        </GridItemDX>

        {/* Ready Orders Section */}
     <GridItemDX className="p-3">
     <HomeBoxDX variant="ready">
    {/* T-Shirt Image (Moves Based on Language) */}
    <GridDX className="w-8 h-8 overflow-hidden relative flex justify-center items-center">
      <ImageDX source={require("../assets/Vector.png")} alt="Shirt Logo" className="w-full h-full" style={{ resizeMode: "contain" }} />
      {/* Shirt Number Overlay */}
      <LabelDX className="absolute flex text-sm text-white font-bold justify-center items-center left-[10px]">
        {dummyData.tshirtNumber}
      </LabelDX>
    </GridDX>

    {/* Text Content */}
    <LabelDX className="text-black text-lg font-small mx-2">
      {t("readyOrders")}{" "}
      <LabelDX className="text-black font-bold text-lg">
        {dummyData.readyOrders}
      </LabelDX>
    </LabelDX>
  </HomeBoxDX>

  {/* Divider Line */}
  <HomeBoxDX variant="divider" />
</GridItemDX>

     

     {/* Show Only Section */}
 <GridItemDX className="p-4">
  {/* "Show only:" Label (Moved Up) */}
  <HomeBoxDX variant="section">
    <LabelDX className="text-black text-lg font-normal">{t("showOnly")}</LabelDX>
  </HomeBoxDX>

  {/* Full-Width DividerDX */}
  <DividerDX orientation="horizontal" className="w-[100%] h-8 border border-gray-300 rounded-md flex-row overflow-hidden self-center">
    {/* Left Section (Active: 11 AM) */}
    <HomeBoxDX variant="left">
      <LabelDX className="text-white font-bold text-sm">{t("time11AM")}</LabelDX>
    </HomeBoxDX>

    {/* Right Section (Inactive: 4 PM) */}
    <HomeBoxDX variant="right">
      <LabelDX className="text-gray-500 font-normal text-sm">{t("time4PM")}</LabelDX>
    </HomeBoxDX>
  </DividerDX>
</GridItemDX>

{/* CHECK DRIVERS */}
<GridItemDX className="pl-4 pr-4 m-0">
<HomeBoxDX variant="card">
    
    {/* Truck Icon */}
    <ImageDX 
      source={require("../assets/truck.png")} // Ensure you have the correct path
      alt="Truck Icon"
      className="w-6 h-6"
      style={{ resizeMode: "contain" }}
    />

    {/* Text Label */}
    <LabelDX className="text-primary-400 font-normal text-lg ml-4 flex-1">
    {t("checkDrivers")}
    </LabelDX>

    {/* Right Arrow Icon using IconDX */}
    <HomeBoxDX variant="rightarrow">
      <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
    </HomeBoxDX>
</HomeBoxDX>

</GridItemDX>

<GridItemDX className="pl-4 pr-4">
        <GridItemDX className="w-full flex flex-row justify-between mt-2">
          <HeadingDX
            text={t("dueOrders")}
            className="text-left text-[20px] font-semibold"
          />
          <HomeBoxDX variant="DueOrders">
            <LabelDX
              className="text-typography-950 font-semibold"
              text={dueOrders}
            />
         </HomeBoxDX>
        </GridItemDX>
        <GridItemDX className="w-full h-[111px] bg-white border-[1px] border-secondary-700 rounded-[4px] flex-row items-center mt-4">
  <GridItemDX className="flex-col ml-3 mr-3 flex-1"> 
    {/* playicon */}
    <HomeBoxDX variant="playicon">
      <ImageDX
        source={require('../assets/playicon.png')}
        alt={'playicon'}
        className="w-5 h-5 absolute left-2"
      />
      <LabelDX className="text-black font-medium ml-6" text={t("pack")} />
    </HomeBoxDX>
    <BoxDX className="w-full flex flex-row items-center mt-5">
      <LabelDX
        className="text-primary-300 font-normal text-[16px]"
        text={t("orders")}
      />
      <HomeBoxDX variant="total">
        <LabelDX
          className="text-typography-950 font-semibold"
          text={dummyData.dueOrders.total}
        />
     </HomeBoxDX>

      <ImageDX
        source={require('../assets/Vector.png')}
        alt={'shirt'}
        className="w-6 h-6 ml-8"
      />
       <HomeBoxDX variant="total">
        <LabelDX
          className="text-typography-950 font-semibold"
          text={dummyData.dueOrders.orders[1].count}
        />
      </HomeBoxDX>
    </BoxDX>
  </GridItemDX>
  <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md mr-3"> 
    <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
  </BoxDX>
</GridItemDX>
<GridItemDX className="w-full flex flex-row justify-between mt-4">
          <HeadingDX
            text={t("startProcessingToday")}
            className="text-left text-[20px] font-semibold"
          />
          <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
            <LabelDX
              className="text-typography-950 font-semibold"
              text={dummyData.startProcessingToday[0].count}
            />
          </BoxDX>
        </GridItemDX>
        <GridItemDX className="w-full h-[111px] bg-white border-[1px] border-secondary-700 rounded-[4px] flex-row mt-4">
  <GridItemDX className="flex-col ml-3 mr-3 flex-1 justify-center">
    <BoxDX className="flex-row items-center justify-between mt-0 ml-0">
      <BoxDX className="flex-row items-center">
        <ImageDX
          source={require('../assets/doublearrow.png')}
          alt={'doublearrow'}
          className="w-7 h-7"
        />
        <LabelDX className="text-primary-300 font-normal text-[16px] ml-2" text={t("prioritizedFutureOrders")} />
      </BoxDX>
      <BoxDX className="flex-row items-center ml-auto">
        <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
          <LabelDX
            className="text-typography-950 font-semibold"
            text={dummyData.startProcessingToday[0].count}
          />
        </BoxDX>
        <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md ml-3">
          <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
        </BoxDX>
      </BoxDX>
    </BoxDX>

    <BoxDX className="flex-row items-center justify-between mt-3 ml-0">
      <BoxDX className="flex-row items-center">
        <ImageDX
          source={require('../assets/inspect.png')}
          alt={'inspect'}
          className="w-7 h-7"
        />
        <LabelDX className="text-primary-300 font-normal text-[16px] ml-2" text={t("inspect")}/>
      </BoxDX>
      <BoxDX className="flex-row items-center ml-auto">
        <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
          <LabelDX
            className="text-typography-950 font-semibold"
            text={dummyData.startProcessingToday[1].count}
          />
        </BoxDX>
        <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md ml-3">
          <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
        </BoxDX>
      </BoxDX>
    </BoxDX>
  </GridItemDX>
</GridItemDX>
</GridItemDX>
      </GridDX>
    </SafeAreaView>
  );
};

export default HomePage;