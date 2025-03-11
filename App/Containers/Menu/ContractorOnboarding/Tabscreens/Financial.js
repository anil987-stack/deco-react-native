import { CheckBox, Radio } from "native-base";
import React, { Component } from "react";
import { Text, TextInput, View, ScrollView, StyleSheet } from "react-native";
import Colors from "App/Theme/Colors";
import BlueButton from "../../../../Components/BlueButton";
import { connect } from "react-redux";
import Styles from "./Style";
import menuActions from "App/Stores/Menu/Actions";
import UserActions from "App/Stores/User/Actions";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ApplicationStyles } from "../../../../Theme";
import IndicatorInputText from "../../../../Components/FormInput/IndicatorInputText";
import _ from "lodash";
const options1 = [
  { id: "Tile Dealer", name: "Tile Dealer" },
  { id: "Plumbing", name: "Plumbing" },
  { id: "Marbel", name: "Marbel" },
];
const creditLimit = [
  { id: "1", name: "1" },
  { id: "7", name: "7" },
  { id: "30", name: "30" },
  { id: "45", name: "45" },
  { id: "60", name: "60" },
  { id: "90", name: "90" },
];
const options2 = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
];
class Financial extends Component {
  componentDidMount() {
    const {
      GetImage,
      selectlist,
      token,
      form,
      getcityList,
      userid,
      changeSearchFilters,
    } = this.props;
    // changeSearchFilters({ edited_field: 'selectedTab', edited_value: 1 })
  }
  validateGstNumber(value) {
    // console.log("vaueeee",value);
    let error;
    if (!value) {
      error = "";
    } else if (
      !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)
    ) {
      error = "Invalid GST Number";
    } else {
      // console.log("gggggg",error);
      return error;
    }
    return error;
  }

  validateAadhaar(value) {
    let error;
    if (!value) {
      error = "";
    } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
      error = "Invalid Aadhaar Number";
    }
    return error;
  }
  validatePan(value) {
    let error;

    if (!value) {
      error = "";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
      error = "Invalid PAN Number";
    }
    return error;
  }
  render() {
    const { form, changeForm, selectlist } = this.props;
    let show = this.props.shows;
    console.log(form.Bank_Guarantee__c);
    return (
      <ScrollView style={{ marginBottom: hp("27%") }}>
        <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Account Code</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Account Code"}
                value={form.Account_Code}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Account_Code",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Account Name</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Account Name"}
                value={form.Account_Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Account_Name",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Account Type</Text>
            <SearchableDropdown
              // dataSource={options1}
              placeHolderText={"Select Account Type"}
              selectedValue={form.Account_Type}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Account_Type",
                  edited_value: value,
                })
              }
              placeholder={"Type or Select Account Type"}
              invalid={false}
              customPickerStyles={{ ...Styles.picker,left:wp("3%") }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Aadhar Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Aadhar Number"}
                value={form.Aadhar_No__c}
                onChange={(value) => {
                  if (form.Aadhar_No__c) {
                    changeForm({
                      edited_field: "Aadhar_No__c",
                      edited_value: value,
                    });
                  } else {
                    if (value > 3) {
                      changeForm({
                        edited_field: "Aadhar_No__c",
                        edited_value: value,
                      });
                    }
                  }
                }}
                maxLength={12}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <Text style={{ color: "red", left: wp("5.5%") }}>
            {this.validateAadhaar(form.Aadhar_No__c)
              ? ""
              : "Invalid Aadhaar No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Pan Number</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Pan Numbe"}
                value={form.PAN_No__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "PAN_No__c",
                    edited_value: value,
                  })
                }
                maxLength={10}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
              {form.PAN_No__c?<Text style={{ color: "red" }}>
              {this.validatePan(form.PAN_No__c)}
            </Text>:[]}
            </View>
          </View>
          {/* <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validatePhoneNumber(form.Phone) ? "" : "Invalid Phone No."}
          </Text> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Voter ID</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Voter ID"}
                value={form.Voter_ID}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Voter_ID",
                    edited_value: value,
                  })
                }
                maxLength={10}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Driving License</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Driving License"}
                value={form.Driving_License}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Driving_License",
                    edited_value: value,
                  })
                }
                maxLength={10}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          {/* <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateDrivingLicense(form.Driving_License)
              ? ""
              : "Invalid Driving License No."}
          </Text> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Bank Name</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Bank Name"}
                value={form.Bank_Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Bank_Name",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          {/* <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateEmail(form.Email__c) ? "" : "Invalid Email-Id"}
          </Text> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Bank Account No.</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Bank Account No."}
                value={form.Account_No}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Account_No",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Branch</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Branch"}
                value={form.Branch}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Branch",
                    edited_value: value,
                  })
                }
                maxLength={6}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>IFSC Code</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter IFSC Code"}
                value={form.IFSC_Code}
                onChange={(value) =>
                  changeForm({
                    edited_field: "IFSC_Code",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  picker: {
    borderRadius: 0,
    width: "92%",
    height: hp("4.5%"),
    elevation: 2,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 5,
    marginLeft: 5,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  pickerLabel: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    fontSize: wp("3.9"),
    fontWeight: "bold",
    flexDirection: "row",
  },
});
const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  form: state.menu.createOnboardinglist,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
  changeSearchFilters: (params) =>
    dispatch(UserActions.updateSearchFilters(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Financial);
