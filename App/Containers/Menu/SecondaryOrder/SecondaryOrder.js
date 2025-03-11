// import Colors from 'App/Theme/Colors';
import LocalActions from "App/Stores/LocalExpense/Actions";
import { ApplicationStyles, Colors } from "App/Theme";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import SalesOrder from "../SalesOrder/SalesOrder";
import Pendingcard from "./Pendingcard";
import Rejectedcard from "./Rejectedcard";
import Dispatchedcard from "./Dispatchedcard";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
// import ApprovedCard from './ApprovedCard';
import ProductActions from "App/Stores/Products/Actions";
import RetailersActions from "../../../Stores/Retailers/Actions";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchableDropdown from "../../../Components/SearchableDropdown";
import { HelperService } from "../../../Services/Utils/HelperService";
import SelectDate from "../../../Components/SelectDate";
import InputText from "App/Components/FormInput/InputText";
import _ from "lodash";
import ShippedCard from "./ShippedCard";

const vertical = [
  { id: "Delphi-TVS", name: "Delphi-TVS" },
  { id: "INEL", name: "INEL" },
  { id: "Lispart", name: "Lispart" },
  { id: "Others", name: "Others" },
  { id: "L and O", name: "L and O" },
  { id: "Battery", name: "Battery" },
  { id: "Lubes", name: "Lubes" },
  { id: "Lucas-TVS", name: "Lucas-TVS" },
  
];
class SecondaryOrder extends Component {
  state = {
    isVisible: false,
    toggle: false,
    imageViewerModalVisible: false,
    productImagesToShowInModal: [],
    // open_modal:false,
  };
  componentDidMount() {
    const { fetchRetailers, token, agentid } = this.props;
    fetchRetailers({ token, agentid });
    this.props.clearBookOrderForm();
    this.props.clearcart();
  }

  displayModal(show) {
    this.setState({ isVisible: show });
  }
  closeModal(show) {
    this.setState({ isVisible: show });
  }

