import LocalActions from "App/Stores/LocalExpense/Actions";
import Colors from "App/Theme/Colors";
import { Tab, Tabs, Icon, Container } from "native-base";
import React, { Component } from "react";
import { ApplicationStyles } from "App/Theme";
import { connect } from "react-redux";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GenericIcon from "App/Components/GenericIcon";
import WhiteButton from "App/Components/WhiteButton";
import Communication from "./Tabscreens/Communication";
import Financial from "./Tabscreens/Financial";
import Tax from "./Tabscreens/Tax";
import BankDetail from "./Tabscreens/BankDetail";
import KycTab from "./KycTab";
import RetailersActions from "App/Stores/Retailers/Actions";
import Document from "./Tabscreens/Document";
import menuActions from "App/Stores/Menu/Actions";
import { removeItemFromCart } from "../../../Sagas/VisitsSaga";
import userActions from "../../../Stores/User/Actions";
import CommonActions from "../../../Stores/Common/Actions";

import { HelperService } from "../../../Services/Utils/HelperService";
import _ from "lodash";
import AttachmentModal from "../AttachmentModal/index";
class KYCForm extends Component {
  componentDidMount() {
    const { fetchCurrentLocation } = this.props;
    fetchCurrentLocation();
  }
  componentWillUnmount() {
    this.props.clearForm();
    this.props.clearimageform();
    this.props.changeSearchFilters({
      edited_field: "selectedTab",
      edited_value: 0,
    });
  }
  async updateLocation() {
    // console.log("hiii");
    const { selectedRetailer, token, successdata } = this.props;
    // const { id, data } = selectedRetailer;
    // console.log(data,id,"ffffff")
    this.props.updateRetailerLocationLoading();
    let location = await HelperService.requestLocation();
    if (location == "DENIED") {
      Alert.alert(
        "Location permission is required to proceed.",
        "Go App Permissions and Turn on Location Permission for Re-Konekt."
      );
      this.props.updateRetailerLocationLoadingStop(); // stops btn loading
      return;
    } else if (!location) {
      this.props.updateRetailerLocationLoadingStop();
      return;
    }

    this.props.updateRetailerLocation({
      recordID: successdata.results[0].id,
      Latitude: String(location.latitude),
      Longitude: String(location.longitude),
      token: token,
      // "Sector 17 Bus Stand Road Chandigarh 160022 India"
    });
  }

