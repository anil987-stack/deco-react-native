import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RetailersActions from "App/Stores/Retailers/Actions";
import CommonActions from "App/Stores/Common/Actions";
import { Table, Row, Rows } from "react-native-table-component";
import { connect } from "react-redux";
import DashboardActions from "App/Stores/Dashboard/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import { ScrollView, Image } from "react-native";

class SalesOverview extends React.Component {
  // componentDidMount() {
  //   const { token, agentid } = this.props;
  //   this.props.getSalesGeneral({
  //     token,
  //     user_id: agentid,
  //   });
  //   this.props.getSalesFocus({
  //     token,
  //     user_id: agentid,
  //   });
  // }
  getTableHead() {
    return ["Months", "Target", "Acheivement"];
  }
  getTableHead1() {
    return ["Part no", "Target", "Acheivement"];
  }

  render() {
    const { data, data1 } = this.props;

    const tableData = [
      ["Jan-2022", "₹1200", "₹3000"],
      ["Feb-2022", "₹1500", "₹5077"],
      ["March-2022", "₹1300", "₹6000"],
      ["April-2022", "₹1700", "₹7000"],
      ["May-2022", "₹1750", "₹2300"],
    ];
    const tableData1 = [
      ["060213161", 5000, 4500],
      ["26216362", 3000, 3000],
    ];

    return (
      <ScrollView
        style={{
          marginTop: hp("2%"),
          marginLeft: wp("4%"),
          marginRight: wp("4%"),
          marginBottom: hp("2%"),
        }}
      >
        {/* <Text>Target</Text> */}
        {/* <Table borderStyle={{ borderWidth: 1.5, borderColor: "black" }}>
          <Row
            data={this.getTableHead()}
            style={{ height: 40, backgroundColor: "lightgrey" }}
            // style={{ height: 40, backgroundColor: "#f1f8ff" }}
            textStyle={{ textAlign: "center", margin: 6 }}
          />
          <Rows
            data={tableData}
            style={{ height: 40 }}
            textStyle={{ textAlign: "center", margin: 6 }}
          />
        </Table> */}
        {data1 && data1.length ? (
          <View style={{ flexDirection: "row", width: "90%" }}>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("30.5%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Months
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("30.5%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Target
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("30.5%"),
                borderWidth: 1.5,
                // borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Acheivement
            </Text>
          </View>
        ) : null}

        {data1 && data1.length
          ? data1.map((item) => {
              return (
                <View style={{ flexDirection: "row", width: "90%" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("30.5%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {item.From_Date__c
                      ? HelperService.getMonthYear(item.From_Date__c)
                      : ""}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("30.5%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Target_Quantity__c ? item.Target_Quantity__c : "0"}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("30.5%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      // borderRightWidth: 0,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Ach_Quantity__c ? item.Ach_Quantity__c : "0"}
                    {/* ₹3000 */}
                  </Text>
                </View>
              );
            })
          : null}
        {data && data.length ? (
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              color: "#000080",
              fontWeight: "bold",
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            Product Group Wise Tg vs Ach
          </Text>
        ) : null}
        {data && data.length ? (
          <View style={{ flexDirection: "row", width: "90%" }}>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("20%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Product Group
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("18%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Tg Qty
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("18%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Tg Value
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("18%"),
                borderWidth: 1.5,
                borderRightWidth: 0,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Ach. Qty
            </Text>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                fontSize: 12,
                width: wp("18%"),
                borderWidth: 1.5,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              Ach. Value
            </Text>
          </View>
        ) : null}

        {data && data.length
          ? data.map((item) => {
              return (
                <View style={{ flexDirection: "row", width: "90%" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("20.1%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <GenericIcon
                      show={true}
                      name={"star"}
                      style={{
                        fontSize: 14,
                        color: "#FFD700",
                        top: hp("0.5%"),
                      }}
                    />
                    {"\n"}
                    {item.Part_No__r ? item.Part_No__r.Name : ""}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("18%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Target_Quantity__c ? item.Target_Quantity__c : "0"}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("18%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Target__c ? "₹" + item.Target__c : "0"}
                    {/* ₹3000 */}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("18%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      paddingTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Ach_Quantity__c ? item.Ach_Quantity__c : "0"}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      width: wp("18%"),
                      borderWidth: 1.5,
                      borderTopWidth: 0,
                      // borderRightWidth: 0,
                      paddingTop: 20,
                      paddingBottom: 10,
                    }}
                  >
                    {item.Ach_Value__c ? "₹" + item.Ach_Value__c : "0"}
                  </Text>
                </View>
              );
            })
          : null}
        {/* <View style={{ flexDirection: "row", width: "90%" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              width: wp("18.7%"),
              borderWidth: 1.5,
              borderTopWidth: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            060213161
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              width: wp("18.3%"),
              borderTopWidth: 0,
              borderWidth: 1.5,
              borderRightWidth: 1.5,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            70
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              width: wp("18.2%"),
              borderTopWidth: 0,
              borderWidth: 1.5,
              borderRightWidth: 1.5,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            ₹3000
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              width: wp("18.3%"),
              borderTopWidth: 0,
              borderWidth: 1.5,
              borderRightWidth: 1.5,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            30
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              width: wp("18.1%"),
              borderTopWidth: 0,
              borderWidth: 1.5,
              borderRightWidth: 1.5,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            ₹3000
          </Text>
        </View> */}

        {/*         
        <Table borderStyle={{ borderWidth: 1.5, borderColor: Colors.primary,marginBottom:10 }}>
          <Row
            data={this.getTableHead1()}
            style={{ height: 40, backgroundColor: "lightgrey" }}
            textStyle={{ textAlign: "center", margin: 6 }}
          />

          <Text style={{width:10}}>guu</Text>
          <Rows
            data={tableData1}
            style={{ height: 40 }}
            textStyle={{ textAlign: "center", margin: 6 }}
          />
        </Table> */}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.dashboard.data.salesFocus,
  agentid: state.user.loginDetails.userId,
  token: state.user.token,
  data1: state.dashboard.data.salesGeneral,
});

const mapDispatchToProps = (dispatch) => ({
  getSalesGeneral: (params) =>
    dispatch(DashboardActions.getSalesGeneral(params)),
  getSalesFocus: (params) => dispatch(DashboardActions.getSalesFocus(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesOverview);
