import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, onPress } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import Screen from '../components/Screen'
import AppButton from '../components/common/AppButton';


//config
import Colors from '../config/Colors'

export default function SignUpScreen(props) {

    const [Name, onChangeName] = useState('');
    const [text, onChangeText] = useState('');
    const [Password, onChangePassword] = useState('');
    const [eyeIcon, setEyeIcon] = useState(false);
    const [ticbox, setTicbox] = useState(false);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.lightWhite }}>

            {/* backlogo */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("SignInScreen") }} style={{ backgroundColor: Colors.lightWhite, width: RFPercentage(5.5), height: RFPercentage(5.5), borderRadius: RFPercentage(3), alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(4), borderColor: '#0D104080', borderWidth: RFPercentage(0.07), marginTop: RFPercentage(4), }}>
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
                    Create your account
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


                {/* Username */}
                <View style={{ marginTop: RFPercentage(3) }}>

                    <View style={{
                        width: RFPercentage(45),
                        height: RFPercentage(7),
                        backgroundColor: '#F2F3F7',
                        color: Colors.black,
                        paddingLeft: RFPercentage(3),
                        borderRadius: RFPercentage(1.5),
                        justifyContent: 'center'
                    }}>
                        <TextInput
                            onChangeText={onChangeName}
                            value={Name}
                            placeholder='Username'
                            placeholderTextColor={Colors.placeholder}
                        />

                        {Name == '' ?
                            null :
                            <View style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5) }}>

                                <Image
                                    style={{
                                        width: RFPercentage(2),
                                        height: RFPercentage(2),
                                    }}
                                    source={require('../../assets/images/ticlogo.png')} />

                            </View>

                        }
                    </View>

                    {/* //email input */}
                    <View style={{
                        width: RFPercentage(45),
                        height: RFPercentage(7),
                        marginTop: RFPercentage(2),
                        backgroundColor: '#F2F3F7',
                        color: Colors.black,
                        paddingLeft: RFPercentage(3),
                        borderRadius: RFPercentage(1.5),
                        justifyContent: 'center'
                    }}>
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='Email address'
                            placeholderTextColor={Colors.placeholder}
                        />

                        {text == '' ?

                            null :
                            <View style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5) }}>

                                <Image
                                    style={{
                                        width: RFPercentage(2),
                                        height: RFPercentage(2),
                                    }}
                                    source={require('../../assets/images/ticlogo.png')} />

                            </View>

                        }
                    </View>

                    {/* password */}
                    <View style={{
                        width: RFPercentage(45),
                        height: RFPercentage(7),
                        marginTop: RFPercentage(2),
                        backgroundColor: '#F2F3F7',
                        color: Colors.black,
                        paddingLeft: RFPercentage(3),
                        borderRadius: RFPercentage(1.5),
                        justifyContent: 'center'
                    }}>
                        <TextInput
                            onChangeText={onChangePassword}
                            value={Password}
                            placeholder='Password'
                            placeholderTextColor={Colors.placeholder}
                            secureTextEntry={true && !eyeIcon}
                        />

                        <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5) }}>

                            {/* <Image
                                style={{
                                    width: RFPercentage(2),
                                    height: RFPercentage(1),
                                }}
                                source={require('../../assets/images/eyelogo.png')} />
 */}
                            <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                                <MaterialCommunityIcons
                                    color={eyeIcon ? Colors.white : Colors.grey}
                                    style={{ right: RFPercentage(1) }}
                                    size={RFPercentage(3)}
                                    name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>


                    </View>
                </View>

                {/* privacypolicyline */}
                <View style={{ flexDirection: 'row', marginLeft: RFPercentage(8), justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }}>
                    <Text style={{ fontSize: RFPercentage(1.8) }}>
                        I have read the
                    </Text>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), marginLeft: RFPercentage(0.5) }} >
                        Privace Policy
                    </Text>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => { setTicbox(true) }} style={{ width: RFPercentage(3), height: RFPercentage(3), backgroundColor: Colors.lightWhite, marginLeft: RFPercentage(1), borderWidth: RFPercentage(0.07), borderColor: '#0D104080', alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(3) }}>

                        {ticbox == true ?
                            <TouchableOpacity activeOpacity={0.7} onPress={() => { setTicbox(false) }}>
                                <Image
                                    style={{
                                        width: RFPercentage(2.5),
                                        height: RFPercentage(2.5),
                                    }}
                                    source={require('../../assets/images/ticlogo.png')} />
                            </TouchableOpacity>
                            : null}

                    </TouchableOpacity>
                </View>

                {/* button */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("SignInScreen") }} >
                    <AppButton title='SIGN UP' />
                </TouchableOpacity>

                {/* belowbuttonline */}
                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#A1A4B2', fontSize: RFPercentage(1.5) }}>
                        ALREADY HAVE AN ACCOUNT?
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => { props.navigation.navigate("SignInScreen") }}>
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.5) }}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        </Screen >
    )
}