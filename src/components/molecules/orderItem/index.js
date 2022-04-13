import {Text, TouchableOpacity, View} from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { colors } from "../../../constants/themes";
import { styles } from './styles';

const OrderItem = ({ data, onDelete, onDetails }) => {
    const { date, id, total } = data;

    const formatDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString();


    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.date}>{formatDate(date)}</Text>

            </View>

            <View style={styles.details}>
                
                <Text style={styles.total}>$ {total}</Text>
                
                <TouchableOpacity onPress={() => onDetails(id)}>
                    <IonicIcons name="list-outline" size={30} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <IonicIcons name="trash-outline" size={30} color={colors.primary} />
                </TouchableOpacity>

                
                 </View>
        </View>

        

    )

    }

    export default OrderItem;