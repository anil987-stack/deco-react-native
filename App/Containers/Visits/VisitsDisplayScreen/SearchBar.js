import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import ReactNativeAnimatedSearchbox from "react-native-animated-searchbox";

function SearchBar() {
  const refSearchBox = useRef();
  const [searchIconColor, setSearchIconColor] = useState("#555");

  useEffect(() => {
    openSearchBox();
  }, []);

  const openSearchBox = () => refSearchBox.current.open();
  const closeSearchBox = () => refSearchBox.current.close();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        // source={require("../../../Assets/Images/search.png")}
      >
        <ReactNativeAnimatedSearchbox
          ref={refSearchBox}
          placeholder={"Search..."}
          searchIconColor={searchIconColor}
          onClosed={() => {
            setSearchIconColor("#fff");
          }}
          onOpening={() => {
            setSearchIconColor("#555");
          }}
        />

        <View style={styles.buttonsArea}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={openSearchBox}
            >
              <Text style={styles.buttonText}>OPEN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={closeSearchBox}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonsArea: {
    flex: 1,
    marginBottom: 15,
    justifyContent: "flex-end",
  },
  row: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: -10,
    marginRight: -10,
    maxHeight: 50,
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.80)",
    margin: 10,
    height: 40,
    borderRadius: 40,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#555",
  },
});
