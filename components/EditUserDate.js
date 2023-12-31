import DateTimePicker from '@react-native-community/datetimepicker';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";

const EditUserDate = ({date, setDate, setDateIsError}) => {
    const [show, setShow] = useState(false);
    const [onDate, setOnDate] = useState(false);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 14;
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    useEffect(() => {
        if(date){
            setOnDate(true);
        } else {
            setOnDate(false);
        }
    }, [date])

    function checkUserDate(year, month, day){
/*        console.log(typeof year);
        console.log(typeof Number(month));
        console.log(typeof Number(day));

        console.log(typeof currentYear);
        console.log(typeof currentMonth);
        console.log(typeof currentDay);*/

        if (Number(year) > currentYear ) {
            setDateIsError(true);
        } else if(Number(year) < currentYear) {
            setDateIsError(false);
        } else if(Number(year) === currentYear) {
            if(Number(month) > currentMonth) {
                setDateIsError(true);
            } else if(Number(month) < currentMonth) {
                setDateIsError(false);
            } else if(Number(month) === currentMonth) {
                if(Number(day) > currentDay) {
                    setDateIsError(true);
                } else{
                    setDateIsError(false);
                }
            }
        }
    }

    const onChange = (event, selectedDate) => {
        setShow(false);
        const currentDate = selectedDate;
        const year = currentDate.getUTCFullYear();
        const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getUTCDate().toString().padStart(2, '0');
        const newDate = `${year}-${month}-${day}`;
        checkUserDate(year, month, day);
        setDate(newDate);
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
                    {/*{onDate ? date.split('-').reverse().join('.') : 'ДД.ММ.ГГГГ'}*/}
                    {onDate ? date.split('-').reverse().join('.') : 'ДД.ММ.ГГГГ'}
                </Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date(date)}
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
        fontWeight: 300,
    },
    registerUserDate__btn:{
        backgroundColor: 'none',
        borderColor: '#FFF',
        borderBottomWidth: 1,
/*        borderRadius: 10,*/
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        /*width: 100*/
    },
    registerUserDate__btnText:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 300,
    }
});

export default EditUserDate;
