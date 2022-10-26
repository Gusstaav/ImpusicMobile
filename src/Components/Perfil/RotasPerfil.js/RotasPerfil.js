import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SeusVideos from '../SeusVideos/SeusVideos';
import Curtidos from '../SeusVideos/Curtidos';

const Tab = createMaterialTopTabNavigator();

export default function PerfilTabs() {
    return (
      <Tab.Navigator screenOptions={{
          tabBarStyle: {
              backgroundColor:'#363636',
            borderColor : 'transparent' ,
          },
          tabBarActiveTintColor : '#FFFFFF' ,
          
          tabBarLabelStyle: {
              fontSize: 15,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff',
            marginHorizontal: '15%',
            width: 1,
          },

      }}>
        <Tab.Screen name="SeusVideos" component={SeusVideos} />
        <Tab.Screen name="Curtidos" component={Curtidos} />
      </Tab.Navigator>
    );
  }