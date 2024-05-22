import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TextInput from "../../components/Forms/TextInput";
import PrimaryButton from '../../components/buttons/PrimaryButton';

const ForgotPassword = () => {
    const [text, setText] = useState('');
    const handlePress = ({ navgation }) => {};

    return (
        <SafeAreaView className="flex-1 bg-blue-800">

            <View className="flex align-baseline bg-blue-800 mx-5">
                <View className="flex-row items-center my-6 gap-x-3">
                    <AntDesign name="left" size={24} color="white" />
                    <Text className="text-white text-3xl font-semibold"> Sign in</Text>
                </View>
            </View>

            <View className="bg-white h-screen w-full rounded-t-3xl gap-y-1 p-5">
                <Text className="text-blue-800 text-3xl font-semibold leading-normal">Welcome Back</Text>
                <Text className="text-black text-base">Hello there, sign in to contine</Text>
            </View>

            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
};

export default ForgotPassword;


