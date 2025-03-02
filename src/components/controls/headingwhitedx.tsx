import {Grid, GridItem} from '../ui/grid';
import {Heading} from '../ui/heading';

const HeadingWhiteDX = (props: any) => {
  return (
    <Heading size={props.size} key={props.index} className={`text-white text-xl ${props.className}`}>
      {props.text}
      {props.children}
    </Heading>
  );
};
export default HeadingWhiteDX;
