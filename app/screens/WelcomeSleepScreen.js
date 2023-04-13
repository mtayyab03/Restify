import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AppButton from '../components/common/AppButton';

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function WelcomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.third }}>

            <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center', }} source={require('../../assets/images/welcomesleep.png')}>

                {/* text */}
                <View style={{ marginTop: RFPercentage(15) }}>
                    <Text style={{ fontWeight: '700', fontSize: RFPercentage(4.1), textAlign: 'center', color: '#E6E7F2' }}>
                        Wecome to{'\n'}Sleep
                    </Text>
                    <Text style={{ marginTop: RFPercentage(2), fontWeight: '300', fontSize: RFPercentage(2), textAlign: 'center', color: '#EBEAEC' }}>
                        Explore the new king of sleep. It uses{'\n'}sound and vesualization to create{'\n'}perfect conditions for refreshing sleep.
                    </Text>
                </View>

                {/* //Button */}
                <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', bottom: RFPercentage(6.5), }} onPress={() => { props.navigation.navigate("SleepStoriesScreen") }} >
                    <AppButton title='Get Started' />
                </TouchableOpacity>
            </ImageBackground>
        </Screen>
    )
}