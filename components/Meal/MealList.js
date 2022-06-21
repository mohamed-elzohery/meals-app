import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({meals}) => {
    return <FlatList
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
}

export default MealList;