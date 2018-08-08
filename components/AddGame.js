import React from "react";
import { Text, View, TextInput, Button, Image } from "react-native";
import styles from "./styles";

export default class AddGame extends React.Component {
  //set the default state
  state = {
    isLibrary: false,
    isWishlist: false
  };
  //when the component mounts check which component is being mounted by its id
  componentDidMount() {
    if (this.props.componentID === "library") {
      this.setState({
        isLibrary: true,
        isWishlist: false
      });
    } else if (this.props.componentID === "wishlist") {
      this.setState({
        isLibrary: false,
        isWishlist: true
      });
    }
  }
  render() {
    //create the library component
    const library = (
      <View style={styles.container}>
        <Image
          style={styles.addImage}
          source={{
            uri:
              "http://www.thebluediamondgallery.com/wooden-tile/images/game.jpg"
          }}
        />
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
        <TextInput
          keyboardAppearance="dark"
          onChangeText={text => this.setState({ descInput: text })}
          style={styles.descInput}
          placeholder="Game Description"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <Button
          title="Register"
          onPress={() =>
            this.props.registerGame(
              this.state.titleInput,
              this.state.platformInput,
              this.state.descInput,
              this.state.genreInput,
              this.state.libraryImageURL,
              this.state.profileImageURL
            )
          }
        />
      </View>
    );
    //create the wishlist component
    const wishlist = (
      <View style={styles.container}>
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
        <TextInput
          keyboardAppearance="dark"
          onChangeText={text => this.setState({ priceInput: text })}
          style={styles.textInput}
          placeholder="Price"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <Button
          title="Register"
          onPress={() =>
            this.props.registerGame(
              this.state.titleInput,
              this.state.platformInput,
              this.state.priceInput,
              this.state.genreInput,
              this.state.libraryImageURL,
              this.state.profileImageURL
            )
          }
        />
      </View>
    );
    //return the component conditionally based on the state
    return this.state.isLibrary
      ? library
      : this.state.isWishlist
        ? wishlist
        : "No Games";
  }
}
