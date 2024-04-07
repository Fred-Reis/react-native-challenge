import React, {memo} from 'react';
import {Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {StarRating} from 'components/StarRating';
import {parseDate, parseRatings} from 'utils/cardFunctions';

import {
  CustomImage,
  Label,
  RatingsContainer,
  RatingsText,
  Title,
  DataContainer,
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

export const Card = memo(
  ({item}: CardProps) => {
    const {poster_path, name, first_air_date, vote_average} = item;

    const {navigate} = useNavigation();

    function goTo() {
      navigate('Details', {});
    }

    return (
      <TouchableOpacity style={{marginLeft: 30}} onPress={goTo}>
        {/* <View style={{flexDirection: 'column', marginLeft: 30}}> */}
        <CustomImage source={{uri: poster_path}} resizeMode="contain" />

        <DataContainer>
          <Title>{name}</Title>

          <Label>{parseDate(first_air_date)}</Label>

          <RatingsContainer>
            <RatingsText>{vote_average.toFixed(1)}</RatingsText>

            <StarRating value={parseRatings(vote_average)} onlyView={true} />
          </RatingsContainer>
        </DataContainer>
        {/* </View> */}
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
  },
);
