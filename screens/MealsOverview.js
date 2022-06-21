import {View, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverview = ({route}) => {
    const {ctgrId} = route.params;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(ctgrId));
    return <View>
       {meals.map(({title}) => <MealItem title={title} /> )}
    </View>
}

export default MealsOverview;