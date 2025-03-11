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
      <ScrollView style={{ marginBottom: hp("22%") }}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "6%", fontSize: wp("3.9") }}>
            PAN Number*
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter No."}
              value={form.PAN_No__c}
              autoCapitalize="characters"
              onChange={(value) =>
                changeForm({ edited_field: "PAN_No__c", edited_value: value })
              }
            />
            {form.PAN_No__c?<Text style={{ color: "red" }}>
              {this.validatePan(form.PAN_No__c)}
            </Text>:[]}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "6%", fontSize: wp("3.9") }}>
            AADHAR NO
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter No."}
              value={form.Aadhar_No__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Aadhar_No__c",
                  edited_value: value,
                })
              }
            />
           {form.Aadhar_No__c? <Text style={{ color: "red" }}>
              {this.validateAadhaar(form.Aadhar_No__c)}
            </Text>:[]}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "6%", fontSize: wp("3.9") }}>GST NO.</Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter No."}
              value={form.GST_No__c}
              autoCapitalize="characters"
              onChange={(value) =>
                changeForm({ edited_field: "GST_No__c", edited_value: value })
              }
            />
            {form.GST_No__c?<Text style={{ color: "red" }}>
              {this.validateGstNumber(form.GST_No__c)}
            </Text>:[]}
          </View>
        </View>

        {/* <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "6%", fontSize: wp("3.9") }}>
            Credit Score
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter No."}
              value={form.Credit_Score__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Credit_Score__c",
                  edited_value: value,
                })
              }
            />
          </View>
        </View> */}

        <View style={{ marginTop: 10, marginLeft: "5%", fontSize: wp("3.9") }}>
          <Text style={{ fontSize: wp("3.9") }}>
            3 Year GSTIN History/3 Years ITR Filling
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row", width: "25%" }}>
              <Text>Yes</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Three_year_GSTIN_history__c",
                    edited_value: "Yes",
                  })
                }
                // selected={false}
                selected={form.Three_year_GSTIN_history__c == "Yes"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
            <View style={{ flexDirection: "row", width: "25%" }}>
              <Text>No</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Three_year_GSTIN_history__c",
                    edited_value: "No",
                  })
                }
                // selected={false}
                selected={form.Three_year_GSTIN_history__c == "No"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>

        {/* <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
            Estimated Annual sales from the customer as per New Account
            Evaluation/Appointment form
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              style={{
                height: hp("5"),
                borderColor: "white",
                borderWidth: 0,
                alignSelf: "center",
                backgroundColor: "white",
                elevation: 5,
                color: "black",
                borderRadius: 0,
              }}
              placeholder={"Enter "}
              value={form.remarkBySE}
              onChange={(value) =>
                changeForm({ edited_field: "remarkBySE", edited_value: value })
              }
            />
          </View>
        </View> */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "5%", fontSize: wp("3.9"),width:'90%' }}>
            Estimated Annual sales from the customer as per New Account
            Evaluation/Appointment form
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter Amount"}
              value={form.remarkBySE}
              onChange={(value) =>
                changeForm({ edited_field: "remarkBySE", edited_value: value })
              }
            />
          </View>
        </View>
        {/* "Bank_Name__c":"SBI",
   "Bank_Account_Number__c":"8499437694769",
   "Bank_Guarantee__c":"Yes",
   "Amount__c":"780", */}
        <View>
          <Text
            style={{
              color: Colors.primary,
              marginLeft: "5%",
              fontWeight: "bold",
              fontSize: wp("3.9"),
            }}
          >
            Bank Details
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
              Bank Name
            </Text>
            <View style={{ width: "90%", marginLeft: "4%" }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter "}
                value={form.Bank_Name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Bank_Name__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
              Bank Account No.
            </Text>
            <View style={{ width: "90%", marginLeft: "4%" }}>
              <InputNumber
                styles={Styles.inputtext}
                placeholder={"Enter "}
                value={form.Bank_Account_Number__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Bank_Account_Number__c",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
              Amount
            </Text>
            <View style={{ width: "90%", marginLeft: "4%" }}>
              <InputNumber
                styles={Styles.inputtext}
                placeholder={"Enter "}
                value={form.Amount__c}
                onChange={(value) =>
                  changeForm({ edited_field: "Amount__c", edited_value: value })
                }
              />
            </View>
          </View>

          <View
            style={{ marginTop: 10, marginLeft: "5%", fontSize: wp("3.9") }}
          >
            <Text style={{ fontSize: wp("3.9") }}>Bank Guarantee</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ flexDirection: "row", width: "25%" }}>
                <Text>Yes</Text>
                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Bank_Guarantee__c",
                      edited_value: "Yes",
                    })
                  }
                  selected={form.Bank_Guarantee__c == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "25%" }}>
                <Text>No</Text>
                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Bank_Guarantee__c",
                      edited_value: "No",
                    })
                  }
                  selected={form.Bank_Guarantee__c == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
        </View>

        {/* <View>
          <Text
            style={{
              color: Colors.primary,
              marginLeft: "5%",
              fontWeight: "bold",
              fontSize: wp("3.9"),
            }}
          >
            Recommended Credit Limit
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
                  LTVS- Monthly volume
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
                  value={form.LTVS_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "LTVS_Monthly_volume__c",
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
                  DTVS Monthly volume
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
                  value={form.DTVS_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "DTVS_Monthly_volume__c",
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
                  {"L&O Monthly volume"}
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
                  value={form.L_O_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "L_O_Monthly_volume__c",
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
                  2WH Monthly volume
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
                  value={form.X2WH_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "X2WH_Monthly_volume__c",
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
                  Battery Monthly volume
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
                  value={form.Battery_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "Battery_Monthly_volume__c",
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
                  Lube Monthly volume
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
                  value={form.Lube_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "Lube_Monthly_volume__c",
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
                  Service Monthly volume
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
                  value={form.Service_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "Service_Monthly_volume__c",
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
                  Others Monthly volume
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
                  value={form.Others_Monthly_volume__c}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "Others_Monthly_volume__c",
                      edited_value: value,
                    })
                  }
                />
              </View>
            </View>
          </View>
        </View> */}
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
