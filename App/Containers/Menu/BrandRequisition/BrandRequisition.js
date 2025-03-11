import LocalActions from "App/Stores/LocalExpense/Actions";
import Colors from "App/Theme/Colors";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "App/Components/Select";
import InputText from "App/Components/FormInput/InputText";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

class BrandRequisition extends Component {
  state = {
    isVisible: false,
  };

  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View style={Styles.modal}>
            <View
              style={{
                backgroundColor: "white",
                margin: 40,
                top: hp("10%"),
                height: hp("50%"),
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  NEW REQUISITION
                </Text>
                {/* <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Select Party {">"}
                </Text> */}
              </View>
              <View style={{ margin: 10, top: hp("1%") }}>
                <Text style={{ color: "#515C6F", fontWeight: "bold" }}>
                  Select Customer*
                </Text>
                <Select style={Styles.dropdown} />
              </View>

              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    color: "#515C6F",
                    fontWeight: "bold",
                    marginVertical: 5,
                  }}
                >
                  Qty
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0,
                    width: wp("74%"),
                    backgroundColor: "white",
                    alignSelf: "center",
                    borderRadius: 5,
                    elevation: 5,
                  }}
                ></TextInput>
              </View>

              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    color: "#515C6F",
                    fontWeight: "bold",
                    marginVertical: 5,
                  }}
                >
                  Remarks
                </Text>
                <TextInput
                  style={{
                    borderWidth: 0,
                    width: wp("74%"),
                    backgroundColor: "white",
                    alignSelf: "center",
                    borderRadius: 5,
                    elevation: 5,
                  }}
                ></TextInput>
              </View>

              <TouchableOpacity style={Styles.btn}>
                <Text
                  style={{ fontSize: 20, color: "white", textAlign: "center" }}
                  onPress={() => {
                    this.displayModal(!this.state.isVisible);
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{ marginVertical: 2 }}>
          <BackArrowButton />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginHorizontal: 50,
              color: "#000080",
            }}
          >
            Brand Requisition
          </Text>
          <BlueButton
            style={Styles.button}
            rounded
            onPress={() => {
              this.displayModal(true);
            }}
            // onPress={() => NavigationService.navigate('BookOrder')}
            large
            title={"NEW REQUISITION"}
            textStyle={{ fontSize: 10, textTransform: "uppercase" }}
          />
        </View>

        <View
          style={Styles.card}
          // onPress={() => NavigationService.navigate('SalesOrder')}
        >
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{ color: "#000080", fontSize: 18, fontWeight: "bold" }}
              >
                MK Traders
              </Text>
              <BlueButton
                style={Styles.button2}
                rounded
                // onPress={() => NavigationService.navigate('BookOrder')}
                large
                title={"Pending"}
                textStyle={{ fontSize: 10 }}
              />
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <View style={{ flexDirection: "column", padding: 10 }}>
                <Text
                  style={{
                    color: "#000080",
                    fontSize: 25,
                    textAlign: "center",
                    // marginTop: 5,
                  }}
                >
                  2
                </Text>
                <Text style={{ color: "#000080", textAlign: "center" }}>
                  FEB
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#343434",
                    fontSize: 12,
                  }}
                >
                  Requisition {"\n"}Date
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 15,
                  marginTop: 18,
                  right: 10,
                }}
              >
                <Text style={Styles.t2}>Requisition No.</Text>
                <Text style={Styles.t2}>Marketing Material</Text>
                <Text style={Styles.t2}>Qty</Text>
                {/* <Text style={Styles.t2}>Height(In ft.)</Text>
                <Text style={Styles.t2}>Width(in ft.)</Text> */}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginVertical: 15,
                  marginTop: 18,
                  right: 10,
                }}
              >
                <Text style={Styles.t1}>RQ-255555</Text>
                <Text style={Styles.t1}>AAC Grey - 50 Kg </Text>
                <Text style={Styles.t1}>50</Text>
                {/* <Text style={Styles.t1}>01/01/2021</Text>
                <Text style={Styles.t1}>05/04/2021</Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // type: state.local.type
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandRequisition);

const Styles = StyleSheet.create({
  button: {
    width: wp("30%"),
    height: hp("4%"),
    borderRadius: 2,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 5,
    alignSelf: "flex-end",
  },
  card: {
    // height: hp("24%"),
    marginVertical: 20,
    width: wp("93%"),
    borderWidth: 0,
    elevation: 5,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  t1: {
    color: "#343434",
    marginVertical: 2,
    fontWeight: "bold",
  },
  t2: {
    marginVertical: 2,
    color: "#9A9A9A",
    textAlign: "right",
  },

  mb10: {
    marginBottom: hp("2%"),
    height: hp("5.5%"),
    fontSize: wp("3.5%"),
    borderWidth: 0,
    elevation: 4,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button2: {
    width: wp("25%"),
    backgroundColor: "#D71E48",
    height: hp("3.5%"),
    borderRadius: 2,
    elevation: 5,
    marginLeft: hp("19%"),
  },
  modal: {
    backgroundColor: "lightgrey",
    height: hp("50%"),
    width: wp("100%"),
    alignSelf: "center",
    flex: 1,
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: hp("2%"),
    height: hp("4%"),
    width: wp("50%"),
  },
  dropdown: {
    height: hp("6%"),
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "#70707063",
    borderWidth: 0,
    elevation: 5,
    marginTop: 5,
  },
});
