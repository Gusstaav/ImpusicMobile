import React, { useEffect, useState} from "react";
import { View, Text, Image } from "react-native";
import { Feather} from '@expo/vector-icons';
import { estiloChannel } from "./estiloChannel";
import { ipBd } from "../../../controllerIP";

import RotasChannel from "./rotasChannel/rotasChannel";

export default function Channel({route, navigation}){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const {channelUser} = route.params;
    
  
    

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
       fetch('http://'+ipBd+'/rnmysql/get-channel-by-user.php?channelUser='+channelUser)
       .then(response => response.json())
       .then((json) => setData(json.find(obj => {
        return obj.user === channelUser;
      })))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
       
    }, []);

 
    return(
        <>
       
        <View style={estiloChannel.container}>
            <Image style={estiloChannel.fotoBanner} 
            source={{uri: "http://"+ipBd+"/rnmysql/banner/"+data.id+".jpg"}}
            />

            <Image style={estiloChannel.fotoChannel}
            source={{uri: "http://"+ipBd+"/rnmysql/icons/profile/"+data.id+".jpg"}}
            />
                <View style={estiloChannel.containerDados}>
                    <Text style={estiloChannel.textoChannel}> {data.name} </Text>
                    <Text style={estiloChannel.textoDescription}> {data.description} </Text>
                        <View style={estiloChannel.dados}>
                            <Text style={estiloChannel.textoDescription}> <Feather name="instagram" size={13} />  {data.instagram}  </Text>
                            <Text style={estiloChannel.textoDescription}> <Feather name="facebook" size={13} /> {data.facebook}  </Text>
                        </View>
                </View>
        </View>
                
        
        <RotasChannel route={route} />
       
        </>
    );
}

