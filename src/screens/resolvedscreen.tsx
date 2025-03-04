import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GridDX from "../components/controls/griddx";
import BoxDX from "../components/controls/boxdx";
import LabelDX from "../components/controls/labeldx";
import IconDX from "../components/controls/icondx";
import ImageDX from "../components/controls/imagedx";
import { ChevronRightIcon } from "../components/ui/icon";
import { ResolvedData } from "../services/resolveddata";
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ResolvedScreen = ({ navigation }) => {
  const handleBoxPress = (id) => {
    navigation.navigate("ResolvedDetailScreen", { orderId: id });
  };

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <GridDX className="p-4">
        {ResolvedData.map((order) => (
          <TouchableOpacity
            key={order.id}
            onPress={() => handleBoxPress(order.id)}
            className="mb-2"
          >
            <BoxDX className="bg-transparent border border-gray-300 rounded-lg p-4 flex-row items-center justify-between w-full">
              
              {/* Left Section */}
              <BoxDX className="flex-1">
                {/* Order ID */}
                <LabelDX className="text-lg font-bold" text={order.id} />

                {/* Customer Name & Items (Image + Quantity in the Same Line) */}
                <BoxDX className="flex-row items-center mt-1">
                  <CIcon name="tooltip-check" size={18} color="#E21F26" />
                  <LabelDX className="text-md font-semibold ml-2" text={order.customerName} />
                  
                  {/* Items (Looping through all items) */}
                  {order.items.map((item, index) => (
                    <BoxDX key={index} className="flex-row items-center ml-3">
                      <ImageDX source={item.image} alt={item.name} className="w-5 h-5" />
                      <BoxDX className="bg-secondary-200 w-[24px] h-[20px] rounded-full flex items-center justify-center ml-2">
                        <LabelDX className="text-typography-950 font-semibold" text={item.quantity.toString()} />
                      </BoxDX>
                    </BoxDX>
                  ))}
                </BoxDX>

                {/* Subtitle */}
                <LabelDX className="text-sm text-gray-500 mt-1" text={order.subtitle} />
              </BoxDX>

              {/* Right Section (Chevron Icon) */}
              <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md ml-3">
                <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
              </BoxDX>
            </BoxDX>
          </TouchableOpacity>
        ))}
      </GridDX>
    </SafeAreaView>
  );
};

export default ResolvedScreen;
