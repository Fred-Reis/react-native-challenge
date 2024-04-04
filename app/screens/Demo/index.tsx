import {Button, View} from 'react-native';
import React from 'react';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import {Heading, Container} from './demo.styles';
import Counter from '../../components/Counter';

interface DemoScreenProps extends AppStackScreenProps<'Demo'> {}

/**
 * Rename/Remove this for new screens
 */
const Demo: React.FC<DemoScreenProps> = ({navigation}) => {
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[$containerInsets]}>
      <Heading>Redux Demo</Heading>
      <Container>
        <Counter />
      </Container>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default Demo;
