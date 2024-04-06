import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {StarRating} from 'components/StarRating';
import {AppStackScreenProps} from '/navigators/AppNavigator';

import {onShare} from 'utils/shareMessage';
import {parseRatings} from 'utils/cardFunctions';

import * as Styles from './details.styles';
import {BackButton} from 'components/BackButton';

interface DetailsScreenProps extends AppStackScreenProps<'Details'> {}
const backdrop_path =
  'https://image.tmdb.org/t/p/w1280/6LWy0jvMpmjoS9fojNgHIKoWL05.jpg';

const overview =
  "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.";

const homepage = 'http://www.foxmovies.com/movies/fight-club';

const BackDrop = () => {
  return (
    <Styles.BackDropContainer>
      <Styles.BackDropImage source={{uri: backdrop_path}} resizeMode="cover" />

      <Styles.Gradient />
    </Styles.BackDropContainer>
  );
};

const Details: React.FC<DetailsScreenProps> = () => {
  const [rating, setRating] = useState(9.7);

  const {colors} = useTheme();

  function handleGetRating(value: number) {
    const newRating = value * 2;
    setRating(prevState =>
      value === 1 && parseRatings(prevState) === value ? 0 : newRating,
    );
  }

  function handleShare() {
    onShare(homepage);
  }

  const labels = ['2023', 'Biography', 'Drama', 'History', 'blabla']
    .slice(0, 4)
    .map((e, i, arr) => (
      <Styles.Label>{i === arr.length - 1 ? e : `${e} \u2502 `}</Styles.Label>
    ));

  return (
    <Styles.Container>
      <BackButton />
      <Styles.TitleContainer>
        <Styles.Title>Game of Thrones</Styles.Title>

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
          <TouchableOpacity onPress={handleShare}>
            <Icon name="share-social-outline" size={25} color={colors.text} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="heart-outline" size={25} color={colors.text} />
          </TouchableOpacity>
        </Styles.IconsContainer>
      </Styles.InteractionContainer>

      <Styles.Overview>{overview}</Styles.Overview>

      <BackDrop />
    </Styles.Container>
  );
};

export default Details;
