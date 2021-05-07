import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import styleconfig from '../../utils/styleconfig';

const styles = StyleSheet.create({
    iSuccess: {
        alignSelf: 'center',
        marginTop: (styleconfig.height) / 4,
        width: styleconfig.countPixelRatio(120),
        height: styleconfig.countPixelRatio(120),
        resizeMode: 'contain'
    },
    saContainer: {
        backgroundColor: color.white,
        flex: 1
    },
    iBackIcon: {
        width: styleconfig.countPixelRatio(35),
        height: styleconfig.countPixelRatio(35),
        resizeMode: 'contain'
    },
    tSuccess: {
        alignSelf: 'center',
        fontSize: styleconfig.countPixelRatio(29),
        fontWeight: 'bold',
        marginVertical: styleconfig.smartScale(15)
    },
    vContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles