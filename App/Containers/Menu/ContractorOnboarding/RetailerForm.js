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
import FormBackground from "../../../Components/FormInput/FormBackgroundTwo";
import RetailerFormMain from "./RetailerFormMain";
// import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
class RetailerForm extends Component {
  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <>
        <HeaderBackground
          title={" RETAILER"}
          textStyle={{ top: hp("-1.8%") }}
          onPress={() => NavigationService.goback()}
          content={
            <>
              <ScrollView
                style={{ backgroundColor: "transparent" }}
                showsVerticalScrollIndicator={false}
              >
                <FormBackground
                  cardStyle={{ marginTop: hp("2%") }}
                  show1={true}
                  iconName1={"camera-outline"}
                  heading1={"CAPTURE PHOTO"}
                  gradStyle1={{ width: wp("32%") }}
                  content={<RetailerFormMain />}
                />
                <View style={{ alignSelf: "center", marginBottom: hp("3%") }}>
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
              </ScrollView>
            </>
          }
        />
        {/* <View style={{ flexDirection: "column",marginTop:hp("5%"), }}>
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

<View style={{ marginTop: hp("10%") }}>
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
</View>
</View> */}

        {/* }
   />  */}
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(RetailerForm);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("4%"),
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
