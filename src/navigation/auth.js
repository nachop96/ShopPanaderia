import Auth from '../screens/auth';
import React from 'react';
import { colors } from '../constants/themes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Auth" component={Auth} />
        
        </Stack.Navigator>
    )

}

export default AuthNavigator;