import React from 'react';
import {View, Button, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from 'store';
import {increment, decrement} from 'store/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={{alignItems: 'center', paddingVertical: 10}}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default Counter;
