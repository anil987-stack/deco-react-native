import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Styles from "./FormStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import Colors from "App/Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "App/Components/SearchableDropdown";
import IndicatorInputText from "App/Components/FormInput/IndicatorInputText";
import { CheckBox, Radio } from "native-base";
import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
import MenuActions from "../../../Stores/Menu/Actions";
import { HelperService } from "../../../Services/Utils/HelperService";
const options1 = [
  { id: "Saving", name: "Saving" },
];
const MechanicType = [
  { id: "AE- CV", name: "AE- CV" },
  { id: "PCV", name: "PCV" },
  { id: "Tractor", name: "Tractor" },
  { id: "All/FIE - Rotary", name: "All/FIE - Rotary" },
  { id: "CR", name: "CR" },
  { id: "JCB", name: "JCB" },
  { id: "Inline/Engine- CV", name: "Inline/Engine- CV" },
  { id: "All", name: "All" },
];

const options2 = [
  { id: "AUTHORISED SERVICE DEALER", name: "AUTHORISED SERVICE DEALER" },
  { id: "AUTHORISED SERVICE PROVIDERS", name: "AUTHORISED SERVICE PROVIDERS" },
  { id: "COCO CORE", name: "COCO CORE" },
  { id: "COLLECTION POINT", name: "COLLECTION POINT" },
  { id: "COPRATES & PRIVATE", name: "COPRATES & PRIVATE" },

  { id: "Export", name: "Export" },
  { id: "DEALER", name: "DEALER" },
  { id: "FLEET CUSTOMER", name: "FLEET CUSTOMER" },
  { id: "GOVT UNDERTAKINGS", name: "GOVT UNDERTAKINGS" },
  { id: "STU", name: "STU" },
  { id: "GROUP", name: "GROUP" },
  { id: "OEM", name: "OEM" },
  { id: "LITS", name: "LITS" },
  { id: "LIS WORKSHOP", name: "LIS WORKSHOP" },
  { id: "LAD", name: "LAD" },
  { id: "IMD", name: "IMD" },
  { id: "OES", name: "OES" },
  { id: "Public Sector", name: "Public Sector" },
  { id: "TRADERS", name: "TRADERS" },
  { id: "NEUTRAL WORKSHOP", name: "NEUTRAL WORKSHOP" },
];

