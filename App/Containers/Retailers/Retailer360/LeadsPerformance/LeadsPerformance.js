import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BackArrowButton from "App/Components/BackArrowButton";
import { ApplicationStyles, Colors } from "App/Theme";
import { Card } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";
import { Tab, Tabs, Icon } from "native-base";
import NavigationService from "App/Services/NavigationService";
import { connect } from "react-redux";
import RetailersActions from "App/Stores/Retailers/Actions";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import MenuActions from "App/Stores/Menu/Actions";
import OrdersActions from "App/Stores/Orders/Actions";
// import RelatedLeadCard from "App/Components/VisitExecuteCard/RelatedLeadCard";
import VisitsActions from "App/Stores/Visits/Actions";
import LeadCard from "App/Components/Leads/LeadCard";
// import { Headerbar } from "../../../Components/Headerbar";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import { ImageBackground } from "react-native";
import FilterNew from "App/Components/Filters/FilterNew";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import Filter from "App/Containers/Filter/FilterNew";
// import FormBackground from "../../../Components/FormInput/FormBackground";
// import InfoCard from "./InfoCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LeadPerformanceHeader from "./LeadPerformanceHeader";
import LeadPerformanceCard from "./LeadPerformanceCard";
import LeadMainCard from "./LeadMainCard";
import SearchableDropdown from "App/Components/SearchableDropdown";
class LeadsPerformance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false,
      mount: false,
    };
  }
  getSupplyNode() {
   
    const {
      showCard,
      hideCard,
      cardValue,
      cardStatus,
      dealerVisitList,
      loader1,
      infoForm,
      serviceInfo,
    } = this.props;

    let visibleNode = [];

    // if (serviceInfo && serviceInfo.length) {

    //     let filteredList = serviceInfo;
    //     if (filteredList.length) {
    //         console.log("filteredList",filteredList)
    visibleNode = (
      <FlatList
        // data={filteredList}
        // style={{backgroundColor:"black",}}
        contentContainerStyle={{ paddingBottom: hp("8%"), paddingTop: 10 }}
        // onRefresh={() => this.fetchCall()}
        showsVerticalScrollIndicator={false}
        // keyExtractor={item => (item.sfid)}
        // refreshing={loader1}
        //  onRefresh={() => this.fetchCall()}
        renderItem={({ item }) => <LeadCard />}
      />
    );

    //     } else {
    //         visibleNode = <NoDataFound text={'No Supply Found'} />
    //     }
    // } else if (loader1) {
    //     visibleNode = <Loading />
    // } else if (loader1 && !serviceInfo.length && !loader1) {
    //     visibleNode = <NoDataFound text={'No Supply Found'} />
    // }

    return visibleNode;
  }

  getCombineData() {
    const { teamData, town, territory, taskStatus, leadStatus } = this.props;
    let team = [];
    let Town = [];
    let Territory = [];
    let taskStat = [];
    let status = [];
    let leadQuality = [];
    let site_Fir = [];
    let lead_Type = [];

    const quality = [
      { id: "Premium", name: "Premium", parent: "LEAD STAGE" },
      { id: "Semi Premium", name: "Semi Premium", parent: "LEAD STAGE" },
      { id: "Normal", name: "Normal", parent: "LEAD STAGE" },
      { id: "Not Century", name: "Not Century", parent: "LEAD STAGE" },
    ];
    const fir = [
      { id: "Site Visit", name: "Site Visit", parent: "LEAD STAGE" },
      { id: "Lead", name: "Lead", parent: "LEAD STAGE" },
      { id: "Cold Lead", name: "Cold Lead", parent: "LEAD STAGE" },
      { id: "Drop", name: "Drop", parent: "LEAD STAGE" },
      {
        id: "Lost but future Scope",
        name: "Lost but future Scope",
        parent: "LEAD STAGE",
      },
    ];
    const source = [
      { id: "RLD", name: "RLD", parent: "LEAD STAGE" },
      { id: "PLD", name: "PLD", parent: "LEAD STAGE" },
      { id: "NLD", name: "NLD", parent: "LEAD STAGE" },
    ];
    const type = [
      { id: "Residential", name: "Residential", parent: "LEAD STAGE" },
      { id: "Commercial", name: "Commercial", parent: "LEAD STAGE" },
    ];
    const valList = [
      { id: "true", name: "true", parent: "LEAD STAGE" },
      { id: "false", name: "false", parent: "LEAD STAGE" },
    ];
    const avlList = [
      { id: "Available", name: "Available", parent: "LEAD STAGE" },
      { id: "Non Available", name: "Non Available", parent: "LEAD STAGE" },
    ];
    // team = HelperService.convertToParentListFormat({
    //   list: HelperService.convertToSearchableListFormat({
    //     list: teamData,
    //     id_key: "sfid",
    //     label_key: "team_member_name__c",
    //   }),
    //   parent_key: "Team",
    // });
    // Town = HelperService.convertToParentListFormat({
    //   list: town,
    //   parent_key: "Town",
    // });
    // Territory = HelperService.convertToParentListFormat({
    //   list: HelperService.convertToSearchableListFormat({
    //     list: territory,
    //     id_key: "territory_id",
    //     label_key: "name",
    //   }),
    //   parent_key: "Territory",
    // });
    // taskStat = HelperService.convertToParentListFormat({
    //   list: taskStatus.concat([{ id: "No Task", name: "No Task" }]),
    //   parent_key: "Task",
    // });
    // status = HelperService.convertToParentListFormat({
    //   list: leadStatus,
    //   parent_key: "Status",
    // });
    // leadQuality = HelperService.convertToParentListFormat({
    //   list: quality,
    //   parent_key: "Quality",
    // });
    // site_Fir = HelperService.convertToParentListFormat({
    //   list: fir,
    //   parent_key: "Site_Fir",
    // });
    // lead_Type = HelperService.convertToParentListFormat({
    //   list: type,
    //   parent_key: "Lead_Type",
    // });
    // let dmi = HelperService.convertToParentListFormat({
    //   list: valList,
    //   parent_key: "DMI_Attachment",
    // });
    // let owner = HelperService.convertToParentListFormat({
    //   list: avlList,
    //   parent_key: "Owner_Number",
    // });
    // let leadSource = HelperService.convertToParentListFormat({
    //   list: source,
    //   parent_key: "Source_Type",
    // });
    const leadstage = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "LEAD STAGE" },
      { id: "ONGOING", name: "ONGOING", parent: "LEAD STAGE" },
      { id: "WON", name: "WON", parent: "LEAD STAGE" },
      { id: "DOEMANT", name: "DOEMANT", parent: "LEAD STAGE" },
      { id: "INACTIVE", name: "INACTIVE", parent: "LEAD STAGE" },
      { id: "LOST", name: "LOST", parent: "LEAD STAGE" },
    ];

    const leadstatus = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "LEAD STATUS" },
    ];

    const sourceoflead = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "SOURCE OF LEAD" },
    ];

    const task = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TASK" }];

    const teams = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TEAM" }];

    const types = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TYPE" }];

    let combineData = [];
    combineData = combineData.concat(
      // team,
      // Town,
      // Territory,
      // status,
      // taskStat,
      // leadQuality,
      // site_Fir,
      // lead_Type,
      // dmi,
      // owner,
      // leadSource
      leadstage,
      leadstatus,
      sourceoflead,
      task,
      teams,
      types
    );

    return combineData;
  }

  getCardNode(dataList) {
    return (
      // <FlatList
      //   data={dataList}
      //   renderItem={({ item }) => <InfoCard item={item} />}
      // />
      <LeadPerformanceCard />
    );
  }

  render() {
    const { openModal, closeModal } = this.props;

    let retailers = true;
    let data = this.props.data;

    let dataList = [
      {
        id: "1",
        date: "19.03.22",
        type: "PHYSICAL",
        objective: "Lead Discussion",
        remarks: "",
      },
      {
        id: "2",
        date: "11.03.22",
        type: "PHYSICAL",
        objective: "Others",
        remarks:
          "Mr. Ramnarayan Shaw asked me to visit at client's home to clear out some of the doubts about the selection of laminates",
      },
    ];

   let status= [
      { id: "Open Lead", name: "Open Lead" },
      { id: "Overdue", name: "Overdue"},
      { id: "Dormat", name: "Dormat" },
      { id: "Close", name: "Close" },
     
    
    ];

    return (
      <>
        {/* <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          <HeaderNew
            title={"LEAD PERFORMNCE"}
            // textStyle={{ top: hp("-1.8%") }}
            onPress={() => NavigationService.goback()}
            outerStyle={{ borderLeftWidth: 173 }}
            boxStyle={{ borderLeftWidth: 170 }}
          />
          <LeadPerformanceHeader /> */}

          <View style={{ flexDirection: "row", marginTop: hp("8%") }}>
            <View>
              {/* <View style={{ flexDirection: "row" }}> */}
              {/* <View
              style={{
                height: hp("4.9%"),alignSelf:"flex-start",marginLeft:hp("2%")
              }}
            >
              <SearchableDropdown
                  dataSource={status}
                //   placeHolderText={"Select Project Type"}
                // dropstyle={{
                // left: "4%",
                // width: wp("3"),
                // height: wp("2"),
                // marginTop: "3%",
                // }}
                  // selectedValue={"Open Lead"}}
                //   onChange={(value) =>
                //     this.props.changeForm({
                //       edited_field: "Secondary_No_Whatsapp",
                //       edited_value: value,
                //     })
                //   }
                placeholder={"Type or Select Project Type"}
                invalid={false}
                customPickerStyles={{ ...Styles.picker }}
                labelStyles={{ ...Styles.pickerLabel }}
                dropstyle={{...Styles.dropstyle}}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
              />
            </View> */}
                {/* <FontAwesome5
                  name={"file-invoice-dollar"}
                  style={{
                    fontSize: wp("4.5%"),
                    color: Colors.grey,
                    width: wp("8%"),
                    zIndex: 10,

                    backgroundColor: "white",
                    borderRadius: 50,
                    elevation: 15,
                    left: wp("4%"),
                    height: hp("4%"),
                    padding: 5,
                    // paddingBottom: hp("-1%"),
                    paddingLeft: wp("2.3%"),
                  }}
                  show={true}
                /> */}
                {/* <LinearGradient
                  // colors={["transparent","white", "transparent"]}
                  // start={{ x: 0.9, y: 0 }}
                  // end={{ x: 0, y: 0 }}
                  // style={{
                  //   height: hp("3%"),
                  //   width: wp("23%"),
                  //   alignSelf: "flex-end",
                  //   top: hp("-0.9%"),
                  // }}

                  colors={["#943e3e", "transparent"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    height: hp("3%"),
                    width: wp("28%"),
                    //   alignSelf: "flex-end",
                    //   top: "-2%",
                    marginTop: hp(".75%"),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 4,
                      fontSize: wp("3%"),
                      marginLeft: wp("5%"),
                    }}
                  >
                    {"LEAD SUMMARY"}
                  </Text>
                </LinearGradient> */}
              {/* </View> */}
              <>
                {/* <View
                  style={{
                    height: hp("8.5%"),
                    width: 2,
                    backgroundColor: "white",
                    //   alignSelf: "center",
                    // marginTop:hp("-9%"),
                    marginLeft: "8%",
                  }}
                /> */}

                <View
                  style={{
                    height: hp("0.3%"),
                    width: wp("80%"),
                    backgroundColor: "white",
                    //   alignSelf: "center",
                    // marginTop:hp("-9%"),
                    marginLeft: "8%",
                  }}
                />
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: wp("-8%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("-5.4%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        YTD
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        24|12
                      </Text>
                    </View>
                  </View>

                  <View style={{ marginLeft: wp("-4%") }}>
                    <TouchableOpacity
                      style={{ marginLeft: wp("12%"), marginTop: hp("-5.5%") }}
                    onPress={() => this.setState({mount: !this.state.mount })}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Q1
                      </Text>
                    </TouchableOpacity>

                  

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        07|02
                      </Text>
                    </View>
                  </View>


                 

                  <View style={{ marginLeft: wp("-4%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("-5.5%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Q2
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        05|07
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: wp("-4%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("-5.5%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Q3
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        05|02
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: wp("-4%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("-5.5%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Q4
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black"}}>
                        07|06
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            </View>
          </View>


          {  this.state.mount  ? (
                    <View style={{flexDirection:"row"}}>
                     <View
                  style={{
                    height: hp("3%"),
                    width: 2,
                    backgroundColor: "white",
                    //   alignSelf: "center",
                    // marginTop:hp("-9%"),
                    marginLeft: "30%",
                  }}
                />
                 <View
                  style={{
                    height: hp("0.3%"),
                    width: wp("33%"),
                    backgroundColor: "white",
                    //   alignSelf: "center",
                    marginTop:hp("8%"),
                    marginLeft: "5%",
                  }}
                />
                    <View style={{ marginLeft: wp("-55%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("3%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Aprl
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        05|07
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: wp("-4%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("3%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        May
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black" }}>
                        05|02
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: wp("-4%") }}>
                    <View
                      style={{ marginLeft: wp("12%"), marginTop: hp("3%") }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          backgroundColor: "black",
                          borderStyle: "solid",
                          color: "white",
                          // marginLeft: wp("6%"),
                          fontWeight: "bold",
                          fontSize: wp("2.8%"),
                          height: hp("3.3%"),
                          textAlign: "center",
                          width: wp("10%"),
                          textAlignVertical: "center",
                        }}
                      >
                        Jun
                      </Text>
                    </View>

                    <View
                      style={{
                        width: wp("12%"),
                        marginLeft: wp("12%"),
                        backgroundColor: "#FFBD2E",
                        height: hp("3.7%"),
                        flexDirection: "row",
                        marginTop: hp("0%"),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", color: "black"}}>
                        07|06
                      </Text>
                    </View>
                  </View>
                  </View>
                  ):([])}
          {/* <LeadMainCard /> */}
          <View
            style={{
              marginTop: hp("3%"),
              height: hp("68%"),
              marginLeft: wp("5%"),
              width: wp("90%"),
            }}
          >
            
            {/* {this.getCardNode(dataList)} */}
          </View>
        {/* </ImageBackground> */}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  agentid: state.user.id,
  token: state.user.token,
  orders: state.orders.allOrders,
  supply: state.orders.allSupply,
  serviceInfo: state.retailers.relatedLeadList,
  loader1: state.visits.relatedLeadListLoading,
  infoForm: state.visits.infoForm,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerVisit: (params) => dispatch(RetailersActions.getDealerVisit(params)),
  getInfo: (params) => dispatch(VisitsActions.getInfo(params)),
  getRelatedLead: (params) => dispatch(RetailersActions.getRelatedLead(params)),
  openModalThree: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModalThree: (params) => dispatch(CommonActions.closeModalThree(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LeadsPerformance);
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  cardstyle: {
    backgroundColor: Colors.darkRedPink,
    width: wp("100%"),
    top: hp("-1%"),
    height: hp("18%"),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  backarrow: {
    color: Colors.background,
    fontSize: 34,
    paddingRight: 360,
    paddingTop: 15,
  },
  title: {
    fontFamily: "Rubik",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    bottom: hp("1%"),
  },
  titleText: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
  },

  date: {
    fontSize: 28,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("2%"),
    top: hp("2%"),
  },
  month: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("-0.5%"),
    top: hp("1.5%"),
  },
  head: {
    fontSize: 15,
    fontFamily: "Rubik",
    // left: hp("1%"),
    fontWeight: "bold",
    color: Colors.background,
    top: hp("-1%"),
    // width:wp("15%"),
    position: "absolute",
  },
  head1: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("0%"),
    top: hp("0%"),
  },
  head2: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("-0.4%"),
    top: hp("1.5%"),
    color: Colors.lightGrey,
  },

  ttl: {
    color: Colors.lightGrey,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    top: hp("3%"),
    // right: wp("32%"),
    position: "relative",
    // width:wp("20%")
  },
  detail: {
    color: Colors.black,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    left: wp("10%"),
    top: hp("3%"),
    position: "relative",
    width: wp("30%"),
    textAlign: "right",
  },
  plusIcon: {
    borderRadius: 50,
    // bottom: 40,
    position: "absolute",
    // left: 10,
    top: hp("75%"),
    left: wp("80%"),
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  searchBar: {
    opacity: 0.2,
  },
  picker: {
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("50%"),
    borderWidth: 1.5,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    // marginTop: 5,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "flex-start",
    borderColor: "grey",
    borderRadius:10
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    // padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
  dropstyle:{
    marginTop:hp("1.5%"),
    marginLeft:wp("-1.5%")
  }
});
