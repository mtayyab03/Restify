import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'
import Profileicon from '../components/common/Profileicon'


//config
import Colors from '../config/Colors'

export default function ProfileScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.lightWhite }}>

            {/* profile */}
            <View style={{ width: '90%', marginTop: RFPercentage(3) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    {/* picture */}
                    <View style={{ width: RFPercentage(10), height: RFPercentage(10), borderRadius: RFPercentage(5), overflow: 'hidden' }}>
                        <Image style={{ width: RFPercentage(10), height: RFPercentage(10), }} source={require('../../assets/images/picture.png')} />
                    </View>

                    {/* text */}
                    <View style={{ marginLeft: RFPercentage(2) }}>
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(2.4), color: Colors.third }}>
                            Asfar
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: RFPercentage(1.8), color: Colors.third }}>
                            asfar@gmail.com
                        </Text>
                        <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(7), height: RFPercentage(3), borderRadius: RFPercentage(3.2), backgroundColor: Colors.white, marginTop: RFPercentage(1), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '300', fontSize: RFPercentage(1), color: '#4A00B0' }}>
                                Edit profile
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            {/* //collection item */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), height: RFPercentage(30), alignItems: 'center', }}>

                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: RFPercentage(2.7) }}>
                    <Image style={{ width: RFPercentage(3.6), height: RFPercentage(3), }} source={require('../../assets/images/noti.png')} />

                    <Text style={{ fontWeight: '400', fontSize: RFPercentage(1.5), marginLeft: RFPercentage(1.5), color: Colors.primary }}>
                        Notifications
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: 0, }}>
                        <Image style={{ width: RFPercentage(2), height: RFPercentage(2.7), }} source={require('../../assets/images/rightarrow.png')} />
                    </TouchableOpacity>
                </View>

                {/* line */}
                <View style={{ width: '90%', height: RFPercentage(0.2), marginTop: RFPercentage(1), backgroundColor: Colors.primary }} />

                {/* 2nd */}
                <Profileicon title='Privacy'
                    icon={require('../../assets/images/privacy.png')} />

                {/* 3rd */}
                <Profileicon title='Security'
                    icon={require('../../assets/images/lockicon.png')} />

                {/* 4th */}
                <Profileicon title='Upgrade to premium'
                    icon={require('../../assets/images/diamonicon.png')} />
            </View>


            {/* 2nd box */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), height: RFPercentage(15), alignItems: 'center', }}>

                {/* 2nd */}
                <Profileicon title='Help'
                    icon={require('../../assets/images/helpicon.png')} />

                {/* 3rd */}
                <Profileicon title='About'
                    icon={require('../../assets/images/about.png')} />

            </View>

            {/* 3rd box */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), height: RFPercentage(8.5), alignItems: 'center', }}>

                {/* 2nd */}
                <Profileicon title='Log Out'
                    icon={require('../../assets/images/logout.png')} />

            </View>

        </Screen>
    )
}