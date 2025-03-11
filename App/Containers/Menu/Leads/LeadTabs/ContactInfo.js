import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors, ApplicationStyles } from "App/Theme";
import _ from "lodash";
import ObjectiveModal from "App/Containers/Visits/ObjectiveModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ContactInfo = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback>
      
      <View style={{ alignSelf: "center", marginTop: hp("2%") }}>
      <TouchableOpacity
      style={{
        // paddingTop: 2,
        // position: "absolute",
        alignSelf: "flex-end",
        marginBottom:hp("2%"),
        marginTop:hp("-1%"),
      
       
      
       
        
      }}
      // disabled={disabled}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", }}>
        <GenericIcon
          name={"group-add"}
          style={{
            fontSize: wp("6%"),
            color: Colors.grey,
            width: wp("8%"),
            zIndex: 10,
          
            backgroundColor: "white",
            borderRadius: 25,
            elevation:12,
            left:wp("4%"),
            height: hp("4%"),
            padding: 3,
          }}
          // show={true}
        />
        <LinearGradient
          // colors={["transparent","white", "transparent"]}
          // start={{ x: 0.9, y: 0 }}
          // end={{ x: 0, y: 0 }}
          // style={{
          //   height: hp("3%"),
          //   width: wp("23%"),
          //   alignSelf: "flex-end",
          //   top: hp("-0.9%"),
          // }}

          colors={["#943e3e", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.1, y: 0 }}
          style={{
            height: hp("3%"),
            width: wp("29%"),
            alignSelf: "flex-end",
            top: "-2%",
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
            {"ADD CONTACT"}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
        <LinearGradient
          colors={["#2d2d2d", "#575757", "#a3a3a3"]}
          style={{
            borderRadius: 13,
            height: hp("10%"),
            width:wp("74%"),
            opacity: 0.9,
            // left: "10%",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 55,
            borderWidth: 1,
            borderBottomColor: "transparent",
            alignSelf:'flex-end',
            // marginRight:wp("10%")
            //        shadowColor: 'black',
            //  shadowOffset: { width: 7, height: 7 },
            //  shadowOpacity: 0.2,
            //  shadowRadius: 1,elevation:5
          }}
          start={{ x: 0.4, y: 1}}
          end={{ x: 1.5, y: 0 }}
        >
            
          <View style={{ flexDirection: "row", }}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: "12%",
                fontWeight: "bold",
                color: "#f8622d",
                top: "3.5%",
                fontSize: wp("2.3%"),
              }}
            >
              {"TYPE:"}
            </Text>

            {/* <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: "3%",
                fontWeight: "bold",
                color: "white",
                top: "3.5%",
                fontSize: wp("2.3%"),
              }}
            >
              {"|"}
            </Text> */}

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: "3%",
                fontWeight: "bold",
                color: "white",
                top: "3.5%",
                fontSize: wp("2.3%"),
              }}
            >
              {"OWNER"}
            </Text>

            {/* <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: "3%",
                fontWeight: "bold",
                color: "white",
                top: "3.5%",
                fontSize: wp("2.3%"),
              }}
            >
              {"|"}
            </Text>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: "3%",
                fontWeight: "bold",
                color: "white",
                top: "3.5%",
                fontSize: wp("2.3%"),
              }}
            >
              {"WARM"}
            </Text> */}
          </View>
        </LinearGradient>

          <LinearGradient
            colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
            style={{
              borderRadius: 16,
              height: hp("19%"),
              width: wp("90%"),
              opacity: 0.9,
            //   right: wp("19.7%"),
              marginTop: hp("-6%"),
              elevation: 25,
              borderWidth: 1,
              shadowColor: "black",
              alignSelf:"center"
            }}
            // style={{borderRadius:16,height:199,width:370,opacity:0.9,right:"40%",marginTop:"11%",borderTopWidth:5,borderTopColor:"#3b3b3b",borderLeftWidth:5,borderRightWidth:5,borderColor:"#3b3b3b",elevation:45}}
            start={{ x: 0.4, y: 0.4 }}
            end={{ x: 0.9, y: 1.7 }}
          >
            <LinearGradient
              colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
              //  colors={["#1e1e1e","#434343","#505050"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1.5 }}
              //          start={{ x: 0.7, y: 2.9 }}
              // end={{ x: 1.8, y: 0 }}

              style={{
                height: hp("13%"),
                width: wp("88%"),
                opacity: 0.8,
                alignSelf: "center",
                marginTop: "1%",
                borderRadius: 8,
                borderBottomWidth: 0.6,
                borderBottomColor: "lightgrey",
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderWidth: 0.6,
                borderColor: "lightgrey",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <GenericIcon
                  name={"circle"}
                  style={{
                    color: "#BFFF00",
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
                  }}
                  show={true}
                /> */}

                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("4%"),
                    fontWeight: "bold",
                    color: "#f8622d",
                    marginTop: hp("1.4%"),
                    width: wp("65%"),
                  }}
                >
                  {"SHAHID ALI HASMULLAH KHANS"}
                </Text>
                {/* <GenericIcon
                  name={"calendar-edit"}
                  style={{
                    color: "#a1780b",
                    marginTop: hp("1.5%"),
                    fontSize: hp("4%"),

                    marginLeft: wp("2%"),
                    // backgroundColor:"transparent",
                    borderRadius: 60,
                    elevation: 0.6,
                    // right:"2%",
                    // width:"5.5%",
                    // paddingLeft:1,
                    // height:"5%",
                    // paddingTop:0,
                  }}
                  show={true}
                /> */}
              </View>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: wp("4.5%"),
                  color: "white",
                  marginTop: hp("0.4%"),
                  fontSize: 12,
                }}
              >
                {"9632587451"}
              </Text>

              {/* <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: wp("10.5%"),
                  color: "white",
                  marginTop: hp("0.1%"),
                  fontSize: 12,
                }}
              >
                {"20/4 Taratala Road, Kolkata"}
              </Text> */}

              <View style={{ flexDirection: "row" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("4.5%"),
                    color: "white",
                    marginTop: hp("0.1%"),
                    fontSize: 12,
                    // fontWeight: "bold",
                  }}
                >
                  {"ADDRESS:"}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("1%"),
                    color: "white",
                    marginTop: hp("0.1%"),
                    fontSize: 12,
                  }}
                >
                  {"20/4 Taratala Road, Kolkata"}
                </Text>
              </View>

              {/* <View style={{ flexDirection: "row" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("10.5%"),
                    color: "white",
                    marginTop: hp("0.1%"),
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {"WHOM:"}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("1%"),
                    color: "white",
                    marginTop: hp("0.1%"),
                    fontSize: 12,
                  }}
                >
                  {"AVISHEK KUMAR | OWNER"}
                </Text>
              </View> */}

              
            </LinearGradient>

            <View
              style={{
                flexDirection: "row",
                zIndex: 30,
                marginTop: "1.2%",
                left: "6%",
              }}
            >
              <TouchableOpacity
                style={{
                  ...ApplicationStyles.formButton,
                  alignSelf: "center",
                  marginTop: hp("0%"),
                  height: hp("4%"),
                  width: wp("35.5%"),
                  elevation: 18,
                  borderRadius: 11,
                  paddingBottom: 13,
                  zIndex: 50,
                  borderWidth: 2,
                }}
                //  this.props.clear();
                onPress={() => this.submit()}
              >
                <LinearGradient
                  colors={["#333333", "#333333"]}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.7 }}
                  style={{
                    height: hp("3.5%"),
                    width: wp("34.6%"),
                    left: "0%",
                    borderRadius: 10,
                    opacity: 0.8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "#BFFF00",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 4,
                      fontSize: wp("3%"),
                    }}
                  >
                    {"CALL"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity> 
              </View>

              {/* <TouchableOpacity
                style={{
                  ...ApplicationStyles.formButton,
                  alignSelf: "center",
                  marginTop: hp("0%"),
                  height: hp("4%"),
                  width: wp("35.5%"),
                  elevation: 18,
                  borderRadius: 11,
                  paddingBottom: 13,
                  zIndex: 50,
                  borderWidth: 2,
                  marginLeft: "14%",
                }}
                onPress={() => this.submit()}
              >
                <LinearGradient
                  colors={["#333333", "#333333"]}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.7 }}
                  style={{
                    height: hp("3.5%"),
                    width: wp("34.6%"),
                    left: "0%",
                    borderRadius: 10,
                    opacity: 0.8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 4,
                      fontSize: 13,
                    }}
                  >
                    {"END DISCUSSION"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View> */}
          </LinearGradient>
        {/* </LinearGradient> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactInfo;

const Style = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("1%"),
    width: wp('60%'),
    borderRadius:28,
    height:hp('7%'),
    alignSelf: 'center'

  },
  buttontextStyle: {
    textTransform : 'uppercase',
    alignSelf:'center',
  },
  Screens:{
    width:'95%',
    // paddingBottom:30,
    // backgroundColor:'#fff',
    marginTop:hp('1.5'),
    marginBottom:5,
    marginHorizontal:wp("6%"),
    
    shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation:6,
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
// import InputText2 from "App/Components/FormInput/InputText2";
// import { ApplicationStyles, Metrics } from "App/Theme";
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

// class ContactInfo extends Component {
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
//             style={{ flexDirection: "column", flexWrap: "wrap", top: hp("-1%"),marginLeft:"4%" }}
//           >

// <TouchableOpacity
//             // onPress={this.toggleExpand}
//             style={[
//               Styles.secondCont1,
//              {
//                 justifyContent: "center",
//                 alignItems: "center",
               
//               },
//             ]}
//           >
//             <View
//               style={{
//                 backgroundColor:  "white",
//                 width: "100%",
//                 height:  hp("7%"),
//                 flexDirection: "row",
                
//               }}
//             >
//               <View
//                 style={[
//                   Styles.secondCont,
//                   { backgroundColor: "white", },
//                 ]}
//               >
//                 <View
//                   ref={this.accordian}
//                   style={{
//                     justifyContent: "space-between",
//                     flexDirection: "row",
//                     width: "100%",
//                     alignItems: "center",
//                   }}
//                 >
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       justifyContent: "center",
//                       marginTop: hp("1.5"),
//                     }}
//                   >
//                     <GenericIcon
//                       name={"person"}
//                       style={{
                       
//                          color:  Colors.primary,
//                         fontSize: hp("3.3%"),
//                         fontWeight: "bold",
//                         marginLeft: wp("2%"),
//                       }}
//                     />
//                     <Text
//                       style={{
//                         fontSize: wp("3.6%"),
//                         marginLeft: wp("2%"),
//                         fontFamily: ApplicationStyles.textMsgFont,
//                         color: 
//                            Colors.subtitle,
//                       }}
//                     >
//                         {"Contact Info"}
//                         {/* {`* (${
//                       form && form.Contact_data
//                         ? JSON.stringify(form?.Contact_data?.length)
//                         : form?.contact_value?.length
//                     })`} */}
//                     </Text>
//                   </View>
//                 </View>
//               </View>

//               <TouchableOpacity
//                 //   onPress={() => {
                   
                   
//                 //     return openModal({
//                 //       content: <AddContactModal id={"Add Contact"} />,
//                 //       heading: "Add Contact",
//                 //       // close:this.clearData(),
//                 //       bodyFlexHeight: 0.7,
//                 //     });
//                 // }}
//                   style={{
//                     width: wp("20%"),
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <GenericIcon
//                     name={"add"}
//                     style={{
//                       color: 
//                         Colors.white,
//                       marginTop: hp("0%"),
//                       fontSize: hp("3.4%"),
//                       fontWeight: "bold",
//                       marginLeft: wp("-15"),
//                       backgroundColor:  Colors.primary,
//                       borderRadius: 400,
//                     }}
//                   />
//                 </TouchableOpacity>
             
//               </View>
//               </TouchableOpacity>



//             <View style={{ marginTop: hp("4.5%"), width: wp("90%"),marginLeft:"-4%" }}>
//             <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Linked Channel Partner</Text>
//             <SearchableDropdown
//             //   dataSource={options1}
//               placeHolderText={"Select Channel Partner"}
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
//               placeholder={"Type or Select Channel Partner"}
//               invalid={false}
//               customPickerStyles={{ ...Styles.picker,left:"25%" }}
//               labelStyles={{ ...Styles.pickerLabel }}
//               //invalid={validation.invalid && validation.invalid_field == 'area__c'}
//             />
//           </View>

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
// export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
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
//     color: Colors.fadeRed,
//     fontSize: 16,
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
//   secondCont:{
// 	width:'90%',
// 	//height:'3%', 
// 	// elevation:3,
// 	borderWidth:0,
// 	alignSelf:'center',
// 	backgroundColor:'white',
// 	justifyContent:'center',
// 	flexDirection:'row',
// 	// padding:10,
// 	marginBottom:10
// },
// secondCont1:{
// 	width:'90%',
// 	//height:'auto', 
// 	elevation:3,
// 	borderWidth:0,
// 	alignSelf:'center',
// 	backgroundColor:'white',
// 	// flexDirection:'row',
// 	// padding:10,
// 	marginBottom:0,
// 	marginTop:30
// },
// });
