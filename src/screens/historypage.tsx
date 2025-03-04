import React from "react";
import { StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import GridDX from "../components/controls/griddx";
import GridItemDX from "../components/controls/griditemdx";
import BoxDX from "../components/controls/boxdx";
import HeadingDX from "../components/controls/headingdx";
import LabelDX from "../components/controls/labeldx";
import PressableDX from "../components/controls/pressabledx";
import DividerDX from "../components/controls/dividerdx";
import TextFieldDX from "../components/controls/textfielddx"; 
import { historyDummyData } from "../services/historydummydata";
import IconDX from "../components/controls/icondx";
import { SearchIcon } from "../components/ui/icon";

const HistoryPage = () => {
   const navigation = useNavigation();
   return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      {/* Header Section with Increased Background Size */}
      <GridDX className="h-full w-full">
      <GridItemDX className="col-span-full p-0">
    <BoxDX className="bg-black px-4 py-2 rounded-b-lg w-full pb-5">
      <HeadingDX className="text-white text-xl mb-5">Order History</HeadingDX>

      <TextFieldDX
        placeholder="Search"
        isReadOnly={false} 
        rightIcon="search"
        RightIconType="MaterialIcons"
        className="px-10 py-4"
      />
    </BoxDX>
  </GridItemDX>

        {/* Date Section */}
        <GridItemDX className="p-4">
          <BoxDX className="flex-row justify-between items-center">
            <LabelDX className="text-black text-lg font-bold">
            December 2024
            </LabelDX>
            <BoxDX className="bg-gray-200 px-2 py-1 rounded-full">
              <LabelDX className="text-black text-sm font-medium">10</LabelDX>
            </BoxDX>
          </BoxDX>
        </GridItemDX>

        {/* Order List */}
        {historyDummyData.map((order, index) => (
  <GridItemDX key={index} className="p-0 py-0 bg-white">
    <PressableDX onPress={() => navigation.navigate("HistoryDetail", { order })}>
      <BoxDX className="border-b border-gray-300 pr-4 pl-4 pb-3">
        <BoxDX className="flex-row justify-between">
          <LabelDX className="text-black text-md font-small">
            {order.id}
          </LabelDX>
          <LabelDX className="text-black text-md font-small">
            {order.service}
          </LabelDX>
        </BoxDX>
        <LabelDX className="text-black text-md font-small mt-2">
          {order.name}
        </LabelDX>
        <LabelDX className="text-blue-500 text-sm mt-3">
          {order.status}
        </LabelDX>
      </BoxDX>
    </PressableDX>
  </GridItemDX>
))}
      </GridDX>
    </SafeAreaView>
  );
};

export default HistoryPage;