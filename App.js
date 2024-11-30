import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext'; // Assurez-vous que le chemin est correct

// Import des pages existantes
import Page1 from './src/frontend/pages/Page1';
import Page2 from './src/frontend/pages/Page2';
import Step4 from './src/frontend/pages/Step4';
import NoDisease from './src/frontend/pages/NoDisease';
import DuoPreferences from './src/frontend/pages/DuoPreferences';
import DuoSuggestions from './src/frontend/pages/DuoSuggestions';
import DetailsPaul from './src/frontend/pages/DetailsPaul';
import ChangeDuoScreen from './src/frontend/pages/ChangeDuoScreen';
import ForgotPasswordScreen from './src/frontend/pages/ForgotPasswordScreen'; 
import ForgotPasswordConfirmationScreen from './src/frontend/pages/ForgotPasswordConfirmationScreen'; 
import VerificationScreen from './src/frontend/pages/VerificationScreen'; 
import CreatePasswordScreen from './src/frontend/pages/CreatePasswordScreen';
import PasswordSuccessScreen from './src/frontend/pages/PasswordSuccessScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          {/* Liste des écrans */}
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Step4" component={Step4} />
          <Stack.Screen name="DuoPreferences" component={DuoPreferences} />
          <Stack.Screen name="NoDisease" component={NoDisease} />
          <Stack.Screen name="DuoSuggestions" component={DuoSuggestions} />
          <Stack.Screen name="DetailsPaul" component={DetailsPaul} />
          <Stack.Screen 
            name="ChangeDuoScreen" 
            component={ChangeDuoScreen} 
            options={{ title: 'Change Duo' }} 
          />
          <Stack.Screen 
            name="ForgotPasswordScreen" 
            component={ForgotPasswordScreen} 
            options={{ title: 'Forgot Password' }} 
          />
          <Stack.Screen 
            name="ForgotPasswordConfirmationScreen" 
            component={ForgotPasswordConfirmationScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="VerificationScreen" 
            component={VerificationScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
          <Stack.Screen name="PasswordSuccessScreen" component={PasswordSuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
