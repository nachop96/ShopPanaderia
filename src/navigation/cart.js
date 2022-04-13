import Cart from "../screens/cart";
import {Platform} from 'react-native';
import React from 'react';
import { colors } from '../constants/themes';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {

    return (
        <Stack.Navigator 
        initialRouteName="Cart"
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
          
            <Stack.Screen name="Cart" 
            component={Cart} 
            
            />

        </Stack.Navigator>
    );
}

export default CartNavigator;