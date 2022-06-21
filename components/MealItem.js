import {View, Pressable, Text, StyleSheet, Platform, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealInfo from './MealInfo';

const MealItem = ({title, imageUrl, affordability, complexity, id, duration}) => {
    const {navigate} = useNavigation();

    const onPress = () => {
        navigate("MealDetails", {
            mealId: id
        });
    }

    return <View style={styles.outerContainer}>
        <Pressable android_ripple={{color: '#CCC'}} 
        style={({pressed}) => [styles.innerContainer, pressed ? styles.btnPressed : null]}
        onPress={onPress}>
            <View >
                <Image source={{uri: imageUrl}} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealInfo 
            duration={duration}
            affordability={affordability}
            complexity={complexity}
            />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
        marginVertical: 16
    },
    innerContainer: {
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 4,
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOpacity: .25,
        overflow: Platform.OS === 'android' ? 'hidden' : 'none',
    },
    img: {
        width: '100%',
        height:200
    },
    btnPressed: {
        opacity: .8
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8
    },
});

export default MealItem;