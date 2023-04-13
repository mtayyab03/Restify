import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, FlatList, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';


//config
import Colors from '../../config/Colors'

export default function DetailDropdown({ title, min }) {
    const [heart, activeheart] = useState(true);

    return (

        <View style={styles.maincontainer}>
            <View style={styles.innercontainer}>
                <View style={styles.container}>
                    <View style={styles.numcontainer}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >

                            {heart ?
                                <TouchableOpacity activeOpacity={0.7} onPress={() => activeheart(false)}>

                                    <Icon
                                        name="play-circle-outline"
                                        size={43}
                                        color='#A1A4B2'
                                    />


                                </TouchableOpacity>
                                :
                                <TouchableOpacity activeOpacity={0.7} onPress={() => activeheart(true)} >
                                    <Icon
                                        name="play-circle"
                                        size={43}
                                        color={Colors.primary}
                                    />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: '#3F414E', fontWeight: '500', fontSize: RFPercentage(2) }}>
                            {title}
                        </Text>
                        <View style={styles.mincontainer}>

                            <Text style={{ color: '#A1A4B2', fontSize: RFPercentage(1.7), fontWeight: '500' }}>
                                {min} min
                            </Text>
                        </View>
                    </View>
                </View>

                {/* line */}
                <View style={{ backgroundColor: '#E4E6FD', height: RFPercentage(0.07), width: '85%', marginLeft: RFPercentage(3) }} />

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    maincontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    innercontainer: {
        width: '100%',
        backgroundColor: Colors.lightWhite
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: RFPercentage(10),
    },

    numcontainer: {
        marginLeft: RFPercentage(1),
        width: RFPercentage(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    numtext: {
        color: Colors.black,
        fontSize: RFPercentage(2)
    },

    mincontainer: {
        marginTop: RFPercentage(1),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

})