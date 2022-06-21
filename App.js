import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  Screens
import CategoryScreen from './screens/CategoryScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

const screenStyle = {
  headerStyle: {
    backgroundColor: "#351401"
  },
  headerTintColor: "#FFF",
  contentStyle: {
  backgroundColor: "#3f2f25",
  },
  headerTitleAlign: 'center'
}

export default function App() {
  return (<View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor='#351401' />
    <NavigationContainer>
    <Stack.Navigator screenOptions={screenStyle}>
      <Stack.Screen name='MealsCategories' component={CategoryScreen} 
      options={{title: "All Categories"}} />
      <Stack.Screen name='MealsOverview' component={MealsOverview} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32
  }
});
