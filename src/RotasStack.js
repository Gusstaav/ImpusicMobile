import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RotasTab from "./RotarDashboard/Rotas.Dashboard";

import Feed from "./Components/Home/Home";
import Explorar from './Components/Explorar/Explorar';
import Perfil from './Components/Perfil/Perfil';
import Login from "./Components/InicialLC/Login/Login";
import Cadastro from "./Components/InicialLC/Cadastro/Cadastro";
import Watch from "./Components/Video/View";
import Channel from "./Components/channelUser/channel";

const Stack = createStackNavigator();

export default function Routes(){
    
    return(
        <Stack.Navigator 
         screenOptions={{
            headerShown: false,
            headerTitle : "Impusic",

            headerTitleAlign : 'left',

            headerTintColor: '#936',

            headerStyle : {
                backgroundColor : '#212121',
                height: 70,
            },
        }}
        >

            <Stack.Screen name="Login" component={Login}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen name="Cadastro" component={Cadastro}
                options={{
                    headerStyle: {
                        backgroundColor: '#D3D3D3'
                    }
                }}
            />

                <Stack.Screen name="Impusic" component={RotasTab}
                    options={{
                        headerShown: false,
                    }}
                />

            <Stack.Screen name="Feed" component={Feed} />

            <Stack.Screen name="Explorar" component={Explorar} />

            <Stack.Screen name="Perfil" component={Perfil} 
                options={{
                    headerShown: true,
                    
                }}
            />   
            <Stack.Screen name="Channel" component={Channel}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />    
        
            <Stack.Screen name="Watch" component={Watch} 
                options={{
                    headerShown: false
                }}
            />  
        </Stack.Navigator>
    );
}