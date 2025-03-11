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

export default class WHRetailerInfoKyc extends Component {
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
            <Text style={Styles.text}>Retailer Name*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={item.item && item.item.length ? item.item[0].Name : ""}
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
            <Text style={Styles.text}>Retailer Owner Name*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Workshop_Owner_Name__c
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
            <Text style={Styles.text}>Mobile Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={item.item && item.item.length ? item.item[0].Phone : ""}
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
            <Text style={Styles.text}>WhtsaApp Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Whatsapp_Number__c
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
            <Text style={Styles.text}>Aadhar Card Number*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                value={
                  item.item && item.item.length ? item.item[0].Aadhar_No__c : ""
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
            <Text style={Styles.text}>GSTIN*</Text>
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
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Location/ Place/ Taluka*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Location/ Place/ Taluka"}
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
          </View> */}
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>District*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter District"}
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
          </View> */}
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
                  item.item && item.item.length
                    ? item.item[0].District_Name__c
                    : ""
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
                  item.item && item.item.length
                    ? item.item[0].Branch_Name1__c
                    : ""
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
                  item.item && item.item.length
                    ? item.item[0].State_Name__c
                    : ""
                }
                editable={false}
                // value={form.States}
                // onChange={(value) =>
                //   changeForm({ edited_field: "States", edited_value: value })
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Type of Business*</Text>
            <SearchableDropdown
              dataSource={options1}
              value={item.item && item.item.length ? item.item[0].Type__c : ""}
              disabled={true}
              //     selectedValue={eventForm.area__c}
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
