import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoryScreen = ({navigation: {navigate}}) => {

    const onPressHandler = (ctgrId) => {
        navigate("MealsOverview", {ctgrId});
    }
    return <View>
        <FlatList
        data={CATEGORIES}
        renderItem={({item: {id, title, color}}) => (
        <CategoryItem title={title} onPress={onPressHandler} color={color} id={id}/>)} 
        keyExtractor={({id}) => id}
        numColumns={2}
        />
    </View>
}

export default CategoryScreen;