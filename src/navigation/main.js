import React from 'react';
import {Platform} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Category from "../screens/category";
import Product from "../screens/product";
import { colors } from '../constants/themes';

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
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }}/>
            <Stack.Screen name="Product" component={Product} options={{ title: 'Productos' }} />
            <Stack.Screen name="Category" component={Category} options={{ title: 'Categorias' }}/>
        </Stack.Navigator>
    );
}

export default MainNavigator;