  submit() {
    // console.log("communicaton",params);
    const {
      form,
      token,
      createonboarding,
      loader,
      userdetail,
      successdata,
      fetchCurrentLocation,
    } = this.props;
    fetchCurrentLocation();
    Alert.alert(
      "Submit OnBoarding Form",
      "Do you want to Submit this OnBoarding Form?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: () => {
            // if(form.panNumber&&form.panNumber.length == 10){
            //   if(form.aadhar&&form.aadhar.length == 12){
            createonboarding({
              form: {
                records: [
                  {
                    attributes: { type: "Account", referenceId: "ref1" },
                    Prospect_Type__c: form.Prospect_Type__c,
                    Name: form.Name,
                    Customer_Vertical__c: form.Customer_Vertical__c,
                    Bank_Name__c: form.Bank_Name__c,
                    Bank_Account_Number__c: form.Bank_Account_Number__c,
                    Bank_Guarantee__c: form.Bank_Guarantee__c,
                    Amount__c: form.Amount__c,
                    Sub_Category__c: "PROSPECT- PRIMARY",
                    Area_Master__c: form.Area_Master__c,
                    City_Master__c: form.City_Master__c,
                    District__c: form.District__c,
                    Branch_Code__c: form.Branch_Code__c,
                    Address1__c: form.Address1__c,
                    Branch_Manager__c: userdetail.ManagerId,
                    Branch_Head__c: userdetail.ManagerId,
                    Branch_Accountant__c:
                      userdetail.Employees__r &&
                      userdetail.Employees__r.records[0] &&
                      userdetail.Employees__r.records[0].Branch_Accountant__c
                        ? userdetail.Employees__r.records[0]
                            .Branch_Accountant__c
                        : "",
                    FSO_Name__c: userdetail.Id,
                    Address2__c: form.Address2__c,
                    Address__c: form.Address__c,
                    Phone: form.Phone,
                    Mobile__c: form.Mobile__c,
                    WEB_address__c: form.WEB_address__c,
                    PERCENTAGE_OF_LUCAS_TVS__c: form.PERCENTAGE_OF_LUCAS_TVS__c,
                    PERCENTAGE_OF_LISPART__c: form.PERCENTAGE_OF_LISPART__c,
                    PERCENTAGE_OF_FIE_PARTS__c: form.PERCENTAGE_OF_FIE_PARTS__c,
                    PAN_No__c: form.PAN_No__c,
                    Aadhar_No__c: form.Aadhar_No__c,
                    GST_No__c: form.GST_No__c,
                    Email__c: form.Email__c,
                    Credit_Score__c: form.Credit_Score__c,
                    Trade_license_where_applicable__c:
                      form.Trade_license_where_applicable__c,
                    own_primesis__c: form.own_primesis__c,
                    Does_he_has_own_vehicle_2WH_4WH__c:
                      form.Does_he_has_own_vehicle_2WH_4WH__c,
                    Are_you_dealing_with_other_brand__c:
                      form.Are_you_dealing_with_other_brand__c,
                    Approximate_volume_of_business_of_other__c:
                      form.Approximate_volume_of_business_of_other__c,
                    Three_year_GSTIN_history__c:
                      form.Three_year_GSTIN_history__c,
                    Disc_applicable_2_WH__c: form.Disc_applicable_2_WH__c,
                    Disc_applicable_SFL__c: form.Disc_applicable_SFL__c,
                    Existing_Code_with_vertical_details__c:
                      form.Existing_Code_with_vertical_details__c,
                    Disc_Applicable_Others__c: form.Disc_Applicable_Others__c,
                    LTVS_Monthly_volume__c: form.LTVS_Monthly_volume__c,
                    DTVS_Monthly_volume__c: form.DTVS_Monthly_volume__c,
                    L_O_Monthly_volume__c: form.L_O_Monthly_volume__c,
                    X2WH_Monthly_volume__c: form.X2WH_Monthly_volume__c,
                    Battery_Monthly_volume__c: form.Battery_Monthly_volume__c,
                    Lube_Monthly_volume__c: form.Lube_Monthly_volume__c,
                    Service_Monthly_volume__c: form.Service_Monthly_volume__c,
                    Others_Monthly_volume__c: form.Others_Monthly_volume__c,
                    Nationality_Proof_Voter_id_Aadhar__c:
                      form.Nationality_Proof_Voter_id_Aadhar__c,
                    Identity_Proof_PAN_Driving_license__c:
                      form.Identity_Proof_PAN_Driving_license__c,
                    Address_Proof_GSTIN_EB_Latest_receipt__c:
                      form.Address_Proof_GSTIN_EB_Latest_receipt__c,
                    Billing_Details_name_address_details__c:
                      form.Billing_Details_name_address_details__c,
                    Contact_Details__c: form.Contact_Details__c,
                    Alternate_Contact_Details__c:
                      form.Alternate_Contact_Details__c,
                    GST_certificate_ITR_filing_3yrs_if_not_a__c:
                      form.GST_certificate_ITR_filing_3yrs_if_not_a__c,
                    Security_cheque__c: form.Security_cheque__c,
                    dealer_agreement__c: form.dealer_agreement__c,
                    Portal_agreement__c: form.Portal_agreement__c,
                    Overall_Status__c: "Draft",
                  },
                ],
              },

              token,
            });
            // fetchCurrentLocation()
            // this.updateLocation()
          },
        },
      ],
      { cancelable: false }
    );
  }
  update() {
    // console.log("communicaton",params);
    const {
      form,
      token,
      imageform,
      updateboarding,
      loaderr,
      userdetail,
      successdata,
      UploadImage,
    } = this.props;

    // if (!_.isEmpty(imageform)) {
    //   UploadImage({
    //     token,
    //     form: {
    //       batchRequests: [
    //         {
    //           method: "PATCH",
    //           url: "v34.0/sobjects/On_Boarding__c/" + form.Id,
    //           richInput: imageform,
    //         },
    //         {
    //           method: "GET",
    //           url: "v34.0/sobjects/On_Boarding__c/" + form.Id + "?fields=id",
    //         },
    //       ],
    //     },
    //   });
    // }

    Alert.alert(
      "Update OnBoarding Form",
      "Do you want to update this OnBoarding details?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Submit",
          onPress: () =>
            updateboarding({
              form: {
                batchRequests: [
                  {
                    method: "PATCH",
                    url: "v45.0/sobjects/Account/" + form.Id,
                    richInput: {
                      Prospect_Type__c: form.Prospect_Type__c,
                      Name: form.Name,
                      Customer_Vertical__c: form.Customer_Vertical__c,
                      Bank_Name__c: form.Bank_Name__c,
                      Bank_Account_Number__c: form.Bank_Account_Number__c,
                      Bank_Guarantee__c: form.Bank_Guarantee__c,
                      Amount__c: form.Amount__c,
                      Sub_Category__c: "PROSPECT- PRIMARY",
                      Area_Master__c: form.Area_Master__c,
                      City_Master__c: form.City_Master__c,
                      District__c: form.District__c,
                      Branch_Code__c: form.Branch_Code__c,
                      Address1__c: form.Address1__c,
                      Branch_Manager__c: userdetail.ManagerId,
                      Branch_Head__c: userdetail.ManagerId,
                      Branch_Accountant__c:
                        userdetail.Employees__r &&
                        userdetail.Employees__r.records[0] &&
                        userdetail.Employees__r.records[0].Branch_Accountant__c
                          ? userdetail.Employees__r.records[0]
                              .Branch_Accountant__c
                          : "",
                      FSO_Name__c: userdetail.Id,
                      Address2__c: form.Address2__c,
                      Address__c: form.Address__c,
                      Phone: form.Phone,
                      Mobile__c: form.Mobile__c,
                      WEB_address__c: form.WEB_address__c,
                      PERCENTAGE_OF_LUCAS_TVS__c:
                        form.PERCENTAGE_OF_LUCAS_TVS__c,
                      PERCENTAGE_OF_LISPART__c: form.PERCENTAGE_OF_LISPART__c,
                      PERCENTAGE_OF_FIE_PARTS__c:
                        form.PERCENTAGE_OF_FIE_PARTS__c,
                      PAN_No__c: form.PAN_No__c,
                      Aadhar_No__c: form.Aadhar_No__c,
                      GST_No__c: form.GST_No__c,
                      Credit_Score__c: form.Credit_Score__c,
                      Email__c: form.Email__c,
                      Trade_license_where_applicable__c:
                        form.Trade_license_where_applicable__c,
                      own_primesis__c: form.own_primesis__c,
                      Does_he_has_own_vehicle_2WH_4WH__c:
                        form.Does_he_has_own_vehicle_2WH_4WH__c,
                      Are_you_dealing_with_other_brand__c:
                        form.Are_you_dealing_with_other_brand__c,
                      Approximate_volume_of_business_of_other__c:
                        form.Approximate_volume_of_business_of_other__c,
                      Three_year_GSTIN_history__c:
                        form.Three_year_GSTIN_history__c,
                      Disc_applicable_2_WH__c: form.Disc_applicable_2_WH__c,
                      Disc_applicable_SFL__c: form.Disc_applicable_SFL__c,
                      Existing_Code_with_vertical_details__c:
                        form.Existing_Code_with_vertical_details__c,
                      Disc_Applicable_Others__c: form.Disc_Applicable_Others__c,
                      LTVS_Monthly_volume__c: form.LTVS_Monthly_volume__c,
                      DTVS_Monthly_volume__c: form.DTVS_Monthly_volume__c,
                      L_O_Monthly_volume__c: form.L_O_Monthly_volume__c,
                      X2WH_Monthly_volume__c: form.X2WH_Monthly_volume__c,
                      Battery_Monthly_volume__c: form.Battery_Monthly_volume__c,
                      Lube_Monthly_volume__c: form.Lube_Monthly_volume__c,
                      Service_Monthly_volume__c: form.Service_Monthly_volume__c,
                      Others_Monthly_volume__c: form.Others_Monthly_volume__c,
                      Nationality_Proof_Voter_id_Aadhar__c:
                        form.Nationality_Proof_Voter_id_Aadhar__c,
                      Identity_Proof_PAN_Driving_license__c:
                        form.Identity_Proof_PAN_Driving_license__c,
                      Address_Proof_GSTIN_EB_Latest_receipt__c:
                        form.Address_Proof_GSTIN_EB_Latest_receipt__c,
                      Billing_Details_name_address_details__c:
                        form.Billing_Details_name_address_details__c,
                      Contact_Details__c: form.Contact_Details__c,
                      Alternate_Contact_Details__c:
                        form.Alternate_Contact_Details__c,
                      GST_certificate_ITR_filing_3yrs_if_not_a__c:
                        form.GST_certificate_ITR_filing_3yrs_if_not_a__c,
                      Security_cheque__c: form.Security_cheque__c,
                      dealer_agreement__c: form.dealer_agreement__c,
                      Portal_agreement__c: form.Portal_agreement__c,
                      Overall_Status__c: form.Overall_Status__c,
                    },
                  },
                  {
                    method: "GET",
                    url: "v34.0/sobjects/Account/" + form.Id + "?fields=id",
                  },
                ],
              },
              token,
            }),
        },
      ],
      { cancelable: false }
    );
  }

  render() {
    const {
      form,
      createonboarding,
      loader,
      updateboarding,
      loaderr,
      isAttachmentVisible,
      hideAttachmentModal
    } = this.props;
    // const { show } = this.props.navigation.state.params;
   
    // console.log("fhfhfgfhgh",show);

    let selectedTabNode = [];
    console.log(this.props.searchFilters["selectedTab"], "hhhhgfasdfvgb");
    switch (this.props.searchFilters["selectedTab"]) {
      case 0:
        selectedTabNode = <Communication  />;
        break;
      case 1:
        selectedTabNode = <Financial  />;
        break;
      case 2:
        selectedTabNode = <Tax  />;
        break;
      case 3:
        selectedTabNode = <BankDetail />;
        break;
      case 4:
        // selectedTabNode = <Document shows={show} />;
        selectedTabNode = <Document  />;

        break;
    }

    return (
      <View>
        <View style={Styles.head}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity transparent>
              <GenericIcon
                name={"arrow-back"}
                onPress={NavigationService.goback}
                style={{
                  color: Colors.white,
                  fontSize: wp("8%"),
                  marginLeft: hp("1"),
                  marginTop: hp("1"),
                }}
              />
            </TouchableOpacity>
            <View style={{ marginTop: hp("1"), marginLeft: wp("2") }}>
              <Text style={Styles.t1}>
                {"Contractor "}
                <Text style={Styles.t3}>Application Form</Text>{" "}
              </Text>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              marginTop: hp("1"),
              marginLeft: hp("1"),
            }}
          >
            <WhiteButton
              style={{
                height: hp("4%"),
                margin: 5,
                marginLeft: wp("10"),
                width: wp("22%"),
                borderRadius: 4,
              }}
              title={show == false ? "Submit" : "Update"}
              // onPress={() => {
              //   show == false ? this.submit() : this.update();
              // }}
              // onPress={() => {
              //   HelperService.showToast({ message: 'Geo Location captured Successfully.', duration: 1000, buttonText: '' });
              // }}
              loading={show == false ? loader : loaderr}
              textStyle={{ color: Colors.primary, fontSize: wp("3") }}
            ></WhiteButton>
            {/* <WhiteButton style={{ height: hp('4%'), margin: 5, marginLeft: wp('5'), width: wp('39%'),borderRadius:4 }}
                                title={'Pending for approval'}
                                textStyle={{ color: Colors.primary, fontSize: 10 }}
                            ></WhiteButton> */}
          {/* </View> */} 
        </View>
        {/* <View style={{backgroundColor:"pink",height:hp("100%")}}> */}
          {/* <ScrollView> */}
          {/* <KycTab shows={show} /> */}
          {/* </ScrollView> */}
        {/* </View> */}

        <AttachmentModal
        isVisible={isAttachmentVisible}
        onCloseModal={()=>hideAttachmentModal()}
        
        />

