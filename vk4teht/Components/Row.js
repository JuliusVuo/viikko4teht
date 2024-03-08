import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Row({person}){
    return (

        <Text style={styles.textstyle}>{person.lastname}, {person.firstname}</Text>
    )
}
const styles = StyleSheet.create({
    textstyle: {
      fontSize: 20,
    },
  });