import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import GooglePlacesInput from "./components/GooglePlacesAutoComplete";

export default function App() {
  const tokyoRegion = {
    latitude: 10.1632,
    longitude: 76.6413,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  provider = PROVIDER_GOOGLE;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GooglePlacesInput />
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        region={tokyoRegion}
        style={{ height: "100%", width: "100%" }}
        showsUserLocation={true}
        mapType={"satellite"}
      >
      <Marker coordinate={tokyoRegion} pinColor="green" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 20,
  },
});
