import { Button, ButtonText } from '../ui/button';
import { Text } from 'react-native';

const ButtonDX = (props: any) => (
  <Button
    size="md"
    variant={props.variant}
    action={props.action}
    onPress={props.onPress}
    className={ props.className} // Ensure proper spacing
  >
    <ButtonText>
      {props.text}
    </ButtonText>
  </Button>
);

export default ButtonDX;
