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
    const {
      backdrop_path,
      first_air_date,
      vote_average,
      release_date,
      poster_path,
      media_type,
      genre_ids,
      overview,
      title,
      name,
      id,
    } = item;

    const {navigate} = useNavigation();

    const isMovie = media_type === 'movie';

    const parsedDate = parseDate(`${isMovie ? release_date : first_air_date}`);
    const parsedTitle = isMovie ? title : name;

    const defaultPoster =
      'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

    const poster = poster_path
      ? parsePath({path: poster_path, size: 'w185'})
      : defaultPoster;
    const backdrop = backdrop_path
      ? parsePath({path: backdrop_path, size: 'w780'})
      : defaultPoster;

    function goTo() {
      navigate('Details', {
        backdrop_path: backdrop,
        overview: overview,
        title: parsedTitle!,
        ratings: vote_average,
        genres: genre_ids,
        date: parsedDate,
        type: media_type,
        id: id,
      });
    }

    return (
      <TouchableOpacity style={{marginLeft: 30}} onPress={goTo} key={id}>
        {/* <View style={{flexDirection: 'column', marginLeft: 30}}> */}
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
            <RatingsText>{vote_average?.toFixed(1)}</RatingsText>

            <StarRating
              value={parseRatings(vote_average || 0)}
              onlyView={true}
            />
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
