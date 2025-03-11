import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import TextArea from "App/Components/FormInput/TextArea";
import BlueButton from "App/Components/BlueButton/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import CommonActions from "App/Stores/Common/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Loading from "App/Components/Loading";
import InputText from "App/Components/FormInput/InputText";
import GenericIcon from "App/Components/GenericIcon";
import _ from "lodash";
const objectlist = [
  "Meeting",
  "Order Booking",
  "Complaint Resolution",
  "Regular Visit",
  "PO / Gift Distribution",
  "Product Demonstration",
];

class ObjectiveplanModal extends Component {
  startvisit(data) {
    const {
      ObjmodalList,
      hideObjectiveModal,
      pressStartVisit,
      onCloseModal,
      addVisitToPlan,
    } = this.props;

    addVisitToPlan({ visit: data.visit, Activity_c: "Start Visit" });
    {
      onCloseModal();
    }
  }

  render() {
    const {
      isVisible,
      pressStartVisit,
      onCloseModal,
      selectedObjective,
      addVisitData,
      addVisitToPlan,
      changePlannedSelectedObjective,
      changePlannedSelectedOtherObjective,
      objectListLoader,
      objectList,
      selectedOtherObjective,
      hideObjectiveModal,
      ObjmodalList,
      // objectlist,
      bulkdata,
      addBulkVisitsToPlan,
      cleanBulkVisitData,
    } = this.props;
    console.log("abcde", bulkdata);

    let body = (
      <View style={Style.container}>
        <View>
          <GenericIcon
            show={true}
            name={"close"}
            style={{
              marginTop: -10,
              width: 30,
              height: 30,
              fontSize: 25,
              color: Colors.red,
              fontWeight: "bold",
              marginLeft: wp(80),
            }}
            onPress={() => hideObjectiveModal()}
          />
        </View>

        <View style={Style.modalContainer}>
          <View style={{ width: "100%", alignSelf: "center" }}>
            <Text style={Style.questionHeading}>Select Activity</Text>
            <View style={{ alignItems: "center", }}>
              <TouchableOpacity
                onPress={(value) => changePlannedSelectedObjective("Meeting")}
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "Meeting" ? Style.text1 : Style.text
                    }
                  >
                    {objectlist[0]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(value) =>
                  changePlannedSelectedObjective("Order Booking")
                }
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "Order Booking"
                        ? Style.text1
                        : Style.text
                    }
                  >
                    {objectlist[1]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(value) =>
                  changePlannedSelectedObjective("Complaint Resolution")
                }
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "Complaint Resolution"
                        ? Style.text1
                        : Style.text
                    }
                  >
                    {objectlist[2]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(value) =>
                  changePlannedSelectedObjective("Regular Visit")
                }
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "Regular Visit"
                        ? Style.text1
                        : Style.text
                    }
                  >
                    {objectlist[3]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(value) =>
                  changePlannedSelectedObjective("PO / Gift Distribution")
                }
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "PO / Gift Distribution"
                        ? Style.text1
                        : Style.text
                    }
                  >
                    {objectlist[4]}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={(value) =>
                  changePlannedSelectedObjective("Product Demonstration")
                }
              >
                <View style={{ width: 300 }}>
                  <Text
                    style={
                      selectedObjective == "Product Demonstration"
                        ? Style.text1
                        : Style.text
                    }
                  >
                    {objectlist[7]}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 1 }}>
                {!_.isEmpty(bulkdata) ? (
                  <Button
                    title="Save"
                    onPress={() => {
                      addBulkVisitsToPlan({ ...bulkdata });

                      onCloseModal();
                    }}
                    disabled={false}
                    color={Colors.primary}
                    loading={false}
                    style={{ backgroundColor: Colors.primary }}
                    textStyle={Style.actionButtonTextStyle}
                  />
                ) : (
                  <Button
                    title="Save"
                    onPress={() => {
                      selectedObjective
                        ? addVisitToPlan({
                            ...addVisitData,
                            Objective__c: selectedObjective,
                          })
                        : HelperService.showToast({
                            message: "Objective for visit c is empty",
                            duration: 1000,
                            buttonText: "",
                          });
                      onCloseModal();
                    }}
                    disabled={false}
                    color={Colors.primary}
                    loading={false}
                    style={{ backgroundColor: Colors.primary }}
                    textStyle={Style.actionButtonTextStyle}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    );

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          onCloseModal();
        }}
        animationIn={"slideInDown"}
      >
        {body}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  searchFilters: state.visits.planVisit.searchFilters,
  objectList: state.common.objectiveList,
  selectedObjective: state.visits.planVisit.selectedObjective,
  selectedOtherObjective: state.visits.planVisit.selectedOtherObjective,
  addVisitData: state.visits.addVisitData,
  ObjmodalList: state.common.isObjModalList,
  objectlist: state.common.objectiveList,
  bulkdata: state.visits.bulkData,
  // objectListLoader: state.visits. objectListLoader,
});

const mapDispatchToProps = (dispatch) => ({
  addVisitToPlan: (params) => dispatch(VisitsActions.addVisitToPlan(params)),
  changePlannedSelectedObjective: (params) =>
    dispatch(VisitsActions.changePlannedSelectedObjective(params)),
  changePlannedSelectedOtherObjective: (params) =>
    dispatch(VisitsActions.changePlannedSelectedOtherObjective(params)),
  pressStartVisit: (params) => dispatch(VisitsActions.pressStartVisit(params)),
  hideObjectiveModal: () => dispatch(CommonActions.hidePlanObjectiveModal()),
  addBulkVisitsToPlan: (params) =>
    dispatch(VisitsActions.addBulkVisitsToPlan(params)),
  cleanBulkVisitData: () => dispatch(VisitsActions.cleanBulkVisitData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectiveplanModal);

const Style = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    height: hp("30%"),
  },
  modalHeading: {
    color: Colors.primary,
    fontSize: wp("4.5%"),
    fontFamily: ApplicationStyles.textMsgFont,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  questionHeading: {
    color: Colors.primary,
    fontSize: wp("4.8%"),
    textAlign: "center",
    fontFamily: ApplicationStyles.textMsgFont,
    marginBottom: hp("2%"),
    borderWidth: 2,
    borderBottomColor: Colors.grey,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    
  },
  actionButtonTextStyle: {
    fontSize: wp("4%"),
  },
  actionButton: {
    width: wp("60%"),
    height: hp("5%"),
    backgroundColor: Colors.primary,
    borderRadius: hp("1%"),
  },
  yesActionButton: {
    backgroundColor: Colors.primary,
  },
  noActionButton: {
    backgroundColor: Colors.primary,
  },
  actionContainer: {
    flexDirection: "row",
    marginTop: hp("2.5%"),
    width: "100%",
    justifyContent: "space-around",
  },
  container: {
    margin: 0,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    opacity: 0.8,
  },

  picker: {
    borderRadius: 8,
    width: wp("80%"),
    height: hp("5.7%"),
    marginBottom: hp("20%"),
    paddingHorizontal: wp("2%"),
    marginLeft: wp("60%"),
  },
  pickerLabel: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row",
  },
  text1: {
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
    color: Colors.primary,
    fontWeight: "800",
    fontFamily: ApplicationStyles.textFont,
    fontSize: 15,
    top:1
  },
  text: {
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
    color: Colors.subtitle,
    fontWeight: "800",
    fontFamily: ApplicationStyles.textFont,
    fontSize: 15,
    marginTop:5
  },
});
