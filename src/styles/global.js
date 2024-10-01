import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  cardFunghi: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    textAlign: "left",
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 15,
    marginBottom: 15
  },
  textBold: {
    fontWeight: 'bold',
  },
  title:{
    fontSize: 22,
    paddingBottom: 10
  },
  descriptionContainer: {
    textAlign: "left",
    width: 350,
  },
  displayRow: {
    flexDirection: 'row',
    paddingBottom: 1
  },
  subtitle: {
    paddingBottom: 6,
    fontSize: 16
  }


});