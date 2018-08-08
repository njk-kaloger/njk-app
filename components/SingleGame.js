import React from "react";
import styles from "./styles";
import SingleGameDisplay from "./SingleGameDisplay";

import { Text, View, FlatList, Image, ScrollView, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class SingleGame extends React.Component {
  //constructor accepts props
  constructor(props) {
    super(props);
    //based on the title of the game passed in you action refresh to change the title of the page accordingly
    Actions.refresh({ title: props.details.title });
  }
  //movement function that accepts the game details and the edit function and passes them to the edit page
  moveToUpdateGame = (details, edit) => {
    Actions.edit({ details: details, edit: edit });
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
    //set the edit button message to contain the title
    let edit = "Edit Details of " + title;
    //check which component needs to be mounted
    if (this.props.componentID === "wishlist") {
      //change the type to reflect the title and the component
      type = "Remove " + title + " From Wishlist";
    } else if (this.props.componentID === "library") {
      //change the type to reflect the title and the component
      type = "Remove " + title + " From Library";
    }
    return (
      <View>
        <SingleGameDisplay
          id={this.props.componentID}
          details={this.props.details}
        />
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
