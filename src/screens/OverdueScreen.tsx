import React from "react";
import { ScrollView } from "react-native";
import BoxDX from "../components/controls/boxdx";
import LabelDX from "../components/controls/labeldx";
import ImageDX from "../components/controls/imagedx";
import TextFieldDX from "../components/controls/textfielddx";
import ordersData from "../services/ordersData"; // Import order data
import { useTranslation } from "react-i18next";
import todayscreenData from "../services/todayscreendata";
import LinkDX from '../components/controls/linkDX';

const OverdueScreen = () => {
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Search Bar */}
      <BoxDX className="px-0 pt-3">
        <TextFieldDX
          placeholder={t("searchAndFilter")}
          leftIcon="search"  
          rightIcon="filter"
          className="px-4 py-2"
        />
      </BoxDX>

      {ordersData.map((order) => (
        <BoxDX key={order.id} className="mx-4 mt-4">
          {/* Time Section */}
          <BoxDX className="flex-row justify-between items-center">
            <LabelDX className="text-gray-600 font-medium">{order.time}</LabelDX>
            <BoxDX className="bg-blue-500 w-[30px] h-[24px] rounded-[19px] flex items-center justify-center">
  <LabelDX className="text-white text-sm font-bold leading-none ml-0.5">
    {order.total}
  </LabelDX>
</BoxDX>
            
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

                  {/* history new code */}
                 
                  <BoxDX className="flex-row items-center">
                    {todayscreenData.batches.map((batch, index) => (
                    <BoxDX key={index} className="flex-row items-center mx-2">
                    {batch.icon && (
                       <ImageDX source={batch.image} alt={batch.icon}  className="w-6 h-6" />
                     )}
                      <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3">
                           <LabelDX className="text-typography-950 font-semibold items-center justify-center" text={batch.count} />
                      </BoxDX>
                    </BoxDX>
                     ))}
   
                    </BoxDX>
              </BoxDX>
            </BoxDX>

            {/* Separator Line */}
            <BoxDX className="h-[1px] bg-gray-300 w-full" />

            {/* Show Orders Link */}
            <LinkDX linkAddress="/ Show Orders" linkText=" Show Orders" className="text-blue-500 py-3  text-center font-medium" />
            
          </BoxDX>
        </BoxDX>
      ))}
    </ScrollView>
  );
};

export default OverdueScreen;
