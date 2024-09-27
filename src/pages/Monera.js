import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import styles from "../styles/global";
import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Monera = () => {
  // get -> lista info
  // post -> cadastra nova ino
  // delete -> deleta info
  // put -> atualiza info

  const [moneras, setMoneras] = useState([]);
  const [originalMonera, setOriginalMonera] = useState([]);
  const [filterName, setfilterName] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://192.168.31.86:3000/monera")
  //       const data = response.data
  //       setMoneras(data)
  //     } catch (error) {
  //       console.error({error: 'Error fetching API'})
  //     }
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    axios
      .get("http://192.168.31.86:3000/monera")
      .then((response) => {
        //converte em JS object, sem necessidade utulizar JSON.parse()
        setMoneras(response.data);
        setOriginalMonera(response.data); //saving the original array
      })
      .catch((error) => console.log("Failed to load", error));
  }, []); //inicia uma ve quando os componentes sao montados

  //library axios ja converte para json
  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const storedData = await AsyncStorage.getItem("dataStorage");
  //       if (storedData) {
  //         setMoneras(JSON.parse(storedData));
  //       } else {
  //         const response = await axios.get("http://192.168.31.86:3000/monera");
  //         setMoneras(response.data);
  //         await AsyncStorage.setItem(
  //           "dataStorage",
  //           JSON.stringify(response.data)
  //         );
  //       }
  //     } catch (error) {
  //       console.log("Error loading data", error);
  //     }
  //   };

  //   loadData();
  // }, []);

  useEffect(() => {
    if (filterName === "") {
      setMoneras(originalMonera); //volta ao array original
    } else {
      const filterMonera = originalMonera.filter((monera) =>
        monera.name
          .toLocaleLowerCase()
          .startsWith(filterName.toLocaleLowerCase())
      );
      setMoneras(filterMonera);
    }
  }, [filterName]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela do reino monera</Text>

      <TextInput
        style={styles.searchInput}
        value={filterName}
        onChangeText={setfilterName}
        placeholder="Procure o nome:"
      ></TextInput>

      <ScrollView>
        {moneras.map((monera) => (
          <View style={styles.contentContainer} key={monera.id}>
            <Image
              source={{ uri: monera.image }}
              style={styles.contentImage}
            ></Image>
            <View style={styles.containerText}>
              <Text style={styles.contentName}>{monera.name}</Text>
              <Text style={styles.contentText}> {monera.description} </Text>
              <Text style={styles.contentText}> {monera.nutrition} </Text>
              <Text style={styles.contentText}> {monera.cellType} </Text>
              <Text style={styles.contentText}>{monera.cellOrganization}</Text>
              <Text style={styles.contentText}> {monera.reproduction} </Text>
              <Text style={styles.contentText}> {monera.respiration} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Monera;
