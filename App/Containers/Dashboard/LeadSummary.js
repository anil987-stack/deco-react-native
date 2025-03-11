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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LeadsPerformance from "../Retailers/Retailer360/LeadsPerformance/LeadsPerformance";
import { ScrollView } from "react-navigation";

class LeadSummary extends React.Component {
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

        <ScrollView>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
                {"LEAD SUMMARY"}
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
              //   onPress={()=>{ this.props.closeModal();NavigationService.navigate("Leads")}}
            >
              <GenericIcon
                name="info-outline"
                // show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  //   color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>

          <LeadsPerformance />

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "-127%",
            }}
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
                {"LEADS STAGE ANALYSIS"}
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
              //   onPress={()=>{ this.props.closeModal();NavigationService.navigate("Leads")}}
            >
              <GenericIcon
                name="info-outline"
                // show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  //   color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", width: wp("30%") }}>
            <View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"DISCUSSION ........"}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 10,
                  }}
                >
                  {"4590"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"ONGOING ............."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"4590"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"WON ....................."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"4250"}
                </Text>
              </View>
            </View>

<View style={{borderLeftWidth:3, borderLeftColor:"white",height:hp("12%"),marginTop:hp("2%"),marginLeft:hp("2.5%"),marginRight:wp("1.5%")}}/>
            <View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"DISCUSSION ........"}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    marginLeft:wp("-1%"),
                    fontWeight: "bold",
                    paddingTop: 8,
                  }}
                >
                  {"4590"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"ONGOING ........"}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"4509"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
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
                    {"WON ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"4565"}
                </Text>
              </View>
            </View>
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

  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LeadSummary);
