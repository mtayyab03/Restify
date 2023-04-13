import React from "react";
import { Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

//config
import Colors from "../../config/Colors";

export default function AppButton({ title }) {
  return (
    <LinearGradient
      colors={["#00605B", "#11E2CC"]}
      start={[1, 1]}
      end={[0.2, 0.3]}
      style={{
        width: RFPercentage(45),
        height: RFPercentage(7),
        borderRadius: RFPercentage(4),
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFPercentage(2),
      }}
    >
      <Text
        style={{
          color: Colors.white,
          fontSize: RFPercentage(2.6),
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </LinearGradient>
  );
}
