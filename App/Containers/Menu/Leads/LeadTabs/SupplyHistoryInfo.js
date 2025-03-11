import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  CheckBox,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
class SupplyHistoryInfo extends Component {
  render() {
    const { data, isSelected, setSelection } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View>
        <View style={{ marginTop: hp("2%") }}>
          <View style={{ marginLeft: wp("2%") }}>
            <Text
              style={{
                ...Styles.text,
                // left: wp("1.5%"),
                justifyContent: "flex-start",
              }}
            >
              {"25.06.2022"}
            </Text>
            <View
              style={{
                borderBottomWidth: 1.5,
                marginTop: wp("2%"),
                width: wp("85%"),
                // backgroundColor: "white",
                borderBottomColor: "white",
              }}
            ></View>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"CHANNEL PARTNER TYPE: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"RETAILER"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"NAME: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"RAM NARAYAN SHAW (5101/000111"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"QUANTITY (IN PCS): "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"50"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"MOCKUP: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"NO"}
              </Text>
            </Text>
          
            <View style={{ marginTop:wp("5%") }}>
            <Text
              style={{
                ...Styles.text,
                // left: wp("1.5%"),
                justifyContent: "flex-start",
              }}
            >
              {"22.06.2022"}
            </Text>
            <View
              style={{
                borderBottomWidth: 1.5,
                marginTop: wp("2%"),
                width: wp("85%"),
                // backgroundColor: "white",
                borderBottomColor: "white",
              }}
            ></View>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"CHANNEL PARTNER TYPE: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"RETAILER"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"NAME: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"RAM NARAYAN SHAW (5101/000111"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"QUANTITY (IN PCS): "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"10"}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                // marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("1%"),
                fontSize: wp("3%"),
                // fontWeight: "bold",
              }}
            >
              {"MOCKUP: "}
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("1%"),
                  fontSize: wp("3%"),
                //   fontWeight: "bold",
                }}
              >
                {"YES"}
              </Text>
            </Text>
          </View>
          
          </View>
          
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  pjpFilters: state.menu.leadFilters,

  leadlist: state.menu.leadlist,
});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SupplyHistoryInfo);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("64%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  picker: {
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("84%"),
    borderWidth: 0.8,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    marginTop: wp("-3%"),
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    // padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
  checkbox: {
    alignSelf: "center",
    marginTop: hp("-1.25%"),
    marginLeft: wp("45%"),
    height: hp("1%"),
    // width: wp("5%"),
    borderColor: "white",
    // backgroundColor:'#ffff',
  },
});
