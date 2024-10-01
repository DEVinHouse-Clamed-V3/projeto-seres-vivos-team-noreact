import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, Alert, ScrollView, View, StyleSheet, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';

const Fungos = () => {

  const [fungiList, setFungiList] = useState([]);

  const displayNames = {
    name: 'Nome',
    description: 'Descrição',
    nutrition: 'Alimentação',
    cellType: 'Tipo celular',
    cellOrganization: 'Organização celular',
    reproduction: 'Reprodução',
    respiration: 'Respiração',
  };

  useEffect(() => {
    axios
      .get('http://192.168.0.156:3000/fungos')
      .then((response) => {
        setFungiList(response.data);
      })
      .catch(() => {
        Alert.alert('Não foi possível obter os dados do reino fungi')
      })

  }, []);


  const renderItem = ({ item }) => (
    <View style={globalStyles.cardFunghi}>
      {/* Exibindo a imagem */}
      <Image
        source= {{ uri: item.image }}
        style={globalStyles.image}
        // resizeMode="contain"
      />
      
      

      <View style={globalStyles.descriptionContainer}>
        <Text style={[globalStyles.textBold, , globalStyles.title]}>
          {item.name}
        </Text>
        <Text style={globalStyles.subtitle}>
          {item.description}
        </Text>

        <View style={globalStyles.displayRow}>
          <Text style={globalStyles.textBold}>{displayNames.nutrition}: </Text><Text>{item.nutrition}</Text> 
        </View>

        <View style={globalStyles.displayRow}>
          <Text style={globalStyles.textBold}>{displayNames.cellType}: </Text><Text>{item.cellType}</Text>
        </View>

        <View style={globalStyles.displayRow}>
          <Text style={globalStyles.textBold}>{displayNames.cellOrganization}: </Text><Text>{item.cellOrganization}</Text>
        </View>

        <View style={globalStyles.displayRow}>
          <Text style={globalStyles.textBold}>{displayNames.reproduction}: </Text><Text>{item.reproduction}</Text>
        </View>

        <View style={globalStyles.displayRow}>
          <Text style={globalStyles.textBold}>{displayNames.respiration}: </Text><Text>{item.respiration}</Text>
        </View>
      </View>


    </View>
    
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={fungiList} // Sua lista de dados
        keyExtractor={item => item.id.toString()} // Convertendo id para string
        renderItem={renderItem} // Chamando a função para renderizar cada item
      />
    </SafeAreaView>
  );
};
 


export default Fungos;
