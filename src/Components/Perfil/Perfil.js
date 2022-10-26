import React, { useEffect, useState} from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil(){
    const [isLoading, setLoading] = useState(true);
   
    const nameUser = "gustavo";
    


    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   const ipBd = '192.168.0.17';

    useEffect(() => { 
        async function teste(){
         const response = await fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+nameUser)

        const data = await response.text();

        
    }
    teste()
}, []);
    
    

    return(
        <>
       
        <View style={estiloPerfil.container}>
        
           

            <Text style={estiloPerfil.textoPerfil}> {data} </Text>
            
            
        </View>
       
        <PerfilTabs />
        </>
    );
}

