import React from 'react';
import {StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import LabelDX from '../components/controls/labeldx';
import TextFieldDX from '../components/controls/textfielddx';
import DividerDX from '../components/controls/dividerdx';
import IconDX from '../components/controls/icondx';
import ImageDX from '../components/controls/imagedx';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../components/ui/icon';
import historyDetailData from '../services/historyDetailData';

const HistoryDetails = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <GridDX className="h-full w-full">
        <GridItemDX className="col-span-full p-0">
          <BoxDX className="bg-black px-4 py-2 rounded-b-lg w-full flex-row items-center">
            <IconDX
              icon={ChevronLeftIcon}
              className="text-white w-8 h-8 mb-3"
            />
            <HeadingDX className="text-white text-xl items-center justify-center text-center flex-1 mb-3">
              <LabelDX
                className="text-white text-[20px] text-center font-semibold "
                text="Order: "
              />
              <LabelDX
                className="text-typography-0 text-[20px] text-center font-normal"
                text={historyDetailData.orderId}
              />
            </HeadingDX>
          </BoxDX>
        </GridItemDX>

        {/* Status Section */}
        <GridItemDX className="pl-4 pr-4">
          <BoxDX className="bg-green-100 flex-row items-center pr-5 pt-5 pb-5 pl-3 rounded-lg border border-success-400">
            <ImageDX
              source={require('../assets/statustick.png')}
              alt="Check Icon"
              className="w-5 h-5 ml-0"
              style={{resizeMode: 'contain'}}
            />
            <LabelDX className="text-primary-950 ml-2 text-md text-center font-medium">
              {historyDetailData.status}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        {/* Pickup Time */}
        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Pickup Time
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {historyDetailData.pickupTime}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Customer Name
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {historyDetailData.customerName}
            </LabelDX>
          </BoxDX>
        </GridItemDX>
        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Driver
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {historyDetailData.driverName}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        {/* Batches Section */}
        <GridItemDX className="px-4 mt-2">
          <BoxDX className="bg-white border border-secondary-700 flex-row items-center justify-between rounded-lg pr-2 pt-5 pb-5 pl-2">
            <BoxDX className="flex-row items-center">
              {historyDetailData.batches.map((batch, index) => (
                <BoxDX key={index} className="flex-row items-center mx-2">
                  {batch.icon && (
                    <Image source={batch.image} className="w-6 h-6" />
                  )}
                  <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3">
                    <LabelDX
                      className="text-typography-950 font-semibold"
                      text={batch.count}
                    />
                  </BoxDX>
                </BoxDX>
              ))}
              <LabelDX className="text-black text-[14px] font-normal ml-2">
                {historyDetailData.text}
              </LabelDX>
            </BoxDX>
            <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md mr-0">
              <IconDX
                icon={ChevronRightIcon}
                size={16}
                className="text-black"
              />
            </BoxDX>
          </BoxDX>
        </GridItemDX>

        {/* Total Items */}
        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Total Items
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {historyDetailData.totalItems}
            </LabelDX>
          </BoxDX>
        </GridItemDX>
      </GridDX>
    </SafeAreaView>
  );
};

export default HistoryDetails;