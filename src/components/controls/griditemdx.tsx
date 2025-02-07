import {GridItem} from '../ui/grid';

const GridItemDX = (props: any) => {
  return (
    <GridItem
      className={'bg-background-0 pl-3 pr-3 rounded-md ' + props.className}
      _extra={{
        className: 'col-span-1',
      }}
      {...props.style}>
      {props.children}
    </GridItem>
  );
};
export default GridItemDX;
