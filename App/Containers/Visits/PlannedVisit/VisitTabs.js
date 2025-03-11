import React, { Component } from 'react'
import { View, Alert, ScrollView, Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Style from './PlannedVisitStyles'
import usersActions from 'App/Stores/User/Actions'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
// import Communication from "./Tabscreens/Communication";
// import Financial from "./Tabscreens/Financial";
// import Document from "./Tabscreens/Document";
// import BankDetail from './Tabscreens/BankDetail'
// import Attachment from './Tabscreens/Attachment'
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Icon } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GenericIcon from '../../../Components/GenericIcon'
import WhiteButton from '../../../Components/WhiteButton'
import AddPlannedVisitsScreen from './AddPlannedVisitsScreen'




//<ScrollableTab tabsContainerStyle={Style.tabHeading} underlineStyle={Style.tabUnderLine} style={Style.mainTabs} />

class VisitTabs extends React.Component {
  render() {
    const {
      isASM,
      searchFilters,
      changeSearchFilters
    } = this.props
    let show=this.props.shows
   console.log(show,"showsssss");
    return (
        <View style={{flexDirection:"row"}}>
           <WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        onPress={() => <AddPlannedVisitsScreen />}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue,width:"15%",marginLeft:"-2%" }}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />

<WhiteButton
        title={"  (1)"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue, width:"15%",marginLeft:"-2%"}}
        textStyle={{...Style.actionButtonText,fontSize:10}}
        icon={"call"}
        // onPress={() => {
        //   updateSearchFilters({ edited_field: "type", edited_value: data });
        //   updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        // }}
        // selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />
        </View>
    //   <Tabs
    //   tabBarUnderlineStyle={Styles.tabUnderLine}
    //   // onChangeTab={({ i }) => changeType(i)}
    //   style={{ width: wp("100%"), alignSelf: "center",color:"white"}}
    // //   renderTabBar={() => (
    // //     <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
    // //   )}
    // >
        
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20,color:"red"}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     activeTabStyle={{ backgroundColor:Colors.white }}
    //     textStyle={Styles.tabText}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Communication shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Financial shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Document shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Document shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Document shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings' style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Document shows={show} /> */}
    //   </Tab>
    //   <Tab
    //     heading={<TabHeading><Icon name='settings'style={{fontSize:20}}/></TabHeading>}
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    {/* <Document shows={show} /> */}
    //   </Tab>
      
    //    <Tab
    //     heading="Others"
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //    <BankDetail shows={show} />
    //   </Tab>
    //   {show==true?<Tab
    //     heading="Attachment"
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.white }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //      <Attachment />
    //   </Tab>:[]} */}
    // //   {/* <Tab
    //     heading="Completed"
    //     tabStyle={Styles.tabHeading}
    //     textStyle={Styles.tabText}
    //     activeTabStyle={{ backgroundColor: Colors.primary }}
    //     activeTextStyle={Styles.tabTextStyle}
    //   >
    //     <Complete />
    //   </Tab>  */}
    // </Tabs>
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
)(VisitTabs)