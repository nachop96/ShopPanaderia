import {StyleSheet} from 'react-native';
import { colors } from '../../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDisabled: {
        flex: 1,
        opacity: 0.5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingVertical: 10,
    },
    messageText:{
        color: colors.error,
        fontSize: 12,
        marginVertical: 5,
    },

});
