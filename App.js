import React from "react";
import {StyleSheet, View, Text} from "react-native";
import AppRouter from "./AppRouter";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppRouter {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
/*
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
* */
