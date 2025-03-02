import { View, StyleSheet, Text, Button } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import BottomSheet, { useBottomSheet } from '@gorhom/bottom-sheet';
import In24hScreen from '../../screens/In24hScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetView } from '@gorhom/bottom-sheet';

export type Ref = BottomSheet;

interface Props {
  title: string;
}

const CloseBtn = () => {
  const { close } = useBottomSheet();
  return <Button title="Close" onPress={() => close()} />;
};

const BottomSheetDX = forwardRef<BottomSheet, Props>(({ title}, ref) => {
    const snapPoints = useMemo(() => ['75%', '85%'], []);
  
    return (
      <GestureHandlerRootView>
      <BottomSheet
        ref={ref} // Make sure the ref is properly attached here
        index={-1} // Initially closed
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ backgroundColor: '#fff' }}
        backgroundStyle={{ backgroundColor: '#1d0f4e' }}
      >
        <BottomSheetView>
          <In24hScreen />
        </BottomSheetView>
      </BottomSheet>
      </GestureHandlerRootView>
    );
  });

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff'
  }
});

export default BottomSheetDX;
