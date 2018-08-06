import React from "react";
import { Text, View, TextInput, Button, Image, Picker } from "react-native";
import styles from "./styles";
import { Dropdown } from "react-native-material-dropdown";

export default class EditGame extends React.Component {
  render() {
    //get the keys as an array from the game details passed down in props
    const keys = Object.keys(this.props.details);
    //declare an empty array for the dropdown data
    let data = [];
    //push each of the keys except the initial id as users can't edit the id
    for (let i = 1; i < keys.length; i++) {
      data.push({ value: keys[i] });
    }
    return (
      <View>
        <Dropdown
          onChangeText={text => this.setState({ itemUpdated: text })}
          label="Pick Field to Edit"
          data={data}
        />
        <TextInput
          keyboardAppearance="dark"
          onChangeText={text => this.setState({ updatedInput: text })}
          style={styles.textInput}
          placeholder="Update Field"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <Button
          title="Update"
          onPress={() =>
            this.props.edit(
              this.props.details.id,
              this.state.updatedInput,
              this.state.itemUpdated
            )
          }
        />
      </View>
    );
  }
}
