import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
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
      <ImageBackground
        source={{
          uri:
            "https://cdn.images.dailystar.co.uk/dynamic/184/photos/675000/620x/PS4-Xbox-One-and-Nintendo-Switch-got-some-BIG-news-this-week-that-s-great-for-future-games-659267.jpg"
        }}
        style={styles.containerImage}
      >
        <View style={styles.homeRow}>
          <TouchableOpacity onPress={this.moveToLibrary}>
            <View style={styles.homeBox}>
              <Text style={styles.homeText}>Game Library</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.moveToWishlist}>
            <View style={styles.homeBox}>
              <Text style={styles.homeText}>Wishlist</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.homeRow}>
          <View style={styles.homeBox}>
            <Text style={styles.homeText}>Library Analytics</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
