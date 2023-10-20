import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import {useState} from "react";
import * as React from "react";
import RegisterUserDate from "../components/RegisterUserDate";
import { CheckBox } from 'react-native-elements';
import PopupRegister from "../components/popupRegister";

const RegisterFinishPage = ({ navigation }) => {

    const [date, setDate] = useState('');
    const [isChecked, setChecked] = useState(false);

    const [agreement, setAgreement] = useState(false);
    const [consent, setConsent] = useState(false);

    const [isError, setIsError] = useState(true);

    const [popupRegisterText, setPopupRegisterText] = useState('Текст ошибки');
    const [popupRegisterIsActive, setPopupRegisterIsActive] = useState(true);
    const [popupRegisterIsError, setPopupRegisterIsError] = useState(false);


    // Функция для обработки выбора даты
    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    function handleClickFinishRegister(){
        if(agreement){
            navigation.navigate('Main');
        } else {
            setIsError(true);
            setErrorText('Необходимо принять пользовательское соглашение')
        }
    }

    return (
        <SafeAreaView style={styles.authorization}>
            <ImageBackground style={styles.authorization__background} source={require('../assets/image/RegisterBg.png')}>
                <View style={styles.authorization__form}>
                    <ImageBackground style={styles.authorization__formBackground} source={require('../assets/image/authorizationFormBg.png')}>
                        <View style={styles.authorization__formContainer}>
                            <View style={styles.authorization__headerBlock}>
                                <View style={[styles.authorization__headerTextBlockLeft]}>
                                    <Text style={styles.authorization__headerTextLeft}>АВТОРИЗАЦИЯ</Text>
                                </View>
                                <View style={[styles.authorization__headerTextBlockRight, styles.authorization__headerTextBlockLeft_active]}>
                                    <Text style={styles.authorization__headerTextRight}>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</Text>
                                </View>
                            </View>
                            <Text style={styles.authorization__text}>
                                Когда Вы родились?
                            </Text>
                            <View>
                                <RegisterUserDate userDate={setDate}/>
                            </View>
                            <View style={styles.registerUserDate__containerCheck}>
                                <View style={styles.section}>
                                    <CheckBox
                                        containerStyle={styles.checkbox} // Примените стили здесь
                                        checked={agreement}
                                        onPress={() => setAgreement(!agreement)}
                                        checkedColor="#FFF" // Примените цвет здесь
                                    />
                                    <Text style={styles.paragraph}>пользовательское соглашение на обработку персональных данных данных</Text>
                                </View>
                                <View style={styles.section}>
                                    <CheckBox
                                        containerStyle={styles.checkbox} // Примените стили здесь
                                        checked={consent}
                                        onPress={() => setConsent(!consent)}
                                        checkedColor="#FFF" // Примените цвет здесь
                                    />
                                    <Text style={styles.paragraph}>даю согласие на то, чтобы получать оповещения и рассылки</Text>
                                </View>
                            </View>
                            <View style={styles.authorization__containerBtn}>
                                <TouchableOpacity style={styles.authorization__btnContainer} title="НАЗАД" onPress={() => navigation.navigate('RegisterPageTwo')}>
                                    <Text style={styles.authorization__textBtn}>НАЗАД</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.authorization__btnContainer} title="ЗАВЕРШИТЬ" onPress={() => handleClickFinishRegister()}>
                                    <Text style={styles.authorization__textBtn}>ЗАВЕРШИТЬ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.footer__container}>
                                <Image style={styles.footer__image} source={require('../assets/footerImage.png')}/>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {popupRegisterIsActive &&
                    <PopupRegister
                        popupRegisterText={popupRegisterText}
                        popupRegisterIsError={popupRegisterIsError}
                        setPopupRegisterIsActive={setPopupRegisterIsActive}/>
                }
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    footer__container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    footer__image:{
        width: 100,
        height: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    registerUserDate__containerCheck: {
      justifyContent: 'space-between',
        flexDirection: 'row'
    },
    authorization__text: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    authorization: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authorization__background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    authorization__formBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    authorization__form: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '84%',
        height: '90%'
    },
    authorization__headerTextBlockLeft: {
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        height: 30,
        justifyContent: 'center',
    },
    authorization__headerTextBlockRight: {
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        height: 30,
        justifyContent: 'center',
    },
    authorization__headerTextLeft: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerTextRight: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 600,
        alignContent: 'center',
        alignItems: 'center'
    },
    authorization__headerTextBlockLeft_active: {
        height: 40,
    },
    authorization__formContainer: {
        rowGap: 15,
        justifyContent: 'center',
        justifyItems: 'center'
    },
    input: {
        color: '#FFF',
        width: 600,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,

    },
    authorization__textBtn: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    authorization__containerBtn: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    authorization__btnContainer: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    authorization__footerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 10
    },
    authorization__lineLeft: {
        width: '42%',
        height: .5,
        backgroundColor: 'white',
    },
    authorization__lineRight: {
        width: '42%',
        height: .5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    authorization__lineText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 500,
        paddingLeft: 9,
        paddingRight: 9
    },
    authorization__footer: {
        flexDirection: 'row',
        columnGap: 50
    },
    authorization__nameInputBlock: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    input__firstName: {
        width: '45%',
        color: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    input__name: {
        width: '45%',
        color: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        justifyContent: 'space-between'
    },
    paragraph: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 300,
    },
    checkbox: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        padding: 0,
    },
});

export default RegisterFinishPage;