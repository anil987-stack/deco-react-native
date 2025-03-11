import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
import FormBackground from "../../../Components/FormInput/FormBackgroundTwo";
import ProjectInfo from "./LeadTabs/ProjectInfo";
import ContactInfo from "./LeadTabs/ContactInfo";
import LinkCard from "./LeadTabs/LinkCard";
import LinkMainCard from "./LeadTabs/LinkMainCard";
import AddLinkModal from "./LeadTabs/AddLinkModal";
import CommonActions from "App/Stores/Common/Actions";
import AddContactModal from "./LeadTabs/AddContactModal";
import ProductSupply from "./LeadTabs/ProductSupply";
import TaskActivity from "./LeadTabs/TaskActivity";
import FutureTaskActivity from "./LeadTabs/FutureTaskActivity";
import Form from "./LeadTabs/Form";
import LeadModal from "App/Containers/Menu/Leads/LeadsModal/LeadModal";

class LeadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: "project info",
      count: false,
      mount: false,
      count1: false,
      mount1: false,
    };
  }

  getPending(list) {
    let count = 0;
    list.map((obj) => {
      if (obj.owner_number__c == null) {
        count = count + 1;
      }
    });
    return count;
  }

  getEmd(list) {
    let count = 0;
    list.map((obj) => {
      if (
        obj.expected_maturity_date__c &&
        !HelperService.isNotPast(obj.expected_maturity_date__c)
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  getDMI(list) {
    let count = 0;
    list.map((obj) => {
      if (
        !obj.dmi_attachment__c &&
        obj.site_name == "Hot Hot" &&
        (obj.site_quality == "Premium" || obj.site_quality == "Semi Premium")
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  getDMIEn(list) {
    let count = 0;
    list.map((obj) => {
      if (
        !obj.ilp_registered__c &&
        obj.dmi_attachment__c &&
        obj.site_name == "Hot Hot" &&
        (obj.site_quality == "Premium" || obj.site_quality == "Semi Premium")
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  checkOverDueTask(list) {
    let value = false;
    list.map((obj) => {
      if (
        !HelperService.isNotPast(obj.task_date__c) &&
        obj.task_status_name != "Closed"
      ) {
        value = true;
      }
    });
    return value;
  }

  getOverDueTask(list) {
    let count = 0;

    list.map((obj) => {
      if (this.checkOverDueTask(obj.Task_data)) {
        count = count + 1;
      }
    });
    return count;
  }

  // getOverdue(list){
  //   let count = 0;
  //   list.map((obj)=> {obj.town.map((obj.town)) => {
  //     if(obj.town.owner_number__c==null)
  //     { count=count+1}}}

  //   return count
  // }

  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <>
        <ImageBackground
          style={{ width: "100%", height: "100%", flex: 1 }}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          {/* <View style={{ flex: 1, marginBottom: hp("30%") }}> */}
          <HeaderNew
            title={"LEAD CREATION"}
            textStyle={{
              top: hp("-1.8%"),
              marginLeft: wp("-10%"),
              fontSize: wp("4.6%"),
            }}
            onPress={() => NavigationService.goback()}
          />

          <View style={{ width: wp("100%"), justifyContent: "center" }}>
            <LinearGradient
              colors={["transparent", Colors.darkRed]}
              start={{ x: 0, y: 0.8 }}
              end={{ x: 0.6, y: 0.7 }}
              style={{
                height: hp("8%"),
                width: wp("15%"),

                // opacity: 0.156,
                top: hp("2%"),
                alignSelf: "flex-end",
                zIndex: 15,
              }}
            >
              <GenericIcon
                // show={true}
                style={{
                  fontSize: wp("13%"),
                  fontWeight: "bold",
                  marginTop: hp("0.5%"),
                  color: "white",
                  opacity: 0.3,
                  marginLeft: wp("1%"),
                }}
                name={"arrow-right"}
              />
            </LinearGradient>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                margin: "0%",
                flexDirection: "row",
                marginTop: hp("-5.7%"),
                width: wp("100%"),
              }}
              // ref={(ref) => {
              //   this.flatListRef = ref;
              // }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "project info"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ProjectInfo");
                    this.setState({ selectedButton: "project info" });
                  }}
                >
                  {/* onPress={() => {NavigationService.navigate('StartVisitForm'); this.scrollToIndex(0)}} */}
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "project info"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "project info"
                          ? 0.9
                          : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    PROJECT INFO
                  </Text>

                  {/* <Text
                style={{
                  color: this.state.selectedButton === "project info" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: 'bold',
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity:this.state.selectedButton === "project info" ? 0.9 : 0.6,
                  fontSize:wp("3%")
                }}
              >
                {"(45)"}
              </Text> */}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor: "white",
                    borderTopWidth: 1.8,
                    borderTopColor:
                      this.state.selectedButton === "contact details"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    <FormBackground />;
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "contact details" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "contact details"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "contact details"
                          ? 0.9
                          : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    CONTACT DETAILS
                  </Text>

                  {/* <Text
                style={{
                  color:
                    this.state.selectedButton === "contact details" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: 'bold',
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity:this.state.selectedButton === "contact details" ? 0.9 : 0.6,
                  fontSize:wp("3%")
                }}>
                    {"(45)"} 
                </Text> */}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "link partner"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "link partner" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "link partner"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "link partner"
                          ? 0.9
                          : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    LINK CHANNEL PARTNER
                  </Text>

                  {/* <Text
                style={{
                  color: this.state.selectedButton === "link partner" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: 'bold',
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity:this.state.selectedButton === "link partner" ? 0.9 : 0.6,
                  fontSize:wp("3%")
                }}
              >
                {"(45)"}
              </Text> */}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "product supply"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "product supply" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "product supply"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "product supply"
                          ? 0.9
                          : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    PRODUCT & SUPPLY
                  </Text>

                  {/* <Text
                style={{
                  color: this.state.selectedButton === "product supply" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: 'bold',
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity:this.state.selectedButton === "product supply" ? 0.9 : 0.6,
                  fontSize:wp("3%")
                }}
              >
                {"(45)"}
              </Text> */}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: wp("10%"),
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "task"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "task" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "task"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity: this.state.selectedButton === "task" ? 0.9 : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    TASK ACTIVITY
                  </Text>

                  {/* <Text
                    style={{
                      color:
                        this.state.selectedButton === "item"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                      fontSize: wp("3%"),
                    }}
                  >
                    {"(45)"}
                  </Text> */}
                </TouchableOpacity>
              </View>

              {/* </LinearGradient> */}
            </ScrollView>
            {/* <ScrollView 
            horizontal={true}
            style={{ flexDirection: 'row',
            width: wp('100%'),
            height: hp('9%'),
            paddingHorizontal: wp('1.5%')}}>

    <View style={{justifyContent:'space-evenly',flexDirection:'row',alignSelf:'center'}}>

    <TouchableOpacity 
    
     style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#FFD580',alignSelf:'center',justifyContent:'center'}}
     >

     <Text style={{textAlign:'center',fontSize:12,}}>
      Total Lead
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
            {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
            {/* {"(" +data.length+ ")"} */}
            {/* </Text>

   </TouchableOpacity>

     <TouchableOpacity 
    //  onPress={()=>this.props.onchange('PFO')}
     style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#C1F6CB',alignSelf:'center',justifyContent:'center'}}>

     <Text style={{textAlign:'center',fontSize:12,}}>
       Pending for Owner No.
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}>
     {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
            {/* {"(" +this.getPending(data)+ ")"} */}
            {/* </Text> */}

            {/* </TouchableOpacity>
   <TouchableOpacity 
    //  onPress={()=>this.props.onchange('NEL')}
   style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#C7E4FF',alignSelf:'center',justifyContent:'center'}}>
   <Text style={{textAlign:'center',fontSize:11,}}>
       Negative EMD Leads
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
            {/* {dashboardDetail&&dashboardDetail.data.currentMonth?dashboardDetail.data.currentMonth.sauda:"NA"} */}
            {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.sauda?
       dashboardDetail.data.currentMonth.sauda:'0'}`} */}
            {/* {"(" +this.getEmd(data)+ ")"} */}
            {/* </Text>

   </TouchableOpacity >
   <TouchableOpacity  style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#FFC30359',alignSelf:'center',justifyContent:'center'}}
    // onPress={()=>this.props.onchange('OTL')}
   >
   <Text style={{textAlign:'center',fontSize:12,}}>
     No/Overdue Tasks Lead
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
            {/* {dashboardDetail&&dashboardDetail.data.currentMonth?dashboardDetail.data.currentMonth.salesOrder:'0'}*/}
            {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.salesOrder?
       dashboardDetail.data.currentMonth.salesOrder:'0'}`} */}
            {/* {"(" +this.getOverDueTask(data)+ ")"} */}
            {/* </Text>

   </TouchableOpacity >
  

  

   </View>

   </ScrollView> */}
          </View>

          <ScrollView>
            {/* if(this.state.selectedButton === "project info"){
               <FormBackground
               cardStyle={{ marginTop: hp("3%"), height: hp("68%") }}
               content = {
                  <ProjectInfo/>  }
               />
               } */}

            {this.state.selectedButton === "project info" ? (
              <>
                <ScrollView>
                  <FormBackground
                    cardStyle={{
                      marginTop: hp("3%"),
                      height: hp("77%"),
                      marginBottom: hp("4%"),
                    }}
                    show={true}
                    iconName={"camera-outline"}
                    heading={"INSIDE"}
                    // gradStyle={{width:wp("32%")}}
                    show1={true}
                    iconName1={"camera-outline"}
                    heading1={"OUTSIDE"}
                    // gradStyle1={{width:wp("32%")}}
                    content={<ProjectInfo />}
                  />

                  {/* <FormBackground
                  cardStyle={{ marginTop: hp("3%"), height: hp("77%") }}
                  content={<ProjectInfo />}
                /> */}
                  {/* <View
                    style={{
                      alignSelf: "center",
                      marginBottom: wp("4%"),
                      marginTop: wp("4%"),
                    }}
                  >
                    <TouchableOpacity style={{ ...Styles.buttons, zIndex: 10 }}>
                      <LinearGradient
                        colors={[Colors.primary, Colors.darkRed]}
                        start={{ x: 0, y: 0.2 }}
                        end={{ x: 0, y: 0.7 }}
                        style={{
                          height: 50,
                          width: 200,
                          borderRadius: 10,
                          alignSelf: "center",
                          marginTop: hp("0.5%"),
                        }}
                      >
                        <Text
                          style={{
                            ...Styles.buttontextStyle,
                            fontFamily: "HelveticaNeue_CondensedBold",
                            color: "white",
                            fontWeight: "bold",
                            alignSelf: "center",
                            paddingVertical: 10,
                            fontSize: 19,
                          }}
                        >
                          {"SUBMIT"}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View> */}
                </ScrollView>
              </>
            ) : this.state.selectedButton === "contact details" ? (
              <ContactInfo
                onPress={() => {
                  this.props.openModal({
                    content: (
                      <AddContactModal
                        onClose={() => {
                          closeModal();
                        }}
                      />
                    ),
                    heading: "ADD CONTACT",
                    bodyFlexHeight: 0.88,
                  });
                }}
              />
            ) : this.state.selectedButton === "link partner" ? (
              <>
                <LinkCard
                  onPressCard={() => {
                    this.props.openModal({
                      content: (
                        <Form
                          onClose={() => {
                            closeModal();
                          }}
                        />
                      ),
                      heading: "",
                      bodyFlexHeight: 0.36,
                    });
                  }}
                />
                <LinkMainCard />
              </>
            ) : this.state.selectedButton === "product supply" ? (
              <ProductSupply />
            ) : this.state.selectedButton === "task" ? (
              <>
                <FormBackground
                  cardStyle={{ marginTop: hp("3%") }}
                  //  show={false}
                  //  iconName={"camera-outline"}
                  //  heading={"INSIDE"}
                  // gradStyle={{width:wp("32%")}}
                  //  show1={true}
                  //  iconName1={"camera-outline"}
                  //  heading1={"OUTSIDE"}
                  // gradStyle1={{width:wp("32%")}}
                  content={<TaskActivity />}
                />

                <FormBackground
                  cardStyle={{ marginTop: hp("3%") }}
                  //  show={false}
                  //  iconName={"camera-outline"}
                  //  heading={"INSIDE"}
                  // gradStyle={{width:wp("32%")}}
                  //  show1={true}
                  //  iconName1={"camera-outline"}
                  //  heading1={"OUTSIDE"}
                  // gradStyle1={{width:wp("32%")}}
                  content={<FutureTaskActivity />}
                />
              </>
            ) : (
              []
            )}

            {/* {this.state.selectedButton === "project info" ? (
              <View style={{ alignSelf: "center" }}>
                <TouchableOpacity
                  style={{ ...Styles.buttons }}

                  // onPress={() => {this.props.closeModal(),NavigationService.navigate("EndDayScreen")}}
                >
                  <LinearGradient
                    colors={[Colors.primary, Colors.darkRed]}
                    start={{ x: 0, y: 0.2 }}
                    end={{ x: 0, y: 0.7 }}
                    style={{
                      height: 50,
                      width: 200,
                      borderRadius: 10,
                      alignSelf: "center",
                      marginTop: hp("0.5%"),
                    }}
                  >
                    <Text
                      style={{
                        ...Styles.buttontextStyle,
                        fontFamily: "HelveticaNeue_CondensedBold",
                        color: "white",
                        fontWeight: "bold",
                        alignSelf: "center",
                        paddingVertical: 10,
                        fontSize: 19,
                      }}
                    >
                      {"SUBMIT"}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ) : this.state.selectedButton === "product supply" ? (
              <ProductSupply />
            ) : (
              []
            )}

{this.state.selectedButton === "task" ? (
              <View style={{ alignSelf: "center",marginBottom:hp("3%") }}>
                <TouchableOpacity
                  style={{ ...Styles.buttons }}

                //   onPress={() => {  
                //   <FormBackground
                //   cardStyle={{ marginTop: hp("3%"), }}
                //  //  show={false}
                //  //  iconName={"camera-outline"}
                //  //  heading={"INSIDE"}
                //   // gradStyle={{width:wp("32%")}}
                //  //  show1={true}
                //  //  iconName1={"camera-outline"}
                //  //  heading1={"OUTSIDE"}
                //   // gradStyle1={{width:wp("32%")}}
                //   content={<FutureTaskActivity />}
                // />
                //   }}
                  //  onPress={() => {NavigationService.navigate("FutureTaskActivity")}}
                >
                  <LinearGradient
                    colors={[Colors.primary, Colors.darkRed]}
                    start={{ x: 0, y: 0.2 }}
                    end={{ x: 0, y: 0.7 }}
                    style={{
                      height: 50,
                      width: 200,
                      borderRadius: 10,
                      alignSelf: "center",
                      marginTop: hp("0.5%"),
                    }}
                  >
                    <Text
                      style={{
                        ...Styles.buttontextStyle,
                        fontFamily: "HelveticaNeue_CondensedBold",
                        color: "white",
                        fontWeight: "bold",
                        alignSelf: "center",
                        paddingVertical: 10,
                        fontSize: 19,
                      }}
                    >
                      {"SUBMIT"}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ) : (
              []
            )} */}
          </ScrollView>
          {/* {this.state.selectedButton != "project info" ? ( */}
          <View
            style={{
              alignSelf: "center",
              marginBottom: wp("4%"),
            }}
          >
            <TouchableOpacity
              style={{ ...Styles.buttons, zIndex: 10 }}
              onPress={() => {
                if (this.state.selectedButton == "link partner") {
                  this.setState({ selectedButton: "product supply" });
                } else if (this.state.selectedButton == "product supply") {
                  this.setState({ selectedButton: "task" });
                } else if (this.state.selectedButton == "project info") {
                  this.setState({ selectedButton: "contact details" });
                } else if (this.state.selectedButton == "contact details") {
                  this.setState({ selectedButton: "link partner" });
                } else if (this.state.selectedButton == "task") {
                  this.props.openModalThree({
                    content3: (
                      <LeadModal
                        onClose={() => {
                          closeModalThree();
                        }}
                      />
                    ),
                    heading3: "NO FUTURE TASK FOUND",
                    bodyFlexHeight3: 0.8,
                  });
                }
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: hp("0.5%"),
                }}
              >
                <Text
                  style={{
                    ...Styles.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                    fontSize: 19,
                  }}
                >
                  {// this.state.selectedButton == "project info" ||
                  // this.state.selectedButton == "contact details" ||
                  this.state.selectedButton == "task" ? "SUBMIT" : "NEXT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* ) : null} */}
        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  pjpFilters: state.menu.leadFilters,

  leadlist: state.menu.leadlist,
});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
  openModalThree: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModalThree: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LeadScreen);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("1%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
});
