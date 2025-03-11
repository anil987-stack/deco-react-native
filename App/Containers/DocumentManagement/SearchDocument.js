import React, { Component } from "react";
import { View, Alert, TouchableOpacity, TextInput, CheckBox } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
// import Style from "./PresentScreenStyle";
import SearchableDropdown from "App/Components/SearchableDropdown";
import SearchBar from "App/Components/SearchBar";
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
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import CheckBoxContainer from "../../../../Components/Checkox/Checkbox";
class SearchDocument extends React.Component {
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

       

        <View>
         

         
          <View style={{ alignSelf: "center" , marginTop:wp("20%"),}}>
            <Text
              style={{
                ...Styles.text,
                marginLeft: wp("0%"),
              }}
            >
              {"DOCUMENT NAME"}
            </Text>

            <View
              style={{
                borderColor: "grey",
                borderBottomWidth: wp(".20%"),
                width: wp("90%"),
                borderRadius: 8,
                marginLeft: wp("0%"),
                height: hp("4.25%"),
                marginTop: hp("2.5%"),
              }}
            >
              <SearchBar ContainerStyles={Styles.searchContainer} />
            </View>
          </View>
          
          
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginLeft: wp("10%"),
              marginTop: wp("20%"),
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchDocument);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
    alignItems:'flex-start',
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
    elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    marginTop: wp("3%"),
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
    marginLeft: wp("53%"),
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    padding: 10,
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
  searchContainer: {
    // paddingVertical: 21,
    width: "100%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor: "transparent",
    fontSize: wp("3.8%"),
    fontWeight: "700",

    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "-0.5%",
    height: hp("4.5%"),

    borderWidth: 1,
    marginLeft: "-0.5%",

    borderColor: "#bfbfbf",
    opacity: 0.3,
    // padding
  },
});
