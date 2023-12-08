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
import {useRef, useState} from "react";

const Separator = () => {
    return <View style={styles.separator} />;
};
export default function LibraryUtopiaPage({ navigation }) {

    const [scrollPercentage, setScrollPercentage] = useState(0);
    const flatListRef = useRef(null);

    const dataDescription = [
        {
            id: 1,
            description: 'карта',
        },
        {
            id: 2,
            description: 'РАЙОНЫ',
        },
        {
            id: 3,
            description: 'СТОЛИЦА',
        },
        {
            id: 4,
            description: 'ТРАНСПОРТ',
        },
        {
            id: 5,
            description: 'ПРАВИТЕЛЬСТВО',
        },
        {
            id: 6,
            description: 'ЭКОНОМИКА',
        },
        {
            id: 7,
            description: 'ОБРАЗОВАНИЕ',
        },
        {
            id: 8,
            description: 'ИСТОРИЯ',
        },
        {
            id: 9,
            description: 'ПРАВИТЕЛЬСТВО',
        },
        {
            id: 10,
            description: 'ЭКОНОМИКА',
        },
        {
            id: 11,
            description: 'ОБРАЗОВАНИЕ',
        },
        {
            id: 12,
            description: 'ИСТОРИЯ',
        },
    ]

    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const percent = (contentOffset.y / (contentSize.height - layoutMeasurement.height)) * 75;
        setScrollPercentage(percent);
    };

    const scrollToPercentage = (percent) => {
        const position = (percent * dataDescription.length) / 100;
        flatListRef.current.scrollToIndex({ index: Math.floor(position) });
    };

    return (
        <SafeAreaView style={styles.library}>
            <TouchableOpacity style={styles.library__menuBtn} onPress={() => navigation.navigate('Main')}>
                <MenuBackSvgIcon />
            </TouchableOpacity>
            <View style={styles.library__titleContainer}>
                <Text style={styles.library__title}>мир утопия</Text>
            </View>
            <TouchableOpacity style={styles.library__backBtnLibrary} onPress={() => navigation.navigate('Library')}>
                <BackButtonSvgIcon />
            </TouchableOpacity>

            <ImageBackground style={styles.library__background} source={require('../assets/image/libraryPage__utopiaBg.png')}>
                <View style={styles.library__backgroundContainer}>
                    <ImageBackground style={styles.library__bgFlatList} source={require('../assets/image/library__utopiaLeftViewBg.png')}>
                        <View style={styles.library__flatListContainer}>
                            <FlatList

                                contentContainerStyle={styles.listContent}
                                data={dataDescription}
                                keyExtractor={(_, index) => index.toString()}
                                /*showsHorizontalScrollIndicator={true}*/
                                renderItem={({item}) => <FlatListDataDescription item={item}/>}
                                ItemSeparatorComponent={Separator}
                                vertical
                                pagingEnabled
                                snapToAlignment='center'

                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}

                                onScroll={handleScroll}
                                scrollEventThrottle={16}
                                ref={flatListRef}
                            />

                            <View style={styles.scrollbar}>
                                <TouchableOpacity
                                    /*style={[styles.scrollIndicator, { height: `${scrollPercentage}%` }]}*/
                                    style={[styles.scrollIndicator, { top: `${scrollPercentage}%` }]}
                                    onPress={(e) => {
                                        const yPos = e.nativeEvent.locationY;
                                        const percent = (yPos / 300) * 100; // Assuming height of scrollbar is 300
                                        scrollToPercentage(percent);
                                    }}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={styles.library__bgFlatListRight} source={require('../assets/image/library__utopiaLeftViewBg.png')}>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
    scrollbar: {
        alignItems: "center",
        position: 'absolute',
        top: 20,
        bottom: 20,
        right: 0,
        width: 5,
        backgroundColor: 'rgba(204,204,204, .3)',
        borderRadius: 10
    },
    scrollIndicator: {
        width: 10,
        backgroundColor: 'white',
        opacity: 1,
        borderRadius: 10,
        height: 50
    },
    library__flatListContainer: {
        position: 'relative',
        height: '80%',
        width: '90%'
    },
    library__backgroundContainer: {
        width: '100%',
        flexDirection: 'row-reverse',
        columnGap: 20,
        justifyContent: 'center',
    },
    library__bgFlatListRight: {
        width: 480,
        height: 265,
        borderRadius: 30,
        overflow: "hidden"
    },
    library__bgFlatList: {
        width: 244,
        height: 265,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 30,
        overflow: "hidden"
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
