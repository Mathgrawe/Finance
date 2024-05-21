import React from "react";
import {View} from 'react-native';
import TextInput from "./TextInput";
import DateTimePickerInput from "./DateTimePickerInput";
import SelectInput from "./SelectInput";
import {OptionType} from "../../helpers/FormFields";
import BooleanInput from "./BooleanInput";

type FormField = {
    label: string,
    type: string,
    value: string | boolean | number | string[] | number[],
    options?: OptionType[],
};

type FormFields = Record<string, FormField>;

type FormGeneratorProps = {
    values: Record<string, any>;
    fields: FormFields;
    onChange: (name: string, value: FormField["value"]) => void;
    onChangeEntirely?: (task:Record<string, any>) => void;
};

export default function FormGenerator({values, fields, onChange, onChangeEntirely, ...props}: FormGeneratorProps) {
    const renderField = (name: string, field: FormField) => {
        let value = values[name];

        switch (field.type) {
            case "password":
                return <TextInput label={field.label} value={value} password={true} onChange={(text) => onChange(name, text)}/>;
            case "text":
                return <TextInput label={field.label} value={value} bigText={true} onChange={(text) => onChange(name, text)}/>;
            case "select":
                return <SelectInput label={field.label} value={value} onChange={(text) => onChange(name, text)} options={field.options} />
            case "boolean":
                return <BooleanInput label={field.label} value={value} onChange={(value) => onChange(name, value)}/>;
            case "datetime":
                return <DateTimePickerInput label={field.label} value={value} onChange={(text) => onChange(name, text)} mode="datetime" />;
            case "date":
                return <DateTimePickerInput label={field.label} value={value} onChange={(text) => onChange(name, text)} mode="date" />;
            default:
                return <TextInput label={field.label} value={value} onChange={(text) => onChange(name, text)}/>;
        }
    };

    return (
        <View className="flex flex-col w-full" {...props}>
            {Object.keys(fields).map((key) => {
                return <View key={key}>{renderField(key, fields[key])}</View>;
            })}
        </View>
    );
}
