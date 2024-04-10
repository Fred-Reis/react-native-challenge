import React from 'react';

import {useSafeAreaInsetsStyle} from 'utils/useSafeAreaInsetsStyle';
import {AppStackScreenProps} from 'navigators/navigator.types';
import useTrendingList from 'zustandStore/useTrendingList';

import {HomeList} from 'components/HomeList';
import {Empty} from 'components/EmptyContent';

import {Container, Title} from './stared.styles';

interface StaredScreenProps extends AppStackScreenProps<'Stared'> {}

const Stared: React.FC<StaredScreenProps> = () => {
  const $containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const {ratedList} = useTrendingList();

  // console.log(ratedList);

  return (
    <Container style={$containerInsets}>
      {!ratedList.length ? (
        <Empty />
      ) : (
        <>
          <Title>Stared </Title>
          <HomeList
            titleChunk_1="Stared"
            titleChunk_2="List"
            items={ratedList}
          />
        </>
      )}
    </Container>
  );
};

export default Stared;
