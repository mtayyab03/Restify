import React from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";

export default function WelcomeScreen(props) {
  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.lightWhite,
      }}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%", alignItems: "center" }}
        source={require("../../assets/images/welcome.png")}
      >
        {/* logo */}
        <Image
          style={{
            width: RFPercentage(9),
            height: RFPercentage(9),
            marginBottom: RFPercentage(1),
            marginTop: RFPercentage(5),
          }}
          source={require("../../assets/images/dailylogo.png")}
        />

        {/* text */}
        <Text
          style={{
            marginTop: RFPercentage(1.5),
            fontWeight: "400",
            fontSize: RFPercentage(3.5),
            textAlign: "center",
            color: "#FFECCC",
          }}
        >
          Hi Jhon, Welcome to My Daily Therapy
        </Text>
        <Text
          style={{
            marginTop: RFPercentage(2),
            fontWeight: "400",
            fontSize: RFPercentage(2),
            textAlign: "center",
            color: "#EBEAEC",
          }}
        >
          Explore the app, Find some peace of mind {" \n"} to prepare for
          meditation.
        </Text>

        {/* //Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: "absolute",
            bottom: RFPercentage(4),
            width: RFPercentage(45),
            height: RFPercentage(7),
            borderRadius: RFPercentage(4),
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(2),
            backgroundColor: Colors.white,
          }}
          onPress={() => {
            props.navigation.navigate("ChooseTopicScreen");
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: RFPercentage(2.6),
              fontWeight: "bold",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </Screen>
  );
}
