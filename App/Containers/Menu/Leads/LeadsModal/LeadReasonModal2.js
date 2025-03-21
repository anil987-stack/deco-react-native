import React, { Component } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
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
import SearchableDropdown from "App/Components/SearchableDropdown";

class LeadReasonModal extends React.Component {
  state = {
    button: "",
  };
  // componentDidMount() {
  //   this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  // }

  // goTo(screen) {
  //   NavigationService.navigate(screen);
  // }

  render() {
    const { form, changeForm } = this.props;

    return (
      <View style={{ ...Style.box1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View style={{ ...Style.buttonBox }}>
          <Text style={{ ...Style.header, ...Style.titleText }}>
            {"Fill the appropriate reason for "}
            <Text
              style={{
                ...Style.header,
                ...Style.titleText,
                fontWeight: "bold",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "NO SUPPLY"
            </Text>
          </Text>
          <View style={{ height: "20%", marginTop: wp("0") }}>
            <SearchableDropdown
              //   dataSource={options1}
              //   placeHolderText={"Select Project Type"}
              // dropstyle={{
              // left: "4%",
              // width: wp("3"),
              // height: wp("2"),
              // marginTop: "3%",
              // }}
              //   selectedValue={form.Secondary_No_Whatsapp}
              //   onChange={(value) =>
              //     this.props.changeForm({
              //       edited_field: "Secondary_No_Whatsapp",
              //       edited_value: value,
              //     })
              //   }
              placeholder={"Type or Select Project Type"}
              invalid={false}
              customPickerStyles={{ ...Style.picker }}
              labelStyles={{ ...Style.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View
            style={{
              height: "4%",
              marginTop: wp("6"),
              flexDirection: "row",
              justifyContent: "space-around",
              paddingLeft: wp("6%"),
              paddingRight: wp("6%"),
            }}
          >
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("40%"),
                borderColor: "transparent",
                alignSelf: "center",
              }}
              placeholderTextColor="grey"
              placeholder={"Competition"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("40%"),
                borderColor: "transparent",
                alignSelf: "center",
              }}
              placeholderTextColor="grey"
              placeholder={"Rate"}
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

          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                // this.props.closeModal(),
                //   NavigationService.navigate("EndDayScreen");
                this.setState({ button: "Reject" });
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
export default connect(mapStateToProps, mapDispatchToProps)(LeadReasonModal);

const Style = StyleSheet.create({
  box: {
    // backgroundColor: Colors.white,
    // color: Colors.error,
    display: "flex",
    flex: 1,
    // justifyContent: 'center',
    padding: Metrics.tiny,
    // textAlign: 'center',
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
  },

  box1: {
    display: "flex",
    flex: 1,
    padding: Metrics.tiny,
    fontFamily: ApplicationStyles.textMsgFont,
    // backgroundColor: Colors.white,
  },

  header: {
    // marginBottom: 300,
    fontSize: wp("5.5%"),
    fontFamily: "HelveticaNeue_CondensedBold",
    color: "white",
    alignSelf: "auto",
    alignSelf: "center",
    marginTop: 20,
  },
  clr: {
    color: Colors.subtitle,
  },
  clr1: {
    color: Colors.white,
    alignSelf: "center",
    letterSpacing: 1,
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: 12,
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },

  buttons1: {
    marginTop: 30,
    width: wp("30%"),
    borderRadius: 7,
    height: hp("6%"),

    borderColor: Colors.primary,
    borderWidth: 1,
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  mb10: {
    marginBottom: 65,
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 110,
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  wish: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    marginTop: 5,
    marginLeft: 20,
  },
  line: {
    marginLeft: 20,
    marginTop: -10,
    borderBottomWidth: 3,
    width: 180,
  },
  titleText: {
    marginTop: "20%",
    fontSize: wp("6.4%"),
    // alignSelf:'baseline',
    marginHorizontal: 25,
    flexWrap: "wrap",
    marginTop: "4%",
    textAlign: "center",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
    marginTop: hp("34%"),
  },
  buttonBox: {
    marginTop: wp("15%"),
    // backgroundColor:Colors.white,
    // width: '100%',
    // height:hp('45'),
    // marginTop:hp('25.9%')
  },
  picker: {
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("84%"),
    borderWidth: 0.8,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    // marginTop: 5,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
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
});
