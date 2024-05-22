import React from "react";
import {Text, TouchableOpacity} from "react-native";

type PrimaryButtonProps = {
    label: string;
    onPress: () => void;
    backgroundColor?: string,
    textColor?: string
};


const PrimaryButton = ({backgroundColor = 'bg-[#00BCF5]', textColor = 'white', ... props}: PrimaryButtonProps) => {
    let text = 'text-' + textColor;

    return (
        <TouchableOpacity className={`${backgroundColor} w-full items-center p-2 rounded-xl`} onPress={props.onPress}>
            <Text className={`text-white text-xl font-semibold`}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton;