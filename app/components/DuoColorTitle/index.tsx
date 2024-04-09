import React from 'react';

import {Container, RedText, DinamicText} from './title.styles';

type TitleProps = {
  chunk1: string;
  chunk2: string;
};

export const DuoColorTitle = ({chunk1, chunk2}: TitleProps) => {
  return (
    <Container>
      <RedText>{chunk1}</RedText>
      <DinamicText>{chunk2}</DinamicText>
    </Container>
  );
};
