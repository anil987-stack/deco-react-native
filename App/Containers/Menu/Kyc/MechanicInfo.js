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
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "App/Components/SearchableDropdown";
import IndicatorInputText from "App/Components/FormInput/IndicatorInputText";
import { CheckBox, Radio } from "native-base";
import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
import { HelperService } from "App/Services/Utils/HelperService";
import MenuActions from "../../../Stores/Menu/Actions";

import { connect } from "react-redux";
const options1 = [
  { id: "Retailer", name: "Retailer" },
  { id: "Wholeseller", name: "Wholeseller" },
  { id: "Govt", name: "Govt" },
  { id: "Fleet", name: "Fleet" },
  { id: "Others", name: "Others" },
];

class MechanicInfo extends Component {
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
      error = true;
    } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
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
            <Text style={Styles.text}>Workshop Name*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Workshop Name"}
                value={form.Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Name",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Workshop Owner Name*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Workshop Owner Name"}
                value={form.Workshop_Owner_Name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Workshop_Owner_Name__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Year of Establishment*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Year of Establishment"}
                value={form.Year_of_Establishment__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Year_of_Establishment__c",
                    edited_value: value,
                  })
                }
                maxLength={4}
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Mobile Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Mobile Number"}
                value={form.Phone}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Phone",
                    edited_value: value,
                  })
                }
                maxLength={10}
              />
            </View>
          </View>
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validatePhoneNumber(form.Phone) ? "" : "Invalid Phone No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>WhtsaApp Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Whtsapp Number"}
                value={form.Whatsapp_Number__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Whatsapp_Number__c",
                    edited_value: value,
                  })
                }
                maxLength={10}
              />
            </View>
          </View>
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validatePhoneNumber(form.Whatsapp_Number__c)
              ? ""
              : "Invalid Phone No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Aadhar Card Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Aadhar Card Number"}
                value={form.Aadhar_No__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Aadhar_No__c",
                    edited_value: value,
                  })
                }
                maxLength={12}
              />
            </View>
          </View>
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateAadhaar(form.Aadhar_No__c)
              ? ""
              : "Invalid Aadhar No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>GSTIN</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter GSTIN"}
                value={form.GSTIN_No__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "GSTIN_No__c",
                    edited_value: value,
                  })
                }
                maxLength={15}
              />
            </View>
          </View>
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateGstNumber(form.GSTIN_No__c) ? "" : "Invalid GST No."}
          </Text>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Address*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Address"}
                value={form.Address__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Address__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Location/ Place/ Taluka*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Location/ Place/ Taluka"}
                value={form.Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Name",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View> */}
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>District*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter District"}
                value={form.Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Name",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Pincode*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Pincode"}
                value={form.PIN_CODE__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "PIN_CODE__c",
                    edited_value: value,
                  })
                }
                maxLength={6}
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Area*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <SearchableDropdown
                // dataSource={HelperService.c}
                dataSource={HelperService.convertToSearchableListFormatNest2({
                  list: area,
                  id_key: "Area__c",
                  label_key: "Area_Name__c",
                  label_Key1: "Area__r",
                })}
                placeHolderText={"Select Area"}
                // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                selectedValue={form.Area_Master__c}
                onChange={(value) => {
                  changeForm({
                    edited_field: "Area_Master__c",
                    edited_value: value,
                  });
                  if (value) {
                    // console.log("value",value)
                    let address = area.filter((obj) => {
                      return obj.Area__c == value;
                    });
                    console.log("address", address);
                    address = address[0];
                    changeForm({
                      edited_field: "District__c",
                      edited_value:
                        address.Area__r &&
                        address.Area__r.Parent_District_Code__c
                          ? address.Area__r.Parent_District_Code__c
                          : "",
                    });
                    changeForm({
                      edited_field: "States__c",
                      edited_value:
                        address.Area__r && address.Area__r.Parent_State_Code__c
                          ? address.Area__r.Parent_State_Code__c
                          : "",
                    });
                    changeForm({
                      edited_field: "Branch_Code__c",
                      edited_value:
                        address.Area__r && address.Area__r.Branch_Master__c
                          ? address.Area__r.Branch_Master__c
                          : "",
                    });
                    changeForm({
                      edited_field: "City_Master__c",
                      edited_value:
                        address.Area__r && address.Area__r.Parent_City_Code__c
                          ? address.Area__r.Parent_City_Code__c
                          : "",
                    });
                    changeForm({
                      edited_field: "States",
                      edited_value:
                        address.Area__r &&
                        address.Area__r.Parent_State_Code__r &&
                        address.Area__r.Parent_State_Code__r.State_Name__c
                          ? address.Area__r.Parent_State_Code__r.State_Name__c
                          : "",
                    });
                    changeForm({
                      edited_field: "Branch",
                      edited_value:
                        address.Area__r &&
                        address.Area__r.Branch_Master__r &&
                        address.Area__r.Branch_Master__r.Branch_Name__c
                          ? address.Area__r.Branch_Master__r.Branch_Name__c
                          : "",
                    });
                    changeForm({
                      edited_field: "District",
                      edited_value:
                        address.Area__r &&
                        address.Area__r.Parent_District_Code__r &&
                        address.Area__r.Parent_District_Code__r.District_Name__c
                          ? address.Area__r.Parent_District_Code__r
                              .District_Name__c
                          : "",
                    });
                    changeForm({
                      edited_field: "City",
                      edited_value:
                        address.Area__r &&
                        address.Area__r.Parent_City_Code__r &&
                        address.Area__r.Parent_City_Code__r.City_Name__c
                          ? address.Area__r.Parent_City_Code__r.City_Name__c
                          : "",
                    });
                  }
                }}
                customPickerStyles={{
                  ...Styles.picker,
                  marginRight: wp("3.5%"),
                }}
                labelStyles={{ ...Styles.pickerLabel }}
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>City*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter City"}
                value={form.City ? form.City : form.City_Name__c}
                editable={false}
                onChange={(value) =>
                  changeForm({ edited_field: "City", edited_value: value })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>District*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter District"}
                value={form.District ? form.District : form.District_Name__c}
                editable={false}
                onChange={(value) =>
                  changeForm({ edited_field: "District", edited_value: value })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Branch*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                styles={Styles.inputtext}
                placeholder={"Enter Branch"}
                value={form.Branch ? form.Branch : form.Branch_Name1__c}
                editable={false}
                onChange={(value) =>
                  changeForm({ edited_field: "Branch", edited_value: value })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>State*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter State"}
                value={form.States ? form.States : form.State_Name__c}
                editable={false}
                onChange={(value) =>
                  changeForm({ edited_field: "States", edited_value: value })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Type of Business*</Text>
            <SearchableDropdown
              dataSource={options1}
              placeHolderText={"Select Business Type"}
              selectedValue={form.Type__c}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Type__c",
                  edited_value: value,
                })
              }
              placeholder={"Type or Select Area"}
              invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          {Id==false?<View style={{ width: "90%", marginLeft: 0,marginTop: hp("2%") }}>
              <Text style={{ ...Styles.text, left: wp("1.5%"),color:Colors.primary }}
              onPress={()=>NavigationService.navigate('CampaignAttachmentScreen',{type:'Doc',ID:form})}
              >
                Attachment
              </Text>
            </View>:[]}
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
export default connect(mapStateToProps, mapDispatchToProps)(MechanicInfo);
