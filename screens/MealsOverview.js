import {View, Text, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverview = ({route}) => {
    const {ctgrId} = route.params;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(ctgrId));
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