import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
            <Tab.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen}  />
            <Tab.Screen name="ProfileScreen" options={{ title: 'Profile' }} component={ProfileScreen} />
        </Tab.Navigator>
  )
}


