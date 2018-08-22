import React from "react";
import { Text, View, TextInput, Button, Image } from "react-native";

import styles from "../styles";
import AddGameFields from "../add-game-fields";

export default class AddGame extends React.Component {
  render() {
    //return the component conditionally based on the state
    return (
      <AddGameFields
        id={this.props.componentID}
        register={this.props.registerGame}
      />
    );
  }
}
