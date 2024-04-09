import React from 'react';

import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const Empty = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}>
      <Image
        style={{
          height: 300,
        }}
        source={require('assets/no-signal.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          marginTop: 30,
          color: colors.text,
          fontSize: 30,
          textAlign: 'center',
        }}>
        {`Sorry, not found!!\n Try again`}
      </Text>
    </View>
  );
};
