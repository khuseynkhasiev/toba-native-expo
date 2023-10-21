import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BackgroundImage} from "react-native-elements/dist/config";
import * as React from "react";

export default function PopupRegister({setPopupRegisterIsActive, popupRegisterText, popupRegisterIsError}){

    return (
        <TouchableOpacity style={styles.popupRegister} onPress={() => setPopupRegisterIsActive(false)}>
                <View style={styles.popupRegister__container}>
                    <View style={styles.popupRegister__block}>
                        {popupRegisterIsError ?
                            <BackgroundImage style={styles.popupRegister__icon} source={require('../assets/image/popupRegisterIcons/popupRegisterIconError.png')}/>
                            :
                            <BackgroundImage style={styles.popupRegister__icon} source={require('../assets/image/popupRegisterIcons/popupRegisterIconSucces.png')}/>
                        }
                        <Text style={styles.popupRegister__textError}>{popupRegisterIsError ? 'ОШИБКА!' : 'УСПЕХ!'}</Text>
                    </View>
                    <Text style={styles.popupRegister__text}>{popupRegisterText}</Text>
                </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    popupRegister: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        width: '100%',
        height: '100%',
        transition: 'opacity 1s ease', // Эффект перехода может потребовать использования анимации.
        pointerEvents: 'auto',
        zIndex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupRegister__container: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        maxWidth: 600,
        width: '100%',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 30,
        boxSizing: 'border-box',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupRegister__block: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 200,
        alignItems: 'center',
        width: '100%',
    },
    popupRegister__icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain', // для изображения
    },
    popupRegister__textError: {
        marginTop: 10,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    popupRegister__text: {
        marginTop: 30,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
    },
})
