import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GridDX from "../components/controls/griddx";
import GridItemDX from "../components/controls/griditemdx";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import LabelDX from "../components/controls/labeldx";
import DividerDX from "../components/controls/dividerdx";
import TextFieldDX from "../components/controls/textfielddx"; 
import { historyDummyData } from "../services/historydummydata";
import IconDX from "../components/controls/icondx";
import { SearchIcon } from "../components/ui/icon";

const HistoryPage = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* Header Section with Increased Background Size */}
      <GridDX className="h-full w-full">
        <GridItemDX className="col-span-full p-0">
          <BoxDX className="bg-black px-4 py-2 rounded-b-lg w-full">
            <HeadingDX className="text-white text-xl">Order History</HeadingDX>

            {/* Search Box using TextFieldDX */}

            {/* Search Bar */}
     <TextFieldDX
      placeholder="Search"
      isReadOnly
      rightIcon={require("../assets/search.png")} // Pass only the source
      className="px-10 py-4 mt-0"
      />

      </BoxDX>
     </GridItemDX>

        {/* Date Section */}
        <GridItemDX className="p-4">
          <BoxDX className="flex-row justify-between items-center">
            <LabelDX className="text-black text-lg font-bold">
              December 2024
            </LabelDX>
            <BoxDX className="bg-gray-200 px-2 py-1 rounded-full">
              <LabelDX className="text-black text-sm font-medium">10</LabelDX>
            </BoxDX>
          </BoxDX>
        </GridItemDX>

        {/* Order List */}
        {historyDummyData.map((order, index) => (
          <GridItemDX key={index} className="px-4 py-3 bg-white">
            <BoxDX className="border-b border-gray-300 pb-3">
              {/* Order ID and Service */}
              <BoxDX className="flex-row justify-between">
                <LabelDX className="text-black text-md font-small">
                  {order.id}
                </LabelDX>
                <LabelDX className="text-black text-md font-small">
                  {order.service}
                </LabelDX>
              </BoxDX>

              {/* Customer Name */}
              <LabelDX className="text-black text-md font-small mt-2">{order.name}</LabelDX>

              {/* Delivery Status */}
              <LabelDX className="text-blue-500 text-sm mt-3">
                {order.status}
              </LabelDX>
            </BoxDX>
          </GridItemDX>
        ))}
      </GridDX>
    </SafeAreaView>
  );
};

export default HistoryPage;
