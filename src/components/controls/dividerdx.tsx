import {Divider} from '../ui/divider';

const DividerDX = (props: any) => {
  return   <Divider orientation={props.orientation} className={props.className}>
    {props.children}
    </Divider>
};
export default DividerDX;