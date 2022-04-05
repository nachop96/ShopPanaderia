import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import { styles } from './style';

const CategoryProducts = ({item,onSelected} ) => {
    
     return(
                <View style={styles.container}>
                
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => onSelected(item)}
                >
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>Descripcion:{item.description}</Text>
                        <Text style={styles.price}>AR$ {item.price}</Text>
                        

                    </View>
                </TouchableOpacity>
                </View>
            


 )
     }

     export default CategoryProducts;