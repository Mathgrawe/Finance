import React, {useState} from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Text, TextInput as RNTextInput, TouchableOpacity, View} from "react-native";
import moment from "moment";

type FormField = {
    label: string,
    value: string,
    onChange: (value: string) => void,
    mode: "date" | "time",
    showLabel?: boolean
};

export default function DateTimePickerInput({mode = "date", showLabel = true, ...props}: FormField) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleConfirm = (date) => {
        setDatePickerVisibility(false);

        props.onChange(moment(date).format("YYYY-MM-DD HH:mm:ss"))
    };

    const formatDate = (date) => {
        return moment(date).format(mode == "date" ? "DD/MM/YYYY" : "DD/MM/YYYY HH:mm")
    }

    return (
        <View className="flex flex-col">
            {showLabel && <Text className="text-sm px-2 mb-1">{props.label}</Text>}
            <TouchableOpacity className="w-full h-10 flex flex-row items-center p-2 bg-white rounded-md border border-slate-200 mb-4" onPress={() => setDatePickerVisibility(true)}>
                <Text className={`text-sm ${props.value ? "" : "opacity-20"}`}>{props.value ? formatDate(props.value) : "Clique para alterar a data"}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={() => setDatePickerVisibility(false)}
                date={props.value != null ? moment(props.value).toDate() : moment().toDate()}
                locale={'pt_Br'}
            />
        </View>
    );
}
