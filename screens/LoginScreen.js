import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as AppAuth from "expo-app-auth";


const LoginScreen = () => {
  async function authenticate () {
    const config={
      issuer:"https://accounts.spotify.com",
      clintId:"0561c05aae714e8ea6d28bbebc766950",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public" // or "playlist-modify-private"
      ],
      redirectUrl:"exp://localhost:19006/--/spotify-auth-callback"
    }
    const result  = await AppAuth.authAsync(config);
    console.log(result); 
  }


  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 35 : 0 }}>
        <View style={{ height: 80 }} />
        <Entypo
          name="spotify"
          size={80}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs Free on Spotify!
        </Text>

        <View style={{ height: 80 }} />

        <Pressable
        onPress={authenticate}
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25, marginVertical:10,
          }}
        >
          <Text>Sign In With Spotify</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            flexDirection:'row',
            alignItems:'center',
            marginVertical:10,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}
        >
         <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={{color:'white', fontWeight:'500', textAlign:'center', flex:1,}}>Continue with phone number </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            flexDirection:'row',
            alignItems:'center',
            marginVertical:10,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}
        >
          <AntDesign name="google" size={24} color="red" />
          <Text style={{color:'white', fontWeight:'500', textAlign:'center', flex:1,}}>Continue with Google </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            flexDirection:'row',
            alignItems:'center',
            marginVertical:10,
            borderColor:"#C0C0C0",
            borderWidth:0.8
          }}
        >
          <FontAwesome5 name="facebook" size={24} color="blue" />
          <Text style={{color:'white', fontWeight:'500', textAlign:'center', flex:1,}}>Sign in With with Facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
