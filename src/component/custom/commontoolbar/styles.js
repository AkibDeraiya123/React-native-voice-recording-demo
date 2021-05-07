import { StyleSheet } from 'react-native'
import styleconfig from '../../../utils/styleconfig'
import color from '../../../utils/color'

const styles = StyleSheet.create({
    saContainer: {
        backgroundColor: color.white,
    },
    vExtraContainer: {
        height: styleconfig.smartScale(10),
    },
    vToolbarContainer: {
        height: styleconfig.smartScale(55),
        flexDirection: 'row',
        alignItems: 'center',

    },
    textBlackSemibold: {
        color: color.black,
        fontSize: styleconfig.countPixelRatio(18),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    pIconContainer: {
        marginHorizontal: styleconfig.smartWidthScale(5),
        height: styleconfig.countPixelRatio(50),
        width: styleconfig.countPixelRatio(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iBack: {
        width: styleconfig.countPixelRatio(25),
        height: styleconfig.countPixelRatio(25),
        resizeMode: 'contain'
    },
    tTitle: {
        flex: 1,
        fontSize: styleconfig.countPixelRatio(24)
    },
})

export default styles