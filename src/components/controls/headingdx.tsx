import {Grid, GridItem} from '../ui/grid';
import {Heading} from '../ui/heading';

const HeadingDX = (props: any) => {
  return (
    <Heading size={props.size} key={props.index} className={props.className}>
      {props.text}
      {props.children}
    </Heading>
  );
};
export default HeadingDX;
