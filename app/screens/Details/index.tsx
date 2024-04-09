import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

import {StarRating} from 'components/StarRating';
import {BackButton} from 'components/BackButton';

import {AppStackScreenProps} from 'navigators/navigator.types';
import useTrendingList from 'zustandStore/useTrendingList';
import {genres as allGenres} from 'utils/genresAndGenders';
import {parseRatings} from 'utils/cardFunctions';
import {onShare} from 'utils/shareMessage';

import * as Styles from './details.styles';

interface DetailsScreenProps extends AppStackScreenProps<'Details'> {}

// @ts-ignore
const BackDrop = ({backdrop_path}: string) => {
  return (
    <Styles.BackDropContainer>
      <Styles.BackDropImage source={{uri: backdrop_path}} resizeMode="cover" />

      <Styles.Gradient />
    </Styles.BackDropContainer>
  );
};

const Details: React.FC<DetailsScreenProps> = ({route}) => {
  const {
    backdrop_path,
    ratings = 0.0,
    homepage,
    overview,
    genres,
    title,
    date,
    type,
    id,
  } = route.params;

  const [rating, setRating] = useState(ratings);

  const {ratingTrendingList, trendingList} = useTrendingList();

  const {colors} = useTheme();

  function handleGetRating(value: number) {
    const newRating = value * 2;
    setRating(prevState =>
      value === 1 && parseRatings(prevState) === value ? 0 : newRating,
    );
    const rating =
      value === 1 && parseRatings(ratings) === value ? 0 : newRating;
    ratingTrendingList(id, rating);
  }

  function handleShare() {
    onShare(homepage || '');
  }

  const labels = [
    date,
    ...allGenres[type]
      .filter((g: {id: number}) => genres.includes(g.id))
      .map((e: {name: any}) => e.name),
  ]
    .slice(0, 4)
    .map((e, i, arr) => (
      <Styles.Label>{i === arr.length - 1 ? e : `${e} \u2502 `}</Styles.Label>
    ));

  return (
    <Styles.Container>
      <BackButton />
      <Styles.TitleContainer>
        <Styles.Title>{title}</Styles.Title>

        <Styles.LabelDataContainer>{labels}</Styles.LabelDataContainer>
      </Styles.TitleContainer>

      <Styles.InteractionContainer>
        <Styles.RatingsContainer>
          <Styles.RatingsText>{rating.toFixed(1)}</Styles.RatingsText>

          <StarRating
            value={parseRatings(rating)}
            size={25}
            spacing={5}
            setRating={handleGetRating}
          />
        </Styles.RatingsContainer>

        <Styles.IconsContainer>
          {homepage && (
            <TouchableOpacity onPress={handleShare}>
              <Icon name="share-social-outline" size={25} color={colors.text} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Icon name="heart-outline" size={25} color={colors.text} />
          </TouchableOpacity>
        </Styles.IconsContainer>
      </Styles.InteractionContainer>

      <Styles.Scroll>
        <Styles.Overview>
          {overview || 'Sorry, no overview yet'}
        </Styles.Overview>
      </Styles.Scroll>

      {/* @ts-ignore */}
      <BackDrop backdrop_path={backdrop_path} />
    </Styles.Container>
  );
};

export default Details;
