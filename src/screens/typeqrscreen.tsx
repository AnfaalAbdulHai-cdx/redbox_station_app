import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import BoxDX from "../components/controls/boxdx";
import LabelDX from "../components/controls/labeldx";
import PressableDX from "../components/controls/pressabledx";
import TextFieldDX from "../components/controls/textfielddx";
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { ChevronLeftIcon } from "../components/ui/icon";

const TypeQRScreen = () => {
  const navigation = useNavigation();
  const [qrCode, setQrCode] = useState<string[]>(Array(7).fill(""));
  const [combinedQr, setCombinedQr] = useState<string>("");

  const handleInputChange = (text: string, index: number) => {
    const updatedQrCode = [...qrCode];
    updatedQrCode[index] = text;
    setQrCode(updatedQrCode);
    setCombinedQr(updatedQrCode.join("")); // Combine all inputs into a single string
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-secondary-50">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <BoxDX className="bg-black px-4 py-5 rounded-b-lg w-full flex-row items-center">
      <PressableDX onPress={() => navigation.goBack()} className="w-7 h-7 flex items-center justify-center bg-transparent">
          <ChevronLeftIcon width={30} height={30} color="white" />
        </PressableDX>
        <LabelDX className="text-white text-[22px] text-center font-semibold flex-1">
          Type in QR Tag
        </LabelDX>
      </BoxDX>

      <BoxDX className="px-4 mt3 flex-1 justify-center">
        <BoxDX className="flex-row justify-center gap-x-2">
          {qrCode.map((value, index) => (
            <TextFieldDX
              key={index}
              variant="outline"
              size="md"
              placeholder="X"
              placeholderTextColor="gray"
              className="text-black text-center text-lg font-medium w-[12%] h-12 bg-white"
              value={value}
              maxLength={1}
              onChangeText={(text: string) => handleInputChange(text, index)}
            />
          ))}
        </BoxDX>
      </BoxDX>

      {/* Scan QR Code Button - Bottom Left */}
      <PressableDX
        onPress={() => navigation.navigate("ScanScreen")}
        className="flex-row absolute bottom-4 left-4 bg-[#E21F26] p-3 rounded-lg self-start"
      >
        <CIcon name="data-matrix-scan" size={22} color="white" />
        <LabelDX className="text-white text-md font-medium text-center ml-3">
          Scan QR Code
        </LabelDX>
      </PressableDX>
    </SafeAreaView>
  );
};

export default TypeQRScreen;
