import React, { useRef, useCallback } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetView , BottomSheetScrollView} from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next';
import In24hScreen from './In24hScreen';
import PressableDX from '../components/controls/pressabledx';
import TextFieldDX from '../components/controls/textfielddx';
import ButtonDX from '../components/controls/buttondx';

export default function TomorrowScreen() {
  const { t } = useTranslation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Function to open the bottom sheet
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  // Function to close the bottom sheet
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Button to open Bottom Sheet */}
        <Button title="Search & Filter" onPress={handleOpenPress} />
        <ButtonDX onPress={handleOpenPress} className="bg-transparent p-0">
  <TextFieldDX
    placeholder={t("searchAndFilter")}
    leftIcon="search"
    rightIcon="filter"
    className="px-4 py-2"
    isReadOnly={true}
  />
</ButtonDX>
        {/* Bottom Sheet */}
        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['25%', '50%']} enablePanDownToClose={true}>
          <BottomSheetScrollView>
          {/* <View style={styles.sheetContent}>
            <Text style={styles.sheetText}>Awesome Bottom Sheet</Text>
            <Button title="Close" onPress={handleClosePress} />
          </View> */}
          <In24hScreen/>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  sheetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
