import React, { Component } from "react";
import { View, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchableDropdown from "App/Components/SearchableDropdown";

// import Style from "./TravelStyle";
import Style from "App/Containers/Present/PresentScreenStyle";
// import BlueButton from "../../Components/BlueButton";
// import WhiteButton from "../../Components/WhiteButton";
// import LayoutScreen from "../Layout/LayoutScreen";
// import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
// import Wave from "../../Components/WaveCurls/Wave";
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
// import SelectReason from "./SelectReason";
class MapNewInfluencer extends React.Component {
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
      <View style={{ ...Style.box1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View style={{ ...Style.buttonBox, marginTop: hp("7%") }}>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
              marginTop: "6%",
              fontSize: wp("6%"),
              color: "#bfbfbf",
              fontFamily: "HelveticaNeue_CondensedBold",
            }}
          >
            Please map an  
            <Text
              style={{
                ...Style.header,
                ...Style.titleText,
                fontWeight: "bold",
                textAlign: "center",
                fontStyle: "italic",
                marginTop: hp("-4%"),
              }}
            >
              "Influencer"
            </Text>
          </Text>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
              marginTop: wp("2%"),
              fontSize: wp("6%"),
              color: "#bfbfbf",
              fontFamily: "HelveticaNeue_CondensedBold",
            }}
          >
           from the dropdown
            </Text>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" , marginTop:wp("5%"), marginLeft:wp("-5%")}}>
            <Text
              style={{
                ...Styles.text,
                marginLeft: wp("10.5%"),
              }}
            >
              {"SELECT INFLUENCER"}
            </Text>

            <SearchableDropdown
              //   dataSource={options1}
              //   placeHolderText={"Select Project Type"}
              dropstyle={{
                left: "4%",
                width: wp("3"),
                height: wp("3"),
                marginTop: "3%",
              }}
            
              placeholder={"Type or Select Project Type"}
            //   invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <TouchableOpacity
          style={{
            ...ApplicationStyles.formButton,
            alignSelf: "center",
            marginTop: hp("2%"),
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
export default connect(mapStateToProps, mapDispatchToProps)(MapNewInfluencer);

const Styles = StyleSheet.create({
    text: {
      color: Colors.white,
      fontSize: wp("3%"),
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
      width: wp("85%"),
      borderWidth: 0.8,
      // elevation: 5,
      backgroundColor: "transparent",
      // height: hp('5.5%'),
      marginTop: 5,
      marginBottom: hp("2%"),
      fontSize: wp("2%"),
      justifyContent: "center",
      borderColor: "transparent",
      marginLeft: wp("-35%"),
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
    buttons: {
      // marginHorizontal: 60,
      marginTop: hp("1%"),
      width: wp("60%"),
      borderRadius: 28,
      height: hp("7%"),
      alignSelf: "center",
    },
    buttontextStyle: {
      textTransform: "uppercase",
      alignSelf: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
      marginTop: hp("-3.5%"),
      marginLeft: wp("-45%"),
    },
  });