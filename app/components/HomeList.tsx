import React from 'react';
import {FlatList, View} from 'react-native';

import {Card, CardProps} from 'components/Card';

import {DuoColorTitle} from './DuoColorTitle';
import {MoviesProps, TvShowProps} from 'services/queries/types';

type ListProps = {
  titleChunk_1: string;
  titleChunk_2: string;
  items: MoviesProps[] & TvShowProps[];
};

const renderItem = ({item}: CardProps) => <Card item={item} />;

export const HomeList = ({items, titleChunk_1, titleChunk_2}: ListProps) => {
  return (
    <View style={{marginTop: 20}}>
      <DuoColorTitle chunk1={titleChunk_1} chunk2={titleChunk_2} />

      <FlatList
        data={items}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)!}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={177}
        getItemLayout={(data, index) => ({length: 146.5, offset: 220, index})}
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
