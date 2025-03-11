import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ApplicationStyles, Colors } from "App/Theme";
import DatePicker from "App/Components/DatePicker";
import GenericIcon from "App/Components/GenericIcon";
import AgentPersonal from "../../Components/AgentInfo/AgentPersonal";

export default function Personal() {
  
  return (
    <View style={Styles.mainContainer}>
      <AgentPersonal heading={"First Name"} value={"Ankur"}/>
      <AgentPersonal heading={"Last Name"} value={"Garg"}/>
      <AgentPersonal heading={"Phone no."} value={"7986755081"}/>
      <AgentPersonal heading={"Whatsapp no."} value={"7986755081"}/>
      <AgentPersonal heading={"Email ID"} value={"ankur.garg@gmail.com"}/>
      <AgentPersonal heading={"Date of Birth"} value={"18/08/1986"}/>
      <AgentPersonal heading={"Anniversary date"} value={"11/02/1988"}/>
      <AgentPersonal heading={"State"} value={"West Bengal"}/>
      <AgentPersonal heading={"City"} value={"Kolkata"}/>
      <AgentPersonal heading={"Address"} value={"#123 ABC Apartments, Kolkata"}/>
      
     
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
