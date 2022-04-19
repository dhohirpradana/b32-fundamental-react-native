import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';

import List from '../components/list';

export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: 'https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  };

  return (
    <View>
      <StatusBar />
      <Text>On the image element using the default props</Text>
      <Image
        source={pic}
        style={{ width: '100%', height: 200, marginBottom: 30 }}
      />

      <List data="BMW" />
      <List data="Ducati" />
      <List data="Ferrari" />
    </View>
  );
}
