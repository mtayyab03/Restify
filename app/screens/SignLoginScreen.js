import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

export default function SignLoginScreen(props) {
  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
      }}
    >
      {/* backgroundiamge */}
      <ImageBackground
        style={{
          width: RFPercentage(60),
          alignItems: "center",
          height: RFPercentage(60),
        }}
        source={require("../../assets/images/bgdo.png")}
      >
        {/* logo */}
        <Image
          style={{
            width: RFPercentage(15),
            height: RFPercentage(15),
            marginTop: RFPercentage(3),
          }}
          source={require("../../assets/images/dailylogo.png")}
        />

        {/* imagetitle */}
        <Image
          style={{
            marginTop: RFPercentage(2),
            width: RFPercentage(40),
            height: RFPercentage(28),
          }}
          source={require("../../assets/images/sleeptab.png")}
        />
      </ImageBackground>

      {/* textpage */}
      <View
        style={{
          marginTop: RFPercentage(2),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* heading */}
        <Text style={{ fontSize: RFPercentage(3), color: "#0D1040C9" }}>
          We are what we do
        </Text>

        {/* description */}
        <Text style={{ marginTop: RFPercentage(0.9), color: "#0D10409C" }}>
          Thousand of people are usign silent moon
        </Text>
        <Text style={{ marginTop: RFPercentage(0.2), color: "#0D10409C" }}>
          for smalls meditation
        </Text>
      </View>

      {/* //button */}
      <View style={{ marginTop: RFPercentage(7) }} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("SignInScreen");
        }}
      >
        <AppButton title="SIGN UP" />
      </TouchableOpacity>
      {/* belowbuttonline */}
      <View
        style={{
          marginTop: RFPercentage(1),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#A1A4B2", fontSize: RFPercentage(1.5) }}>
          ALREADY HAVE AN ACCOUNT?
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.5) }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
