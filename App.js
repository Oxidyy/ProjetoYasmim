import * as react from 'react';
import { StyleSheet, View, Text, Image,   ScrollView } from 'react-native';

export default function App(params) {
  return (
    
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Series de Homens</Text>
      <Text style={estilo.subtitulo}>Ou para ver com a família</Text>
      <ScrollView>
      <Text style={estilo.serie}>Ursos Peludos e Brancos</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/Urso.jpg")}></Image>
      </View>

      <Text style={estilo.serie}>As aventuras de Didi</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/Didi.jpg")}></Image>
      </View >

      <Text style={estilo.serie}>Mia Khalifa - O filme</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/mia.jpg")}></Image>
      </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45adef",
    alignItems: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    marginBottom: 5
  },
  subtitulo: {
    fontSize: 25,
    marginBottom: 20,
    color: "#ffa"
  },
  serie: {
    fontSize: 19,
    marginTop: 10,
    marginBottom: 5,
    alignItems: "flex-start",
    textAlign: "left"
  },
  img: {
    width: 300,
    height: 150
  },
  image: {
    alignItems: "center"
  }
});