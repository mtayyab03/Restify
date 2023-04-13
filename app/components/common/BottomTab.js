import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

//config
import Colors from '../../config/Colors';

function BottomTab({ props, backgroundColor }) {

    const [activeButton, setActiveButton] = useState('0');

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(10), backgroundColor: backgroundColor }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity onPress={() => [props.navigation.navigate("HomeScreen"), setActiveButton('1')]} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', marginBottom: RFPercentage(1.5) }} >

                    <LinearGradient colors={['#760BEE', '#DD3DFB']} start={[1, 1]} end={[0.2, 0.3]} style={{
                        width: RFPercentage(6), height: RFPercentage(6)
                        , borderRadius: RFPercentage(2), alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2)
                    }}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(3.5) }} source={require('../../../assets/images/homee.png')} />

                    </LinearGradient>
                    <Text style={{ color: activeButton == '1' ? Colors.primary : '#A0A3B1', fontSize: RFPercentage(1.4), fontWeight: '500', marginTop: RFPercentage(0.5) }}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ChatScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.7), height: RFPercentage(3.4) }} source={require('../../../assets/images/sleepi.png')} />

                    <Text style={{ color: '#A0A3B1', fontSize: RFPercentage(1.4), fontWeight: '500', marginTop: RFPercentage(1) }}>
                        Sleep
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => [props.navigation.navigate("MeditateScreen"), setActiveButton('3')]} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.8) }} source={require('../../../assets/images/medi.png')} />

                    <Text style={{ color: activeButton == '3' ? Colors.primary : '#A0A3B1', fontSize: RFPercentage(1.4), fontWeight: '500', marginTop: RFPercentage(1) }}>
                        Meditate
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("TranslationScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(4.2), height: RFPercentage(3.4) }} source={require('../../../assets/images/musici.png')} />
                    <Text style={{ color: '#A0A3B1', fontSize: RFPercentage(1.4), fontWeight: '500', marginTop: RFPercentage(1) }}>
                        Music
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.8) }} source={require('../../../assets/images/profilee.png')} />

                    <Text style={{ color: '#A0A3B1', fontSize: RFPercentage(1.4), fontWeight: '500', marginTop: RFPercentage(1) }}>
                        Afsar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;