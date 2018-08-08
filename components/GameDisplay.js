import React from "react";
import styles from "./styles";
//named imports
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SectionList,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class GameDisplay extends React.Component {
  //constructor that checks at the beginning if the component should contain games
  constructor(props) {
    super(props);
    if (props.containsGames === false) {
      return;
    }
  }
  //movement function that accepts the game id
  moveToTitle = id => {
    //identifies the single game from the id passed in
    for (let i = 0; i < this.props.collection.length; i++) {
      if (id === this.props.collection[i].id) {
        game = this.props.collection[i];
      }
    }
    //action to open up the single title page, and pass in the corresponding data
    Actions.single({
      details: game,
      deleteGame: this.props.deleteGame.bind(this),
      updateGame: this.props.editGame.bind(this),
      componentID: this.props.componentID
    });
  };
  //key extractor used to create a key for each list item
  _keyExtractor = (item, index) => item.id;

  render() {
    //set empty string as the default type
    let type = "";
    //delcare display
    let display;
    //check which game display is needed (wishlist or library) by the id passed in
    if (this.props.componentID === "wishlist") {
      //set the type to wishlist
      type = "Wishlist";
      //create the display for the wishlist
      display = (
        <ScrollView contentContainerStyle={styles.singlePageScroll}>
          <FlatList
            contentContainerStyle={styles.flatview}
            keyExtractor={this._keyExtractor}
            data={this.props.collection}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.moveToTitle(item.id)}>
                <Text style={styles.libraryTitle}> {item.title} </Text>
                <View style={styles.item}>
                  <Image
                    style={styles.libraryImage}
                    source={{ uri: item.image }}
                  />

                  <Text style={styles.libraryPlatform}> {item.platform} </Text>
                  <Text style={styles.libraryGenre}> {item.genre} </Text>
                  <Text style={styles.libraryPrice}>${item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      );
      //check if it is a library component
    } else if (this.props.componentID === "library") {
      //set type to library
      type = "Library";
      //create library display
      display = (
        <ScrollView contentContainerStyle={styles.singlePageScroll}>
          <FlatList
            contentContainerStyle={styles.flatview}
            keyExtractor={this._keyExtractor}
            data={this.props.collection}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.moveToTitle(item.id)}>
                <Text style={styles.libraryTitle}> {item.title} </Text>
                <View style={styles.item}>
                  <Image
                    style={styles.libraryImage}
                    source={{ uri: item.image }}
                  />

                  <Text style={styles.libraryPlatform}> {item.platform} </Text>
                  <Text style={styles.libraryGenre}> {item.genre} </Text>
                  <Text style={styles.libraryCompletion}>
                    {item.completionRate}%
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      );
    }
    //create the display if there are no games
    const noGames = (
      <View style={styles.noGamesView}>
        <Text style={styles.noGamesText}>No Games In Current {type}</Text>
      </View>
    );
    //return a conditional componenet based on whether or not it contains games.
    return this.props.containsGames ? display : noGames;
  }
}
