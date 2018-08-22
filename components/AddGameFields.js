import React from "react";
import { Text, View, TextInput, Button, Image, ScrollView } from "react-native";
import styles from "./styles";

export default class AddGameFields extends React.Component {
  addGame = () => {
    if (this.props.id === "library") {
      this.props.register(
        this.state.titleInput,
        this.state.platformInput,
        this.state.descInput,
        this.state.genreInput,
        this.state.libraryImageURL,
        this.state.profileImageURL
      );
    } else if (this.props.id === "wishlist") {
      this.props.register(
        this.state.titleInput,
        this.state.platformInput,
        this.state.priceInput,
        this.state.genreInput,
        this.state.libraryImageURL,
        this.state.profileImageURL
      );
    }
  };

  render() {
    //create the wishlist component's key inputs
    const wishlist = (
      <TextInput
        keyboardAppearance="dark"
        onChangeText={text => this.setState({ priceInput: text })}
        style={styles.textInput}
        placeholder="Price"
        returnKeyType="done"
        returnKeyLabel="done"
      />
    );

    //create the library component's key inputs
    const library = (
      <TextInput
        keyboardAppearance="dark"
        onChangeText={text => this.setState({ descInput: text })}
        style={styles.descInput}
        placeholder="Game Description"
        returnKeyType="done"
        returnKeyLabel="done"
      />
    );

    //return the component conditionally based on the state
    return (
      <View style={styles.container}>
        <Image
          style={styles.addImage}
          source={{
            uri:
              "http://www.thebluediamondgallery.com/wooden-tile/images/game.jpg"
          }}
        />
        <ScrollView>
          <TextInput
            keyboardAppearance="dark"
            onChangeText={text => this.setState({ titleInput: text })}
            style={styles.textInput}
            placeholder="Game Title"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          <TextInput
            keyboardAppearance="dark"
            onChangeText={text => this.setState({ platformInput: text })}
            style={styles.textInput}
            placeholder="Game Platform"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          <TextInput
            keyboardAppearance="dark"
            onChangeText={text => this.setState({ genreInput: text })}
            style={styles.textInput}
            placeholder="Game Genre"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          <TextInput
            keyboardAppearance="dark"
            onChangeText={text => this.setState({ libraryImageURL: text })}
            style={styles.textInput}
            placeholder="Library Image URL"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          <TextInput
            keyboardAppearance="dark"
            onChangeText={text => this.setState({ profileImageURL: text })}
            style={styles.textInput}
            placeholder="Profile Image URL"
            returnKeyType="done"
            returnKeyLabel="done"
          />
          {this.props.id === "library" ? library : wishlist}

          <Button title="Register" onPress={this.addGame} />
        </ScrollView>
      </View>
    );
  }
}
