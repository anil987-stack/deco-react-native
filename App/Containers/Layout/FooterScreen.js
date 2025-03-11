import React from "react";
import {
  Platform,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { PropTypes } from "prop-types";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Radio,
  CheckBox,
} from "native-base";
import FooterIcon from "../../Components/FooterIcon";
import Footerfilter from "../../Components/Footerfilter/Footerfilter";
import Style from "./LayoutScreenStyles";
import { HelperService } from "App/Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";
import Drawer from "./SideBarLayout/Drawer";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";

class FooterScreen extends React.Component {
  render() {
    const {
      fetchPjpLoading,
      startedToday,
      endedToday,
      absentToday,
      currentScreen,
      startday,
    } = this.props;

    let startDayIconText = "Start";
    if (startedToday) {
      startDayIconText = "End";
    }

    if (endedToday) {
      startDayIconText = "Ended";
    }

    if (absentToday) {
      startDayIconText = "Absent";
    }

    let startDayActive =
      currentScreen === "StartDayScreen" ||
      currentScreen === "EndDayScreen" ||
      currentScreen === "PresentScreen" ||
      currentScreen === "AbsentScreen" ||
      currentScreen === "CompletedDayScreen" ||
      currentScreen === "StartDaySelectionScreen";
    let startDayDisabled = endedToday || absentToday;

    let visitsActive =
      currentScreen === "VisitsScreen" ||
      currentScreen === "UnplannedOptionsScreen" ||
      currentScreen === "RetailerResultListScreen" ||
      currentScreen === "AddPlannedVisitsScreen" ||
      currentScreen === "SelectedPlannedVisitsScreen" ||
      currentScreen === "SearchByAreaScreen" ||
      currentScreen === "SearchByLocationScreen" ||
      currentScreen === "StartVisitForm" ||
      currentScreen === "VisitBookOrder" ||
      currentScreen === "VisitOrderCart" ||
      currentScreen === "VisitRetailerOutstanding" ||
      currentScreen === "OutstandingPaymentInfo" ||
      currentScreen === "AddCompetitorForm" ||
      currentScreen === "AddStockForm" ||
      currentScreen === "UpdateStockForm" ||
      currentScreen === "UpdateCompetitorForm" ||
      currentScreen === "VisitBookOrderHeader";
    let visitsDisabled = false;

    let retailersActive =
      currentScreen === "RetailerList" ||
      currentScreen === "RetailerOrdersListScreen" ||
      currentScreen === "NewRetailer" ||
      currentScreen === "RetailerInfoScreen" ||
      currentScreen === "DealerInfoScreen" ||
      currentScreen === "DealerInvoiceListScreen" ||
      currentScreen === "DealerOrdersListScreen" ||
      currentScreen === "DealerOutstandingListScreen" ||
      currentScreen === "InvoiceInfoScreen" ||
      currentScreen === "DealerOrderInfoScreen" ||
      currentScreen === "DealerPaymentsListScreen" ||
      currentScreen === "NewDsrScreen";

    let retailersDisabled = false;

    let profilesActive =
      currentScreen === "MenuScreen" || currentScreen === "MenuDetailScreen";

    let profilesDisabled = false;

    let ordersListActive =
      currentScreen === "OrdersListScreen" ||
      currentScreen === "OrderInfoScreen";

    let ordersListDisabled = ordersListActive;

    let settingsActive = currentScreen === "DashboardScreen";
    let settingsDisabled = false;

    return (
      <Container
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "transparnt",
          width: "100%",
          height: hp("10%"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Footer> */}
        {/* <FooterTab
          style={{
            backgroundColor: 'transparent',
          }}
        > */}
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            // height: hp("2%"),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            // marginTop: hp("0.5%"),
            marginBottom: hp("-2.8%"),
            zIndex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {startDayActive ? (
              <GenericIcon
                name="arrow-drop-down"
                showIcon={true}
                style={{
                  fontSize: wp("10%"),
                  color: "white",
                }}
              />
            ) : null}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {visitsActive ? (
              <GenericIcon
                name="arrow-drop-down"
                showIcon={true}
                style={{
                  fontSize: wp("10%"),
                  color: "white",
                }}
              />
            ) : null}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {settingsActive ? (
              <GenericIcon
                name="arrow-drop-down"
                showIcon={true}
                style={{
                  fontSize: wp("10%"),
                  color: "white",
                }}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => NavigationService.navigate("MenuScreen")}
          >
            {profilesActive ? (
              <GenericIcon
                name="arrow-drop-down"
                showIcon={true}
                style={{
                  fontSize: wp("10%"),
                  color: "white",
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={["#bfbfbf", "transparent"]}
          start={{ x: 0, y: -0.4 }}
          end={{ x: 0, y: 1 }}
          style={{
            flexDirection: "row",
            width: "90%",
            height: hp("6%"),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() =>
              startedToday
                ? NavigationService.navigate("EndDayScreen")
                : NavigationService.navigate("StartDayScreen")
            }
          >
            <GenericIcon
              name={"run-fast"}
              show={true}
              style={{
                fontSize: startDayActive ? wp("8%") : wp("6.5%"),
                color: startDayActive ? "white" : "#bfbfbf",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => NavigationService.navigate("VisitsScreen")}
          >
            <GenericIcon
              name={"handshake"}
              show={true}
              style={{
                fontSize: visitsActive ? wp("8%") : wp("6.5%"),
                color: visitsActive ? "white" : "#bfbfbf",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => NavigationService.navigate("DashboardScreen")}
          >
            <GenericIcon
              name={"speedometer"}
              show={true}
              style={{
                fontSize: settingsActive ? wp("8%") : wp("6.5%"),
                color: settingsActive ? "white" : "#bfbfbf",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => NavigationService.navigate("MenuScreen")}
          >
            <GenericIcon
              name={"grid-view"}
              showIcon={true}
              style={{
                fontSize: profilesActive ? wp("8%") : wp("6.5%"),
                color: profilesActive ? "white" : "#bfbfbf",
              }}
            />
          </TouchableOpacity>
        </LinearGradient>

        <View
          style={{
            flexDirection: "row",
            width: "90%",
            // height: hp("2%"),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            // marginTop: hp("0.5%"),
            marginBottom: wp("4%"),
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {startDayActive ? (
              <Text
                style={{
                  fontSize: wp("2.5%"),
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                START
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {visitsActive ? (
              <Text
                style={{
                  fontSize: wp("2.5%"),
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                VISITS
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            {settingsActive ? (
              <Text
                name={"speedometer"}
                show={true}
                style={{
                  fontSize: wp("2.5%"),
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                DASHBOARD
              </Text>
            ) : null}
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => NavigationService.navigate("MenuScreen")}
          >
            {profilesActive ? (
              <Text
                name={"grid-view"}
                showIcon={true}
                style={{
                  fontSize: wp("2.5%"),
                  color: profilesActive ? "white" : "#bfbfbf",
                }}
              >
                MENU
              </Text>
            ) : null}
          </TouchableOpacity>
        </View>

        {/* </FooterTab> */}
        {/* <Text style={{width:'90%',marginTop:-5}}>sort by</Text>
       <View style={{flexDirection:'row',width:'99%'}}>
      <View style={{flexDirection:'row'}}>
       <Radio
          style={{marginLeft:10}}
         // onPress={() => changeForm({ edited_field: 'Category_Type__c', edited_value: "Dealer" })}
          selected={false}
          //selected={form.Category_Type__c =='Dealer'}
          selectedColor={Colors.pink}
          color= {Colors.pink}
        />
        <Text style={{fontSize:13}}>Nearby</Text>
</View>
      <View style={{flexDirection:'row'}}>
       <Radio
          style={{marginLeft:10}}
         // onPress={() => changeForm({ edited_field: 'Category_Type__c', edited_value: "Dealer" })}
          selected={false}
          //selected={form.Category_Type__c =='Dealer'}
          selectedColor={Colors.pink}
          color= {Colors.pink}
        />
        <Text style={{fontSize:13}}>Availability</Text>
</View>
      <View style={{flexDirection:'row',width:'22%'}}>
      <CheckBox
                  style={{ borderRadius: 2, borderColor:Colors.pink, color: Colors.pink  }}
                 // checked={form.same_as_above == true}
                  // onPress={(event) => {
                  //   let updatedValue = form.same_as_above == true? false : true
                  //   changeForm({ edited_field: 'same_as_above', edited_value: updatedValue })
                  // }
                  // }
                />
        <Text style={{marginLeft:'15%',fontSize:13}}>Online consults</Text>
</View>

      <View style={{flexDirection:'row',width:'22%',marginleft:'10%'}}>
      <CheckBox
                  style={{ borderRadius: 2, borderColor:Colors.pink, color: Colors.pink  }}
                 // checked={form.same_as_above == true}
                  // onPress={(event) => {
                  //   let updatedValue = form.same_as_above == true? false : true
                  //   changeForm({ edited_field: 'same_as_above', edited_value: updatedValue })
                  // }
                  // }
                />
        <Text style={{marginLeft:'15%',fontSize:13}}>In-Person consults</Text>
</View>

<View>
<GenericIcon
name='filter-list-alt'
style={{fontSize:27,marginLeft:'15%'}}

/>
  
</View>


       </View>
         */}

        {/* </Footer> */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('is today',HelperService.isToday(state.user.startDayTime));
  return {
    isConnected: state.network.isConnected,
    isVisible: state.common.isNetworkBannerVisible,
    currentScreen: state.common.currentScreen,
    startday: state.user.startDayTime,
    fetchPjpLoading: state.user.fetchPjpLoading,

    startedToday: state.user.startDayTime
      ? HelperService.isToday(
          state.user.startDayTime - (5 * 60 * 60 * 1000 + 30 * 60 * 1000)
        )
      : false,
    endedToday: state.user.endDayTime
      ? HelperService.isToday(
          state.user.endDayTime - (5 * 60 * 60 * 1000 + 30 * 60 * 1000)
        )
      : false,
    absentToday: state.user.absentDayTime
      ? HelperService.isToday(
          state.user.absentDayTime - (5 * 60 * 60 * 1000 + 30 * 60 * 1000)
        )
      : false,
  };
};
export default connect(mapStateToProps)(FooterScreen);

const Styles = StyleSheet.create({
  icon: {
    color: "white",
    alignSelf: "center",
  },
  iconText: {
    color: "white",
    fontFamily: ApplicationStyles.textFont,
    fontSize: Fonts.iconText.fontSize,
    alignSelf: "center",
    textAlign: "center",
    overflow: "hidden",
    paddingLeft: 0,
    paddingRight: 0,
  },
  iconActive: {
    color: Colors.white,
  },
  iconButton: {
    backgroundColor: "white",
    borderRadius: 0,
    height: "100%",
  },
  iconActiveButton: {
    backgroundColor: "#0075d8",
  },
});
