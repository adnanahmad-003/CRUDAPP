import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AddScreen from '../features/AddScreen/AddScreen';
import DeleteScreen from '../features/DeleteScreen/DeleteScreen';
import RetrieveScreen from '../features/RetrieveScreen/RetrieveScreen';
import UpdateScreen from '../features/UpdateScreen/UpdateScreen';
import COLORS from '../Styles/COLORS';

const Tab = createBottomTabNavigator();

const tabBarIconMap = {
  Add: 'add',
  Retrieve: 'search',
  Update: 'update',
  Delete: 'delete'
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = tabBarIconMap[route.name];
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.blue,
          tabBarInactiveBackgroundColor: COLORS.white,
          tabBarActiveBackgroundColor: COLORS.white,
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: { padding: 5 },
          tabBarStyle: { height: 70 },
          headerShown: false
        })}
        initialRouteName='Add'
      >
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Retrieve" component={RetrieveScreen} />
        <Tab.Screen name="Update" component={UpdateScreen} />
        <Tab.Screen name="Delete" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}