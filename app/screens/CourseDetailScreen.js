import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList, onPress } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'
import DetailDropdown from '../components/common/DetailDropdown';

//config
import Colors from '../config/Colors'

export default function CourseDetailScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    const courseData = [
        {
            id: '1',
            min: '6 ',
            title: 'Focus Attention',

        },
        {
            id: '2',
            min: '3 ',
            title: 'Relax Life',

        },
        {
            id: '3',
            min: '12',
            title: 'Making Happiness ',

        },
        {
            id: '4',
            min: '2 ',
            title: 'Body Scan',

        },
        {
            id: '5',
            min: '2 ',
            title: 'Stress Releif',

        },

    ]

    const femalevoice = [
        {
            id: '1',
            min: '10 ',
            title: 'Making Happiness ',

        },
        {
            id: '2',
            min: '5 ',
            title: 'Body Scan',

        },
        {
            id: '3',
            min: '3',
            title: 'Focus Attention',

        },
        {
            id: '4',
            min: '2 ',
            title: 'Stress Releif',

        },
        {
            id: '5',
            min: '2 ',
            title: 'Body Relax',

        },

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.lightWhite }}>
            <View style={{ width: '100%', height: RFPercentage(34.5), borderBottomLeftRadius: RFPercentage(1.5), borderBottomRightRadius: RFPercentage(1.5), overflow: 'hidden' }}>

                <ImageBackground style={{ width: '100%', height: RFPercentage(34.5), alignItems: 'center', }} source={require('../../assets/images/sun.png')} >
                    <View style={{ marginTop: RFPercentage(3), width: '90%', alignItems: 'center', flexDirection: 'row' }}>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("HomeScreen") }} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5), backgroundColor: '#F2F2F2', borderRadius: RFPercentage(4), alignItems: 'center', justifyContent: 'center' }}>

                            <Image style={{ width: RFPercentage(2.2), height: RFPercentage(2.2), }} source={require('../../assets/images/arowblogo.png')} />

                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', position: 'absolute', right: 0 }}>
                            <TouchableOpacity activeOpacity={0.7}  >

                                <Image style={{ width: RFPercentage(6), height: RFPercentage(6), }} source={require('../../assets/images/cdhearticon.png')} />

                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} >

                                <Image style={{ width: RFPercentage(6), height: RFPercentage(6), marginLeft: RFPercentage(2) }} source={require('../../assets/images/downloadicon.png')} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </View>

            {/* text area */}
            <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3) }}>
                <Text style={{ color: '#3F414E', fontWeight: '700', fontSize: RFPercentage(3.4) }}>
                    Happy Morning
                </Text>
                <Text style={{ marginTop: RFPercentage(2), color: '#A1A4B2', fontWeight: '700', fontSize: RFPercentage(1.6) }}>
                    COURSE
                </Text>
                <Text style={{ marginTop: RFPercentage(2), color: '#A1A4B2', fontWeight: '300', fontSize: RFPercentage(1.9) }}>
                    Ease the mind into a restful night’s sleep  with {'\n'}
                    these deep, amblent tones.
                </Text>
            </View>

            {/* //icon fav */}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', width: '88%', justifyContent: 'flex-start', marginTop: RFPercentage(3), alignItems: 'center', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: RFPercentage(1.87), height: RFPercentage(1.8), }} source={require('../../assets/images/redheart.png')} />

                        <Text style={{ color: '#A1A4B2', fontWeight: '500', marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6) }}>
                            24.234 Favorits
                        </Text>
                    </View>

                    {/* //listen icon */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: RFPercentage(12) }}>
                        <Image style={{ width: RFPercentage(1.87), height: RFPercentage(1.8), }} source={require('../../assets/images/micicon.png')} />

                        <Text style={{ color: '#A1A4B2', fontWeight: '500', marginLeft: RFPercentage(1), fontSize: RFPercentage(1.6) }}>
                            34.234 Lestening
                        </Text>
                    </View>
                </View>
            </View>

            {/* text */}
            <View style={{ marginLeft: RFPercentage(3) }}>
                <Text style={{ marginTop: RFPercentage(4), color: '#3F414E', fontWeight: '700', fontSize: RFPercentage(2.7), }}>
                    Pick a Nnrrator
                </Text>


                {/* button */}
                <View style={{ flexDirection: 'row', marginTop: RFPercentage(3) }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setActiveButton('1')} style={{ width: RFPercentage(25), justifyContent: 'flex-start' }}>
                        <Text style={{ fontWeight: '500', fontSize: RFPercentage(2), color: activeButton == '1' ? Colors.primary : '#A1A4B2' }}>
                            MALE VOICE
                        </Text>
                        <View style={{ width: RFPercentage(7), height: RFPercentage(0.4), backgroundColor: activeButton == '1' ? Colors.primary : Colors.lightWhite, marginTop: RFPercentage(2), marginLeft: RFPercentage(2) }} />
                    </TouchableOpacity>

                    {/* female voice */}
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setActiveButton('2')} style={{ width: RFPercentage(25), justifyContent: 'flex-start' }}>
                        <Text style={{ fontWeight: '500', fontSize: RFPercentage(2), color: activeButton == '2' ? Colors.primary : '#A1A4B2' }}>
                            FEMALE VOICE
                        </Text>
                        <View style={{ width: RFPercentage(7), height: RFPercentage(0.4), backgroundColor: activeButton == '2' ? Colors.primary : Colors.lightWhite, marginTop: RFPercentage(2), marginLeft: RFPercentage(2) }} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* line */}
            <View style={{ width: '94%', marginLeft: RFPercentage(1.3), height: RFPercentage(0.07), backgroundColor: '#A1A4B2' }} />

            {/* dropdown */}

            {activeButton == '1' ?
                <FlatList
                    style={{
                        flexGrow: 0
                    }}
                    data={courseData}
                    keyExtractor={courseData => courseData.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <DetailDropdown
                            title={item.title}
                            min={item.min}
                            onPress={() => { props.navigation.navigate('MusicScreen') }}
                        />

                    } />
                :

                <FlatList
                    style={{
                        flexGrow: 0
                    }}
                    data={femalevoice}
                    keyExtractor={femalevoice => femalevoice.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <DetailDropdown
                            title={item.title}
                            min={item.min}
                            onPress={() => { props.navigation.navigate('MusicScreen') }}
                        />

                    } />
            }
        </Screen>
    )
}