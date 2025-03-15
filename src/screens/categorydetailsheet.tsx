import React, {useState} from 'react';
import PressableDX from '../components/controls/pressabledx';
import BoxDX from '../components/controls/boxdx';
import IconDX from '../components/controls/icondx';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../components/ui/icon';
import HeadingDX from '../components/controls/headingdx';
import LabelDX from '../components/controls/labeldx';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProblemData} from '../services/problemdata';
import CheckboxDX from '../components/controls/checkboxDX';

interface Category {
  categoryName: string;
  displayItems: string[];
  isPopular?: number;
  serviceName: string;
}

interface CategoryDetailSheetProps {
  category: Category;
  onClose: () => void;
}

const CategoryDetailSheet: React.FC<CategoryDetailSheetProps> = ({
  category,
  onClose,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<
    'category' | 'item' | 'problems' | 'problemDetail'
  >('category');
  const [count, setCount] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const selectAllItems = () => {
    if (selectedItems.length === count) {
      setSelectedItems([]);
    } else {
      setSelectedItems(Array(count).fill(selectedItem || ''));
    }
  };


  return (
    <>
      {viewMode === 'category' && (
        <BoxDX className="flex-1 h-full p-4">
          <BoxDX className="flex-row items-center justify-between pb-3">
            <PressableDX onPress={onClose}>
              <IconDX icon={ChevronDownIcon} className="w-6 h-6 text-black" />
            </PressableDX>
            <HeadingDX className="text-black text-[20px] font-semibold">
              {category.categoryName}
            </HeadingDX>
            <BoxDX className="w-6" />
          </BoxDX>

          <BoxDX className="items-center mt-4">
            <CIcon name="tshirt-crew" size={80} color="#E21F26" />
          </BoxDX>

          <BoxDX className="mb-0 bottom-0 justify-end">
            {category.displayItems.map((item, index) => (
              <PressableDX
                key={index}
                onPress={() => {
                  setSelectedItem(item);
                  setViewMode('item');
                }}>
                <BoxDX className="flex-row items-center border border-secondary-700 bg-secondary-50-100 p-3 rounded-lg mt-2">
                  <LabelDX className="ml-3 text-md font-medium">{item}</LabelDX>
                </BoxDX>
              </PressableDX>
            ))}
          </BoxDX>
          {category.isPopular === 1 && (
        <BoxDX>
          <BoxDX className="flex-row items-center border border-secondary-700 bg-secondary-50-100 p-3 rounded-lg mt-2">
            <CIcon name="diamond-stone" size={22} color="#E21F26" />
            <LabelDX className="ml-3 text-md font-medium">Special Item</LabelDX>
          </BoxDX>
        </BoxDX>
      )}
        </BoxDX>
      )}

      {viewMode === 'item' && (
        <BoxDX className="flex h-full p-4">
          <BoxDX className="flex-row items-center justify-between pb-3">
            <PressableDX onPress={() => setViewMode('category')}>
              <IconDX icon={ChevronLeftIcon} className="w-6 h-6 text-black" />
            </PressableDX>
            <HeadingDX className="text-black text-[20px] font-semibold">
              {selectedItem}
            </HeadingDX>
            <BoxDX className="w-6" />
          </BoxDX>

          <BoxDX className="border border-secondary-700 bg-secondary-50 p-3 rounded-lg mt-4">
            <LabelDX className="text-md font-medium mb-2">Count Items</LabelDX>
            <BoxDX className="flex-row items-center justify-between">
              <LabelDX className="text-lg text-black font-semibold">
                {count}
              </LabelDX>
              <BoxDX className="flex-row">
                <PressableDX
                  onPress={() => setCount(prev => Math.max(1, prev - 1))}>
                  <BoxDX className="w-10 h-10 border border-[#E21F26] bg-secondary-50 flex items-center justify-center rounded-lg mx-2">
                    <LabelDX className="text-[#E21F26] text-lg">-</LabelDX>
                  </BoxDX>
                </PressableDX>
                <PressableDX onPress={() => setCount(prev => prev + 1)}>
                  <BoxDX className="w-10 h-10 border border-[#E21F26] bg-secondary-50-100 flex items-center justify-center rounded-lg">
                    <LabelDX className="text-[#E21F26] text-lg">+</LabelDX>
                  </BoxDX>
                </PressableDX>
              </BoxDX>
            </BoxDX>
          </BoxDX>

          <BoxDX className="flex-row justify-between mt-[50vh]">
            <PressableDX
              className="bg-[#E21F26] p-3 rounded-lg flex-1 mr-2"
              onPress={() => setViewMode('problems')}>
              <LabelDX className="text-white text-md font-medium text-center">
                Add Problems
              </LabelDX>
            </PressableDX>
            <PressableDX className="bg-[#E21F26] p-3 rounded-lg flex-1 ml-2">
              <LabelDX className="text-white text-md font-medium text-center">
                Save
              </LabelDX>
            </PressableDX>
          </BoxDX>
        </BoxDX>
      )}

      {viewMode === 'problems' && (
        <BoxDX className="flex h-full p-4">
          <BoxDX className="flex-row items-center justify-between pb-3">
            <PressableDX onPress={() => setViewMode('item')}>
              <IconDX icon={ChevronLeftIcon} className="w-6 h-6 text-black" />
            </PressableDX>
            <HeadingDX className="text-black text-[20px] font-semibold">
              Select Problems
            </HeadingDX>
            <BoxDX className="w-6" />
          </BoxDX>

          <BoxDX className="border border-secondary-700 bg-secondary-50 rounded-lg mt-4">
            <LabelDX className="text-md text-black font-medium p-3 bg-secondary-200 rounded-lg">
              I want to add note to the customer
            </LabelDX>
            <BoxDX className="border-b border-gray-300 mb-2" />
            {ProblemData.customerNotes.map((note, index) => (
              <BoxDX
                key={index}
                className="flex-row items-center justify-between p-2 border-b border-gray-300">
                {/* Left Icon and Text */}
                <BoxDX className="flex-row items-center">
                  <CIcon name="star-four-points" size={22} color="#E21F26" />
                  <LabelDX className="ml-2">{note}</LabelDX>
                </BoxDX>
                {/* Right Icon */}
                <IconDX
                  icon={ChevronRightIcon}
                  className="w-6 h-6 text-black"
                />
              </BoxDX>
            ))}
          </BoxDX>

          <BoxDX className="border border-secondary-700 bg-secondary-50 rounded-lg mt-4">
            <LabelDX className="text-md text-black font-medium p-3 bg-secondary-200 rounded-lg">
              I need Customer's confirmation
            </LabelDX>
            <BoxDX className="border-b border-gray-300" />
            {ProblemData.customerProblems.map((problem, index) => (
              <PressableDX
                key={index}
                onPress={() => {
                setSelectedProblem(problem.name);
                setViewMode('problemDetail')}}>
                <BoxDX className="flex-row items-center border-b border-gray-300 p-3">
                  <BoxDX className="w-8 flex items-center justify-center">
                    <CIcon name={problem.icon} size={22} color="#E21F26" />
                  </BoxDX>
                  <LabelDX className="flex-1 ml-2">{problem.problem}</LabelDX>
                  <IconDX
                    icon={ChevronRightIcon}
                    className="w-6 h-6 text-black"
                  />
                </BoxDX>
              </PressableDX>
            ))}
          </BoxDX>
        </BoxDX>
      )}
      {viewMode === 'problemDetail' && (
        <BoxDX className="flex h-full p-4">
          <BoxDX className="flex-row items-center justify-between pb-3">
            <PressableDX onPress={() => setViewMode('problems')}>
              <IconDX icon={ChevronLeftIcon} className="w-6 h-6 text-black" />
            </PressableDX>
            <HeadingDX className="text-black text-[20px] font-semibold">
              {selectedProblem}
            </HeadingDX>
            <BoxDX className="w-6" />
          </BoxDX>

          <LabelDX className="text-md font-medium mb-2">What item is affected?</LabelDX>

          <BoxDX className="border border-secondary-700 bg-secondary-50 p-3 rounded-lg mt-4">
            {Array(count)
              .fill(selectedItem || '')
              .map((item, index) => (
                <BoxDX key={index} className="flex-row items-center mb-2">
                  <CheckboxDX
                    labelText={item}
                    classNamelabel="text-black text-base"
                    isChecked={selectedItems.includes(item)}
                    onChange={() => toggleItemSelection(item)}
                  />
                </BoxDX>
              ))}
          </BoxDX>

          <BoxDX className="flex-row items-center justify-between mt-4">
            <PressableDX onPress={selectAllItems}>
              <LabelDX className="text-md font-medium">Select All</LabelDX>
            </PressableDX>
            <LabelDX className="text-md font-medium">
              {selectedItems.length}/{count} Selected
            </LabelDX>
          </BoxDX>

          <PressableDX
            className="bg-[#E21F26] p-3 rounded-lg flex-1 mt-4"
            onPress={() => setViewMode('problems')}>
            <LabelDX className="text-white text-md font-medium text-center">
              Continue
            </LabelDX>
          </PressableDX>
        </BoxDX>
      )}
    </>
  );
};

export default CategoryDetailSheet;
