import LottieView from "lottie-react-native";
import animation from "./loadingRequestAnimation.json";
import * as React from "react";
import {useEffect, useRef} from "react";

export default function LoadingRequestAnimation(){
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
                width: 128,
                height: 128,
                position: 'absolute',
                zIndex: 99,
            }}
        />
    )
}
