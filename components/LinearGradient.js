import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LibraryBtnLinearGradient() {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(79, 17, 255, 0.49)', 'rgba(255, 255, 255, 0.00)']}
                locations={[0, 0.9]} // Устанавливаем locations для задания местоположения цветов
                style={styles.background}
            >
                {/* Ваш контент компонента может быть добавлен здесь */}
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Перенесли фон в LinearGradient
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
});

export { LibraryBtnLinearGradient }
