import React, { Component } from "react";
import { View, Alert, TouchableOpacity, Keyboard } from "react-native";
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
import { StyleSheet } from "react-native";
import SelectUserModal from "../VisitsDisplayScreen/SelectUserModal";

class AddArea extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }
  submit() {
    Keyboard.dismiss();
    const { loginUser, password, mobile } = this.props;

    // loginUser({
    //   mobile: mobile,
    //   password: password,
    // });

    // NavigationService.navigate("DashboardScreen");
  }
  render() {
    const { form, changeForm, closeModal, openModal } = this.props;

    return (
      // <View>
      <View style={{ display: "flex", flex: 1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View
          style={{
            paddingTop: 2,
            alignSelf: "center",
            // height: hp("0%"),
            marginTop: hp("7.8%"),
          }}
        ></View>

        <View style={{marginLeft:wp('-15%')}}>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginLeft: wp("10%"),
              marginTop: wp("-2.75%"),
            }}
          >
            {/* <GenericIcon
              name={"plus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("-11%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("65%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
                marginLeft: wp("2%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.25%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 3,
                }}
              >
                {"PROJECT (SCOUTING)"}
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4.75%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 8,
                  // fontWeight: "bold",
                }}
              >
                {"01"}
              </Text>
            </LinearGradient>
            {/* <GenericIcon
              name={"minus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("2%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            //   marginLeft: wp(".5%"),
              marginTop: wp("1%"),
            }}
          >
            {/* <GenericIcon
              name={"plus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("-11%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("65%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
                marginLeft: wp("2%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.25%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 3,
                  opacity: 0.5,
                }}
              >
                {"ADD AREA..."}
              </Text>
            </LinearGradient>

            {/* <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4.75%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 8,
                  // fontWeight: "bold",
                }}
              >
                {"01"}
              </Text>
            </LinearGradient> */}
            {/* <GenericIcon
              name={"minus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("2%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginLeft: wp("10%"),
              marginTop: wp("-3.5%"),
            }}
          >
            {/* <GenericIcon
              name={"plus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("-11%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("65%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
                marginLeft: wp("2%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.25%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 3,
                }}
              >
                {"INFLUENCER (ENROLLMENT)"}
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4.75%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 8,
                  // fontWeight: "bold",
                }}
              >
                {"01"}
              </Text>
            </LinearGradient>
            {/* <GenericIcon
              name={"minus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("2%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            //   marginLeft: wp(".5%"),
              marginTop: wp("1%"),
            }}
          >
            {/* <GenericIcon
              name={"plus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("-11%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("3.5%"),
                width: wp("65%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
                marginLeft: wp("2%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("3.25%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  fontWeight: "bold",
                  paddingTop: 3,
                  opacity: 0.5,
                }}
              >
                {"ADD AREA..."}
              </Text>
            </LinearGradient>

            {/* <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4.75%"),
                width: wp("10%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  // color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 8,
                  // fontWeight: "bold",
                }}
              >
                {"01"}
              </Text>
            </LinearGradient> */}
            {/* <GenericIcon
              name={"minus"}
              show={true}
              // onPress={() => this.getVisitsDisplayListCall()}
              style={{
                color: "#8B0000",
                fontSize: wp("5.7%"),
                alignSelf: "center",
                padding: 13,
                backgroundColor: "#FDFCFC",
                borderRadius: 18,
                width: wp("7%"),
                height: hp("4%"),
                marginTop: wp("5%"),
                padding: 1.7,
                marginLeft: wp("2%"),
                paddingLeft: wp(".85%"),
                paddingTop: wp("1%"),
              }}
            /> */}
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...ApplicationStyles.formButton,
            alignSelf: "center",
            marginTop: hp("2.75%"),
            maxHeight: hp("5%"),
            width: wp("34%"),
            elevation: 18,
            borderRadius: 10,
            paddingBottom: 13,
          }}
          //  this.props.clear();
      onPress={() => {this.props.closeModal()}}
        >
          <LinearGradient
            colors={[Colors.primary, Colors.darkRed]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.7 }}
            style={{
              height: hp("5%"),
              width: wp("35%"),
              left: "0%",
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                paddingVertical: 6,
                fontSize: wp("5%"),
              }}
            >
              {"SUBMIT"}
            </Text>
          </LinearGradient>
          {/* <Text style={{ fontSize: 15, color:"white",fontFamily: "HelveticaNeue_CondensedBold" }}>
                {" "}
                Forgot Password ?
              </Text> */}
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddArea);
