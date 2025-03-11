import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Icon, Input } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Style from "./RetailerInfoStyle";
import RetailerInfoTuple from "App/Containers/Retailers/RetailerInfoTuple";
import LayoutScreen from "App/Containers/Layout/LayoutScreen";
import NavigationService from "App/Services/NavigationService";
import WhiteButton from "App/Components/WhiteButton";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import InfoDisplay from "App/Components/InfoDisplay";
import RetailersActions from "App/Stores/Retailers/Actions";
import Loading from "App/Components/Loading";
import Header from "App/Components/Header/index";
import { Button } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RetailerTab from "./RetailerTab";
import RetailerOrdersListScreen from "../RetailerOrdersListScreen";
import ComplaintsScreen from "../Complaints";
import CommonActions from "App/Stores/Common/Actions";
import UpdateRetailer from "../NewRetailer/UpdateRetailer";
import DsrListScreen from "./DsrScreen/DsrListScreen";
// import SpeedoMeter from 'App/Components/SpeedoMeter'
import CreditLimit from "App/Containers/CreditLimit";
import DealerOutstandingListScreen from "../DealerOutstandingListScreen/DealerOutstandingListScreen";
import DealerOrdersListScreen from "../DealerOrdersListScreen/DealerOrdersListScreen";
import DealerInvoiceListScreen from "../DealerInvoiceListScreen/DealerInvoiceListScreen";
import ProductActions from "App/Stores/Products/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import Last3Visit from "./Last3Viait/Last3visit";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Tickets from "./Tickets";
import JodidarKyc from "../DealerKyc/JodidarKyc";
import RetailerKyc from "../DealerKyc/RetailerKyc";
import MechanicKyc from "../DealerKyc/MechanicKyc";
import WHRetailerKyc from "../DealerKyc/WHRetailerKyc";
import menuActions from "App/Stores/Menu/Actions";
import Points from "./Points";
import Gift from "./Gift";
import CustomerOutstanding from "./CustomerOutstanding";
import CustomerTarget from "./CustomerTarget";
class RetailerInfoScreen extends Component {
  async updateLocation() {
    const { selectedRetailer, token } = this.props;
    const { id, data } = selectedRetailer;
    // console.log(data,id,"ffffff")
    this.props.updateRetailerLocationLoading();
    let location = await HelperService.requestLocation();
    if (location == "DENIED") {
      Alert.alert(
        "Location permission is required to proceed.",
        "Go App Permissions and Turn on Location Permission for Re-Konekt."
      );
      this.props.updateRetailerLocationLoadingStop(); // stops btn loading
      return;
    } else if (!location) {
      this.props.updateRetailerLocationLoadingStop();
      return;
    }

    this.props.updateRetailerLocation({
      recordID: selectedRetailer.id,
      Latitude: String(location.latitude),
      Longitude: String(location.longitude),
      token: token,
      // "Sector 17 Bus Stand Road Chandigarh 160022 India"
    });
  }

  onPressCard() {
    this.props.openModal({
      content: (
        <UpdateRetailer
        // onSubmit={(params) => {this.props.updateExpense(params)}}
        />
      ),
      heading: "Update",
      bodyFlexHeight: 1,
    });
  }
  onPressLayout() {
    // console.log("lllllllllllllll");
    const {
      selectedRetailer,
      retailersList,
      stateList,
      city,
      agentAreas,
      agentBeat,
      dealersList,
    } = this.props;
    let selectedTab = [];
    const { id, data } = selectedRetailer;
    // console.log("hhhhhhhhhhhhh", data);
    if (data.Sub_Category__c == "JODIDARS") {
      selectedTab = <JodidarKyc item={data} />;
    } else if (data.Sub_Category__c == "RETAILER") {
      selectedTab = <RetailerKyc item={data} />;
    } else if (data.Sub_Category__c == "2WH MECHANIC") {
      selectedTab = <MechanicKyc item={data} />;
    } else if (data.Sub_Category__c == "2WH RETAILER") {
      selectedTab = <WHRetailerKyc item={data} />;
    } else {
      selectedTab = <RetailerInfoTuple item={data} />;
    }
    // console.log("kkkkkkkkkkk", selectedTab);
    return selectedTab;
  }

