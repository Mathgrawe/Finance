import {Text, TextInput as RNTextInput, View} from "react-native";
import React from "react";

type FormField = {
    label: string,
    value: string,
    password?: boolean,
    bigText?: boolean,
    autoCapitalize?: boolean,
    onChange: (value: string) => void,
    showLabel?: boolean
};

export default function TextInput({password = false, bigText = false, autoCapitalize = false, showLabel = true,  ...props}: FormField) {
    return (
        <View className="flex flex-col">
            {showLabel && <Text className="text-sm px-2 mb-1">{props.label}</Text>}
            <RNTextInput
                placeholder={props.label}
                className={`w-full ${bigText ? "h-36" : "h-10"} w-full flex flex-row items-center p-2 bg-white rounded-md border border-slate-200 mb-4 focus:border-blue-500 text-gray-900`}
                autoCapitalize={autoCapitalize ? "sentences" : "none"}
                secureTextEntry={password}
                value={props.value}
                onChangeText={props.onChange}
                numberOfLines={bigText ? 5 : 1}
                multiline={bigText}
            />
        </View>
    );
}
