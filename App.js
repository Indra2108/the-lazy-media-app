import React from 'react';

// IMPORT LIBRARY
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT SCREEN
import Home from './src/Home';
import Bookmark from './src/Bookmark';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}