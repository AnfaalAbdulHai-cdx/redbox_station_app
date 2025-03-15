import { useState } from "react";
import { Image } from "react-native"; // Import Image
import { Input, InputField, InputIcon,  InputSlot } from "../ui/input";
import LabelDX from "./labeldx";
import ViewStackDX from "./viewstackdx";
import { EyeIcon, EyeOffIcon } from "../ui/icon"; // Adjusted icon import
import MIcon from "react-native-vector-icons/MaterialIcons";
import CIcon from "react-native-vector-icons/MaterialCommunityIcons";

const TextFieldDX = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ViewStackDX className={props.className}>
      {props.label && <LabelDX text={props.label} className={props.className} />}
      
      <Input
        variant="outline"
        size={props.size}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        isReadOnly={props.isReadOnly}
        className="flex-row items-center border border-gray-300 rounded-lg py-2"
        
      >
        {/* Left Icon */}
        {props.leftIcon && (
  <InputSlot className="ml-2">
    {props.leftIconType === "MaterialCommunityIcons" ? (
      <CIcon name={props.leftIcon} size={20} color="#666" />
    ) : (
      <MIcon name={props.leftIcon} size={20} color="#666" />
    )}
  </InputSlot>
)}

        {/* Input Field */}
        <InputField 
         placeholder={props.placeholder} 
         type={props.type === "password" && !showPassword ? "password" : "text"} // Ensures only password fields toggle
         value={props.value} 
         onChangeText={props.onChangeText}
         maxLength={props.maxLength}
        />

        {/* <InputField
          placeholder={props.placeholder}
          type={showPassword ? "text" : props.type}
          className={props.classtext + " flex-1 px-2"}
        /> */}

        {/* Password Toggle Icon */}
        {props.type === "password" && (
          <InputSlot onPress={() => setShowPassword(!showPassword)} className="cursor-pointer">
            <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} className="text-typography-500 w-4 h-4 m-2" />
          </InputSlot>
        )}
        {/* {props.type === "password" && (
          <InputSlot onPress={() => setShowPassword(!showPassword)} className="cursor-pointer">
            {showPassword ? <EyeOffIcon className="w-5 h-5 opacity-50" /> : <EyeIcon className="w-5 h-5 opacity-50" />}
          </InputSlot>
        )} */}

        {/* Right Icon */}
        {props.rightIcon && (
  <InputSlot className="mr-2" onPress={props.onPress}>
   {props.RightIconType === "MaterialCommunityIcons" ? (
      <CIcon name={props.rightIcon} size={20} color="#666" />
    ) : (
      <MIcon name={props.rightIcon} size={20} color="#666" />
    )}
  </InputSlot>
)}
      </Input>

      {props.hint && <LabelDX text={props.hint} className="text-typography-500 text-xs" />}
    </ViewStackDX>
  );
};

export default TextFieldDX;
