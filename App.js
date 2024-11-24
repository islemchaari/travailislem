import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importez vos pages
import Page1 from './src/frontend/pages/Page1';
import Page2 from './src/frontend/pages/Page2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
