import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function TwoScene() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImg}
                    source={require('../../assets/scene/2/2.png')}
                />
                <Image
                    source={require('../../assets/scene/2/obl/1.png')}
                    style={styles.obl}
                />
                <Image
                    source={require('../../assets/scene/2/obl/2.png')}
                    style={styles.obl}
                />
                <Image
                    source={require('../../assets/scene/2/obl/3.png')}
                    style={styles.obl}
                />
                <Image
                    source={require('../../assets/scene/2/obl/4.png')}
                    style={styles.obl}
                />
                <Image
                    source={require('../../assets/scene/2/or.png')}
                    style={styles.orel}
                />
                <Text style={styles.dialog}>
                    ОГРОМНЫЕ ЗЕЛЁНЫЕ РАВНИНЫ ВСТРЕЧАЮТСЯ С МОГУЧИМИ ГОРНЫМИ ХРЕБТАМИ.
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
        left: '35%',
        width: '30%',
        position: "absolute",
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 5,
    },
    backgroundImg: {
        width: '100%',
        height: '100%',

    },
    obl: {

    },
    orel: {
        zIndex: 1,
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '40%',
        height: '57%',
    }
});
