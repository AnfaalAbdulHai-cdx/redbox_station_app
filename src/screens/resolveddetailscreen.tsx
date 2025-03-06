import React, { useRef, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import ImageDX from "../components/controls/imagedx";
import LabelDX from "../components/controls/labeldx";
import IconDX from "../components/controls/icondx";
import PressableDX from "../components/controls/pressabledx";
import { ClockIcon, ChevronRightIcon, ChevronLeftIcon } from "../components/ui/icon";
import { ResolvedData } from "../services/resolveddata";
import OrderDetailsBottomSheet from "./orderdetailsbottomsheet";


const ResolvedDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { orderId } = route.params;

  const bottomSheetRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const order = ResolvedData.find((item) => item.id === orderId);

  if (!order) {
    return (
      <BoxDX className="flex-1 p-4 bg-white justify-center items-center">
        <LabelDX className="text-lg font-semibold text-red-500">
          Order Not Found
        </LabelDX>
      </BoxDX>
    );
  }

  const handleOpenBottomSheet = (item) => {
    setSelectedItem(item);
    bottomSheetRef.current?.expand();
  };

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
    setSelectedItem(null);
  };

  return (
    <BoxDX className="flex-1 bg-white p-4">
      <BoxDX className="flex flex-row items-center mb-4">
        <PressableDX onPress={() => navigation.goBack()} className="p-2">
          <IconDX icon={ChevronLeftIcon} className="w-6 h-6 text-gray-600" />
        </PressableDX>
        <BoxDX className="flex-1">
          <HeadingDX className="text-lg font-semibold text-center">
            Order Problems
          </HeadingDX>
        </BoxDX>
      </BoxDX>

      <BoxDX className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
        <BoxDX className="flex flex-row items-center justify-between pb-2 border-b border-dotted border-gray-300">
          <LabelDX className="text-lg font-semibold text-gray-900">
            {order.id}
          </LabelDX>
          <LabelDX className="text-gray-600">{order.customerName}</LabelDX>
          {order.items.length > 0 && (
            <ImageDX
              source={order.items[0].image}
              alt="Item Image"
              size="small"
              className="w-6 h-6 rounded-md ml-2"
            />
          )}
          <BoxDX className="bg-secondary-200 w-[24px] h-[20px] rounded-full flex items-center justify-center ml-2">
            <LabelDX className="text-typography-950 font-semibold">
              {order.itemsCount}
            </LabelDX>
          </BoxDX>
          <IconDX icon={ChevronRightIcon} className="w-6 h-6 text-gray-500 ml-2" />
        </BoxDX>

        <BoxDX className="flex flex-row items-center mt-2">
          <IconDX icon={ClockIcon} className="text-gray-500 w-4 h-4 mr-2" />
          <LabelDX className="text-gray-700">
            {order.orderDate}, {order.orderTime}
          </LabelDX>
        </BoxDX>
      </BoxDX>

      <HeadingDX className="mt-4 text-lg font-semibold">{order.status}</HeadingDX>

      <BoxDX className="bg-white mt-4 p-4 rounded-lg shadow-md border border-gray-300">
        {order.items.map((item, index) => (
          <PressableDX key={index} onPress={() => handleOpenBottomSheet(item)}>
            <BoxDX>
              <BoxDX className="flex flex-row items-center justify-between py-4">
                <BoxDX className="flex flex-col flex-1 space-y-1">
                  <LabelDX className="text-gray-500 text-sm">{item.processedStatus}</LabelDX>
                  <LabelDX className="text-gray-900 font-medium">{item.name}</LabelDX>
                  <LabelDX className="text-gray-500 text-sm">{item.issue}</LabelDX>
                </BoxDX>
                <IconDX icon={ChevronRightIcon} className="w-6 h-6 text-gray-500" />
              </BoxDX>
              {index !== order.items.length - 1 && (
                <BoxDX className="border-t border-dotted border-gray-300" />
              )}
            </BoxDX>
          </PressableDX>
        ))}
      </BoxDX>

      <BottomSheet
  ref={bottomSheetRef}
  index={-1}
  snapPoints={["50%", "75%"]}
  enablePanDownToClose={true}
  backgroundStyle={{ backgroundColor: "#f6f6f6" }} // Ensure uniform background
>
  <BottomSheetScrollView style={{ backgroundColor: "#f6f6f6" }}>
    {selectedItem && <OrderDetailsBottomSheet item={selectedItem} onClose={handleCloseBottomSheet} />}
  </BottomSheetScrollView>
</BottomSheet>
    </BoxDX>
  );
};

export default ResolvedDetailScreen;
