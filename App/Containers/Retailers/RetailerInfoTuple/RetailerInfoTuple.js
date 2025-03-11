import Colors from "App/Theme/Colors";
import { Tab, Tabs, ScrollableTab } from "native-base";
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { connect } from "react-redux";
import OrderActions from "../../../Stores/Orders/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
import styles from "./RetailerInfoTupleStyle";
import RetailerActions from "App/Stores/Retailers/Actions";
import GenericIcon from "App/Components/GenericIcon";
class RetailerInfoTuple extends Component {
  // componentDidMount() {
  //   const { getDealerInfo, token, selectedRetailer } = this.props;
  //   // let monthIndex = moment().format("M") - 1;
  //   getDealerInfo({
  //     token,
  //     //   m: HelperService.getMonthindex(monthIndex),
  //     dealer_id: selectedRetailer.id,
  //   });
  // }
  render() {
    const { data } = this.props;
    return (
      <ScrollView style={{ ...styles.card, flex: 1 }}>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", margin: 10 }}>
            Details
          </Text>
          {/* <View
            style={{
              marginLeft: wp("0"),
              marginRight: wp("0"),
              // marginTop: hp("3"),
            }}
          > */}
            {/* <View style={{ zIndex: 10, left: wp("25"), top: hp("-2.6") }}> */}
            {/* <ImagePick
                  image={imageform.image}
                  // profilepic={getonboardingImage.Uss}
                  // show={true}
                  onImageSuccess={({ image }) => {
                    changeForm({
                      edited_field: "image",
                      edited_value: image,
                    }),
                      this.props.UploadImage({
                        form: {
                          batchRequests: [
                            {
                              method: "PATCH",
                              url: "v45.0/sobjects/User/" + userid,
                              richInput: {
                                Profile_Picture__c:
                                  "<img src=data:image/jpeg;base64," +
                                  image +
                                  "/>",
                              },
                            },
                            {
                              method: "GET",
                              url:
                                "v45.0/sobjects/User/" + userid + "?fields=id",
                            },
                          ],
                        },
                        token,
                      });
                  }}
                /> */}
            {/* </View> */}
          {/* </View> */}
        </View>
        
        <View style={styles.row}>
          <View style={{ width: "60%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Dealer Name</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                G.S.R.T.C. - AMRELI
                {/* {data && data.length ? data[0].Name : ""} */}
              </Text>
            </View>
          </View>
          <View style={{borderColor:'white',
            marginRight: wp("15%"),
            borderWidth:1,padding:1}}>
          <Image
          style={{
            height: 70,
            width: 70,
            // left: wp("6%"),
            // marginRight: wp("8%"),
            // marginTop: hp("3"),
          }}
          source={require("App/Assets/Images/man.png")}
          // source={{ uri: `data:image/png;base64,${getonboardingImage.Uss?getonboardingImage.Uss:imageform.image}`}}
        />
        
           <GenericIcon
           name={'camera-alt'}
          //  onPress={() => this.onPressCard()}
           style={{ color: Colors.primary, fontSize: 25,marginTop:-20, alignSelf:'flex-end',zindex:10 }}
         />
        
        
        </View>
        </View>
        {/* <View style={{ width: "50%", marginLeft: "3%" }}>
      <Text style={styles.grey}>SAP Customer No.</Text>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: "bold", top: 10, paddingLeft: 5 }}>
          S.K Workshop
        </Text>
      </View>
    </View> */}
        <View style={styles.row}>
          <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Dealer Code</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                500217
                {/* {data && data.length ? data[0].SAP_Customer_No__c : ""} */}
              </Text>
            </View>
          </View>

          {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Customer Group</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Customer_Group__c : ""}
              </Text>
            </View>
          </View> */}
        </View>
        {/* <View style={styles.row}> */}
        {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Business Category</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Business_Category__c : ""}
              </Text>
            </View>
          </View> */}

        {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Vertical</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Customer_Vertical__c : ""}
              </Text>
            </View>
          </View> */}
        {/* </View> */}
        <View style={styles.row}>
          <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Primary No.</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                9876564567
                {/* {data && data.length ? data[0].Category__c : ""} */}
              </Text>
            </View>
          </View>

          <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Secondary No.</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                9876567876
                {/* {data && data.length ? data[0].Sub_Category__c : ""} */}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "114%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Email id</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                abc@gmail.com
                {/* {data && data.length ? data[0].Address__c : ""} */}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ width: "114%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Address</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                No.28, Poomagal Main Rd, Poomagal Nagar, Gandhi Nagar, Chennai,
                Tamil Nadu 600032, India
                {/* {data && data.length ? data[0].Address__c : ""} */}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Area</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Area_Name__c : ""}
              </Text>
            </View>
          </View> */}

          {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Created-On</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Customer_Created__c : ""}
              </Text>
            </View>
          </View> */}
        </View>

        <View style={styles.row}>
          {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Credit Limit</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Credit_Limit__c : ""}
              </Text>
            </View>
          </View> */}

          {/* <View style={{ width: "50%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Credit days</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length ? data[0].Credit_Days__c : ""}
              </Text>
            </View>
          </View> */}
        </View>
        {/* <View style={{ width: '50%', marginLeft: '0%' }}>
        <Text style={styles.grey}>{'Last Visit By'}</Text>
        <View style={styles.textContainer}>
          <TextInput style={{ top: 5 }}></TextInput>
        </View>
      </View> */}

        {/* <View style={styles.row}>
          <View style={{ width: "114%", marginLeft: "3%" }}>
            <Text style={styles.grey}>Division/Products Extended</Text>
            <View style={styles.textContainer}>
              <Text
                style={{
                  fontWeight: "bold",
                  top: 10,
                  paddingLeft: 5,
                  paddingBottom: 10,
                }}
              >
                {data && data.length
                  ? data[0].Division_Products_extended_to_customer__c
                  : ""}
              </Text>
            </View>
          </View>
        </View> */}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.retailers.dealerInfo,
  token: state.user.token,
  loading: state.retailers.dealerInfoLoader,
  selectedRetailer: state.retailers.selectedRetailer,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerInfo: (params) => dispatch(RetailerActions.getDealerInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerInfoTuple);
