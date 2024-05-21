import {Text, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import React from "react";
import {OptionType} from "../../helpers/FormFields";

type FormField = {
    label: string,
    value: string,
    onChange: (value: string) => void,
    options: OptionType[],
};

export default function SelectInput({showLabel = true, ...props}: FormField) {
    return (
        <View className="flex flex-col">
            {showLabel && <Text className="text-sm px-2 mb-1">{props.label}</Text>}
            <View
                className="w-full flex justify-center items-center p-2 py-2.5 bg-white rounded-md border border-slate-200 mb-4">
                <RNPickerSelect
                    placeholder={{label: props.label, value: null}}
                    onValueChange={(value) => props.onChange(value)}
                    items={props.options}
                    value={props.value}
                />
            </View>
        </View>
    )
}
