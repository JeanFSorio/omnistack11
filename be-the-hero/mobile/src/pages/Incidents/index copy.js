import React from 'react'; // Para utilizarmos o JSX, sempre devemos importar.
import { Feather } from '@expo/vector-icons'; // Importar o ícone, como no React.
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
// * FlatList para usarmos o scroll.
// TouchableOpacity é um texto que funciona como um botão que diminui a opacidade.

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation(); // Funciona como useHistory do React.

  function navigateToDetail() {
    navigation.navigate('Detail'); // Navega para o Datail definido nas rotas.
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos 
			casos abaixo e salve o dia.</Text>
    
      <FlatList 
        data={[1, 2, 3, 4]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={navigateToDetail} 
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes </Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}