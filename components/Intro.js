import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import * as React from 'react';

import { Video, ResizeMode } from 'expo-av';
import {useEffect} from "react";

export default function Intro ({setIsActive}){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    useEffect(() => {
        video.current.playAsync();
    })

    const handleClick = () => {
        setIsActive(false);
    }
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require('../assets/intro.mp4')}
                useNativeControls={false}
                //resizeMode={ResizeMode.CONTAIN}
                /*                paused={false}
                                autoPlay={true}*/
                resizeMode='cover'
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <TouchableOpacity
                style={styles.btnSkip}
                onPress={handleClick}
            ></TouchableOpacity>
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        height: '100%',
        width: '100%'
    },
    btnSkip: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "1000%",
        height: "100%",
        zIndex: 999,
        //backgroundColor: 'white',
        backfaceVisibility: "hidden",
    },
});
