import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})

type Props = {
    imgSource: ImageSourcePropType
}

export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} style={styles.image}></Image>
}