import React from 'react'
import { View, Pressable, Text } from 'react-native'
import styles from './styles'

const CommonToolbar = ({
    containerStyle,
    title,
    textStyle,
    isRightButton,
    isLeftButton,
    leftIcon,
    isExtraSpace,
    rightIcon,
    onLeftClickListener,
    onRightClickListener
}) => (
        <View style={[styles.saContainer, containerStyle]}>
            <View style={styles.vToolbarContainer}>
                <Pressable style={styles.pIconContainer} onPress={isLeftButton ? onLeftClickListener : null}>
                    {isLeftButton ? leftIcon : null}
                </Pressable>
                <Text style={[styles.textBlackSemibold, styles.tTitle, textStyle]}>{title}</Text>
                <Pressable style={styles.pIconContainer} onPress={isRightButton ? onRightClickListener : null}>
                    {isRightButton ? rightIcon : null}
                </Pressable>
            </View>
            {isExtraSpace ? <View style={styles.vExtraContainer} /> : null}
        </View>
    );

export default CommonToolbar

