import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

type ContainerProps = PropsWithChildren<{}>;

export const Loading = ({children}: ContainerProps) => {
  const {colors, fonts} = useTheme();

  const Component = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const Loading = styled.ActivityIndicator.attrs({
    color: colors.text,
    size: 'large',
  })``;

  return (
    <Component>
      <Loading />
    </Component>
  );
};
