import BoxDX from '../components/controls/boxdx';
import LabelDX from '../components/controls/labeldx';

const HeaderDX = (props: any) => {
  return (
    <BoxDX {...props}>
      <LabelDX className="text-typography-0" text={props.heading}></LabelDX>
    </BoxDX>
  );
};
export default HeaderDX;
