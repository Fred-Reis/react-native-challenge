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
import {parsePath} from 'utils/parseImagePaths';

export type ItemProps = {
  id?: number;
  title?: string;
  name?: string;
  vote_average?: number;
  first_air_date?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
  overview: string;
  homepage?: string;
  genre_ids: number[];
};

export type CardProps = {
  item: ItemProps;
};

export const Card = memo(
  ({item}: CardProps) => {
    const {
      id,
      poster_path,
      backdrop_path,
      name,
      first_air_date,
      vote_average,
      media_type,
      release_date,
      title,
      overview,
      homepage,
      genre_ids,
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
        homepage: homepage,
        title: parsedTitle!,
        ratings: vote_average,
        genres: genre_ids,
        date: parsedDate,
        type: media_type,
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
