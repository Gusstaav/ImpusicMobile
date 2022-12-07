import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SeusVideos from '../SeusVideos/SeusVideos';
import Curtidos from '../SeusVideos/Curtidos';

const Tab = createMaterialTopTabNavigator();

export default function PerfilTabs({route}) {
  const {user} = route.params;
  const {idUser} = route.params;
     
    return (
      <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor:'rgb(20,20,20)',
            borderColor : 'transparent' ,
            height: 40,
            
          },
          tabBarActiveTintColor : '#FFFFFF' ,
          
          tabBarLabelStyle: {
              fontSize: 14,
              marginLeft: 'auto',
              marginRight: 'auto'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#F5F5F5',
          },

      }}>
        <Tab.Screen name="SeusVideos" initialParams={{user, idUser}} component={SeusVideos} />
      </Tab.Navigator>
    );
  }