  getDistributor() {
    const { retailersList } = this.props;
    let distributor = [];
    if (retailersList && retailersList.length) {
      retailersList.map((obj) => {
        if ({ id: obj.Id, name: obj.Name }) {
          distributor.push({
            id: obj.Id,
            name: obj.SAP_Customer_No__c
              ? obj.Name + " " + `(${obj.SAP_Customer_No__c})`
              : obj.Name,
          });
        }
      });
    }
    return distributor;
  }
  getRetailer() {
    const { retailersList } = this.props;
    let distributor = [];
    if (retailersList && retailersList.length) {
      retailersList.map((obj) => {
        if ({ id: obj.Id, name: obj.Name }) {
          distributor.push({
            id: obj.Id,
            name: obj.SFDC_Customer_Code__c
              ? obj.Name + " " + `(${obj.SFDC_Customer_Code__c})`
              : obj.Name,
          });
        }
      });
    }
    return distributor;
  }
  render() {
    const {
      changeType,
      type,
      BookOrderForm,
      changeBookOrderForm,
      retailersList,
      fetchPlant,
      token,
    } = this.props;

    let dbaSearchableList = HelperService.convertToDropDownListRetailerFormatLabel(
      {
        list: !_.isEmpty(retailersList) ? retailersList : [],
        id_key: "Id",
        label_key: "Name",
      }
    );
    let dbaSearchable = HelperService.convertToSearchableListFormat({
      list: !_.isEmpty(retailersList) ? retailersList : [],
      id_key: "Id",
      label_key: "Name",
    });

    return (
      <Container style={{ marginHorizontal: 0 }}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View style={Styles.modal}>
            <View
              style={{
                backgroundColor: "white",
                margin: 30,
                top: hp("20%"),
                height: hp("42%"),
                borderRadius: 5,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <GenericIcon
                  name={"cancel"}
                  onPress={() => this.closeModal(false)}
                  style={{
                    color: Colors.primary,
                    margin: 1,
                    fontSize: wp("9%"),
                  }}
                />
              </View>

              <View style={{ height: hp("9"), alignSelf: "center" }}>
                <SearchableDropdown
                  //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
                  // dataSource={HelperService.convertToSearchableListFormatWithCode(
                  //   {
                  //     list: retailersList,
                  //     id_key: "Id",
                  //     label_key: "Name",
                  //     name_key: "SAP_Customer_No__c",
                  //   }
                  // )}
                  dataSource={this.getDistributor()}
                  placeHolderText={"Select"}
                  //  selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                  selectedValue={BookOrderForm.orderto}
                  onChange={(value) => {
                    changeBookOrderForm({
                      edited_field: "orderto",
                      edited_value: value,
                    });
                  }}
                  label={"Order To"}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  stylelabel={{
                    fontSize: hp("2"),
                    marginLeft: wp("4.5"),
                    color: "#515C6F",
                  }}
                />
              </View>
              <View style={{ height: hp("9"), alignSelf: "center" }}>
                <SearchableDropdown
                  //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
                  // dataSource={HelperService.convertToSearchableListFormatWithCode(
                  //   {
                  //     list: retailersList,
                  //     id_key: "Id",
                  //     label_key: "Name",
                  //     name_key: "SFDC_Customer_Code__c",
                  //   }
                  // )}
                  dataSource={this.getRetailer()}
                  placeHolderText={"Select"}
                  // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                  selectedValue={BookOrderForm.orderfrom}
                  onChange={(value) => {
                    changeBookOrderForm({
                      edited_field: "orderfrom",
                      edited_value: value,
                    });
                  }}
                  label={"Order From"}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  stylelabel={{
                    fontSize: hp("2"),
                    marginLeft: wp("4.5"),
                    color: "#515C6F",
                  }}
                />
              </View>
              <View style={{ height: hp("9"), alignSelf: "center" }}>
                <SearchableDropdown
                  //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
                  dataSource={vertical}
                  placeHolderText={"Select Vertical"}
                  selectedValue={BookOrderForm.vertical}
                  onChange={(value) => {
                    changeBookOrderForm({
                      edited_field: "vertical",
                      edited_value: value,
                    });
                  }}
                  //   if (value) {
                  //     // console.log("value",value)
                  //     let address = plantList.filter((obj) => {
                  //       console.log("objjjj", obj);
                  //       return obj.Plant__r.Id == value;
                  //     });
                  //     console.log("plant", address);
                  //     address = address[0];
                  //     // changeBookOrderForm({ edited_field: 'plant_code', edited_value: address.Plant__r?.sales_District?address.BillingAddress?.sales_District:'' })
                  //     changeBookOrderForm({
                  //       edited_field: "plant_code",
                  //       edited_value:
                  //         address.Plant__r && address.Plant__r.Code__c
                  //           ? address.Plant__r.Code__c
                  //           : "",
                  //     });
                  //   }
                  // }}
                  label={"Vertical"}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  stylelabel={{
                    fontSize: hp("2"),
                    marginLeft: wp("4.5"),
                    color: "#515C6F",
                  }}
                />
              </View>

              <TouchableOpacity style={Styles.btn}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    textAlign: "center",
                    marginTop: 4.5,
                    fontWeight: "bold",
                  }}
                  onPress={() => {
                    if (!BookOrderForm.orderto) {
                      HelperService.showToast({
                        message: "Please select Order To",
                        duration: 1000,
                        buttonText: "Okay",
                      });
                    } else if (!BookOrderForm.orderfrom) {
                      HelperService.showToast({
                        message: "Please select Order From",
                        duration: 1000,
                        buttonText: "Okay",
                      });
                    } else if (!BookOrderForm.vertical) {
                      HelperService.showToast({
                        message: "Please select Vertical",
                        duration: 1000,
                        buttonText: "Okay",
                      });
                    } else {
                      this.displayModal(!this.state.isVisible);
                      NavigationService.navigate("SecondaryBookOrder");
                    }
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>

              {/* <View style={{flexDirection:'row',width:wp('35'),marginLeft:wp('5')}}>
                                <View>
                                <SearchableDropdown
                                placeholder={''}
                                dataSource={dbaSearchable} 
                                selectedValue={BookOrderForm.billtoparty?BookOrderForm.billtoparty:'Select Distributor'}
                                onChange={(value)=>{
                                    changeBookOrderForm({ edited_field: 'DBA', 'edited_value': value })}}
                                label={"Bill To Party"}
                                customPickerStyles={{ ...Styles.picker1,elevation:0,borderLeftColor:'white',borderRightColor:'white',borderTopColor:'white',borderBottomColor:'#515C6F',borderWidth:1 }}
                                labelStyles={{ ...Styles.pickerLabel }}
                                stylelabel={{fontSize:hp('2'),marginLeft:wp('4.5'),color:"#515C6F"}} 
                                />
                                </View>

                                <View>
                                <SearchableDropdown
                                placeholder={''}
                                dataSource={[{id:"",name:'aaa'}]} 
                                selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                                // onChange={(value)=>}
                                label={"Ship To Party"}
                                customPickerStyles={{ ...Styles.picker1,elevation:0,borderLeftColor:'white',borderRightColor:'white',borderTopColor:'white',borderBottomColor:'#515C6F',borderWidth:1}}
                                labelStyles={{ ...Styles.pickerLabel }}
                                stylelabel={{fontSize:hp('2'),marginLeft:wp('4.5'),color:"#515C6F"}}  
                                />
                                </View>

                                
                                </View> */}
            </View>
            {/* </View> */}
          </View>
        </Modal>

        <View style={{ marginVertical: 10 }}>
          <BackArrowButton />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 10 }}>
            Secondary Order
          </Text>
          <BlueButton
            style={Styles.button}
            rounded
            onPress={() => {
              this.displayModal(true);
            }}
            large
            title={"BOOK ORDER"}
            textStyle={{ fontSize: 12 }}
          />
        </View>
        <Pendingcard />
        {/* <Tabs
          tabBarUnderlineStyle={Styles.tabUnderLine}
          onChangeTab={({ i }) => changeType(i)}
        >
          <Tab
            heading="Pending"
            tabStyle={Styles.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Styles.tabText}
            activeTextStyle={Styles.tabTextStyle}
          >
            
          </Tab>
          <Tab
            heading="Rejected"
            tabStyle={Styles.tabHeading}
            textStyle={Styles.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Styles.tabTextStyle}
          >
            <Rejectedcard />
          </Tab>
          <Tab
            heading="Partially Shipped"
            tabStyle={Styles.tabHeading}
            textStyle={Styles.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Styles.tabTextStyle}
          >
            <Dispatchedcard />
          </Tab>
          <Tab
            heading="Shipped"
            tabStyle={Styles.tabHeading}
            textStyle={Styles.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Styles.tabTextStyle}
          >
            <ShippedCard />
          </Tab>
        </Tabs> */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  // type: state.local.type
  data: state.orders.allOrders,
  token: state.user.token,
  loading: state.orders.fetchAllOrdersLoader,
  BookOrderForm: state.products.BookOrderForm,
  retailersList: state.retailers.retailersList,
  agentid: state.user.loginDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  changeBookOrderForm: (params) =>
    dispatch(ProductActions.changeBookOrderForm(params)),
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  fetchPlant: (params) => dispatch(ProductActions.fetchPlant(params)),
  clearBookOrderForm: (params) =>
    dispatch(ProductActions.clearBookOrderForm(params)),
  clearcart: () => dispatch(ProductActions.ClearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryOrder);

const Styles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.user,
    color: Colors.white,
    marginBottom: 35,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
  },
  tabText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    // fontSize: wp('4%')
  },
  tabHeading: {
    backgroundColor: Colors.primary,
    width: "20%",
    // paddingHorizontal: 0,
    // paddingHorizontal: 10
  },
  tabUnderLine: {
    backgroundColor: Colors.white,
    width: "18%",
    marginHorizontal: 10,
    marginBottom: 4,
    borderRadius: 5,
  },
  mainTabs: {
    marginTop: hp("1%"),
    marginHorizontal: 10,
    backgroundColor: Colors.user,
  },
  noDataText: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 16,
    textAlign: "center",
  },
  tabTextStyle: {
    color: Colors.white,
    fontWeight: "normal",
  },

