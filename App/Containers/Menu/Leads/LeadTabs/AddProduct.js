import React, { Component } from "react";
import { View, Alert, TouchableOpacity, TextInput, CheckBox } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
// import Style from "./PresentScreenStyle";
import SearchableDropdown from "App/Components/SearchableDropdown";

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
// import SelectUserModal from "../VisitsDisplayScreen/SelectUserModal";
// import AddArea from "./AddArea";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import CheckBoxContainer from "../../../../Components/Checkox/Checkbox";
class AddProduct extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm, closeModal, openModal, isSelected, setSelection } = this.props;

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
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text
              style={{
                ...Styles.text,
                marginLeft: wp("-5%"),
              }}
            >
              {"PRODUCT CATEGORY"}
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
              invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View style={{ flexDirection: "column", alignSelf: "center" , width:wp("80%")}}>
            <Text
              style={{
                ...Styles.text,
                marginLeft: wp("-5%"),
              }}
            >
              {"PRODUCT"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("83%"),
                //   left: wp("1%"),
                marginLeft: wp("-4.25%"),
                borderColor: "transparent",
                marginTop: hp("-1%"),

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>
          <View style={{ alignSelf: "center" , marginLeft:wp("-8%"), marginTop:hp("1%")}}>
            <Text
              style={{
                ...Styles.text,
                // left: wp("1.5%"),
              }}
            >
              {"ORDER QUANTITY"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("83%"),
                left: wp("1%"),

                borderColor: "transparent",

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>
          <View style={{}}>
        <Text style={{
            alignItems: "center",
            fontWeight: "bold",
            color: "white",
            fontFamily: "HelveticaNeue_CondensedBold",
            fontSize: wp("3%"),
            marginLeft: wp("-4%"),
            marginTop: hp("2%"),
            
        }}>MOCKUP</Text>
          <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={Styles.checkbox}
        />
        
                </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginLeft: wp("10%"),
              marginTop: wp("-2%"),
            }}
          ></View>
        </View>
        <TouchableOpacity
          style={{
            ...ApplicationStyles.formButton,
            alignSelf: "center",
            marginTop: hp("1%"),
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

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
    marginLeft: wp("-30%"),
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
