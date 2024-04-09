import React, {memo} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {parsePath} from 'utils/parseImagePaths';
import {PersonProps} from 'services/queries/types';
import {AvatarImage, Title} from './avatar.styles';

export type AvatarProps = {
  item: PersonProps;
};

export const Avatar = memo(
  ({item}: AvatarProps) => {
    const {navigate} = useNavigation();

    function goTo() {
      // navigate('Details', {});
    }

    const profileImage = item.profile_path
      ? parsePath({path: item.profile_path, size: 'w185'})
      : 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1';

    return (
      <TouchableOpacity style={{marginLeft: 30}} onPress={goTo}>
        <AvatarImage source={{uri: profileImage}} resizeMode="cover" />
        <Title>{item.name}</Title>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
  },
);
