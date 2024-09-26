import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';


const PlantasScreen = () => {
  const [plantas, setPlantas] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
     
      const data = {
        plantas: [
          {
            id: '1',
            name: 'Cacto',
            description: 'Planta adaptada a ambientes áridos.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '2',
            name: 'Rosa',
            description: 'A rosa é uma planta ornamental popular.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '3',
            name: 'Eucalipto',
            description: 'Árvore de rápido crescimento, nativa da Austrália.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '4',
            name: 'Orquídea',
            description: 'Planta conhecida por suas flores exóticas.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '5',
            name: 'Grama',
            description: 'Planta herbácea comum em campos.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '6',
            name: 'Hibisco',
            description: 'Planta com flores grandes e coloridas.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: '7',
            name: 'Pinheiro',
            description: 'Árvore conífera, comum em regiões frias.',
            nutrition: 'Autótrofo',
            cellType: 'Eucariontes',
            cellOrganization: 'Multicelulares',
            reproduction: 'Sexuada',
            respiration: 'Aeróbia',
            image: 'https://via.placeholder.com/150',
          },
        ],
      };

      
      setPlantas(data.plantas);
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
