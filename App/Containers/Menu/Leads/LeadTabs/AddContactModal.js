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
import LeadHeader from "../LeadHeader";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
class AddContactModal extends Component {
  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "column" }}>
          <View>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"TYPE"}
            </Text>

            <SearchableDropdown
              //   dataSource={options1}
              //   placeHolderText={"Select Project Type"}
              dropstyle={{
                left: "4%",
                width: wp("3"),
                height: wp("3"),
                marginTop: "3%",
              }}
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

          <View style={{ marginTop: hp("2%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"NAME"}
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

          <View style={{ marginTop: hp("3%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"CONTACT NUMBER"}
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

          <View style={{ marginTop: hp("3%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"WHATSAPP"}
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

          <View style={{ marginTop: hp("3%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"Address"}
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

          <View style={{ marginTop: hp("3%"), flexDirection: "row" }}>
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

          <View style={{ alignSelf: "center", marginTop: hp("2.5%") }}>
            <TouchableOpacity
              style={{ ...Styles.buttons }}

              // onPress={() => {this.props.closeModal(),NavigationService.navigate("EndDayScreen")}}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: hp("0.5%"),
                }}
              >
                <Text
                  style={{
                    ...Styles.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                    fontSize: 19,
                  }}
                >
                  {"SUBMIT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddContactModal);

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
    marginLeft:wp("-33%"),
    // opacity:0.1
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("117%"),
    borderWidth: 0.8,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    // marginTop: 5,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("1%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
});
