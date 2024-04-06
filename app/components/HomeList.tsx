import React from 'react';
import {FlatList} from 'react-native';

import {Card, CardProps, ItemProps} from 'components/card';
import {useSafeAreaInsetsStyle} from 'utils/useSafeAreaInsetsStyle';

type ListProps = {
  items: ItemProps[];
};

export const HomeList = ({items}: ListProps) => {
  const start = useSafeAreaInsetsStyle(['start', 'end']);
  const renderItem = ({item}: CardProps) => <Card item={item} />;

  console.log(start);

  return (
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
    />
  );
};
