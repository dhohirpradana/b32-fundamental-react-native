import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Props from './src/screens/props';

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Props />
    </View>
  );
}
