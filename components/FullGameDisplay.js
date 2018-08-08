import React from "react";
import styles from "./styles";

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

export default class SingleGame extends React.Component {
  //constructor accepts props
  constructor(props) {
    super(props);
  }

  render() {
    let text;

    return (
      <ScrollView contentContainerStyle={styles.singlePageScroll}>
        <FlatList
          contentContainerStyle={styles.flatview}
          keyExtractor={this.props.listKey}
          data={this.props.data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.movement(item.id)}>
              <Text style={styles.libraryTitle}> {item.title} </Text>
              <View style={styles.item}>
                <Image
                  style={styles.libraryImage}
                  source={{ uri: item.image }}
                />

                <Text style={styles.libraryPlatform}> {item.platform} </Text>
                <Text style={styles.libraryGenre}> {item.genre} </Text>
                {this.props.id === "wishlist" ? (
                  <Text style={styles.libraryPrice}>${item.price}</Text>
                ) : (
                  <Text style={styles.libraryRate}>{item.completionRate}%</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }
}
