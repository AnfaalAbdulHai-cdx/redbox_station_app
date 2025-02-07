import {Box} from '../ui/box';
import {Text} from '../ui/text';

const BoxDX = (props: any) => {
  return <Box className="bg-primary-500 p-5">{props.children}</Box>;
};
export default BoxDX;
