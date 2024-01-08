import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as React from "react";
export default function PopupVerify({ message, setPopupVerifyIsActive }) {
  return (
    <View style={styles.profile__popupExit}>
      <Text style={styles.popup__text}>{message}</Text>
      <View style={styles.popup__btnContainer}>
        <TouchableOpacity
          style={styles.popup__btnYes}
          onPress={() => setPopupVerifyIsActive(false)}
        >
          <View style={styles.popup__btnViewYes}>
            <Text style={styles.popup__btnTextYes}>Хорошо</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row",
    columnGap: 224,
    marginTop: 30,
  },
  popup__btnNo: {
    borderRadius: 10, // border-radius
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup__btnViewNo: {
    width: 80,
    height: 30,
    borderRadius: 10, // border-radius
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup__btnViewYes: {
    width: 80,
    height: 30,
    borderRadius: 10, // border-radius
    backgroundColor: "rgba(6, 6, 6, 0.50);",
    justifyContent: "center",
    alignItems: "center",
  },
  popup__btnYes: {
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.50)",

    /*        borderRadius: 10, // border-radius
                backgroundColor: 'rgba(255, 255, 255, 0.5)'*/
  },
  popup__text: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
  },
  popup__exitIcon: {
    width: 80,
    height: 80,
  },
});
