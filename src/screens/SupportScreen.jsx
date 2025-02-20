import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, Text} from 'react-native';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import ImageDX from '../components/controls/imagedx';
import LabelDX from '../components/controls/labeldx';
import IconDX from '../components/controls/icondx';
import {ChevronLeftIcon} from '../components/ui/icon';

const Tab = createMaterialTopTabNavigator();

const ReceivedScreen = () => (
  <BoxDX className="flex-1 bg-white items-center justify-center">
    <ImageDX
      source={require('../assets/Support.png')}
      alt="Received Replies"
      size="100px"
      className="mb-3"
    />
    <HeadingDX className="text-black text-[16px] font-medium text-center">
      <LabelDX className="text-black text-[16px] font-medium">
        Received Customer Replies
      </LabelDX>
    </HeadingDX>
    <LabelDX className="text-black text-[14px] font-normal text-center mt-1 leading-tight w-2/3 tracking-tight">
      All the replies for the problems you have added will be visible here.
    </LabelDX>
  </BoxDX>
);

const WaitingScreen = () => (
  <BoxDX className="flex-1 bg-white items-center justify-center">
    <Text className="text-black text-lg">Waiting Requests</Text>
  </BoxDX>
);

const ResolvedScreen = () => (
  <BoxDX className="flex-1 bg-white items-center justify-center">
    <Text className="text-black text-lg">Resolved Requests</Text>
  </BoxDX>
);

const SupportScreen = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <BoxDX className="bg-black px-2 pb-5 flex-row justify-between items-center rounded-b-md w-full">
        <HeadingDX className="text-white text-[20px] font-semibold ml-4">
          Support
        </HeadingDX>
      </BoxDX>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, fontWeight: 400},
          tabBarActiveTintColor: '#E21F26',
          tabBarInactiveTintColor: '#B3B3B3',
          tabBarIndicatorStyle: {
            backgroundColor: '#E21F26',
            height: 2,
            bottom: -2,
          },
          tabBarStyle: {
            marginHorizontal: 10,
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 2,
            borderBottomColor: '#D3D3D3',
          },
        }}>
        <Tab.Screen name="Received" component={ReceivedScreen} />
        <Tab.Screen name="Waiting" component={WaitingScreen} />
        <Tab.Screen name="Resolved" component={ResolvedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default SupportScreen;