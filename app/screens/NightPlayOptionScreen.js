import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import Screen from '../components/Screen'
import AppButton from '../components/common/AppButton';

//config
import Colors from '../config/Colors'

export default function NightPlayOptionScreen() {

    const NightIslandData = [
        {
            id: '1',
            imageSource: require('../../assets/images/poomoon.png'),
            title: 'Moon Clouds',

        },
        {
            id: '2',
            imageSource: require('../../assets/images/poosweet.png'),
            title: 'Sweet Sleep',

        },
        {
            id: '3',
            imageSource: require('../../assets/images/playoption.png'),
            title: 'Relax',

        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.third }}>
            <View style={{ width: '100%', height: RFPercentage(27.5), borderBottomLeftRadius: RFPercentage(1.5), borderBottomRightRadius: RFPercentage(1.5), overflow: 'hidden' }}>

                <ImageBackground style={{ width: '100%', height: RFPercentage(27.5), alignItems: 'center', }} source={require('../../assets/images/playoption.png')} >
                    <View style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', flexDirection: 'row' }}>

                        <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: '#F2F2F2', borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center' }}>

                            <Image style={{ width: RFPercentage(2.2), height: RFPercentage(2.2), }} source={require('../../assets/images/arowblogo.png')} />

                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                            <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: '#03174C', borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center' }} >

                                <Image style={{ width: RFPercentage(2.57), height: RFPercentage(2.5), }} source={require('../../assets/images/cdhearticon.png')} />

                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: '#03174C', borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(2) }}>

                                <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5), }} source={require('../../assets/images/downloadicon.png')} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </View>

            {/* text area */}
            <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3) }}>
                <Text style={{ color: '#E6E7F2', fontWeight: '700', fontSize: RFPercentage(4) }}>
                    Night Island
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(2) }}>

                    <Text style={{ color: '#98A1BD', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.6), }}>
                        MEDITATION
                    </Text>
                    <View style={{ width: RFPercentage(0.7), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: '#98A1BD', marginRight: RFPercentage(0.5) }}>

                    </View>
                    <Text style={{ color: '#98A1BD', fontWeight: '500', fontSize: RFPercentage(1.6) }}>
                        3-10 MIN
                    </Text>
                </View>

                <Text style={{ marginTop: RFPercentage(2), color: '#98A1BD', fontWeight: '300', fontSize: RFPercentage(1.9) }}>
                    Ease the mind into a restful night’s sleep  with {'\n'}
                    these deep, amblent tones.
                </Text>
            </View>

            {/* //icon fav */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', width: '88%', justifyContent: 'flex-start', marginTop: RFPercentage(3), alignItems: 'center', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.8}  >
                            <Icon name="heart" size={18} color='#E6E7F2' />
                        </TouchableOpacity>

                        <Text style={{ color: '#98A1BD', fontWeight: '500', marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6) }}>
                            24.234 Favorits
                        </Text>
                    </View>

                    {/* //listen icon */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(12) }}>
                        <Image style={{ width: RFPercentage(1.87), height: RFPercentage(1.8), }} source={require('../../assets/images/whitemic.png')} />

                        <Text style={{ color: '#98A1BD', fontWeight: '500', marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6) }}>
                            34.234 Lestening
                        </Text>
                    </View>
                </View>

                {/* line */}
                <View style={{ width: '86%', marginTop: RFPercentage(2.5), height: RFPercentage(0.07), backgroundColor: '#03174D' }} />

            </View>
            <Text style={{ color: '#E6E7F2', fontWeight: '500', marginLeft: RFPercentage(3), marginTop: RFPercentage(3), fontSize: RFPercentage(3) }}>
                Related
            </Text>

            {/* flatlist */}

            <FlatList
                style={{ flexGrow: 0, }}
                data={NightIslandData}
                keyExtractor={NightIslandData => NightIslandData.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) =>

                    <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3) }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(24), height: RFPercentage(16), backgroundColor: '#AFDBC5', borderRadius: RFPercentage(1), }}>

                            <Image style={{ width: RFPercentage(24), height: RFPercentage(16), borderRadius: RFPercentage(1), overflow: 'hidden' }} source={item.imageSource} />

                        </TouchableOpacity>

                        {/* title */}
                        <Text style={{ color: '#E6E7F2', fontWeight: '700', marginTop: RFPercentage(0.5), fontSize: RFPercentage(2.5) }}>
                            {item.title}
                        </Text>

                        {/* subtitle */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(0.5) }}>

                            <Text style={{ color: '#A1A4B2', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.5), }}>
                                45 MIN
                            </Text>
                            <View style={{ width: RFPercentage(0.5), height: RFPercentage(0.5), borderRadius: RFPercentage(0.5), backgroundColor: '#A1A4B2', marginRight: RFPercentage(0.5) }}>

                            </View>
                            <Text style={{ color: '#A1A4B2', fontWeight: '500', fontSize: RFPercentage(1.5) }}>
                                SLEEP MUSIC
                            </Text>
                        </View>

                    </View>
                } />

            {/* button */}
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                <AppButton title='PLAY' />
            </View>
        </Screen>
    )
}