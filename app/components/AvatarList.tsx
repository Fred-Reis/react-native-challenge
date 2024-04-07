import React from 'react';
import {FlatList, View} from 'react-native';

import {Avatar, AvatarProps, ItemProps} from './Avatar';

type ListProps = {
  items: ItemProps[];
};

const renderItem = ({item}: AvatarProps) => <Avatar item={item} />;

export const AvatarList = ({items}: ListProps) => {
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        data={items}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id!}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={120}
        bounces={false}
        style={{
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingRight: 20,
        }}
      />
    </View>
  );
};
