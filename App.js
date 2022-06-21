import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor='#24180f' />
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='MealsCategories' component={CategoryScreen} />
    </Stack.Navigator>
    </NavigationContainer>
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
