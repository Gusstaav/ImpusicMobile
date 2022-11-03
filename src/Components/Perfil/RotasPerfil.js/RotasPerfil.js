import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SeusVideos from '../SeusVideos/SeusVideos';
import Curtidos from '../SeusVideos/Curtidos';

const Tab = createMaterialTopTabNavigator();

export default function PerfilTabs() {
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
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#F5F5F5',
          },

      }}>
        <Tab.Screen name="SeusVideos" component={SeusVideos} />
        <Tab.Screen name="Curtidos" component={Curtidos} />
      </Tab.Navigator>
    );
  }