import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TextInput, Animated, TouchableWithoutFeedback, Alert ,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/animalia'
import axios from 'axios';


const Animal  = () => {

  const [ animalia, setAnimalia ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ filteredAnimalia, setFilteredAnimalia] = useState([]);
  const [ filterText, setFilterText ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://10.0.0.113:3000/animais?timestamp=${new Date().getTime()}`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setAnimalia(response.data);
          setFilteredAnimalia(response.data);
          console.log('Data fetched successfully');
        } else {
          Alert.alert("Os dados referentes aos animais não foram encontrados na base de dados");
        }
      } catch (error) {
        Alert.alert("Erro ao carregar a base de dados")
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterAnimalia = (text) => {
    setFilterText(text);
    if (text) {
      const filtered = animalia.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.nutrition.toLowerCase().includes(text.toLowerCase()) ||
        item.cellType.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredAnimalia(filtered);
    } else {
      setFilteredAnimalia(animalia);
    }
  };


  const renderItem = ({ item }) => {
    const animatedScale = new Animated.Value(1);


    const handlePressIn = () => {
      Animated.spring(animatedScale,{
        toValue: 0.95,
        useNativeDriver: true,
      }).start()
    };

    const handlePressOut =  () => {
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
      <Animated.View style={[styles.card, {transform: [{scale: animatedScale}] }]}>
        <Image
        source={{uri: item.image}}
        style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.tagContainer}>

          <LinearGradient
          colors={['#D5E8D4', '#b3d7bb']}
          style={styles.tag}
          >
          <Icon name="nature" size={16} color="#555"/>
          <Text style={styles.tagText}>Nutrição: {item.nutrition}</Text>
          </LinearGradient>

          <LinearGradient
          colors={['#F8CECC', '#f5b4a4']}
          style={styles.tag}
          >
          <Icon name="eco" size={16} color="#555"/>
          <Text style={styles.tagText}>Tipo Celular: {item.cellType}</Text>
          </LinearGradient>

          <LinearGradient
          colors={['#DAE8FC', '#b3cfe7']}
          style={styles.tag}
          >
          <Icon name="apps" size={16} color="#555"/>
          <Text style={styles.tagText}>Organização: {item.cellOrganization}</Text>
          </LinearGradient>

          <LinearGradient
          colors={['#FFF2CC', '#ffddb8']}
          style={styles.tag}
          >
          <Icon name="healing" size={16} color="#555"/>
          <Text style={styles.tagText}>Reprodução: {item.reproduction}</Text>
          </LinearGradient>

          <LinearGradient
          colors={['#E1D5E7', '#d0bed9']}
          style={styles.tag}
          >
          <Icon name="air" size={16} color="#555"/>
          <Text style={styles.tagText}>Respiração: {item.respiration}</Text>
          </LinearGradient>

        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

if (loading) {
  return <Text>Loading...</Text>
}

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise por nome, nutrição, ou tipo celular"
        value={filterText}
        onChangeText={filterAnimalia}
      />
      <FlatList
      data={filteredAnimalia}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
};

export default Animal;
