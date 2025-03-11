import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import Colors from "App/Theme/Colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Part no","Part no. Description", "Product Qty", "MRP"],
      tableData: [
        ["25", "23", "33", "400"],
        ["10", "23", "2", "40000"],
        ["6", "21", "7", "456"],
        ["9", "6", "2", "678"],
      ],
    };
  }

  render() {
    return (
      <View style={{width:wp("90%"),alignSelf:"center",top:hp("5%")}}>
        <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text1}
          />
          {this.state.tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={[styles.row, index % 2 && { backgroundColor: "#E7F9D7" }]}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: Colors.primary },
  text: { margin: 6, textAlign: "center" },
  text1: { margin: 6, color: "white", textAlign: "center" },
});
