import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function Map() {
  // Create Dummy Data With Array
  const cars = ['BMW', 'Mercedes-Benz', 'Ducati', 'Lexus'];

  return (
    <View>
      <StatusBar />
      <Text> This is List On React with Map </Text>
      {cars.map((item, idx) => (
        <Text key={idx}>{item}</Text>
      ))}
    </View>
  );
}
