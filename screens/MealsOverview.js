import {View} from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '../components/Meal/MealList';

const MealsOverview = ({route, navigation}) => {
    const {ctgrId} = route.params;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(ctgrId));

    useLayoutEffect(() => {
        const ctgrName = CATEGORIES.find(({id}) => id === ctgrId).title;

        navigation.setOptions({title: ctgrName});
    }, [ctgrId, navigation]);

    return <View>
        <MealList meals={meals} />
    </View>
}

export default MealsOverview;