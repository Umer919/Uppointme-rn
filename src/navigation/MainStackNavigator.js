import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Settings from "../screens/Settings";
import Contact from "../screens/Contact";
import { Ionicons } from "@expo/vector-icons";
const Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function MainStackNavigator() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <Ionicons
              onPress={() => alert("This is a button!")}
              name="settings"
              size={38}
              color="#FFD600"
              style={{ margin: 5, marginRight: 10 }}
            />
          ),
          headerLeft: () => (
            <Ionicons
              onPress={() => alert("This is a button!")}
              name="help-circle"
              size={44}
              color="#FFD600"
              style={{ marginLeft: 10 }}
            />
          ),
          headerTitleAlign: "center",
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
          headerTintColor: "#ffd700",
          headerBackTitleVisible: false,
        }}
        initialRouteName="Home"
        headerMode="float"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   title: "Phrase Map",
          // }}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Favourites</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Profiles</Text>
                        </View>
                      </TouchableOpacity>
                      <Pressable
                        style={styles.square}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Back</Text>
                      </Pressable>
                      {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => (
                          navigation.navigate("Detail", { item: "character" }),
                          setModalVisible(!modalVisible)
                        )}
                      >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable> */}
                    </View>
                  </View>
                </Modal>
                <Pressable
                  //style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons
                    //onPress={() => alert("This is a button!")}
                    name="settings"
                    size={38}
                    color="#FFD600"
                    style={{ marginRight: 10 }}
                  />
                </Pressable>
              </View>
            ),
            headerLeft: () => (
              <Ionicons
                onPress={() => alert("This is a button!")}
                name="help-circle"
                size={44}
                color="#FFD600"
                style={{ marginLeft: 10 }}
              />
            ),
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerTintColor: "#ffd700",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          // options={({ route }) => ({
          //   //title: route.params.item.name,
          //   title: "",
          // })}
          options={({ navigation }) => ({
            title: "Details",
            headerRight: () => (
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Favourites</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Profiles</Text>
                        </View>
                      </TouchableOpacity>
                      <Pressable
                        style={styles.square}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Back</Text>
                      </Pressable>
                      {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => (
                          navigation.navigate("Detail", { item: "character" }),
                          setModalVisible(!modalVisible)
                        )}
                      >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable> */}
                    </View>
                  </View>
                </Modal>
                <Pressable
                  //style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons
                    //onPress={() => alert("This is a button!")}
                    name="settings"
                    size={38}
                    color="#FFD600"
                    style={{ marginRight: 10 }}
                  />
                </Pressable>
              </View>
            ),
            headerLeft: () => (
              <Ionicons
                onPress={() => alert("This is a button!")}
                name="help-circle"
                size={44}
                color="#FFD600"
                style={{ marginLeft: 10 }}
              />
            ),
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerTintColor: "#ffd700",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={({ navigation }) => ({
            title: "Contacts",
            headerRight: () => (
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Favourites</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.square}>
                        <View>
                          <Text style={styles.buttonText}>Profiles</Text>
                        </View>
                      </TouchableOpacity>
                      <Pressable
                        style={styles.square}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Back</Text>
                      </Pressable>
                      {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => (
                          navigation.navigate("Detail", { item: "character" }),
                          setModalVisible(!modalVisible)
                        )}
                      >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable> */}
                    </View>
                  </View>
                </Modal>
                <Pressable
                  //style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Ionicons
                    //onPress={() => alert("This is a button!")}
                    name="settings"
                    size={38}
                    color="#FFD600"
                    style={{ marginRight: 10 }}
                  />
                </Pressable>
              </View>
            ),
            headerLeft: () => (
              <Ionicons
                onPress={() => alert("This is a button!")}
                name="help-circle"
                size={44}
                color="#FFD600"
                style={{ marginLeft: 10 }}
              />
            ),
            headerTitleAlign: "center",
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerTintColor: "#ffd700",
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //marginTop: 22,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    //transform: [{ rotate: "-45deg" }],
  },
  modalView: {
    height: windowHeight,
    width: windowWidth,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontSize: 30,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MainStackNavigator;
