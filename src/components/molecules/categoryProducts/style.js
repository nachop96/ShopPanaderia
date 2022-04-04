import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../../constants/themes';

const {width,height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height/3.5,
        
    },
    touchable: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: colors.text,
    },
    price: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: colors.text,
    },
    details: {
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    description: {
        fontSize: 13,
        fontFamily: 'OpenSans-Regular',
        color: colors.text,
    },

    



})