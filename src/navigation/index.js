import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigators
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

// firebase auth
import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

    return(
        <NavigationContainer>
            { user ? <AppNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}