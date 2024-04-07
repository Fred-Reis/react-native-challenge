import React from 'react';
import {FlatList, View} from 'react-native';

import {Card, CardProps, ItemProps} from 'components/Card';

import {DuoColorTitle} from './DuoColorTitle';

type ListProps = {
  items: ItemProps[];
};

const renderItem = ({item}: CardProps) => <Card item={item} />;

export const HomeList = ({items}: ListProps) => {
  return (
    <View style={{marginTop: 20}}>
      <DuoColorTitle part1="New" part2="Movies" />

      <FlatList
        data={items}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id!}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={177}
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
