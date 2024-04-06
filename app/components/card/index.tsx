import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {StarRating} from 'components/StarRating';

import {
  CustomImage,
  Label,
  RatingsContainer,
  RatingsText,
  Title,
  Data,
} from './card.styles';

export type ItemProps = {
  id?: string;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date: string;
};

export type CardProps = {
  item: ItemProps;
};

export const Card = ({item}: CardProps) => {
  const {poster_path, name, first_air_date, vote_average} = item;
  const [rating, setRating] = useState(vote_average);

  function parseDate(year: string): number {
    const parsedYear = new Date(year).getFullYear();
    return parsedYear;
  }

  function parseRatings(rating: number): number {
    const parsedRating = Math.round(rating / 2);
    return parsedRating;
  }

  function handleGetRating(value: number) {
    const newRating = value * 2;
    setRating(prevState =>
      value === 1 && parseRatings(prevState) === value ? 0 : newRating,
    );
  }

  return (
    <TouchableOpacity
      style={{marginLeft: 30}}
      onPress={() => console.log('bei')}>
      {/* <View style={{flexDirection: 'column', marginLeft: 30}}> */}
      <CustomImage source={{uri: poster_path}} resizeMode="contain" />
      <Data>
        <Title>{name}</Title>
        <Label>{parseDate(first_air_date)}</Label>
        <RatingsContainer>
          <RatingsText>{rating.toFixed(1)}</RatingsText>
          <StarRating
            value={parseRatings(rating)}
            setRating={handleGetRating}
          />
        </RatingsContainer>
      </Data>
      {/* </View> */}
    </TouchableOpacity>
  );
};
