import { CheckBox } from "native-base";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Colors from "App/Theme/Colors";
import BlueButton from "../../../../Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import { connect } from "react-redux";
import menuActions from "App/Stores/Menu/Actions";
import InputText from "App/Components/FormInput/InputText";
import ImagePicker from "App/Components/ImagePicker/ImagePick";
import MultipleImagePicker from "../../../../Components/ImagePicker/MultipleImagePicker";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import UserActions from "App/Stores/User/Actions";
// import ImageSlider from "../../../../Components/ImageSlider"
import CommonActions from "App/Stores/Common/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "../../../../Services/Utils/HelperService";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";
class Document extends Component {
  render() {
    const {
      form,
      changeForm,
      selectlist,
      image,
      openModal,
      imageform,
    } = this.props;

    let show = this.props.shows;
    console.log(form.Nationality_Proof_Voter_id_Aadhar__c, "kk");
    return (
      <ScrollView style={{ marginBottom: "20%", flex: 1 }}>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Nationality Proof (Voter id/Aadhar)
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>(Partner/Director) </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Nationality_Proof_Voter_id_Aadhar__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Nationality_Proof_Voter_id_Aadhar__c == true
                      ? false
                      : true;

                  changeForm({
                    edited_field: "Nationality_Proof_Voter_id_Aadhar__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Identity Proof(PAN/Driving license){" "}
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>Form duly filled </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Identity_Proof_PAN_Driving_license__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Identity_Proof_PAN_Driving_license__c == true
                      ? false
                      : true;
                  changeForm({
                    edited_field: "Identity_Proof_PAN_Driving_license__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Address Proof (GSTIN/EB Latest receipt)
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>Dealer in the firm </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Address_Proof_GSTIN_EB_Latest_receipt__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Address_Proof_GSTIN_EB_Latest_receipt__c == true
                      ? false
                      : true;
                  changeForm({
                    edited_field: "Address_Proof_GSTIN_EB_Latest_receipt__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Billing Details(name /address details)
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>With Application </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Billing_Details_name_address_details__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Billing_Details_name_address_details__c == true
                      ? false
                      : true;
                  changeForm({
                    edited_field: "Billing_Details_name_address_details__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                GST certificate-ITR filing-3yrs-if not available below
                Highlighted points to be captured{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={
                  form.GST_certificate_ITR_filing_3yrs_if_not_a__c == true
                }
                onPress={(event) => {
                  let updatedValue =
                    form.GST_certificate_ITR_filing_3yrs_if_not_a__c == true
                      ? false
                      : true;
                  changeForm({
                    edited_field: "GST_certificate_ITR_filing_3yrs_if_not_a__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Trade license where applicable
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>
                Security (Future Use){" "} */}
              {/* </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Trade_license_where_applicable__c == "Yes"}
                onPress={(event) => {
                  let updatedValue =
                    form.Trade_license_where_applicable__c == "Yes"
                      ? "No"
                      : "Yes";
                  changeForm({
                    edited_field: "Trade_license_where_applicable__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", width: wp("100"), top: wp("3") }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Security cheque
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>report approved(H.O) </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Security_cheque__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Security_cheque__c == true ? false : true;
                  changeForm({
                    edited_field: "Security_cheque__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: wp("100"),
              top: wp("3"),
              marginBottom: "15%",
            }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Dealer agreement
              </Text>
              {/* <Text style={{ fontSize: wp("3.9") }}>Memorandum </Text> */}
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.dealer_agreement__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.dealer_agreement__c == true ? false : true;
                  changeForm({
                    edited_field: "dealer_agreement__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View>

        {/* <View
          style={{
            justifyContent: "space-around",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: wp("100"),
              top: wp("3"),
              marginBottom: "10%",
            }}
          >
            <View style={{ flexDirection: "column", width: wp("62") }}>
              <Text
                style={{
                  fontSize: wp("3.9"),
                  fontWeight: "700",
                  color: Colors.primary,
                }}
              >
                Portal agreement
              </Text>
             
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <CheckBox
                style={{
                  borderRadius: 2,
                  marginTop: "13%",
                  borderColor: Colors.primary,
                  color: Colors.pink,
                  marginLeft: 4,
                }}
                checked={form.Portal_agreement__c == true}
                onPress={(event) => {
                  let updatedValue =
                    form.Portal_agreement__c == true ? false : true;
                  changeForm({
                    edited_field: "Portal_agreement__c",
                    edited_value: updatedValue,
                  });
                }}
              />
            </View>
          </View>
        </View> */}
      </ScrollView>
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
  imageform: state.menu.imageform,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
  // changeForm: (params) => dispatch(menuActions.changeImageForm(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
  GetImage: (params) => dispatch(UserActions.getImageOnboarding(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
  UploadImage: (params) => dispatch(menuActions.UploadImage(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Document);
const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },

  Card: {
    marginTop: "10%",
    elevation: 5,
    borderColor: "white",
    borderRadius: 5,
  },
  recurringActionButton: {
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: Colors.white,
    height: hp("5"),
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    marginRight: wp("6%"),
  },
  recurringActionButtonText: {
    color: Colors.primary,
    fontSize: wp("4%"),
    textTransform: "capitalize",
  },
  recurringActionButtonIcon: {
    color: Colors.primary,
    fontSize: wp("10%"),
  },
});
