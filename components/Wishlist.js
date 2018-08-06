import React from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  Alert,
  Switch,
  AsyncStorage
} from "react-native";
import GameDisplay from "./GameDisplay";
import styles from "./styles";
import imageSearch from "react-native-google-image-search";

import { Actions } from "react-native-router-flux";
import { createWishlistGame } from "./functions";

export default class App extends React.Component {
  state = {
    wishlist: [],
    collection: [],
    isEmpty: true,
    isStored: false,
    orderReversed: false
  };

  componentDidMount() {
    AsyncStorage.getItem("wishlist").then(games => {
      if (games.length === 2) {
        this.setState({ isEmpty: true });
      }
      if (!(games === null) && games.length > 2) {
        this.setState({ wishlist: JSON.parse(games), isEmpty: false });
      }
    });
    AsyncStorage.getItem("games").then(ownedGames => {
      this.setState({ collection: JSON.parse(ownedGames) });
    });
  }

  addGame = game => {
    for (let i = 0; i < this.state.wishlist.length; i++) {
      if (game.id === this.state.wishlist[i].id) {
        Alert.alert(
          "You Have " +
            game.title +
            " on " +
            game.plateform +
            " in your wishlist"
        );
        return;
      }
    }

    for (let i = 0; i < this.state.collection.length; i++) {
      if (game.id === this.state.collection[i].id) {
        Alert.alert("You Already Own " + game.title + " on " + game.plateform);
        return;
      }
    }

    // 1. Take a copy of the existing state
    const array = [game];
    const wishlist = this.state.wishlist.concat(array);

    // 3. Set the new wishlist object to state
    this.setState({ wishlist });
    this.setState({ isEmpty: false });
    AsyncStorage.setItem("wishlist", JSON.stringify(wishlist));
    this.setState({ isStored: true });
    Alert.alert(game.title + " Successfully Added To Wishlist");
  };

  editGame = (id, updatedInput, itemUpdated) => {
    const wishlist = [...this.state.wishlist];
    for (let i = 0; i < wishlist.length; i++) {
      if (id === wishlist[i].id) {
        let message =
          wishlist[i].title +
          " on " +
          wishlist[i].plateform +
          " Successfully Updated";

        switch (itemUpdated) {
          case "image":
            wishlist[i].image = updatedInput;
            break;
          case "animatedImage":
            wishlist[i].animatedImage = updatedInput;
            break;
          case "title":
            wishlist[i].title = updatedInput;
            break;
          case "genre":
            wishlist[i].genre = updatedInput;
            break;
          case "plateform":
            wishlist[i].plateform = updatedInput;
            break;
          case "price":
            wishlist[i].price = updatedInput;
            break;
          default:
            break;
        }

        this.setState({ wishlist });
        AsyncStorage.setItem("wishlist", JSON.stringify(wishlist));
        this.setState({ isStored: true });
        Alert.alert(message);
        Actions.pop();
        Actions.pop();
      }
    }
  };

  deleteGame = gameID => {
    const wishlist = [...this.state.wishlist];
    for (let i = 0; i < wishlist.length; i++) {
      if (gameID === wishlist[i].id) {
        let message =
          wishlist[i].title +
          " on " +
          wishlist[i].plateform +
          " Successfully Removed From Wishlist";
        wishlist.splice(i, 1);
        this.setState({ wishlist });
        AsyncStorage.setItem("wishlist", JSON.stringify(wishlist));
        this.setState({ isStored: true });
        Alert.alert(message);

        Actions.pop();
      }
    }
  };

  registerGame = (
    titleInput,
    plateformInput,
    priceInput,
    genreInput,
    profileImageURL,
    libraryImageURL
  ) => {
    const game = createWishlistGame(
      titleInput,
      plateformInput,
      priceInput,
      genreInput,
      profileImageURL,
      libraryImageURL
    );
    this.addGame(game);
    Actions.pop();
  };

  goToAddGame = () => {
    Actions.add({
      registerGame: this.registerGame.bind(this),
      componentID: "wishlist"
    });
  };

  comparePlateform = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.plateform < b.plateform) return -1;
      if (a.plateform > b.plateform) return 1;
      return 0;
    } else {
      if (a.plateform > b.plateform) return -1;
      if (a.plateform < b.plateform) return 1;
      return 0;
    }
  };

  sortByPlateform = () => {
    const wishlist = [...this.state.wishlist];
    wishlist.sort(this.comparePlateform);
    this.setState({ wishlist });
  };

  compareGenre = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.genre < b.genre) return -1;
      if (a.genre > b.genre) return 1;
      return 0;
    } else {
      if (a.genre > b.genre) return -1;
      if (a.genre < b.genre) return 1;
      return 0;
    }
  };

  sortByGenre = () => {
    const wishlist = [...this.state.wishlist];
    wishlist.sort(this.compareGenre);
    this.setState({ wishlist });
  };

  compareTitle = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    } else {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
      return 0;
    }
  };

  sortByPrice = () => {
    const wishlist = [...this.state.wishlist];
    wishlist.sort(this.comparePrice);
    this.setState({ wishlist });
  };

  comparePrice = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    } else {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    }
  };

  sortByTitle = () => {
    const wishlist = [...this.state.wishlist];
    wishlist.sort(this.compareTitle);
    this.setState({ wishlist });
  };

  toggleSwitch = value => {
    this.setState({ orderReversed: value });
  };

  render() {
    const display = (
      <GameDisplay
        componentID="wishlist"
        containsGames={true}
        deleteGame={this.deleteGame}
        editGame={this.editGame}
        collection={this.state.wishlist}
      />
    );
    const noGames = (
      <GameDisplay componentID="wishlist" containsGames={false} />
    );
    return (
      <View style={styles.container}>
        <View style={styles.libraryButtons}>
          <Text>Reverse Order Of Sort: </Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.orderReversed}
          />
        </View>
        <View style={styles.libraryButtons}>
          <Text>Sort By: </Text>
          <Button color="blue" title="Title" onPress={this.sortByTitle} />
          <Button
            color="green"
            title="Plateform"
            onPress={this.sortByPlateform}
          />
          <Button color="purple" title="Genre" onPress={this.sortByGenre} />
          <Button color="maroon" title="Price" onPress={this.sortByPrice} />
        </View>
        <View style={styles.gameBox}>
          {this.state.isEmpty ? noGames : display}
        </View>
        <View style={styles.libraryButtons}>
          <Button
            color="green"
            title="Add New Game"
            onPress={this.goToAddGame}
          />
        </View>
      </View>
    );
  }
}
