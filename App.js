import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import FavCtxProvider from './store/context/favorites-context';
import { favContext } from './store/context/favorites-context';

//  Screens
import CategoryScreen from './screens/CategoryScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';
import FavouritesScreen from './screens/FavouritesScreen';

//  Navigatord
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={
    {
      drawerActiveBackgroundColor: "#b9ffb0",
      drawerActiveTintColor: '#3f2f25',
      drawerInactiveTintColor: '#FFF',
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: '#FFF',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#3f2f25'}
    }
  }>
    <Drawer.Screen name='AllCategories' component={CategoryScreen} options={{
      title: "All Categories",
      drawerIcon: (({color, size}) => <Icon name="list" color={color} size={size}/>)
    }}/>
    <Drawer.Screen name='Favorites' component={FavouritesScreen} 
    options={{
      title: "Favorites",
      drawerIcon: (({color, size}) => <Icon name="star" color={color} size={size}/>)
    }}
    />
  </Drawer.Navigator>
}

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
    <FavCtxProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyle}>
        <Stack.Screen name='MealsCategories' component={DrawerNavigator} 
        options={{headerShown: false}} />
        <Stack.Screen name='MealsOverview' component={MealsOverview} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
      </NavigationContainer>
    </FavCtxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32
  }
});
