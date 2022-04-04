import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../../constants/themes';

const {width,height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height/4,
        
    },
    touchable: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        color: colors.textInverse,
    }
    



})