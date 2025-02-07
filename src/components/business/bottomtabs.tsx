// import {
//   Plus,
//   Home,
//   MessageCircle,
//   User,
//   SlidersHorizontal,
// } from 'lucide-react-native';
// import ViewStackDX from '../controls/viewstackdx';
// import PressableDX from '../controls/pressabledx';
// import LabelDX from '../controls/labeldx';
// import IconDX from '../controls/icondx';
// import {useState} from 'react';
// import {tva} from '@gluestack-ui/nativewind-utils';

// const BottomTabs = (props: any) => {
//   const bottomTabs = [
//     {
//       icon: Home,
//       label: 'Home',
//     },
//     {
//       icon: SlidersHorizontal,
//       label: 'Orders',
//     },
//     {
//       icon: Plus,
//       label: 'Scan',
//     },
//     {
//       icon: MessageCircle,
//       label: 'History',
//       disabled: true,
//     },
//     {
//       icon: User,
//       label: 'Support',
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(bottomTabs[0].label);

//   //   const newClass =  tva({
//   //   color: white;
//   //   text-align: center;
//   // })

//   return (
//     <>
//       {' '}
//       <ViewStackDX
//         orientation={'horizontal'}
//         // className="content-center absolute bottom-0 justify-between w-full py-3 px-6 md:hidden"
//         style={{backgroundColor: 'blue', color: 'white'}}>
//         {bottomTabs.map((tab: any) => {
//           return (
//             <PressableDX
//               key={tab.label}
//               disabled={tab.disabled}
//               onPress={() => {
//                 setActiveTab(tab.label);
//               }}
//               //@ts-ignore
//               opacity={tab.disabled ? 0.5 : 1}>
//               <ViewStackDX orientation={'vertical'} className="items-center">
//                 <IconDX
//                   as={tab.icon}
//                   size={20}
//                   className={`${
//                     activeTab === tab.label
//                       ? 'text-typography-900'
//                       : 'text-typography-400'
//                   }`}
//                 />
//                 <LabelDX
//                   size="xs"
//                   className={`${
//                     activeTab === tab.label
//                       ? 'text-typography-900'
//                       : 'text-typography-400'
//                   }`}>
//                   {tab.label}
//                 </LabelDX>
//               </ViewStackDX>
//             </PressableDX>
//           );
//         })}
//       </ViewStackDX>
//     </>
//   );
// };
// export default BottomTabs;
