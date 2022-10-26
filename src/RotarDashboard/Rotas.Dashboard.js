import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, Feather, EvilIcons, AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

import Feed from '../Components/Home/Home';
import Explorar from '../Components/Explorar/Explorar';
import Postar from '../Components/Postar/Postar';
import Biblioteca from '../Components/Biblioteca/Biblioteca';
import Perfil from '../Components/Perfil/Perfil';
import ModalPost from "../Components/ModalPost/modal";
import Login from "../Components/InicialLC/Login/Login";



const RotasDashBoard = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <RotasDashBoard.Navigator initialRouteName="Feed"
         screenOptions={{
           headerShown: false,
           headerTitle: "Impusiiic",
           headerStyle:{
            backgroundColor: "#1C1C1C",
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
            
            <RotasDashBoard.Screen name="Feed" component={Feed} 
            options={{
                tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Ionicons name="home-outline" size={25} color={color} />
                )
            }}
            />

            <RotasDashBoard.Screen name="Explorar" component={Explorar} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color}) => (
                    <EvilIcons name="search" size={30} color={color} />
                )
            }}
            />
            
             
            <RotasDashBoard.Screen name="ModalPost" component={ModalPost} 
             options={{
                tabBarLabel:  '',
                tabBarActiveTintColor: 'black',
                tabBarIcon: ({color}) => (
                    <ModalPost />
                ),
            }}
            />

            <RotasDashBoard.Screen name="Biblioteca" component={Biblioteca} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color}) => (
                    <Ionicons name="book-outline" size={25} color={color} />
                )
            }}
            />
            
            <RotasDashBoard.Screen name="Perfil" component={Perfil}  options={{
                headerShown: false,
                 tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={35} color={color} />
                )
            }}
            />

        </RotasDashBoard.Navigator>
    );
}



const styles = StyleSheet.create({
    icon:   {
        padding: 10,
        height: 50,
        width: 50,
        marginBottom: 15,
        borderRadius: 70,
        color: '#939',
        backgroundColor: '#FFFAFA',
    },
})