import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const character = {
  name: "Luke Skywalker",
  home: "Tatooine",
  species: "human",
};
import GLOBAL from "../Global/global";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Home(props) {
  const { navigation } = props;

  // const { data } = route.params;
  //const { send, bring, goto } = data;
  console.log(GLOBAL.whatt);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.square}
        onPress={() => navigation.navigate("Detail", { item: character })}
      >
        <View>
          {/* <Text style={styles.buttonText}>What {character.name}?</Text> */}
          <Text
            adjustsFontSizeToFit={true}
            minimumFontScale={0.1}
            style={styles.buttonText}
          >
            How
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.square}
        onPress={() => navigation.navigate("Contact")}
      >
        <View>
          <Text
            adjustsFontSizeToFit={true}
            minimumFontScale={0.1}
            style={styles.buttonText}
          >
            Who
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.square}
        // onPress={() => navigation.navigate("Detail", { item: character })}
      >
        <View>
          <Text
            adjustsFontSizeToFit={true}
            minimumFontScale={0.1}
            style={styles.buttonText}
          >
            Where
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

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
    transform: [{ rotate: "-45deg" }],
  },
  square: {
    width: 130,
    height: 130,
    backgroundColor: "#FFD600",
    padding: 2,
    margin: 30,
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
    borderColor: "black",
    borderWidth: 4,
  },
});

export default Home;
