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
import imageSearch from "react-native-google-image-search";
import { Actions } from "react-native-router-flux";
import { Dropdown } from "react-native-material-dropdown";

import createLibraryGame from "../shared/utils/create-library-game";
import generateEditMessage from "../shared/utils/generate-edit-message";
import generateDeleteMessage from "../shared/utils/generate-delete-message";
import GameDisplay from "../game-display";
import styles from "../styles";

export default class App extends React.Component {
  state = {
    games: [],
    wish: [],
    isEmpty: true,
    isStored: false,
    orderReversed: false,
    currentSort: ""
  };

  constructor() {
    super();
  }

  componentDidMount() {
    AsyncStorage.getItem("games").then(games => {
      if (games !== null) {
        if (games.length === 2) {
          this.setState({ isEmpty: true });
        }
        if (games.length > 2) {
          this.setState({ games: JSON.parse(games), isEmpty: false });
        }
      }
    });
    AsyncStorage.getItem("wishlist").then(wishGames => {
      if (wishGames !== null) {
        this.setState({ wish: JSON.parse(wishGames) });
      }
    });
  }

  addGame = game => {
    for (let i = 0; i < this.state.games.length; i++) {
      if (game.id === this.state.games[i].id) {
        Alert.alert("You Already Own " + game.title + " on " + game.platform);
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
        const message = generateEditMessage(games[i].title, games[i].platform);
        games[i][itemUpdated] = updatedInput;

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
        const message = generateDeleteMessage(
          games[i].title,
          games[i].platform,
          "Library"
        );
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
    platformInput,
    descInput,
    genreInput,
    profileImageURL,
    libraryImageURL
  ) => {
    const game = createLibraryGame(
      titleInput,
      platformInput,
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

  comparePlatform = (a, b) => {
    if (this.state.orderReversed === false) {
      if (a.platform < b.platform) return -1;
      if (a.platform > b.platform) return 1;
      return 0;
    } else {
      if (a.platform > b.platform) return -1;
      if (a.platform < b.platform) return 1;
      return 0;
    }
  };

  sortByPlatform = () => {
    const games = [...this.state.games];
    games.sort(this.comparePlatform);
    this.setState({ games, currentSort: "platform" });
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
    this.setState({ games, currentSort: "genre" });
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
    this.setState({ games, currentSort: "title" });
  };

  compareCompletion = (a, b) => {
    if (this.state.orderReversed === false) {
      return parseFloat(b.completionRate) - parseFloat(a.completionRate);
    } else {
      return parseFloat(a.completionRate) - parseFloat(b.completionRate);
    }
  };

  sortByCompletion = () => {
    const games = [...this.state.games];
    games.sort(this.compareCompletion);
    this.setState({ games, currentSort: "completion" });
  };

  checkSort = () => {
    switch (this.state.currentSort) {
      case "title":
        this.sortByTitle();
        break;
      case "genre":
        this.sortByGenre();
        break;
      case "platform":
        this.sortByPlatform();
        break;
      case "completion":
        this.sortByCompletion();
        break;
      default:
        break;
    }
  };

  toggleSwitch = value => {
    this.setState({ orderReversed: value });
    this.checkSort();
  };

  filterPlatforms = text => {
    this.setState({ filter: text });
    const games = [...this.state.games];
    let filterGames = [];
    for (let i = 0; i < games.length; i++) {
      if (this.state.filter === "All") {
        AsyncStorage.getItem("games").then(games => {
          this.setState({ games: JSON.parse(games) });
        });
        return;
      } else if (this.state.filter === games[i].platform) {
        filterGames.push(games[i]);
      }
    }
    this.setState({ games: filterGames });
    return;
  };

  render() {
    //declare an empty array for the dropdown data
    const data = [{ value: "All" }];
    let platforms = [];
    for (let i = 0; i < this.state.games.length; i++) {
      platforms.push(this.state.games[i].platform);
    }
    platforms = Array.from(new Set(platforms));
    for (let i = 0; i < platforms.length; i++) {
      data.push({ value: platforms[i] });
    }

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
            title="Platform"
            onPress={this.sortByPlatform}
          />
          <Button color="purple" title="Genre" onPress={this.sortByGenre} />
          <Button
            color="black"
            title="Completion"
            onPress={this.sortByCompletion}
          />
        </View>
        <View style={styles.dropdown}>
          <Dropdown
            onChangeText={text => this.filterPlatforms(text)}
            label="Filter Platforms"
            data={data}
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
