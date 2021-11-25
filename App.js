import React from 'react';

// IMPORT LIBRARY
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT SCREEN
import Home from './src/Home';
import Bookmark from './src/Bookmark';
import Content from './src/Content';
import Search from './src/Search';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}