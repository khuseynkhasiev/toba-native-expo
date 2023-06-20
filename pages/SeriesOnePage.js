import { StyleSheet, View} from 'react-native';
import { useState } from "react";

export default function SeriesOnePage({ navigation }) {

    const [counter, setCounter] = useState(1);
    const handleCounter = (value) => {
/*        setTimeout(() => {
            if (value === "inc") setCounter(counter + 1);
            else if (value === "dec" && counter > 1) setCounter(counter - 1);
        }, 1000);*/
    };
    return (
        <View>
{/*            <View style={styles.btnBlock}>
                <TouchableOpacity onPress={() => handleCounter("dec")}></TouchableOpacity>
                <TouchableOpacity onPress={() => handleCounter("inc")}></TouchableOpacity>
            </View>*/}
            {/*            {counter === 1 && <OneScene counter={counter} />}
            {counter === 2 && <TwoScene counter={counter} />}
            {counter === 3 && <ThreeScene counter={counter} />}
            {counter === 4 && <FourScene counter={counter} />}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    btnBlock:{
        position: 'absolute',
        display: 'flex',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: 999
    },
    btn:{
        width: '50%',
        height: '100%',
        //background: 'transparent'
    }
});
