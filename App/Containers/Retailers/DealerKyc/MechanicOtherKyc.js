import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
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
import TextArea from "App/Components/FormInput/TextArea";
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
export class MechanicOtherKyc extends Component {
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LISS_No_1_Name__c
                        ? String(item.item[0].LISS_No_1_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LISS_No_1_10_digit_code__c
                        ? String(item.item[0].LISS_No_1_10_digit_code__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LISS_No_2_Name__c
                        ? String(item.item[0].LISS_No_2_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LISS_No_2_10_digit_code__c
                        ? String(item.item[0].LISS_No_2_10_digit_code__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LiSS_No_3_Name__c
                        ? String(item.item[0].LiSS_No_3_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LISS_No_3_10_digit_code__c
                        ? String(item.item[0].LISS_No_3_10_digit_code__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_1_Name__c
                        ? String(item.item[0].Retailer_No_1_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_1_Mobile_No__c
                        ? String(item.item[0].Retailer_No_1_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_2_Name__c
                        ? String(item.item[0].Retailer_No_2_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_2_Mobile_No__c
                        ? String(item.item[0].Retailer_No_2_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_3_Name__c
                        ? String(item.item[0].Retailer_No_3_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Retailer_No_3_Mobile_No__c
                        ? String(item.item[0].Retailer_No_3_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_1_Name__c
                        ? String(item.item[0].Dealer_No_1_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_1_Mobile_No__c
                        ? String(item.item[0].Dealer_No_1_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_1_SAP_Code_c
                        ? String(item.item[0].Dealer_No_1_SAP_Code_c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_2_Name__c
                        ? String(item.item[0].Dealer_No_2_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_2_Mobile_No__c
                        ? String(item.item[0].Dealer_No_2_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_2_SAP_Code_c
                        ? String(item.item[0].Dealer_No_2_SAP_Code_c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_3_Name__c
                        ? String(item.item[0].Dealer_No_3_Name__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_3_Mobile_No__c
                        ? String(item.item[0].Dealer_No_3_Mobile_No__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Dealer_No_3_SAP_Code_c
                        ? String(item.item[0].Dealer_No_3_SAP_Code_c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
              selectedValue={
                item.item && item.item.length ? item.item[0].Category__c : ""
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
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Category*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Other_category__c
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
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Vehicle Category he is repairing?</Text>
            <SearchableDropdown
              dataSource={type2}
              // placeHolderText={"Select option"}
              selectedValue={
                item.item && item.item.length
                  ? item.item[0].Vehicle_Category_he_is_repairing__c
                  : ""
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

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Vehicle Brand he is dealing with?</Text>
            <SearchableDropdown
              dataSource={type1}
              // placeHolderText={"Select option"}
              selectedValue={
                item.item && item.item.length
                  ? item.item[0].Vehicle_Brand_he_is_dealing_with__c
                  : ""
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Major_Repair_in_No_s__c
                        ? String(item.item[0].Major_Repair_in_No_s__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Minor_Repair_in_No_s__c
                        ? String(item.item[0].Minor_Repair_in_No_s__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Total_Repair_in_No_s__c
                        ? String(item.item[0].Total_Repair_in_No_s__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                value={
                  item.item && item.item.length
                    ? item.item[0].Monthly_Material_used_by_workshop_in_Lac__c
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].INEL_Value__c
                        ? String(item.item[0].INEL_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Lispart_Value__c
                        ? String(item.item[0].Lispart_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].PRICOL_Value__c
                        ? String(item.item[0].PRICOL_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].TVS_Automotive_Value__c
                        ? String(item.item[0].TVS_Automotive_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].LUCAS_Batteries_Value__c
                        ? String(item.item[0].LUCAS_Batteries_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_1__c
                        ? String(item.item[0].Brand_No_1__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_1_Value__c
                        ? String(item.item[0].Brand_No_1_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_2__c
                        ? String(item.item[0].Brand_No_2__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_2_Value__c
                        ? String(item.item[0].Brand_No_2_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_3__c
                        ? String(item.item[0].Brand_No_3__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_3_Value__c
                        ? String(item.item[0].Brand_No_3_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_4__c
                        ? String(item.item[0].Brand_No_4__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_4_Value__c
                        ? String(item.item[0].Brand_No_4_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_5__c
                        ? String(item.item[0].Brand_No_5__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Brand_No_5_Value__c
                        ? String(item.item[0].Brand_No_5_Value__c)
                        : ""
                    }
                    editable={false}
                    //   onChangeText={(newText) => setText(newText)}
                    //   defaultValue={text}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_1__c
                        ? String(item.item[0].Product_No_1__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_1_Part_No__c
                        ? String(item.item[0].Product_No_1_Part_No__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_1_Issue_faced_Description__c
                        ? String(
                            item.item[0].Product_No_1_Issue_faced_Description__c
                          )
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_2__c
                        ? String(item.item[0].Product_No_2__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_2_Part_No__c
                        ? String(item.item[0].Product_No_2_Part_No__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_2_Issue_faced_Description__c
                        ? String(
                            item.item[0].Product_No_2_Issue_faced_Description__c
                          )
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_3__c
                        ? String(item.item[0].Product_No_3__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_3_Part_No__c
                        ? String(item.item[0].Product_No_3_Part_No__c)
                        : ""
                    }
                    editable={false}
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
                    value={
                      item.item &&
                      item.item.length &&
                      item.item[0].Product_No_3_Issue_faced_Description__c
                        ? String(
                            item.item[0].Product_No_3_Issue_faced_Description__c
                          )
                        : ""
                    }
                    editable={false}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>
              Which LIS Product range he would like to work with us in future?
            </Text>
            <SearchableDropdown
              dataSource={type}
              placeHolderText={"Select option"}
              value={
                item.item && item.item.length
                  ? item.item[0].LIS_Product_range__c
                  : ""
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
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Which new product he would like to be introduced in LIS*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                value={
                  item.item && item.item.length
                    ? item.item[0].Suggestions_on_New_Product_launch__c
                    : ""
                }
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
            <Text style={Styles.text}>
              What is your overall opinion about LIS products quality (Rating)?
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                value={
                  item.item && item.item.length
                    ? item.item[0].What_s_your_view_on_LIS_product_Quality__c
                    : ""
                }
                disabled={true}
                numberOfLines={5}
                style={Styles.mb11}
                //  value={eventForm.venue_details__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                //  onChange={(value) => this.props.changeEventForm({ edited_field: 'venue_details__c', edited_value: value })}
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Other Feedbacks</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                value={
                  item.item && item.item.length
                    ? item.item[0].Other_Feedbacks__c
                    : ""
                }
                disabled={true}
                numberOfLines={5}
                style={Styles.mb11}
                //  value={eventForm.venue_details__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                //  onChange={(value) => this.props.changeEventForm({ edited_field: 'venue_details__c', edited_value: value })}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default MechanicOtherKyc;
