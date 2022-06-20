import {View, Pressable, Text} from 'react-native';

const CategoryItem = ({id, title, color}) => {
    return <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryItem;