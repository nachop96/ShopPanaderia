import { Button, Image, ScrollView, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Product = ({ navigation,route }) => {

    const { product } = route.params;
    const {name,description,price,image} = product;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productosContainer}>
            <Text style={styles.title}>{name}</Text>
            {/* <Image style={styles.image} source={require({product.image})} /> */}
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>AR$ {price}</Text>

            <View style ={styles.buttonContainer}>
            <Button title="Ir al Inicio" onPress={() => {
                navigation.navigate('Home')
            }} /></View>

            </View>



    </ScrollView>

    )
}


export default Product;