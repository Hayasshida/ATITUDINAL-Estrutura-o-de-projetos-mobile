import React from 'react';
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export default function ActionsTopBar({ navigation = useNavigation() }){

    const goToSettings = () => {
        navigation.navigate('Settings')
    }

    return(
        <View style={styles.actionBar}>
                <TouchableOpacity>
                    <Icon name="arrow-left" type='feather' color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToSettings}>
                    <Icon name="more-horizontal" type='feather' color="white"/>
                </TouchableOpacity>
        </View>
    );
}