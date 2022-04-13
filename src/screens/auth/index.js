import {Button, KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import { signin, signup } from '../../redux/actions/auth.acion';

import Input from '../../components/atoms/input/index';
import { colors } from '../../constants/themes';
import {styles} from './style';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNotValid,setIsNotValid] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const onChangeInput = (value, type) => {
        if(type === 'email') {
            setEmail(value);
        }
        if(type === 'password') {
            setPassword(value);
        }

        if(emailInputRef.current.state.validate && passwordInputRef.current.state.validate) {
            setIsNotValid(false);
         } else {
             setIsNotValid(true);
         }

        const handleAuth = () => {
            if (isLogin){
                dispatch(signin(email, password));
            } else {
                dispatch(signup(email, password));
            }   


        }
    }
    
    return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={50}
        enabled
        >
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Registro'}</Text>
                <View style={styles.formContainer}>
                <Input 
                        ref={emailInputRef}
                        label='Email'
                        placeholder="Ingresa tu correo"
                        placeholderTextColor={colors.placeholder}
                        keyboardType="email-address"
                        type='email'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onChangeInput(value, 'email')}
                        value={email}
                        maxLength={60}
                        
                    />
                    <Input 
                        ref={passwordInputRef}
                        label='Contreseña'
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor={colors.placeholder}                   
                        type='password'
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        onChangeInput={(value) => onChangeInput(value, 'password')}
                        value={password}
                        maxLength={60}
                        
                    />

                </View>
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.linkText}>{isLogin ? '¿No tienes una cuenta? Registrate' : '¿Ya tienes una cuenta? Inicia Sesion'}</Text>
                    
                </TouchableOpacity>
                <Button title={isLogin ? 'Ingresar' : 'Registrar'} onPress={() => handleAuth()} disabled={isNotValid} color={colors.primary}  />
            </View>
        </KeyboardAvoidingView>
    );
    
};

export default Auth;