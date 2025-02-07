import {PropsWithChildren, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderDX from '../templates/header';

const HomeScreen = () => {
  const [heading, setHeading] = useState('Red Today');

  type SectionProps = PropsWithChildren<{
    title: string;
  }>;

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <HeaderDX heading={heading} /> */}
      <Text style={{color: 'white'}}>heelllloo</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
