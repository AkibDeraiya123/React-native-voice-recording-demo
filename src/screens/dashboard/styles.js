import { StyleSheet } from 'react-native'
import color from '../../utils/color';
import styleconfig from '../../utils/styleconfig';

const styles = StyleSheet.create({
    saContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.white
    },
    vMainContainer: {
        flex: 1
    },
    pButtonContainer: {
        marginHorizontal: styleconfig.smartWidthScale(20),
        height: styleconfig.countPixelRatio(84),
        width: styleconfig.countPixelRatio(84),
        borderWidth: styleconfig.countPixelRatio(20),
        borderColor: color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: styleconfig.countPixelRatio(42),
    },
    vAllBtnContainer: {
        justifyContent: 'center',
        paddingVertical: styleconfig.smartScale(35),
        flexDirection: 'row',
        alignItems: 'center'
    },
    vButtonContainer: {
        height: styleconfig.countPixelRatio(60),
        width: styleconfig.countPixelRatio(60),
        backgroundColor: color.white,
        borderRadius: styleconfig.countPixelRatio(30),

    },
    pResetContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: styleconfig.smartWidthScale(20),
        width: styleconfig.countPixelRatio(60),
        height: styleconfig.countPixelRatio(60),
        borderRadius: styleconfig.countPixelRatio(30),
        backgroundColor: color.primaryopacity
    },
    pStopContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: styleconfig.countPixelRatio(60),
        marginHorizontal: styleconfig.smartWidthScale(20),
        height: styleconfig.countPixelRatio(60),
        borderRadius: styleconfig.countPixelRatio(30),
        backgroundColor: color.primaryopacity,
        opacity: 1
    },
    iPlay: {
        width: styleconfig.countPixelRatio(22),
        height: styleconfig.countPixelRatio(22),
        resizeMode: 'contain'
    },
    iReset: {
        width: styleconfig.countPixelRatio(20),
        height: styleconfig.countPixelRatio(20),
        resizeMode: 'contain'
    },
    iPause: {
        width: styleconfig.countPixelRatio(25),
        height: styleconfig.countPixelRatio(22),
        resizeMode: 'contain'
    },
    tQuetion: {
        fontWeight: '600',
        fontSize: styleconfig.countPixelRatio(18),
        marginVertical: styleconfig.smartScale(8),
        marginHorizontal: styleconfig.smartWidthScale(20)
    },
    iPhoto: {
        height: styleconfig.smartScale(280),
        width: styleconfig.smartWidthScale(300),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: styleconfig.smartScale(20)
    },
    decreasOpacity: {
        opacity: 0.5
    },
    tButton: {
        fontWeight: '600',

        fontSize: styleconfig.countPixelRatio(20),
        color: color.white
    },
    pSubmitButtonCotainer: {
        alignSelf: 'center',
        marginVertical: styleconfig.smartScale(30),
        paddingHorizontal: styleconfig.smartWidthScale(80),
        paddingVertical: styleconfig.smartScale(12),
        borderRadius: styleconfig.countPixelRatio(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primarycolor
    },
    disableButton: {
        backgroundColor: '#dedede'
    }
});

export default styles