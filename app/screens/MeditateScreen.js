import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function MeditateScreen(props) {

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

    const filteredItems = [
        {
            id: '1',
            imageSource: require('../../assets/images/msoonblue.png'),
            title: '7 Days of Calm',
            height: RFPercentage(26.2)

        },
        {
            id: '2',
            imageSource: require('../../assets/images/msoonaut.png'),
            title: 'Anxiet Release',
            height: RFPercentage(16.7)
        },
        {
            id: '3',
            imageSource: require('../../assets/images/msoonbeach.png'),
            title: 'Relax',
            height: RFPercentage(16.7)

        },
        {
            id: '4',
            imageSource: require('../../assets/images/msoonspring.png'),
            title: 'Make Happiness',
            height: RFPercentage(21.7)
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.lightWhite }}>
            {/* Start text */}
            <View style={{ marginTop: RFPercentage(4), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: '700', fontSize: RFPercentage(4), color: '#3F414E' }}>
                    Meditate
                </Text>
                <Text style={{ fontWeight: '300', lineHeight: RFPercentage(2.9), fontSize: RFPercentage(2.5), color: '#A0A3B1', textAlign: 'center', marginTop: RFPercentage(1.5) }}>
                    we can learn how to recognize when our {'\n'} minds are doing their normal everyday {'\n'} acrobatics.
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
                    <TouchableOpacity activeOpacity={0.7} style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3), alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: RFPercentage(9), height: RFPercentage(9), backgroundColor: '#A0A3B1', borderRadius: RFPercentage(2.8), alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: RFPercentage(4.1), height: RFPercentage(3.8), }} source={item.imageSource} />
                        </View>
                        <Text style={{ color: '#A0A3B1', fontWeight: '500', fontSize: RFPercentage(2), marginTop: RFPercentage(1.3) }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                } />

            {/* daily calm */}
            <View style={{ width: RFPercentage(50), height: RFPercentage(11), borderRadius: RFPercentage(1), backgroundColor: '#F1DDCF', marginTop: RFPercentage(3), marginBottom: RFPercentage(1.5) }}>
                <ImageBackground style={{ width: RFPercentage(50), justifyContent: 'center', alignItems: 'center', height: RFPercentage(11), borderRadius: RFPercentage(1), overflow: 'hidden' }} source={require('../../assets/images/mediimask.png')} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                        <View>
                            <Text style={{ fontWeight: '700', fontSize: RFPercentage(2.7), color: '#3F414E' }}>
                                Daily Calm
                            </Text >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(0.5) }}>

                                <Text style={{ color: '#5A6175', marginRight: RFPercentage(0.5), fontWeight: '500', fontSize: RFPercentage(1.5), }}>
                                    APR 30
                                </Text>
                                <View style={{ width: RFPercentage(0.5), height: RFPercentage(0.5), borderRadius: RFPercentage(0.5), backgroundColor: '#5A6175', marginRight: RFPercentage(0.5) }}>

                                </View>
                                <Text style={{ color: '#5A6175', fontWeight: '500', fontSize: RFPercentage(1.5) }}>
                                    PAUSE PRACTICE
                                </Text>
                            </View>
                        </View>

                        {/* icon */}
                        <TouchableOpacity activeOpacity={0.8}  >
                            <Icon name="play-circle" size={45} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            {/* masonary list */}
            <MasonryList
                data={filteredItems}
                keyExtractor={filteredItems => filteredItems.id.toString()}
                contentContainerStyle={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(0.1) }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("MusicScreen") }} style={{ marginTop: RFPercentage(2), }}>
                        <ImageBackground style={{ width: RFPercentage(25), borderRadius: RFPercentage(2), overflow: 'hidden', height: item.height, alignItems: 'center' }} source={item.imageSource} >
                            <Text style={{ position: 'absolute', bottom: RFPercentage(1), color: Colors.white, fontWeight: '500', fontSize: RFPercentage(2.1) }}>
                                {item.title}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>}
            />

        </Screen>
    )
}