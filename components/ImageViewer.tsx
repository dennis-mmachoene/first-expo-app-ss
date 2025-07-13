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
    imgSource: ImageSourcePropType,
    selectedImage: string;
}

export default function ImageViewer({ imgSource,selectedImage }: Props) {

    const imageSource = selectedImage ? {uri: selectedImage} : imgSource;
    return <Image source={imageSource} style={styles.image}></Image>
}