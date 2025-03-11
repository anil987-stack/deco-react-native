import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../Theme";

const ToggleSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option1off,
  option2,
  option2off,
  onSelectSwitch,
  selectionColor = "#00bcd4",
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={{
          height: wp("12%"),
          width: wp("50%"),
          backgroundColor: "black",
          // opacity: 0.5,
          borderRadius: getRoundCorner ? 10 : 0,
          borderWidth: 1,
          //   borderColor: selectionColor,
          flexDirection: "row",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            // backgroundColor: getSelectionMode == 1 ? selectionColor : 'transparent',
            // borderRadius: getRoundCorner ? 10 : 0,
            justifyContent: "center",
            // alignItems: 'center',
            // zIndex: 1,
          }}
        >
          {getSelectionMode == 1 ? (
            <LinearGradient
              colors={["#006400", Colors.grey]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                // backgroundColor: getSelectionMode == 2 ? selectionColor : 'transparent',
                borderRadius: getRoundCorner ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LinearGradient
                colors={[Colors.green, "#90EE90", "#8FBC8F"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  // flex: 1,
                  // backgroundColor: getSelectionMode == 2 ? selectionColor : 'transparent',
                  borderRadius: getRoundCorner ? 10 : 0,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70%",
                  width: "90%",
                  // zIndex: 1,
                }}
              >
                <View>
                  <Text
                    style={{
                      // color: getSelectionMode == 1 ? '#bfbfbf' : '#bfbfbf',
                      color: Colors.black,
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.5%"),
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {option1}
                  </Text>
                </View>
              </LinearGradient>
            </LinearGradient>
          ) : (
            <Text
              style={{
                // color: getSelectionMode == 1 ? '#bfbfbf' : '#bfbfbf',
                color: "white",
                fontFamily: "HelveticaNeue_CondensedBold",
                fontSize: wp("4%"),
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {option1off}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            // backgroundColor: getSelectionMode == 1 ? selectionColor : 'transparent',
            // borderRadius: getRoundCorner ? 10 : 0,
            justifyContent: "center",
            // alignItems: 'center',
            // zIndex: 1,
          }}
        >
          {getSelectionMode == 2 ? (
            <LinearGradient
              colors={["#bfbfbf", "#800000"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                // backgroundColor: getSelectionMode == 2 ? selectionColor : 'transparent',
                borderRadius: getRoundCorner ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LinearGradient
                colors={[Colors.grey, Colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  // flex: 1,
                  // backgroundColor: getSelectionMode == 2 ? selectionColor : 'transparent',
                  borderRadius: getRoundCorner ? 10 : 0,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70%",
                  width: "90%",
                  // zIndex: 1,
                }}
              >
                <View>
                  <Text
                    style={{
                      // color: getSelectionMode == 2 ? '#bfbfbf' : '#bfbfbf',
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.5%"),
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {option2}
                  </Text>
                </View>
              </LinearGradient>
            </LinearGradient>
          ) : (
            <Text
              style={{
                // color: getSelectionMode == 2 ? '#bfbfbf' : '#bfbfbf',
                color: "white",
                fontFamily: "HelveticaNeue_CondensedBold",
                fontSize: wp("4%"),
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {option2off}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ToggleSwitch;
