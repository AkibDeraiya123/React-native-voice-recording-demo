import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import styleconfig from '../../utils/styleconfig';

const styles = StyleSheet.create({
    vContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primarycolor
    },
    tAppName: {
        color: 'white',
        fontWeight: '700',
        fontSize: styleconfig.countPixelRatio(50)
    }
});

export default styles