import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Event from './src/screens/event';

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Event />
    </View>
  );
}
