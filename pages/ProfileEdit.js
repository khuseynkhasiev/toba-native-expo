import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import * as api from "../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import newGetUserDataStore from "../components/store/getUserDataStore";
import EditUserDate from "../components/EditUserDate";
import * as ImagePicker from "expo-image-picker";
import {
  MenuBackSvgIcon,
  ProfileInputEditSvgIcon,
} from "../components/svg/Svg";
import LoadingRequestAnimation from "../assets/lottie/LoadingRequestAnimation";

export default function ProfileEdit({ navigation }) {
  const {
    id,
    login,
    name,
    avatar,
    surname,
    email,
    birthday,
    email_verified_at,
    agreement,
    consent,
    phone,
  } = newGetUserDataStore.userData;

  const [nameInput, setNameInput] = useState(name);
  const [nameTextIsError, setNameTextIsError] = useState("Обязательное поле");
  const [nameIsError, setNameIsError] = useState(false);

  const [surnameInput, setSurnameInput] = useState(surname);
  const [surnameTextIsError, setSurnameTextIsError] =
    useState("Обязательное поле");
  const [surnameIsError, setSurnameIsError] = useState(false);

  const [phoneInput, setPhoneInput] = useState(phone);
  const [phoneTextIsError, setPhoneTextIsError] = useState(
    "Укажите номер телефона"
  );
  const [phoneIsError, setPhoneIsError] = useState(false);

  const [loginInput, setLoginInput] = useState(login);
  const [loginTextIsError, setLoginTextIsError] = useState("Обязательное поле");
  const [loginIsError, setLoginIsError] = useState(false);

  const [date, setDate] = useState(birthday);
  const [dateErrorText, setDateErrorText] = useState("Вам должно быть 14+ лет");
  const [dateIsError, setDateIsError] = useState(false);

  const [token, setToken] = useState("");
  const [avatarValue, setAvatarValue] = useState(avatar);

  const [selectedImage, setSelectedImage] = useState(null);

  const [loadingIsActive, setLoadingIsActive] = useState(false);

  const getUserToken = async () => {
    setToken(await AsyncStorage.getItem("userToken"));
  };

  useEffect(() => {
    getUserToken();
  }, []);

  useEffect(() => {}, [selectedImage]);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const uri = result.assets[0].uri;
        console.log(uri);
        setSelectedImage(uri);
      }
    } catch (error) {
      console.log("Ошибка при выборе изображения:", error);
    }
  };

  async function uploadPhotoToServer(photoUri) {
    if (photoUri === undefined || photoUri === null) {
      return avatarValue;
    } else {
      try {
        const formData = new FormData();

        // Создайте объект FormData и добавьте фотографию в него
        formData.append("avatar", {
          uri: photoUri,
          name: "photo.jpg", // Имя файла, которое будет видно на сервере
          type: "image/jpeg", // Зависит от типа фотографии
        });

        // Загрузка фотографии в формате PNG
        formData.append("avatar", {
          uri: photoUri,
          type: "image/png", // Зависит от типа фотографии
          name: "photo.png", // Имя файла на сервере
        });

        const response = await fetch("https://animics.ru/api/user/edit", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data", // Указываем Content-Type как multipart/form-data
            Authorization: "Bearer " + token,
          },
          body: formData,
        });
        if (response.status === 200) {
          const data = await response.json();
          console.log("Фотография успешно загружена", data);

          return data.data.avatar;
        } else {
          console.log(response);
          console.log(
            "Ошибка при загрузке фотографии",
            response.status,
            response.message
          );
        }
      } catch (error) {
        console.log("Ошибка при загрузке фотографии", error);
      }
    }
  }

  // Валидация полей
  function handleBlurInputName() {
    if (nameInput.length < 1) {
      setNameIsError(true);
      return true;
    } else {
      setNameIsError(false);
      return false;
    }
  }
  function handleBlurInputSurname() {
    if (surnameInput.length < 1) {
      setSurnameIsError(true);
      return true;
    } else {
      setSurnameIsError(false);
      return false;
    }
  }
  function handleBlurInputPhone() {
    // Создайте регулярное выражение для проверки номера телефона
    const phonePattern = /^[78]\d{10}$/;

    if (!phoneInput) {
      setPhoneIsError(true); // Номер телефона не введен
      setPhoneTextIsError("Номер телефона не указан");
      return true;
    } else if (!phonePattern.test(phoneInput)) {
      setPhoneIsError(true); // Номер телефона введен некорректно
      setPhoneTextIsError("Некорректный номер");
      return true;
    } else {
      setPhoneIsError(false); // Номер телефона введен корректно
      return false;
    }
  }
  function handleBlurInputLogin() {
    if (loginInput.length < 1) {
      setLoginIsError(true);
      return true;
    } else {
      setLoginIsError(false);
      return false;
    }
  }
  const updateUserStore = (avatarDowload) => {
    newGetUserDataStore.updateUserDataValue("name", nameInput);
    newGetUserDataStore.updateUserDataValue("login", loginInput);
    newGetUserDataStore.updateUserDataValue("birthday", date);
    newGetUserDataStore.updateUserDataValue("surname", surnameInput);
    newGetUserDataStore.updateUserDataValue("phone", phoneInput);
    newGetUserDataStore.updateUserDataValue("avatar", avatarDowload);
  };

  const submitFormEditUser = async () => {
    setLoadingIsActive(true);
    const avatarDowload = await uploadPhotoToServer(selectedImage);
    if (login === loginInput) {
      if (!nameIsError && !loginIsError && !dateIsError && !surnameIsError) {
        /*setLoadingIsActive(true);*/
        api
          .editUser({
            loginInput,
            date,
            nameInput,
            surnameInput,
            phoneInput,
            token,
          })
          .then((userData) => {
            updateUserStore(avatarDowload);
            prevScreenProfile();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setLoadingIsActive(false));
      }
    } else {
      api
        .checkUniqueLogin(loginInput)
        .then((isUnique) => {
          console.log(isUnique);
          if (isUnique) {
            setLoginIsError(true);
            setLoginTextIsError("Такой логин уже существует");
          } else {
            setLoginIsError(false);
            setLoginTextIsError("Обязательное поле");
          }
        })
        .then(() => {
          if (
            !nameIsError &&
            !loginIsError &&
            !dateIsError &&
            !surnameIsError
          ) {
            api
              .editUser({
                loginInput,
                date,
                nameInput,
                surnameInput,
                phoneInput,
                token,
              })
              .then(() => {
                updateUserStore(avatarDowload);
                prevScreenProfile();
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => setLoadingIsActive(false));
          }
        })
        .finally(() => setLoadingIsActive(false));
    }
  };
  function prevScreenProfile() {
    navigation.navigate("Profile");
  }

  return (
    <SafeAreaView style={styles.profile}>
      <ImageBackground
        style={styles.profile__background}
        source={require("../assets/image/profileBackground.png")}
      >
        {loadingIsActive && <LoadingRequestAnimation />}
        <TouchableOpacity
          style={styles.profile__menuBtn}
          onPress={() => navigation.navigate("Main")}
        >
          <MenuBackSvgIcon />
        </TouchableOpacity>
        <Text style={styles.profile__title}>ПРОФИЛЬ</Text>
        <View style={styles.profile__form}>
          <ImageBackground
            style={styles.profile__formBackground}
            source={require("../assets/image/profileBgForm.png")}
          >
            <View style={styles.profile__formTopBlock}>
              <TouchableOpacity
                style={styles.profile__userImageTop}
                onPress={() => pickImage()}
              >
                {avatar === null || avatar === undefined ? (
                  <>
                    {selectedImage ? (
                      <Image
                        style={styles.profile__image}
                        source={{ uri: selectedImage }}
                      />
                    ) : (
                      <View style={styles.profile__imageCircle}>
                        <Text style={styles.profile__imageText}>
                          фото профиля
                        </Text>
                      </View>
                    )}
                  </>
                ) : (
                  <Image
                    style={styles.profile__image}
                    source={
                      selectedImage
                        ? { uri: selectedImage }
                        : { uri: `https://animics.ru/storage/${avatarValue}` }
                    }
                  />
                )}
              </TouchableOpacity>
              <View style={styles.profile__userInfoTop}>
                <View style={styles.input__loginContainer}>
                  <TextInput
                    style={[
                      styles.input__login,
                      { color: loginIsError ? "red" : "#FFF" },
                    ]}
                    placeholder="укажите логин"
                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                    onChangeText={(text) => setLoginInput(text)}
                    value={loginIsError ? loginTextIsError : loginInput}
                    onFocus={() => setLoginIsError(false)}
                    onBlur={() => handleBlurInputLogin()}
                    keyboardType="default"
                  />
                  <ProfileInputEditSvgIcon />
                </View>

                <View style={styles.profile__dateContainer}>
                  <EditUserDate
                    date={date}
                    setDate={setDate}
                    setDateIsError={setDateIsError}
                  />
                  {dateIsError && (
                    <Text style={[styles.paragraph, { color: "red" }]}>
                      {dateErrorText}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfileEditPassword")}
                >
                  <Text style={styles.profile__dateText}>Изменить пароль</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profile__formBottomBlock}>
              <View style={styles.profile__firstLine}>
                <View style={styles.profile__textContainer}>
                  <View style={styles.input__firstNameContainer}>
                    <TextInput
                      style={[
                        styles.input__firstName,
                        { color: nameIsError ? "red" : "#FFF" },
                      ]}
                      placeholder="Имя"
                      placeholderTextColor="#FFF"
                      onChangeText={(text) => setNameInput(text)}
                      value={nameIsError ? nameTextIsError : nameInput}
                      onFocus={() => {
                        setNameIsError(false);
                      }} // Поле в фокусе
                      onBlur={() => handleBlurInputName()}
                      keyboardType="default"
                    />
                    <ProfileInputEditSvgIcon />
                  </View>
                </View>
                <View style={styles.profile__textContainer}>
                  <View style={styles.input__firstNameContainer}>
                    <TextInput
                      style={[
                        styles.input__name,
                        { color: surnameIsError ? "red" : "#FFF" },
                      ]}
                      placeholder="Фамилия"
                      placeholderTextColor="#FFF" // Установите цвет текста placeholder
                      onChangeText={(text) => setSurnameInput(text)}
                      value={surnameIsError ? surnameTextIsError : surnameInput}
                      onFocus={() => {
                        setSurnameIsError(false);
                      }} // Поле в фокусе
                      onBlur={() => handleBlurInputSurname()}
                      keyboardType="default"
                    />
                    <ProfileInputEditSvgIcon />
                  </View>
                </View>
              </View>
              <View style={styles.profile__firstLine}>
                <View style={styles.profile__textContainer}>
                  <View style={styles.profile__emailLine}>
                    <TextInput
                      style={styles.input}
                      placeholder="Электронный адрес"
                      placeholderTextColor="#FFF" // Установите цвет текста placeholder
                      value={email}
                      editable={false}
                      keyboardType="email-address"
                    />
                  </View>
                </View>
                <View style={styles.profile__textContainer}>
                  <View style={styles.input__firstNameContainer}>
                    <TextInput
                      style={[
                        styles.input__name,
                        { color: phoneIsError ? "red" : "#FFF" },
                      ]}
                      placeholder="Номер телефона"
                      placeholderTextColor="#FFF" // Установите цвет текста placeholder
                      onChangeText={(text) => setPhoneInput(text)}
                      value={phoneIsError ? phoneTextIsError : phoneInput}
                      onFocus={() => {
                        setPhoneIsError(false);
                      }} // Поле в фокусе
                      onBlur={() => handleBlurInputPhone()}
                      keyboardType="numeric"
                      keyboardAppearance="dark"
                    />
                    <ProfileInputEditSvgIcon />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/*                    <TouchableOpacity style={styles.profile__backProfile} onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.profile__saveBtnContainer}>
                            <Text style={styles.profile__saveBtnText}>НАЗАД</Text>
                        </View>
                    </TouchableOpacity>*/}
          <TouchableOpacity
            style={styles.profile__backProfile}
            onPress={() => navigation.navigate("Profile")}
          >
            <ImageBackground
              style={styles.profile__saveBtnBg}
              source={require("../assets/image/profile__saveBtnBg.png")}
            >
              <View style={styles.profile__saveBtnContainer}>
                <Text style={styles.profile__saveBtnText}>НАЗАД</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profile__saveBtn}
            onPress={() => submitFormEditUser()}
          >
            <ImageBackground
              style={styles.profile__saveBtnBg}
              source={require("../assets/image/profile__saveBtnBg.png")}
            >
              <View style={styles.profile__saveBtnContainer}>
                <Text style={styles.profile__saveBtnText}>
                  СОХРАНИТЬ ИЗМЕНЕНИЯ
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/*                    <TouchableOpacity style={styles.profile__saveBtn} onPress={() => submitFormEditUser()}>
                        <View style={styles.profile__saveBtnContainer}>
                            <Text style={styles.profile__saveBtnText}>СОХРАНИТЬ ИЗМЕНЕНИЯ</Text>
                        </View>
                    </TouchableOpacity>*/}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profile__imageCircle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  profile__dateContainer: {
    flexDirection: "row",
    columnGap: 20,
  },
  paragraph: {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 300,
  },
  profile__saveBtnText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
  },
  profile__saveBtnContainer: {
    /*        width: 250,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(6, 6, 6, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'*/
  },
  input: {
    color: "#FFF",
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStyle: "normal",
  },
  input__login: {
    color: "#FFF",
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: "Montserrat",
    fontSize: 18,
    fontStyle: "normal",
    /*fontWeight: 500,*/
  },
  input__name: {
    width: "100%",
    color: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: "Montserrat",
    fontSize: 13,
    fontStyle: "normal",
  },
  input__loginContainer: {
    width: "100%",
    position: "relative",
  },
  input__firstNameContainer: {
    width: "80%",
    position: "relative",
  },
  input__firstName: {
    width: "100%",
    color: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: "Montserrat",
    fontSize: 13,
    fontStyle: "normal",
  },
  profile__emailLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profile__saveBtnBg: {
    /*        bottom: 10,
        right: 15,
        position: "absolute",
        width: 250,
        height: 30*/
    width: 270,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  profile__saveBtn: {
    bottom: 0,
    right: 15,
    position: "absolute",
  },
  profile__backProfile: {
    bottom: 0,
    left: 15,
    position: "absolute",
  },
  profile__textContainer: {
    rowGap: 10,
    width: "100%",
  },
  profile__userImageTop: {
    width: 100,
    height: 100,
    position: "relative",
  },
  profile__image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  profile__imageText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 300,
    width: 100,
    /*position: "absolute",*/
  },

  profile__formTopBlock: {
    flexDirection: "row",
    columnGap: 30,
    width: "100%",
    paddingTop: 15,
    paddingLeft: 30,
    alignItems: "flex-end",
  },
  profile__formBottomBlock: {
    paddingTop: 10,
    paddingLeft: 30,
    width: "100%",
    rowGap: 10,
  },
  profile__firstLine: {
    flexDirection: "row",
    width: "50%",
  },
  profile__text: {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 300,
    paddingLeft: 15,
  },

  profile__userInfoTop: {
    flexDirection: "column",
    rowGap: 5,
    width: "50%",
  },
  profile__dateText: {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  profile__title: {
    color: "rgba(255, 255, 255, 0.80)",
    textShadowColor: "0px 0px 70px 0px rgba(45, 122, 238, 0.66)",
    fontSize: 38,
    fontFamily: "comics-toba",
    /*fontFamily: 'Montserrat',*/
    fontStyle: "normal",
    fontWeight: 400,
    position: "absolute",
    top: 25,
    left: 75,
    zIndex: 1,
  },
  profile__menuBtn: {
    position: "absolute",
    top: 15,
    left: 15,
  },

  profile: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profile__background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  profile__formBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    /*justifyContent: 'center',*/
    overflow: "hidden",
    borderRadius: 35,
  },
  profile__form: {
    top: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    height: "72%",
    position: "relative",
  },
});