class Financial extends Component {
  getDistributor() {
    const { retailersList } = this.props;
    // console.log("listttt", list);
    let distributor = [];
    if (retailersList && retailersList.length) {
      retailersList.map((obj) => {
        if (
          {
            id: obj.Id,
            name: obj.Name,
          }
        ) {
          distributor.push({
            id: obj.Id,
            name: obj.SAP_Customer_No__c
              ? obj.Name + " " + `(${obj.SAP_Customer_No__c})`
              : obj.Name,
          });
        }
      });
    }
    return distributor;
  }
  validatePhoneNumber(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    ) {
      error = false;
    }
    return error;
  }

  validateAadhaar(value) {
    let error = true;
    if (!value) {
      error = true
    }
    else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
      error = false;
    }
    return error;
  }

  validateGstNumber(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (
      !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)
    ) {
      error = false;
    }
    return error;
  }

  // validateAadhaar(value) {
  //   let error;
  //   if (!value) {
  //     error = "";
  //   } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
  //     error = "Invalid Aadhaar Number";
  //   }
  //   return error;
  // }

  validateEmail(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = false;
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
    const { changeForm, form, retailersList, area,Id } = this.props;

    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            top: "2%",
            marginBottom: "10%",
          }}
        >
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Account Code</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
              dataSource={options1}
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
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Aadhar Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateAadhaar(form.Aadhar_No__c)
              ? ""
              : "Invalid Aadhaar No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Pan Number</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validatePhoneNumber(form.Phone) ? "" : "Invalid Phone No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Voter ID</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
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
        
          {/* {Id==false?<View style={{ width: "90%", marginLeft: 0,marginTop: hp("2%") }}>
              <Text style={{ ...Styles.text, left: wp("1.5%"),color:Colors.primary }}
              onPress={()=>NavigationService.navigate('CampaignAttachmentScreen',{type:'Doc',ID:form})}
              >
                Attachment
              </Text>
            </View>:[]} */}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  form: state.menu.kycform,
  token: state.user.token,
  retailersList: state.retailers.retailersList,
  area: state.common.TerritoryAllList,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(MenuActions.changeKycForm(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Financial);

// "Workshop_name__c":"test",
// "Phone":"7868767574",
// "Alternate_WhatsApp_No__c":"7695794652",
// "Whatsapp_Number__c":"8746464656",
// "Email__c":"abc@gmail.com",
// "Type__c":"fleet",
// "Address__c":"test",
// "PIN_CODE__c":"110099",
// "Aadhar_No__c":"23564677",
// "Points_Punch__c":"Yes",
// "Mechanic_Type__c":"JCB",
// "Registered_under__c":"MLP",
// "FSO_Name__c":"0055g00000C5wwSAAR",
// "Health_Status_Full_Family__c":"TEST",
// "Monthly_Offtake_Fitment_Value_in_Lacs__c":"890",
// "Category__c":"CV",
// "LTVS_Value__c":"899",
// "Filters_LTVS_DTVS__c":"90",
// "SFL_Value__c":"987",
// "Battery_Value__c":"7976",
// "Lubes_Value__c":"088",
// "Lispart_Value__c":"987",
// "DTVS_Value__c":"56",
// "AE_items1__c":"a0F0p000003Ofa0EAC",
// "Value_AE_items1__c":"90",
// "AE_items2__c":"a0F0p000003Ofa5EAC",
// "Value_AE_items2__c":"90",
// "Brand_Battery__c":"a0F0p000003OfaAEAS" ,
// "Value_Battery__c":"890",
// "Brand_2_3_Wheel_ranges__c" :"a0F0p000003OfaKEAS",
// "Value_2_3_Wheel_ranges__c":"76686",
// "Which_products_you_like_deal_in_Future__c":"TEST",
// "What_s_your_view_on_LIS_product_Quality__c" :"NO",
// "Any_Quality_issue_with_product_Part_No__c" :"WYIRY",
// "Weekly_Holiday__c":"SDDERE",
// "Have_you_got_all_you_settlement__c":"Yes",
// "Reason_for_not_recieving_gifts__c":"sadd",
// "Suggestions_on_New_Product_launch__c":"tnn",
// "Overall_Feedback_about_LIS_LAD_concept__c":"ytt",
// "Other_category__c":"text",
// "GSTIN_No__c":"56477777",
// "Other_Feedbacks__c":"test",
// "Product_No_1_Part_No__c":"90",
// "Product_No_1__c":"text",
// "Product_No_1_Issue_faced_Description__c":"tect",
// "Product_No_2__c":"yeyy",
// "Product_No_2_Part_No__c":"90",
// "Product_No_2_Issue_faced_Description__c":"ttew",
// "Product_No_3__c":"nn",
// "Product_No_3_Part_No__c":"89",
// "Product_No_3_Issue_faced_Description__c":"jjk",
// "Brand_Filters__c":"a0F0p000003OilHEAS",
// "Value_filters__c":"56",
// "Workshop_No_1_Mobile_No__c":"9897937535",
// "Workshop_Owner_Name__c":"testing",
// "Retailer_No_1_Name__c":"text",
// "Retailer_No_1_Mobile_No__c":"975764445",
// "Retailer_No_1_Proprietor_Name__c":"testing",
// "Retailer_No_2_Mobile_No__c":"747756466",
// "Retailer_No_2_Name__c":"name2",
// "Name":form.Name,
// "Retailer_No_2_Proprietor_Name__c":"tes23",
// "Retailer_No_3_Mobile_No__c":"74769666",
// "Retailer_No_3_Name__c":"testing2",
// "Retailer_No_3_Proprietor_Name__c":"yyy",
// "Branch_Manager__c":"0055g00000C5wwSAAR",
// "Branch_Head__c":"0055g00000C5wwSAAR",
// "Branch_Accountant__c":"0055g00000C5wwSAAR",
// "Prospect_Type__c":"2WH RETAILER",
// "Sub_Category__c":"LITS",
// "Area_Master__c":"a180p000000hbNZAAY",
// "States__c":"a1A0p000002RBINEA4",
// "Branch_Code__c":"a170p000001pw4mAAA",
// "District__c":"a1C0p000000YxYWEA0",
// "City_Master__c":"a1D0p000000y6d7EAA",
// "Vehicle_Category_he_is_repairing__c":"Motor Cycles",
// "LIS_Product_range__c":"LTVS",
// "Vehicle_Brand_he_is_dealing_with__c":"Hero"

// no fields
// segment
