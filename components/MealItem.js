import {View, Pressable, Text, StyleSheet, Platform, Image} from 'react-native';

const MealItem = ({title, imageUrl, affordability, complexity, id, duration}) => {

    console.log(imageUrl)
    return <View style={styles.outerContainer}>
        <Pressable android_ripple={{color: '#CCC'}} 
        style={({pressed}) => [styles.innerContainer, pressed ? styles.btnPressed : null]}>
            <View >
                <Image source={{uri: imageUrl}} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.detail}>{duration}m</Text>
                <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
                <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
            </View>
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
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: 8
    },
    btnPressed: {
        opacity: .8
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8
    },
    detail: {
        marginHorizontal: 12
    }
});

export default MealItem;