import React, { Component } from "react";
import InputText from "App/Components/FormInput/InputText";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputNumber from "App/Components/FormInput/InputNumber";
import { HelperService } from "App/Services/Utils/HelperService";
import OrdersActions from "App/Stores/Orders/Actions";
import { ApplicationStyles, Colors } from "App/Theme";
class InfoCard extends Component {
  render() {
    let order = this.props;
    console.log("kkkkkkkk", order);
    const { allOrders } = this.props;

    return (
      <ScrollView style={{ marginBottom: hp("2%") }}>
        <View style={{ ...Styles.outerView, left: "1%" }}>
          <View style={Styles.textView}>
            <Text style={Styles.textStyle}>Invoice Date</Text>
            <Text style={Styles.placeholder}>{"2022-04-09"}</Text>
          </View>

          <View style={Styles.textView1}>
            <Text style={Styles.textStyle}>Bill To Party</Text>
            <Text style={Styles.placeholder}>{"JK paints"}</Text>
          </View>

          <View style={Styles.textView1}>
            <Text style={Styles.textStyle}>Ship To Party</Text>
            <Text style={Styles.placeholder}>{"Agarwal paints"}</Text>
          </View>

          <View style={Styles.textView}>
            <Text style={Styles.textStyle}>SAP Invoice No.</Text>
            <Text style={Styles.placeholder}>{"3250001"}</Text>
          </View>

          <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>SFDC Invoice Id</Text>
            <Text style={Styles.placeholder}>{"IN-0024"}</Text>
          </View>
          <View style={Styles.textView}>
            <Text style={Styles.textStyle}>Total Qty</Text>
            <Text style={Styles.placeholder}>{"60"}</Text>
          </View>
          {/* <View style={Styles.textView1}>
            <Text style={Styles.textStyle}>SFDC Order Value(excl. tax & discount)</Text>
            <Text style={Styles.placeholder}>{"₹234533"}</Text>
          </View> */}

          {/* <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>Order Date</Text>
            <Text style={Styles.placeholder}>
              {HelperService.dateReadableFormat(order.zx_orderdate)}
            </Text>
          </View> */}

          <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>Base Amount</Text>
            <Text style={Styles.placeholder}>{"₹420"}</Text>
          </View>
          <View style={{ ...Styles.textView }}>
            <Text style={Styles.textStyle}>Total Tax</Text>
            <Text style={Styles.placeholder}>{"14"}</Text>
          </View>
          <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>Gross Amount</Text>
            <Text style={Styles.placeholder}>{"₹360"}</Text>
          </View>
          <View style={{ ...Styles.textView }}>
            <Text style={Styles.textStyle}>Total Discount</Text>
            <Text style={Styles.placeholder}>{"₹12"}</Text>
          </View>

          <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>Total Net Amount</Text>
            <Text style={Styles.placeholder}>{"₹854"}</Text>
          </View>

          {/* <View style={Styles.textView}>
            <Text style={Styles.textStyle}>No. of Bags</Text>
            <Text style={Styles.placeholder}>{order.zx_noofbag}</Text>
          </View> */}

          {/* <View style={{ ...Styles.textView, left: wp("10%") }}>
            <Text style={Styles.textStyle}>Total Qty</Text>
            <Text style={Styles.placeholder}>{order.zx_totalqty}</Text>
          </View> */}

          {/* <View style={Styles.textView}>
            <Text style={Styles.textStyle}>Order Value (without Discount)</Text>
            <Text style={Styles.placeholder}>{order.zx_totalamountexctax}</Text>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
const Styles = StyleSheet.create({
  outerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    left: "1.5%",
    top: "2%",
    marginBottom: "30%",
  },
  textView: {
    width: wp("40%"),
    // borderBottomWidth: 1,
    // borderColor: Colors.lightGrey,
    marginTop: hp("1.5%"),
    // height:hp("9%"),
  },
  placeholder: {
    borderColor: "transparent",
    left: wp("0.5%"),
    fontFamily: "Segoe UI",
    color: Colors.grey,
    fontSize: 14,
    top: hp("4%"),
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingBottom: hp("1%"),
  },
  textView1: {
    width: wp("90%"),
    // borderBottomWidth: 1,
    // borderColor: Colors.lightGrey,
    marginTop: hp("1.5%"),
  },
  textStyle: {
    fontFamily: "Segoe UI",
    color: Colors.black,
    top: hp("2.5%"),
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: hp("1%"),
  },
});
