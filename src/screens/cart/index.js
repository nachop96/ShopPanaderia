import { Button, FlatList, Text, View } from "react-native";
import { confirmCart, removeItem } from "../../redux/actions/cart.action";
import { connect, useDispatch, useSelector } from "react-redux";

import CartItem from "../../components/molecules/cartItem/index";
import React from "react";
import { colors } from '../../constants/themes';
import { styles } from "./styles";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const user = useSelector(state => state.auth.userId)
    
    const handleDeleteItem = (id) => dispatch(removeItem(id))

    const handleConfirmCart =() =>{
        dispatch(confirmCart(items,total,user))

    }
    
    const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    
                />
            <Button title="Confirmar" onPress={() => handleConfirmCart()} color={colors.primary} />
            </View>
            
            
            <View style={styles.footer}>
                <Text style={styles.total}>Total:</Text>
                <Text style={styles.totalPrice}>${total}</Text>
            </View>
        </View>
    )
}

export default connect()(Cart);