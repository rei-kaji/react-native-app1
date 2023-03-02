import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style.js";
import StyledButton from "../StyledButton/index.js";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,500</Text>
      </View>
      <StyledButton buttonText={"Custom Order"} type={"primary"} />
      <StyledButton buttonText={"Existing Inventory"} type={"secondary"} />
    </View>
  );
}
