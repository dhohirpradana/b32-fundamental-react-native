import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function List() {
  const data = [
    {
      name: 'Ilham',
    },
    {
      name: 'Samsul',
    },
    {
      name: 'Alvin',
    },
  ];

  return (
    <View>
      <StatusBar />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
