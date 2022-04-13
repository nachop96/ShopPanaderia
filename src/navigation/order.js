import Order from '../screens/order';
import {Platform} from 'react-native';
import React from 'react';
import { colors } from '../constants/themes';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {

    return (
        <Stack.Navigator 
        initialRouteName="Order"
        screenOptions={{ 
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? colors.primary : ''

            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
            headerTitleStyle:{
                fontFamily: 'OpenSans',

            },
            backgroundColor: colors.secondary,
            
        }} >
          
            <Stack.Screen name="Order" 
            component={Order} 
            
            />

        </Stack.Navigator>
    );
}

export default OrderNavigator;