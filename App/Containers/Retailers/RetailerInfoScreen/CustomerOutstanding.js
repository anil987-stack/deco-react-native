import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
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
import RetailerActions from "App/Stores/Retailers/Actions";

class CustomerOutstanding extends Component {
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
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingHorizontal: "6%",
          marginTop: hp("-47%"),
          flex: 1,
        }}
      >
        <View>
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 10,
              flexDirection: "row",
              top:hp("2%")
              //   justifyContent: "space-evenly",
              //   padding: 8,
              //   margin: 10,
            }}
          >
            <TouchableOpacity
              // onPress={() => console.log(outstanding_data)}
              style={{
                // alignItems: "center",
                height: 50,
                // justifyContent: "space-between",
                // backgroundColor: "pink",
                justifyContent: "center",
                width: wp("30%"),
                left: wp("1%"),
              }}
            >
              <Text
                style={{
                  color: Colors.clr66,
                  fontFamily: ApplicationStyles.textFont,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Credit Limit
              </Text>
              <Text
                style={
                  {
                    //   overflow: "visible",
                    //   paddingLeft: wp("4%"),
                    //   paddingRight: wp("4%"),
                    //   marginBottom: hp("1%"),
                    //   marginTop: hp("2.5%"),
                     marginRight: wp("8%"),
                    //  marginLeft: wp("1%"),
                     textAlign:"center"
                    //   height: hp("5.5%"),
                    //   elevation: 10,
                    //   width: wp("50%"),
                    //   borderWidth: 4,
                    //   borderColor: Colors.white,
                  }
                }
              >
                10
                {/* {this.props.selectedRetailer?.total_credit_limit__c || 0} */}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                height: 50,
                // justifyContent: "space-between",
                // backgroundColor: "pink",
                justifyContent: "center",
                width: wp("30%"),
                left: wp("1%"),
              }}
            >
              <Text
                style={{
                  color: Colors.clr66,
                  fontFamily: ApplicationStyles.textFont,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Outstanding
              </Text>
              <Text
                style={{
                  //   overflow: "visible",
                  //   paddingLeft: wp("4%"),
                  //   paddingRight: wp("4%"),
                  //   marginBottom: hp("1%"),
                  //   marginTop: hp("2.5%"),
                  //   marginRight: wp("2%"),
                //   marginLeft: wp("1%"),
                //   height: hp("5.5%"),
                  //   elevation: 10,
                //   width: wp("50%"),
                  //   borderWidth: 4,
                  //   borderColor: Colors.white,
                  marginRight: wp("8%"),
                    //  marginLeft: wp("1%"),
                     textAlign:"center"
                }}
              >
                50
                {/* {this.props.selectedRetailer?.total_outstanding__c || 0} */}
              </Text>
            </View>

            <View
              style={{
                height: 50,
                // justifyContent: "space-between",
                // backgroundColor:"pink",
                justifyContent:"center",
                width:wp("30%"),
                left:wp("1%")
              }}
            >
              <Text
                style={{
                  color: Colors.clr66,
                  fontFamily: ApplicationStyles.textFont,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Credit Balance
              </Text>
              <Text
                style={{
                    marginRight: wp("8%"),
                    //  marginLeft: wp("1%"),
                     textAlign:"center"
                  //   overflow: "visible",
                  //   paddingLeft: wp("4%"),
                  //   paddingRight: wp("4%"),
                  //   marginBottom: hp("1%"),
                  //   marginTop: hp("2.5%"),
                  //   marginRight: wp("2%"),
                  //   marginLeft: wp("1%"),
                //   height: hp("5.5%"),
                  //   elevation: 10,
                //   width: wp("50%"),
                  //   borderWidth: 4,
                  //   borderColor: Colors.white,
                }}
              >
                10
                {/* {data?.balance_credit_limit__c || "NA"} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 15,
            //   borderBottomWidth: 1,
            //   borderColor: "grey",
              top:hp("4%")
            }}
          >
            <View
              style={{
                alignItems: "center",
                height: 50,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: Colors.clr66,
                  fontFamily: ApplicationStyles.textFont,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Day Range
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                height: 50,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: Colors.clr66,
                  fontFamily: ApplicationStyles.textFont,
                  fontSize: 14,
                  fontWeight: "700",
                }}
              >
                Outstanding
              </Text>
            </View>
          </View>

          <TouchableOpacity
            // onPress={() => {
            //   this.dataHandler(
            //     this.props.outstandingorder.net_outstanding.First_0_20_days,
            //     this.props.outstandingorder.net_outstanding
            //       .First_0_20_outstanding_sfid
            //   );
            // }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                color: Colors.subtitle,
                fontSize: 14,
                fontFamily: ApplicationStyles.textFont,
                fontWeight: "700",
              }}
            >
              0-30 Days
            </Text>
            <Text
              style={{
                // overflow: "visible",
                // paddingLeft: wp("4%"),
                // paddingRight: wp("4%"),
                // marginBottom: hp("1%"),
                // marginTop: hp("2.5%"),
                // marginRight: wp("2%"),
                // marginLeft: wp("1%"),
                // height: hp("5.5%"),
                // elevation: 10,
                // width: wp("50%"),
                // borderWidth: 4,
                // borderColor: Colors.white,
              }}
            >
              12
              {/* {this.props.outstandingorder.net_outstanding.First_0_20_days}{" "} */}
              Lakh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   this.dataHandler(
            //     this.props.outstandingorder.net_outstanding.Second_21_29_days,
            //     this.props.outstandingorder.net_outstanding
            //       .Second_21_29_outstanding_sfid
            //   );
            // }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                color: Colors.subtitle,
                fontSize: 14,
                fontFamily: ApplicationStyles.textFont,
                fontWeight: "700",
              }}
            >
              31-90 Days
            </Text>
            <Text
              style={{
                // overflow: "visible",
                // paddingLeft: wp("4%"),
                // paddingRight: wp("4%"),
                // marginBottom: hp("1%"),
                // marginTop: hp("2.5%"),
                // marginRight: wp("2%"),
                // marginLeft: wp("1%"),
                // height: hp("5.5%"),
                // elevation: 10,
                // width: wp("50%"),
                // borderWidth: 4,
                // borderColor: Colors.white,
              }}
            >
              10
              {/* {this.props.outstandingorder.net_outstanding.Second_21_29_days}{" "} */}
              Lakh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   this.dataHandler(
            //     this.props.outstandingorder.net_outstanding.third_30_44_days,
            //     this.props.outstandingorder.net_outstanding
            //       .third_30_44_outstanding_sfid
            //   );
            // }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                color: Colors.subtitle,
                fontSize: 14,
                fontFamily: ApplicationStyles.textFont,
                fontWeight: "700",
              }}
            >
              91-120 Days
            </Text>
            <Text
              style={{
                // overflow: "visible",
                // paddingLeft: wp("4%"),
                // paddingRight: wp("4%"),
                // marginBottom: hp("1%"),
                // marginTop: hp("2.5%"),
                // marginRight: wp("2%"),
                // marginLeft: wp("1%"),
                // height: hp("5.5%"),
                // elevation: 10,
                // width: wp("50%"),
                // borderWidth: 4,
                // borderColor: Colors.white,
              }}
            >
              21
              {/* {this.props.outstandingorder.net_outstanding.third_30_44_days}{" "} */}
              Lakh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   this.dataHandler(
            //     this.props.outstandingorder.net_outstanding.fourth_44_59_days,
            //     this.props.outstandingorder.net_outstanding
            //       .fourth_44_59_outstanding_sfid
            //   );
            // }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                color: Colors.subtitle,
                fontSize: 14,
                fontFamily: ApplicationStyles.textFont,
                fontWeight: "700",
              }}
            >
              121-180 Days
            </Text>
            <Text
              style={{
                // overflow: "visible",
                // paddingLeft: wp("4%"),
                // paddingRight: wp("4%"),
                // marginBottom: hp("1%"),
                // marginTop: hp("2.5%"),
                // marginRight: wp("2%"),
                // marginLeft: wp("1%"),
                // height: hp("5.5%"),
                // elevation: 10,
                // width: wp("50%"),
                // borderWidth: 4,
                // borderColor: Colors.white,
              }}
            >
              60
              {/* {this.props.outstandingorder.net_outstanding.fourth_44_59_days}{" "} */}
              Lakh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   this.dataHandler(
            //     this.props.outstandingorder.net_outstanding.fivth_greater_60,
            //     this.props.outstandingorder.net_outstanding
            //       .fivth_greater_60_outstanding_sfid
            //   );
            // }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
              marginHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text
              style={{
                color: Colors.subtitle,
                fontSize: 14,
                fontFamily: ApplicationStyles.textFont,
                fontWeight: "700",
              }}
            >
              180+ Days
            </Text>
            <Text
              style={{
                // overflow: "visible",
                // paddingLeft: wp("4%"),
                // paddingRight: wp("4%"),
                // marginBottom: hp("1%"),
                // marginTop: hp("2.5%"),
                // marginRight: wp("2%"),
                // marginLeft: wp("1%"),
                // height: hp("5.5%"),
                // elevation: 10,
                // width: wp("50%"),
                // borderWidth: 4,
                // borderColor: Colors.white,
              }}
            >
              20
              {/* {this.props.outstandingorder.net_outstanding.fivth_greater_60}{" "} */}
              Lakh
            </Text>
          </TouchableOpacity>
        </View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerOutstanding);
