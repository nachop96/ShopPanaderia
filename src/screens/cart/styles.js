import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        flex: 0.8,
        
    },
    footer: {
        flex: 2,
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    total: {
        fontFamily: 'open-sans-regular',
        fontSize: 16,
        padding: 8,
    },
    totalPrice: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        padding: 8,
        
    },
    
});

