import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import ImageDX from '../components/controls/imagedx';
import LabelDX from '../components/controls/labeldx';
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react';

const WaitingScreen = () => (
    <BoxDX className="flex-1 bg-white items-center justify-center">
        <BoxDX className="mb-3">
        <CIcon name="pause-circle" size={50} color="#E21F26" />
        </BoxDX>
      {/* <ImageDX
        source={require('../assets/Support.png')}
        alt="Received Replies"
        size="100px"
        className="mb-3"
      /> */}
      <HeadingDX className="text-black text-[16px] font-medium text-center">
        <LabelDX className="text-black text-[16px] font-medium">
          Problems waiting for reply
        </LabelDX>
      </HeadingDX>
      <LabelDX className="text-black text-[14px] font-normal text-center mt-1 leading-tight w-2/3 tracking-tight">
        All problems you will add will be visible here.
      </LabelDX>
    </BoxDX>
);

export default WaitingScreen;