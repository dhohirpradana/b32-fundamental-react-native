import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import EmbedExpression from './src/screens/embedExpression';

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <EmbedExpression />
    </View>
  );
}
