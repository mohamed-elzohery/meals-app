import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';

const CategoryItem = ({id, title, color}) => {
    return <View style={styles.outerContainer}>
        <Pressable 
        style={({pressed}) => [styles.innerContainer, {backgroundColor: color}, pressed && styles.btnPressed]} 
        android_ripple={{color: '#ccc'}}>
            <View style={styles.ctgrItem} >
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
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

export default CategoryItem;