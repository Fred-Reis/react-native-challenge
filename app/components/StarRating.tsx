import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

type StarsProps = {
  value: number;
  setRating?: (x: number) => void;
  onlyView?: boolean;
  size?: number;
  spacing?: number;
};

export const StarRating = ({
  value = 0,
  setRating = () => {},
  onlyView,
  size = 10,
  spacing = 2,
}: StarsProps) => {
  let arr = new Array(5).fill('staro');
  arr.fill('star', 0, value);

  function handleSetRange(value: number) {
    setRating(value + 1);
  }

  return (
    <View style={{flexDirection: 'row', gap: spacing, alignItems: 'center'}}>
      {arr.map((star, index) => (
        <TouchableOpacity
          disabled={onlyView}
          key={index}
          onPress={() => handleSetRange(index)}>
          <Icon name={star} size={size} style={{color: 'gold'}} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
