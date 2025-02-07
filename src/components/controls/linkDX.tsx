import { useNavigation } from '@react-navigation/native';
import { Link, LinkText } from '../ui/link';

interface LinkDXProps {
  linkAddress: string;
  linkText: string;
  className?: string;
}

const LinkDX: React.FC<LinkDXProps> = ({ linkAddress, linkText, className }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (typeof linkAddress === 'string' && linkAddress.startsWith('/')) {
      navigation.navigate(linkAddress.slice(1) as never); // Ensuring correct type for navigation
    }
  };

  return (
    <Link onPress={handlePress}>
      <LinkText className={className}>{linkText}</LinkText>
    </Link>
  );
};

export default LinkDX;