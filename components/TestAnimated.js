import LottieView from "lottie-react-native";
import animation from "../assets/lottie/TestAnimation.json";
import * as React from "react";
import {useEffect, useRef} from "react";

export default function TestAnimated(){
    const animationRef = useRef(null);

    useEffect(() => {
        console.log('anim')
        if (animationRef.current) {
            console.log('anim2')
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
            loop
            style={{
                width: 300,
                height: 300,
                position: 'absolute',
            }}
        />
    )
}
