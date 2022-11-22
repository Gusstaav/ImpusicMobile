import React, { useEffect, useState} from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Feather} from '@expo/vector-icons';
import { estiloPerfil } from "./estiloPerfil";
import { ipBd } from "../../../controllerIP";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil({route, navigation}){
    const {user} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    /*
        SE TIVER RODANDO NO PRÓPRIO PC: 10.0.2.2
        SE TIVER RODANDO NO EXPO GO: 192.168.1.14 (ipv4 do seu computador)
    */
   
   
   /*useEffect(() => {
       async function getUser(){
           const response = await AsyncStorage.getItem('userData');
           const json = JSON.parse(response);
           setUser(json);
       }
       getUser();
   },[])
*/
   
   
   useEffect(() => {
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+user)
       .then(response => response.json())
       .then((json) => setData(json.find(obj => {
        return obj.user === user;
      })))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
    }, []);
    
 
    return(
        <>
       
        <View style={estiloPerfil.container}  >
            <Image style={estiloPerfil.fotoBanner} 
            source={{uri: "http://"+ipBd+"/rnmysql/banner/"+data.id+".png"}}
            />

            <Image style={estiloPerfil.fotoPerfil}
            source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+data.id+".jpg"}}
            />
                <View style={estiloPerfil.containerDados}>
                    <Text style={estiloPerfil.textoPerfil}> {data.name} </Text>
                    <Text style={estiloPerfil.textoDescription}> {data.description} </Text>
                        <View style={estiloPerfil.dados}>
                            <Text style={estiloPerfil.textoDescription}> <Feather name="instagram" size={13} />  {data.instagram}  </Text>
                            <Text style={estiloPerfil.textoDescription}> <Feather name="facebook" size={13} /> {data.facebook}  </Text>
                        </View>
                </View>
        </View>
                
        
        <PerfilTabs route={route} > </PerfilTabs>


       
        </>
    );
}

