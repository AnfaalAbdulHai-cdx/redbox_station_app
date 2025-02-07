import { Pressable } from '../ui/pressable';

const PressableDX = (props: any) => {
  return (
    <Pressable className="bg-transparent p-1" onPress={props.onPress}>
      {props.children}
    </Pressable>
  );
};

export default PressableDX;
