import LottieView from "lottie-react-native";
import animation from "./testZelim.json";
import * as React from "react";
import {useEffect, useRef} from "react";

export default function TestZelim(){
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
            loop={false}

/*            source={animation}
            autoPlay={true}
            loop={true}*/
            style={{
                width: 300,
                height: 300,
                position: 'absolute',
                zIndex: 99,
            }}
        />
    )
}
