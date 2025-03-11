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

  // mobileValidation = (value) => {
  //   let show = this.props.shows;
  //   if (value.length <= 10) {
  //     this.setState({
  //       MobileNo: value,
  //       MobileNoError: "",
  //     });
  //     this.props.changeForm({
  //       edited_field: show == false ? "mobile" : "Mobile__c",
  //       edited_value: value,
  //     });
  //   } else {
  //     this.setState({
  //       MobileNo: value,
  //       MobileNoError: "Mobile no must have 10 digit",
  //     });
  //   }
  // };
  // postalValidation = (value) => {
  //   let show = this.props.shows;
  //   if (value.length <= 6) {
  //     this.setState({
  //       MobileNo: value,
  //       MobileNoError: "",
  //     });
  //     // this.props.changeForm({ edited_field: 'pinCode', edited_value: value })
  //     this.props.changeForm({
  //       edited_field: show == false ? "pinCode" : "Pin_Code__c",
  //       edited_value: value,
  //     });
  //   } else {
  //     this.setState({
  //       MobileNo: value,
  //       MobileNoError: "Mobile no must have 10 digit",
  //     });
  //   }
  // };

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
    // let show = this.props.shows;
    // let location =  HelperService.requestLocation();

    return (
      <ScrollView>
        <View style={{ flex: 1, marginTop: wp("5"), marginBottom: wp("50") }}>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Contact Name</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Contact Name"}
                value={form.Name}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Contact_Name",
                    edited_value: value,
                  })
                }
              />
            </View>
          </View>
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Workshop Name</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Workshop Name"}
                value={form.Workshop_name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Workshop_name__c",
                    edited_value: value,
                  })
                }
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Primary Mob No.</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Primary Mob No."}
                value={form.Primary_Mob_No}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Primary_Mob_No",
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
          <Text style={{ color: "red", left: wp("5.5%") }}>
            {this.validatePhoneNumber(form.Primary_Mob_No)
              ? ""
              : "Invalid Phone No."}
          </Text>
          {/* <View style={{ marginTop: hp("1.5%"), width: wp("90%"),marginLeft: wp("4.5%") }}>
            <Text style={{...Styles.text,right:wp("3%")}}>Primary No. Whatsapp</Text>
            <SearchableDropdown
              dataSource={options1}
              placeHolderText={"Select Primary No. Whatsapp"}
              selectedValue={form.Type__c}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Primary_No_Whatsapp",
                  edited_value: value,
                })
              }
              placeholder={"Type or Select Number"}
              invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Secondary Mob No.</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Secondary Mob No."}
                value={form.Secondary_Mob_No}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Secondary_Mob_No",
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
          <Text style={{ color: "red", left: wp("5.5%") }}>
            {this.validatePhoneNumber(form.Secondary_Mob_No)
              ? ""
              : "Invalid Phone No."}
          </Text>
          {/* <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
            <Text style={Styles.text}>Secondary No. Whatsapp</Text>
            <SearchableDropdown
              dataSource={options1}
              placeHolderText={"Select Secondary No. Whatsapp"}
              selectedValue={form.Secondary_No_Whatsapp}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Secondary_No_Whatsapp",
                  edited_value: value,
                })
              }
              placeholder={"Type or Select Number"}
              invalid={false}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}
          {/* <View style={{ marginTop: hp("1.5%"), width: wp("90%") }}>
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
          </View> */}
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Whatsapp No.</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter Whatsapp No"}
                value={form.Whatsapp_Number__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Whatsapp_Number__c",
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
          </View> */}
          {/* <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validatePhoneNumber(form.Whatsapp_Number__c)
              ? ""
              : "Invalid Phone No."}
          </Text> */}
          {/* <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Email Id</Text>
            <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Email Id"}
                value={form.Email__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Email__c",
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
          <Text style={{ color: "red", left: wp("2.5%") }}>
            {this.validateEmail(form.Email__c) ? "" : "Invalid Email-Id"}
          </Text> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Address*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
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
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Pincode*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
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
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          {/* <View style={{ marginTop: hp("1.5%") }}>
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
          </View> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>City*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter City"}
                value={form.City ? form.City : form.City_Name__c}
                editable={true}
                onChange={(value) =>
                  changeForm({ edited_field: "City", edited_value: value })
                }
              />
            </View>
          </View>
          {/* <View style={{ marginTop: hp("1.5%") }}>
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
          </View> */}
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>State*</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter State"}
                value={form.States ? form.States : form.State_Name__c}
                editable={true}
                onChange={(value) =>
                  changeForm({ edited_field: "States", edited_value: value })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: hp("1.5%") }}>
            <Text style={Styles.text}>Mother Tongue</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Mother Tongue"}
                value={form.Address__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Mother_Tongue",
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
            <Text style={Styles.text}>Other Language Known</Text>
            <View style={{ width: wp("90"), marginLeft: wp("4.5%") }}>
              <InputText
                style={Styles.inputtext}
                placeholder={"Enter Other Language Known"}
                value={form.Address__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Other_Language_Known",
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
          <View
            style={{
              marginTop: hp("1%"),
              width: wp("90"),
              // marginLeft: wp("1.5%"),
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "white",
              borderWidth: 1,
              alignSelf: "center",
              backgroundColor: "white",
              elevation: 5,
              color: "black",
              borderRadius: 0,
            }}
          >
            <Text
              style={{
                ...Styles.text,
                textAlignVertical: "center",
                textAlign: "center",
              }}
            >
              DOB
            </Text>
            <SelectDate
              style={{ margin: 1 }}
              date={form.DOB}
              minDate={HelperService.dateReadableFormatWithHyphen(
                HelperService.getCurrentTimestamp()
              )}
              onDateChange={(date) =>
                changeForm({
                  edited_field: "DOB",
                  edited_value: date,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: hp("1%"),
              width: wp("90"),
              // marginLeft: wp("1.5%"),
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "white",
              borderWidth: 1,
              alignSelf: "center",
              backgroundColor: "white",
              elevation: 5,
              color: "black",
              borderRadius: 0,
            }}
          >
            <Text
              style={{
                ...Styles.text,
                textAlignVertical: "center",
                textAlign: "center",
              }}
            >
              Marriage Anniversary
            </Text>
            <SelectDate
              style={{ margin: 1 }}
              date={form.Marriage_Anniversary}
              minDate={HelperService.dateReadableFormatWithHyphen(
                HelperService.getCurrentTimestamp()
              )}
              onDateChange={(date) =>
                changeForm({
                  edited_field: "Marriage_Anniversary",
                  edited_value: date,
                })
              }
            />
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
