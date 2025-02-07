import './global.css';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
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
import SignupScreen from './src/screens/signupscreen';
import ImageDX from './src/components/controls/imagedx';
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
    <GluestackUIProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Red Today',
            }}
          /> */}
           <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
