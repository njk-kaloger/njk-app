import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Button,
  AsyncStorage,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "../styles";
import SingleGameDisplay from "../single-game-display";
import createLibraryGame from "../shared/utils/create-library-game";

export default class SingleGame extends React.Component {
  //constructor accepts props
  constructor(props) {
    super(props);
    //based on the title of the game passed in you action refresh to change the title of the page accordingly
    Actions.refresh({ title: props.details.title });
  }
  componentDidMount() {
    AsyncStorage.getItem("games").then(ownedGames => {
      this.setState({ collection: JSON.parse(ownedGames) });
    });
  }
  //movement function that accepts the game details and the edit function and passes them to the edit page
  moveToUpdateGame = (details, edit) => {
    Actions.edit({ details: details, edit: edit });
  };

  buyGame = details => {
    const title = details.title;
    const platform = details.platform;
    const genre = details.genre;
    const profileImageURL = details.image;
    const libraryImageURL = details.animatedImage;
    const desc = "Game purchased please edit details";
    const game = createLibraryGame(
      title,
      platform,
      desc,
      genre,
      profileImageURL,
      libraryImageURL
    );

    const array = [game];
    const games = this.state.collection.concat(array);
    console.log(games);
    AsyncStorage.setItem("games", JSON.stringify(games));
    this.props.deleteGame(details.id);
    Alert.alert(game.title + " Successfully Added To Library");
  };

  render() {
    //delcare each game detail
    const {
      title,
      platform,
      image,
      desc,
      price,
      completionRate,
      genre,
      id,
      animatedImage
    } = this.props.details;
    //delcare type as empty string
    let type = "";
    let addGame = "";
    //set the edit button message to contain the title
    let edit = "Edit Details of " + title;
    //check which component needs to be mounted
    if (this.props.componentID === "wishlist") {
      //change the type to reflect the title and the component
      type = "Remove " + title + " From Wishlist";
      addGame = "Add " + title + " to Library";
    } else if (this.props.componentID === "library") {
      //change the type to reflect the title and the component
      type = "Remove " + title + " From Library";
    }
    const addButton = (
      <Button
        width="100%"
        color="green"
        title={addGame}
        onPress={() => this.buyGame(this.props.details)}
      />
    );
    return (
      <View>
        <SingleGameDisplay
          id={this.props.componentID}
          details={this.props.details}
        />
        {this.props.componentID === "wishlist" ? addButton : ""}
        <Button
          width="100%"
          color="purple"
          title={edit}
          onPress={() =>
            this.moveToUpdateGame(this.props.details, this.props.updateGame)
          }
        />
        <Button
          width="100%"
          color="red"
          title={type}
          onPress={() => this.props.deleteGame(id)}
        />
      </View>
    );
  }
}
