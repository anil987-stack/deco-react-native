import React from "react";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { liveInEurope } from "App/Stores/Example/Selectors";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Input,
  Item,
  Right,
  Badge,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import WhiteButton from "App/Components/WhiteButton";
import RetailersActions from "App/Stores/Retailers/Actions";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BackArrowButton from "App/Components/BackArrowButton";
import VisitsActions from "App/Stores/Visits/Actions";
import GenericIcon from "App/Components/GenericIcon";

class StartVisitLayout extends React.Component {
  scrollToIndex(index) {
    let distanceToBeScrolled = index * wp("23%");
    if (this.flatListRef) {
      this.flatListRef.scrollTo({
        x: distanceToBeScrolled,
        y: 0,
        animated: true,
      });
    }
  }
  onSelectRetailer(params) {
    this.onPressCardNavigate(params);
    // NavigationService.navigate("RetailerInfoScreen", params);
    this.props.selectRetailer(params);
  }

  onPressCardNavigate(params) {
    console.log("ppppp", params);
    if (
      params.data.Sub_Category__c !== "PROSPECT- PRIMARY" &&
      params.data.Sub_Category__c !== "PROSPECT- SECONDARY"
    ) {
      NavigationService.navigate("RetailerInfoScreen", params);
    }
  }

  retailerdata() {
    const { executevisitData, retailerlisit } = this.props;
    let address = retailerlisit.filter((obj) => {
      return obj.Id == executevisitData.Customer_Name__c;
    });

    address = address[0];
    this.onSelectRetailer({ id: address.Id, data: address });
  }

