import React, {useState} from 'react';

import AuthNavigator from './auth';
import MainNavigator from './main';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigation = () => {
    const [user, setUser] = useState(null);
    return (
        <NavigationContainer>
            {user ? <MainNavigator /> : <AuthNavigator />}
            
        </NavigationContainer>
    );
}

export default AppNavigation;

