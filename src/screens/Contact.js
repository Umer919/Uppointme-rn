import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";
import * as Contacts from "expo-contacts";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Contact() {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  //console.log("data ye hai " + dataa);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setMasterDataSource(data);
          setFilteredDataSource(data);
          setContacts(data);
          //console.log(data);
        }
        //console.log("masterdatasource" + masterDataSource);
      }
    })();
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      //console.log("masterdatasource");
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.square}
          onPress={() => getItem(item)}
          //onPress={() => navigation.navigate("Home")}
        >
          <View>
            <Text
              adjustsFontSizeToFit={true}
              minimumFontScale={0.1}
              style={styles.buttonText}
            >{`${item.name}  `}</Text>
            {/* <Text style={styles.buttonText}>{`(${
              item.phoneNumbers ? item.phoneNumbers[0].number : ""
            })`}</Text> */}
            {/* <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {"."}
              </Text> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    // alert("Id : " + item.id + " Title : " + item.name);
    alert(
      "Name: " + item.name + `\n` + "Number : " + item.phoneNumbers[0].number
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <SearchBar
          containerStyle={{ backgroundColor: "black" }}
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Search Contact"
          value={search}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
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
    fontSize : 20 ,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    textAlign: "center",
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
});
