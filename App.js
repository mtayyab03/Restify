import React, { useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

//screens
import SplashScreen from "./app/screens/SplashScreen";
import OnboardingfirstScreen from "./app/screens/OnboardingfirstScreen";
import BoardSecondScreen from "./app/screens/BoardSecondScreen";
import BoardthirdScreen from "./app/screens/BoardthirdScreen";
import SignLoginScreen from "./app/screens/SignLoginScreen";
import SignInScreen from "./app/screens/SignInScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import CalenderScreen from "./app/screens/CalenderScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import MeditateScreen from "./app/screens/MeditateScreen";
import CourseDetailScreen from "./app/screens/CourseDetailScreen";
import NightPlayOptionScreen from "./app/screens/NightPlayOptionScreen";
import SleepMusicScreen from "./app/screens/SleepMusicScreen";
import MusicScreen from "./app/screens/MusicScreen";
import SleepScreen from "./app/screens/SleepScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ChooseTopicScreen from "./app/screens/ChooseTopicScreen";
import WelcomeSleepScreen from "./app/screens/WelcomeSleepScreen";
import SleepStoriesScreen from "./app/screens/SleepStoriesScreen";
import NightMusicScreen from "./app/screens/NightMusicScreen";

//config
import Colors from "./app/config/Colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#A0A3B1",
        headerShown: false,
        tabBarStyle: {
          height: wp("15%"),
          padding: 3,
          paddingBottom: RFPercentage(1),
        },
        labelStyle: {
          fontSize: 13,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={(route) => ({
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <LinearGradient
                  colors={["#00605B", "#11E2CC"]}
                  start={[1, 1]}
                  end={[0.2, 0.3]}
                  style={focused && styles.activeIcon}
                >
                  <FontAwesomeIcon
                    name="home"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </LinearGradient>
              ) : (
                <View style={focused && styles.activeIcon}>
                  <FontAwesomeIcon
                    name="home"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </View>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Chat"
        component={SleepStoriesScreen}
        options={(route) => ({
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <LinearGradient
                  colors={["#00605B", "#11E2CC"]}
                  start={[1, 1]}
                  end={[0.2, 0.3]}
                  style={focused && styles.activeIcon}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </LinearGradient>
              ) : (
                <View style={focused && styles.activeIcon}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </View>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Insight"
        component={MeditateScreen}
        options={(route) => ({
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <LinearGradient
                  colors={["#00605B", "#11E2CC"]}
                  start={[1, 1]}
                  end={[0.2, 0.3]}
                  style={focused && styles.activeIcon}
                >
                  <Icon
                    name="yuque"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </LinearGradient>
              ) : (
                <View style={focused && styles.activeIcon}>
                  <Icon
                    name="yuque"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </View>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Music"
        component={SleepScreen}
        options={(route) => ({
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <LinearGradient
                  colors={["#00605B", "#11E2CC"]}
                  start={[1, 1]}
                  end={[0.2, 0.3]}
                  style={focused && styles.activeIcon}
                >
                  <FontAwesomeIcon
                    name="music"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </LinearGradient>
              ) : (
                <View style={focused && styles.activeIcon}>
                  <FontAwesomeIcon
                    name="music"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </View>
              )}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={(route) => ({
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <LinearGradient
                  colors={["#00605B", "#11E2CC"]}
                  start={[1, 1]}
                  end={[0.2, 0.3]}
                  style={focused && styles.activeIcon}
                >
                  <FontAwesomeIcon
                    name="user-alt"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </LinearGradient>
              ) : (
                <View style={focused && styles.activeIcon}>
                  <FontAwesomeIcon
                    name="user-alt"
                    size={27}
                    color={focused ? "white" : "#A0A3B1"}
                  />
                </View>
              )}
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerMode: "false" }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen
          name="OnboardingfirstScreen"
          component={OnboardingfirstScreen}
        />
        <Stack.Screen name="BoardSecondScreen" component={BoardSecondScreen} />
        <Stack.Screen name="BoardthirdScreen" component={BoardthirdScreen} />
        <Stack.Screen name="SignLoginScreen" component={SignLoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
        <Stack.Screen
          name="CourseDetailScreen"
          component={CourseDetailScreen}
        />
        <Stack.Screen
          name="NightPlayOptionScreen"
          component={NightPlayOptionScreen}
        />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ChooseTopicScreen" component={ChooseTopicScreen} />
        <Stack.Screen
          name="WelcomeSleepScreen"
          component={WelcomeSleepScreen}
        />
        <Stack.Screen
          name="SleepStoriesScreen"
          component={SleepStoriesScreen}
        />
        <Stack.Screen name="NightMusicScreen" component={NightMusicScreen} />
        <Stack.Screen name="SleepScreen" component={SleepScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    padding: 5,
    // backgroundColor: '#DD3DFB',
    borderRadius: 20,
  },
});
