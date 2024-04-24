import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styles from './styles'
import { Button, Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'



export default function Settings({ navigation = useNavigation()}) {

    const voltar = () => {
        navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Button size='lg' onPress={voltar}>
                <Icon name='arrow-left'/>
                <Text> Voltar</Text>
            </Button>
        </View>
    </SafeAreaView>
  )
}