import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import LabelDX from '../components/controls/labeldx';
import ButtonDX from '../components/controls/buttondx';
import IconDX from '../components/controls/icondx';
import ImageDX from '../components/controls/imagedx';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../components/ui/icon';
import { historyDetailData } from '../services/historydetailsdata';

interface Order {
  id: string;
  // other properties
}

interface Batch {
  icon: boolean;
  image: any;
  count: string;
}

interface HistoryDetailDataItem {
  orderId: string;
  status: string;
  pickupTime: string;
  customerName: string;
  driverName: string;
  batches: Batch[];
  text: string;
  totalItems: string;
}
// const historyDetailData: HistoryDetailDataItem[] = [
// ];

const HistoryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { order }: { order: Order } = route.params;

  // Find the matching order details using the order ID
  // const orderDetails=
  const orderDetails = historyDetailData.find(item => item.orderId === order.id);

  // If no matching order is found, show a fallback message
  if (!orderDetails) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <LabelDX className="text-red-500 text-lg">Order details not found</LabelDX>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <GridDX className="h-full w-full">
        {/* Header */}
        <GridItemDX className="col-span-full p-0">
          <BoxDX className="bg-black px-4 py-2 rounded-b-lg w-full flex-row items-center">
            <ButtonDX
              onPress={() => navigation.goBack()}
              className="w-7 h-7 flex items-center justify-center rounded-md mr-0 mb-3 bg-transparent">
              <ChevronLeftIcon width={30} height={30} color="white" />
            </ButtonDX>
            <HeadingDX className="text-white text-xl items-center justify-center text-center flex-1 mb-3">
              <LabelDX
                className="text-white text-[20px] text-center font-semibold "
                text="Order: "
              />
              <LabelDX
                className="text-typography-0 text-[20px] text-center font-normal"
                text={orderDetails.orderId}
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
              style={{ resizeMode: 'contain' }}
            />
            <LabelDX className="text-primary-950 ml-2 text-md text-center font-medium">
              {orderDetails.status}
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
              {orderDetails.pickupTime}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        {/* Customer Name */}
        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Customer Name
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {orderDetails.customerName}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        {/* Driver Name */}
        <GridItemDX className="px-4">
          <LabelDX className="text-typography-500 text-[14px] font-medium mb-2">
            Driver
          </LabelDX>
          <BoxDX className="bg-white rounded-lg px-3 py-2 mt-0 border border-secondary-700">
            <LabelDX className="text-typography-950 text-[16px] font-normal">
              {orderDetails.driverName}
            </LabelDX>
          </BoxDX>
        </GridItemDX>

        {/* Batches Section */}
        <GridItemDX className="px-4 mt-2">
          <BoxDX className="bg-white border border-secondary-700 flex-row items-center justify-between rounded-lg pr-2 pt-5 pb-5 pl-2">
            <BoxDX className="flex-row items-center">
              {orderDetails.batches.map((batch, index) => (
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
                {orderDetails.text}
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
              {orderDetails.totalItems}
            </LabelDX>
          </BoxDX>
        </GridItemDX>
      </GridDX>
    </SafeAreaView>
  );
};

export default HistoryDetails;