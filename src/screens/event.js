import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Event() {
  // Create Function Here
  function Greeting() {
    alert('Good morning');
  }

  return (
    <View>
      <StatusBar />
      <Text>Press 'Click Here' then alert will appear</Text>
      <TouchableOpacity onPress={() => alert('Hello Full-stack participants')}>
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>
        Press 'Greeting' then alert will appear
      </Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>
    </View>
  );
}
