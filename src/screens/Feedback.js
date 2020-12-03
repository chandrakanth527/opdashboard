import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HeaderX from "../components/HeaderX";

function Feedback(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX button="Settings" style={styles.headerX}></HeaderX>
      <View style={styles.body}>
        <View style={styles.upper}>
          <View style={styles.visualisation}>
            <View style={styles.rect}></View>
          </View>
          <View style={styles.visualisationFiller}></View>
          <View style={styles.status}>
            <View style={styles.rect2}></View>
          </View>
        </View>
        <View style={styles.upperFiller}></View>
        <View style={styles.bottom}>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body: {
    flex: 1,
    marginBottom: 1
  },
  upper: {
    height: 354,
    backgroundColor: "rgba(13,13,13,1)"
  },
  visualisation: {
    width: 237,
    height: 237,
    marginTop: 25,
    alignSelf: "center"
  },
  rect: {
    width: 237,
    height: 237,
    backgroundColor: "#E6E6E6"
  },
  visualisationFiller: {
    flex: 1
  },
  status: {
    height: 89
  },
  rect2: {
    width: 325,
    height: 46,
    backgroundColor: "#E6E6E6",
    marginTop: 21,
    alignSelf: "center"
  },
  upperFiller: {
    flex: 1
  },
  bottom: {
    height: 304,
    backgroundColor: "rgba(188,52,52,1)"
  },
  rect3: {
    flex: 0.5,
    backgroundColor: "rgba(106,255,119,1)"
  },
  rect4: {
    flex: 0.5,
    backgroundColor: "rgba(41,26,109,1)"
  }
});

export default Feedback;
