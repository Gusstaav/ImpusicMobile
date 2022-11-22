import React, {useState} from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {EvilIcons, Ionicons} from '@expo/vector-icons';

import Feed from '../Components/Home/Home';
import Explorar from '../Components/Explorar/Explorar';
import Perfil from '../Components/Perfil/Perfil';

import { ipBd } from "../../controllerIP";



const RotasDashBoard = createBottomTabNavigator();

export default function RotasTab({route, navigation}){
    const {user} = route.params;
    const {idUser} = route.params;
    const [isLoading, setLoading] = useState(true);    
    
    return(
        <RotasDashBoard.Navigator
        initialRouteName="Feed"
         screenOptions={{
           headerShown: false,
           headerTitle: "Impusiiic",
           headerStyle:{
            backgroundColor: "rgb(20,20,20)",
           },
           headerTintColor: "#938",
         
           tabBarStyle : { 
                backgroundColor : '#121212' , 
                borderTopColor : 'transparent' ,
                height: 45,
            },
            tabBarLabelStyle:{
                height: 0,
            },
    
            tabBarActiveTintColor : '#fff' ,
            tabBarInactiveTintColor: '#878787',
        }}>
            
            <RotasDashBoard.Screen name="Feed" initialParams={{idUser, user}} component={Feed} 
            options={{
                tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Ionicons name="home-outline" size={25} color={color} />
                )
            }}
            />

            <RotasDashBoard.Screen name="Perfil" component={Perfil} initialParams={{user}} options={{
                headerShown: false,
                tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <>
                        <EvilIcons name="user" size={40} color={color} />
                    </>
                )
            }}
            />

            <RotasDashBoard.Screen name="Explorar" initialParams={{idUser, user}} component={Explorar} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color}) => (
                    <EvilIcons name="search" size={30} color={color} />
                )
            }}
            />

        </RotasDashBoard.Navigator>
    );
}



const styles = StyleSheet.create({
    icon:   {
        padding: 10,
        height: 37,
        width: 37,
        borderRadius: 70,
        backgroundColor: '#FFFAFA',
    },
})