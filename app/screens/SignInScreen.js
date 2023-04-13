import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'
import AppButton from '../components/common/AppButton';


//config
import Colors from '../config/Colors'

export default function SignInScreen(props) {
    const [text, onChangeText] = useState('');
    const [Password, onChangePassword] = useState('');
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.lightWhite }}>

            {/* backlogo */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("SignLoginScreen") }} style={{ backgroundColor: Colors.lightWhite, width: RFPercentage(5.5), height: RFPercentage(5.5), borderRadius: RFPercentage(3), alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(4), borderColor: '#0D104080', borderWidth: RFPercentage(0.07), marginTop: RFPercentage(4), }}>
                <Image
                    style={{
                        width: RFPercentage(2.5),
                        height: RFPercentage(2.5),
                    }}
                    source={require('../../assets/images/arowblogo.png')} />
            </TouchableOpacity>

            {/* title */}
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(4) }}>

                <Text style={{ fontWeight: '700', color: Colors.third, fontSize: RFPercentage(3.5) }}>
                    Welcome Back!
                </Text>

            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>

                {/* facebook */}
                <TouchableOpacity activeOpacity={0.7} style={{
                    width: RFPercentage(45), height: RFPercentage(7)
                    , borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2), backgroundColor: "#7583CA"
                }}>

                    {/* icon */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Image
                            style={{
                                width: RFPercentage(1.5),
                                height: RFPercentage(3),
                                marginRight: RFPercentage(5)
                            }}
                            source={require('../../assets/images/flogo.png')} />

                        <Text style={{ color: Colors.white, fontSize: RFPercentage(1.7), marginRight: RFPercentage(4.1) }}>
                            CONTINUE WITH FACEBOOK
                        </Text>
                    </View>

                </TouchableOpacity>

                {/* //google */}
                <TouchableOpacity activeOpacity={0.7} style={{
                    width: RFPercentage(45), height: RFPercentage(7)
                    , borderRadius: RFPercentage(4), justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2), backgroundColor: Colors.lightWhite, borderColor: '#0D104080', borderWidth: RFPercentage(0.07),
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Image
                            style={{
                                width: RFPercentage(2.9),
                                height: RFPercentage(3),
                                marginRight: RFPercentage(5)
                            }}
                            source={require('../../assets/images/Glogo.png')} />


                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.7), marginRight: RFPercentage(7) }}>
                            CONTINUE WITH GOOGLE
                        </Text>

                    </View>
                </TouchableOpacity>

                {/* //logintext */}
                <Text style={{
                    marginTop: RFPercentage(3.5), color: '#0D104080', fontSize: RFPercentage(1.5)
                }}>
                    OR LOG IN WITH EMAIL
                </Text>

                {/* //email input */}
                <View style={{ marginTop: RFPercentage(3) }}>
                    <TextInput
                        style={{
                            height: RFPercentage(5),
                            width: RFPercentage(45),
                            height: RFPercentage(7),
                            backgroundColor: '#F2F3F7',
                            color: Colors.black,
                            paddingLeft: RFPercentage(3),
                            borderRadius: RFPercentage(1.5)
                        }}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='Email address'
                        placeholderTextColor={Colors.placeholder}
                    />

                    {/* password */}
                    <TextInput
                        style={{
                            height: RFPercentage(5),
                            marginTop: RFPercentage(2),
                            width: RFPercentage(45),
                            height: RFPercentage(7),
                            backgroundColor: '#F2F3F7',
                            color: Colors.black,
                            paddingLeft: RFPercentage(3),
                            borderRadius: RFPercentage(1.5)
                        }}
                        onChangeText={onChangePassword}
                        value={Password}
                        placeholder='Password'
                        placeholderTextColor={Colors.placeholder}
                        secureTextEntry
                    />
                </View>

                {/* button */}
                <View style={{ marginTop: RFPercentage(3) }} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("WelcomeScreen") }} >
                    <AppButton title='LOG IN' />
                </TouchableOpacity>
                {/* //forget text */}
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={{ marginTop: RFPercentage(1), color: Colors.third, fontSize: RFPercentage(1.6), fontWeight: '400' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>


                {/* belowbuttonline */}
                <View style={{ marginTop: RFPercentage(13), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#A1A4B2', fontSize: RFPercentage(1.5) }}>
                        ALREADY HAVE AN ACCOUNT?
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => { props.navigation.navigate("SignUpScreen") }}>
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.5) }}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        </Screen>
    )
}