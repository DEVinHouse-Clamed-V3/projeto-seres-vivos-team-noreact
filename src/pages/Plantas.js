import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient'; // Se estiver usando expo

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

  const renderItem = ({ item }) => {
    // Animação para o efeito de toque no card
    const animatedScale = new Animated.Value(1);

    const handlePressIn = () => {
      Animated.spring(animatedScale, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(animatedScale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

    return (
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: animatedScale }] }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>

          {/* Caixa de descrição com tags coloridas */}
          <View style={styles.tagsContainer}>
            <LinearGradient
              colors={['#D5E8D4', '#b3d7bb']}
              style={styles.tag}
            >
              <Icon name="nature" size={16} color="#555" />
              <Text style={styles.tagText}>Nutrição: {item.nutrition}</Text>
            </LinearGradient>

            <LinearGradient
              colors={['#F8CECC', '#f5b4a4']}
              style={styles.tag}
            >
              <Icon name="eco" size={16} color="#555" />
              <Text style={styles.tagText}>Tipo Celular: {item.cellType}</Text>
            </LinearGradient>

            <LinearGradient
              colors={['#DAE8FC', '#b3cfe7']}
              style={styles.tag}
            >
              <Icon name="apps" size={16} color="#555" />
              <Text style={styles.tagText}>Organização: {item.cellOrganization}</Text>
            </LinearGradient>

            <LinearGradient
              colors={['#FFF2CC', '#ffddb8']}
              style={styles.tag}
            >
              <Icon name="healing" size={16} color="#555" />
              <Text style={styles.tagText}>Reprodução: {item.reproduction}</Text>
            </LinearGradient>

            <LinearGradient
              colors={['#E1D5E7', '#d0bed9']}
              style={styles.tag}
            >
              <Icon name="air" size={16} color="#555" />
              <Text style={styles.tagText}>Respiração: {item.respiration}</Text>
            </LinearGradient>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

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
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite quebrar as tags em linhas novas se não houver espaço suficiente
    marginTop: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  tagText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
});

export default PlantasScreen;
