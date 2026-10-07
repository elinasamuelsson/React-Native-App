import { useState } from "react";
import { Text } from "react-native";

export default function CustomFooterText({ message }) {

    const [customRipple, setCustomRipple] = useState({color: "", lineDecor: ""});
    const changeRippleEffect = () => {
        setCustomRipple({...customRipple, color: "blue", lineDecor: "underline"});
    }

    const resetRippleEffect = () => {
        setCustomRipple({...customRipple, color: "", lineDecor: ""});
    }

    return (
        <Text 
            style={{color: customRipple.color, textDecorationLine: customRipple.lineDecor}}
            onPress={changeRippleEffect}
            onLongPress={changeRippleEffect}
        >
            {message}
        </Text>
    )
}