import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, FlatList, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';


//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function MusicScreen(props) {
    const [play, setPlay] = useState(false);
    const [heart, activeheart] = useState(true);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }}>

            <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.primary }}>
                <ImageBackground style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', }} source={require('../../assets/images/bluemusicbg.png')}>

                    <View style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("Meditate") }} >
                            <Image style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), }} source={require('../../assets/images/musicx.png')} />

                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                            <View style={{ width: RFPercentage(6.3), height: RFPercentage(6.3), borderRadius: RFPercentage(3.5), backgroundColor: Colors.lightWhite, alignItems: 'center', justifyContent: 'center' }} >

                                {heart ?
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => activeheart(false)}>

                                        <Icon
                                            name="md-heart-outline"
                                            size={31}
                                            color='#760BEE'
                                        />


                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => activeheart(true)} >
                                        <Icon
                                            name="heart"
                                            size={31}
                                            color='#FF0000'
                                        />
                                    </TouchableOpacity>
                                }
                            </View>

                            <TouchableOpacity activeOpacity={0.7} >
                                <Image style={{ width: RFPercentage(6.3), height: RFPercentage(6.3), marginLeft: RFPercentage(2) }} source={require('../../assets/images/musicdld.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Text Song */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(30) }}>
                        <Text style={{ fontWeight: '700', fontSize: RFPercentage(4.1), textAlign: 'center', color: '#E6E7F2' }}>
                            Focus Attention
                        </Text>
                        <Text style={{ marginTop: RFPercentage(2), fontWeight: '500', fontSize: RFPercentage(1.8), textAlign: 'center', color: '#EBEAEC' }}>
                            7 DAYS OF CALM
                        </Text>

                    </View>
                    {/* button play */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(6), justifyContent: 'space-evenly', width: '70%' }}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5), }} source={require('../../assets/images/backward.png')} />
                        </TouchableOpacity>

                        <View style={{
                            backgroundColor: '#e0e0e0',
                            width: RFPercentage(11.5),
                            height: RFPercentage(11.5),
                            borderRadius: RFPercentage(6),
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                backgroundColor: 'white',
                                width: RFPercentage(10.5),
                                height: RFPercentage(10.5),
                                borderRadius: RFPercentage(6),
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {play ?
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(false)}>
                                        <Icon
                                            name="pause"
                                            color="#3F414E"
                                            size={40}

                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => setPlay(true)} >
                                        <Icon
                                            name="play"
                                            color="#3F414E"
                                            size={40}

                                        />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5), }} source={require('../../assets/images/forward.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Slider */}
                    <Slider
                        style={{ width: RFPercentage(45), height: RFPercentage(3), marginTop: RFPercentage(6) }}
                        minimumValue={0}
                        maximumValue={1}
                        value={0.40}
                        minimumTrackTintColor={Colors.white}
                        maximumTrackTintColor={Colors.lightWhite}
                        thumbTintColor={Colors.white}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: RFPercentage(50), marginTop: RFPercentage(1.5) }}>
                        <Text style={{ fontWeight: '500', fontSize: RFPercentage(1.6), color: Colors.white }}>
                            01:30
                        </Text>
                        <Text style={{ fontWeight: '500', fontSize: RFPercentage(1.6), color: Colors.white }}>
                            45:00
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        </Screen>
    )
}