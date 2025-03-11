import Colors from "App/Theme/Colors";
import ApplicationStyles from "App/Theme/ApplicationStyles";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Style from "./CardsStyle";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";
import StartDaySelectionScreen from "App/Containers/Present/TravelModeScreen";
import CommonActions from "App/Stores/Common/Actions";
// import ApprovalModal from "./ApprovalModal";
class Draft extends React.Component {
  // componentDidMount() {
  //   this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  // }
  render() {
    
    const { form, changeForm, closeModal, openModal, isSelected, setSelection } = this.props;
    return (
  <TouchableWithoutFeedback>
    <View style={{ alignSelf: "center", marginTop: hp("2%") }}>
      <LinearGradient
        colors={["#2d2d2d", "#575757", "#a3a3a3"]}
        style={{
          borderRadius: 13,
          height: hp("10%"),
          width: wp("74%"),
          opacity: 0.9,
          // left: "10%",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 55,
          borderWidth: 1,
          borderBottomColor: "transparent",
          alignSelf: "flex-end",
          // marginRight:wp("10%")
          //        shadowColor: 'black',
          //  shadowOffset: { width: 7, height: 7 },
          //  shadowOpacity: 0.2,
          //  shadowRadius: 1,elevation:5
        }}
        start={{ x: 0.4, y: 1 }}
        end={{ x: 1.5, y: 0 }}
      >
        <View style={{ flexDirection: "row", marginLeft: wp("10") }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "#f8622d",
              top: "3.5%",
              fontSize: wp("2.5%"),
            }}
          >
            {"CREATION DATE :"}
          </Text>

          {/* <Text
          numberOfLines={1}
          style={{
            fontFamily: "HelveticaNeue_CondensedBold",
            marginLeft: "3%",
            fontWeight: "bold",
            color: "white",
            top: "3.5%",
            fontSize: wp("2.3%"),
          }}
        >
          {":"}
        </Text> */}

          {/* <Text
          numberOfLines={1}
          style={{
            fontFamily: "HelveticaNeue_CondensedBold",
            marginLeft: "3%",
            fontWeight: "bold",
            color: "#f8622d",
            top: "3.5%",
            fontSize: wp("2.3%"),
          }}
        >
          {"DISCUSSION"}
        </Text>

        <Text
          numberOfLines={1}
          style={{
            fontFamily: "HelveticaNeue_CondensedBold",
            marginLeft: "3%",
            fontWeight: "bold",
            color: "white",
            top: "3.5%",
            fontSize: wp("2.3%"),
          }}
        >
          {"|"}
        </Text> */}

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "white",
              top: "3.5%",
              fontSize: wp("2.5%"),
            }}
          >
            {"30 JUN 22"}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
        style={{
          borderRadius: 16,
          height: hp("19%"),
          width: wp("90%"),
          opacity: 0.9,
          //   right: wp("19.7%"),
          marginTop: hp("-6%"),
          elevation: 25,
          borderWidth: 1,
          shadowColor: "black",
          alignSelf: "center",
        }}
        // style={{borderRadius:16,height:199,width:370,opacity:0.9,right:"40%",marginTop:"11%",borderTopWidth:5,borderTopColor:"#3b3b3b",borderLeftWidth:5,borderRightWidth:5,borderColor:"#3b3b3b",elevation:45}}
        start={{ x: 0.4, y: 0.4 }}
        end={{ x: 0.9, y: 1.7 }}
      >
        <LinearGradient
          colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
          //  colors={["#1e1e1e","#434343","#505050"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          //          start={{ x: 0.7, y: 2.9 }}
          // end={{ x: 1.8, y: 0 }}

          style={{
            height: hp("13%"),
            width: wp("88%"),
            opacity: 0.8,
            alignSelf: "center",
            marginTop: "1%",
            borderRadius: 8,
            borderBottomWidth: 0.6,
            borderBottomColor: "lightgrey",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderWidth: 0.6,
            borderColor: "lightgrey",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <GenericIcon
              name={"circle"}
              style={{
                color: "#daa520",
                // color: "#48d30a",
                marginTop: hp("1.5%"),
                fontSize: hp("3%"),

                marginLeft: wp("2.5%"),
                // backgroundColor:"transparent",
                borderRadius: 60,
                elevation: 0.6,
                // right:"2%",
                width: wp("6%"),
                // paddingLeft:1,
                height: hp("3%"),
                // paddingTop:0,
              }}
              show={true}
            />

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("2%"),
                fontWeight: "bold",
                color: "#f8622d",
                marginTop: hp("1.4%"),
                width: wp("65%"),
              }}
            >
              {"RETAILER MEET AT JAIPUR"}
            </Text>
            <GenericIcon
              name={"auto-delete"}
              style={{
                color: "#cccccc",
                marginTop: hp("1.5%"),
                fontSize: hp("4%"),

                marginLeft: wp("2%"),
                // backgroundColor:"white",
                borderRadius: 60,
                elevation: 0.6,
                // right:"2%",
                // width:"5.5%",
                // paddingLeft:1,
                // height:"5%",
                // paddingTop:0,
              }}
              // show={true}
            />
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("-1.4%"),
              fontSize: 12,
            }}
          >
            {"NUKKAD MEET"}
          </Text>

