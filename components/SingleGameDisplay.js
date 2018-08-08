import React from "react";
import styles from "./styles";

import { Text, View, FlatList, Image, ScrollView, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class SingleGame extends React.Component {
  //constructor accepts props
  constructor(props) {
    super(props);
  }

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
    let text;
    if (this.props.id === "wishlist") {
      text = <Text style={styles.singlePrice}>${price}</Text>;
    } else if (this.props.id === "library") {
      text = (
        <Text>
          <Text style={styles.singleRate}>{completionRate}%</Text>
          {"\n"}
          <Text style={styles.singleDesc}>{desc} </Text>
        </Text>
      );
    }
    return (
      <ScrollView contentContainerStyle={styles.singlePageScroll}>
        <Image style={styles.singleImage} source={{ uri: animatedImage }} />
        <Text style={styles.singleTitle}>{title} </Text>
        <Text style={styles.singlePlatform}>{platform}</Text>
        <Text style={styles.singleGenre}>{genre} </Text>
        {text}
      </ScrollView>
    );
  }
}
