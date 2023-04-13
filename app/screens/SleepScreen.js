import React, { useState } from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function SleepScreen() {
    return (
        <Screen style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightWhite }}>
            <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(4), color: Colors.primary }}>
                No Music To Display
            </Text>
        </Screen>
    )
}