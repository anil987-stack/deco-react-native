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
import {StyleSheet} from 'react-native';
import SelectUserModal from "../VisitsDisplayScreen/SelectUserModal";
import AddArea from "./AddArea";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class AddScouting extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm, closeModal, openModal} = this.props;

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
                  fontSize: wp("3.75%"),
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginTop: "-20%",
                  width: wp("8.2%"),
                  height: hp("7.3%"),
                  left: wp("5%"),
                  zIndex: 20,
                  padding: 6,
                  // paddingTop: 6,
                }}
              >
                {"02"}
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
            
          </View>

        <View>


          <View style={{ flexDirection: "row",alignSelf:"center",marginLeft:wp("10%"), marginTop:wp('-2.75%') }}>
          <GenericIcon
            name={"plus-thick"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.7%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("6%"),
              padding: 3,
              marginLeft: wp("-11%"),
              // paddingLeft: wp(".85%"),
              // paddingTop: wp("1%"),
            }}
          />
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
            <FontAwesome5
            name={"minus"}
            // show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.3%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 4,
              marginLeft: wp("2%"),
              paddingLeft: wp("1.2%"),
              // paddingTop: wp("0.9%"),
            }}
          />
          </View>

          <View style={{ flexDirection: "row",alignSelf:"center",marginLeft:wp("10%"), marginTop:wp("-2%") }}>
          <GenericIcon
            name={"plus-thick"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.7%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 3,
              marginLeft: wp("-11%"),
              // paddingLeft: wp(".85%"),
              // paddingTop: wp("1%"),
            }}
          />
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
            <FontAwesome5
            name={"minus"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.3%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 4,
              marginLeft: wp("2%"),
              paddingLeft: wp("1.2%"),
              // paddingTop: wp("0.9%"),
            }}
          />
          </View>
          <View style={{ flexDirection: "row",alignSelf:"center",marginLeft:wp("10%"), marginTop:wp("-2%") }}>
          <GenericIcon
            name={"plus-thick"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.7%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 3,
              marginLeft: wp("-11%"),
              // paddingLeft: wp(".85%"),
              // paddingTop: wp("1%"),
            }}
          />
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
                {"RETAILER (ENROLLMENT)"}
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
            <FontAwesome5
            name={"minus"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.3%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 4,
              marginLeft: wp("2%"),
              paddingLeft: wp("1.2%"),
              // paddingTop: wp("0.9%"),
            }}
          />
          </View>
          <View style={{ flexDirection: "row",alignSelf:"center",marginLeft:wp("10%"), marginTop:wp("-2%") }}>
          <GenericIcon
            name={"plus-thick"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.7%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 3,
              marginLeft: wp("-11%"),
              // paddingLeft: wp(".85%"),
              // paddingTop: wp("1%"),
            }}
          />
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
                {"DISTRIBUTOR / DEALER (SCOUTING)"}
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
            <FontAwesome5
            name={"minus"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "#8B0000",
              fontSize: wp("5.3%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 50,
              width: wp("7%"),
              height: hp("3.7%"),
              marginTop: wp("5%"),
              padding: 4,
              marginLeft: wp("2%"),
              paddingLeft: wp("1.2%"),
              // paddingTop: wp("0.9%"),
            }}
          />
          </View>
          
        </View>
        <TouchableOpacity
            style={{ ...ApplicationStyles.formButton,
                alignSelf: 'center',
                marginTop: hp('1%'),
                maxHeight: hp('5%'),
                width:wp('34%'),
                elevation:18,
                borderRadius:10,
                paddingBottom:13,marginBottom:hp("4%")}}
            //  this.props.clear();
            onPress={() => {
                this.props.openModal({
                  content3: (
                    <AddArea
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "ADD AREA",
                  bodyFlexHeight3: 0.8,
                });
              }}
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
                {"NEXT"}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddScouting);
