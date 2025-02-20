import {Button, ButtonText} from '../ui/button';

const ButtonDX = (props: any) => (
  <Button
  size="md"
  variant={props.variant}
  action={props.action}
  onPress={props.onPress}
  className={props.className}
>
  {props.children ? props.children : <ButtonText>{props.text}</ButtonText>}
</Button>
);

export default ButtonDX;
