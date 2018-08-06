import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Actions } from "react-native-router-flux";

export default class Home extends React.Component {
  moveToLibrary = () => {
    Actions.library();
  };

  moveToWishlist = () => {
    Actions.wishlist();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeRow}>
          <TouchableOpacity onPress={this.moveToLibrary}>
            <View style={styles.homeBox}>
              <Text style={styles.homeText}>Game Library</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.homeBox}>
            <Text style={styles.homeText}>Library Analytics</Text>
          </View>
        </View>
        <View style={styles.homeRow}>
          <TouchableOpacity onPress={this.moveToWishlist}>
            <View style={styles.homeBox}>
              <Text style={styles.homeText}>Wishlist</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.homeBox}>
            <Text style={styles.homeText}>Place Four</Text>
          </View>
        </View>
      </View>
    );
  }
}
