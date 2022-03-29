import React from 'react';
import {View,Text,Button,Image} from 'react-native';
import {styles} from './styles';



const Home = ({navigation}) => {

    return(
    <View style={styles.container}> 
    
        <Text style={styles.title}>¡Panaderia Pedrosa!</Text> 
        <Image style={styles.image} source={require('../../../assets/images/Panaderia.jpg')} />
        <Button title="Ir a Categorias" onPress={() => {
            navigation.navigate('Category')
        }} />


       
            
        
    </View>

    )
}


export default Home;