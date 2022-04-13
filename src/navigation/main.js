import CartNavigator from './cart';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import OrderNavigator from './order';
import {Platform} from 'react-native';
import React from 'react';
import ShopNavigator from './shop';
import { colors } from '../constants/themes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabStack = createBottomTabNavigator();
const MainNavigator = () => {

    return (
        <TabStack.Navigator 
        initialRouteName="ShopStack"
        screenOptions={{
            headerShown: false,
        }}
        >

<TabStack.Screen
                name='ShopStack'
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'home' : 'home-outline' } size={20}  />
                    ),
                    title: 'Tienda',
                }}
            />
            <TabStack.Screen
                name='CartStack'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'cart' : 'cart-outline' } size={20}  />
                    ),
                    title: 'Carrito',
                }}
            />
            <TabStack.Screen
                name='OrderStack'
                component={OrderNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'list' : 'list-outline' } size={20}  />
                    ),
                    title: 'Ordenes',
                }}
            />
                
        </TabStack.Navigator>
    );
}

export default MainNavigator;