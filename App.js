// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from './app/features/AddScreen/AddScreen';
import RetrieveScreen from './app/features/RetrieveScreen/RetrieveScreen';
import UpdateScreen from './app/features/UpdateScreen/UpdateScreen';
import DeleteScreen from './app/features/DeleteScreen/DeleteScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Retrieve" component={RetrieveScreen} />
        <Tab.Screen name="Update" component={UpdateScreen} />
        <Tab.Screen name="Delete" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
