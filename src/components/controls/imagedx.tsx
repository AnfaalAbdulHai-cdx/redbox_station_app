import {Image} from '../ui/image';

const ImageDX = (props: any) => {
  return (
    <Image
      source={props.source}
      alt={props.alt}
      size={props.size}
      className={props.className}
      // {...props.style}
    />
  );
};
export default ImageDX;
