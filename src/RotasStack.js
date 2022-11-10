import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RotasTab from "./RotarDashboard/Rotas.Dashboard";

import Feed from "./Components/Home/Home";
import Explorar from './Components/Explorar/Explorar';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Postar from './Components/Postar/Postar';
import Perfil from './Components/Perfil/Perfil';
import Historico from './Components/Biblioteca/Historico/Historico';
import Login from "./Components/InicialLC/Login/Login";
import Cadastro from "./Components/InicialLC/Cadastro/Cadastro";
import Watch from "./Components/Video/View";

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
        }}>
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
            <Stack.Screen name="Biblioteca" component={Biblioteca} />
            <Stack.Screen name="Postar" component={Postar} />

            <Stack.Screen name="Perfil" component={Perfil} 
                options={{
                    headerShown: true,
                    
                }}
            />   

            <Stack.Screen name="Historico" component={Historico} />
            <Stack.Screen name="Watch" component={Watch} 
                options={{
                    headerShown: false
                }}
            />  
        </Stack.Navigator>
    );
}