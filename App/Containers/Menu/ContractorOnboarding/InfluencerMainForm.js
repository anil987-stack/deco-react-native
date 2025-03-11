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
  CheckBox,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
import { HeaderBackground } from "../../../Components/Headerbar/HeaderBackground";
import FormBackground from "../../../Components/FormInput/FormBackground";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
class InfluencerMainForm extends Component {
  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View>
        <View style={{ flexDirection: "column", marginTop: hp("1%") }}>
          <View>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"INFLUENCER NAME"}
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

          <View style={{ marginTop: hp("2.5%"), flexDirection: "row" }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
                marginBottom: hp("9%"),
              }}
            >
              {"INFLUENCER TYPE"}
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
              customPickerStyles={{ ...Styles.picker2 }}
              labelStyles={{ ...Styles.pickerLabel2 }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View style={{ marginTop: hp("-1%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"MOBILE NO."}
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
            </View>

            <View style={{ marginLeft: wp("3%") }}>
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
            </View>
          </View>

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"EMAIL ID"}
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

          <View style={{ marginTop: hp("2.5%"), flexDirection: "row" }}>
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
                keyboardType="numeric"
                // value={form.Number_Planned__c}
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

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"PAN NO."}
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
              {"ADHAR NO."}
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

          {/* <View style={{ marginTop: hp("2.5%") }}>
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
        </View> */}

          <View style={{ marginTop: hp("2.5%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"DATE OF BIRTH"}
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
                {"DATE OF ANNIVERSARY"}
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
                keyboardType="numeric"
                // value={form.Number_Planned__c}
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
              {"RETAILER TYPE"}
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

          <View style={{ flexDirection: "row", marginTop: hp("1.3%") }}>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={Styles.checkbox}
            />
            <Text
              style={{
                alignItems: "center",
                fontWeight: "bold",
                color: "grey",
                fontFamily: "HelveticaNeue_CondensedBold",
                fontSize: wp("2.5%"),
                marginLeft: wp("0%"),
                marginTop: hp("2.2%"),
              }}
            >
              {"PLEASE CHECK IF FIRM NAME IS SAME AS INFLUENCER"}
            </Text>
          </View>

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"INFLUENCER FIRM NAME"}
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
              {"INFLUENCER CATEGORY"}
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

          <View style={{ marginTop: hp("1.7%"), flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"MOBILE NO."}
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
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"LAND LINE NO."}
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
            </View>
          </View>

          <View style={{ marginTop: hp("2.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"EMAIL ID"}
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

          <View style={{ marginTop: hp("2.5%"), flexDirection: "row" }}>
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
                keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>
          </View>

          <View style={{ marginTop: hp("2.5%"), marginBottom: hp("7%") }}>
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

          <View style={{ marginTop: hp("-4.5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"GSTIN"}
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

          <View style={{ marginTop: hp("2%"), marginBottom: hp("5%") }}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"CIN"}
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
export default connect(mapStateToProps, mapDispatchToProps)(InfluencerMainForm);

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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    // alignSelf: "center",
    marginTop: hp("1.2%"),
    // marginLeft: wp("-45%"),
    // backgroundColor:"white"
  },

  picker2: {
    marginLeft: wp("-33%"),
    // opacity:0.1
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("84%"),
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
  pickerLabel2: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
});
