import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, Image, SafeAreaView, Animated, View, Pressable, Platform } from 'react-native';
import AppImages from '../../assets/images';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';
import styles from './styles'
import CommonToolbar from '../../component/custom/commontoolbar'
import string from '../../utils/string';
import Routes from '../../navigator/routes';
import Permissions, { PERMISSIONS } from 'react-native-permissions';

const DashboardScreen = ({ navigation }) => {
    const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
    const [audioFile, setAudioFile] = useState('');
    const [recording, setRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [paused, setPaused] = useState(true);
    const [isPermissionGrant, setIsPermissionGrant] = useState(false);
    const sound = useRef(0)

    useEffect(() => {
        checkPermissionAndSetupAudio()
    }, []);

    const checkPermissionAndSetupAudio = async () => {
        const result = await checkPermission()
        if (result) {
            setIsPermissionGrant(true)
            const options = {
                sampleRate: 16000,
                channels: 1,
                bitsPerSample: 16,
                wavFile: 'test.wav'
            };
            AudioRecord.init(options);
            AudioRecord.on('data', data => {
            });
        } else {
            alert('allow microphone permission')
            setIsPermissionGrant(false)
        }
    };

    const animatedOut = () => {
        startRecording()
        Animated.timing(animatePress, { toValue: 0.7, duration: 200 }).start()
    };

    const startRecording = async () => {
        const result = await checkPermission()
        if (result) {
            setAudioFile('')
            setRecording(true)
            setLoading(false)
            AudioRecord.start();
        } else {
            alert('allow microphone permission')
        }
    };

    const stopRecording = async () => {
        if (!recording) return;
        let audioFile = await AudioRecord.stop();
        setAudioFile(audioFile)
        setRecording(false)
    };

    const onRecordingLoad = () => {
        return new Promise((resolve, reject) => {
            if (!audioFile) {
                return reject('file path is empty');
            }

            sound.current = new Sound(audioFile, '', error => {
                if (error) {
                    return reject(error);
                }
                setLoading(true)
                return resolve();
            });
        });
    };

    const pauseRecording = () => {
        sound.current.pause();
        setPaused(true)
    };

    const handleOnSubmitClick = () => {
        navigation.navigate(Routes.Success)
    };

    const playRecording = async () => {
        if (!loading) {
            try {
                await onRecordingLoad();
            } catch (error) {
                console.log(error);
            }
        }
        setPaused(false)
        Sound.setCategory('Playback');
        sound.current.play(success => {
            if (success) {
                setPaused(true)
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    };

    const animatedIn = () => {
        stopRecording()
        Animated.timing(animatePress, { toValue: 1, duration: 200 }).start()
    };

    const checkPermission = async () => {
        const p = await Permissions.check(Platform.select({
            ios: PERMISSIONS.IOS.MICROPHONE,
            android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        }));
        if (p === 'granted') return true;
        return requestPermission();
    };

    const requestPermission = async () => {
        const p = await Permissions.request(Platform.select({
            ios: PERMISSIONS.IOS.MICROPHONE,
            android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        }));
        if (p === 'granted') {
            return true
        } else if (p === 'denied') {
            return false
        } else {
            return false
        }
    };

    const handlePlayState = () => {
        if (!paused) {
            pauseRecording()
        } else {
            playRecording()
        }
    };

    const resetAudio = () => {
        setAudioFile('')
        setRecording(false)
        setLoading(false)
        setPaused(true)
    };

    return (
        <SafeAreaView style={styles.saContainer} >
            <CommonToolbar title={string.Quetions} />
            <View style={styles.vMainContainer}>
                <Text style={styles.tQuetion}>{string.Whats_Is_This}</Text>
                <Image style={styles.iPhoto} source={{ uri: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80' }} />
                <Pressable disabled={!audioFile} onPress={handleOnSubmitClick} style={[styles.pSubmitButtonCotainer, !audioFile && styles.disableButton]}>
                    <Text style={styles.tButton}>{string.Submit}</Text>
                </Pressable>
            </View>
            <View style={styles.vAllBtnContainer}>
                <Pressable
                    disabled={!audioFile}
                    style={[styles.pResetContainer, !audioFile && styles.decreasOpacity]} onPress={resetAudio}>
                    <Image source={AppImages.ic_reset} style={styles.iReset} />
                </Pressable>
                <Pressable
                    disabled={!isPermissionGrant}
                    style={[styles.pButtonContainer, !isPermissionGrant && styles.decreasOpacity]}
                    onPressIn={animatedOut}
                    onPressOut={animatedIn}>
                    <Animated.View style={[styles.vButtonContainer, !isPermissionGrant && styles.decreasOpacity, { transform: [{ scale: animatePress }] }]} />
                </Pressable>
                <Pressable
                    disabled={!audioFile}
                    style={[styles.pStopContainer, !audioFile && styles.decreasOpacity]} onPress={handlePlayState}>
                    {!paused ?
                        <Image source={AppImages.ic_pause} style={styles.iPause} /> :
                        <Image source={AppImages.ic_play} style={styles.iPlay} />}
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default DashboardScreen;
