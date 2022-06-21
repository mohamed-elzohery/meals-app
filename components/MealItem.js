import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';

const MealItem = ({title}) => {
    return <View>
        <Text>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    innerContainer: {
        height: 150,
        padding: 12,
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOpacity: .25,
        overflow: Platform.OS === 'android' ? 'hidden' : 'none',
    },
    ctgrItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    btnPressed: {
        opacity: .75
    },
    title: {
        fontWeight: 'bold'
    }
});

export default MealItem;