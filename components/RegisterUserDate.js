import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";

const RegisterUserDate = ({userDate}) => {
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);
    const [onDate, setOnDate] = useState(false);

    useEffect(() => {
        userDate(date);
        if(date){
            setOnDate(true);
        } else {
            setOnDate(false);
        }
    }, [date])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    return (
        <>
            <TouchableOpacity style={styles.registerUserDate__btn} onPress={showDatepicker}>
                <Text style={styles.registerUserDate__btnText}>
                    {onDate ? date.toLocaleDateString('ru-RU') : 'дд.мм.гггг'}
                </Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    registerUserDate__text:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    registerUserDate__btn:{
        backgroundColor: 'none',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100
    },
    registerUserDate__btnText:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 300,
    }
});

export default RegisterUserDate;
