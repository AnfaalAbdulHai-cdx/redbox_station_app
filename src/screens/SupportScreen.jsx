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
import ReceivedScreen from './receivedscreen';
import WaitingScreen from './waitingscreen';
import ResolvedStackNavigator from '../config/resolvedscreennavigator';

const Tab = createMaterialTopTabNavigator();

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
        <Tab.Screen name="Resolved" component={ResolvedStackNavigator} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default SupportScreen;