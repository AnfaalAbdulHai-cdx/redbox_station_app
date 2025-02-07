import { Text } from '../ui/text';
import LinkDX from './linkDX'; // Importing LinkDX

const LabelDX = (props: any) => {
  return (
    <Text className={props.className}>
      {props.children || props.text} {/* Render everything passed as children */}
    </Text>
  );
};

export default LabelDX;