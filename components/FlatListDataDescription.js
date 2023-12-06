import {TouchableOpacity, Text, StyleSheet, View} from "react-native";

export default function FlatListDataDescription({item}){
    return (
        <TouchableOpacity style={styles.dataDescription__btnText}>
            <Text style={styles.dataDescription__text}>{item.description}</Text>
            <View style={styles.borderBottom} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dataDescription__btnText: {
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10
    },
    dataDescription__text: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'comics-toba',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 400,
    },
    borderBottom: {
        width: '70%',
        height: 1,
        backgroundColor: 'white'
    }
})
