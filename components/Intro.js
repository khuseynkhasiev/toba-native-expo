import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import * as React from 'react';

import { Video, ResizeMode } from 'expo-av';
import {useEffect} from "react";

export default function Intro (){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    useEffect(() => {
        video.current.playAsync();
    })
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
});
