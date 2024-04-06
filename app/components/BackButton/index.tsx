import {TouchableOpacity} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export function BackButton() {
  const {goBack} = useNavigation();
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={{
        top: 5,
        position: 'absolute',
        height: 100,
        width: 100,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        goBack();
      }}>
      <Icon name="arrow-back-circle-outline" size={35} color={colors.text} />
    </TouchableOpacity>
  );
}
