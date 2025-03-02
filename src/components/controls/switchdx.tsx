import { Switch } from "../ui/switch";
import '../../../global.css';

const SwitchDX = (props: any) => {
  return (
    <Switch
      size="md"
      isDisabled={props.isDisabled || false}
      trackColor={{
        false: "#E1E1E1", // Light gray when OFF
        true: "#929292",  // Dark gray when ON
      }}
      thumbColor="white" // White thumb color
      activeThumbColor="white" // White thumb when switched ON
      ios_backgroundColor="background-100" // Light gray for iOS when OFF
      {...props}
    />
  );
};

export default SwitchDX;
