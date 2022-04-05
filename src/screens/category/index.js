import {Button, FlatList, Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { filteredProducts, selectedProduct } from '../../redux/actions/product.action';

import CategoryProducts from '../../components/molecules/categoryProducts';
import { PRODUCTS } from '../../constants/products';
import {styles} from './styles';

const Category = ({navigation,route}) => {


    const dispatch = useDispatch();
    const categoryProduct = useSelector(state => state.products.filteredProducts);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);

    const handleSelectCategory = (product) => {
        dispatch(selectedProduct(product.id))
        navigation.navigate('Product',{name: product.name})

    }

    const renderItem = ({item}) => <CategoryProducts item={item} onSelected={handleSelectCategory} />

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id));
    },[])

    return (
    <View style={styles.container}>
    <FlatList 
    data={categoryProduct}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    />
    </View>


    )
}


export default connect()(Category);