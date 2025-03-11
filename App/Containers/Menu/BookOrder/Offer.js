import React, { Component } from "react";
import { View, FlatList, Text, Image } from "react-native";
import Header from "App/Components/Header/index";
import NavigationService from "App/Services/NavigationService";
const renderItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}
    >
      {/* <Image
        style={{ width: 50, height: 50, marginRight: 16 }}
        source={{ uri: item.picture.large }}
      /> */}
      <View style={{ justifyContent: "space-around" }}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", color: "#000080" }}
        >{`${item.name.title}`}</Text>
        <Text style={{ color: "#777" }}>{item.email}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              top: 5,
              borderRadius: 1,
              borderStyle: "dashed",
              borderWidth: 1,
              borderColor: "#000080",
              fontSize: 20,
              padding: 5,
            }}
          >
            {item.code}
          </Text>
          {/* <Text
            style={{ color: "red", top: 12, fontSize: 15, fontWeight: "bold" }}
            onPress={() => NavigationService.navigate("BookOrder")}
          >
            APPLY
          </Text> */}
        </View>
      </View>
    </View>
  );
};
export class Offer extends Component {
  render() {
    return (
      <View>
        <Header
          style={{ justifyContent: "center" }}
          title={"Available Offers"}
        />
        <FlatList
          data={[
            {
              name: { title: "Discount  4.00%" },
              email: "Valid on total value  of order worth ₹250000 to ₹400000",
              code: "MRF30",
            },
          ]}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

export default Offer;
