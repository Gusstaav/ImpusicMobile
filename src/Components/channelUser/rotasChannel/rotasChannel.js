import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VideosChannel from '../videosChannel/VideosChannel';





const Tab = createMaterialTopTabNavigator();

export default function RotasChannel({route}) {
  const {channelUser} = route.params;
  const {videoId} = route.params;
  const {channelId} = route.params;
 
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
        <Tab.Screen name="VideosChannel" initialParams={{channelUser, videoId, channelId}}  component={VideosChannel} />
      </Tab.Navigator>
    );
  }