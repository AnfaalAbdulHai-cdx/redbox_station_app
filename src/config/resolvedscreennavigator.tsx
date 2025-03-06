import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResolvedScreen from "../screens/resolvedscreen";
import ResolvedDetailScreen from "../screens/resolveddetailscreen";

const ResolvedStack = createNativeStackNavigator();

export default function ResolvedStackNavigator() {
  return (
      <ResolvedStack.Navigator initialRouteName="ResolvedScreen" screenOptions={{ headerShown: false }}>
        <ResolvedStack.Screen name="ResolvedScreen" component={ResolvedScreen} />
        <ResolvedStack.Screen name="ResolvedDetailScreen" component={ResolvedDetailScreen} />
      </ResolvedStack.Navigator>
  );
}
