//Importação das Componentes, imagens e tags
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ActionsTopBar from '../../components/ActionsTopBar';
import pluto from '../../assets/pluto.png';
import english from '../../constants/i18n/english';
import { height, width } from '../../constants/dimensions';
import PlutoPov1 from '../../assets/Pluto-Pov1.png';
import PlutoPov2 from '../../assets/Pluto-Pov2.png';


export default function HomeScreen({ navigation }) {


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
      <View style={styles.texts}>
        <Text style={styles.galleryText}> {english.gallery} </Text>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.PlutoPov} source={PlutoPov1}/>
            <Image style={styles.PlutoPov} source={PlutoPov2}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//Definição de estilo
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
  },
  galleryText: {
    width: width,
    paddingHorizontal: 5,
    color: '#fff',
    fontSize: 18,
  },
  PlutoPov: {
    marginTop: height/100,
    width: width/2.1,
    height: height/4,
    borderRadius: 20,
    marginRight: width/20,
  }
});
