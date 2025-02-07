import TextFieldDX from '../components/controls/textfielddx';
import GridItemDX from '../components/controls/griditemdx';
import ImageDX from '../components/controls/imagedx';
import GridDX from '../components/controls/griddx';
import HeadingDX from '../components/controls/headingdx';
import ButtonDX from '../components/controls/buttondx';
import PressableDX from '../components/controls/pressabledx';
import LinkDX from '../components/controls/linkDX';
import IconDX from '../components/controls/icondx';
import {View,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LabelDX from '../components/controls/labeldx';

const SignupScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <GridDX className="bg-background-0 h-full">
      {/* Logo */}
      <GridItemDX className="items-center" style={{marginTop: 103}}>
          <ImageDX
            source={require('../assets/logo.png')}
            alt={'logo'}
            className="w-182 h-215.09"
          />
        </GridItemDX>

        {/* Input Fields */}
        <GridItemDX className="mb-0">
          <HeadingDX size={'xl'} text={'Create Account'} />
          <TextFieldDX
            variant="outline"
            size="md"
            label="Email"
            placeholder={'Enter email'}
            className="text-typography-950 text-base font-small mt-5"
          />
          <TextFieldDX
            variant="outline"
            size="md"
            label="Password"
            placeholder={'Enter password'}
            type="password"
            className="text-typography-950 text-base font-small mt-2 "
            hint="Must be at least 6 characters."
          />
        </GridItemDX>
        {/* Signup Button */}
        <GridItemDX className="mt-0">
          <ButtonDX variant={'solid'} text="Sign Up" className="bg-[#E21F26] text-white"/>
        </GridItemDX>

        <GridItemDX className="text-center m-0 mt-0 p-0 flex flex-row items-center justify-center">
        <LabelDX className="text-black" text="Already have an account?" />
        <LinkDX linkAddress="/Login" className="ml-1 text-blue-500 underline" linkText="Sign In"/>
        </GridItemDX>
        
        <GridItemDX className="items-center flex-col gap-1">
        <LabelDX className="text-black text-base text-center" text="Clicking signing up, you agree with Redbox’s" />
        <GridItemDX className="items-center flex-row justify-center m-0 p-0 mb-0 mt-0 -mt-1">
        <LinkDX linkAddress="/terms" linkText="Terms" className="text-blue-500 no-underline" />
        <LabelDX className="text-black" text=" and " />
        <LinkDX linkAddress="/privacy" linkText="Privacy Policy" className="text-blue-500 no-underline" />
        </GridItemDX>
        </GridItemDX>

      </GridDX>
    </SafeAreaView>
  );
};

export default SignupScreen;
