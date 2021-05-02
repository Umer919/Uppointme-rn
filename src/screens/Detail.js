import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import GLOBAL from "../Global/global";
const what = {
  send: "Send",
  bring: "bring",
  goto: "go to",
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Detail = (props) => {
  const { route, navigation } = props;
  const { item } = route.params;
  const { name, home, species } = item;

  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "black",
            // alignSelf: "center",
            marginBottom: 25,
            textAlign: "center",
          }}
        >
          Tap the Action You Wish To Perform
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.square}
          // onPress={() => (GLOBAL.whatt = "send")}
          onPress={() => navigation.navigate("Home")}
        >
          <View>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate("Home")}
        >
          <View>
            <Text style={styles.buttonText}>Bring</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <View>
            <Text style={styles.buttonText}>Go To</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <View>
            <Text style={styles.buttonText}>Find</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <View>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <View>
            <Text style={styles.buttonText}>Follow</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Detail Screen</Text>
    //   <View style={styles.card}>
    //     <Text style={styles.cardText}>Name: {name}</Text>
    //     <Text style={styles.cardText}>Home Planet: {home}</Text>
    //     <Text style={styles.cardText}>Species: {species}</Text>
    //   </View>
    //   <TouchableOpacity
    //     style={styles.buttonContainer}
    //     onPress={() => navigation.navigate('Settings')}>
    //     <Text style={styles.buttonText}>Go to Settings</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    //transform: [{ rotate: "-45deg" }],
  },
  square: {
    width: windowWidth * 0.8,
    height: 60,
    backgroundColor: "#FFD600",
    padding: 2,
    margin: 5,
    justifyContent: "center",
    //transform: [{ rotate: "45deg" }],
    borderColor: "black",
    borderWidth: 4,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#ebebeb",
  // },
  // text: {
  //   color: "#101010",
  //   fontSize: 24,
  //   fontWeight: "bold",
  // },
  // card: {
  //   width: 350,
  //   height: 100,
  //   borderRadius: 10,
  //   backgroundColor: "#101010",
  //   margin: 10,
  //   padding: 10,
  //   alignItems: "center",
  // },
  // cardText: {
  //   fontSize: 18,
  //   color: "#ffd700",
  //   marginBottom: 5,
  // },
  // buttonContainer: {
  //   backgroundColor: "#222",
  //   borderRadius: 5,
  //   padding: 10,
  //   margin: 20,
  // },
  // buttonText: {
  //   fontSize: 20,
  //   color: "#fff",
  // },
});

export default Detail;
