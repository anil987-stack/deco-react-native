import { View, Text, Radio } from "native-base";
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
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import EditQuantity from "App/Components/EditQuantity/EditQuantity";
class Form extends Component {
  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View>
       
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: hp("30%"),
            borderStyle: "dotted",
            borderTopEndRadius: wp("4%"),
            borderTopLeftRadius: wp("4%"),
            marginTop: wp("-.8%"),
          }}
        >
          <View style={{ flexDirection: "column", marginTop: hp("4%") }}>
          <View
          style={{
            paddingTop: 2,
            alignSelf: "flex-start",
            height: wp("1%"),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: wp("-6%"),
              marginLeft: wp("5%"),
            }}
          >
            <GenericIcon
              name={"camera-outline"}
              style={{
                fontSize: wp("8%"),
                color: Colors.black,
                zIndex: 10,
                backgroundColor: "white",
                borderRadius: 22,
                // elevation: 12,
                margin: wp("-1.5"),
              }}
              show={true}
            />
            <LinearGradient
              colors={["#943e3e", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("2.8%"),
                width: wp("39%"),
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
                  paddingVertical: 2,
                  fontSize: wp("3%"),
                }}
              >
                {"LAST VISIT (10.06.22)"}
              </Text>
            </LinearGradient>
          </View>
        </View>
            
            <View
              style={{
                flexDirection: "row",
                marginTop: wp("3%"),
                marginBottom: wp("2%"),
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Radio
                  style={{ marginLeft: 10 }}
                  // onPress={() =>
                  //   changeForm({
                  //     edited_field: "Snacks_Planned__c",
                  //     edited_value: "Yes",
                  //   })
                  // }
                  // selected={false}
                  // selected={form.Snacks_Planned__c == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
                <Text
                  style={{
                    ...Styles.text,
                    left: wp("1.5%"),
                  }}
                >
                  {"PHYSICAL"}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: wp("5%") }}>
                <Radio
                  style={{ marginLeft: 10 }}
                  // onPress={() =>
                  //   changeForm({
                  //     edited_field: "Snacks_Planned__c",
                  //     edited_value: "Yes",
                  //   })
                  // }
                  // selected={false}
                  // selected={form.Snacks_Planned__c == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
                <Text
                  style={{
                    ...Styles.text,
                    left: wp("1.5%"),
                  }}
                >
                  {"CALL BASED"}
                </Text>
              </View>
            </View>
            <View style={{ paddingLeft: wp("2%"), paddingRight: wp("4%") }}>
              <Text
                style={{
                  ...Styles.text,
                  // left: wp("1.5%"),
                }}
              >
                {"OBJECTIVE"}
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
            <View
              style={{
                marginTop: wp("4%"),
                paddingLeft: wp("2%"),
                paddingRight: wp("4%"),
              }}
            >
              <Text
                style={{
                  ...Styles.text,
                  // left: wp("1.5%"),
                }}
              >
                {"OUTCOME"}
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

        <View
          style={{
            paddingTop: 2,
            alignSelf: "flex-start",
            height: wp("1%"),
            marginTop: wp("10%"),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: wp("-6%"),
              marginLeft: wp("5%"),
            }}
          >
            <GenericIcon
              name={"camera-outline"}
              style={{
                fontSize: wp("8%"),
                color: Colors.black,
                zIndex: 10,
                backgroundColor: "white",
                borderRadius: 22,
                elevation: 12,
                margin: wp("-1.5"),
              }}
              show={true}
            />
            <LinearGradient
              colors={["#943e3e", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("2.8%"),
                width: wp("32%"),
                alignSelf: "flex-end",
                marginBottom: hp("0%"),
                // opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 2,
                  fontSize: wp("3%"),
                }}
              >
                {"CURRENT VISIT"}
              </Text>
            </LinearGradient>
          </View>
        </View>

        <View style={{ height: wp("10%"), marginTop: wp("2%"), }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: wp("2%"),
              marginBottom: wp("2%"),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Radio
                style={{ marginLeft: 10 }}
                // onPress={() =>
                //   changeForm({
                //     edited_field: "Snacks_Planned__c",
                //     edited_value: "Yes",
                //   })
                // }
                // selected={false}
                // selected={form.Snacks_Planned__c == "Yes"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"PHYSICAL"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: wp("5%") }}>
              <Radio
                style={{ marginLeft: 10 }}
                // onPress={() =>
                //   changeForm({
                //     edited_field: "Snacks_Planned__c",
                //     edited_value: "Yes",
                //   })
                // }
                // selected={false}
                // selected={form.Snacks_Planned__c == "Yes"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                {"CALL BASED"}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            height: hp("21%"),
            borderStyle: "dotted",
            borderTopEndRadius: wp("4%"),
            borderTopLeftRadius: wp("4%"),
            marginTop: wp("1%"),
          }}
        >
          <View style={{ flexDirection: "column", marginTop: hp("0%") }}>
            <View
              style={{
                paddingLeft: wp("2%"),
                paddingRight: wp("4%"),
                paddingTop: wp("2%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...Styles.text,
                    // left: wp("1.5%"),
                  }}
                >
                  {"OBJECTIVE"}
                </Text>
                <GenericIcon
                  name={"circle"}
                  style={{
                    color: "#daa520",
                    // color: "#48d30a",
                    marginTop: hp("1.5%"),
                    fontSize: hp("3%"),

                    marginLeft: wp("2.5%"),
                    // backgroundColor:"transparent",
                    borderRadius: 60,
                    elevation: 0.6,
                    // right:"2%",
                    width: wp("6%"),
                    // paddingLeft:1,
                    height: hp("3%"),
                    // paddingTop:0,
                    marginTop: wp("-1%"),
                  }}
                  show={true}
                />
              </View>
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
                value={"OTHERS"}
              />
            </View>
            <View
              style={{
                marginTop: wp("4%"),
                paddingLeft: wp("2%"),
                paddingRight: wp("4%"),
              }}
            >
              <Text
                style={{
                  ...Styles.text,
                  // left: wp("1.5%"),
                }}
              >
                {"REMARKS"}
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

        <View
          style={{
            // borderColor: "white",
            // borderWidth: 1,
            height: hp("24%"),
            // borderStyle: "dotted",
            // borderTopEndRadius: wp("4%"),
            // borderTopLeftRadius: wp("4%"),
            marginTop: wp("5%"),
          }}
        >
          <View style={{ flexDirection: "column", marginTop: hp("0%") }}>
            <View style={{ paddingLeft: wp("2%"), paddingRight: wp("4%") }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...Styles.text,
                    // left: wp("1.5%"),
                  }}
                >
                  {"OUTCOME"}
                </Text>
                <GenericIcon
                  name={"circle"}
                  style={{
                    // color: "#daa520",
                    color: "#48d30a",
                    marginTop: hp("1.5%"),
                    fontSize: hp("3%"),

                    marginLeft: wp("2.5%"),
                    // backgroundColor:"transparent",
                    borderRadius: 60,
                    elevation: 0.6,
                    // right:"2%",
                    width: wp("6%"),
                    // paddingLeft:1,
                    height: hp("3%"),
                    // paddingTop:0,
                    marginTop: wp("-1%"),
                  }}
                  show={true}
                />
              </View>
              <View
                style={{
                  height: hp("4.5%"),
                }}
              >
                <SearchableDropdown
                  //   dataSource={options1}
                    placeHolderText={"OTHERS"}
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
            <View
              style={{
                marginTop: wp("4%"),
                paddingLeft: wp("2%"),
                paddingRight: wp("4%"),
              }}
            >
              <Text
                style={{
                  ...Styles.text,
                  // left: wp("1.5%"),
                }}
              >
                {"REMARKS"}
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
export default connect(mapStateToProps, mapDispatchToProps)(Form);

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