  render() {
    const {
      cart,
      children,
      partyType,
      retailerId,
      currentScreen,
      extractRetailerInfoData,
      executevisitData,
      retailerlisit,
    } = this.props;

    return (
      <SafeAreaView>
        {/* <Header style={Styles.header}>
          <View style={{ paddingTop: hp("1%"), paddingBottom: hp("1%") }}> */}
            {/* <BackArrowButton 
       style={{backgroundColor:"white"}}
       onPress={()=>{NavigationService.navigate('VisitsScreen')}}
       show={true}
       /> */}
            {/* <TouchableOpacity transparent>
              <GenericIcon
                name={"arrow-back"}
                onPress={NavigationService.goback}
                style={{
                  color: Colors.white,
                  fontSize: wp("8%"),
                  marginLeft: hp("0"),
                  marginTop: hp("0"),
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            ref={(ref) => {
              this.flatListRef = ref;
            }}
          >
            <WhiteButton
              title={"Visit info"}
              style={{
                ...Styles.actionButton,
                ...Styles.customSelectedStyleCorpBlue,
              }}
              textStyle={Styles.actionButtonText}
              onPress={() => {
                NavigationService.navigate("StartVisitForm");
                this.scrollToIndex(0);
              }}
              selected={
                currentScreen == "StartVisitForm" || "AddCompetitorForm"
              }
              customSelectedStyle={{
                ...Styles.customSelectedStyleCorpBlue,
                ...Styles.selected,
              }}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            /> */}
            {/* <WhiteButton 
                  title={'Attachment'} 
                  style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue}}
                  textStyle={Styles.actionButtonText}
                  onPress={() => {NavigationService.navigate('VisitAttachmentScreen');  this.scrollToIndex(1) }} 
                  selected={currentScreen == 'VisitAttachmentScreen'}
                  customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
                  customSelectedTextStyle={Styles.customSelectedTextStyle}
                /> */}
            {/* <WhiteButton
              title={"Party Info"}
              style={{
                ...Styles.actionButton,
                ...Styles.customSelectedStyleCorpBlue,
              }}
              textStyle={Styles.actionButtonText}
              onPress={() => {
                this.retailerdata();
              }}
              selected={currentScreen == "RetailerInfoScreen"}
              customSelectedStyle={{
                ...Styles.customSelectedStyleCorpBlue,
                ...Styles.selected,
              }}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />
            <WhiteButton
              title={"Ticket"}
              style={{
                ...Styles.actionButton,
                ...Styles.customSelectedStyleCorpBlue,
              }}
              textStyle={Styles.actionButtonText}
              onPress={() => {
                NavigationService.navigate("ComplaintScreen");
              }}
              selected={currentScreen == "ComplaintScreen"}
              customSelectedStyle={{
                ...Styles.customSelectedStyleCorpBlue,
                ...Styles.selected,
              }}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            />
            <WhiteButton
              title={"Book Order"}
              style={{
                ...Styles.actionButton,
                ...Styles.customSelectedStyleCorpBlue,
              }}
              textStyle={Styles.actionButtonText}
              onPress={() => {
                NavigationService.navigate("PurchaseOrder");
              }}
              selected={currentScreen == "PurchaseOrder"}
              customSelectedStyle={{
                ...Styles.customSelectedStyleCorpBlue,
                ...Styles.selected,
              }}
              customSelectedTextStyle={Styles.customSelectedTextStyle}
            /> */}

            {
              // <WhiteButton
              //     title={'Party info'}
              //     style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue}}
              //     onPress={() => {
              //       partyType == 'Retailer' ? NavigationService.navigate('RetailerInfoScreen') : NavigationService.navigate('DealerInfoScreen');
              //       extractRetailerInfoData({id: retailerId});
              //       this.scrollToIndex(4)
              //     }}
              //     // textStyle={Styles.headerButtonText}
              //     selected={currentScreen == 'RetailerInfoScreen'}
              //     customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
              //     customSelectedTextStyle={Styles.customSelectedTextStyle}
              //   />
            }

            {
              // <WhiteButton
              //   title={'Survey'}
              //  style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue}}
              //  textStyle={Styles.actionButtonText}
              //  onPress={() => {NavigationService.navigate('VisitBookOrder'); this.scrollToIndex(1)}}
              //   selected={currentScreen == 'VisitBookOrder'}
              //  customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
              //  customSelectedTextStyle={Styles.customSelectedTextStyle}
              // />
            }
            {/* {  
            <WhiteButton 
               title={'Book Order'} 
                style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue}}
                 textStyle={Styles.actionButtonText}
                  onPress={() => {NavigationService.navigate( partyType=='Retailer'?'VisitBookOrder':'VisitBookOrderHeader'); this.scrollToIndex(1)  ; this.props.clearSelectRetailer() ;this.props.clearCart(); this.props.clearAddOrderLineData()}}    
                  selected={currentScreen == 'VisitBookOrder'}
                 customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
                 customSelectedTextStyle={Styles.customSelectedTextStyle}
           />
           }  */}

            {
              //<WhiteButton
              // title={`Cart (${(cart && cart.items) ? (cart.items.length) : 0})`}
              //style={Styles.headerButton}
              //onPress={() => {NavigationService.navigate('VisitOrderCart'); this.scrollToIndex(2)}}
              //textStyle={Styles.headerButtonText}
              //selected={currentScreen == 'VisitOrderCart'}
              // >
              // <Badge style={Styles.countBadge}>
              //   <Text>{(this.props.cart && this.props.cart.items) ? (this.props.cart.items.length) : 0}</Text>
              // </Badge>
              // </WhiteButton>
            }
            {
              // partyType == 'Dealer' ?
              //  <WhiteButton
              //  title={'Outstanding'}
              // style={Styles.headerButton}
              //onPress={() => {NavigationService.navigate('VisitRetailerOutstanding'); extractRetailerInfoData({id: retailerId}); this.scrollToIndex(3)}}
              // textStyle={Styles.headerButtonText}
              //  selected={currentScreen == 'VisitRetailerOutstanding' || currentScreen == 'OutstandingPaymentInfo'}
              // /> : []
            }
          {/* </ScrollView> */}
        {/* </Header> */}
        {children}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  cart: state.visits.cart,
  executevisitData: state.visits.executeVisitData,
  retailerlisit: state.retailers.retailersList,
});

const mapDispatchToProps = (dispatch) => ({
  extractRetailerInfoData: (params) =>
    dispatch(RetailersActions.extractRetailerInfoData(params)),
  clearSelectRetailer: () => dispatch(RetailersActions.clearSelectRetailer()),
  clearAddOrderLineData: () =>
    dispatch(RetailersActions.clearAddOrderLineData()),
  selectRetailer: (params) => dispatch(RetailersActions.selectRetailer(params)),

  clearCart: () => dispatch(VisitsActions.clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartVisitLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("13%"),
    alignItems: "flex-start",

    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  headerBody: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    width: wp("100%"),
  },
  headerButton: {
    borderWidth: 1.5,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
    marginHorizontal: 4,
    minWidth: wp("26%"),
    backgroundColor: Colors.firozi,
    alignSelf: "center",
    height: hp("5.5%"),
    overflow: "visible",
  },
  headerButtonText: {
    fontSize: wp("3.6%"),
    fontFamily: ApplicationStyles.textMediumFont,
    textAlign: "center",
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.button,
    right: wp("1.5%"),
    top: hp("1.4%"),
    borderColor: Colors.user,
    borderWidth: 0.5,
  },

  actionButton: {
    overflow: "visible",
    // paddingLeft: wp('5%'),
    // paddingRight: wp('4%'),
    marginBottom: hp("1%"),
    marginTop: hp("1%"),
    marginRight: wp("1%"),
    marginLeft: wp("1%"),
    height: hp("5.0%"),
    elevation: 10,
    borderWidth: 4,
    minWidth: wp("28%"),
    borderColor: Colors.white,
  },
  customSelectedTextStyle: {
    fontSize: wp("3.1%"),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
  },
  selected: {
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  customSelectedStyleCorpBlue: {
    backgroundColor: Colors.white,
    width: wp("30%"),
  },
  actionButtonText: {
    fontSize: wp("3.1%"),
    fontWeight: "800",
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
  },
});
