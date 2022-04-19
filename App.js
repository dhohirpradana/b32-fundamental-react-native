import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Header from './src/components/header';
import Content from './src/components/content';

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Header />
      <Content />
    </View>
  );
}
