import { View } from "react-native";
import MealList from "../components/Meal/MealList";
import { useContext } from "react";
import { favContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = () => {
    const {favMealsIds} = useContext(favContext); 
    const meals = MEALS.filter(({id}) => {
        return favMealsIds.some((mealId) => id === mealId);
    });
    console.log(meals);
    return <View>
        <MealList meals={meals} />
    </View>
}


export default FavouritesScreen;