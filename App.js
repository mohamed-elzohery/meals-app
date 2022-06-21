import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (<View style={styles.container}>
    <StatusBar backgroundColor='#24180f' />
    <CategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    flex: 1,
    marginTop: 32
  }
});
