import { View, Text,Radio } from "native-base";
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
class FutureTaskActivity extends Component {

  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View>
<View style={{ flexDirection: "column",marginTop:hp("2%") }}>

<View style={{ flexDirection: "row",marginTop:hp("2%") }}>
           <View style={{width:wp("8%"),height:hp("4%"),  borderRadius: 22,}}>
           <GenericIcon
             name={"note-add"}
             style={{
              fontSize: wp("7%"),
              color: Colors.black,
              zIndex: 10,
              backgroundColor: "white",
              borderRadius: 22,
              elevation: 12,
              //  fontSize: wp("6.5%"),
              //  color: Colors.black,

              //  zIndex: 10,

              // //  backgroundColor: "white",
             
              //  elevation: 12,
               alignSelf:"center",
              // paddingVertical:hp("0.4%")
              //  left: wp("0%"),
             }}
            //  show={true}
           />
        </View>
         <LinearGradient
           colors={[ "#943e3e", "transparent"]}
           start={{ x: 0, y: 0 }}
           end={{ x: 1.1, y: 0 }}
           style={{
             height: hp("3%"),
             width: wp("28%"),
             alignSelf: "flex-end",
             top: hp("-0.4%"),opacity:0.7,marginLeft:wp("-2%")
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
             {/* {lable2 ? lable2 : "OUTSIDE"} */}
             {"FUTURE TASK"}
           </Text>
         </LinearGradient>
       </View>


<View style={{flexDirection:"row",marginTop:hp("2%")}}>
       <View style={{flexDirection:"row",}}>
       <Radio
              style={{ marginLeft: wp("0.5%") }}
              // onPress={() =>
              //   changeForm({
              //     edited_field: "Snacks_Planned__c",
              //     edited_value: "Yes",
              //   })
              // }
              // selected={false}
              // selected={form.Snacks_Planned__c == "Yes"}
              selectedColor={Colors.primary}
              color={Colors.white}
            />

<Text
              style={{
                ...Styles.text,
                marginLeft: wp("3%"),
              }}
            >
              {"PHYSICAL"}
            </Text>
       </View>

       <View style={{flexDirection:"row",marginLeft:wp("8%")}}>
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
              color={Colors.white}
            />

<Text
              style={{
                ...Styles.text,
                marginLeft: wp("3%"),
              }}
            >
              {"CALL BASED"}
            </Text>
       </View>
       

       </View>

       <View style={{marginTop:hp("2%")}}>
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
              keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>
<View style={{marginTop:hp("2%")}}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"WHOM"}
            </Text>
            
            <View
              style={{
                height: hp("4.9%"),
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

          <View style={{marginTop:hp("2%")}}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"SELECT TASK PARTNER"}
            </Text>
            
            <View
              style={{
                height: hp("4.9%"),
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
                placeholder={"Type or Select Task Partner"}
                invalid={false}
                customPickerStyles={{ ...Styles.picker }}
                labelStyles={{ ...Styles.pickerLabel }}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
              />
            </View>
          </View>


{/* For the option others */}
          <View style={{marginTop:hp("2%")}}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
                color:"grey"
              }}
            >
              {"PARTNER NAME"}
            </Text>
            
            <View
              style={{
                height: hp("4.9%"),
              }}
            >
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

          <View style={{marginTop:hp("2%"),marginBottom:hp("6%")}}>
            <Text
              style={{
                ...Styles.text,
                left: wp("1.5%"),
              }}
            >
              {"OBJECTIVE"}
            </Text>
            
            <View
              style={{
                height: hp("4.9%"),
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


{/* <View style={{ marginTop: hp("2%"),marginBottom:hp("6%") }}>
  <Text
    style={{
      ...Styles.text,
      left: wp("1.5%"),
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
</View> */}


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
export default connect(mapStateToProps, mapDispatchToProps)(FutureTaskActivity);

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
    width: wp('60%'),
    borderRadius:28,
    height:hp('7%'),
    alignSelf: 'center',
  

  },
  buttontextStyle: {
    textTransform : 'uppercase',
    alignSelf:'center',
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


