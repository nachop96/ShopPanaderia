import React from 'react';
import {View,Text,Button} from 'react-native';
import {styles} from './styles';



const Category = ({navigation}) => {

    return(
        <View style={styles.container}> 
        
            <Text style={styles.title}>Categorias</Text> 
            <Button title="Ir a Productos" onPress={() => {
                navigation.navigate('Product')
            }} />
    
    
           
                
            
        </View>
    
        )
}


export default Category;