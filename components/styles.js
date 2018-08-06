import React from "react";
import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#a8ff8e"
  },
  navBarTitle: {
    color: "#3f4fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  dropdown: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  containerImage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  noGamesView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  noGamesText: {
    fontSize: 25,
    fontStyle: "italic"
  },
  gameBox: {
    borderColor: "red",
    width: 565,
    height: "70%",
    paddingRight: 100,
    paddingLeft: 100
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%"
  },
  descInput: {
    height: 100,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%"
  },
  item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "#eae6e1",
    backgroundColor: "#eae6e1"
  },
  flatview: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
    width: "100%"
  },
  contentContainer: {
    paddingVertical: 50,
    width: "100%"
  },
  libraryImage: {
    width: 75,
    height: 75
  },
  libraryTitle: {
    fontWeight: "bold",
    color: "blue",
    fontStyle: "italic"
  },
  libraryGenre: {
    color: "purple"
  },
  libraryPlateform: {
    color: "green"
  },
  libraryButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  SectionHeaderStyle: {
    backgroundColor: "#93d4ff",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },
  addImage: {
    width: "100%",
    height: 190,
    marginBottom: 50
  },
  singleImage: {
    width: "100%",
    height: 200
  },
  singleTitle: {
    fontWeight: "bold",
    color: "blue",
    fontStyle: "italic",
    fontSize: 20,
    textAlign: "center"
  },
  singleGenre: {
    color: "purple",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  singleRate: {
    color: "maroon",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  singlePlateform: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  singleDesc: {
    fontStyle: "italic",
    fontSize: 15,
    textAlign: "center"
  },
  singlePageScroll: {
    marginBottom: 100
  },
  singlePrice: {
    color: "maroon",
    paddingTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  homeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  homeBox: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "skyblue",
    justifyContent: "center"
  },
  homeText: {
    textAlign: "center"
  },
  dropdown: {
    width: "100%"
  }
}));
