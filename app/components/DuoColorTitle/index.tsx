import React from 'react';

import {Container, RedText, DinamicText} from './title.styles';

type TitleProps = {
  part1: string;
  part2: string;
};

export const DuoColorTitle = ({part1, part2}: TitleProps) => {
  return (
    <Container>
      <RedText>{part1}</RedText>
      <DinamicText>{part2}</DinamicText>
    </Container>
  );
};
