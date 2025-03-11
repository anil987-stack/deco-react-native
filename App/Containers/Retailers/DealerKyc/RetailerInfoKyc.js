import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Styles from "./FormKycStyle";
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
const options1 = [
  { id: "Retailer", name: "Retailer" },
  { id: "Wholeseller", name: "Wholeseller" },
  { id: "Govt", name: "Govt" },
  { id: "Fleet", name: "Fleet" },
  { id: "Others", name: "Others" },
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

export default class RetailerInfoKyc extends Component {
  render() {
    let item = this.props;
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
            <Text style={Styles.text}>
              Firm name of Retailer/MDML retailer*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Firm name of Retailer/MDML retailer"}
                value={item.item && item.item.length ? item.item[0].Name : ""}
                editable={false}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Contact Person Name*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Workshop_name__c
                    : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Contact Person Mob No*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Phone : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Alternate Mob No</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Alternate_WhatsApp_No__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Email Id</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Email__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Address*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Address__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Pincode*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].PIN_CODE__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Area*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Area_Name__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>City*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].City_Name__c : ""
                }
                editable={false}
                // value={form.City}
                // onChange={(value) =>
                //   changeForm({ edited_field: "City", edited_value: value })
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>District*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].District_Name__c : ""
                }
                editable={false}
                // value={form.District}
                // onChange={(value) =>
                //   changeForm({ edited_field: "District", edited_value: value })
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Branch*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                styles={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Branch_Name1__c : ""
                }
                editable={false}
                // value={form.Branch}
                // onChange={(value) =>
                //   changeForm({ edited_field: "Branch", edited_value: value })
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>State*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].State_Name__c : ""
                }
                editable={false}
                // value={form.States}
                // onChange={(value) =>
                //   changeForm({ edited_field: "States", edited_value: value })
                // }
              />
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>GSTIN</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].GSTIN_No__c : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Authorized LAD/Dealer/Retailer name attached with*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Authorized_LAD_Dealer_Name_Attached_with__c
                    : ""
                }
                editable={false}
                // value={form.Firm_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Firm_Name__c",
                //     edited_value: value,
                //   })
                // }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          {/* <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>"Prospect Type*</Text>
            <SearchableDropdown
              dataSource={options2}
              placeHolderText={"Select Prospect Type"}
              selectedValue={
                item.item && item.item.length
                  ? item.item[0].Prospect_Type__c
                  : ""
              }
              disabled={true}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Type of Business*</Text>
            <SearchableDropdown
              dataSource={options1}
              placeHolderText={"Select Business Type"}
              selectedValue={
                item.item && item.item.length ? item.item[0].Type__c : ""
              }
              disabled={true}
              //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
              // placeholder={'Type or Select Area'}
              //invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
