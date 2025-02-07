import {Grid, GridItem} from '../ui/grid';
import {Heading} from '../ui/heading';

const HeadingDX = (props: any) => {
  return (
    <Heading size={props.size} key={props.index}>
      {props.text}
    </Heading>
  );
};
export default HeadingDX;
