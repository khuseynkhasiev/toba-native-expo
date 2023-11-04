import DateTimePicker from '@react-native-community/datetimepicker';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";

const RegisterUserDate = ({setUserDate, userDate, setDateIsError}) => {
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);
    const [onDate, setOnDate] = useState(false);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 14;
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    useEffect(() => {
        if(userDate){
            setOnDate(true);
        } else {
            setOnDate(false);
        }
    }, [userDate])

    function checkUserDate(year, month, day){
        if (year > currentYear ) {
            setDateIsError(true);
        } else if(year < currentYear) {
            setDateIsError(false);
        } else if(year === currentYear) {
            if(month > currentMonth) {
                setDateIsError(true);
            } else if(month < currentMonth) {
                setDateIsError(false);
            } else if(month === currentMonth) {
                if(day > currentDay) {
                    setDateIsError(true);
                } else if(day < currentDay){
                    setDateIsError(false);
                } else if(day === currentDay) {
                    setDateIsError(false);
                }
            }
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        const year = currentDate.getUTCFullYear();
        const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0'); // +1, чтобы сделать месяцы с 1 по 12
        const day = currentDate.getUTCDate().toString().padStart(2, '0'); // добавляем нули спереди для однозначных месяцев и дней
        const newDate = `${year}-${month}-${day}`
        console.log(newDate);
        checkUserDate(year, month, day);
        setUserDate(newDate);
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
                    {onDate ? userDate.split('-').reverse().join('.') : 'дд.мм.гггг'}
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
