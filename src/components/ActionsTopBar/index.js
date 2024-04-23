import React from 'react';
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Button, Icon } from '@rneui/themed';


export default function ActionsTopBar(){
    return(
        <View style={styles.actionBar}>
                <TouchableOpacity>
                    <Icon name="arrow-left" type='feather' color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="more-horizontal" type='feather' color="white"/>
                </TouchableOpacity>
        </View>
    );
}