import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ApplicationStyles, Colors } from "App/Theme";
import AgentInfo from "../../Components/AgentInfo/AgentInfo";

export default function Info() {
  return (
    <View style={Styles.mainContainer}>
      <AgentInfo heading={"Employee Id"} value={"EMP-17978"} />
      <AgentInfo heading={"Designation"} value={"Sales Executive"} />
      <AgentInfo
        heading={"Area"}
        value0={"RK Puram"}
        value1={"RK Puram"}
        value2={"RK Puram"}
        value3={"RK Puram"}
      />
      <AgentInfo heading={"Manager"} value={"Ankur Garg"} />
      <AgentInfo heading={"Manager ID"} value={"EMP-647338"} />
    </View>
  );
}
const Styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});
