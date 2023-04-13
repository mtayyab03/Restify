import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/common/AppButton";

//config
import Colors from "../config/Colors";

export default function BoardthirdScreen(props) {
  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
      }}
    >
      {/* //Image */}
      <Image
        style={{ marginTop: RFPercentage(18) }}
        source={require("../../assets/images/killanxiety.png")}
      />

      {/* Text */}
      <View
        style={{
          marginTop: RFPercentage(2),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* heading */}
        <Text style={{ fontSize: RFPercentage(3), color: Colors.black }}>
          Killing Anxiety
        </Text>

        {/* description */}
        <Text style={{ marginTop: RFPercentage(0.7), color: Colors.black }}>
          Calm your anxieties, reduce tension and
        </Text>
        <Text style={{ marginTop: RFPercentage(0.2), color: Colors.black }}>
          incraese body awareness
        </Text>
      </View>

      {/* //scrollpoint */}
      <View
        style={{
          marginTop: RFPercentage(15),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#0D104080",
            width: RFPercentage(1.2),
            height: RFPercentage(1.2),
            borderRadius: RFPercentage(1),
            marginRight: RFPercentage(1),
          }}
        />
        <View
          style={{
            backgroundColor: "#0D104080",
            width: RFPercentage(1.2),
            height: RFPercentage(1.2),
            borderRadius: RFPercentage(1),
            marginRight: RFPercentage(1),
          }}
        />
        <View
          style={{
            backgroundColor: Colors.black,
            width: RFPercentage(4.5),
            height: RFPercentage(1.2),
            borderRadius: RFPercentage(1),
            marginRight: RFPercentage(1),
          }}
        />
      </View>

      {/* //Button */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("SignLoginScreen");
        }}
      >
        <AppButton title="Next" />
      </TouchableOpacity>
    </Screen>
  );
}
