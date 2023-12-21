import LottieView from "lottie-react-native";
import animation from "./testZelim.json";
import * as React from "react";
import {useEffect, useRef} from "react";
import {Dimensions} from "react-native";

export default function TestZelim(){
    const animationRef = useRef(null);

/*    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;*/

    const { width, height } = Dimensions.get('window');

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.play();
        }
    }, []);
    return (
        <LottieView
            options={{
            }}
            ref={animationRef}
            source={animation}
            autoPlay={true}
            /*loop={false}*/

/*            source={animation}
            autoPlay={true}
            loop={true}*/
            style={{
                width: width,
                height: height,
                position: 'absolute',
                zIndex: 99,
            }}
        />
    )
}
