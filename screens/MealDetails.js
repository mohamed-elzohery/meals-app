import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data'; 
import MealInfo from '../components/MealInfo';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

const MealDetails = ({route, navigation}) => {
    const {mealId} = route.params;
    const meal = MEALS.find(({id}) => id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({title: meal.title});
    } , [mealId]);


    return <ScrollView style={styles.root}>
        <Image source={{uri: meal.imageUrl}} style={styles.img} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealInfo 
            textStyle={styles.detailsStyle}
            complexity={meal.complexity}
            duration={meal.duration}
            affordability={meal.affordability}
        />
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={meal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={meal.steps} />
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    img: {
        width: '100%',
        height: 350
    },
    innerContainer: {
        width: '80%'
    },
    title: {
        marginTop: 8,
        marginHorizontal: 24,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center',
    },
    outerContainer: {
        justifyContent: 'center',
    alignItems: 'center'
    },
    detailsStyle: {
        color: '#FFF',
        fontSize: 12
    },
   
});



export default MealDetails;