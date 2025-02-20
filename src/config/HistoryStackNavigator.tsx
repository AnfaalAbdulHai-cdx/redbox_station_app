import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistoryPage from "../screens/historypage";
// import HistoryScreen from "../screens/HistoryScreen"
import HistoryDetails from "../screens/historydetails";
// import HistoryDetailScreen from "../screens/HistoryDetails"; 

const HistoryStack = createNativeStackNavigator();

const HistoryStackNavigator = () => {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="HistoryMain" component={HistoryPage} />
      <HistoryStack.Screen name="HistoryDetail" component={HistoryDetails} />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackNavigator;