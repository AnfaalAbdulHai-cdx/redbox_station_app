import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridDX from '../components/controls/griddx';
import GridItemDX from '../components/controls/griditemdx';
import HeadingDX from '../components/controls/headingdx';
import {dummyData} from '../services/dummyData';
import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';
import IconDX from '../components/controls/icondx';
import ImageDX from '../components/controls/imagedx';
import DividerDX from '../components/controls/dividerdx';
import {PlayIcon, ChevronRightIcon} from '../components/ui/icon';

const HomePage = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" barStyle="light-content" />
 
      <GridDX className="flex-row items-center bg-background-0 h-full">
      <GridItemDX className="col-span-full p-0">
          <BoxDX className="bg-black px-2 py-5 flex-row justify-between items-center rounded-b-xl w-full">
            <HeadingDX className="text-white text-xl mt-[-10px] ml-[10px]">Red Today</HeadingDX>

            {/* Logo Image Inside GridDX */}
            <GridDX className="w-10 h-10 rounded-full overflow-hidden mt-[-10px] mr-[12px]">
              <ImageDX
                source={require("../assets/headerlogo.png")}
                alt="Header Logo"
                className="w-full h-full"
                style={{ resizeMode: "contain" }}
              />
            </GridDX>
          </BoxDX>
        </GridItemDX>

        {/* Ready Orders Section */}
      <GridItemDX className="p-3">
     <BoxDX className="flex flex-row items-center space-x-2">
      {/* Vector Image Inside GridDX (Small & Circular) */}
       <GridDX className="w-8 h-8  overflow-hidden relative flex  justify-center items-center">
        <ImageDX source={require("../assets/Vector.png")} alt="Shirt Logo" className="w-full h-full"  style={{ resizeMode: "contain" }}/>
        {/* Shirt Number Overlay */}
        <LabelDX className="absolute flex text-sm text-white font-bold  justify-center items-center left-[10px]">
         {dummyData.tshirtNumber}
        </LabelDX>
    </GridDX>

      {/* Text Content */}
      <LabelDX className="text-black text-lg font-small ml-2">
       ready orders out of{" "}
       <LabelDX className="text-black font-bold text-lg">
        {dummyData.readyOrders}
       </LabelDX>
      </LabelDX>
     </BoxDX>
  
    {/* Divider Line */}
    <BoxDX className="mt-4 w-[99%] max-w-[100%] h-[1px] bg-gray-300 self-center" />

    {/* <BoxDX className="mt-2 w-[90%] h-[1px] bg-gray-300 self-center" /> */}
    </GridItemDX>
     

     {/* Show Only Section */}
<GridItemDX className="p-4">
  {/* "Show only:" Label (Moved Up) */}
  <BoxDX className="mb-5 mt-[-30px]">
    <LabelDX className="text-black text-lg font-normal">Show only:</LabelDX>
  </BoxDX>

  {/* Full-Width DividerDX */}
  <DividerDX orientation="horizontal" className="w-[100%] h-8 border border-gray-300 rounded-md flex-row overflow-hidden self-center">
    {/* Left Section (Active: 11 AM) */}
    <BoxDX className="flex-1 bg-[#E21F26] justify-center items-center">
      <LabelDX className="text-white font-bold text-sm">11 AM</LabelDX>
    </BoxDX>

    {/* Right Section (Inactive: 4 PM) */}
    <BoxDX className="flex-1 bg-white justify-center items-center">
      <LabelDX className="text-gray-500 font-normal text-sm">4 PM</LabelDX>
    </BoxDX>
  </DividerDX>
</GridItemDX>

{/* CHECK DRIVERS */}
<GridItemDX className="pl-4 pr-4 m-0">
  <BoxDX className="flex flex-row items-center border border-gray-300 rounded-lg px-4 py-4 space-x-3 mt-0">
    
    {/* Truck Icon */}
    <ImageDX 
      source={require("../assets/truck.png")} // Ensure you have the correct path
      alt="Truck Icon"
      className="w-6 h-6"
      style={{ resizeMode: "contain" }}
    />

    {/* Text Label */}
    <LabelDX className="text-primary-400 font-normal text-lg ml-4 flex-1">
      Check Drivers
    </LabelDX>

    {/* Right Arrow Icon using IconDX */}
    <BoxDX className="w-7 h-7 items-center justify-center rounded-md">
      <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
    </BoxDX>

  </BoxDX>
