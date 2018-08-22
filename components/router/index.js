import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Add from "../add-game";
import Edit from "../edit-game";
import Home from "../home";
import Library from "../library";
import Single from "../single-game";
import styles from "../styles";
import Wishlist from "../wishlist";

const Routes = () => (
  <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
    <Stack key="root">
      <Scene key="home" component={Home} title="Game Center" initial={true} />
      <Scene key="library" component={Library} title="Game Library" />
      <Scene key="wishlist" component={Wishlist} title="Game Wishlist" />
      <Scene key="add" component={Add} title="Add Game" />
      <Scene key="edit" component={Edit} title="Edit Game" />
      <Scene key="single" component={Single} title="Title" />
    </Stack>
  </Router>
);
export default Routes;
