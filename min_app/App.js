import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeStack from './navigation/HomeStack';
import MyBookingsScreen from './screens/MyBookingsScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [bookinger, setBookinger] = useState([]);

  const addBooking = (booking) => {
    setBookinger([...bookinger, booking]);
  };

  const removeBooking = (id) => {
    setBookinger(bookinger.filter((b) => b.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#000000' },
          headerTitleStyle: { color: '#FFFFFF', fontSize: 18, fontWeight: '600', letterSpacing: 1 },
          headerTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#000000',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#B0B0B0',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Oversigt') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Mine bookinger') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Oversigt" options={{ headerShown: false }}>
          {(props) => <HomeStack {...props} addBooking={addBooking} />}
        </Tab.Screen>
        <Tab.Screen name="Mine bookinger">
          {(props) => <MyBookingsScreen {...props} bookinger={bookinger} removeBooking={removeBooking} />}
        </Tab.Screen>
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
