import React, { useState, useEffect } from 'react'; // Para utilizarmos o JSX, sempre devemos importar.
import { Feather } from '@expo/vector-icons'; // Importar o ícone, como no React.
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
// * FlatList para usarmos o scroll.
// TouchableOpacity é um texto que funciona como um botão que diminui a opacidade.

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1); // 1
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation(); // Funciona como useHistory do React.

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident }); // Navega para o Datail definido nas rotas.
  }
  async function loadIncidents() {
    if (loading) { // 3 
      return;
    }
    if (total > 0 && incidents.length === total) { // 4
      return;
    }
    setLoading(true);

    const response = await api.get('incidents', {
      params: {page}
    });
    
    setIncidents([...incidents, ...response.data.incidents]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1); // 7
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
      </View>
      
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos 
			casos abaixo e salve o dia.</Text>
    
      <FlatList 
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', {
                 style: 'currency', 
                 currency: 'BRL' 
                }).format(incident.value)}
              </Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(incident)} 
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