import './global.css';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {GluestackUIProvider} from './src/components/ui/gluestack-ui-provider';
import ToastDX from './src/components/controls/toastdx';
import CheckboxDX from './src/components/controls/checkboxdx';
import LinkDX from './src/components/controls/linkdx';
import TextAreaDX from './src/components/controls/textareadx';
import TextFieldDX from './src/components/controls/textfielddx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homescreen';
import LoginScreen from './src/screens/loginscreen';
import ImageDX from './src/components/controls/imagedx';
import SignupScreen from './src/screens/signupscreen';
// import SignupScreen from './src/screens/SignupScreen';
// import HomePage from './src/screens/HomePage';
import HistoryDetails from './src/screens/historydetails';
import SupportScreen from './src/screens/SupportScreen';
import TabNavigation from './src/config/TabNavigation';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView>
    <GluestackUIProvider>
       <StatusBar backgroundColor="black" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: '#000000',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            // headerRight: () => (
            //   <ImageDX
            //     source={require('./src/assets/headerlogo.png')}
            //     alt={'logo'}
            //     className="w-182 h-215.09"
            //   />
            // ),
          }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen
            name="HomeTab"
            component={TabNavigation}
            options={{
              title: 'Red Today',
            }}
          />
            {/* <Stack.Screen
            name="HistoryDetail"
            component={HistoryDetails}
            options={{
            }}
          /> */}
           {/* <Stack.Screen
            name="SupportScreen"
            component={SupportScreen}
            options={{
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
    </GestureHandlerRootView>
  );
};

export default App;