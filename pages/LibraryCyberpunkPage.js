import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import {BackButtonSvgIcon, MenuBackSvgIcon} from "../components/svg/Svg";
import * as React from "react";
import FlatListDataDescription from "../components/FlatListDataDescription";

const Separator = () => {
    return <View style={styles.separator} />;
};
export default function LibraryCyberpunkPage({ navigation }) {

    const dataDescription = [
        {
            id: 1,
            description: 'карта',
        },
        {
            id: 2,
            description: 'управление',
        },
        {
            id: 3,
            description: 'ДИПИ',
        },
        {
            id: 4,
            description: 'оружие',
        },
        {
            id: 5,
            description: 'импланты',
        },
        {
            id: 6,
            description: 'антиквар',
        },
        {
            id: 7,
            description: 'ДИПИ',
        },
        {
            id: 8,
            description: 'бар',
        },
    ]

    return (
        <SafeAreaView style={styles.library}>
            <TouchableOpacity style={styles.library__menuBtn} onPress={() => navigation.navigate('Main')}>
                <MenuBackSvgIcon />
            </TouchableOpacity>
            <View style={styles.library__titleContainer}>
                <Text style={styles.library__title}>мир киберпанк</Text>
            </View>
            <TouchableOpacity style={styles.library__backBtnLibrary} onPress={() => navigation.navigate('Library')}>
                <BackButtonSvgIcon />
            </TouchableOpacity>


            <ImageBackground style={styles.library__background} source={require('../assets/image/libraryPage__cyberpunkBg.png')}>
                <View style={styles.library__backgroundContainer}>
                    <ImageBackground style={styles.library__bgFlatList} source={require('../assets/image/libraryBgFlatList.png')}>
                        <View style={styles.library__flatListContainer}>
                            <FlatList
                                contentContainerStyle={styles.listContent}
                                data={dataDescription}
                                keyExtractor={(_, index) => index.toString()}
                                showsHorizontalScrollIndicator={true}
                                renderItem={({item}) =>
                                    <FlatListDataDescription item={item}/>}
                                ItemSeparatorComponent={Separator}
                                /*horizontal*/
                                vertical
                                pagingEnabled
                                snapToAlignment='center'
                            />
                        </View>
                    </ImageBackground>
                    <ImageBackground style={styles.library__bgFlatListRight} source={require('../assets/image/libraryBgRight.png')}>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    library__flatListContainer: {
        height: '80%',
        width: '90%'
    },
    library__backgroundContainer: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 20,
        justifyContent: 'center'
    },
    library__bgFlatListRight: {
        width: 480,
        height: 265,
    },
    library__bgFlatList: {
        width: 244,
        height: 265,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    library__backBtnLibrary: {
        left: 10,
        bottom: 10,
        position: "absolute",
        zIndex: 1
    },
    library__rightBtnTextTitle: {
        color: `rgba(255, 255, 255, 0.70)`,
        textShadowColor: `0px 0px 70px rgba(45, 122, 238, 0.66)`,
        fontFamily: 'comics-toba',
        fontSize: 48,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: "center"

    },
    library__rightBtnText: {
        color: `rgba(255, 255, 255, 0.70)`,
        fontFamily: 'comics-toba',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: "center"
    },
    library__titleContainer: {
        width: '100%',
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 3
    },
    library__title:{
        color: 'rgba(255, 255, 255, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 38,
        fontFamily: 'comics-toba',
        fontStyle: 'normal',
        fontWeight: 400,
    },
    library__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 3
    },
    library: {
        flex: 1,
        width: '100%',
        position: "relative",
    },
    library__background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    separator: {
        height: 40, // Высота отступа между компонентами
    },
});
