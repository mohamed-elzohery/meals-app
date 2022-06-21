import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({children}) => {
    return <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
           </View>
}

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        borderBottomColor: "#b9ffb0",
        borderBottomWidth: 2,
    },
    subtitle: {
        color: "#b9ffb0",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Subtitle;