<View style={{flexDirection:"row"}}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("0%"),
              fontSize: 12,
            }}
          >
            {"RETAILER: "}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              
              color: "white",
              marginTop: hp("0%"),
              fontSize: 12,
            }}
          >
            {"10"}
          </Text>

          </View>

<View style={{flexDirection:"row"}}> 
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("0%"),
              fontSize: 12,
            }}
          >
            {"EVENT ORGANISED BY: "}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              color: "white",
              marginTop: hp("0%"),
              fontSize: 12,
              fontWeight:"bold"
            }}
          >
            {"AVIK"}
          </Text>
          </View>
        </LinearGradient>

        <View
          style={{
            flexDirection: "row",
            zIndex: 30,
            marginTop: "1.2%",
            left: "6%",
          }}
        >
          <TouchableOpacity
            style={{
              ...ApplicationStyles.formButton,
              alignSelf: "center",
              marginTop: hp("0%"),
              height: hp("3.5%"),
              width: wp("35.5%"),
              elevation: 18,
              borderRadius: 8,
              paddingBottom: 13,
              zIndex: 50,
              borderWidth: 2,
            }}
            //  this.props.clear();
            // onPress={() => this.submit()}
          >
            <LinearGradient
              colors={["#333333", "#333333"]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.7 }}
              style={{
                height: hp("3%"),
                width: wp("34.6%"),
                left: "0%",
                borderRadius: 8,
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "#BFFF00",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("2.7%"),
                }}
              >
                {"SUBMIT"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...ApplicationStyles.formButton,
              alignSelf: "center",
              marginTop: hp("0%"),
              height: hp("3.5%"),
              width: wp("35.5%"),
              marginLeft: wp("12%"),
              elevation: 18,
              borderRadius: 8,
              paddingBottom: 13,
              zIndex: 50,
              borderWidth: 2,
            }}
            //  this.props.clear();
            // onPress={() => {
            //   this.props.openModal({
            //     content3: (
            //       <ApprovalModal
            //         onClose={() => {
            //           closeModal();
            //         }}
            //       />
            //     ),
            //     heading3: "APPROVAL",
            //     bodyFlexHeight3: 0.8,
            //   });
            // }}
          >
            <LinearGradient
              colors={["#333333", "#333333"]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.7 }}
              style={{
                height: hp("3%"),
                width: wp("34.6%"),
                left: "0%",
                borderRadius: 8,
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "#BFFF00",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("2.7%"),
                }}
              >
                {"EDIT"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* </LinearGradient> */}
    </View>
  </TouchableWithoutFeedback>
  );
}
}           
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    userdetail: state.startday.userDetailList,
    searchFilters: state.dashboard.searchFilters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Draft);

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
    width: wp("86%"),
    // borderWidth: 1,
    elevation: 5,
    borderRadius: 5,
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
    textAlign: "left",
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
    backgroundColor: "#02ADD7",
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
