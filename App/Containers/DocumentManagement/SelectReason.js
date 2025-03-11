import React, { Component } from "react";
import { View, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchableDropdown from "App/Components/SearchableDropdown";
// import Style from "./TravelStyle";
import Style from "App/Containers/Present/PresentScreenStyle";
import BlueButton from "../../Components/BlueButton";
import WhiteButton from "../../Components/WhiteButton";
import LayoutScreen from "../Layout/LayoutScreen";
import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "../../Components/WaveCurls/Wave";
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
class SelectReason extends React.Component {
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

        <View style={{ ...Style.buttonBox, marginTop: hp("7.5%") }}>
          <View>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
              marginTop: "6%",
              fontSize: wp("6.5%"),
              color: "white",
              fontFamily: "HelveticaNeue_CondensedBold",
            }}
          >
            Select the appropriate  
          </Text>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
            //   fontWeight: "bold",
              textAlign: "center",
              fontFamily: "HelveticaNeue_CondensedBold",
              marginTop: hp(".5%"),
              fontSize: wp("7%"),
            }}
          >
           reason from dropdown
          </Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" , marginTop:wp("3.6%"),marginLeft:wp("15%")}}>
            {/* <Text
              style={{
                ...Styles.text,
                marginLeft: wp("-5%"),
              }}
            >
              {"DOCUMENT TYPE"}
            </Text> */}

            <SearchableDropdown
              //   dataSource={options1}
                placeHolderText={"Select Reason"}
              dropstyle={{
                left: "4%",
                width: wp("3"),
                height: wp("3"),
                marginTop: "3%",
              }}
            
              placeholder ={"Select Reason"}
              invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <View style={{ alignSelf: "center", marginTop:wp("-8%") }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal();
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: "8%",
                  // borderColor: "grey",
                  // borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                    fontSize: 19,
                  }}
                >
                  {"SUBMIT"}
                </Text>
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

  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectReason);

const Styles = StyleSheet.create({
    text: {
      color: Colors.white,
      fontSize: wp("3%"),
      fontWeight: "bold",
      fontFamily: "HelveticaNeue_CondensedBold",
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
        // marginLeft: wp("-24%"),
        // opacity:0.8
      },
      pickerLabel: {
        color: "lightgrey",
        fontSize: 15,
        textAlign: "left",
        width: "97%",
        // padding: 10,
        // marginLeft: 15,
        flexDirection: "row",
        fontWeight: "100",
        marginTop: hp(".75%"),
      },
      placeholder: {
        color: "#bfbfbf",
        opacity: 0.5,
        fontFamily:"HelveticaNeue_CondensedBold",
        marginTop: hp("2%"),
      },
})