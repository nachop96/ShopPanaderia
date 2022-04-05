import {Button, FlatList, Image, Text, View} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import { CATEGORIES } from '../../constants/categories';
import CategoryGrid from '../../components/molecules/categoryGrid';
import React from 'react';
import { selectedCategory } from '../../redux/actions/category.action';
import {styles} from './styles';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)
    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id))
        navigation.navigate('Category', { name: category.name })
    }

    const renderItem = ({item}) => <CategoryGrid item={item} onSelected={handleSelectCategory} />


    return (
    <View style={styles.container}>
    <FlatList 
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    />
    </View>


    )
}


export default connect()(Home);