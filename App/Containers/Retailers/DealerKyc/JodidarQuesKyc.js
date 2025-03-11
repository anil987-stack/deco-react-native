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
  { id: "Batt", name: "Batt" },
  { id: "SFL", name: "SFL" },
  { id: "AE", name: "AE" },
  { id: "FIE", name: "FIE" },
  { id: "Engine", name: "Engine" },
  { id: "FLEET CUSTOMER", name: "FLEET CUSTOMER" },
  { id: "GROUP", name: "GROUP" },
  { id: "INST", name: "INST" },
  { id: "OES", name: "OES" },
  { id: "TRADE", name: "TRADE" },
  { id: "SERVICE", name: "SERVICE" },
];
export class JodidarQuesKyc extends Component {
  render() {
    let item = this.props;
    console.log("itemmmm", item);
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
            <Text style={Styles.text}>Health Status (Full Family)</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter Health Status (Full Family)"}
                value={
                  item.item && item.item.length
                    ? item.item[0].Health_Status_Full_Family__c
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
            <Text style={Styles.text}>
              Monthly Offtake/Fitment (Value in Lacs)*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                // placeholder={"Enter Monthly Offtake/Fitment (Value in Lacs)"}
                value={
                  item.item && item.item.length
                    ? item.item[0].Monthly_Offtake_Fitment_Value_in_Lacs__c
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
            <Text style={Styles.text}>Segment *</Text>
            <SearchableDropdown
              dataSource={options1}
              // placeHolderText={"Select Segment "}
              selectedValue={
                item.item && item.item.length ? item.item[0].Category__c : ""
              }
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
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Category*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter Category"}
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
          <Text
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: wp("3.9"),
              marginTop: hp("1.5"),
            }}
          >
            Range Purchases from LIS
          </Text>
          <View
            style={{
              width: wp("88%"),
              backgroundColor: "#E7F9D7",
              left: wp("3%"),
              paddingBottom: "2%",
            }}
          >
            <View style={{ alignSelf: "center", marginTop: 10, width: "100%" }}>
              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    LTVS
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].LTVS_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "LTVS_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>

              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Filters LTVS
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].Filters_LTVS_DTVS__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "Filters_LTVS_DTVS__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>

              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    SFL
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].SFL_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "SFL_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>

              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {"Lispart"}
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].Lispart_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "Lispart_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Lubes
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].Lubes_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "Lubes_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Battery
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].Battery_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "Battery_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: wp("3.9"),
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    DTVS
                  </Text>
                </View>
                <View style={{ width: "35%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                      fontSize: 12,
                    }}
                    placeholder={"Value(Monthly)"}
                    value={
                      item.item && item.item.length
                        ? item.item[0].DTVS_Value__c
                        : ""
                    }
                    editable={false}
                    // onChange={(value) =>
                    //   changeForm({
                    //     edited_field: "DTVS_Value__c",
                    //     edited_value: value,
                    //   })
                    // }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Range Purchases not from LIS</Text>
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  AE items (Self & Alternator & its Child parts)*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      placeholderTextColor="black"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_AE_items1__c)
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
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  AE items (Horns, Cable, Switches, Bulbs, Blades, Glow Plugs,
                  etc.)*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_AE_items2__c)
                          : ""
                      }
                      editable={false}
                      placeholderTextColor="black"
                      //   onChangeText={(newText) => setText(newText)}
                      //   defaultValue={text}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Battery*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      placeholderTextColor="black"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_Battery__c)
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
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Lube*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      placeholderTextColor="black"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_Lube__c)
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
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Filters*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      placeholderTextColor="black"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_filters__c)
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
            <View
              style={{
                width: wp("88%"),
                backgroundColor: "#E7F9D7",
                left: wp("3%"),
              }}
            >
              <View style={{ backgroundColor: Colors.primary, margin: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    top: hp("0.5%"),
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  2&3 Wheel ranges*
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <SearchableDropdown
                      // dataSource={type}
                      placeHolderText={"Select brand"}
                      //     selectedValue={eventForm.area__c}
                      //   onChange={(value) => this.props.changeEventForm({ edited_field: 'area__c', edited_value: value })}
                      // placeholder={'Type or Select Area'}
                      //invalid={false}
                      customPickerStyles={{ ...Styles.picker1 }}
                      labelStyles={{ ...Styles.pickerLabel }}
                      //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                    />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <TextInput
                      style={{
                        height: hp("5%"),
                        borderColor: Colors.primary,
                        borderWidth: 0.8,
                        width: wp("30%"),
                        borderRadius: 5,
                        backgroundColor: "white",
                        color: "black",
                      }}
                      // placeholder="Value(Monthly)"
                      placeholderTextColor="black"
                      value={
                        item.item && item.item.length
                          ? String(item.item[0].Value_2_3_Wheel_ranges__c)
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
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Which products range you may like to deal with LIS in future?
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter products range"}
                value={
                  item.item && item.item.length
                    ? item.item[0].Which_products_you_like_deal_in_Future__c
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
            <Text style={Styles.text}>
              What is your opinion about LIS product Quality?
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter opinion"}
                value={
                  item.item && item.item.length
                    ? item.item[0].What_s_your_view_on_LIS_product_Quality__c
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
            <Text style={Styles.text}>
              If any Quality issue specify product name/ Part No Etc.*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter product name/ Part No "}
                value={
                  item.item && item.item.length
                    ? item.item[0].Any_Quality_issue_with_product_Part_No__c
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
            <Text style={Styles.text}>Weekly Holiday*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                // placeholder={"Enter Weekly Holiday"}
                value={
                  item.item && item.item.length
                    ? item.item[0].Weekly_Holiday__c
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
              Have you received all your settlement (MDML / MLP gift, CN if any,
              warranty, etc.)*
            </Text>
            <SearchableDropdown
              dataSource={[
                { id: "Yes", name: "Yes" },
                { id: "No", name: "No" },
              ]}
              // placeHolderText={"Select option"}
              selectedValue={
                item.item && item.item.length
                  ? item.item[0].Have_you_got_all_you_settlement__c
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
              Suggestions on New Product launch (Give detailed Analysis)
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                // placeholder="Enter Suggestions"
                numberOfLines={5}
                style={Styles.mb11}
                value={
                  item.item && item.item.length
                    ? item.item[0].Suggestions_on_New_Product_launch__c
                    : ""
                }
                disable={true}
                //  value={eventForm.venue_details__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                //  onChange={(value) => this.props.changeEventForm({ edited_field: 'venue_details__c', edited_value: value })}
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>
              Overall Feedback about LIS & LAD concept (are you happy with the
              services of our LAD?/ Pricing issues if any/Competitor Activity
              etc.)*
            </Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <TextArea
                // placeholder="Enter Feedback"
                numberOfLines={5}
                style={Styles.mb11}
                value={
                  item.item && item.item.length
                    ? item.item[0].Overall_Feedback_about_LIS_LAD_concept__c
                    : ""
                }
                disable={true}
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

export default JodidarQuesKyc;
