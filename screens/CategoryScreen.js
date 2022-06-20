import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoryScreen = () => {
    return <View>
        <FlatList
        data={CATEGORIES}
        renderItem={({item: {id, title, color}}) => <CategoryItem title={title}/>} 
        keyExtractor={({id}) => id}/>
    </View>
}

export default CategoryScreen;