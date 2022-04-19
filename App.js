import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import List from './src/screens/flatList';

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <List />
    </View>
  );
}
