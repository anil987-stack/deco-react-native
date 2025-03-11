import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { Spinner } from "native-base";
import NavigationService from "App/Services/NavigationService";

import SelectionButton from "App/Components/SelectionButton";
import { ApplicationStyles, Colors } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuInfoTuple from "./MenuInfoTuple";
import Bookorder from "./../Bookorder/bookorder";
import UserActions from "App/Stores/User/Actions";
import MenuIcon from "react-native-vector-icons/AntDesign";
import { ImageBackground } from "react-native";
import { HeaderNew } from "../../Components/Headerbar/HeaderNew";
import PartnerEnrollmentModal from "./ContractorOnboarding/PartnerEnrollmentModal";
import CommonActions from "App/Stores/Common/Actions";
import SelectUserModal from "../Visits/VisitsDisplayScreen/SelectUserModal";
import TaskManagementModal from "./TaskManagement/TaskManagementModal";
class MenuScreen extends Component {
  componentDidMount() {}

  fetchCall() {}
  submit() {
    const { logoutUser } = this.props;

    logoutUser({
      user_logged_in: false,
    });
  }

  render() {
    const { data, loading } = this.props;

    return (
      <>
        <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          <HeaderNew
            title={"MENU"}
            textStyle={{ top: hp("-1.8%") }}
            onPress={() => NavigationService.goback()}
          />
          <ScrollView>
            {/* <MenuInfoTuple
          data={data}
          loading={loading}
          onPressLogoout={() => this.submit()}
        /> */}

            <View style={Styles.mainContainer}>
              <View
                style={{
                  ...ApplicationStyles.container,
                  backgroundColor: "transparent",
                }}
              >
                {/* {
              <SelectionButton
                //icon="event-note"
                img={require("../../Assets/Images/purchase_order.png")}
                title="Leads"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("PurchaseOrder")}
              />
            }
            {
              <SelectionButton
                img={require("../../Assets/Images/sales_order.png")}
                title="Marketing Material Request"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("Invoice")}
              />
            } */}
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice1.png")}
                    imgStyle={{
                      width: wp("53%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    // title="Influencer Onboarding"
                    title="Partner Management"
                    textStyle={{
                      marginTop: hp("-2.4%"),
                      marginBottom: 25,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() =>
                      this.props.openModal({
                        content3: (
                          <PartnerEnrollmentModal
                            onClose={() => {
                              closeModal();
                            }}
                          />
                        ),
                        heading3: "PARTNER MANAGEMENT",
                        bodyFlexHeight3: 0.8,
                      })
                    }
                    // onPress={() => NavigationService.navigate("ContractorOnboard")}
                  />
                }
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice2.png")}
                    imgStyle={{
                      width: wp("42%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    // title="Retailer OnBoarding"
                    title="DOCUMENTS MANAGEMENT"
                    textStyle={{
                      marginTop: hp("-3%"),
                      marginBottom: 25,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    // onPress={() => NavigationService.navigate("OnBoarding")}
                    onPress={() => NavigationService.navigate("Document")}
                  />
                }
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/packages.png")}
                title="Inventory"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("Inventory")}
              />
            }
            {
              <SelectionButton
                img={require("../../Assets/Images/debit-card.png")}
                title="Account Statement Report"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("AccountStatement")}
              />
            } */}
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/brand.png")}
                title="Brand Requisition"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("BrandRequisition")}
              />
            } */}
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/presentation.png")}
                title="Document Management"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("Training")}
              />
            } */}

                {/* {
              <SelectionButton
                img={require("../../Assets/Images/business-man.png")}
                title="Know Your Partner"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                // onPress={() => NavigationService.navigate("PurchaseOrder")}
                onPress={() => NavigationService.navigate("RetailerList")}
              />
            } */}
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/sales_report.png")}
                title="sales Report"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("SalesReport")}
              />
            } */}

                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice3.png")}
                    imgStyle={{
                      width: wp("45%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    title="Event Management"
                    textStyle={{
                      marginTop: hp("-3%"),
                      marginBottom: 25,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("EventList")}
                  />
                }
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/payment.png")}
                title="Collections"
                textStyle={{ marginTop: hp('7%'), marginBottom: 10, textTransform: 'none' }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("PaymentScreen")}
              />
            }
           */}
                {/* {
              <SelectionButton
                img={require("../../Assets/Images/expense.png")}
                title="Local Conveyance"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() =>
                  NavigationService.navigate("LocalExpenseTabScreen")
                }
              />
            } */}

                {/* {
              <SelectionButton
                img={require("../../Assets/Images/map.png")}
                title="PJP"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("BeatPlan")}
              />
            } */}

                {/* {
              <SelectionButton
                img={require("../../Assets/Images/competitors.png")}
                title="Competitors"
                textStyle={{
                  marginTop: hp("7%"),
                  marginBottom: 10,
                  textTransform: "none",
                }}
                style={Styles.Card}
                onPress={() => NavigationService.navigate("Competitors")}
              />
            } */}
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice4.png")}
                    title="Merchandising Materials"
                    imgStyle={{
                      width: wp("47%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    textStyle={{
                      marginTop: hp("-3%"),
                      marginBottom: 25,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    // onPress={() => NavigationService.navigate("Campaign")}
                    onPress={() => NavigationService.navigate("Merchandiser")}
                  />
                }
                {/* <SelectionButton
                  img={require("../../Assets/Images/slice5.png")}
                  title="Lead MManagement"
                  imgStyle={{
                    width: wp("53%"),
                    height: hp("15%"),
                    marginTop: hp("-4%"),
                  }}
                  textStyle={{
                    marginTop: hp("-2.4%"),
                    marginBottom: 17,
                    textTransform: "uppercase",
                    color: "white",
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("3.3%"),
                  }}
                  style={Styles.Card}
                  onPress={() => NavigationService.navigate("Leads")}
                />

              />
            } */}
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice5.png")}
                    title="Lead Management"
                    imgStyle={{
                      width: wp("53%"),
                      height: hp("15%"),
                      marginTop: hp("-4%"),
                    }}
                    textStyle={{
                      marginTop: hp("-2.4%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("Leads")}
                  />
                }
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice6.png")}
                    title="Task Management"
                    imgStyle={{
                      width: wp("53%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    textStyle={{
                      marginTop: hp("-2%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => {
                      this.props.openModal({
                        content3: (
                          <TaskManagementModal
                            onClose={() => {
                              closeModal();
                            }}
                          />
                        ),
                        heading3: "TASK MANAGEMENT",
                        bodyFlexHeight3: 0.8,
                      });
                    }}
                  />
                }

                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice7.png")}
                    title="Visit Planning"
                    imgStyle={{
                      width: wp("53%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    textStyle={{
                      marginTop: hp("-1.5%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("AddPlannedVisitsScreen")}
                    // onPress={() => NavigationService.navigate("Merchandiser")}
                  />
                }

                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice8.png")}
                    title="Help & Support"
                    imgStyle={{
                      width: wp("53%"),
                      height: hp("15%"),
                      marginTop: hp("-2%"),
                    }}
                    textStyle={{
                      marginTop: hp("-1.5%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    // onPress={() => NavigationService.navigate("CompetitorInfoScreen")}
                    // onPress={() => NavigationService.navigate("Merchandiser")}
                  />
                }

                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice1.png")}
                    title="Retailer 360"
                    imgStyle={{
                      width: wp("54%"),
                      height: hp("16%"),
                      marginTop: hp("-4%"),
                    }}
                    textStyle={{
                      marginTop: hp("-2.4%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("Retailer360")}
                  />
                }
                {
                  <SelectionButton
                    img={require("../../Assets/Images/slice1.png")}
                    title="influencer 360"
                    imgStyle={{
                      width: wp("54%"),
                      height: hp("16%"),
                      marginTop: hp("-4%"),
                    }}
                    textStyle={{
                      marginTop: hp("-2.4%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("Influencer360")}
                  />
                }

{
                  <SelectionButton
                    img={require("../../Assets/Images/slice1.png")}
                    title="dealer 360"
                    imgStyle={{
                      width: wp("54%"),
                      height: hp("16%"),
                      marginTop: hp("-4%"),
                    }}
                    textStyle={{
                      marginTop: hp("-2.4%"),
                      marginBottom: 17,
                      textTransform: "uppercase",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                      fontSize: wp("3.3%"),
                    }}
                    style={Styles.Card}
                    onPress={() => NavigationService.navigate("DealerMainScreen")}
                  />
                }
              </View>
              {/* <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
            // onPress={() =>
            //   Linking.openURL(
            //     "https://www.facebook.com/LucasIndianServiceLimited"
            //   )
            // }
            >
              <Image
                style={{ height: 40, width: 40, margin: 10 }}
                source={require("../../Assets/Images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() =>
            //   Linking.openURL(
            //     "https://www.linkedin.com/company/lucas-indian-service/"
            //   )
            // }
            >
              <Image
                style={{ height: 40, width: 40, margin: 10 }}
                source={require("../../Assets/Images/twiter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() =>
            //   Linking.openURL(
            //     "https://www.youtube.com/channel/UCHD_e_LYAf95bcp85RfnfJA"
            //   )
            // }
            >
              <Image
                style={{ height: 38, width: 38, margin: 10 }}
                source={require("../../Assets/Images/youtube.png")}
              />
            </TouchableOpacity>
          </View> */}
            </View>
          </ScrollView>
          <View style={{ height: hp("8.75%") }}></View>
        </ImageBackground>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user.user_details,
  loading: state.user.userLogoutIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (data) => dispatch(UserActions.logoutUser(data)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("3%"),
    elevation: 10,
    backgroundColor: "transparent",
    marginBottom: hp("3%"),
  },

  Card: {
    // marginTop: "4%",
    // elevation: 5,
    // borderColor: "white",
    // borderRadius: 5,
    // width:"38%",
    // height:"19%"

    height: hp("17%"),
    width: wp("37%"),
    // alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#4d0d0d",
    borderWidth: 1,
    borderColor: "transparent",
    elevation: 7,
    opacity: 0.7,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
