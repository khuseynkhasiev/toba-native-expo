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

const RegisterPageOne = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // В этой функции можно добавить логику для обработки введенных данных
        // Например, отправить их на сервер для проверки

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <SafeAreaView style={styles.authorization}>
            <ImageBackground style={styles.authorization__background} source={require('../assets/image/RegisterBg.png')}>
                <View style={styles.authorization__form}>
                    <ImageBackground style={styles.authorization__formBackground} source={require('../assets/image/authorizationFormBg.png')}>
                        <View style={styles.authorization__formContainer}>
                            <View style={styles.authorization__headerBlock}>
                                <TouchableOpacity style={[styles.authorization__headerTextBlockLeft]} onPress={() => navigation.navigate('Authorization')}>
                                    <Text style={styles.authorization__headerTextLeft}>АВТОРИЗАЦИЯ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.authorization__headerTextBlockRight, styles.authorization__headerTextBlockLeft_active]}>
                                    <Text style={styles.authorization__headerTextRight}>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.authorization__nameInputBlock}>
                                <TextInput
                                    style={styles.input__firstName}
                                    placeholder="Электронный адрес"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                />
                                <TextInput
                                    style={styles.input__name}
                                    placeholder="Электронный адрес"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Ваше универсальное имя пользователя"
                                placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                            <TouchableOpacity style={styles.authorization__btnContainer} title="Войти" onPress={handleSignIn}>
                                <Text style={styles.authorization__textBtn}>ВОЙТИ</Text>
                            </TouchableOpacity>
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
            </ImageBackground>
        </SafeAreaView>
    )
}
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
    authorization__nameInputBlock: {
        columnGap: 15,
        flexDirection: "row"
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
        backgroundColor: 'rgba(255, 255, 255, 0.30)',

        height: 30,
        justifyContent: 'center'
    },
    authorization__headerTextBlockRight: {
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',

        height: 30,
        justifyContent: 'center'
    },
    authorization__headerTextLeft: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerTextRight: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 16,
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
    }
});

export default RegisterPageOne;
