import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoryScreen = () => {
    return <View>
        <FlatList
        data={CATEGORIES}
        renderItem={({item: {id, title, color}}) => <CategoryItem title={title} color={color}/>} 
        keyExtractor={({id}) => id}
        numColumns={2}
        />
    </View>
}

export default CategoryScreen;