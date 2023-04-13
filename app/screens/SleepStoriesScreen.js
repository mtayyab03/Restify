import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, FlatList, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient';

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function SleepStoriesScreen() {
    const categoryData = [
        {
            id: '1',
            imageSource: require('../../assets/images/allicon.png'),
            title: 'All',

        },
        {
            id: '2',
            imageSource: require('../../assets/images/heartmedi.png'),
            title: 'My',

        },
        {
            id: '3',
            imageSource: require('../../assets/images/anxiousicon.png'),
            title: 'Anxious',

        },
        {
            id: '4',
            imageSource: require('../../assets/images/sleepicon.png'),
            title: 'Sleep',

        },
        {
            id: '5',
            imageSource: require('../../assets/images/kidsicon.png'),
            title: 'Kids',

        },
        {
            id: '6',
            imageSource: require('../../assets/images/allicon.png'),
            title: 'Happiness',

        },
    ]

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

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.lightWhite }}>
            <ImageBackground style={{ width: '100%', height: RFPercentage(31.7), alignItems: 'center', }} source={require('../../assets/images/sleepbggg.png')}>
                {/* text */}
                <View style={{ marginTop: RFPercentage(7) }}>
                    <Text style={{ fontWeight: '700', fontSize: RFPercentage(3.5), textAlign: 'center', color: '#E6E7F2' }}>
                        Sleep Stories
                    </Text>
                    <Text style={{ marginTop: RFPercentage(1), fontWeight: '300', fontSize: RFPercentage(2), textAlign: 'center', color: '#EBEAEC' }}>
                        Soothing bedtime stories to help{'\n'}you fall into a deep and natural{'\n'}sleep
                    </Text>
                </View>

            </ImageBackground>

            {/* flatlist */}
            <View style={{ position: 'relative', bottom: RFPercentage(5) }}>
                <FlatList
                    style={{ flexGrow: 0, }}
                    data={categoryData}
                    keyExtractor={categoryData => categoryData.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(3), alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: RFPercentage(9), height: RFPercentage(9), backgroundColor: '#586894', borderRadius: RFPercentage(2.8), alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: RFPercentage(4.1), height: RFPercentage(3.8), }} source={item.imageSource} />
                            </View>
                            <Text style={{ color: '#98A1BD', fontWeight: '500', fontSize: RFPercentage(2), marginTop: RFPercentage(1.3) }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    } />
            </View>
            {/* Container Ocean */}
            <View style={{ position: 'relative', bottom: RFPercentage(2.5) }}>
                <ImageBackground style={{ width: RFPercentage(47.7), height: RFPercentage(26.9), backgroundColor: Colors.primary, borderRadius: RFPercentage(1.4), alignItems: 'center', justifyContent: 'center' }} source={require('../../assets/images/sleepocean.png')}>

                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(1), top: RFPercentage(1) }}>
                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5), }} source={require('../../assets/images/lockocean.png')} />
                    </TouchableOpacity>

                    {/* text */}
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '900', fontSize: RFPercentage(3.8), textAlign: 'center', color: '#FFE7BF' }}>
                            The ocean moon
                        </Text>
                        <Text style={{ marginTop: RFPercentage(1), fontWeight: '300', fontSize: RFPercentage(2), textAlign: 'center', color: '#EBEAEC' }}>
                            Non-stop 8- hour mixes of our{'\n'}most popular sleep audio
                        </Text>
                    </View>

                    {/* button */}
                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(4) }}>
                        <LinearGradient colors={['#760BEE', '#DD3DFB']} start={[1, 1]} end={[0.2, 0.3]} style={{
                            width: RFPercentage(7.2), height: RFPercentage(3.7)
                            , borderRadius: RFPercentage(2), alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.6), fontWeight: '500' }}>
                                START
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            {/* flatlist */}
            <FlatList
                style={{ flexGrow: 0 }}
                contentContainerStyle={{ marginBottom: RFPercentage(2) }}
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
                        <Text style={{ color: Colors.third, fontWeight: '700', marginTop: RFPercentage(0.5), fontSize: RFPercentage(2.5) }}>
                            {item.title}
                        </Text>

                        {/* subtitle */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(0.5) }}>

                            <Text style={{ color: '#98A1BD', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.5), }}>
                                45 MIN
                            </Text>
                            <View style={{ width: RFPercentage(0.5), height: RFPercentage(0.5), borderRadius: RFPercentage(0.5), backgroundColor: '#98A1BD', marginRight: RFPercentage(0.5) }}>

                            </View>
                            <Text style={{ color: '#98A1BD', fontWeight: '500', fontSize: RFPercentage(1.5) }}>
                                SLEEP MUSIC
                            </Text>
                        </View>

                    </View>
                }
            />
        </Screen>
    )
}