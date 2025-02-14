import React from "react";
import { ScrollView } from "react-native";
import BoxDX from "../components/controls/boxdx";
import LabelDX from "../components/controls/labeldx";
import ImageDX from "../components/controls/imagedx";
import ordersData from "../services/ordersData"; // Import order data

const OverdueScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {ordersData.map((order) => (
        <BoxDX key={order.id} className="mx-4 mt-4">
          {/* Time Section */}
          <BoxDX className="flex-row justify-between items-center">
            <LabelDX className="text-gray-600 font-medium">{order.time}</LabelDX>
            <LabelDX className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {order.total}
            </LabelDX>
          </BoxDX>

          {/* Order Card */}
          <BoxDX className="bg-white mt-2 rounded-lg shadow-sm border border-gray-200">
            <BoxDX className="p-3">
              {/* Status and Items Row */}
              <BoxDX className="flex-row items-center justify-between">
                {/* Status */}
                <LabelDX className="text-blue-500 text-md font-medium">
                  {order.status}
                </LabelDX>

                {/* Items Row */}
                <BoxDX className="flex-row items-center space-x-2">
                  {/* Shirt Icon + Count */}
                  <BoxDX className="flex-row items-center bg-gray-200 rounded-full px-2 py-1">
                    <ImageDX
                      source={require("../assets/Vector.png")}
                      alt="Shirt Icon"
                      className="w-5 h-5"
                    />
                    <LabelDX className="ml-1 text-black text-md font-medium">
                      {order.items[0].count}
                    </LabelDX>
                  </BoxDX>

                  {/* Hanger Icon + Count */}
                  <BoxDX className="flex-row items-center bg-gray-200 rounded-full px-2 py-1">
                    <ImageDX
                      source={require("../assets/hanger.png")}
                      alt="Hanger Icon"
                      className="w-5 h-5"
                    />
                    <LabelDX className="ml-1 text-black text-md font-medium">
                      {order.items[1].count}
                    </LabelDX>
                  </BoxDX>
                </BoxDX>
              </BoxDX>
            </BoxDX>

            {/* Separator Line */}
            <BoxDX className="h-[1px] bg-gray-300 w-full" />

            {/* Show Orders Link */}
            <LabelDX className="text-blue-500 py-3 text-center font-medium">
              Show Orders
            </LabelDX>
          </BoxDX>
        </BoxDX>
      ))}
    </ScrollView>
  );
};

export default OverdueScreen;
