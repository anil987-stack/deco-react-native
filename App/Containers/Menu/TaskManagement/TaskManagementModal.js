import React, { Component } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
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
import TicketTaskModal from "../Leads/LeadTabs/TicketTaskModal";

class TaskManagementModal extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm, closeModal } = this.props;

    return (
      // <View>
      <View style={{ display: "flex", flex: 1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View
          style={{
            paddingTop: 2,
            alignSelf: "center",
            height: hp("0%"),
            marginTop: hp("7.8%"),
          }}
        ></View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: wp("-2%"),
            }}
          >
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"LEAD"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
              onPress={() => {this.props.closeModal()
                  NavigationService.navigate("Leads");
              }}
              style={{ marginTop: hp("1.5%"), paddingBottom: 2 }}
            >

            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("5%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
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
            </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("-2.5%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"TELE-SALES"}
              </Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => {this.props.closeModal()
                  NavigationService.navigate("TeleSales");
              }}
              style={{ marginTop: hp("1.5%"), paddingBottom: 2 }}
            >
              <LinearGradient
                colors={["#c07700", "#c07700"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: hp("5%"),
                  width: wp("10%"),
                  alignSelf: "flex-end",
                  marginTop: hp("3%"),
                }}
              >
                <GenericIcon
                  name="arrow-right-drop-circle-outline"
                  show={true}
                
                  style={{
                    fontSize: wp("7%"),
                    //   fontFamily: "HelveticaNeue_CondensedBold",
                    textAlignVertical: "center",
                    // color: "black",

                    // marginTop: "0%",
                    alignSelf: "center",
                    paddingTop: 5,
                    // fontWeight: "bold",
                  }}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: hp("-1.25%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"TICKET"}
              </Text>

             
            </LinearGradient>

            <TouchableOpacity
            //   onPress={()=>{  this.props.openModal({
            //     content3: <TicketTaskModal
            //     onClose={() => {
            //     this.props.closeModal();
            //    }} />, 
            //     heading3: 'ADD TICKET TASK', 
            //     bodyFlexHeight3: .80,
            // })}}

            onPress={() => {this.props.closeModal()
              NavigationService.navigate("Ticket");
          }}
              style={{ paddingBottom: 2 }}
            >
            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("5%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
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
            </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: hp("-2.2%") }}>
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"AIDP"}
              </Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => {this.props.closeModal()
                  NavigationService.navigate("Aidp");
              }}
              style={{ marginTop: hp("1.5%"), paddingBottom: 2 }}
            >
            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("5%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
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
            </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskManagementModal);
