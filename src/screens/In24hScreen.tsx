import React from "react";
import { StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import GridDX from "../components/controls/griddx";
import GridItemDX from "../components/controls/griditemdx";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import LabelDX from "../components/controls/labeldx";
import DividerDX from "../components/controls/dividerdx";
import TextFieldDX from "../components/controls/textfielddx";
import IconDX from "../components/controls/icondx";
import { SearchIcon } from "../components/ui/icon";
import SwitchDX from "../components/controls/switchdx";
import CheckboxDX from "../components/controls/checkboxDX";
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";

const filterOptions = [
  "Pending Orders",
  "Completed Orders",
  "Cancelled Orders",
  "Returned Orders",
];

const In24hScreen = () => {
  const navigation = useNavigation();

  return (
    // <SafeAreaView edges={["top"]} className="flex-1 bg-secondary-50">
    //   <StatusBar backgroundColor="black" barStyle="light-content" />
      
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 20 }}>
        <GridDX className="h-full w-full bg-secondary-50">
          
          {/* Header Section */}
          <GridItemDX className="col-span-full pl-4 pr-4 pt-4 bg-secondary-50">
            <HeadingDX className="text-black text-2xl text-center font-bold">Search & Filter</HeadingDX>
          </GridItemDX>
          
          {/* Search Section */}
          <GridItemDX className="flex-row items-center px-4 bg-secondary-50">
            <MIcon name="search" size={22} color="black" />
            <LabelDX className="text-black ml-2 text-lg font-semibold">Search</LabelDX>
          </GridItemDX>
          
          {/* Order Number Search Field */}
          <GridItemDX className="px-4 bg-secondary-50">
            <TextFieldDX
              placeholder="Order Number"
              leftIcon="card-bulleted"
              leftIconType="MaterialCommunityIcons"
              className="text-typography-600"
            />
          </GridItemDX>
          
          {/* Customer Name Search Field */}
          <GridItemDX className="px-4 mt-2 bg-secondary-50">
            <TextFieldDX
              placeholder="Customer Name"
              leftIcon="person"
              className="text-typography-600"
            />
          </GridItemDX>
          
          {/* Separator */}
          <GridItemDX className="px-4 mt-2 bg-secondary-50">
            <BoxDX className="border-b border-gray-300" />
          </GridItemDX>

          {/* Filter Section */}
          <GridItemDX className="flex-row items-center px-4 pb-2 mt-2 bg-secondary-50">
            <CIcon name="filter" size={22} color="black" />
            <LabelDX className="text-black ml-2 text-lg font-semibold">Filter</LabelDX>
          </GridItemDX>
          
          {/* Prioritized Orders Box */}
          <GridItemDX className="px-4">
            <BoxDX className="bg-secondary-50 border border-gray-300 p-4 flex-row items-center rounded-md">
              <SwitchDX />
              <LabelDX className="text-black ml-2">Show only prioritized future orders</LabelDX>
            </BoxDX>
          </GridItemDX>
          
          {/* Filter Options Box */}
          <GridItemDX className="px-4 mt-2">
            <BoxDX className="bg-secondary-50 border border-gray-300 p-4 rounded-md">
              {filterOptions.map((option, index) => (
                <BoxDX key={index} className="py-2">
                  <CheckboxDX labelText={option} classNamelabel="text-black text-base" />
                  {index !== filterOptions.length - 1 && (
                    <DividerDX className="border-t-3 border-dashed border-gray-300 mt-2" />
                  )}
                </BoxDX>
              ))}
            </BoxDX>
          </GridItemDX>
        
        </GridDX>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default In24hScreen;
