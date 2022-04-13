import { Button, Image, ScrollView, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { addItem } from '../../redux/actions/cart.action';
import { colors } from '../../constants/themes';
import { styles } from './styles';

const Product = ({ navigation,route }) => {
    
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);

    const addToCart = () => dispatch(addItem(product));
    
    const {name,description,price} = product;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productosContainer}>
            <Text style={styles.title}>{name}</Text>
            {/* <Image style={styles.image} source={require({product.image})} /> */}
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>AR$ {price}</Text>

            <View style ={styles.buttonContainer}>
                <Button title="Agregar al carrito" onPress={() => addToCart()} color={colors.primary}/>
            </View>
            <View style ={styles.buttonContainer}>
                <Button title="Volver al Inicio" onPress={() => 
                    navigation.navigate('Home') 
                } color={colors.secondary} />
            </View>
            

            </View>



    </ScrollView>

    )
}


export default connect()(Product);