import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TextInput from "../../components/Forms/TextInput";
import PrimaryButton from '../../components/buttons/PrimaryButton';

const Login = ({ navigation }) => {
    const [text, setText] = useState('');
    const handlePress = () => {};

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

                 <View className="flex justify-center items-center bg-white p-5 py-10">
                     <Image source={require('../../../assets/images/welcome-back.png')} />
                 </View>

                     <View className="flex flex-col">
                         <TextInput
                             label={"Email"}
                             value={text}
                             onChange={(newValue) => setText(newValue)}
                             password={false}
                             bigText={false}
                             autoCapitalize={true}
                             showLabel={true}
                             className="mb-5"
                         />
                         <TextInput
                             label={"Password"}
                             value={text}
                             onChange={(newValue) => setText(newValue)}
                             password={true}
                             bigText={false}
                             autoCapitalize={true}
                             showLabel={true}
                         />

                         <TouchableOpacity className="flex items-end justify-end" onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text className="text-gray-400 text-sm cursur-pointer">Forgot your password ?</Text>
                         </TouchableOpacity>
                     </View>

                 <View className="flex justify-center pt-6">
                     <PrimaryButton
                         label="Sign up"
                         onPress={handlePress}
                         backgroundColor="bg-blue-800"
                         textColor="text-white"
                     />
                </View>

                 <View className="flex justify-center items-center bg-white p-5 pt-10">
                     <TouchableOpacity>
                         <Image source={require('../../../assets/images/fingerprint.png')} />
                     </TouchableOpacity>
                 </View>

                 <View className="flex-row justify-center items-center py-1">
                     <Text className="text-gray-400 text-sm">Don't have an account? </Text>
                     <TouchableOpacity>
                         <Text className="text-blue-800 text-sm font-semibold">Sign up</Text>
                     </TouchableOpacity>
                 </View>


             </View>
            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
};

export default Login;


