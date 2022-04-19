import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function EmbedExpression() {
  // Create Function Here
  function getMajor() {
    return 'Full-Stack';
  }

  // Create a variable Here
  const companyName = 'Dumbways.id';

  return (
    <View>
      <StatusBar />
      <Text>
        Welcome To {companyName} Class {getMajor()}
      </Text>
    </View>
  );
}
