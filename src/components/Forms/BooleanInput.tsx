import {Text, TouchableOpacity, View} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import React from "reactn";

type FormField = {
    label: string,
    value: boolean,
    onChange: (value: boolean) => void,
};

const BooleanInput = ({showLabel = true, ...props}: FormField) => {
    const setToggleCheckBox = (value: boolean) => {
        props.onChange(value);
    }

    return (
        <TouchableOpacity onPress={() => setToggleCheckBox(!props.value)} className="w-full flex flex-row items-center p-2 py-2.5 mb-4">
            <View style={{ borderWidth: 1, borderColor: '#000', height: 22, width: 22, borderRadius: 5 }}>
                <CheckBox
                    hideBox
                    style={{ height: 20, width: 20 }}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    value={props.value}
                />
            </View>
            <Text className="ml-2">
                { props.label }
            </Text>
        </TouchableOpacity>
    )
}

export default BooleanInput;
