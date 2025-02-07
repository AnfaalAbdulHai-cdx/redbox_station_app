import {HStack} from '../ui/hstack';
import {VStack} from '../ui/vstack';

const ViewStackDX = (props: any) => {
  if (props.orientation == 'horizontal') {
    return <HStack className={props.className}>{props.children}</HStack>;
  } else {
    return <VStack className={props.className}>{props.children}</VStack>;
  }
};

export default ViewStackDX;
