import {SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function MainPage({ navigation }) {

    const handleSeriesTitle = () => {
        navigation.navigate('Series')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Тут должна быть обложка комикса</Text>
            <TouchableOpacity onPress={handleSeriesTitle}>
                <Text style={styles.text}>Читать комикс</Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
