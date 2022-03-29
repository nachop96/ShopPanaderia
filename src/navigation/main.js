import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Category from "../screens/category";
import Product from "../screens/product";


const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }}/>
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
    );
}

export default MainNavigator;