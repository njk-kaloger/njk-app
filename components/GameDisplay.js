import React from "react";
import styles from "./styles";
import FullGameDisplay from "./FullGameDisplay";
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
    let listKey = this._keyExtractor;
    //set empty string as the default type
    let type = "";
    //check which game display is needed (wishlist or library) by the id passed in
    if (this.props.componentID === "wishlist") {
      //set the type to wishlist
      type = "Wishlist";
      //check if it is a library component
    } else if (this.props.componentID === "library") {
      //set type to library
      type = "Library";
    }
    const display = (
      <FullGameDisplay
        id={this.props.componentID}
        data={this.props.collection}
        listKey={listKey}
        movement={this.moveToTitle}
      />
    );
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
