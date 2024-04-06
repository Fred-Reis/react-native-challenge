import React, {PropsWithChildren} from 'react';

import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type Props = PropsWithChildren<{}>;

export const BackDropContainer = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
`;

export const BackDropImage = styled.Image`
  width: 100%;
  height: 50%;
`;

export const TitleContainer = styled.View`
  align-items: center;

  margin-top: 90%;
  z-index: 1;
`;

export const Title = ({children}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: 40px;
    font-weight: bold;

    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};

export const LabelDataContainer = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 3px;
  margin-top: 10px;
`;

export const Label = ({children}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    color: ${colors.inputPlaceholderText};
    font-size: ${fonts['XL']};
  `;

  return <Component>{children}</Component>;
};

export const Gradient = () => {
  const {colors} = useTheme();

  const Component = styled(LinearGradient).attrs({
    colors: ['transparent', colors.background],
  })`
    width: 100%;
    height: 50%;

    position: absolute;
  `;

  return <Component colors={[]} />;
};

export const Container = ({children}: Props) => {
  const {colors} = useTheme();

  const Component = styled.View`
    width: 100%;
    height: 100%;

    background-color: ${colors.background};
  `;

  return <Component>{children}</Component>;
};

export const InteractionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  margin: 35px;

  z-index: 1;
`;

export const RatingsContainer = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const RatingsText = ({children}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    font-size: ${fonts['2XL']};
    letter-spacing: 0.3px;

    color: ${colors.text};
  `;

  return <Component>{children}</Component>;
};

export const Overview = ({children}: Props) => {
  const {colors, fonts} = useTheme();

  const Component = styled.Text`
    margin: 0 20px;

    font-size: ${fonts['2XL']};
    letter-spacing: 0.3px;

    color: ${colors.inputPlaceholderText};
  `;

  return <Component>{children}</Component>;
};
