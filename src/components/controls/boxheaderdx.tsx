import { Box } from "../ui/box";

const BoxHeaderDX = (props: any) => { 
  return <Box className={`bg-black flex-row justify-between items-center rounded-b-md w-full ${props.className}`}>{props.children}</Box>;
};

export default BoxHeaderDX;
