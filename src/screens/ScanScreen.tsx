import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, Text, Alert } from "react-native";
import { Camera, useCameraDevice, useCodeScanner } from "react-native-vision-camera";
import BoxDX from "../components/controls/boxdx";
import LabelDX from "../components/controls/labeldx";
import { ChevronLeftIcon } from "../components/ui/icon";
import PressableDX from "../components/controls/pressabledx";
import ImageDX from "../components/controls/imagedx";

const ScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [barcodeError, setBarcodeError] = useState(false);
  const device = useCameraDevice("back");
  const cameraRef = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      setHasPermission(permission === "granted");
      if (permission !== "granted") {
        Alert.alert("Camera Permission", "Please allow camera access in settings.");
      }
    };
    requestCameraPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        const scannedValue = codes[0]?.value || "";
        if (scannedValue && scannedValue !== scannedData) {
          setScannedData(scannedValue);
          setIsScanning(false); // Stop scanning once a QR code is detected
          Alert.alert("QR Code Scanned", `Data: ${scannedValue}`);
        }
      }
    },
    onError: (error) => {
      setBarcodeError(true);
      setIsScanning(false);
      Alert.alert("Scanner Error", "Barcode module failed to load. Please try again later.");
    },
  });

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-secondary-50">
      <StatusBar backgroundColor="black" barStyle="light-content" />
      
      {/* Header */}
      <BoxDX className="bg-black px-4 py-5 rounded-b-lg w-full flex-row items-center">
        <PressableDX onPress={() => navigation.goBack()} className="w-7 h-7 flex items-center justify-center bg-transparent">
          <ChevronLeftIcon width={30} height={30} color="white" />
        </PressableDX>
        <LabelDX className="text-white text-[22px] text-center font-semibold flex-1">
          Scan a Tag
        </LabelDX>
      </BoxDX>

      {/* Scanning Area - Centered and Larger */}
      <BoxDX className="flex-1 items-center justify-center">
        {isScanning && hasPermission && !barcodeError ? (
          <BoxDX className="w-80 h-80 rounded-lg overflow-hidden border-4 border-white">
            {device ? (
              <Camera
                ref={cameraRef}
                style={{ flex: 1, width: "100%", height: "100%" }}
                device={device}
                isActive={isScanning}
                codeScanner={codeScanner}
              />
            ) : (
              <LabelDX className="text-md font-normal">Loading Camera...</LabelDX>
            )}
          </BoxDX>
        ) : (
          // Show QR Code Image when scanning is NOT active
          <ImageDX
            source={require('../assets/qrcodeimage.png')}
            alt="QR code"
            className="w-80 h-80"
            style={{ resizeMode: 'contain' }}
          />
        )}
      </BoxDX>

      {/* Error Message */}
      {barcodeError && (
        <BoxDX className="flex items-center justify-center mt-4">
          <LabelDX className="text-red-600 text-lg font-medium">
            Error: Barcode module failed to load.
          </LabelDX>
        </BoxDX>
      )}

      {/* Buttons */}
      <BoxDX className="absolute bottom-10 left-0 right-0 flex-row justify-between px-4">
        {/* Start Scanning Button */}
        {!isScanning && !barcodeError && (
          <PressableDX onPress={() => setIsScanning(true)} className="bg-[#E21F26] p-3 rounded-lg flex-1 ml-2">
            <LabelDX className="text-white text-md font-medium text-center">
              Start Scanning
            </LabelDX>
          </PressableDX>
        )}

        {/* Stop Scanning Button */}
        {isScanning && (
          <PressableDX onPress={() => setIsScanning(false)} className="bg-gray-500 p-3 rounded-lg flex-1 ml-2">
            <LabelDX className="text-white text-md font-medium text-center">
              Stop Scanning
            </LabelDX>
          </PressableDX>
        )}

        {/* QR Tag Button */}
        <PressableDX onPress={() => navigation.navigate("QRTagScreen")} className="bg-[#E21F26] p-3 rounded-lg flex-1 ml-2">
          <LabelDX className="text-white text-md font-medium text-center">
            QR Tag
          </LabelDX>
        </PressableDX>
      </BoxDX>
    </SafeAreaView>
  );
};

export default ScanScreen;
