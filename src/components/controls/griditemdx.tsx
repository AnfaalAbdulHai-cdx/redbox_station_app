import {GridItem} from '../ui/grid';

const GridItemDX = (props: any) => {
  return (
    <GridItem
      className={'bg-background-0 pl-0 pr-0 rounded-md ' + props.className}
      _extra={{
        className: 'col-span-1',
      }}
      {...props.style}>
      {props.children}
    </GridItem>
  );
};
export default GridItemDX;
