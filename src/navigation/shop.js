import Category from "../screens/category";
import Home from '../screens/home';
import Product from "../screens/product";
import React from 'react';
import { colors } from '../constants/themes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
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
          

        </Stack.Navigator>
    )

}

export default ShopNavigator;