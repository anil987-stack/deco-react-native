import React, { Component } from "react";
import { View, Alert, TouchableOpacity,Image } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
// import Style from "./PresentScreenStyle";

import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";

import menuActions from "App/Stores/Menu/Actions";
import ImageSlider from "App/Components/ImageSlider";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import ImagePicker from "App/Components/ImagePicker/ImagePicker";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LeadsPerformance from "../Retailers/Retailer360/LeadsPerformance/LeadsPerformance";
import { ScrollView } from "react-navigation";
import { ImageBackground } from "react-native";

class EligibilityCriteria extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm } = this.props;

    return (
      <View style={{flex:1}}>
      
    
      {/* <Image
      style={{  width: 450,
      height: 450,
    //   flex: 1,
    alignSelf:"center",
marginLeft:"0%",
marginTop:"6%" 
}}
     
      source={require("App/Assets/Images/run.png")}
    /> */}
    <View style={{flexDirection:"row"}}>
      <View>
    <Image
      style={{  width: 450,
      height: 450,
    //   flex: 1,
    alignSelf:"center",
marginLeft:"-2%",
marginTop:"6%" 
}}
     
      source={require("App/Assets/Images/run.png")}
    />

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

               marginLeft:wp("21%"),
                  fontWeight: "bold",
                 marginTop:hp("-21%")
                  // textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

               marginLeft:wp("5%"),
                  fontWeight: "bold",
                 marginTop:hp("0%")
                  // textAlign:"right"
                }}>Present Days</Text>

<View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("30%"),marginTop:hp("1%"),borderColor:"white"}}/>

    </View>
    <View style={{right:wp("44%")}}>
     <LinearGradient
    colors={["red", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.2, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("33%"),
                alignSelf: "flex-end",
                marginVertical: hp("3%"),
                borderRadius:7,
                marginHorizontal:wp("2%")
              }}
            >
   
        <Text style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                  textAlign:"right",
                fontWeight:"bold"
                }}>LMTD  |  MTD</Text>
                   </LinearGradient>


<View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:wp("4.5%"),marginTop:hp("-2.7%")}}>
                   <Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>|</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>
                </View>

                <Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 40,
                  fontWeight: "bold",
                 
                  textAlign:"right",
                  paddingTop: 4
                }}>Before 11 Am</Text>

                <View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("33%"),alignSelf:"flex-end",marginTop:hp("1%"),borderColor:"white"}}/>


<View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:wp("4.5%"),marginTop:hp("0%")}}>
                   <Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>|</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>
                </View>

                <Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 55,
                  fontWeight: "bold",
                 
                  textAlign:"right",
                  paddingTop: 4
                }}>After 5 PM</Text>

                <View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("33%"),alignSelf:"flex-end",marginTop:hp("1%"),borderColor:"white"}}/>


<View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:wp("4.5%"),marginTop:hp("0%")}}>
                   <Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>|</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>
                </View>

                <Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right",
                  paddingTop: 4
                }}>PJP Retailer Visit</Text>

                <View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("33%"),alignSelf:"flex-end",marginTop:hp("1%"),borderColor:"white"}}/>

<View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:wp("4.5%"),marginTop:hp("0%")}}>
                   <Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>|</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>
                </View>

                <Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 25,
                  fontWeight: "bold",
                 
                  textAlign:"right",
                  paddingTop: 4
                }}>Influencer Visit</Text>

                <View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("33%"),alignSelf:"flex-end",marginTop:hp("1%"),borderColor:"white"}}/>

<View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:wp("4.5%"),marginTop:hp("0%")}}>
                   <Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>|</Text>

<Text style={{
                  fontSize: wp("5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right"
                }}>20</Text>
                </View>

                <Text style={{
                  fontSize: wp("3.5%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingRight: 12,
                  fontWeight: "bold",
                 
                  textAlign:"right",
                  paddingTop: 4
                }}>Lead Conversion</Text>

                <View 
                style={{borderBottomWidth:wp("0.5%"),width:wp("33%"),alignSelf:"flex-end",marginTop:hp("1%"),borderColor:"white"}}/>
</View>



  </View> 
      {/* <View style={{ display: "flex", flex: 1 }}> */}
     

        {/* <ScrollView> */}
         
{/* <View style={{marginLeft:"85%"}}>
          <LeadsPerformance />
          </View> */}
          {/* <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "-127%",
            }}
          >
            <LinearGradient
              colors={["#2f1313", "#2f1313"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: hp("4%"),
                width: wp("78%"),
                alignSelf: "flex-end",
                marginVertical: hp("0.6%"),
              }}
            >
              <Text
                style={{
                  fontSize: wp("4%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",

                  paddingLeft: 12,
                  // fontWeight: "bold",
                  paddingTop: 4,
                }}
              >
                {"LEADS STAGE ANALYSIS"}
              </Text>
            </LinearGradient>

            <TouchableOpacity
              style={{
                height: hp("5.3%"),
                width: wp("11%"),
                alignSelf: "flex-end",
                marginTop: hp("3%"),
                backgroundColor: "#c07700",
              }}
              //   onPress={()=>{ this.props.closeModal();NavigationService.navigate("Leads")}}
            >
              <GenericIcon
                name="info-outline"
                // show={true}
                style={{
                  fontSize: wp("7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  textAlignVertical: "center",
                  //   color: "black",

                  // marginTop: "0%",
                  alignSelf: "center",
                  paddingTop: 5,
                  // fontWeight: "bold",
                }}
              />
            </TouchableOpacity>
          </View> */}
          {/* <View style={{ flexDirection: "row", width: wp("30%") }}>
            <View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"DISCUSSION ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"45"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"ONGOING ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"45"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"WON ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"425"}
                </Text>
              </View>
            </View>


            <View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"DISCUSSION ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"45"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"ONGOING ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"45"}
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <LinearGradient
                  colors={["transparent", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("4%"),
                    width: wp("38%"),
                    alignSelf: "flex-end",
                    marginVertical: hp("0.6%"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: wp("3.5%"),
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",

                      paddingLeft: 12,
                      fontWeight: "bold",
                      paddingTop: 4,
                    }}
                  >
                    {"WON ....."}
                  </Text>
                </LinearGradient>

                <Text
                  style={{
                    fontSize: wp("3.5%"),
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",

                    paddingLeft: 0,
                    fontWeight: "bold",
                    paddingTop: 4,
                  }}
                >
                  {"45"}
                </Text>
              </View>
            </View>
          </View> */}
        {/* </ScrollView> */}
      {/* </View> */}
    
    </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  image: state.user.getonboardingImage,
  form: state.menu.createOnboardinglist,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),

  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EligibilityCriteria);
