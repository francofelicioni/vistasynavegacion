import React from 'react';
import { View } from 'react-native';
import { styles } from "./styles";
import AppNavigator from './navigation';

export default function Root() {
  return (
    <View style={styles.container}>
      <AppNavigator  />
    </View>
  );
}


