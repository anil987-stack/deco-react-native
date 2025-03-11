import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
class ProjectInfo extends Component {
  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View>
        <View style={{ flexDirection: "column", marginTop: hp("2%") }}>
          <View>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"PROJECT NAME"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("83%"),
                left: wp("1%"),

                borderColor: "transparent",

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>

          <View style={{ marginTop: hp("10%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"ADDRESS"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("83%"),
                left: wp("1%"),

                borderColor: "transparent",

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>

          <View style={{ marginTop: hp("10%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"TOWN"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  borderBottomColor: Colors.grey,
                  width: wp("40%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"PIN"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  borderBottomColor: Colors.grey,
                  width: wp("40%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>
          </View>

          <View style={{ marginTop: hp("10%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"STATE"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  borderBottomColor: Colors.grey,
                  width: wp("40%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"EMD"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  // borderRadius: 5,
                  borderBottomColor: Colors.grey,
                  width: wp("40%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>
          </View>

          <View style={{ marginTop: hp("10%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"PROJCT TYPE"}
              </Text>
              <View
                style={{
                  height: hp("6.8%"),
                  marginLeft: wp(".8%"),
                }}
              >
                <SearchableDropdown
                  //   dataSource={options1}
                  //   placeHolderText={"Select Project Type"}
                  // dropstyle={{
                  // left: "4%",
                  // width: wp("3"),
                  // height: wp("2"),
                  // marginTop: "3%",
                  // }}
                  //   selectedValue={form.Secondary_No_Whatsapp}
                  //   onChange={(value) =>
                  //     this.props.changeForm({
                  //       edited_field: "Secondary_No_Whatsapp",
                  //       edited_value: value,
                  //     })
                  //   }
                  placeholder={"Type or Select Project Type"}
                  invalid={false}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                />
              </View>
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"SITE STAGE"}
              </Text>
              <View
                style={{
                  height: hp("6.8%"),
                }}
              >
                <SearchableDropdown
                  //   dataSource={options1}
                  //   placeHolderText={"Select Project Type"}
                  // dropstyle={{
                  // left: "4%",
                  // width: wp("3"),
                  // height: wp("2"),
                  // marginTop: "3%",
                  // }}
                  //   selectedValue={form.Secondary_No_Whatsapp}
                  //   onChange={(value) =>
                  //     this.props.changeForm({
                  //       edited_field: "Secondary_No_Whatsapp",
                  //       edited_value: value,
                  //     })
                  //   }
                  placeholder={"Type or Select Project Type"}
                  invalid={false}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              // paddingTop: 2,
              alignSelf: "flex-start",
              height: wp("1%"),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: wp("20%"),
                marginLeft: wp("2%"),
              }}
            >
              <FontAwesome5
                name={"file-invoice-dollar"}
                // style={{
                //   fontSize: wp("4.5%"),
                //   color: Colors.black,
                //   zIndex: 10,
                //   backgroundColor: "white",
                //   borderRadius: 22,
                //   // elevation: 12,
                //   // margin: wp("-1.2"),
                //   width: wp("8%"),
                //   height: hp("4%"),
                //   elevation: 15,
                //   borderRadius: 50,
                // }}
                show={true}
                style={{
                  fontSize: wp("4.5%"),
                  color: Colors.black,
                  width: wp("8%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 50,
                  elevation: 15,
                  // left: wp("4%"),
                  height: hp("4%"),
                  padding: 5,
                  // paddingBottom: hp("-1%"),
                  paddingLeft:wp("2.3%"),
                  margin: wp("-1"),
                }}
              />
              <LinearGradient
                colors={["#943e3e", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("49%"),
                  alignSelf: "flex-end",
                  marginBottom: hp("0%"),
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.5%"),
                  }}
                >
                  {"ESTIMATED QUANTITY (IN SHEETS)"}
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View style={{ marginTop: hp("16%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"LAM 1.0 MM"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  borderBottomColor: Colors.grey,
                  width: wp("26%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"LAM 0.8 MM"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  // borderRadius: 5,
                  borderBottomColor: Colors.grey,
                  width: wp("26%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"RECON"}
              </Text>
              <TextInput
                style={{
                  height: hp("4.7%"),
                  borderWidth: 1,
                  // borderRadius: 5,
                  borderBottomColor: Colors.grey,
                  width: wp("26%"),
                  left: wp("1%"),

                  borderColor: "transparent",

                  // backgroundColor:"black"
                }}
                placeholderTextColor="white"
                // placeholder={"Source Of Lead"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>
          </View>

          {/* <View style={{ marginTop: hp("10%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"PROJECT TYPE"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("40%"),
                left: wp("1%"),

                borderColor: "transparent",

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>

          <View style={{ marginTop: hp("10%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"SITE STAGE"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("40%"),
                left: wp("1%"),

                borderColor: "transparent",

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View> */}

         
          <View style={{ flexDirection: "row", marginTop: hp("10%") }}>
            <View>
              <View style={{ marginLeft: wp("0%"), marginTop: hp("0%") }}>
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "black",
                    borderStyle: "solid",
                    color: "white",
                    // marginLeft: wp("6%"),
                    fontWeight: "bold",
                    fontSize: wp("2.8%"),
                    height: hp("3.3%"),
                    textAlign: "center",
                    width: wp("21%"),
                    textAlignVertical: "center",
                  }}
                >
                  SOURCE
                </Text>
              </View>

              <View
                style={{
                  width: wp("25%"),
                  // marginLeft: wp("12%"),
                  backgroundColor: "#FFBD2E",
                  height: hp("3.7%"),
                  flexDirection: "row",
                  marginTop: hp("3%"),
                }}
              >
                <TextInput
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("2.8%"),

                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                  placeholder={"---"}
                  // value={form.Attendee_Name__c}
                  // onChange={(value) =>
                  //   changeForm({
                  //     edited_field: "Attendee_Name__c",
                  //     edited_value: value,
                  //   })
                  // }
                />

                {/* <View
                  style={{
                    height: hp("2%"),
                    width: 2,
                    backgroundColor: "black",
                    alignSelf: "center",
                    // marginTop:hp("-9%"),
                    // marginLeft: wp("6%"),
                  }}
                /> */}

                {/* <TextInput
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",

                    // backgroundColor: "#FFBD2E",
                    // width:wp("3%"),

                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                  placeholder={"---"}
                  // value={form.Attendee_Name__c}
                  // onChange={(value) =>
                  //   changeForm({
                  //     edited_field: "Attendee_Name__c",
                  //     edited_value: value,
                  //   })
                  // }
                /> */}
              </View>
            </View>

            <View style={{ marginLeft: wp("5%") }}>
              <View style={{ marginLeft: wp("0%"), marginTop: hp("0%") }}>
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "black",
                    borderStyle: "solid",
                    color: "white",
                    // marginLeft: wp("6%"),
                    fontWeight: "bold",
                    fontSize: wp("2.8%"),
                    height: hp("3.3%"),
                    textAlign: "center",
                    width: wp("21%"),
                    textAlignVertical: "center",
                  }}
                >
                  STAGE
                </Text>
              </View>

              <View
                style={{
                  width: wp("25%"),
                  // marginLeft: wp("12%"),
                  backgroundColor: "#FFBD2E",
                  height: hp("3.7%"),
                  flexDirection: "row",
                  marginTop: hp("3%"),
                }}
              >
                <TextInput
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("2.8%"),

                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                  placeholder={"---"}
                  // value={form.Attendee_Name__c}
                  // onChange={(value) =>
                  //   changeForm({
                  //     edited_field: "Attendee_Name__c",
                  //     edited_value: value,
                  //   })
                  // }
                />

            
              </View>
            </View>

            <View style={{ marginLeft: wp("5%") }}>
              <View style={{ marginLeft: wp("0%"), marginTop: hp("0%") }}>
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "black",
                    borderStyle: "solid",
                    color: "white",
                    // marginLeft: wp("6%"),
                    fontWeight: "bold",
                    fontSize: wp("2.8%"),
                    height: hp("3.3%"),
                    textAlign: "center",
                    width: wp("21%"),
                    textAlignVertical: "center",
                  }}
                >
                  STATUS
                </Text>
              </View>

              <View
                style={{
                  width: wp("25%"),
                  // marginLeft: wp("11.9%"),
                  backgroundColor: "#FFBD2E",
                  height: hp("3.7%"),
                  flexDirection: "row",
                  marginTop: hp("3%"),
                }}
              >
                <TextInput
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("2%"),

                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                  placeholder={"---"}
                  // value={form.Attendee_Name__c}
                  // onChange={(value) =>
                  //   changeForm({
                  //     edited_field: "Attendee_Name__c",
                  //     edited_value: value,
                  //   })
                  // }
                />

              
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  pjpFilters: state.menu.leadFilters,

  leadlist: state.menu.leadlist,
});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectInfo);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("64%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  picker: {
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("40%"),
    borderWidth: 0.8,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    // marginTop: 5,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
    height: wp("6%"),
    marginTop: wp("1%"),
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    // padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
});

// import { CheckBox, Radio } from "native-base";
// import React, { Component } from "react";
// import {
//   Text,
//   TextInput,
//   View,
//   ScrollView,
//   Alert,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import Colors from "App/Theme/Colors";
// import BlueButton from "App/Components/BlueButton";
// import { connect } from "react-redux";
// import { xorBy } from "lodash";
// import InputText from "App/Components/FormInput/InputText";
// import InputNumber from "App/Components/FormInput/InputNumber";
// import SearchableDropdown from "App/Components/SearchableDropdown";
// import GenericIcon from "App/Components/GenericIcon";
// import { HelperService } from "App/Services/Utils/HelperService";
// import NavigationService from "App/Services/NavigationService";
// import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import TextArea from "App/Components/FormInput/TextArea";
// import SelectDate from "App/Components/SelectDate";
// import SelectBox from "react-native-multi-selectbox";
// import MenuActions from "App/Stores/Menu/Actions";
// import InputText2 from "../../../../Components/FormInput/InputText2";
// // import { Headerbar } from "../../Components/Headerbar";
// const options1 = [
//   { id: "Nukad Meet", name: "Nukad Meet" },
//   { id: "Canopy campaign", name: "Canopy campaign" },
//   { id: "Van Campaign", name: "Van Campaign" },
//   { id: "Umbrella Campaign", name: "Umbrella Campaign" },
//   { id: "Product campaign", name: "Product campaign" },
//   {
//     id: "Jodidars technical training program",
//     name: "Jodidars technical training program",
//   },
//   { id: "Small Chai Meet", name: "Small Chai Meet" },
//   { id: "Others", name: "Others" },
// ];

// class ProjectInfo extends Component {
//   componentDidMount() {
//     this.props.clearCampaignForm();
//   }
//   constructor(props) {
//     super(props);
//     this.state = { text: "", selectedLine: [] };
//   }
//   onMultiChangeLine() {
//     return (item) =>
//       this.setState({
//         selectedLine: xorBy(this.state.selectedLine, [item], "id"),
//       });
//   }
//   getLine() {
//     let data = [];
//     if (this.state.selectedLine.length) {
//       this.state.selectedLine.map((obj, index) => {
//         data.push(obj.item);
//       });
//     }
//     return data;
//   }
//   onCheck() {
//     const { form, changeCampaignForm, userdetail, userid, token } = this.props;
//     let data = {
//       records: [
//         {
//           attributes: { type: "Campaign_Requisition__c", referenceId: "ref1" },

//           Branch__c: userdetail.Branch_Master__c,
//           BTL_activity_type__c: form.BTL_activity_type__c,
//           Other_BTL_activity__c: form.OtherBTLactivity
//             ? form.Other_BTL_activity__c
//             : "",
//           Outcome_of_the_Campaign__c: form.Outcome_of_the_Campaign__c,
//           Number_Planned__c: form.Number_Planned__c,
//           Budget_Planned__c: form.Budget_Planned__c,
//           Number_Actual__c: "0",
//           Budget_Actual__c: "0",
//           Campaign_Status__c: "Draft",
//           Budget_allocated__c: "0",
//           Remarks__c: form.Remarks__c,
//           Give_aways_required__c: this.getLine()
//             .map((item) => item)
//             .join(";"),
//           Snacks_Planned__c: form.Snacks_Planned__c,

//           Campaign_created_date__c: HelperService.dateReadableFormatWithHyphen(),
//           Campaign_on__c: form.Campaign_on__c,
//           Complaint_raised__c: form.Complaint_raised__c,
//           Campaign_Requisition_raised_by__c: userid,
//         },
//       ],
//     };
//     if (!form.Campaign_on__c) {
//       HelperService.showToast({
//         message: "Campaign On Field is empty",
//       });
//     } else if (!form.BTL_activity_type__c) {
//       HelperService.showToast({
//         message: "BTL Activity Type Field is empty",
//       });
//     } else if (!form.Number_Planned__c) {
//       HelperService.showToast({
//         message: "Planned Number Field is empty",
//       });
//     } else if (!form.Budget_Planned__c) {
//       HelperService.showToast({
//         message: "Planned Budget Field is empty",
//       });
//     } else if (!form.Remarks__c) {
//       HelperService.showToast({
//         message: "Remarks Field is empty",
//       });
//     } else if (!form.Outcome_of_the_Campaign__c) {
//       HelperService.showToast({
//         message: "Outcome of Campaign Field is empty",
//       });
//     } else if (!form.Complaint_raised__c) {
//       HelperService.showToast({
//         message: "Complaint Raised Field is empty",
//       });
//     } else if (!this.getLine().length) {
//       HelperService.showToast({
//         message: "Select Giveways",
//       });
//     } else if (!form.Snacks_Planned__c) {
//       HelperService.showToast({
//         message: "Select Snack Planned",
//       });
//     } else {
//       this.props.createCampaign({
//         form: data,
//         token,
//       });
//     }
//   }
//   snack() {
//     return HelperService.showToast({
//       message: "Select Snack Planned",
//     });
//   }
//   render() {
//     const { form, changeForm, userdetail, userid } = this.props;
//     // console.log("kkkkkkkkkk", this.getLine());

//     return (
//       <ScrollView>
//         <View style={{ flex: 1, marginBottom: wp("50") }}>

//           {/* <View style={Styles.head}>
//             <TouchableOpacity transparent>
//               <GenericIcon
//                 name={"arrow-back"}
//                 onPress={NavigationService.goback}
//                 style={{
//                   color: Colors.white,
//                   fontSize: wp("8%"),
//                   marginLeft: hp("1"),
//                   marginTop: hp("1"),
//                 }}
//               />
//             </TouchableOpacity>
//             <View style={{ justifyContent: "center", alignSelf: "center" }}>
//               <Text style={Styles.t1}>
//                 {"Event "}
//                 <Text style={Styles.t3}>Form</Text>{" "}
//               </Text>
//             </View>
//           </View> */}
//           <View
//             style={{ flexDirection: "column", flexWrap: "wrap", top: hp("2%") }}
//           >

// <View style={{ width: "80%",marginLeft:"3%",marginTop:"3%", }}>
//           {/* <Text
//             style={{
//               fontSize: 16,
//             //   fontWeight: "bold",
//               color: "black",
//               bottom: hp("0.5%"),
//               left: wp("0.5%"),
//             }}
//           >

//           </Text> */}
//           <MultipleImagePicker
//             // title={"Take Pictue"}
//             images={[]}
//             // loading={uploadLocalImageLoader}
//             // onClearImage={(value) =>
//             //   changeVisitInfoForm({
//             //     edited_field: "attachment_url__c",
//             //     edited_value: "",
//             //   })
//             // }
//             // onImageSuccess={({ image, fileName, fileUri }) => {
//             //   // console.log("item",image,fileName,fileUri)
//             //   uploadLocalImage({
//             //     token: token,
//             //     id: executeVisitData.Id,
//             //     params: {
//             //       Title: fileName,
//             //       OwnerId: userId,
//             //       VersionData: image,
//             //       ContentLocation: "S",
//             //       PathOnClient: fileUri,
//             //     },
//             //     multiple: false,
//             //     // previous_value: visitInfoForm.attachment_url__c
//             //   });
//             // }}
//           ></MultipleImagePicker>

//         </View>

//         <View style={{ width: "80%",marginLeft:"3%",marginTop:"3%", }}>
//           {/* <Text
//             style={{
//               fontSize: 16,
//             //   fontWeight: "bold",
//               color: "black",
//               bottom: hp("0.5%"),
//               left: wp("0.5%"),
//             }}
//           >

//           </Text> */}
//           <MultipleImagePicker
//             // title={"Take Pictue"}
//             images={[]}
//             // loading={uploadLocalImageLoader}
//             // onClearImage={(value) =>
//             //   changeVisitInfoForm({
//             //     edited_field: "attachment_url__c",
//             //     edited_value: "",
//             //   })
//             // }
//             // onImageSuccess={({ image, fileName, fileUri }) => {
//             //   // console.log("item",image,fileName,fileUri)
//             //   uploadLocalImage({
//             //     token: token,
//             //     id: executeVisitData.Id,
//             //     params: {
//             //       Title: fileName,
//             //       OwnerId: userId,
//             //       VersionData: image,
//             //       ContentLocation: "S",
//             //       PathOnClient: fileUri,
//             //     },
//             //     multiple: false,
//             //     // previous_value: visitInfoForm.attachment_url__c
//             //   });
//             // }}
//           ></MultipleImagePicker>

//         </View>

// <View style={{ width: "90%", margin: 10 }}>
//               <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),
//                 }}
//               >
//                 Source Of Lead
//               </Text>

//               <TextInput
//                 style={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),

//                 }}
//                 placeholderTextColor="#f5b8c0"
//                 placeholder={"Source Of Lead"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Number_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 // keyboardType="numeric"
//                 // value={form.Number_Planned__c}
//               />
//             </View>

//             <View style={{ width: "90%", marginLeft: 10, top: hp("1%") }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>Project Name</Text>

//               <TextInput
//                 style={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),
//                 }}
//                 placeholderTextColor="#f5b8c0"
//                 placeholder={"Enter Project Name"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Number_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 // keyboardType="numeric"
//                 // value={form.Number_Planned__c}
//               />
//             </View>

//             <View style={{ width: "90%", margin: 10 }}>
//             <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),marginTop:"5%"
//                 }}
//               >
//                 Address
//               </Text>

//               <InputText2
//                 //   label={"Select Address"}
//                 //   placeholder=""
//                   name={"arrow-drop-down"}
//                   styleicon={{fontSize:hp('5'),
//                   marginTop:-3,marginLeft:wp('0%'),
//                   color:"lightgrey"}}
//                   style={{
//                     height: 38,
//                     borderWidth: 1,
//                     borderRadius: 5,
//                     borderColor: Colors.primary,
//                     width: wp("90%"),
//                     left: wp("1%"),
//                     top: hp("1%"),
//                   }}
//                   onpress={() => {
//                     // if(!this.getLeadSourceType())
//                     // {
//                     //   if(HelperService.getNameFromSFID( GetSourceType ,form.lead_source_type, 'name')=='RLD')
//                     //   {
//                     //     changeform({ edited_field: 'geocoordinate__longitude__s', edited_value:currentLocation.longitude  });
//                     //     changeform({ edited_field: 'geocoordinate__latitude__s', edited_value:currentLocation.latitude  });
//                     //     NavigationService.navigate('NewAddress', {type:'Lead', editState:true})
//                     //   }
//                     //   else{

//                         // NavigationService.navigate('SetLocation',)
//                 //       }
//                 //   }
//                   }}

//                 />

//             </View>

//             <View style={{ marginTop: hp("1.5%"), width: wp("90%"), }}>
//             <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Project Type</Text>
//             <SearchableDropdown
//             //   dataSource={options1}
//               placeHolderText={"Select Project Type"}
//               dropstyle={{left:"4%",
//               width: wp("3"),
//               height: wp("3"),
//             marginTop:"4%"}}
//             //   selectedValue={form.Secondary_No_Whatsapp}
//             //   onChange={(value) =>
//             //     this.props.changeForm({
//             //       edited_field: "Secondary_No_Whatsapp",
//             //       edited_value: value,
//             //     })
//             //   }
//               placeholder={"Type or Select Project Type"}
//               invalid={false}
//               customPickerStyles={{ ...Styles.picker,left:"25%" }}
//               labelStyles={{ ...Styles.pickerLabel }}
//               //invalid={validation.invalid && validation.invalid_field == 'area__c'}
//             />
//           </View>

//           <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
//             <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Project Stage</Text>
//             <SearchableDropdown
//             //   dataSource={options1}
//               placeHolderText={"Select Project Stage"}
//               dropstyle={{left:"4%",
//               width: wp("3"),
//               height: wp("3"),
//             marginTop:"4%"}}
//             //   selectedValue={form.Secondary_No_Whatsapp}
//             //   onChange={(value) =>
//             //     this.props.changeForm({
//             //       edited_field: "Secondary_No_Whatsapp",
//             //       edited_value: value,
//             //     })
//             //   }
//               placeholder={"Type or Select Project Stage"}
//               invalid={false}
//               customPickerStyles={{ ...Styles.picker,left:"25%" }}
//               labelStyles={{ ...Styles.pickerLabel }}
//               //invalid={validation.invalid && validation.invalid_field == 'area__c'}
//             />
//           </View>

//             <View
//               style={{
//                 width: "88%",
//                 margin: 10,
//                 marginLeft: wp("4%"),
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 16,
//                   fontWeight: "bold",
//                   color: Colors.subtitle,
//                   bottom: hp("0.5%"),
//                   left: wp("0.5%"),
//                 }}
//               >
//                 Expected Maturity Date
//               </Text>
//               <View
//                 style={{
//                   borderRadius: 8,
//                   borderWidth: 1,
//                   borderColor: Colors.primary,
//                   height: hp("5.5%"),
//                   alignContent: "center",
//                 }}
//               >
//                 <SelectDate
//                   // date={form.Campaign_on__c}
//                 //   minDate={new Date()}
//                   // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
//                   // onDateChange={(date) =>
//                   //   changeForm({
//                   //     edited_field: "Campaign_on__c",
//                   //     edited_value: date,
//                   //   })
//                   // }
//                 />
//               </View>
//             </View>

//             <View style={{ width: "90%", margin: 10 }}>
//               <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),
//                 }}
//               >
//                 Estimated Lead Quantity
//               </Text>

//               <InputNumber
//                 styles={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),
//                 }}
//                 placeholder={"Lead Quantity"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Number_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 // keyboardType="numeric"
//                 // value={form.Number_Planned__c}
//               />
//             </View>

//             <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
//             <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Project Status</Text>
//             <SearchableDropdown
//             //   dataSource={options1}
//               placeHolderText={"Select Project Status"}
//               dropstyle={{left:"4%",
//               width: wp("3"),
//               height: wp("3"),
//             marginTop:"4%"}}
//             //   selectedValue={form.Secondary_No_Whatsapp}
//             //   onChange={(value) =>
//             //     this.props.changeForm({
//             //       edited_field: "Secondary_No_Whatsapp",
//             //       edited_value: value,
//             //     })
//             //   }
//               placeholder={"Type or Select Project Status"}
//               invalid={false}
//               customPickerStyles={{ ...Styles.picker,left:"25%" }}
//               labelStyles={{ ...Styles.pickerLabel }}
//               //invalid={validation.invalid && validation.invalid_field == 'area__c'}
//             />
//           </View>

//             {/* <View style={{ width: "90%", margin: 10 }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>
//                 Event Type*
//               </Text>
//               <SearchableDropdown
//                 dataSource={options1}
//                 placeHolderText={"Select Event Type"}
//                 selectedValue={form.BTL_activity_type__c}
//                 onChange={(value) =>
//                   changeForm({
//                     edited_field: "BTL_activity_type__c",
//                     edited_value: value,
//                   })
//                 }
//                 placeholder={"Type or Select Event Type"}
//                 customPickerStyles={{ ...Styles.picker }}
//                 // placeholder={{ color: "grey" }}
//                 labelStyles={{ ...Styles.pickerLabel }}
//                 key={form.BTL_activity_type__c}
//               />
//             </View> */}

//             {/* {form.BTL_activity_type__c == "Others" ? (
//               <View style={{ width: wp("90"), marginLeft: wp("4") }}>
//                 <TextInput
//                   style={{
//                     height: 40,
//                     borderWidth: 1,
//                     borderRadius: 5,
//                     borderColor: Colors.primary,
//                   }}
//                   placeholder="Enter BTL Activity Type"
//                   onChangeText={(text) =>
//                     changeForm({
//                       edited_field: "Other_BTL_activity__c",
//                       edited_value: text,
//                     })
//                   }
//                   value={form.Other_BTL_activity__c}
//                 />
//               </View>
//             ) : (
//               []
//             )} */}

//             {/* <View style={{ width: "90%", margin: 10 }}>
//               <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),
//                 }}
//               >
//                 Event Owner
//               </Text>

//               <TextInput
//                 style={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),
//                 }}
//                 placeholder={"Enter Event Owner"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Number_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 // keyboardType="numeric"
//                 // value={form.Number_Planned__c}
//               />
//             </View>

//             <View style={{ width: "90%", marginLeft: 10, top: hp("2%") }}>
//               <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),
//                 }}
//               >
//                 Planned Budget*
//               </Text>

//               <TextInput
//                 style={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),
//                 }}
//                 placeholder={"Enter Planned Budget"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Budget_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 keyboardType="numeric"
//                 // value={form.Budget_Planned__c}
//               />
//             </View>
//             <View style={{ width: "90%", marginLeft: 10, top: hp("5%") }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>Remarks*</Text>

//               <TextArea
//                 placeholder="Enter Remarks "
//                 numberOfLines={5}
//                 style={Styles.mb11}
//                 // label={"Remarks*"}
//                 // value={form.Remarks__c}
//                 //  error={validation.invalid && validation.invalid_field == 'Remarks__c'}
//                 // onChange={(value) =>
//                 //   this.props.changeForm({
//                 //     edited_field: "Remarks__c",
//                 //     edited_value: value,
//                 //   })
//                 // }
//               />
//             </View>

//             <View style={{ width: "90%", margin: 10 }}>
//               <Text
//                 style={{
//                   ...Styles.text,
//                   left: wp("1.5%"),
//                   marginTop:"12%"
//                 }}
//               >
//                 Event Owner
//               </Text>

//               <TextInput
//                 style={{
//                   height: 38,
//                   borderWidth: 1,
//                   borderRadius: 5,
//                   borderColor: Colors.primary,
//                   width: wp("90%"),
//                   left: wp("1%"),
//                   top: hp("1%"),
//                 }}
//                 placeholder={"Enter Event Owner"}
//                 // onChangeText={(text) =>
//                 //   changeForm({
//                 //     edited_field: "Number_Planned__c",
//                 //     edited_value: text,
//                 //   })
//                 // }
//                 // keyboardType="numeric"
//                 // value={form.Number_Planned__c}
//               />
//             </View> */}

//             {/* <View style={{ width: "90%", marginLeft: 10, top: hp("5%") }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>
//                 Outcome Of the Event*
//               </Text>

//               <TextArea
//                 placeholder="Enter Outcome Of the Event "
//                 numberOfLines={5}
//                 style={Styles.mb11}
//                 // label={"Remarks*"}
//                 value={form.Outcome_of_the_Campaign__c}
//                 //  error={validation.invalid && validation.invalid_field == 'Remarks'}
//                 onChange={(value) =>
//                   this.props.changeForm({
//                     edited_field: "Outcome_of_the_Campaign__c",
//                     edited_value: value,
//                   })
//                 }
//               />
//             </View> */}

//             {/* <View style={{ width: "90%", marginLeft: 10, top: hp("5%") }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>
//                 Complaints Raised*
//               </Text>

//               <TextArea
//                 placeholder="Enter Complaints Raised "
//                 numberOfLines={5}
//                 style={Styles.mb11}
//                 // label={"Remarks*"}
//                 value={form.Complaint_raised__c}
//                 //  error={validation.invalid && validation.invalid_field == 'Complaint_raised__c'}
//                 onChange={(value) =>
//                   this.props.changeForm({
//                     edited_field: "Complaint_raised__c",
//                     edited_value: value,
//                   })
//                 }
//               />
//             </View> */}
//             {/* <View
//               style={{
//                 width: wp("95%"),
//                 marginTop: hp("6%"),
//                 marginLeft: wp("4.5%"),
//               }}
//             >
//               <SelectBox
//                 label="Give aways required"
//                 labelStyle={{
//                   color: Colors.black,
//                   fontWeight: "bold",
//                   fontSize: 15,
//                 }}
//                 width="90%"
//                 viewMargin="25px"
//                 containerStyle={{
//                   // elevation: 10,
//                   // backgroundColor:"#F9F6EE",
//                   // borderRadius: 2,
//                   justifyContent: "center",
//                   padding: 10,
//                   borderColor: "grey",
//                 }}
//                 options={[
//                   { id: "Key chain", item: "Key chain" },
//                   { id: "Pens", item: "Pens" },
//                   { id: "Writing pads", item: "Writing pads" },
//                   {
//                     id: "Laminated boards (A3 size) for fixing in garages",
//                     item: "Laminated boards (A3 size) for fixing in garages",
//                   },
//                   { id: "Cap", item: "Cap" },
//                 ]}
//                 selectedValues={this.state.selectedLine}
//                 onMultiSelect={this.onMultiChangeLine()}
//                 onTapClose={this.onMultiChangeLine()}
//                 listOptionProps={{ nestedScrollEnabled: true }}
//                 isMulti
//               />
//             </View> */}

//             {/* <View style={{ width: "90%", marginLeft: 10, top: hp("4%") }}>
//               <Text style={{ ...Styles.text, left: wp("1.5%") }}>
//                 Snacks Planned*
//               </Text>
//               <View style={{ flexDirection: "row", top: hp("2%") }}>
//                 <View
//                   style={{ flexDirection: "row", width: "35%", left: wp("2%") }}
//                 >
//                   <Text>Yes</Text>

//                   <Radio
//                     style={{ marginLeft: 10 }}
//                     onPress={() =>
//                       changeForm({
//                         edited_field: "Snacks_Planned__c",
//                         edited_value: "Yes",
//                       })
//                     }
//                     // selected={false}
//                     selected={form.Snacks_Planned__c == "Yes"}
//                     selectedColor={Colors.primary}
//                     color={Colors.primary}
//                   />
//                 </View>
//                 <View style={{ flexDirection: "row", width: "35%" }}>
//                   <Text>No</Text>

//                   <Radio
//                     style={{ marginLeft: 10 }}
//                     onPress={() =>
//                       changeForm({
//                         edited_field: "Snacks_Planned__c",
//                         edited_value: "No",
//                       })
//                     }
//                     // selected={false}
//                     selected={form.Snacks_Planned__c == "No"}
//                     selectedColor={Colors.primary}
//                     color={Colors.primary}
//                   />
//                 </View>
//               </View>
//             </View> */}
//             {/* <View
//               style={{
//                 width: "90%",
//                 marginLeft: wp("4%"),
//                 top: hp("9%"),
//               }}
//             >
//               <Text style={{ fontSize: 17, fontWeight: "bold" }}>
//                 Attach Image
//               </Text>
//               <View style={{ ...Styles.bottomMargin }}>
//                 <MultipleImagePicker title={"Upload image"} images={[]}>
//                   <View style={Styles.recurringActionButton}>
//                     <Text style={Styles.recurringActionButtonText}>
//                       <GenericIcon
//                         name="camera"
//                         style={StyleSheet.recurringActionButtonIcon}
//                       />
//                       {"Take Image*"}
//                     </Text>
//                   </View>
//                 </MultipleImagePicker>
//               </View>
//             </View> */}

//           </View>
//         </View>
//       </ScrollView>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   userid: state.user.loginDetails.userId,
//   token: state.user.token,
//   form: state.menu.createCampaignlist,
//   // userdetail: state.startday.userDetailList.Employees__r.records[0],
//   loading: state.menu.createCampaignLoading,
// });

// const mapDispatchToProps = (dispatch) => ({
//   createCampaign: (params) => dispatch(MenuActions.createCampaign(params)),
//   changeForm: (params) => dispatch(MenuActions.changeCampaignForm(params)),
//   clearCampaignForm: (params) =>
//     dispatch(MenuActions.clearCampaignForm(params)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ProjectInfo);
// const Styles = StyleSheet.create({
//   text: {
//     color: Colors.subtitle,
//     fontSize: wp("3.9"),
//     fontWeight: "bold",
//   },
//   inputtext: {
//     height: hp("5"),
//     borderColor: "white",
//     borderWidth: 1,
//     alignSelf: "center",
//     backgroundColor: "white",
//     borderBottomColor: "lightgrey",
//     color: "black",
//     borderRadius: 4,
//   },
//   picker: {
//     borderRadius: 4,
//     borderColor: Colors.primary,
//     width: wp("88%"),
//     borderWidth: 0.8,
//     elevation: 5,
//     backgroundColor: "white",
//     // height: hp('5.5%'),
//     marginTop: 5,
//     marginBottom: hp("2%"),
//     fontSize: wp("2%"),
//     justifyContent: "center",
//   },
//   pickerLabel: {
//     color:"lightgrey",
//     fontSize: 15,
//     textAlign: "left",
//     width: "97%",
//     padding: 10,
//     marginLeft: 15,
//     flexDirection: "row",
//     fontWeight:"100"
//   },
//   t1: {
//     fontSize: hp("3"),
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   t3: {
//     fontSize: hp("3"),
//     fontWeight: "bold",
//     color: "black",
//   },
//   head: {
//     height: hp("14%"),
//     backgroundColor: Colors.primary,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     flexDirection: "column",
//   },
//   bottomMargin: {
//     marginBottom: hp("2%"),
//     width: "100%",
//   },
//   recurringActionButtonText: {
//     color: Colors.button,
//     fontSize: wp("4%"),
//     textTransform: "capitalize",
//   },
//   recurringActionButtonIcon: {
//     color: Colors.primary,
//     fontSize: wp("4%"),
//   },
//   mb11: {
//     marginBottom: hp("2%"),
//     height: hp("14.5%"),
//     width: wp("87%"),
//     fontSize: wp("3.5%"),
//     borderWidth: 1,
//     marginHorizontal: 2,
//     elevation: 4,
//     backgroundColor: "white",
//     borderRadius: 4,
//     top: hp("1.5%"),
//     borderColor: Colors.primary,
//   },
// });

