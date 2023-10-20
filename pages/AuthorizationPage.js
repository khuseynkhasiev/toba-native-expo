import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import {useState} from "react";
import * as React from "react";
import * as api from "../utils/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {observer} from "mobx-react-lite";
import newUserDataStore from "../components/store/createUserDataStore";
import PopupRegister from "../components/popupRegister";

const Authorization = observer(({ navigation }) => {

    // Для авторизации
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // переключение между авторизацией и регистрацией
    const [isActive, setIsActive] = useState(false);

    // Для регистрации
    const [name, setName] = useState('');
    const [nameTextIsError, setNameTextIsError] = useState('Обязательное поле');
    const [nameIsError, setNameIsError] = useState(false);

    const [surname, setSurname] = useState('');
    const [surnameTextIsError, setSurnameTextIsError] = useState('Обязательное поле');
    const [surnameIsError, setSurnameIsError] = useState(false);

    const [login, setLogin] = useState('');
    const [loginTextIsError, setLoginTextIsError] = useState('Обязательное поле');
    const [loginIsError, setLoginIsError] = useState(false);

    const [popupRegisterText, setPopupRegisterText] = useState('');
    const [popupRegisterIsActive, setPopupRegisterIsActive] = useState(false);
    const [popupRegisterIsError, setPopupRegisterIsError] = useState(false);

    // Или изменять данные
    function updateNewUserDataStore (key, value){
        newUserDataStore.updateUserData(key, value);
    }

    // Валидация полей
    function handleBlurInputName(){
        if (name.length < 1){
            setNameIsError(true);
            return true;
        } else {
            setNameIsError(false);
            return false;
        }
    }
    function handleBlurInputSurname(){
        if (surname.length < 1){
            setSurnameIsError(true);
            return true;
        } else {
            setSurnameIsError(false);
            return false;
        }
    }
    function handleBlurInputLogin(){
        if (login.length < 1){
            setLoginIsError(true);
            return true;
        } else {
            setLoginIsError(false);
            return false;
        }
    }

    // Переход на след страницу, если валидация прошла успешно
    const handleNextPageClick = () => {
        const isName = handleBlurInputSurname();
        const isSurname = handleBlurInputName();
        const isLogin = handleBlurInputLogin();
        if (!isName && !isSurname && !isLogin){
            handleUniqueLogin();
        }
    }


    // проверка логина на уникальность
    function handleUniqueLogin(){
        return api.checkUniqueLogin(login)
            .then((isLogin) => {
                setPopupRegisterIsActive(false);
                setPopupRegisterIsError(false);
                setLoginIsError(false);
                console.log(isLogin); // проверка существует ли логин, если не существует возвращает false

                updateNewUserDataStore('name', name);
                updateNewUserDataStore('surname', surname);
                updateNewUserDataStore('login', login);

                if(!isLogin) {
                    navigation.navigate('RegisterPageTwo');
                } else {
                    setLoginIsError(true);
                    setLoginTextIsError('Такой логин уже существует')
                }
            })
            .catch((err) => {
                setPopupRegisterIsActive(true);
                setPopupRegisterIsError(true);
                // нужен всплывающий попап
                if (err instanceof TypeError && err.message === 'Failed to fetch') {
                    // Обработка ошибки, если нет интернет-соединения
                    console.error('Нет интернет-соединения');
                    setPopupRegisterText('Нет интернет-соединения')
                } else {
                    console.error('Необработанная ошибка:', err);
                    setPopupRegisterText('Что то не так, попробуйте позже...')
                }
            })
    }


    // переключение между авторизацией и регистрацией
    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <SafeAreaView style={styles.authorization}>
            <ImageBackground style={styles.authorization__background} source={require('../assets/image/RegisterBg.png')}>
                <View style={styles.authorization__form}>
                    <ImageBackground style={styles.authorization__formBackground} source={require('../assets/image/authorizationFormBg.png')}>
                        <View style={styles.authorization__formContainer}>
                            <View style={styles.authorization__headerBlock}>
                                <TouchableOpacity style={[styles.authorization__headerTextBlockLeft, isActive ? styles.authorization__headerTextBlockLeft_active : '']} onPress={() => handleIsActive()}>
                                    <Text style={styles.authorization__headerTextLeft}>АВТОРИЗАЦИЯ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.authorization__headerTextBlockRight, !isActive ? styles.authorization__headerTextBlockLeft_active : '']} onPress={() => handleIsActive()}>
                                    <Text style={styles.authorization__headerTextRight}>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</Text>
                                </TouchableOpacity>
                            </View>
                            {isActive ?
                                <>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Электронный адрес"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setEmail(text)}
                                        value={email}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Пароль"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setPassword(text)}
                                        value={password}
                                        secureTextEntry={true} // Скрывает введенный текст (пароль)
                                    />
                                    <TouchableOpacity style={styles.authorization__btnContainer} title="Войти">
                                        <Text style={styles.authorization__textBtn}>ВОЙТИ</Text>
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    <View style={styles.authorization__nameInputBlock}>
                                        <TextInput
                                            style={[
                                                styles.input__firstName,
                                                { color: nameIsError ? 'red' : '#FFF' }
                                            ]}
                                            placeholder="Имя"
                                            placeholderTextColor='#FFF'
                                            onChangeText={(text) => setName(text)}
                                            value={nameIsError ? nameTextIsError : name}
                                            onFocus={() => {
                                                setNameIsError(false);
                                            }} // Поле в фокусе
                                            onBlur={() => handleBlurInputName()}
                                        />
                                        <TextInput
                                            style={[
                                                styles.input__name,
                                                { color: surnameIsError ? 'red' : '#FFF' }
                                            ]}
                                            placeholder="Фамилия"
                                            placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                            onChangeText={(text) => setSurname(text)}
                                            value={surnameIsError ? surnameTextIsError : surname}
                                            onFocus={() => {
                                                setSurnameIsError(false);
                                            }} // Поле в фокусе
                                            onBlur={() => handleBlurInputSurname()}
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, {color: loginIsError ? 'red' : '#FFF'}]}
                                        placeholder="Ваше универсальное имя пользователя"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setLogin(text)}
                                        value={loginIsError ? loginTextIsError : login}
                                        onFocus={() => setLoginIsError(false)}
                                        onBlur={() => handleBlurInputLogin()}
                                    />
                                    <View style={styles.authorization__containerBtn}>
                                        <TouchableOpacity style={styles.authorization__btnContainer} title="ДАЛЕЕ" onPress={handleNextPageClick}>
                                            <Text style={styles.authorization__textBtn}>ДАЛЕЕ</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                        </View>
                        <View style={styles.authorization__footerLine}>
                            <View style={styles.authorization__lineLeft}></View>
                            <Text style={styles.authorization__lineText}>или войти через</Text>
                            <View style={styles.authorization__lineRight}></View>
                        </View>
                        <View style={styles.authorization__footer}>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconVk.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconYandex.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconGoogle.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                </View>
                {popupRegisterIsActive &&
                    <PopupRegister
                        popupRegisterIsError={popupRegisterIsError}
                        setPopupRegisterIsActive={setPopupRegisterIsActive}
                        popupRegisterText={popupRegisterText}/>
                }
            </ImageBackground>
        </SafeAreaView>
    )
})
const styles = StyleSheet.create({
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
    input__loginError:{
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    authorization__containerBtn: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    authorization__btnContainer: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        alignContent: 'flex-end',
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
});

export default Authorization;
