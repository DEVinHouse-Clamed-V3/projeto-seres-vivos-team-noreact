import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, Alert, ScrollView, View, StyleSheet, Image } from 'react-native';
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


  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {fungiList.map((fungi) => {
          return (
            <View style={styles.fungiStyle} key={fungi.id}>
              {Object.entries(fungi).map(([key, value]) => {

                if (key === 'image') {
                  return (
                    <Image
                      key={key}
                      source={{ uri: value }} // Usando a URL do valor
                      style={{ width: 150, height: 150 }}
                      resizeMode="contain" // Ajusta a imagem para caber no espaço
                    />
                  )
                }

                if (key !== 'id') {
                  return (
                    <Text key={key}>
                      {displayNames[key]}: {value}
                    </Text>
                  );
                }


              })}
            </View>
          )

        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fungiStyle: {
    height: 400,
    width: '100%',
    backgroundColor: 'purple',
    padding: 15,
    marginBottom: 10,
    gap: 2
  },
})



export default Fungos;
