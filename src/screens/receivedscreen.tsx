import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import ImageDX from '../components/controls/imagedx';
import LabelDX from '../components/controls/labeldx';
import React from 'react';

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

export default ReceivedScreen;