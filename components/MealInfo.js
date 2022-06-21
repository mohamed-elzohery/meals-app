import { Text, View, StyleSheet } from "react-native";

const MealInfo = ({duration, affordability, complexity, textStyle}) => {
    console.log(duration)
    return <View style={styles.infoContainer}>
        <Text style={[styles.detail, textStyle]}>{duration}m</Text>
        <Text style={[styles.detail, textStyle]}>{affordability.toUpperCase()}</Text>
        <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
    </View>
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: 8
    },
    detail: {
        marginHorizontal: 12,
    }
});

export default MealInfo;