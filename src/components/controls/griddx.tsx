import {Grid, GridItem} from '../ui/grid';

const GridDX = (props: any) => {
  return (
    <Grid
      className={'gap-4 ' + props.className}
      _extra={{
        className: 'grid-cols-9',
      }}
      {...props.style}>
      {props.children}
    </Grid>
  );
};
export default GridDX;
