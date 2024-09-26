import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const PlantasScreen = () => {
  const [plantas, setPlantas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = require('../../database.json');

      
        const data = JSON.parse(JSON.stringify(response));

        
        if (data.plantas) {
          setPlantas(data.plantas);
        } else {
          console.error("A propriedade 'plantas' não foi encontrada no JSON.");
        }
      } catch (error) {
        console.error('Erro ao carregar ou analisar o arquivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.details}>Nutrição: {item.nutrition}</Text>
      <Text style={styles.details}>Tipo Celular: {item.cellType}</Text>
      <Text style={styles.details}>Organização Celular: {item.cellOrganization}</Text>
      <Text style={styles.details}>Reprodução: {item.reproduction}</Text>
      <Text style={styles.details}>Respiração: {item.respiration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={plantas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  details: {
    fontSize: 14,
    color: '#777',
  },
});

export default PlantasScreen;
