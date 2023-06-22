import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function ThreeScene() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImg}
                    source={require('../../assets/scene/3/1.png')}
                />
                <Image source={require('../../assets/scene/3/people-m.png')}
                       style={styles.imgPeople} />
                <Text style={styles.dialog}>
                    В ЭТИХ МЕСТАХ ЖИВУТ ЛЮДИ, ЛИЦА КОТОРЫХ НЕ СПРЯТАНЫ ЗА ВИЗОРАМИ И
                    МАСКАМИ.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
    },
    container:{
        width: '100%',
        height: '100%',
    },
    dialog: {
        top: '20%',
        right: '15%',
        width: '40%',
        position: "absolute",
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 5,
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
    },
    imgPeople: {
        width: 80,
        height: 80,
        top: '5%',
        left: '33%',
        position: "absolute"
    }
});
