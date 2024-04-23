import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ActionsTopBar from './src/components/ActionsTopBar';
import pluto from './src/assets/pluto.png'
import english from './i18n/english';
import { width } from './src/constants/dimensions';

export default function App() {
  return (
    <View style={styles.container}>
      <ActionsTopBar/>
      <View>
        <Image source={pluto} style={styles.image}/>
      </View>
      <View style={styles.texts}>
        <Text style={styles.planetName}> {english.planetName} </Text>
        <Text style={styles.planetDescription}> {english.planetDescription}</Text>
      </View>
      <View style={styles.horizontal}/>
      <View style={styles.texts}>
        <Text style={styles.planetResume}> {english.planetResume} </Text>
      </View>
      <View style={styles.horizontal}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a32',
    alignItems: 'center',
  },
  planetName: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',

  },
  planetDescription: {
    color: '#fff',
    fontSize: 18,
  }, 
  texts:{
    width: width,
    paddingHorizontal: 16,
  },
  horizontal: {
    width: width*0.95,
    height: 1,
    backgroundColor: '#80808099',
    marginVertical: 16,
  }, 
  image: {
    width: 256,
    height: 256,
  },
  planetResume: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 16,
  }
});
