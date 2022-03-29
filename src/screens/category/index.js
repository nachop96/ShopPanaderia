import React from 'react';
import {View,Text,Button,ScrollView,Image} from 'react-native';
import {styles} from './styles';



const Category = ({navigation}) => {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.categoriasContainer}>
            <Text style={styles.title}>Facturas</Text>
            <Image style={styles.image} source={require('../../../assets/images/FacturasCategoria.jpg')} />
            

            <Button title="Ir a Facturas" onPress={() => {
                navigation.navigate('Product')
            }} />

            </View>



    </ScrollView>
    
        )
}


export default Category;