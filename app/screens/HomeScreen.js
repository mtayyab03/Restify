import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'


//config
import Colors from '../config/Colors'

export default function HomeScreen(props) {
    const categoryData = [
        {
            id: '1',
            imageSource: require('../../assets/images/focus.png'),
            title: 'Focus',

        },
        {
            id: '2',
            imageSource: require('../../assets/images/happy.png'),
            title: 'Happiness',

        },
        {
            id: '3',
            imageSource: require('../../assets/images/increaseHappiness.png'),
            title: 'Relax',

        },
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.lightWhite }}>

            {/* //textview */}
            <View style={{ marginTop: RFPercentage(3), marginLeft: RFPercentage(3) }}>
                <Text style={{ fontSize: RFPercentage(3.5), fontWeight: '700', color: '#3F414E' }}>
                    Good Morning, Afsar
                </Text>
                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: '300', color: '#A1A4B2' }}>
                    We Wish you have a good day
                </Text>
            </View>

            {/* //boxcontainer */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', marginTop: RFPercentage(4) }}>
                    <View style={{ width: RFPercentage(24), height: RFPercentage(25), backgroundColor: '#8E97FD', borderRadius: RFPercentage(1.8), overflow: 'hidden' }}>

                        <ImageBackground style={{ width: RFPercentage(24), justifyContent: 'center', alignItems: 'flex-start', height: RFPercentage(25), }} source={require('../../assets/images/ggheart.png')} >
                            <View style={{ marginLeft: RFPercentage(2) }}>
                                <Text style={{ fontSize: RFPercentage(1.8), fontWeight: '700', color: '#FFECCC' }}>
                                    Basics
                                </Text>
                                <Text style={{ fontSize: RFPercentage(1.2), fontWeight: '500', color: '#F7E8D0', marginTop: RFPercentage(0.5), }}>
                                    COURSE
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginLeft: RFPercentage(2), justifyContent: 'space-between', position: 'absolute', bottom: RFPercentage(2.5), }}>
                                <Text style={{ fontSize: RFPercentage(1.1), fontWeight: '500', color: '#EBEAEC' }}>
                                    3-10 MIN
                                </Text>

                                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("CourseDetailScreen") }} style={{ width: RFPercentage(8), height: RFPercentage(4), backgroundColor: '#EBEAEC', justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(2.5) }}>
                                    <Text style={{ fontSize: RFPercentage(1.2), fontWeight: '500', color: '#3F414E' }}>
                                        START
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>


                    <View style={{ width: RFPercentage(24), height: RFPercentage(25), backgroundColor: '#FFC97E', borderRadius: RFPercentage(1.8), position: 'absolute', right: RFPercentage(0.0), overflow: 'hidden' }}>

                        <ImageBackground style={{ width: RFPercentage(24), height: RFPercentage(25), justifyContent: 'center', alignItems: 'flex-start' }} source={require('../../assets/images/micbluej.png')} >
                            <View style={{ marginLeft: RFPercentage(2) }}>
                                <Text style={{ fontSize: RFPercentage(1.8), fontWeight: '700', color: '#3F414E' }}>
                                    Relaxation
                                </Text>
                                <Text style={{ fontSize: RFPercentage(1.2), fontWeight: '500', color: '#524F53', marginTop: RFPercentage(0.5), }}>
                                    MUSIC
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', marginLeft: RFPercentage(2), justifyContent: 'space-between', position: 'absolute', bottom: RFPercentage(2.5), }}>
                                <Text style={{ fontSize: RFPercentage(1.1), fontWeight: '500', color: '#524F53' }}>
                                    3-10 MIN
                                </Text>

                                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("CourseDetailScreen") }} style={{ width: RFPercentage(8), height: RFPercentage(4), backgroundColor: '#3F414E', justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(2.5) }}>
                                    <Text style={{ fontSize: RFPercentage(1.2), fontWeight: '500', color: '#FEFFFE' }}>
                                        START
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                    </View>
                </View>

                {/* //linebar thought */}
                <View style={{ width: RFPercentage(50), height: RFPercentage(9), borderRadius: RFPercentage(1), backgroundColor: '#333242', marginTop: RFPercentage(3) }}>
                    <ImageBackground style={{ width: RFPercentage(50), justifyContent: 'center', alignItems: 'center', height: RFPercentage(9), borderRadius: RFPercentage(1), overflow: 'hidden' }} source={require('../../assets/images/dtmask.png')} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                            <View>
                                <Text style={{ fontWeight: '700', fontSize: RFPercentage(2), color: Colors.white }}>
                                    Daily Thought
                                </Text >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(0.5) }}>

                                    <Text style={{ color: '#A1A4B2', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.5), }}>
                                        MEDITATION
                                    </Text>
                                    <View style={{ width: RFPercentage(1), height: RFPercentage(1), borderRadius: RFPercentage(0.5), backgroundColor: '#A1A4B2', marginRight: RFPercentage(0.5) }}>

                                    </View>
                                    <Text style={{ color: '#A1A4B2', fontWeight: '500', fontSize: RFPercentage(1.5) }}>
                                        3-10 MIN
                                    </Text>
                                </View>
                            </View>
                            <Image style={{ width: RFPercentage(4), height: RFPercentage(4), }} source={require('../../assets/images/playicon.png')} />
                        </View>
                    </ImageBackground>
                </View>

            </View>

            <View style={{ marginTop: RFPercentage(3), marginLeft: RFPercentage(3) }}>
                <Text style={{ fontWeight: '500', fontSize: RFPercentage(2.4), color: '#3F414E' }}>
                    Recomended for you
                </Text>
            </View>

            {/* flatlist */}

            <FlatList
                style={{ flexGrow: 0, }}
                data={categoryData}
                keyExtractor={categoryData => categoryData.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) =>
                    <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3) }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("CourseDetailScreen") }} style={{ width: RFPercentage(22), height: RFPercentage(16), backgroundColor: '#AFDBC5', borderRadius: RFPercentage(1), }}>
                            <ImageBackground style={{ width: RFPercentage(22), height: RFPercentage(16), borderRadius: RFPercentage(1), overflow: 'hidden' }} source={item.imageSource} />
                        </TouchableOpacity>

                        {/* title */}
                        <Text style={{ color: '#3F414E', fontWeight: '700', marginTop: RFPercentage(0.5), fontSize: RFPercentage(2.5) }}>
                            {item.title}
                        </Text>

                        {/* subtitle */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(0.5) }}>

                            <Text style={{ color: '#A1A4B2', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.5), }}>
                                MEDITATION
                            </Text>
                            <View style={{ width: RFPercentage(1), height: RFPercentage(1), borderRadius: RFPercentage(0.5), backgroundColor: '#A1A4B2', marginRight: RFPercentage(0.5) }}>

                            </View>
                            <Text style={{ color: '#A1A4B2', fontWeight: '500', fontSize: RFPercentage(1.5) }}>
                                3-10 MIN
                            </Text>
                        </View>

                    </View>
                } />

        </Screen>
    )
}