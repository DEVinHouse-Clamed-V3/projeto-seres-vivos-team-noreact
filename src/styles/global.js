import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
    backgroundColor: "#EFEFEF",
  },
  contentImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginVertical: 15,
    justifyContent: "center",
  },
  contentContainer: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginTop: 20,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  containerText: {
    alignItems: "flex-start",
    width: "100%",
    paddingStart: 5,
    alignItems: "flex-start",
  },
  contentName: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 19,
  },
  contentText: {
    fontSize: 16,
  },
});
