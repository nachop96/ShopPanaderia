import { FlatList, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getOrders, removeOrder } from '../../redux/actions/order.action';

import OrderItem from '../../components/molecules/orderItem';
import { styles } from './styles';

const Order = () => {

    const Dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.order.orders);

    useEffect(() => {
        Dispatch(getOrders(userId));
    }, []);

    const onDelete = (id) => {
        Dispatch(removeOrder(id));
    }

    const onDetails = (id) => {
        console.log(id);
    }
    
    const renderItem = ({item}) => (
        <OrderItem 
            data={item}
            onDelete={onDelete}
            onDetails={onDetails}
        />
        )
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={1}

            />
        </View>
    )
}

export default connect()(Order);