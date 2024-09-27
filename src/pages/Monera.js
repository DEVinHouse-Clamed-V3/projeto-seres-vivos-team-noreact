import React from "react";
import { Text, SafeAreaView, View, ScrollView, Image } from "react-native";
import styles from "../styles/global";
import { useState, useEffect } from "react";
import axios from "axios";

const Monera = () => {
  // get -> lista info
  // post -> cadastra nova ino
  // delete -> deleta info
  // put -> atualiza info

  const [moneras, setMoneras] = useState([]);

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
        setMoneras(response.data);
      })
      .catch(
        (error) => console.log("Error", error)
        // Alert.alert("Nao deu certo.")
      );
  }, []); //dispara uma unica vez

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tela do reino monera</Text>

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
              <Text style={styles.contentText}>
                {" "}
                {monera.cellOrganization}{" "}
              </Text>
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
