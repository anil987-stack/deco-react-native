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
import MenuActions from 'App/Stores/Menu/Actions';
import OrdersActions from 'App/Stores/Orders/Actions'
// import RelatedLeadCard from "App/Components/VisitExecuteCard/RelatedLeadCard";
import VisitsActions from "App/Stores/Visits/Actions";
import LeadCard from "App/Components/Leads/LeadCard";
import { Headerbar } from "App/Components/Headerbar";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import { ImageBackground } from "react-native";
import LeadCardNew from "App/Components/Leads/LeadCardNew";
import CommonActions from "App/Stores/Common/Actions";
import FormBackgroundTwo from "../../../../Components/FormInput/FormBackground";
import ProjectInfo from "./ProjectInfo";
import TaskHistoryCard from "./TaskHistoryCard";
// import MenuModal from "./LeadTabs/MenuModal";
// import Filter from "../../Filter"
// import Style from "./LeadStyle"

class TaskHistoryScreen extends Component {
 


getSupplyNode()
{
    const {
        showCard,
        hideCard,
        cardValue,
        cardStatus,
        dealerVisitList,
        loader1,
        infoForm,
        serviceInfo
    } =  this.props;

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
                    renderItem= {({ item }) => (
                        <LeadCard
                       
                       />
                
            )}
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

    return visibleNode
}

  render() {
      const{openModal,closeModal}=this.props;
   
    let retailers = true;
    let data = this.props.data
    return (
      <>
         <ImageBackground style={Styles.imgBackground}
        //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode='cover'

          source={require("App/Assets/Images/startDay.png")}>
    
        <HeaderNew
        title={"TASK HISTORY"}
        textStyle={{top:hp("-1.8%")}}
        onPress={() => NavigationService.goback()}
        />
     
     <FormBackgroundTwo
                cardStyle={{ marginTop: hp("3%"), height: hp("68%") }}
                label2={true}
                label2={"Task Count"}
                // show={true}
                // iconName={"camera-outline"}
                // heading={"INSIDE"}
                // // gradStyle={{width:wp("32%")}}
                // show1={true}
                // iconName1={"camera-outline"}
                // heading1={"OUTSIDE"}
                // gradStyle1={{width:wp("32%")}}
                content={<TaskHistoryCard/>}
              />
     
      
            {/* <LeadCardNew
            onPressMenu={()=>{
  
             
              this.props.openModal({
               content3: <MenuModal
               onClose={() => {
                closeModal();
              }} />, 
               heading3: 'LEAD MENU', 
               bodyFlexHeight3: .80
           })
          
           
        
        }}
        onPressTaskHistory={()=>NavigationService.navigate("TaskHistoryScreen")}/>

            <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => NavigationService.navigate("LeadScreen")}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          />      */}
       
     
          </ImageBackground>
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
 
    getDealerVisit: (params) =>
    dispatch(RetailersActions.getDealerVisit(params)),
    getInfo: (params) => dispatch(VisitsActions.getInfo(params)),
    getRelatedLead: (params) =>
    dispatch(RetailersActions.getRelatedLead(params)),
    openModal:(params)     => dispatch(CommonActions.openModalThree(params)),
    closeModal:(params)    => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskHistoryScreen);
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
    width:wp("30%"),
    textAlign:"right"
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
    width: '100%',
    height: '100%',
    flex: 1 
},
searchBar:{
  opacity:0.2
}
});
