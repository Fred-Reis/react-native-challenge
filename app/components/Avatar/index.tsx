import React, {memo} from 'react';
import {Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export type ItemProps = {
  id?: string;
  profile_path: string;
};

export type AvatarProps = {
  item: ItemProps;
};

export const Avatar = memo(
  ({item}: AvatarProps) => {
    const {navigate} = useNavigation();

    function goTo() {
      // navigate('Details', {});
    }

    return (
      <TouchableOpacity style={{marginLeft: 30}} onPress={goTo}>
        <Image
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
          }}
          source={{uri: item.profile_path}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
  },
);
