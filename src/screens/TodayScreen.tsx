import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import PressableDX from '../components/controls/pressabledx';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import TextFieldDX from '../components/controls/textfielddx';
import ordersData from '../services/ordersData';
import { useTranslation } from 'react-i18next';
import todayscreenData from '../services/todayscreendata';
import LinkDX from '../components/controls/linkDX';
import ImageDX from '../components/controls/imagedx';
import In24hScreen from './In24hScreen';

const TodayScreen = () => {
  const { t } = useTranslation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View className="flex-1 bg-white">
      {/* ScrollView for Order List */}
      <ScrollView className="flex-1">
        <BoxDX className="px-0 pt-3">
          <PressableDX onPress={handleOpenPress}>
            <TextFieldDX
              placeholder={t("searchAndFilter")}
              leftIcon="search"
              rightIcon="filter"
              RightIconType="MaterialCommunityIcons"
              className="px-4 py-2"
              isReadOnly={true}
              onPress={handleOpenPress}
            />
          </PressableDX>
        </BoxDX>

        {/* Mapping Orders Data */}
        {ordersData.map((order) => (
          <BoxDX key={order.id} className="mx-4 mt-4">
            <BoxDX className="flex-row justify-between items-center">
              <LabelDX className="text-gray-600 font-medium">{order.time}</LabelDX>
              <BoxDX className="bg-blue-500 w-[30px] h-[24px] rounded-[19px] flex items-center justify-center">
                <LabelDX className="text-white text-sm font-bold leading-none ml-0.5">
                  {order.total}
                </LabelDX>
              </BoxDX>
            </BoxDX>

            <BoxDX className="bg-white mt-2 rounded-lg shadow-sm border border-gray-200">
              <BoxDX className="p-3">
                <BoxDX className="flex-row items-center justify-between">
                  <LabelDX className="text-blue-500 text-md font-medium">{order.status}</LabelDX>
                  <BoxDX className="flex-row items-center">
                    {todayscreenData.batches.map((batch, index) => (
                      <BoxDX key={index} className="flex-row items-center mx-2">
                        {batch.icon && (
                          <ImageDX source={batch.image} alt={batch.icon} className="w-6 h-6" />
                        )}
                        <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3">
                          <LabelDX className="text-typography-950 font-semibold items-center justify-center" text={batch.count} />
                        </BoxDX>
                      </BoxDX>
                    ))}
                  </BoxDX>
                </BoxDX>
              </BoxDX>
              <BoxDX className="h-[1px] bg-gray-300 w-full" />
              <LinkDX linkAddress="/ Show Orders" linkText=" Show Orders" className="text-blue-500 py-3 text-center font-medium" />
            </BoxDX>
          </BoxDX>
        ))}
      </ScrollView>

      {/* BottomSheet Outside ScrollView */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['75%', '85%']} enablePanDownToClose={true}>
        <BottomSheetScrollView>
          <In24hScreen />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default TodayScreen;
