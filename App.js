import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

const carItems = [
  {
    name: "Model X",
    subtitle: "Starting from $69,500",
    subtitleCTA: "Touchless Delivery",
    image: require("./assets/images/ModelS.jpeg"),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
