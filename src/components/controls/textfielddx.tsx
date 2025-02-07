import { useState } from "react";
import { Input, InputField, InputIcon, InputSlot} from "../ui/input";
import LabelDX from "./labeldx";
import ViewStackDX from "./viewstackdx";
import { Icon,EyeIcon, EyeOffIcon } from "../ui/icon"; // Adjusted icon import

const TextFieldDX = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ViewStackDX>
      {props.label && <LabelDX text={props.label} className={props.className} />}
      <Input
        variant="outline"
        size={props.size}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        isReadOnly={props.isReadOnly}
      >
        <InputField placeholder={props.placeholder} type={showPassword ? "text" : props.type} />
        {props.type === "password" && (
          <InputSlot onPress={() => setShowPassword(!showPassword)} className="cursor-pointer">
            <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} className="text-typography-500 w-4 h-4 m-2" />
          </InputSlot>
        )}
      </Input>
      {props.hint && <LabelDX text={props.hint} className="text-typography-500 text-xs" />}
    </ViewStackDX>
  );
};

export default TextFieldDX;