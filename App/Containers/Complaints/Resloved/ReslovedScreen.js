import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "./ReslovedStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import { connect } from "react-redux";
import ComplaintCard from "App/Components/ComplaintComponent/ComplaintCard";
import Colors from "../../../Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
class ReslovedScreen extends Component {
  // getDataNode(){

  //     let visibleNode=[];

  //     const{
  //         data,
  //         loading
  //     }=this.props;

  //     if(data && data.length){
  //       let filteredSitesList = this. pendingfliterList(data.map((obj) => obj));
  //       if(filteredSitesList.length){
  //             visibleNode=(
  //                     <FlatList
  //                     data={filteredSitesList}
  //                   showsVerticalScrollIndicator={false}
  //                     renderItem={({item})=>{
  //                   return  <ComplaintCard  item={item}  />
  //                      }}
  //                 keyExtractor={item => item.id}
  //                 refreshing={loading}
  //                 onRefresh={() => this.fetchCall()}
  //                 />

  //             )
  //         } else {
  //             visibleNode =<NoDataFound text={'Not  Found'} />
  //           }
  //         } else if (loading) {
  //            visibleNode = <Loading />
  //         } else if ((!data || (data && !data.length) && !loading)) {
  //           visibleNode = <NoDataFound text={'Not Found'} />
  //         }

  //         return visibleNode;
  //     }

  render() {
    return (
      // <View>
      //     {this.getDataNode()}
      // </View>
      <View>
        <TouchableOpacity
          // onPress={() => NavigationService.navigate("ComplaintSecondScreen")}
        >
          <View style={Style.Screen}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop:hp("4.5%"), marginLeft: 20 }}>
                <View
                  style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 46,
                      fontWeight: "600",
                      textAlign: "left",
                      color: Colors.primary,
                    }}
                  >
                    23
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 20,
                    marginLeft: 25,
                    marginTop: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: Colors.primary,
                    }}
                  >
                    Apr
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 10,
                    marginLeft: 2,
                    marginTop: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "300",
                      color: "#515C6F",
                    }}
                  >
                    Complaint Date
                  </Text>
                </View>
              </View>

              <View style={{ marginTop: 20, marginLeft: 13 }}>
                <View style={{ flexDirection: "row", width: "90%" }}>
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                     Ticket No.
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: 15 }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      IT-10001
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Customer
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      A.K Batteries
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Ticket Type
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      Wrong Packaging
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Remarks
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      good
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Resolved Date
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                    26/02/2022
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Solution Provided
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                      Batteries Replaced
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
// const mapStateToProps = (state) => ({
//     data    : state.orderlist.ComplaintData,

//     loading   : state.orderlist.loaders.getComplaintLoader,
//   });

//   const mapDispatchToProps = (dispatch) => ({
//     fetchData:  (params)    => dispatch(OrderListActions.getComplaint(params)),

//   });

export default ReslovedScreen;
