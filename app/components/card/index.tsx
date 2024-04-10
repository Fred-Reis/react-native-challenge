import React, {memo} from 'react';
import {Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {StarRating} from 'components/StarRating';
import {parseDate, parseRatings} from 'utils/cardFunctions';

import {parsePath} from 'utils/parseImagePaths';
import {MoviesProps, TvShowProps} from 'services/queries/types';

import {
  Label,
  Title,
  RatingsText,
  CustomImage,
  DataContainer,
  RatingsContainer,
} from './card.styles';

export type CardProps = {
  item: TvShowProps & MoviesProps;
};

export const Card = memo(
  ({item}: CardProps) => {
    const {navigate} = useNavigation();

    const isMovie = item?.media_type === 'movie';

    const parsedDate = parseDate(
      `${isMovie ? item?.release_date : item?.first_air_date}`,
    );
    const parsedTitle = isMovie ? item?.title : item?.name;

    const defaultPoster =
      'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

    const poster =
      item?.poster_path !== null
        ? parsePath({path: item?.poster_path, size: 'w185'})
        : defaultPoster;
    const backdrop =
      item?.backdrop_path !== null
        ? parsePath({path: item?.backdrop_path, size: 'w780'})
        : defaultPoster;

    function goTo() {
      navigate('Details', {
        backdrop_path: backdrop,
        overview: item?.overview,
        title: parsedTitle!,
        ratings: item?.vote_average,
        genres: item?.genre_ids,
        date: parsedDate,
        type: item?.media_type,
        id: item?.id,
      });
    }

    return (
      <TouchableOpacity style={{marginLeft: 30}} onPress={goTo} key={item?.id}>
        <CustomImage
          source={{
            uri: poster,
          }}
          resizeMode="contain"
        />

        <DataContainer>
          <Title>{parsedTitle}</Title>

          <Label>{parsedDate}</Label>

          <RatingsContainer>
            <RatingsText>{item?.vote_average?.toFixed(1)}</RatingsText>

            <StarRating
              value={parseRatings(item?.vote_average || 0)}
              onlyView={true}
            />
          </RatingsContainer>
        </DataContainer>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
  },
);
