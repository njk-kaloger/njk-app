import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

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
    width: width
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
    width: width,
    height: height / 2
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: width
  },
  descInput: {
    height: 100,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: width
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
    width: width
  },
  contentContainer: {
    paddingVertical: 50,
    width: width
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
  libraryPlatform: {
    color: "green"
  },
  libraryButtons: {
    width: width / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  SectionHeaderStyle: {
    backgroundColor: "#93d4ff",
    fontSize: 20,
    color: "#fff"
  },
  addImage: {
    width: width,
    height: height / 3.5
  },
  singleImage: {
    width: width,
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
  singlePlatform: {
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
    width: width
  }
}));
