import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Fontisto from "react-native-vector-icons/Fontisto";

import IconBed from "react-native-vector-icons/FontAwesome5";

import Globo from "react-native-vector-icons/SimpleLineIcons";

import { useFonts, Roboto_100Thin } from "@expo-google-fonts/roboto";

const Relogio = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ color: "#feffff", fontFamily: Roboto_100Thin }}>
          Relógio
        </Text>
        <Text
          style={{
            marginTop: 25,
            color: "#83ADF3",
            fontSize: 80,
            fontFamily: Roboto_100Thin,
          }}
        >
          10:40:52
        </Text>
        <Text style={{ color: "#feffff", fontFamily: Roboto_100Thin }}>
          ter., 13 de jul.
        </Text>
      </View>

      <View>
        <View style={styles.CircleShapeView}>
          <Globo name={"globe"} size={20} color={"#202125"} />
        </View>

        <View style={styles.containerFooter}>
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
                size={22}
              />
              <Text style={{ fontFamily: Roboto_100Thin, color: "#C7C8CC" }}>
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
              <Icon
                name={"timer-sand"}
                style={{ color: "#C7C8CC" }}
                size={22}
              />
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
                size={22} onPress={() => navigation.navigate('Cronometro')}
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
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    backgroundColor: "#83ADF3",
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 8

  },
});

export default Relogio;
