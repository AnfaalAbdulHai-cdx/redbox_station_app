import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import PressableDX from '../components/controls/pressabledx';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageDX from "../components/controls/imagedx";

export const ReviewData = {
  totalItem: 2,
  services: [
    {
      serviceName: 'Clean & Iron',
      categories: [{name: 'Shirt on Hanger', count: 2}],
    },
  ],
};

const ReviewScreen = () => {
  const navigation = useNavigation();
  const tag = 'GOFPPWV';

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-secondary-50">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* Header */}
      <BoxDX className="bg-black px-4 py-5 rounded-b-lg w-full flex-row items-center">
        <LabelDX className="text-white text-[22px] text-center font-semibold flex-1">
          Review
        </LabelDX>
      </BoxDX>

      <BoxDX className="p-4">
        {/* Total Items Section */}
        <BoxDX className="flex-row justify-end">
          <LabelDX className="text-md text-gray-500">Total Items</LabelDX>
        </BoxDX>

        <BoxDX className="bg-secondary-50 flex-row justify-between items-center">
          <LabelDX className="text-xl font-bold text-black">Items</LabelDX>
          <LabelDX className="text-lg pl-4 font-semibold text-black">
            {ReviewData.totalItem} pcs
          </LabelDX>
        </BoxDX>

        {/* Tag Section */}
        <BoxDX className="border border-secondary-700 bg-secondary-50 rounded-lg mt-4 p-2">
          <BoxDX className="flex-row justify-between items-center">
            <LabelDX className="text-md font-medium text-gray-500">Tagged With</LabelDX>
          </BoxDX>
         {/* Tag Section */}
         <BoxDX className="bg-secondary-50 rounded-lg"> {/* Added padding for better spacing */}
  <BoxDX className="flex-row justify-between items-center">
    <BoxDX className="flex-row items-center"> {/* Added a new BoxDX to group the icon and tag */}
      <CIcon name="tag" size={22} color="#E21F26" />
      <LabelDX className="text-lg font-semibold text-black ml-1"> {/* Added margin-left for spacing */}
        {tag}
      </LabelDX>
    </BoxDX>
    <PressableDX onPress={() => navigation.navigate('ScanScreen')}>
      <LabelDX className="text-blue-500 font-medium">Add extra tag(s)</LabelDX>
    </PressableDX>
  </BoxDX>
</BoxDX>
        </BoxDX>

        {/* Service Name Section */}
        {/* Service Name Section */}
{ReviewData.services.map((service, index) => (
  <BoxDX key={index} className="mt-4">
    <BoxDX className="flex-row justify-between items-center">
      <LabelDX className="text-xl font-bold text-black">
        {service.serviceName}
      </LabelDX>
      <PressableDX onPress={() => navigation.navigate('ItemiseScreen')} className="mt-2">
        <LabelDX className="text-blue-500 font-medium">+ Add item(s)</LabelDX>
      </PressableDX>
    </BoxDX>

    {/* Category Box */}
    <BoxDX className="border border-secondary-700 bg-secondary-50 rounded-lg mt-4"> {/* Increased padding */}
      {service.categories.map((category, catIndex) => (
        <BoxDX key={catIndex} className="bg-gray-200 rounded-t-lg">
          {/* Category Name with Count & Edit in the same row */}
          <BoxDX className="flex-row justify-between items-center bg-gray-200 py-4 px-2 rounded-t-lg">
            <LabelDX className="text-md font-medium text-black flex-1"> {/* Added flex-1 for equal sizing */}
              {category.name}
            </LabelDX>
            <BoxDX className="flex-row items-center">
              <LabelDX className="text-md font-semibold text-black mr-2">
                {category.count}
              </LabelDX>
              <PressableDX onPress={() => console.log('Edit category')}>
                <LabelDX className="text-blue-500 font-medium">Edit</LabelDX>
              </PressableDX>
            </BoxDX>
          </BoxDX>
        </BoxDX>
      ))}

      {/* Separator */}
      <BoxDX className="border-b border-gray-300" />

      {/* Ready to Process Section */}
      <BoxDX className="flex-row justify-between items-center py-4 px-2">
      <ImageDX
              source={require('../assets/statustick.png')}
              alt="Check Icon"
              className="w-5 h-5 ml-0"
              style={{ resizeMode: 'contain' }}
            />
        <LabelDX className="text-md font-medium text-black flex-1"> {/* Added flex-1 for equal sizing */}
          Ready to Process
        </LabelDX>
        <LabelDX className="text-md font-semibold text-gray-500">
          {service.categories[0].count}/{service.categories[0].count}
        </LabelDX>
      </BoxDX>
    </BoxDX>
  </BoxDX>
))}
      </BoxDX>
    </SafeAreaView>
  );
};

export default ReviewScreen;
