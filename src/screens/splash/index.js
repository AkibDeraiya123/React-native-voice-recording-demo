import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Routes from '../../navigator/routes';
import string from '../../utils/string';
import styles from './styles'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Routes.Dashboard)
        }, 2000)
    }, []);

    return (
        <View style={styles.vContainer}>
            <Text style={styles.tAppName}>{string.App_Name}</Text>
        </View>
    );
};

export default SplashScreen;
