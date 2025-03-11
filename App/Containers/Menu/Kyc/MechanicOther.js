import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
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
import TextArea from "App/Components/FormInput/TextArea";
import { connect } from "react-redux";
import { HelperService } from "App/Services/Utils/HelperService";
import MenuActions from "../../../Stores/Menu/Actions";

const options1 = [
  { id: "Core-PCV", name: "Core-PCV" },
  { id: "CV", name: "CV" },
  { id: "ALL", name: "ALL" },
  { id: "Tractor", name: "Tractor" },
  { id: "2&3Wheel", name: "2&3Wheel" },
  { id: "Lubes", name: "Lubes" },
  { id: "SFL", name: "SFL" },
  { id: "AE", name: "AE" },
  { id: "FIE", name: "FIE" },
  { id: "ENGINE", name: "ENGINE" },
];
const type = [
  { id: "LTVS", name: "LTVS" },
  { id: "INEL", name: "INEL" },
  { id: "LISPART", name: "LISPART" },
  { id: "PRICOL", name: "PRICOL" },
  { id: "TVS Automotive", name: "TVS Automotive" },
  { id: "LUCAS Batteries", name: "LUCAS Batteries" },
];
const type1 = [
  { id: "Hero", name: "Hero" },
  { id: "Honda", name: "Honda" },
  { id: "TVS", name: "TVS" },
  { id: "Bajaj", name: "Bajaj" },
  { id: "Yamaha", name: "Yamaha" },
  { id: "Royal Enfield", name: "Royal Enfield" },
  { id: "Suzuki", name: "Suzuki" },

  { id: "Others", name: "Others" },
];
const type2 = [
  { id: "Motor Cycles", name: "Motor Cycles" },
  { id: "Mopped", name: "Mopped" },
  { id: "Scooters", name: "Scooters" },
  { id: "Others", name: "Others" },
];
export class MechanicOther extends Component {
  render() {
    const { changeForm, form, brand } = this.props;
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
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              From Which LISS, workshop is currently purchasing material?
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                LISS No1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.LISS_No_1_Name__c
                        ? String(form.LISS_No_1_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LISS_No_1_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="LISS 10 digits Code"
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.LISS_No_1_10_digit_code__c
                        ? String(form.LISS_No_1_10_digit_code__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LISS_No_1_10_digit_code__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                LISS No2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.LISS_No_2_Name__c
                        ? String(form.LISS_No_2_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LISS_No_2_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="LISS 10 digits Code"
                    maxLength={10}
                    keyboardType={"phone-pad"}
                    placeholderTextColor="black"
                    value={
                      form.LISS_No_2_10_digit_code__c
                        ? String(form.LISS_No_2_10_digit_code__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LISS_No_2_10_digit_code__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                LISS No3
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.LiSS_No_3_Name__c
                        ? String(form.LiSS_No_3_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LiSS_No_3_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="LISS 10 digits Code"
                    maxLength={10}
                    keyboardType={"phone-pad"}
                    placeholderTextColor="black"
                    value={
                      form.LISS_No_3_10_digit_code__c
                        ? String(form.LISS_No_3_10_digit_code__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LISS_No_3_10_digit_code__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              From Which retailer, workshop is currently purchasing material?
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Retailer No1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Retailer_No_1_Name__c
                        ? String(form.Retailer_No_1_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_1_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    placeholderTextColor="black"
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    value={
                      form.Retailer_No_1_Mobile_No__c
                        ? String(form.Retailer_No_1_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_1_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Retailer No2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Retailer_No_2_Name__c
                        ? String(form.Retailer_No_2_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_2_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.Retailer_No_2_Mobile_No__c
                        ? String(form.Retailer_No_2_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_2_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Retailer No3
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Retailer_No_3_Name__c
                        ? String(form.Retailer_No_3_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_3_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.Retailer_No_3_Mobile_No__c
                        ? String(form.Retailer_No_3_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Retailer_No_3_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              From Which dealer, workshop is currently purchasing material?
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Dealer No1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_1_Name__c
                        ? String(form.Dealer_No_1_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_1_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_1_Mobile_No__c
                        ? String(form.Dealer_No_1_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_1_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="SAP code"
                    keyboardType={"phone-pad"}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_1_SAP_Code_c
                        ? String(form.Dealer_No_1_SAP_Code_c)
                        : ""
                    }
                    maxLength={10}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_1_SAP_Code_c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Dealer No2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_2_Name__c
                        ? String(form.Dealer_No_2_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_2_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_2_Mobile_No__c
                        ? String(form.Dealer_No_2_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_2_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="SAP code"
                    keyboardType={"phone-pad"}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_2_SAP_Code_c
                        ? String(form.Dealer_No_2_SAP_Code_c)
                        : ""
                    }
                    maxLength={10}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_2_SAP_Code_c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Dealer No3
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_3_Name__c
                        ? String(form.Dealer_No_3_Name__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_3_Name__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Mobile No."
                    keyboardType={"phone-pad"}
                    maxLength={10}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_3_Mobile_No__c
                        ? String(form.Dealer_No_3_Mobile_No__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_3_Mobile_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="SAP code"
                    keyboardType={"phone-pad"}
                    placeholderTextColor="black"
                    value={
                      form.Dealer_No_3_SAP_Code_c
                        ? String(form.Dealer_No_3_SAP_Code_c)
                        : ""
                    }
                    maxLength={10}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Dealer_No_3_SAP_Code_c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Segment *</Text>
            <SearchableDropdown
              dataSource={options1}
              placeHolderText={"Select Segment "}
              selectedValue={form.Category__c}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Category__c",
                  edited_value: value,
                })
              }
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Category*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Category"}
                value={form.Other_category__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Other_category__c",
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
            <Text style={Styles.text}>Vehicle Category he is repairing?</Text>
            <SearchableDropdown
              dataSource={type2}
              placeHolderText={"Select option"}
              value={form.Vehicle_Category_he_is_repairing__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Vehicle_Category_he_is_repairing__c",
                  edited_value: value,
                })
              }
              // placeholder={'Type or Select Area'}
              //invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Vehicle Brand he is dealing with?</Text>
            <SearchableDropdown
              dataSource={type1}
              placeHolderText={"Select option"}
              value={form.Vehicle_Brand_he_is_dealing_with__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Vehicle_Brand_he_is_dealing_with__c",
                  edited_value: value,
                })
              }
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              Monthly Nos of Vehicle he is servicing
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    Major Repair in No.
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Enter Value"
                    placeholderTextColor="black"
                    value={
                      form.Major_Repair_in_No_s__c
                        ? String(form.Major_Repair_in_No_s__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Major_Repair_in_No_s__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    Minor Repair in No.
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Enter Value"
                    placeholderTextColor="black"
                    value={
                      form.Minor_Repair_in_No_s__c
                        ? String(form.Minor_Repair_in_No_s__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Minor_Repair_in_No_s__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    Total in No.
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Enter Value"
                    placeholderTextColor="black"
                    value={
                      form.Total_Repair_in_No_s__c
                        ? String(form.Total_Repair_in_No_s__c)
                        : ""
                    }
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Total_Repair_in_No_s__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Monthly Material used by workshop in Lacs (All Brands Material)
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter value"}
                value={form.Monthly_Material_used_by_workshop_in_Lac__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Monthly_Material_used_by_workshop_in_Lac__c",
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
            <Text style={Styles.text}>
              MLIS Brands he is currently dealing into
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    INEL
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.INEL_Value__c?String(form.INEL_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "INEL_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    LISPART
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Lispart_Value__c?String(form.Lispart_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Lispart_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    PRICOL
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.PRICOL_Value__c?String(form.PRICOL_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "PRICOL_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    TVS Automotive
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.TVS_Automotive_Value__c?String(form.TVS_Automotive_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "TVS_Automotive_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      top: hp("1%"),
                      textAlign: "left",
                      textAlignVertical: "center",
                    }}
                  >
                    LUCAS Batteries
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.LUCAS_Batteries_Value__c?String(form.LUCAS_Batteries_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "LUCAS_Batteries_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              Others Brands he is currently dealing into (Including Lubes &
              Battery)
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Brand 1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Brand_No_1__c?String(form.Brand_No_1__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Brand_No_1_Value__c?String(form.Brand_No_1_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_1_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Brand 2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Brand_No_2__c?String(form.Brand_No_2__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_2__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Brand_No_2_Value__c?String(form.Brand_No_2_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_2_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Brand 3
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Brand_No_3__c?String(form.Brand_No_3__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_3__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Brand_No_3_Value__c?String(form.Brand_No_3_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_3_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Brand 4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Brand_No_4__c?String(form.Brand_No_4__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_4__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Brand_No_4_Value__c?String(form.Brand_No_4_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_4_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Brand 5
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Brand_No_5__c?String(form.Brand_No_5__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_5__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Value In Lacs"
                    placeholderTextColor="black"
                    value={form.Brand_No_5_Value__c?String(form.Brand_No_5_Value__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Brand_No_5_Value__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              Have you faced any Quality issue in LIS product range?
            </Text>

            <View
              style={{
                backgroundColor: "#E7F9D7",
                margin: 10,
                paddingBottom: hp("2%"),
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Product 1
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Product_No_1__c?String(form.Product_No_1__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Part No."
                    placeholderTextColor="black"
                    value={form.Product_No_1_Part_No__c?String(form.Product_No_1_Part_No__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_1_Part_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Issue Faced"
                    placeholderTextColor="black"
                    value={form.Product_No_1_Issue_faced_Description__c?String(form.Product_No_1_Issue_faced_Description__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_1_Issue_faced_Description__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Product 2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Product_No_2__c?String(form.Product_No_2__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_2__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Part No."
                    placeholderTextColor="black"
                    value={form.Product_No_2_Part_No__c?String(form.Product_No_2_Part_No__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_2_Part_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Issue Faced"
                    placeholderTextColor="black"
                    value={form.Product_No_2_Issue_faced_Description__c?String(form.Product_No_2_Issue_faced_Description__c):''}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_2_Issue_faced_Description__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Product 3
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={form.Product_No_3__c?String(form.Product_No_3__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_3__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Part No."
                    placeholderTextColor="black"
                    value={form.Product_No_3_Part_No__c?String(form.Product_No_3_Part_No__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_3_Part_No__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("25%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Issue Faced"
                    placeholderTextColor="black"
                    value={form.Product_No_3_Issue_faced_Description__c?String(form.Product_No_3_Issue_faced_Description__c):""}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Product_No_3_Issue_faced_Description__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              {/* <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Product 4
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Part No."
                    placeholderTextColor="black"
                    value={form.Value_AE_items1__c}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Value_AE_items1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Issue Faced"
                    placeholderTextColor="black"
                    value={form.Value_AE_items1__c}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Value_AE_items1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  top: hp("0.5%"),
                  textAlign: "center",
                }}
              >
                Product 5
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: hp("1%"),
                }}
              >
                <View>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Part No."
                    placeholderTextColor="black"
                    value={form.Value_AE_items1__c}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Value_AE_items1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <TextInput
                    style={{
                      height: hp("5%"),
                      borderColor: Colors.primary,
                      borderWidth: 0.8,
                      width: wp("35%"),
                      borderRadius: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="Issue Faced"
                    placeholderTextColor="black"
                    value={form.Value_AE_items1__c}
                    onChangeText={(value) =>
                      changeForm({
                        edited_field: "Value_AE_items1__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View> */}
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              Which LIS Product range he would like to work with us in future?
            </Text>
            <SearchableDropdown
              dataSource={type}
              placeHolderText={"Select option"}
              selectedValue={form.LIS_Product_range__c}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "LIS_Product_range__c",
                  edited_value: value,
                })
              }
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Which new product he would like to be introduced in LIS*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter new product"}
                value={form.Suggestions_on_New_Product_launch__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Suggestions_on_New_Product_launch__c",
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
            <Text style={Styles.text}>
              What is your overall opinion about LIS products quality (Rating)?*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                placeholder="Enter overall opinion "
                numberOfLines={5}
                style={Styles.mb11}
                value={form.What_s_your_view_on_LIS_product_Quality__c}
                //  error={validation.invalid && validation.invalid_field == 'What_s_your_view_on_LIS_product_Quality__c'}
                onChange={(value) =>
                  this.props.changeForm({
                    edited_field: "What_s_your_view_on_LIS_product_Quality__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Other Feedbacks*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                placeholder="Enter Feedback"
                numberOfLines={5}
                style={Styles.mb11}
                value={form.Other_Feedbacks__c}
                //  error={validation.invalid && validation.invalid_field == 'Other_Feedbacks__c'}
                onChange={(value) =>
                  this.props.changeForm({
                    edited_field: "Other_Feedbacks__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  form: state.menu.kycform,
  brand: state.menu.CompetitorMasterlist,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(MenuActions.changeKycForm(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MechanicOther);
