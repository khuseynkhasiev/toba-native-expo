import LottieView from "lottie-react-native";
import animation from "./buttonClickAnimation.json";
import * as React from "react";
import {useEffect, useRef} from "react";

export default function ButtonClickRight(){
    const animationRef = useRef(null);

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
            loop
            /*            source={animation}
                        autoPlay={true}
                        loop={true}*/
            style={{
                width: 80,
                height: 80,
                position: 'absolute',
                zIndex: 99,
                right: 5,
            }}
        />
    )
}
