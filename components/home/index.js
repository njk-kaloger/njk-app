import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "../styles";

moveToLibrary = () => {
  Actions.library();
};

moveToWishlist = () => {
  Actions.wishlist();
};

export default (Home = () => (
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
        <View style={[styles.homeBox, { backgroundColor: "yellow" }]}>
          <Text style={styles.homeText}>Wishlist</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.homeRow}>
      <View style={[styles.homeBox, { backgroundColor: "red" }]}>
        <Text style={styles.homeText}>Library Analytics</Text>
      </View>
      <View style={[styles.homeBox, { backgroundColor: "green" }]}>
        <Text style={styles.homeText}>Friends List</Text>
      </View>
    </View>
  </ImageBackground>
));
