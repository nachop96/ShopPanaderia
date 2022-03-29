import React from 'react';
import {View,Text,Button} from 'react-native';
import {styles} from './styles';



const Product = ({navigation}) => {

    return(
        <View style={styles.container}> 
        
            <Text style={styles.title}>Productos</Text> 
            <Button title="Ir al Inicio" onPress={() => {
                navigation.navigate('Home')
            }} />
    
    
           
                
            
        </View>
    
        )
}


export default Product;