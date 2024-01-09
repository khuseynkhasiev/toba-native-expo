import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import * as React from "react";
export default function PopupPrivacyPolicy({ setPopupPrivacyPolicy }) {
    return (
        <View style={styles.profile__popupExit}>
            <ScrollView style={styles.text__container}>
                <Text style={styles.popup__titleText}>
                    Политика конфиденциальности
                </Text>
                <Text style={styles.popup__text}>
                    Эта политика конфиденциальности объясняет, как мы собираем,
                    используем и защищаем вашу личную информацию при
                    использовании нашего мобильного приложения.
                </Text>

                <Text style={styles.popup__titleText}>
                    Собираемая информация
                </Text>
                <Text style={styles.popup__text}>
                    При регистрации в приложении мы собираем следующую
                    информацию:
                </Text>
                <Text style={styles.popup__text}>• Номер телефона</Text>
                <Text style={styles.popup__text}>• Фамилию, имя, отчество</Text>
                <Text style={styles.popup__text}>• Дату рождения</Text>
                <Text style={styles.popup__text}>
                    • Адрес электронной почты
                </Text>
                <Text style={styles.popup__text}>
                    Эти данные используются исключительно для создания и
                    поддержания вашей учетной записи, обеспечения безопасности,
                    связи с вами и предоставления функциональности приложения.
                </Text>

                <Text style={styles.popup__titleText}>
                    Использование информации
                </Text>
                <Text style={styles.popup__text}>
                    Мы используем вашу личную информацию для:
                </Text>
                <Text style={styles.popup__text}>
                    • Поддержки функциональности приложения и обеспечения
                    безопасности учетной записи
                </Text>
                <Text style={styles.popup__text}>
                    • Отправки уведомлений о важных изменениях или событиях,
                    касающихся вашей учетной записи или приложения
                </Text>
                <Text style={styles.popup__text}>
                    • Улучшения нашего сервиса путем анализа данных и понимания
                    потребностей пользователей
                </Text>

                <Text style={styles.popup__titleText}>Защита данных</Text>
                <Text style={styles.popup__text}>
                    Мы прилагаем все усилия для защиты вашей информации от
                    несанкционированного доступа, изменения, раскрытия или
                    уничтожения. Мы используем современные технические и
                    организационные меры безопасности для обеспечения защиты
                    данных.
                </Text>

                <Text style={styles.popup__titleText}>
                    Предоставление третьим лицам
                </Text>
                <Text style={styles.popup__text}>
                    Ваши данные не будут продаваться, обмениваться, передаваться
                    или предоставляться третьим лицам без вашего согласия, за
                    исключением случаев, когда это необходимо для соблюдения
                    законодательства или защиты наших прав и интересов.
                </Text>

                <Text style={styles.popup__titleText}>
                    Управление вашими данными
                </Text>
                <Text style={styles.popup__text}>
                    Вы имеете право обновлять, изменять или удалять вашу личную
                    информацию в настройках вашей учетной записи. Вы также
                    можете запросить информацию о данных, которые мы храним о
                    вас, обратившись к нам по указанным контактным данным.
                </Text>

                <Text style={styles.popup__titleText}>
                    Изменения в политике конфиденциальности
                </Text>
                <Text style={styles.popup__text}>
                    Мы можем время от времени обновлять нашу политику
                    конфиденциальности. Любые изменения будут опубликованы
                    здесь, и в случае существенных изменений мы уведомим вас.
                </Text>

                <Text style={styles.popup__titleText}>
                    Согласие с политикой конфиденциальности
                </Text>
                <Text style={styles.popup__text}>
                    Используя наше приложение, вы подтверждаете свое согласие с
                    этой политикой конфиденциальности. Если у вас есть
                    какие-либо вопросы или предложения относительно обработки
                    данных, не стесняйтесь обращаться к нам по указанным
                    контактным данным.
                </Text>
                <Text style={styles.popup__teamText}>
                    С уважением, Команда ANIMICS!
                </Text>

                <View style={styles.popup__btnContainer}>
                    <TouchableOpacity
                        style={styles.popup__btnYes}
                        onPress={() => setPopupPrivacyPolicy(false)}
                    >
                        <View style={styles.popup__btnViewYes}>
                            <Text style={styles.popup__btnTextYes}>Хорошо</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text__container: {
        flex: 1,
        padding: 20,
    },
    profile__popupExit: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#000",
        opacity: 0.9,
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    popup__btnTextYes: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 700,
    },
    popup__btnTextNo: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 700,
    },
    popup__btnContainer: {
        marginTop: 10,
        marginBottom: 30,
        height: 60,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    popup__btnNo: {
        borderRadius: 10, // border-radius
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        justifyContent: "center",
        alignItems: "center",
    },
    popup__btnViewNo: {
        width: 180,
        height: 30,
        borderRadius: 10, // border-radius
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        justifyContent: "center",
        alignItems: "center",
    },
    popup__btnViewYes: {
        width: 130,
        height: 35,
        borderRadius: 10, // border-radius
        backgroundColor: "rgba(6, 6, 6, 0.50);",
        justifyContent: "center",
        alignItems: "center",
    },
    popup__btnYes: {
        width: 130,
        height: 35,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        justifyContent: "center",
    },
    popup__titleText: {
        marginTop: 10,
        marginBottom: 10,
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 700,
    },
    popup__text: {
        color: "#FFF",
        textAlign: "left",
        fontFamily: "Montserrat",
        fontSize: 13,
        fontStyle: "normal",
        fontWeight: 500,
    },
    popup__teamText: {
        color: "#FFF",
        textAlign: "right",
        fontFamily: "Montserrat",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 700,
        marginTop: 10,
    },
    popup__exitIcon: {
        width: 80,
        height: 80,
    },
});