</GridItemDX>

<GridItemDX className="pl-4 pr-4">
        <GridItemDX className="w-full flex flex-row justify-between mt-2">
          <HeadingDX
            text="Due Orders"
            className="text-left text-[20px] font-semibold"
          />
          <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
            <LabelDX
              className="text-typography-950 font-semibold"
              text={dummyData.dueOrders.total}
            />
          </BoxDX>
        </GridItemDX>
        <GridItemDX className="w-full h-[111px] bg-white border-[1px] border-secondary-700 rounded-[4px] flex-row items-center mt-4">
  <GridItemDX className="flex-col ml-3 mr-3 flex-1"> 
    <BoxDX className="w-[84px] h-[32px] border-[1px] border-secondary-950 rounded-[100px] bg-typography-50 flex-row items-center justify-center mt-0 ml-0">
      <ImageDX
        source={require('../assets/playicon.png')}
        alt={'playicon'}
        className="w-5 h-5 absolute left-2"
      />
      <LabelDX className="text-black font-medium ml-6" text="Pack" />
    </BoxDX>
    <BoxDX className="w-full flex flex-row items-center mt-5">
      <LabelDX
        className="text-primary-300 font-normal text-[16px]"
        text="Orders"
      />
      <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3">
        <LabelDX
          className="text-typography-950 font-semibold"
          text={dummyData.dueOrders.total}
        />
      </BoxDX>

      <ImageDX
        source={require('../assets/Vector.png')}
        alt={'shirt'}
        className="w-6 h-6 ml-8"
      />

      <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center ml-3">
        <LabelDX
          className="text-typography-950 font-semibold"
          text={dummyData.dueOrders.orders[1].count}
        />
      </BoxDX>
    </BoxDX>
  </GridItemDX>
  <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md mr-3"> 
    <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
  </BoxDX>
</GridItemDX>
<GridItemDX className="w-full flex flex-row justify-between mt-4">
          <HeadingDX
            text="Start Processing Today"
            className="text-left text-[20px] font-semibold"
          />
          <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
            <LabelDX
              className="text-typography-950 font-semibold"
              text={dummyData.startProcessingToday[0].count}
            />
          </BoxDX>
        </GridItemDX>
        <GridItemDX className="w-full h-[111px] bg-white border-[1px] border-secondary-700 rounded-[4px] flex-row mt-4">
  <GridItemDX className="flex-col ml-3 mr-3 flex-1 justify-center">
    <BoxDX className="flex-row items-center justify-between mt-0 ml-0">
      <BoxDX className="flex-row items-center">
        <ImageDX
          source={require('../assets/doublearrow.png')}
          alt={'doublearrow'}
          className="w-7 h-7"
        />
        <LabelDX className="text-primary-300 font-normal text-[16px] ml-2" text="Prioritized Future Orders" />
      </BoxDX>
      <BoxDX className="flex-row items-center ml-auto">
        <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
          <LabelDX
            className="text-typography-950 font-semibold"
            text={dummyData.startProcessingToday[0].count}
          />
        </BoxDX>
        <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md ml-3">
          <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
        </BoxDX>
      </BoxDX>
    </BoxDX>

    <BoxDX className="flex-row items-center justify-between mt-3 ml-0">
      <BoxDX className="flex-row items-center">
        <ImageDX
          source={require('../assets/inspect.png')}
          alt={'inspect'}
          className="w-7 h-7"
        />
        <LabelDX className="text-primary-300 font-normal text-[16px] ml-2" text="Inspect" />
      </BoxDX>
      <BoxDX className="flex-row items-center ml-auto">
        <BoxDX className="bg-secondary-200 w-[32px] h-[27px] rounded-[50px] flex items-center justify-center">
          <LabelDX
            className="text-typography-950 font-semibold"
            text={dummyData.startProcessingToday[1].count}
          />
        </BoxDX>
        <BoxDX className="w-7 h-7 flex items-center justify-center rounded-md ml-3">
          <IconDX icon={ChevronRightIcon} size={16} className="text-black" />
        </BoxDX>
      </BoxDX>
    </BoxDX>
  </GridItemDX>
</GridItemDX>
</GridItemDX>
      </GridDX>
    </SafeAreaView>
  );
};

export default HomePage;