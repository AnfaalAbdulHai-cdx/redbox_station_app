import { Box } from "../ui/box";

const BoxDX = (props: any) => { 
  //remove padding from this part
  return <Box className={props.className}>{props.children}</Box>;
};

export default BoxDX;
