import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgetPassword, Home } from "../screens";

const Stack = createStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Home" 
            component= {Home}
        />          
    </Stack.Navigator> 
)