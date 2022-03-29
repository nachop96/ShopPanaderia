import React from 'react';
import { View, Text, Button, Image,ScrollView } from 'react-native';
import { styles } from './styles';



const Product = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productosContainer}>
            <Text style={styles.title}>Dulce de Leche</Text>
            <Image style={styles.image} source={require('../../../assets/images/FacturaDDL.jpg')} />
            <Text style={styles.title}>Membrillo</Text>
            <Image style={styles.image} source={require('../../../assets/images/FacturaMembrillo.jpg')} />

            <Button title="Ir al Inicio" onPress={() => {
                navigation.navigate('Home')
            }} />

            </View>



    </ScrollView>

    )
}


export default Product;