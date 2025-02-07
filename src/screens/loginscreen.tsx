import TextFieldDX from '../components/controls/textfielddx';
import GridItemDX from '../components/controls/griditemdx';
import ImageDX from '../components/controls/imagedx';
import GridDX from '../components/controls/griddx';
import HeadingDX from '../components/controls/headingdx';
import ButtonDX from '../components/controls/buttondx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckboxDX from '../components/controls/checkboxDX';
import LinkDX from '../components/controls/linkDX';
import LabelDX from '../components/controls/labeldx';
import '../../global.css';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
  <StatusBar backgroundColor="white" barStyle="dark-content" />
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 120, android: 0 })}
  >
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true} 
      extraScrollHeight={20}
    >
      <GridDX className="bg-background-0 h-full">
        <GridItemDX className="items-center" style={{ marginTop: 103 }}>
          <ImageDX
            source={require('../assets/logo.png')}
            alt={'logo'}
            className="w-182 h-215.09"
          />
        </GridItemDX>

        {/* Input Fields */}
        <GridItemDX className="mb-0 mt-5">
          <HeadingDX size={'xl'} text={'Welcome to RedBox'} />
          <TextFieldDX
            variant="outline"
            size="md"
            label="Email"
            placeholder={'Enter email'}
            className="text-typography-950 text-base font-medium mt-5"
          />
          <TextFieldDX
            variant="outline"
            size="md"
            label="Password"
            placeholder={'******'}
            type="password"
            className="text-typography-950 text-base font-medium mt-2"
            hint="Must be at least 6 characters."
          />
          <GridItemDX className="flex flex-row justify-between items-center w-full m-0 p-0 px-0 mt-1">
            <CheckboxDX labelText="Remember Me" classNamelabel="text-primary-950"/>
            <LinkDX
              linkAddress="/forgot-password"
              linkText="Forgot Password?"
              className="text-right text-blue-500 text-sm font-normal"
            />
          </GridItemDX>
        </GridItemDX>

        {/* Login Button */}
        <GridItemDX className="mt-0">
          <ButtonDX
            variant={'solid'}
            text="Log In"
            className="bg-[#E21F26] text-white"
          />
          <GridItemDX className="text-center m-0 mt-2 p-0 flex flex-row items-center justify-center">
            <LabelDX className="" text="Don't have an account?" />
            <LinkDX
              linkAddress="/Signup"
              linkText="Sign Up"
              className="ml-1 text-blue-500 text-sm font-normal"
            />
          </GridItemDX>
        </GridItemDX>
      </GridDX>
    </KeyboardAwareScrollView>
  </KeyboardAvoidingView>
</SafeAreaView>
  );
};

export default LoginScreen;