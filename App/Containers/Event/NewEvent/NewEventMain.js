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
import { HeaderBackground } from "../../../Components/Headerbar/HeaderBackground";
import FormBackground from "../../../Components/FormInput/FormBackground";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
class NewEventMain extends Component {
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
              {"EVENT NAME"}
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

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"EVENT TYPE"}
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

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"PLEASE SPECIFY"}
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

          {/* <View style={{ marginTop: hp("2.5%"), flexDirection: "row" }}> */}
            <View style={{ marginTop: hp("2.5%")}}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"SELECT DATE"}
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

            {/* <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"WHATSAPP NO."}
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
                keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View> */}
          {/* </View> */}

          <View style={{ marginTop: hp("2.5%") }}>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  height: wp("6%"),
                }}
              >
                <Text
                  style={{
                    ...Styles.text,
                    left: wp("1.5%"),
                  }}
                >
                  {"SELECT PARTNER TYPE"}
                </Text>
                <FontAwesome
                  name={"plus-circle"}
                  style={{
                    color: Colors.white,
                    fontSize: wp("5%"),
                    fontWeight: "bold",
                    marginLeft: wp("4%"),
                    // marginTop: 10,
                  }}
                />
              </View>

              <View
                style={{
                  height: hp("7%"),
                  width: wp("90%"),
                  // backgroundColor: Colors.white,
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
                  customPickerStyles={{ ...Styles.picker, width: wp("85%") }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                />
              </View>

            
            </View>

            <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"SELECT RETAILERS"}
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


          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"REQUEST BUDGET"}
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
              keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>

          <View style={{ marginTop: hp("2.5%"),marginBottom:hp("4%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"BUDGET REMARKS"}
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
export default connect(mapStateToProps, mapDispatchToProps)(NewEventMain);

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
    width: wp("83%"),
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
