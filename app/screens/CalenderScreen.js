import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import AppButton from "../components/common/AppButton";

export default function CalenderScreen(props) {
  const borderWidth = 25;
  const setTimerWidthHeight = wp(75);
  const selectedItemTextSize = 25;
  const wrapperHeight = setTimerWidthHeight - borderWidth * 2;

  const addZeroToDigits = (digit) => {
    if (digit) {
      let zeroAdded = `0${digit}`;
      return zeroAdded.substring(zeroAdded.length - 2);
    } else {
      return `00`;
    }
  };

  const dataSet = {
    data: {
      firstColumn: [...Array(13).keys()].map((item, idx) => {
        return { value: addZeroToDigits(item), index: idx };
      }),
      secondColumn: [...Array(60).keys()].map((item, idx) => {
        return { value: addZeroToDigits(item), index: idx };
      }),
      thirdColumn: [
        { value: "AM", index: 0 },
        { value: "PM", index: 1 },
      ],
    },
    initials: [8, 25, 0],
  };

  const seperatorComponentRendererOne = () => {
    return (
      <Text
        style={{
          fontSize: selectedItemTextSize,
          lineHeight: setTimerWidthHeight * 0.15,
        }}
      >
        :
      </Text>
    );
  };
  const seperatorComponentRendererTwo = () => {
    return (
      <Text
        style={{
          fontSize: selectedItemTextSize,
          lineHeight: setTimerWidthHeight * 0.15,
        }}
      ></Text>
    );
  };

  const [listArray, setListArray] = useState(new Set([]));

  const deActiveDayFilter = (dayId) => {
    listArray.delete(dayId);
    setListArray(new Set([...listArray]));
  };

  const Days = [
    {
      id: 1,
      text: "MO",
    },
    {
      id: 2,
      text: "TU",
    },
    {
      id: 3,
      text: "WE",
    },
    {
      id: 4,
      text: "TH",
    },
    {
      id: 5,
      text: "FR",
    },
  ];

  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: Colors.lightWhite,
      }}
    >
      {/* textview */}
      <View
        style={{
          justifyContent: "center",
          marginTop: RFPercentage(4),
          marginLeft: RFPercentage(3),
        }}
      >
        <Text
          style={{
            color: "#0D1040D6",
            fontWeight: "600",
            fontSize: RFPercentage(3.5),
          }}
        >
          What time would you {"\n"} like to meditate?
        </Text>
        <Text
          style={{
            color: "#0D104080",
            fontWeight: "400",
            fontSize: RFPercentage(2.5),
            marginTop: RFPercentage(1),
          }}
        >
          Any time you can choose but We {"\n"} recommend first thing in th
          morning.
        </Text>
      </View>

      {/* //timepicker */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.timer}>
          <RNDateTimeSelector
            dataSet={dataSet}
            onValueChange={(value) => {
              console.log("data on users end :   ... ", value);
            }}
            containerStyle={{
              alignSelf: "center",
              borderWidth: 0,
              borderColor: "transparent",
              borderRadius: 0,
              height: wp(61.5),
            }}
            firstSeperatorComponent={seperatorComponentRendererOne}
            secondSeperatorComponent={seperatorComponentRendererTwo}
            seperatorContainerStyle={
              {
                // width: wp(4)
              }
            }
            scrollPickerOptions={{
              itemHeight: 40,
              wrapperHeight: wrapperHeight,
              wrapperColor: "rgba(0,0,0,0)",
              highlightColor: "rgba(0,0,0,0.9)",
            }}
            textStyle={{
              fontSize: selectedItemTextSize,
              fontFamily: null,
            }}
            textColor={{
              primary: "rgba(0,0,0,1.0)",
              secondary: "rgba(0,0,0,0.5)",
              other: "rgba(0,0,0,0.15)",
            }}
          />
        </View>
      </View>

      {/* text below */}

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Which day would you</Text>
        <Text style={styles.heading}>like to meditate?</Text>
        <Text style={styles.tagLine}>
          Everyday is best, but We recommend picking {"\n"}
          at least five.
        </Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.dayContainer}>
          {Days.map((day) => (
            <Pressable
              key={day.id}
              style={[styles.day, listArray.has(day.id) && styles.activeDay]}
              onPress={() =>
                listArray.has(day.id)
                  ? deActiveDayFilter(day.id)
                  : setListArray(() => new Set([...listArray, day.id]))
              }
            >
              <Text
                style={[
                  styles.dayText,
                  listArray.has(day.id) && styles.activeDayText,
                ]}
              >
                {day.text}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("HomeScreen");
          }}
        >
          <AppButton title="SAVE" />
        </TouchableOpacity>
        <Text style={styles.cancelText} onPress={() => console.log("ok")}>
          NO THANKS
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  timer: {
    height: hp("25%"),
    width: hp("50%"),
    backgroundColor: "#E1E1E5",
    marginTop: hp("4%"),
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    overflow: "hidden",
  },

  heading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#3F414E",
  },
  tagLine: {
    fontSize: 15,
    color: "#A1A4B2",
    marginTop: RFPercentage(1),
  },
  headingContainer: {
    marginTop: hp("2%"),
    marginBottom: 10,
    marginLeft: RFPercentage(3),
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: hp("3%"),
    marginTop: hp("3%"),
    width: hp("40%"),
  },
  day: {
    backgroundColor: Colors.lightWhite,
    borderWidth: 1,
    padding: 8,
    borderRadius: 50,
    borderColor: "#A1A4B2",
  },
  activeDay: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  activeDayText: {
    color: "white",
  },
  dayText: {
    fontWeight: "bold",
    color: "#A1A4B2",
  },
  cancelText: {
    textAlign: "center",
    marginTop: wp("4%"),
    fontWeight: "500",
    color: "#3F414E",
  },
});
