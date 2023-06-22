import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function OneScene() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImg} source={require('../../assets/scene/1/1.png')}/>
                <Text style={styles.dialog}>
                    МНЕ СНЯТСЯ СЧАСТЛИВЫЕ СНЫ. В НИХ НЕБО ЧИСТОЕ И НЕ ЗАПЯТНАНО ГРЯЗНЫМ
                    ДЫХАНИЕМ ГОРОДА.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%'
    },
    container:{
        width: '100%',
        height: '100%',
    },
    dialog: {
        top: '20%',
        left: '35%',
        width: '30%',
        position: "absolute",
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 5,
    },
    backgroundImg: {
        width: '100%',
        height: '100%'
    }
});
