import React from 'react';
import {FlatList, View} from 'react-native';

import {DuoColorTitle} from './DuoColorTitle';
import {Avatar, AvatarProps, ItemProps} from './Avatar';

type ListProps = {
  titleChunk_1: string;
  titleChunk_2: string;
  items: ItemProps[];
};

const renderItem = ({item}: AvatarProps) => <Avatar item={item} />;

export const AvatarList = ({items, titleChunk_1, titleChunk_2}: ListProps) => {
  return (
    <View style={{marginTop: 20}}>
      <DuoColorTitle chunk1={titleChunk_1} chunk2={titleChunk_2} />

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
