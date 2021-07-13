import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Fontisto from "react-native-vector-icons/Fontisto";

import IconBed from "react-native-vector-icons/FontAwesome5";

import Play from "react-native-vector-icons/Ionicons";



import { useFonts, Roboto_100Thin } from "@expo-google-fonts/roboto";

const Cronometro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ color: "#feffff", fontFamily: Roboto_100Thin }}>
          Cronômetro
        </Text>
      </View>
      <View style={styles.CircleShapeView}>
        <View style={styles.CircleShapeInterno}>
        <Text style={{color: '#83ADF3', fontSize: 60,fontFamily: Roboto_100Thin}}>0</Text>
        <Text style={{color: '#83ADF3', fontSize: 30,fontFamily: Roboto_100Thin, marginTop: '40%', marginLeft: 4}}>00</Text>

        </View>
      </View>

      <View>

    

      <View style={{ alignSelf: 'center'}} >
            <Play name={'play-circle-sharp'} size={60} color={'#83ADF3'} />
        </View>


      <View style={styles.containerFooter} >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 0,
            backgroundColor: "#2F3034",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon name={"alarm"} style={{ color: "#C7C8CC" }} size={22} />
            <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }}>
              Alarme
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon
              name={"clock-outline"}
              style={{ color: "#C7C8CC" }}
              size={22} onPress={() => navigation.navigate('Relogio')}
            />
            <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }} >
              Relógio
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon name={"timer-sand"} style={{ color: "#C7C8CC" }} size={22} />
            <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }}>
              Timer
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Fontisto
              name={"stopwatch"}
              style={{ color: "#C7C8CC" }}
              size={22}
            />
            <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }}>
              Cronômetro
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconBed name={"bed"} style={{ color: "#C7C8CC" }} size={22} />
            <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }}>
              Dormir
            </Text>
          </View>
        </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    backgroundColor: "#202125",
    justifyContent: "space-between",
  },

  containerFooter: {},
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#feffff",
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: "center",

  },

  CircleShapeInterno: {
    width: 140,
    height: 140,
    borderRadius: 150 / 2,
    backgroundColor: "#202125",
  
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row'
    

  }
});

export default Cronometro;
