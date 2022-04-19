import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function List(props) {
  return (
    <View>
      <StatusBar />
      <Text>{props.data}</Text>
    </View>
  );
}
