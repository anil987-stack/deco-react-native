import { CheckBox, Radio } from "native-base";
import React, { Component } from "react";
import { Text, TextInput, View, ScrollView, Alert } from "react-native";
import Colors from "App/Theme/Colors";
import BlueButton from "App/Components/BlueButton";
import { connect } from "react-redux";
import Styles from "./Style";
import UserActions from "App/Stores/User/Actions";
import menuActions from "App/Stores/Menu/Actions";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "App/Components/SearchableDropdown";
import SelectDate from "../../../../Components/SelectDate/SelectYear";
import { HelperService } from "App/Services/Utils/HelperService";
import IndicatorInputText from "../../../../Components/FormInput/IndicatorInputText";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getcityList } from "../../../../Sagas/MenuSaga";
const options1 = [
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

const segment = [
  { id: "Core", name: "Core" },
  { id: "Battery", name: "Battery" },
  { id: "2/3 Wheeler", name: "2/3 Wheeler" },
  { id: "Service", name: "Service" },
  { id: "Lubes", name: "Lubes" },
];
const segmentType = [];
const TradeType = [
  { id: "Distributor", name: "Distributor" },
  { id: "RBA", name: "RBA" },
];

const ProjectType = [
  { id: "Project Business Associate", name: "Project Business Associate" },
  { id: "Applicator", name: "Applicator" },
  { id: "Institutional", name: "Institutional" },
  { id: "Contractor", name: "Contractor" },
  { id: "Builders", name: "Builders" },
  { id: "Direct", name: "Direct" },
];
const ExportType = [{ id: "Export", name: "Export" }];
const MarketType = [
  { id: "Metro", name: "Metro" },
  { id: "Premium", name: "Premium" },
];

class Communication extends Component {
  // componentDidMount() {
  //   let show = this.props.shows;
  //   const {
  //     GetImage,
  //     selectlist,
  //     token,
  //     form,
  //     getcityList,
  //     userid,
  //     changeSearchFilters,
  //     changeForm,
  //     citylist,
  //     territorylist,
  //     area,
  //     shows,
  //   } = this.props;
  //   console.log(shows);
  //   if (shows == true && form.Area_Master__c) {
  //     let address = area.filter((obj) => {
  //       return obj.Area__c == form.Area_Master__c;
  //     });
  //     address = address[0];
  //     changeForm({
  //       edited_field: "District__c",
  //       edited_value:
  //         address.Area__r && address.Area__r.Parent_District_Code__c
  //           ? address.Area__r.Parent_District_Code__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "States__c",
  //       edited_value:
  //         address.Area__r && address.Area__r.Parent_State_Code__c
  //           ? address.Area__r.Parent_State_Code__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "Branch_Code__c",
  //       edited_value:
  //         address.Area__r && address.Area__r.Branch_Master__c
  //           ? address.Area__r.Branch_Master__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "City_Master__c",
  //       edited_value:
  //         address.Area__r && address.Area__r.Parent_City_Code__c
  //           ? address.Area__r.Parent_City_Code__c
  //           : "",
  //     });

  //     changeForm({
  //       edited_field: "States",
  //       edited_value:
  //         address.Area__r &&
  //         address.Area__r.Parent_State_Code__r &&
  //         address.Area__r.Parent_State_Code__r.State_Name__c
  //           ? address.Area__r.Parent_State_Code__r.State_Name__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "Branch",
  //       edited_value:
  //         address.Area__r &&
  //         address.Area__r.Branch_Master__r &&
  //         address.Area__r.Branch_Master__r.Branch_Name__c
  //           ? address.Area__r.Branch_Master__r.Branch_Name__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "District",
  //       edited_value:
  //         address.Area__r &&
  //         address.Area__r.Parent_District_Code__r &&
  //         address.Area__r.Parent_District_Code__r.District_Name__c
  //           ? address.Area__r.Parent_District_Code__r.District_Name__c
  //           : "",
  //     });
  //     changeForm({
  //       edited_field: "City",
  //       edited_value:
  //         address.Area__r &&
  //         address.Area__r.Parent_City_Code__r &&
  //         address.Area__r.Parent_City_Code__r.City_Name__c
  //           ? address.Area__r.Parent_City_Code__r.City_Name__c
  //           : "",
  //     });
  //   }
  // }

  state = {
    MobileNo: "",
    MobileNoError: "",
  };

  mobileValidation = (value) => {
    let show = this.props.shows;
    if (value.length <= 10) {
      this.setState({
        MobileNo: value,
        MobileNoError: "",
      });
      this.props.changeForm({
        edited_field: show == false ? "mobile" : "Mobile__c",
        edited_value: value,
      });
    } else {
      this.setState({
        MobileNo: value,
        MobileNoError: "Mobile no must have 10 digit",
      });
    }
  };
  postalValidation = (value) => {
    let show = this.props.shows;
    if (value.length <= 6) {
      this.setState({
        MobileNo: value,
        MobileNoError: "",
      });
      // this.props.changeForm({ edited_field: 'pinCode', edited_value: value })
      this.props.changeForm({
        edited_field: show == false ? "pinCode" : "Pin_Code__c",
        edited_value: value,
      });
    } else {
      this.setState({
        MobileNo: value,
        MobileNoError: "Mobile no must have 10 digit",
      });
    }
  };

  validateEmail(value) {
    let error;
    if (!value) {
      error = "";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = "Invalid Email";
    }
    return error;
  }

  validatePhoneNumber(value) {
    let error;
    if (!value) {
      error = "";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    ) {
      error = "Invalid Number";
    }
    return error;
  }

  render() {
    const {
      form,
      changeForm,
      selectlist,
      validation,
      city,
      cityname,
      citylist,
      area,
    } = this.props;
    let show = this.props.shows;
    // let location =  HelperService.requestLocation();

    return (
      <ScrollView>
        <View style={{ flex: 1, marginTop: wp("5"), marginBottom: wp("50") }}>
          <Text style={Styles.text}>Name of the Dealer*</Text>

          <View style={{ width: wp("90"), marginLeft: wp("4") }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Name"}
              value={form.Name}
              onChange={(value) =>
                changeForm({ edited_field: "Name", edited_value: value })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
          </View>

          {/* <View
            style={{ flexDirection: "row", width: "90%", marginLeft: "5%" }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ ...Styles.text, marginLeft: 0 }}>
                Category Type*
              </Text>

              <SearchableDropdown
                dataSource={options1}
                placeHolderText={"Select Category"}
                // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                selectedValue={form.Prospect_Type__c}
                onChange={(value) => {
                  changeForm({
                    edited_field: "Prospect_Type__c",
                    edited_value: value,
                  });
                }}
                customPickerStyles={{ ...Styles.picker }}
                labelStyles={{ ...Styles.pickerLabel }}
                stylelabel={{
                  fontSize: hp("2"),
                  marginLeft: wp("4.5"),
                  color: "#515C6F",
                }}
              />
            </View>
          </View> */}

          {/* <View
            style={{ flexDirection: "row", width: "90%", marginLeft: "5%" }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ ...Styles.text, marginLeft: 0 }}>
                Customer Vertical*
              </Text>

              <SearchableDropdown
                dataSource={segment}
                placeHolderText={"Select Customer Vertical"}
                // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                selectedValue={form.Customer_Vertical__c}
                onChange={(value) => {
                  changeForm({
                    edited_field: "Customer_Vertical__c",
                    edited_value: value,
                  });
                }}
                customPickerStyles={{ ...Styles.picker }}
                labelStyles={{ ...Styles.pickerLabel }}
                stylelabel={{
                  fontSize: hp("2"),
                  marginLeft: wp("4.5"),
                  color: "#515C6F",
                }}
              />
            </View>
          </View> */}

          <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Mobile No*
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <View>
              <InputNumber
                styles={Styles.inputtext}
                placeholder={"Enter Mobile No"}
                value={form.Mobile__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Mobile__c",
                    edited_value: value,
                  })
                }
              />
              <Text style={{ color: "red" }}>
                {this.validatePhoneNumber(form.Mobile__c)}
              </Text>
            </View>
          </View>

          <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Alt. Mobile no.
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <View>
              <InputNumber
                styles={{ ...Styles.inputtext }}
                placeholder={"Enter Alt. Mobile no"}
                value={form.Phone}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Phone",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Alternate_Contact_Details__c"
                // }
              />

              <Text style={{ color: "red" }}>
                {this.validatePhoneNumber(form.Phone)}
              </Text>
            </View>
          </View>

          {/* <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Web Address
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <View>
              <InputText
                style={{ ...Styles.inputtext }}
                placeholder={"Enter WEB Address"}
                value={form.WEB_address__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "WEB_address__c",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Alternate_Contact_Details__c"
                // }
              />
            </View>
          </View> */}

          <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Email
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <View>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Email"}
                value={form.Email__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Email__c",
                    edited_value: value,
                  })
                }
              />
              <Text style={{ color: "red" }}>
                {this.validateEmail(form.Email__c)}
              </Text>
            </View>
          </View>

          <Text
            style={{
              marginLeft: "5%",
              color: Colors.primary,
              marginTop: 0,
              fontSize: wp("4.9"),
              fontWeight: "bold",
            }}
          >
            Address
          </Text>

          <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Address*
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Address"}
              value={form.Address__c}
              onChange={(value) =>
                changeForm({ edited_field: "Address__c", edited_value: value })
              }
            />
          </View>

          <Text
            style={{ ...Styles.text, marginLeft: "5%", marginTop: wp("1") }}
          >
            Address 1
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Address1"}
              value={form.Address1__c}
              onChange={(value) =>
                changeForm({ edited_field: "Address1__c", edited_value: value })
              }
            />
          </View>
          <Text style={{ ...Styles.text, marginLeft: "5%" }}>Address 2</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Address2"}
              value={form.Address2__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Address2__c",
                  edited_value: value,
                })
              }
            />
          </View>

          <View
            style={{ flexDirection: "row", width: "90%", marginLeft: "5%" }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ ...Styles.text, marginLeft: 0 }}>Area*</Text>

              <SearchableDropdown
                // dataSource={HelperService.c}
                // dataSource={HelperService.convertToSearchableListFormatNest2({
                //   list: area,
                //   id_key: "Area__c",
                //   label_key: "Area_Name__c",
                //   label_Key1: "Area__r",
                // })}
                placeHolderText={"Select Area"}
                // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                // selectedValue={form.Area_Master__c}
                // onChange={(value) => {
                //   changeForm({
                //     edited_field: "Area_Master__c",
                //     edited_value: value,
                //   });
                //   if (value) {
                //     // console.log("value",value)
                //     let address = area.filter((obj) => {
                //       return obj.Area__c == value;
                //     });
                //     console.log("address", address);
                //     address = address[0];
                //     changeForm({
                //       edited_field: "District__c",
                //       edited_value:
                //         address.Area__r &&
                //         address.Area__r.Parent_District_Code__c
                //           ? address.Area__r.Parent_District_Code__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "States__c",
                //       edited_value:
                //         address.Area__r && address.Area__r.Parent_State_Code__c
                //           ? address.Area__r.Parent_State_Code__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "Branch_Code__c",
                //       edited_value:
                //         address.Area__r && address.Area__r.Branch_Master__c
                //           ? address.Area__r.Branch_Master__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "City_Master__c",
                //       edited_value:
                //         address.Area__r && address.Area__r.Parent_City_Code__c
                //           ? address.Area__r.Parent_City_Code__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "States",
                //       edited_value:
                //         address.Area__r &&
                //         address.Area__r.Parent_State_Code__r &&
                //         address.Area__r.Parent_State_Code__r.State_Name__c
                //           ? address.Area__r.Parent_State_Code__r.State_Name__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "Branch",
                //       edited_value:
                //         address.Area__r &&
                //         address.Area__r.Branch_Master__r &&
                //         address.Area__r.Branch_Master__r.Branch_Name__c
                //           ? address.Area__r.Branch_Master__r.Branch_Name__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "District",
                //       edited_value:
                //         address.Area__r &&
                //         address.Area__r.Parent_District_Code__r &&
                //         address.Area__r.Parent_District_Code__r.District_Name__c
                //           ? address.Area__r.Parent_District_Code__r
                //               .District_Name__c
                //           : "",
                //     });
                //     changeForm({
                //       edited_field: "City",
                //       edited_value:
                //         address.Area__r &&
                //         address.Area__r.Parent_City_Code__r &&
                //         address.Area__r.Parent_City_Code__r.City_Name__c
                //           ? address.Area__r.Parent_City_Code__r.City_Name__c
                //           : "",
                //     });
                //   }
                // }}
                customPickerStyles={{ ...Styles.picker }}
                labelStyles={{ ...Styles.pickerLabel }}
                stylelabel={{
                  fontSize: hp("2"),
                  marginLeft: wp("4.5"),
                  color: "#515C6F",
                }}
              />
            </View>
          </View>
          {/*           
          <View
            style={{ flexDirection: "row", width: "90%", marginLeft: "5%" }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ ...Styles.text, marginLeft: 0 }}>
                Area*
              </Text>
             
                <SearchableDropdown
                  // dataSource={HelperService.c}
                  dataSource={HelperService.convertToSearchableListFormatNest3({ list: area, id_key: 'Branch_Master__c' , label_key: 'Name',label_Key1:'Area__r',label_key2:'Branch_Master__r' })}
                  placeHolderText={"Select Area"}
                  // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                   selectedValue={form.Area_Master__c}
                  onChange={(value) => {
                    changeForm({
                      edited_field: "Area_Master__c",
                      edited_value: value,
                    });
                 
                  }}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  stylelabel={{
                    fontSize: hp("2"),
                    marginLeft: wp("4.5"),
                    color: "#515C6F",
                  }}
                />
              
            </View>
          </View> */}

          <Text style={{ ...Styles.text, marginLeft: "5%" }}>City</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter City"}
              editable={false}
              value={form.City}
              onChange={(value) =>
                changeForm({ edited_field: "City", edited_value: value })
              }
            />
          </View>
          <Text style={{ ...Styles.text, marginLeft: "5%" }}>District</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter District"}
              editable={false}
              value={form.District}
              onChange={(value) =>
                changeForm({ edited_field: "District", edited_value: value })
              }
            />
          </View>

          <Text style={{ ...Styles.text, marginLeft: "5%" }}>Branch</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter Branch"}
              editable={false}
              value={form.Branch}
              onChange={(value) =>
                changeForm({ edited_field: "Branch", edited_value: value })
              }
            />
          </View>

          <Text style={{ ...Styles.text, marginLeft: "5%" }}>State</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter State"}
              value={form.States}
              editable={false}
              onChange={(value) =>
                changeForm({ edited_field: "States", edited_value: value })
              }
            />
          </View>

          {/* <Text style={{ ...Styles.text, marginTop: 10 }}>
            Existing Code with vertical details
          </Text>
          <View style={{ width: wp("90"), marginLeft: wp("4") }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter"}
              value={form.Existing_Code_with_vertical_details__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Existing_Code_with_vertical_details__c",
                  edited_value: value,
                })
              }
            />
          </View>

          <View>
            <Text
              style={{
                color: Colors.primary,
                marginLeft: "5%",
                fontWeight: "bold",
                fontSize: wp("3.9"),
              }}
            >
              DISC.APPLICABLE
            </Text>
            <View style={{ alignSelf: "center", marginTop: 10, width: "100%" }}>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    LUCAS TVS (NON STAR ITEMS)
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.PERCENTAGE_OF_LUCAS_TVS__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "PERCENTAGE_OF_LUCAS_TVS__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    LISPART
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.PERCENTAGE_OF_LISPART__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "PERCENTAGE_OF_LISPART__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>

              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    FIE PARTS
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputNumber
                    styles={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.PERCENTAGE_OF_FIE_PARTS__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "PERCENTAGE_OF_FIE_PARTS__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    2WH
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputText
                    style={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.Disc_applicable_2_WH__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "Disc_applicable_2_WH__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    SFL
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputText
                    style={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.Disc_applicable_SFL__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "Disc_applicable_SFL__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#C1E8E8",
                  paddingHorizontal: 10,
                  alignSelf: "center",
                  flexDirection: "row",
                  marginTop: hp("1"),
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text style={{ marginTop: 15, fontSize: wp("3.9") }}>
                    OTHERS
                  </Text>
                </View>
                <View style={{ width: "30%", marginTop: 0, marginLeft: 0 }}>
                  <InputText
                    style={{
                      height: hp("5"),
                      borderColor: "white",
                      marginLeft: 0,
                      borderWidth: 1,
                      backgroundColor: "white",
                      borderBottomColor: "lightgrey",
                      color: "black",
                    }}
                    placeholder={""}
                    value={form.Disc_Applicable_Others__c}
                    onChange={(value) =>
                      changeForm({
                        edited_field: "Disc_Applicable_Others__c",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View> */}
        </View>
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
  divisionlist: state.user.divisionlist,
  form: state.menu.createOnboardinglist,
  validation: state.menu.OnboardingInfoFormValidation,
  territorylist: state.common.userTerritory,
  // citylist:state.common.cityAllList,
  selectlist: state.menu.selectlist,
  citylist: state.menu.cityList,
  // city: state.startday.userDetailList.Employees__r.records[0].City__c,
  cityname: state.startday.userDetailList.Employees__r,
  area: state.common.TerritoryAllList,
  // cityname:state.startday.userDetailList.Employees__r[0].City__r.Name,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
  GetImage: (params) => dispatch(UserActions.getImageOnboarding(params)),
  getcityList: (params) => dispatch(menuActions.getCityList(params)),
  changeSearchFilters: (params) =>
    dispatch(UserActions.updateSearchFilters(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Communication);
