import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import Screen from '../components/Screen'
import BottomTab from '../components/common/BottomTab'

//config
import Colors from '../config/Colors'


export default function SleepMusicScreen(props) {

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
        {
            id: '4',
            imageSource: require('../../assets/images/poomoon.png'),
            title: 'Moon Clouds',

        },
        {
            id: '5',
            imageSource: require('../../assets/images/poosweet.png'),
            title: 'Sweet Sleep',

        },
        {
            id: '6',
            imageSource: require('../../assets/images/playoption.png'),
            title: 'Relax',

        },

        {
            id: '7',
            imageSource: require('../../assets/images/poomoon.png'),
            title: 'Moon Clouds',

        },
        {
            id: '8',
            imageSource: require('../../assets/images/poosweet.png'),
            title: 'Sweet Sleep',

        },
        {
            id: '9',
            imageSource: require('../../assets/images/playoption.png'),
            title: 'Relax',

        },
        {
            id: '10',
            imageSource: require('../../assets/images/poomoon.png'),
            title: 'Moon Clouds',

        },
    ]




    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.third }}>

            <View style={{ marginTop: RFPercentage(4), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                {/* Arrowback logo */}
                <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: '#F2F2F2', borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0 }}>
                    <Image style={{ width: RFPercentage(2.2), height: RFPercentage(2.2), }} source={require('../../assets/images/arowblogo.png')} />
                </TouchableOpacity>

                {/* Sleep text */}
                <Text style={{ fontWeight: '700', fontSize: RFPercentage(2.7), color: '#E6E7F2' }}>
                    Sleep Music
                </Text>
            </View>

            {/* flatlist */}
            <FlatList
                style={{ flexGrow: 0, marginTop: RFPercentage(4) }}
                data={NightIslandData}
                keyExtractor={NightIslandData => NightIslandData.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(1), marginRight: RFPercentage(1) }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(25), height: RFPercentage(16), backgroundColor: '#AFDBC5', borderRadius: RFPercentage(1), }}>

                            <Image style={{ width: RFPercentage(25), height: RFPercentage(16), borderRadius: RFPercentage(1), overflow: 'hidden' }} source={item.imageSource} />

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
                }
            />
            <View style={{ marginTop: RFPercentage(10.6) }} />

            {/* bottom tab */}
            <BottomTab props={props} backgroundColor={Colors.bottomtabdark} />
        </Screen>
    )
}