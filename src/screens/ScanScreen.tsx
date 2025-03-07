import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Text } from 'react-native';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import IconDX from '../components/controls/icondx';
import { ChevronLeftIcon } from '../components/ui/icon';
// import ReceivedScreen from './ReceivedScreen';

const Tab = createMaterialTopTabNavigator();

const ReceivedScreen = () => (
  <BoxDX className="flex-1 bg-white items-center justify-center">
    <Text className="text-black text-lg">Received Requests</Text>
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

const ScanScreen = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <GridDX className="flex-1 w-full">
        {/* Header with Fixed Height */}
        <GridItemDX className="col-span-full h-16">
          <BoxDX className="bg-black px-4 py-2 rounded-b-lg flex-row items-center h-full">
            <IconDX icon={ChevronLeftIcon} className="text-white w-8 h-8" />
            <HeadingDX text="Scan" className="text-white text-xl flex-1 text-center" />
          </BoxDX>
        </GridItemDX>

        <GridItemDX className="flex-1">
          <BoxDX className="flex-1 mt-2 pt-4">
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: 'black' },
                tabBarStyle: { backgroundColor: 'white' },
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Received" component={ReceivedScreen} />
              <Tab.Screen name="Waiting" component={WaitingScreen} />
              <Tab.Screen name="Resolved" component={ResolvedScreen} />
            </Tab.Navigator>
          </BoxDX>
        </GridItemDX>
      </GridDX>
    </SafeAreaView>
  );
};

export default ScanScreen;