  button: {
    width: wp("27%"),
    height: hp("4%"),
    borderRadius: 5,
    marginTop: 2,
    marginHorizontal: 10,
    left: 12,
    elevation: 5,
  },
  modal: {
    backgroundColor: "lightgrey",
    height: hp("70%"),
    width: wp("100%"),
    alignSelf: "center",
    flex: 1,
  },
  picker: {
    borderRadius: 0,
    width: "92%",
    height: hp("4.5%"),
    elevation: 5,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 0,
    marginLeft: 0,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  picker1: {
    borderRadius: 0,
    width: "97%",
    height: hp("4.5%"),
    elevation: 5,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 0,
    marginLeft: 5,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  pickerLabel: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    fontSize: 13,
    fontWeight: "bold",
    flexDirection: "row",
  },
  brandInput: {
    fontSize: wp("3.2%"),
    height: hp("5.7%"),
    padding: 0,
    marginTop: hp("1"),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderBottomColor: "black",
    borderWidth: 1,
    elevation: 0,
    width: wp("80%"),
  },

  brandInput: {
    fontSize: wp("3.2%"),
    height: hp("5.7%"),
    padding: 0,
    marginTop: hp("1"),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderBottomColor: "black",
    borderWidth: 1,
    elevation: 0,
    width: wp("80%"),
  },

  brandInput: {
    fontSize: wp("3.2%"),
    height: hp("5.7%"),
    padding: 0,
    marginTop: hp("1"),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderBottomColor: "black",
    borderWidth: 1,
    elevation: 0,
    width: wp("80%"),
  },

  brandInput1: {
    fontSize: wp("3.2%"),

    padding: 0,
    marginTop: hp("1"),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    // borderBottomColor:'black',
    borderWidth: 1,
    elevation: 5,
    width: wp("80%"),
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp("1%"),
    height: hp("5%"),
    width: wp("30%"),
  },
});
