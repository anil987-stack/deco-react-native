import React, { Component } from "react";
import { View, Alert, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import Style from "./RetailerInfoStyle";
import RetailersActions from "App/Stores/Retailers/Actions";
import { ApplicationStyles, Colors } from "App/Theme";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//<ScrollableTab tabsContainerStyle={Style.tabHeading} underlineStyle={Style.tabUnderLine} style={Style.mainTabs} />

class RetailerTab extends React.Component {
  render() {
    const {
      isASM,
      searchFilters,
      changeSearchFilters,
      selectedRetailer,
    } = this.props;
    return selectedRetailer.data.Sub_Category__c == "DEALER" ? (
      <Tabs
        renderTabBar={() => (
          <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
        )}
        onChangeTab={(tab) =>
          changeSearchFilters({
            edited_field: "selectedTab",
            edited_value: tab.i,
          })
        }
        tabBarUnderlineStyle={Style.tabUnderLine}
        style={{ width: wp("100%"), alignSelf: "center" }}
        initialPage={searchFilters["selectedTab"]}
      >
        <Tab
          heading="Info"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Sales Orders"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>
        <Tab
          heading="Invoices"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Contacts"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Tickets"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Outstanding"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Target vs Achievement"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>
      </Tabs>
    ) : (
      <Tabs
        // renderTabBar={() => (
        //   <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
        // )}
        onChangeTab={(tab) =>
          changeSearchFilters({
            edited_field: "selectedTab",
            edited_value: tab.i,
          })
        }
        tabBarUnderlineStyle={Style.tabUnderLine}
        style={{ width: wp("100%"), alignSelf: "center" }}
        initialPage={searchFilters["selectedTab"]}
      >
        <Tab
          heading="Info"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Contacts"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>

        <Tab
          heading="Tickets"
          tabStyle={Style.tabHeading}
          activeTabStyle={{ backgroundColor: Colors.white }}
          textStyle={Style.tabText}
          activeTextStyle={Style.tabTextStyle}
        ></Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  //isASM: state.user.user_details.designation__c,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  searchFilters: state.retailers.retailerSearchFilters,
  selectedRetailer: state.retailers.selectedRetailer,
  //retailerSearchFilters: state.retailers.retailerSearchFilters,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(RetailersActions.updateSearchFilters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerTab);
