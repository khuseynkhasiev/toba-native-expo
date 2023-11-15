import {Text, TouchableOpacity, View, StyleSheet, ImageBackground} from "react-native";
import * as React from "react";
import {ProfileExitSvgIcon} from "./svg/Svg";

export default function PopupExit({setPopupExitIsActive, handleExitProfile}){
    const exitPopup = () => {
        setPopupExitIsActive(false);
    }
    return (
        <View style={styles.profile__popupExit}>
{/*
            <Image style={styles.popup__exitIcon} source={require('../assets/image/popupExitIcon.png')}/>
*/}
            <ImageBackground style={styles.popup__exitIcon} source={require('../assets/image/iconEditBtnCircle.png')}>
                <ProfileExitSvgIcon />
            </ImageBackground>
            <Text style={styles.popup__text}>Вы действительно хотите выйти из аккаунта?</Text>
            <View style={styles.popup__btnContainer}>
                <TouchableOpacity style={styles.popup__btnYes} onPress={() => handleExitProfile()}>
                    <View style={styles.popup__btnViewYes}>
                        <Text style={styles.popup__btnTextYes}>ДА</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popup__btnNo} onPress={() => exitPopup()}>
                    <View style={styles.popup__btnViewNo}>
                        <Text style={styles.popup__btnTextNo}>НЕТ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile__popupExit:{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.9,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup__btnTextYes: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 700,
    },
    popup__btnTextNo: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 700,
    },
    popup__btnContainer: {
        flexDirection: 'row',
        columnGap: 224,
        marginTop: 30,
    },
    popup__btnNo:{
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup__btnViewNo: {
        width: 80,
        height: 30,
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup__btnViewYes:{
        width: 80,
        height: 30,
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(6, 6, 6, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup__btnYes:{
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.50)',


        /*        borderRadius: 10, // border-radius
                backgroundColor: 'rgba(255, 255, 255, 0.5)'*/
    },
    popup__text: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    popup__exitIcon:{
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: "center",
    },
})
