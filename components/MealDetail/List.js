import { Text, View, StyleSheet } from "react-native";

const List = ({data}) => {
    return <View style={styles.list}>
    {data.map((dataPoint, index) => <Text style={styles.listItem} key={index}>{dataPoint}</Text>)}
    </View>
}

const styles = StyleSheet.create({
    list: {
        marginTop: 20
    },
    listItem: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: "#b9ffb0",
        borderRadius: 12,
        marginVertical: 8,
        textAlign: 'center',
        fontSize: 16
    }
});

export default List;