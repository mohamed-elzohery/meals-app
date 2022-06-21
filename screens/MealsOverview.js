import {View, Text, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverview = ({route, navigation}) => {
    const {ctgrId} = route.params;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(ctgrId));

    useLayoutEffect(() => {
        const ctgrName = CATEGORIES.find(({id}) => id === ctgrId).title;

        navigation.setOptions({title: ctgrName, headerTitleAlign: 'center'});
    }, [ctgrId, navigation]);

    return <View>
        <FlatList
        data={meals}
        renderItem={({item: {id, title, affordability, complexity, imageUrl, duration}}) => (<MealItem 
            id={id}
            title={title} 
            affordability={affordability} 
            complexity={complexity} 
            imageUrl={imageUrl}
            duration={duration}
        />)}
         />
    </View>
}

export default MealsOverview;