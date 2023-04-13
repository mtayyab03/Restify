import React from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';


//Components
import Screen from '../components/Screen'


//config
import Colors from '../config/Colors'

export default function ChooseTopicScreen(props) {
    const filteredItems = [
        {
            id: '1',
            imageSource: require('../../assets/images/rstress.png'),
            title: 'Reduce Stress',
            height: RFPercentage(26.8)

        },
        {
            id: '2',
            imageSource: require('../../assets/images/iperform.png'),
            title: 'Improve\nPerformanee',
            height: RFPercentage(20.7)
        },
        {
            id: '3',
            imageSource: require('../../assets/images/ihappy.png'),
            title: 'Increase\nHappiness',
            height: RFPercentage(20.7)

        },
        {
            id: '4',
            imageSource: require('../../assets/images/ranxiety.png'),
            title: 'Reduce\nAnxiety',
            height: RFPercentage(28.8)
        },
        {
            id: '5',
            imageSource: require('../../assets/images/personalg.png'),
            title: 'Personal\nGrowth',
            height: RFPercentage(26.5)
        },
        {
            id: '6',
            imageSource: require('../../assets/images/bettersleep.png'),
            title: 'Better Sleep',
            height: RFPercentage(20.7)

        },
        {
            id: '7',
            imageSource: require('../../assets/images/lastbmantar.png'),
            title: 'Focus',
            height: RFPercentage(26.8)

        },
        {
            id: '8',
            imageSource: require('../../assets/images/incconc.png'),
            title: 'Increase\nConcentration',
            height: RFPercentage(26.8)

        },

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.lightWhite }}>
            <View style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(4) }}>
                {/* text */}
                <Text style={{ marginTop: RFPercentage(1.5), fontWeight: '400', fontSize: RFPercentage(3.5), color: '#3F414E', }}>
                    What Brings you {'\n'}
                    to Awaken?
                </Text>
                <Text style={{ marginTop: RFPercentage(2), fontWeight: '400', fontSize: RFPercentage(2), marginBottom: RFPercentage(1), color: '#A1A4B2' }}>
                    choose a topic to focuse on:
                </Text>
            </View>

            {/* masonary list */}
            <MasonryList
                data={filteredItems}
                keyExtractor={filteredItems => filteredItems.id.toString()}
                contentContainerStyle={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(0.1) }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate("CalenderScreen") }} style={{ marginTop: RFPercentage(2) }}>
                        <ImageBackground style={{ width: RFPercentage(25), borderRadius: RFPercentage(2), overflow: 'hidden', height: item.height }} source={item.imageSource} >
                            <Text style={{ position: 'absolute', bottom: RFPercentage(2), left: RFPercentage(2), color: Colors.white, fontWeight: '700', fontSize: RFPercentage(2.3) }}>
                                {item.title}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>}
            />
        </Screen>
    )
}