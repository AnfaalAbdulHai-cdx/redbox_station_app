import React from "react";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import ImageDX from "../components/controls/imagedx";
import LabelDX from "../components/controls/labeldx";
import IconDX from "../components/controls/icondx";
import PressableDX from "../components/controls/pressabledx";
import { CloseIcon } from "../components/ui/icon";

const OrderDetailsBottomSheet = ({ item, onClose }) => {
  if (!item) return null; // Ensure item is valid before rendering

  return (
    <BoxDX className="p-4 h-100 bg-background-50 rounded-t-lg">
      <BoxDX className="relative flex flex-row items-center mb-4">
  <PressableDX onPress={onClose} className="absolute left-0 p-2">
    <IconDX icon={CloseIcon} className="w-6 h-6 text-gray-600" />
  </PressableDX>
  <BoxDX className="flex-1 flex items-center justify-center">
    <HeadingDX className="text-lg font-semibold -ml-4">Details</HeadingDX>
  </BoxDX>
</BoxDX>

      {/* Pack Unprocessed Section */}
      <HeadingDX className="text-md font-semibold mb-2 text-left">
        Pack Unprocessed
      </HeadingDX>
      <BoxDX className="bg-background-50 p-4 rounded-lg border border-gray-300">
        <LabelDX className="text-sm text-gray-700">{item.processedStatus}</LabelDX>
        <BoxDX className="border-b border-dotted border-gray-300 my-2" />
        <BoxDX className="flex flex-row justify-between items-center">
          <BoxDX>
            <LabelDX className="text-md font-medium">{item.name}</LabelDX>
            <LabelDX className="text-sm text-gray-600">{item.issue}</LabelDX>
          </BoxDX>
          <LabelDX className="text-md font-semibold">{item.quantity}</LabelDX>
        </BoxDX>
      </BoxDX>

      {/* Image Section */}
      <ImageDX
        source={item.imageUrl}
        alt="Item Image"
        className="w-24 h-24 rounded-md mt-4"
      />

      {/* Suggestion Section */}
      <HeadingDX className="text-md font-semibold mt-4 text-left">
        Suggestion
      </HeadingDX>
      <BoxDX className="bg-background-50 p-4 rounded-lg border border-gray-300 mt-2">
        <LabelDX className="text-sm text-gray-700">Checking</LabelDX>
      </BoxDX>
    </BoxDX>
  );
};

export default OrderDetailsBottomSheet;
