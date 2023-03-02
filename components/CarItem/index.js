import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style.js";
import StyledButton from "../StyledButton/index.js";

export default function CarItem(props) {
  const { name, subtitle, subtitleCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {subtitle} <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton buttonText={"Custom Order"} type={"primary"} />
        <StyledButton buttonText={"Existing Inventory"} type={"secondary"} />
      </View>
    </View>
  );
}
