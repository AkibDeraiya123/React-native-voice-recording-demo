import React from 'react';
import { Image, Text, SafeAreaView } from 'react-native';
import AppImages from '../../assets/images';
import CommonToolbar from '../../component/custom/commontoolbar';
import string from '../../utils/string';
import styles from './styles'

const SuccessScreen = ({ navigation }) => {
    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    return (
        <SafeAreaView style={styles.saContainer} >
            <CommonToolbar
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick} />

            <Image style={styles.iSuccess} source={AppImages.ic_success} />
            <Text style={styles.tSuccess}>{string.Success}</Text>
        </SafeAreaView>
    );
};

export default SuccessScreen;
