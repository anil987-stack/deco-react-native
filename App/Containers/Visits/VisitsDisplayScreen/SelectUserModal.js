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

class SelectUserModal extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm } = this.props;

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
          >
            <View style={{ flexDirection: "row", height: "9%" }}>
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "black",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("3.5%"),
                  backgroundColor: "white",
                  borderRadius: 33,
                  marginTop: "-20%",
                  width: "17.7%",
                  height: hp("8%"),
                  left: wp("5%"),
                  zIndex: 20,
                  padding: 7,
                  paddingTop: 8,
                }}
              >
                {"44"}
              </Text>
              {/* <GenericIcon name={'chevron-left-circle-outline'} style={{fontSize:wp("9%"), color: Colors.black,left:"15%",zIndex:10,marginTop:"50%",backgroundColor:"white",borderRadius:22}}
                        show={true}
                        /> */}
              <LinearGradient
                colors={["#943e3e", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: 29,
                  width: 120,
                  alignSelf: "flex-end",
                  top: "-2%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("3.3%"),
                  }}
                >
                  {"TOTAL"}
                </Text>
              </LinearGradient>
            </View>
          </View>

        <View>


          <View style={{ flexDirection: "row",alignSelf:"center" }}>
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
                {"AREA SALES MANAGER"}
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical:"center",
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
          </View>

          <View style={{ flexDirection: "row", marginTop: hp("0%") }}>
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
                {"SALES EXECUTIVE"}
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#c07700", "#c07700"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 8,
                  // fontWeight: "bold",
                }}
              >
                {"01"}
              </Text>
            </LinearGradient>
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

  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectUserModal);
