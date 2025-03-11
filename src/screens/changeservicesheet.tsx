import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import PressableDX from '../components/controls/pressabledx';
import IconDX from '../components/controls/icondx';
import { ChevronDownIcon } from '../components/ui/icon';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ItemiseData } from '../services/itemisedata';

interface Service {
    serviceId: number;
    serviceName: string;
    displayCategoryCount: number;
    isPopular: number;
    img: any; // Since you're using require() for images, `any` is appropriate
    category?: {
      categoryId: number;
      categoryName: string;
      displayItemCount: number;
      isPopular: number;
      image: any;
      displayItems: string[];
    }[];
  }
  

  interface ChangeServiceSheetProps {
    onClose: () => void;
    onSelectService: (service: Service) => void;
    initialSelectedService: Service; // Add this prop
  }
  

const ChangeServiceSheet: React.FC<ChangeServiceSheetProps> = ({ onClose, onSelectService, initialSelectedService  }) => {
  const [selectedService, setSelectedService] = useState<Service>(ItemiseData[2]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    onSelectService(service); // Update the selected service in ScanScreen
  };

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      <BoxDX className="px-4 pt-4 pb-2 flex-row items-center">
        <PressableDX onPress={onClose} className="p-2">
          <IconDX icon={ChevronDownIcon} className="w-6 h-6 text-gray-600" />
        </PressableDX>
        <LabelDX className="text-black text-2xl font-bold flex-1 text-center">
          Change Service
        </LabelDX>
      </BoxDX>

      {/* Service Selection List */}
      <BoxDX className="p-4">
        {ItemiseData.map((service: Service, index: number) => {
          const isSelected = selectedService.serviceName === service.serviceName;

          return (
            <PressableDX key={index} onPress={() => handleServiceSelect(service)}>
              <BoxDX
                className={`p-3 mt-2 rounded-lg flex-row items-center justify-between ${
                  isSelected ? 'bg-gray-200' : 'bg-gray-100'
                }`}
              >
                <CIcon name="iron" size={22} color="#E21F26" />
                <LabelDX className="text-md font-medium flex-1 ml-3">{service.serviceName}</LabelDX>
                {isSelected && (
                  <LabelDX className="text-gray-600 text-sm font-medium">Selected</LabelDX>
                )}
              </BoxDX>
            </PressableDX>
          );
        })}
      </BoxDX>
    </SafeAreaView>
  );
};

export default ChangeServiceSheet;
