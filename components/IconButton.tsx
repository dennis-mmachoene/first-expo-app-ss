import { Pressable, StyleSheet, Text } from "react-native";
import  MaterialIcons  from "@expo/vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLabel:{
        color: '#ffff',
        marginTop: 12
    }

})

type Props = {
    icon: React.ComponentProps<typeof MaterialIcons>['name'];
    label: string;
    onPress: () => void;
}

export default function IconButton({icon, label, onPress}: Props) {
return(
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff"/>
        <Text style={styles.iconButtonLabel} >{label}</Text>
    </Pressable>
)
}