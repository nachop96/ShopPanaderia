import Cart from "../screens/cart";
import Category from "../screens/category";
import Home from "../screens/home";
import {Platform} from 'react-native';
import Product from "../screens/product";
import React from 'react';
import { colors } from '../constants/themes';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator 
        initialRouteName="Home"
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
            <Stack.Screen name="Home"
             component={Home} 
             options={{ headerShown: false, }}
             />
            <Stack.Screen name="Product" 
            component={Product} 
            options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen name="Category" 
            component={Category} 
            options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen name="Cart" 
            component={Cart} 
            
            />

        </Stack.Navigator>
    );
}

export default MainNavigator;