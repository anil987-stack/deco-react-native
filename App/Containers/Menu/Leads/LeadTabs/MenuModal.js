import React, { Component } from "react";
import { View, Alert, TouchableOpacity, ScrollView } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
// import Style from "./PresentScreenStyle";

import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";

import menuActions from "App/Stores/Menu/Actions";
import ImageSlider from "App/Components/ImageSlider";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import ImagePicker from "App/Components/ImagePicker/ImagePicker";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import { watchPosition } from "react-native-geolocation-service";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AssignLeadModal from "./AssignLeadModal";
import TicketTaskModal from "./TicketTaskModal";
import ProductSupply from "./ProductSupply";

class MenuModal extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm, selectedButton } = this.props;

    return (
      // <View>
      <View style={{ display: "flex", flex: 1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <ScrollView
          style={{ marginTop: hp("6%") }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{ flexDirection: "row", marginTop: hp("0%"), alignSelf: "center" }}
          >
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"ADD CONTACTS"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
             onPress={() => {this.props.closeModal(),NavigationService.navigate("LeadScreen")}}
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor: "#c07700",
              }}
            >
              <GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("-1.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"LINK CHANNEL PARTNER"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor: "#c07700",
              }}
            >
              <GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("-1.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"PRODUCT & SUPPLY"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
             onPress={() => {this.props.closeModal(),NavigationService.navigate("LeadScreen")}}
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor: "#c07700",
              }}
            >
              <GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row",  marginTop: hp("-1.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"ASSIGN LEAD"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor: "#c07700",
              }}
              onPress={()=>{  this.props.openModal({
                content3: <AssignLeadModal
                onClose={() => {
                this.props.closeModal();
               }} />, 
                heading3: 'ASSIGN LEAD', 
                bodyFlexHeight3: .80
            })}}>

<GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row",  marginTop: hp("-1.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"ADD TICKET TASK"}
              </Text>
            </LinearGradient>

            <TouchableOpacity   style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor:"#c07700"
              }}
              onPress={()=>{  this.props.openModal({
                content3: <TicketTaskModal
                onClose={() => {
                this.props.closeModal();
               }} />, 
                heading3: 'ADD TICKET TASK', 
                bodyFlexHeight3: .80,
            })}}>

<GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />



</TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row",  marginTop: hp("-1.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"APPROVAL"}
              </Text>
            </LinearGradient>

            <TouchableOpacity   style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor:"#c07700"
              }}
            //   onPress={()=>{  this.props.openModal({
            //     content3: <AssignLeadModal
            //     onClose={() => {
            //     this.props.closeModal();
            //    }} />, 
            //     heading3: 'ASSIGN LEAD', 
            //     bodyFlexHeight3: .80
            // })}}
            >

<GenericIcon
                name="arrow-right-drop-circle-outline"
                show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />



</TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  image: state.user.getonboardingImage,
  form: state.menu.createOnboardinglist,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),

  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
