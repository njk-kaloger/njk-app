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
import { createLibraryGame } from "./functions";

export default class App extends React.Component {
  state = {
    games: [],
    wish: [],
    isEmpty: true,
    isStored: false,
    orderReversed: false
  };

  constructor() {
    super();
  }

  componentDidMount() {
    AsyncStorage.getItem("games").then(games => {
      if (games.length === 2) {
        this.setState({ isEmpty: true });
      }
      if (!(games === null) && games.length > 2) {
        this.setState({ games: JSON.parse(games), isEmpty: false });
      }
    });
    AsyncStorage.getItem("wishlist").then(wishGames => {
      this.setState({ wish: JSON.parse(wishGames) });
    });
  }

  addGame = game => {
    for (let i = 0; i < this.state.games.length; i++) {
      if (game.id === this.state.games[i].id) {
        Alert.alert("You Already Own " + game.title + " on " + game.plateform);
        return;
      }
    }

    const wantedGames = [...this.state.wish];
    for (let i = 0; i < wantedGames.length; i++) {
      if (game.id === wantedGames[i].id) {
        wantedGames.splice(i, 1);
        this.setState({ wish: wantedGames });
        AsyncStorage.setItem("wishlist", JSON.stringify(wantedGames));
      }
    }

    // 1. Take a copy of the existing state
    const array = [game];
    const games = this.state.games.concat(array);

    // 3. Set the new games object to state
    this.setState({ games });
    this.setState({ isEmpty: false });
    AsyncStorage.setItem("games", JSON.stringify(games));
    this.setState({ isStored: true });
    Alert.alert(game.title + " Successfully Added To Library");
  };

  editGame = (id, updatedInput, itemUpdated) => {
    const games = [...this.state.games];
    for (let i = 0; i < games.length; i++) {
      if (id === games[i].id) {
        let message =
          games[i].title +
          " on " +
          games[i].plateform +
          " Successfully Updated";

        switch (itemUpdated) {
          case "image":
            games[i].image = updatedInput;
            break;
          case "animatedImage":
            games[i].animatedImage = updatedInput;
            break;
          case "title":
            games[i].title = updatedInput;
            break;
          case "genre":
            games[i].genre = updatedInput;
            break;
          case "plateform":
            games[i].plateform = updatedInput;
            break;
          case "desc":
            games[i].desc = updatedInput;
            break;
          case "completetionRate":
            games[i].completetionRate = updatedInput;
            break;
          default:
            break;
        }

        this.setState({ games });
        AsyncStorage.setItem("games", JSON.stringify(games));
        this.setState({ isStored: true });
        Alert.alert(message);
        Actions.pop();
        Actions.pop();
      }
    }
  };

  deleteGame = gameID => {
    const games = [...this.state.games];
    for (let i = 0; i < games.length; i++) {
      if (gameID === games[i].id) {
        let message =
          games[i].title +
          " on " +
          games[i].plateform +
          " Successfully Removed From Library";
        games.splice(i, 1);
        this.setState({ games });
        AsyncStorage.setItem("games", JSON.stringify(games));
        this.setState({ isStored: true });
        Alert.alert(message);

        Actions.pop();
      }
    }
  };

  registerGame = (
    titleInput,
    plateformInput,
    descInput,
    genreInput,
    profileImageURL,
    libraryImageURL
  ) => {
    const game = createLibraryGame(
      titleInput,
      plateformInput,
      descInput,
      genreInput,
      profileImageURL,
      libraryImageURL
    );
    this.addGame(game);
    Actions.pop();
  };

  //sampleGame = () => {<Button color="grey" title="Sample Display"onPress={this.sampleGame}/>
  //this.setState({ games: sampleGames });
  //AsyncStorage.setItem("games", JSON.stringify(sampleGames));
  //this.setState({ isEmpty: false });
  //this.setState({ isStored: true });
  //};

  goToAddGame = () => {
    Actions.add({
      registerGame: this.registerGame.bind(this),
      componentID: "library"
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
    const games = [...this.state.games];
    games.sort(this.comparePlateform);
    this.setState({ games });
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
    const games = [...this.state.games];
    games.sort(this.compareGenre);
    this.setState({ games });
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

  sortByTitle = () => {
    const games = [...this.state.games];
    games.sort(this.compareTitle);
    this.setState({ games });
  };

  compareCompletion = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.completetionRate < b.completetionRate) return -1;
      if (a.completetionRate > b.completetionRate) return 1;
      return 0;
    } else {
      if (a.completetionRate > b.completetionRate) return -1;
      if (a.completetionRate < b.completetionRate) return 1;
      return 0;
    }
  };

  sortByCompletion = () => {
    const games = [...this.state.games];
    games.sort(this.compareCompletion);
    this.setState({ games });
  };

  toggleSwitch = value => {
    this.setState({ orderReversed: value });
  };

  render() {
    const display = (
      <GameDisplay
        componentID="library"
        containsGames={true}
        deleteGame={this.deleteGame}
        editGame={this.editGame}
        collection={this.state.games}
      />
    );
    const noGames = <GameDisplay componentID="library" containsGames={false} />;
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
          <Button
            color="black"
            title="Completion"
            onPress={this.sortByCompletion}
          />
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
