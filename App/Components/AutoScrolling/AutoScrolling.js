import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MarqueeText from "react-native-marquee";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";

export default class MarqueeTextSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MarqueeText
          style={{
            fontSize: 15,
            backgroundColor: Colors.primary,
            color: "#000080",
            textAlign: "center",paddingVertical:7,
            marginBottom: 10,
          }}
          duration={18000}
          marqueeOnStart
          loop
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
          {this.props.data}
        </MarqueeText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
