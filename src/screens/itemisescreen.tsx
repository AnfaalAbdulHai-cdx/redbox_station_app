import React, {useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PressableDX from '../components/controls/pressabledx';
import BoxDX from '../components/controls/boxdx';
import HeadingDX from '../components/controls/headingdx';
import LabelDX from '../components/controls/labeldx';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useTranslation} from 'react-i18next';
import {ItemiseData} from '../services/itemisedata';
import ChangeServiceSheet from './changeservicesheet';
import CategoryDetailSheet from './categorydetailsheet';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import IconDX from '../components/controls/icondx';
import {ChevronLeftIcon} from '../components/ui/icon';

interface ScanScreenProps extends NativeStackScreenProps<any, 'ItemiseScreen'> {}

interface Service {
  serviceId: number;
  serviceName: string;
  displayCategoryCount: number;
  isPopular: number;
  img: any;
  category?: {
    categoryId: number;
    categoryName: string;
    displayItemCount: number;
    isPopular: number;
    image: any;
    displayItems: string[];
  }[];
}

interface Category {
  categoryId: number;
  categoryName: string;
  displayItemCount: number;
  isPopular: number;
  image: any;
  displayItems: string[];
  serviceName: string;
}

const ItemiseScreen: React.FC<ScanScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const serviceSheetRef = useRef<BottomSheet>(null);
  const categorySheetRef = useRef<BottomSheet>(null);

  const [selectedService, setSelectedService] = useState<Service>(
    ItemiseData[2]
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const handleOpenServiceSheet = () => serviceSheetRef.current?.expand();
  const handleCloseServiceSheet = () => serviceSheetRef.current?.close();

  const handleOpenCategorySheet = (category: Category) => {
    setSelectedCategory({...category, serviceName: selectedService.serviceName});
    categorySheetRef.current?.expand();
  };
  

  const handleCloseCategorySheet = () => {
    categorySheetRef.current?.close();
    setSelectedCategory(null);
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-secondary-50">
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView>
      <BoxDX className="bg-black px-2 pb-5 flex-row justify-between items-center rounded-b-md w-full">
        <PressableDX onPress={() => navigation.goBack()}>
        <IconDX
                icon={ChevronLeftIcon}
                className="w-6 h-6 text-white"
              />
        </PressableDX>
        <HeadingDX className="text-white text-[20px] font-semibold">
          Itemise
        </HeadingDX>
        <BoxDX className="w-8" />
      </BoxDX>

      <BoxDX className="px-4 py-3">
        <LabelDX className="text-lg font-medium text-black">Add Items for</LabelDX>
        <BoxDX className="flex-row justify-between items-center mt-2">
          <LabelDX className="text-md font-medium">
            {selectedService.serviceName}
          </LabelDX>
          <PressableDX onPress={handleOpenServiceSheet}>
            <LabelDX className="text-blue-500 text-md font-medium">
              Change Service
            </LabelDX>
          </PressableDX>
        </BoxDX>
        <BoxDX className="border-b border-secondary-700 mt-2" />
      </BoxDX>
      <BoxDX className="px-4 mt-4">
        <LabelDX className="text-md font-semibold">Popular</LabelDX>
        <BoxDX className="flex-row items-center border border-secondary-700 bg-secondary-50-100 p-3 rounded-lg mt-2">
          <CIcon name="diamond-stone" size={22} color="#E21F26" />
          <LabelDX className="ml-3 text-md font-medium">Special Item</LabelDX>
        </BoxDX>
      </BoxDX>

      <BoxDX className="px-4 mt-6">
        <LabelDX className="text-md font-semibold">Category</LabelDX>
        <BoxDX className="flex-row flex-wrap justify-between mt-2">
          {selectedService?.category?.map((cat, index) => (
            <PressableDX
              key={index}
              onPress={() => handleOpenCategorySheet(cat)}
              className="w-[48%] bg-secondary-50 border border-secondary-700 p-4 rounded-lg mb-3 flex items-center justify-center">
              <CIcon name="tshirt-crew" size={32} color="#E21F26" />
              <LabelDX className="text-md font-medium mt-2 text-center">
                {cat.categoryName}
              </LabelDX>
            </PressableDX>
          ))}
        </BoxDX>
      </BoxDX>
   </ScrollView>
      <BottomSheet
        ref={serviceSheetRef}
        index={-1}
        snapPoints={['50%', '75%']}
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#fbfbfb'}}>
        <BottomSheetScrollView>
          <ChangeServiceSheet
            onClose={handleCloseServiceSheet}
            onSelectService={setSelectedService}
            initialSelectedService={selectedService}
          />
        </BottomSheetScrollView>
      </BottomSheet>
      <BottomSheet
        ref={categorySheetRef}
        index={-1}
        snapPoints={['50%', '75%']}
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#fbfbfb'}}>
        <BottomSheetScrollView>
          {selectedCategory && (
            <CategoryDetailSheet
              category={selectedCategory}
              onClose={handleCloseCategorySheet}
            />
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ItemiseScreen;
