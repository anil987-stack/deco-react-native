import React, { Component } from 'react'
import { View, Alert, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Styles from './onBoardingStyle'
import usersActions from 'App/Stores/User/Actions'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import Communication from "./Tabscreens/Communication";
import Financial from "./Tabscreens/Financial";
import Document from "./Tabscreens/Document";
import BankDetail from './Tabscreens/BankDetail'
import Attachment from './Tabscreens/Attachment'
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




//<ScrollableTab tabsContainerStyle={Style.tabHeading} underlineStyle={Style.tabUnderLine} style={Style.mainTabs} />

class KycTab extends React.Component {
  render() {
    const {
      isASM,
      searchFilters,
      changeSearchFilters
    } = this.props
    let show=this.props.shows
   console.log(show,"showsssss");
    return (
      <Tabs
      tabBarUnderlineStyle={Styles.tabUnderLine}
      // onChangeTab={({ i }) => changeType(i)}
      style={{ width: wp("100%"), alignSelf: "center" }}
      renderTabBar={() => (
        <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
      )}
    >
      <Tab
        heading="Communication"
        tabStyle={Styles.tabHeading}
        activeTabStyle={{ backgroundColor: Colors.white }}
        textStyle={Styles.tabText}
        activeTextStyle={Styles.tabTextStyle}
      >
       <Communication shows={show} />
      </Tab>
      <Tab
        heading="Financial"
        tabStyle={Styles.tabHeading}
        textStyle={Styles.tabText}
        activeTabStyle={{ backgroundColor: Colors.white }}
        activeTextStyle={Styles.tabTextStyle}
      >
       <Financial shows={show} />
      </Tab>
      <Tab
        heading="Document"
        tabStyle={Styles.tabHeading}
        textStyle={Styles.tabText}
        activeTabStyle={{ backgroundColor: Colors.white }}
        activeTextStyle={Styles.tabTextStyle}
      >
       <Document shows={show} />
      </Tab>
      <Tab
        heading="Others"
        tabStyle={Styles.tabHeading}
        textStyle={Styles.tabText}
        activeTabStyle={{ backgroundColor: Colors.white }}
        activeTextStyle={Styles.tabTextStyle}
      >
       <BankDetail shows={show} />
      </Tab>
      {show==true?<Tab
        heading="Attachment"
        tabStyle={Styles.tabHeading}
        textStyle={Styles.tabText}
        activeTabStyle={{ backgroundColor: Colors.white }}
        activeTextStyle={Styles.tabTextStyle}
      >
         <Attachment />
      </Tab>:[]}
      {/* <Tab
        heading="Completed"
        tabStyle={Styles.tabHeading}
        textStyle={Styles.tabText}
        activeTabStyle={{ backgroundColor: Colors.primary }}
        activeTextStyle={Styles.tabTextStyle}
      >
        <Complete />
      </Tab>  */}
    </Tabs>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  //isASM: state.user.user_details.designation__c,
  psmList: state.user.psmList.concat([{ id: '', name: 'All' }]),
  searchFilters: state.user.searchFilters,
  //retailerSearchFilters: state.retailers.retailerSearchFilters,

});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) => dispatch(usersActions.updateSearchFilters(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KycTab)