  onEditInfo(params) {
    const {
      selectedRetailer,
      retailersList,
      stateList,
      city,
      agentAreas,
      agentBeat,
      dealersList,
    } = this.props;
    let selectedTab = [];
    const { id, data } = selectedRetailer;
    // let id = this.props.item.id;
    console.log("params", params);
    this.props.selectKyc(params);
    if (data.Sub_Category__c == "JODIDARS") {
      NavigationService.navigate("Jodidar", { show: false });
    }
    if (data.Sub_Category__c == "RETAILER") {
      NavigationService.navigate("Retailer", { show: false });
    }
    if (data.Sub_Category__c == "2WH MECHANIC") {
      NavigationService.navigate("Mechanic", { show: false });
    }
    if (data.Sub_Category__c == "2WH RETAILER") {
      NavigationService.navigate("WHRetailer", { show: false });
    }
  }
  render() {
    const {
      selectedRetailer,
      retailersList,
      stateList,
      city,
      agentAreas,
      agentBeat,
      dealersList,
      dealerInfo,
    } = this.props;

    // console.log(selectedRetailer, "Retailer Check");
    const { id, data } = selectedRetailer;

    console.log("ffffffffffffff", data);

    if (!data) {
      return (
        <View style={Style.parentContainer}>
          <Loading />
        </View>
      );
    }
    //console.log(dealersList)
    let selectedTabNode = [];
    // console.log("ddddddddddd", data.Sub_Category__c == "2WH MECHANIC");
    switch (this.props.searchFilters["selectedTab"]) {
      case 0:
        selectedTabNode = this.onPressLayout();
        break;
      case 1:
        selectedTabNode = data.Sub_Category__c=="CONTRACTOR"?<CreditLimit item={data}/>:<DealerOrdersListScreen item={data} />

        break;
      case 2:
        selectedTabNode = data.Sub_Category__c=="CONTRACTOR"?<Tickets item={data}/>:<DealerInvoiceListScreen item={data} />;

        break;
      case 3:
        selectedTabNode = <CreditLimit />;
        // selectedTabNode = <Last3Visit item={data} />;
        break;
      case 4:
        selectedTabNode = <Tickets item={data} />;
        break;
      case 5:
        selectedTabNode = <CustomerOutstanding />;
        break;
      case 6:
        selectedTabNode = <CustomerTarget />;
        break;
      // case 5:
      //   selectedTabNode = <Points item={data} />;
      //   break;
      // case 6:
      //   selectedTabNode = <Gift item={data} />;
      //   break;
    }

    return (
      <View style={Style.parentContainer}>
        <Header title={data.Sub_Category__c + " Profile"} />
        <View style={Style.view1}>
          <View style={Style.view3}>
            <Text style={Style.text1}>
              G.S.R.T.C. - AMRELI
              {/* {data.Name ? data.Name : "NA"} */}
            </Text>
            <Text style={Style.grey}>
              No.28, Poomagal Main Rd, Poomagal Nagar, Gandhi Nagar, Chennai,
              Tamil Nadu 600032, India
              {/* {`${
              data.Address__c ? data.Address__c : ""
            }`} */}
            </Text>
            {/* ,${
              data.ShippingAddress && data.ShippingAddress.city
                ? data.ShippingAddress.city
                : "Patiala"
            },${
              data.ShippingAddress && data.ShippingAddress.postalCode
                ? data.ShippingAddress.postalCode
                : "17001"
            },${
              data.ShippingAddress && data.ShippingAddress.country
                ? data.ShippingAddress.country
                : "India"
            }  */}
            {/* <Text style={styles.grey}>Category B</Text>
${data.city__c ? HelperService.getNameFromSFID(city, data.city__c || 'None') : 'NA'}, 
          ${data.state__c? HelperService.getNameFromSFID(stateList, data.state__c || 'None') : 'NA'}
        */}
            {/* {data.Sub_Category__c == "JODIDARS" ||
            data.Sub_Category__c == "RETAILER" ||
            data.Sub_Category__c == "2WH MECHANIC" ||
            data.Sub_Category__c == "2WH RETAILER" ? (
              <WhiteButton
                selected={false}
                title={"Edit Info"}
                // disabled={this.props.updateRetailerLocationLoader}
                // loading={!!this.props.updateRetailerLocationLoader}
                onPress={() => this.onEditInfo(dealerInfo && dealerInfo[0])}
                style={{ ...Style.actionButton1, ...Style.locationAction }}
                textStyle={Style.actionButtonText1}
              />
            ) : (
              []
            )} */}
          </View>
          <View style={Style.view2}>
            <Button
              theme={{ roundness: 18 }}
              color={Colors.blue}
              icon={() => <FontAwesome size={18} color="white" name="phone" />}
              mode="contained"
              uppercase={false}
              // onPress={() =>
              //   data.Phone
              //     ? HelperService.callNumber(data.Phone)
              //     : HelperService.showToast({
              //         message: "Phone Number Not Available",
              //         duration: 2000,
              //         buttonText: "Okay",
              //       })
              // }
            >
              <Text>Call</Text>
            </Button>
            <WhiteButton
              selected={false}
              title={"Update Location"}
              disabled={this.props.updateRetailerLocationLoader}
              loading={!!this.props.updateRetailerLocationLoader}
              // onPress={() => this.updateLocation()}
              style={{ ...Style.actionButton, ...Style.locationAction }}
              textStyle={Style.actionButtonText}
            />

            <Button
              theme={{ roundness: 18 }}
              color={Colors.blue}
              icon={() => (
                <FontAwesome size={18} color="white" name="location-arrow" />
              )}
              mode="contained"
              uppercase={false}
              // onPress={() =>
              //   data.Location__c &&
              //   data.Location__c.latitude &&
              //   data.Location__c.longitude
              //     ? HelperService.showDirectionInGoogleMaps(
              //         data.Location__c.latitude,
              //         data.Location__c.longitude
              //       )
              //     : HelperService.showToast({
              //         message: "Geo Location Not Available",
              //         duration: 2000,
              //         buttonText: "Okay",
              //       })
              // }
            >
              Direction
            </Button>
          </View>
        </View>

        <RetailerTab />

        {selectedTabNode}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedRetailer: state.retailers.selectedRetailer,
  updateRetailerLocationLoader: state.retailers.updateRetailerLocationLoader,
  retailerCompetitors: state.retailers.retailerCompetitors,
  retailersList: state.retailers.retailersList,
  dealersList: state.retailers.dealersList,
  agentAreas: state.user.agentAreas,
  token: state.user.token,
  agentid: state.user.id,
  searchFilters: state.retailers.retailerSearchFilters,
  stateList: state.common.stateList,
  city: state.common.cityList,
  agentBeat: state.common.agentBeat,
  dealersList: state.retailers.dealersSearchList,
  user_details: state.user.user_details,
  dealerInfo: state.retailers.dealerInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateRetailerLocation: (params) =>
    dispatch(RetailersActions.updateRetailerLocation(params)),
  updateRetailerLocationLoading: () =>
    dispatch(RetailersActions.updateRetailerLocationLoading()),
  updateRetailerLocationLoadingStop: () =>
    dispatch(RetailersActions.updateRetailerLocationLoadingStop()),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
  fetchRetailerArea: (params) =>
    dispatch(CommonActions.fetchRetailerArea(params)),
  clearProductFilter: () => dispatch(ProductActions.clearProductFilter()),
  clearOrderHeaderForm: () => dispatch(VisitsActions.clearOrderHeaderForm()),
  clearCart: () => dispatch(VisitsActions.clearCart()),
  clearVisitExecution: () => dispatch(VisitsActions.clearVisitExecution()),
  selectKyc: (params) => dispatch(menuActions.selectKyc(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerInfoScreen);
