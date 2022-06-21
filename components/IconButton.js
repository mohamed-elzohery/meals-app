import Icon from 'react-native-vector-icons/Ionicons';
import {View, Pressable, StyleSheet} from 'react-native';

const IconButton = ({icon, color, onPressHandler, btnStyle}) => {
    return <View style={btnStyle}>
        <Pressable onPress={onPressHandler} style={({pressed}) => pressed ? styles.pressed : null}>
            <Icon name={icon} color={color} size={24} />
        </Pressable>
    </View>
}


const styles = StyleSheet.create({
    pressed: {
        opacity: .75
    }
});

export default IconButton;