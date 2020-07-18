import React from 'react'
//react navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
//Screens
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LandingScreen from '../screens/LandingScreen'
//header Landing
import LandingHeader from '../components/LandingHeader'
//react native elements
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigation () {
    return (
        <Drawer.Navigator initialRouteName="Landing">
            <Drawer.Screen name="Landing" component={LandingScreen} />
        </Drawer.Navigator>
    );
}
function LeftIcon () {
    return (
        <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
    );
}
function HeaderTitle (){
    return (
        <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.today}>
                Today kjbjk
            </Text>
        </View>
    )
}

export default function StackNavigation (){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title:  <Image
                source={require("../assets/images/todo2.jpg")}
                resizeMode="contain"
                style={styles.image}
            ></Image> }} />
                <Stack.Screen name="Landing" component={DrawerNavigation} 
                    options={{  
                        title:  "Today", 
                        headerStyle: {
                            backgroundColor: 'rgba(208,2,27,1)',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <View>
                                <View style={styles.leftIconButtonRowFiller}></View>
                                <View style={styles.rightIconsWrapper}>
                                    <TouchableOpacity style={styles.iconButton}>
                                    <MaterialCommunityIconsIcon
                                        name="magnify"
                                        style={styles.rightIcon1}
                                    ></MaterialCommunityIconsIcon>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                    <MaterialCommunityIconsIcon
                                        name="plus-circle-outline"
                                        style={styles.rightIcon2}
                                    ></MaterialCommunityIconsIcon>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                    <MaterialCommunityIconsIcon
                                        name="refresh"
                                        style={styles.rightIcon3}
                                    ></MaterialCommunityIconsIcon>
                                    </TouchableOpacity>
                                   
                                </View>
                            </View>
                        ),
                        headerLeft : () => (
                            <View>
                                <View style={styles.leftIconButtonRow}>
                                    <TouchableOpacity style={styles.leftIconButton}>
                                    <MaterialCommunityIconsIcon
                                        name="menu"
                                        style={styles.leftIcon}
                                    ></MaterialCommunityIconsIcon>
                                    </TouchableOpacity>
                                   
                                </View>
                                <View style={styles.leftIconButtonRowFiller}></View>
                            </View>
                        ),
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 46,
        marginLeft: 8
      },
    leftIconButton: {
        padding: 11,
        flexDirection: "row"
      },
      leftIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
      },
    textWrapper: {
        marginLeft: 43,
        marginTop: 14
      },
      today: {
        fontSize: 18,
        color: "#FFFFFF",
        backgroundColor: "transparent",
        lineHeight: 18
      },
      leftIconButtonRow: {
        height: 48,
        flexDirection: "row",
        marginLeft: 5,
        marginTop: 5
      },
      leftIconButtonRowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      rightIconsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 5,
        //marginTop: 5
      },
      iconButton: {
        padding: 11
      },
      rightIcon1: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
      },
      rightIcon2: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
      },
      rightIcon3: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
      },
      rightIcon4: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
      }
})