{/* <ObjectiveModal
isVisible={isObjModalVisible}
onCloseModal={() => hideObjectiveModal()}
/> */}
        {/* <View>
                </View> */}
        {/* <View>{selectedTabNode}</View> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // type: state.local.type
  searchFilters: state.user.searchFilters,
  form: state.menu.createOnboardinglist,
  successdata: state.menu.ASuccessfulOnboarding,
  token: state.user.token,
  loader: state.menu.createOnboardingLoading,
  loaderr: state.menu.UpdateOnboardingLoading,
  imageform: state.menu.imageform,
  userdetail: state.startday.userDetailList,
  isAttachmentVisible:state.common.isAttachmentVisible,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
  clearForm: () => dispatch(menuActions.clearOnboardingList()),
  clearimageform: () => dispatch(menuActions.clearImageList()),
  updateboarding: (params) => dispatch(menuActions.UpdateOnboarding(params)),
  changeSearchFilters: (params) =>
    dispatch(userActions.updateSearchFilters(params)),
  UploadImage: (params) => dispatch(menuActions.UploadImage(params)),
  updateRetailerLocation: (params) =>
    dispatch(RetailersActions.updateRetailerLocation(params)),
  updateRetailerLocationLoading: () =>
    dispatch(RetailersActions.updateRetailerLocationLoading()),
  updateRetailerLocationLoadingStop: () =>
    dispatch(RetailersActions.updateRetailerLocationLoadingStop()),
  fetchCurrentLocation: () => dispatch(CommonActions.fetchCurrentLocation()),
  hideAttachmentModal: () => dispatch(CommonActions.hideAttachmentModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(KYCForm);

const Styles = StyleSheet.create({
  head: {
    height: hp("14%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  t1: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  t3: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "black",
  },
  t2: {
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#343434",
  },
  tt: {
    flexDirection: "row",
    height: hp("5%"),
    backgroundColor: "white",
    width: wp("85%"),
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  card: {
    height: hp("22%"),
    marginVertical: 20,
    width: wp("90%"),
    borderWidth: 0,
    elevation: 3,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
  },
});
