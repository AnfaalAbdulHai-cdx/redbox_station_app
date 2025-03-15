import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResolvedScreen from "../screens/resolvedscreen";
import ResolvedDetailScreen from "../screens/resolveddetailscreen";
import TypeQRScreen from "../screens/typeqrscreen";
import ScanScreen from "../screens/ScanScreen";
import ItemiseScreen from "../screens/itemisescreen";
import ReviewScreen from "../screens/reviewscreen";

const ScanScreenStack = createNativeStackNavigator();

export default function ScanScreenNavigator() {
  return (
      <ScanScreenStack.Navigator initialRouteName="ReviewScreen" screenOptions={{ headerShown: false }}>
        <ScanScreenStack.Screen name="QRTagScreen" component={TypeQRScreen} />
        <ScanScreenStack.Screen name="ScanScreen" component={ScanScreen} />
        <ScanScreenStack.Screen name="ItemiseScreen" component={ItemiseScreen} />
        <ScanScreenStack.Screen name="ReviewScreen" component={ReviewScreen} />
      </ScanScreenStack.Navigator>
  );
}
