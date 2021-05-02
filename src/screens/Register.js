

import React, { useState } from "react";
import { StyleSheet,  View ,Image, KeyboardAvoidingView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Text, Input } from "react-native-elements";
import { auth } from "../firebase";




const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
     authUser.user.updateProfile({

       displayName: name,
       photoURL:
              imageUrl || 
              
              'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',


     })
     


    })
    .catch((error) => alert(error.message));

  };
  
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <StatusBar style="light" />
            <Text h3 >  Create a Signal Account </Text>
            <View style={{ height: 40}} />

            <View style={styles.inputContainer}>
            <Input placeholder="Full Name" autoFocus type="text" value={name}
                  onChangeText={(text) => setName(text)} />
                  <Input placeholder="Email" autoFocus type="email" value={email}
                  onChangeText={(text) => setEmail(text)} />
                  <Input placeholder="Password" secureTextEntry type="password" value={password}
                  onChangeText={(text) => setPassword(text)} /> 
                    <Input placeholder="ImageURL" autoFocus type="Text" value={imageUrl}
                  onChangeText={(text) => setImageUrl(text)} />

                  
                  

              </View>
           
            <Button onPress={register} containerStyle={styles.button} type="outline" title="Register" />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",    
      
      },
      
          inputContainer: {
            width: 300,
          },
          button: {
               width: 200,
               marginTop: 10,  
      
          },





})

