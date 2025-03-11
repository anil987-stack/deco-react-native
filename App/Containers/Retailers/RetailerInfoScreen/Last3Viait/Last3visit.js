import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./Last3VisitStyle";
import { connect } from "react-redux";
import { HelperService } from "App/Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";
import MenuActions from "App/Stores/Menu/Actions";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import { ApplicationStyles, Colors, Fonts } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
class Last3Visit extends Component {
  constructor() {
    super();
    this.state = {
      lastvisitList: [
        {
          Visit_Date__c: "2013-09-29T18:46:19Z",
          Id: 1,
          Concerned_Person_No__c: "9876567867",
          Check_in_Time__c: "5:00 PM",
          Check_out_Time__c: "5:00 PM",
          Objective__c: "Meet",
        },
        {
          Visit_Date__c: "2013-09-29T18:46:19Z",
          Id: 2,
          Concerned_Person_No__c: "8765456787",
          Check_in_Time__c: "6:00 PM",
          Check_out_Time__c: "6:00 PM",
          Objective__c: "Meet",
        },
      ],
    };
  }
  componentDidMount() {
    const { getlastvisit, token, userid } = this.props;
    const distributorId = this.props.item.Id;

    getlastvisit({
      token,
      distributorId: distributorId,
      status: "Completed",
    });
  }

  fetchCall() {
    const { getlastvisit, token, userid } = this.props;
    const distributorId = this.props.item.Id;

    getlastvisit({
      token,
      distributorId: distributorId,
      status: "Completed",
    });
  }
  getDataNode() {
    let visibleNode = [];

    const { lastvisitList, loader } = this.props;

    if (lastvisitList && lastvisitList.length) {
      if (lastvisitList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={lastvisitList}
            renderItem={({ item }) => (
              <View style={styles.Screen}>
                {/* <GenericIcon
                  show={true}
                  name={"tag"}
                  onPress={() =>
                    NavigationService.navigate("LastVisitTagScreen", {
                      data:
                        item.Visits__r && item.Visits__r.records
                          ? item.Visits__r.records
                          : item.Visits__r,
                    })
                  }
                  style={{
                    marginTop: 3,
                    width: 20,
                    height: 18,
                    fontSize: 17,
                    color: Colors.red,
                    marginLeft: "90%",
                  }}
                /> */}

                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginTop: 5, marginLeft: 38 }}>
                    <View
                      style={{
                        width: "100%",
                        height: 40,
                        justifyContent: "center",
                        top: hp("2.5%"),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 46,
                          fontWeight: "600",
                          textAlign: "center",
                          color: Colors.primary,
                        }}
                      >
                        {item.Visit_Date__c
                          ? HelperService.getCurrentDate(item.Visit_Date__c)
                          : ""}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 24,
                        justifyContent: "center",
                        top: hp("2.5%"),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "500",
                          textAlign: "center",
                          color: Colors.primary,
                        }}
                      >
                        {item.Visit_Date__c
                          ? HelperService.getMonthMappingName(
                              HelperService.getCurrentMonth(item.Visit_Date__c)
                            )
                          : ""}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: 15,
                        // marginLeft: 15,
                        top: hp("2.5%"),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: "300",
                          color: "#515C6F",
                        }}
                      >
                        Visit Date
                      </Text>
                    </View>

                    {/* <View
                      style={{
                        flexDirection: "row",
                        marginTop: 3,
                        marginLeft: 0,
                      }}
                    >
                      <GenericIcon
                        show={true}
                        name={"phone"}
                        onPress={() =>
                          HelperService.callNumber(
                            item.Concerned_Person_No__c || ""
                          )
                        }
                        style={{
                          marginTop: 3,
                          width: 20,
                          height: 15,
                          fontSize: 15,
                          color: Colors.primary,
                        }}
                      />

                      <TouchableOpacity>
                        <GenericIcon
                          show={true}
                          name={"google-analytics"}
                          style={{
                            marginTop: 3,
                            width: 20,
                            height: 15,
                            fontSize: 15,
                            color: Colors.primary,
                            marginLeft: 10,
                          }}
                        />
                      </TouchableOpacity>

                      <GenericIcon
                        show={true}
                        name={"target"}
                        onPress={() =>
                          item.Customer_Name__r.Location__c &&
                          item.Customer_Name__r.Location__c.latitude &&
                          item.Customer_Name__r.Location__c.longitude
                            ? HelperService.showDirectionInGoogleMaps(
                                item.Customer_Name__r.Location__c.latitude,
                                item.Customer_Name__r.Location__c.longitude
                              )
                            : HelperService.showToast({
                                message: "Geo Location Not Available",
                                duration: 2000,
                                buttonText: "Okay",
                              })
                        }
                        style={{
                          marginTop: 3,
                          width: 20,
                          height: 17,
                          fontSize: 18,
                          color: Colors.primary,
                          marginLeft: 10,
                        }}
                      />
                    </View> */}
                  </View>

                  <View style={{ marginTop: 25, marginLeft: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={{ fontSize: 13, color: "#9A9A9A" }}>
                          Visit Id
                        </Text>
                      </View>
                      <View style={{ width: "40%", marginLeft: 1 }}>
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 13,
                          }}
                        >
                          {item.Name}
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={{ fontSize: 13, color: "#9A9A9A" }}>
                          CheckIn
                        </Text>
                      </View>
                      <View style={{ width: "40%", marginLeft: 1 }}>
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 13,
                          }}
                        >
                          {item.Check_in_Time__c
                            ? HelperService.getSuffix(item.Check_in_Time__c)
                            : ""}
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 4 }}>
                      <View style={{ width: "35%" }}>
                        <Text style={{ fontSize: 13, color: "#9A9A9A" }}>
                          CheckOut
                        </Text>
                      </View>
                      <View style={{ width: "40%", marginLeft: 1 }}>
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 13,
                          }}
                        >
                          {item.Check_out_Time__c
                            ? HelperService.getSuffix(item.Check_out_Time__c)
                            : ""}
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 4 }}>
                      <View style={{ width: "35%" }}>
                        <Text style={{ fontSize: 13, color: "#9A9A9A" }}>
                          Objective
                        </Text>
                      </View>
                      <View style={{ width: "40%", marginLeft: 1 }}>
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 13,
                          }}
                        >
                          {item.Objective__c}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.Id}
            // refreshing={loader}
            // onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"Not  Found"} />;
      }
    } else if (loader) {
      visibleNode = <Loading />;
    } else if (
      !lastvisitList ||
      (lastvisitList && !lastvisitList.length && !loader)
    ) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ ...styles.card, flex: 1 }}>{this.getDataNode()}</View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  userid: state.startday.userDetailList.Id,
  //isASM: state.user.user_details.designation__c,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  searchFilters: state.retailers.retailerSearchFilters,
  //retailerSearchFilters: state.retailers.retailerSearchFilters,
  lastvisitList: state.menu.lastvisitList,
  loader: state.menu.getLastVisitLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getlastvisit: (params) => dispatch(MenuActions.getLastVisit(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Last3Visit);
