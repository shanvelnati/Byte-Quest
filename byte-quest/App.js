import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigationer from './Components/Navigationer';
import { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigationer />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;