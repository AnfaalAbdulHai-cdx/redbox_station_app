import React from 'react';
import { View } from 'react-native';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import ImageDX from '../components/controls/imagedx';
import PressableDX from '../components/controls/pressabledx';

const CategoryDetailSheet = ({ category, onClose }) => {
  return (
    <BoxDX className="p-5">
      {/* Close Button */}
      <PressableDX onPress={onClose} className="self-end">
        <LabelDX className="text-blue-500 text-md font-medium">Close</LabelDX>
      </PressableDX>
      <LabelDX className="text-lg font-semibold mb-3">{category.categoryName}</LabelDX>
    </BoxDX>
  );
};

export default CategoryDetailSheet;