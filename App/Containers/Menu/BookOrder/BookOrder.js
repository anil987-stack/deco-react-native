import LocalActions from "App/Stores/LocalExpense/Actions";
// import Colors from 'App/Theme/Colors';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
// import Style from './PurchaseStyles';
import BackArrowButton from "App/Components/BackArrowButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Select from "../../../Components/Select/Select";
import BlueButton from "App/Components/BlueButton";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  FlatList,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import { TextInput } from "react-native-gesture-handler";
// import ConfirmOrder from './ConfirmOrder';
import SearchBar from "App/Components/SearchBar";
import GenericIcon from "App/Components/GenericIcon";
import _ from "lodash";
import ProductActions from "App/Stores/Products/Actions";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProductsTuple from "./ProductsTuple";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
// const productList = [
//   {
//     Id: "1",
//     Name: "Dealer",
//     Item_code: "LL-LTX2.5L",
//     Battery_type: "2 W Battery",
//     Division_c: "AE",
//     MRP: "1150",
//     Sku: true,
//     make: true,
//   },
//   {
//     Id: "2",
//     Name: "Customer",
//     Item_code: "LL-LTX2.5L",
//     Battery_type: "2 W Battery",
//     Division_c: "AE",
//     MRP: "1160",
//     Sku: false,
//     make: false,
//   },
// ];

class BookOrder extends Component {
  state = {
    toggle: false,
    // open_modal:false,
  };
  componentDidMount() {
    const {
      token,
      getAllPartMaster,
      productList,
      // userdetail,
      bookorder,
    } = this.props;
    // console.log("userdetail",userdetail.Sales_Office__c)
    // this.props.clearSelectRetailer();
    this.props.clearProductFilter();
    // getAllPartMaster({
    //   token,
    //   vertical: bookorder.vertical,
    //   branch: userdetail.Branch_Master__c,
    // });
    // this.props.removeQuantityForm();
  }

  componentWillUnmount() {
    this.props.clearProductFilter();
  }

  onPressAddToCart(item) {
    const { bookorder, addProductCart, quantityform } = this.props;
    let num = 20;
    // console.log(bookorder, "bookorder", num++);
    // if (bookorder.id==item.Id&&bookorder.quantity__c==0) {
    //   HelperService.showToast({
    //     message: " Enter Quantity",
    //     duration: 1000,
    //     buttonText: "Okay",
    //   });
    // } else if (bookorder.id==item.Id&&bookorder.quantity__c == "") {
    //   HelperService.showToast({
    //     message: " Enter Quantity",
    //     duration: 1000,
    //     buttonText: "Okay",
    //   });
    // } else {
    this.props.addProductCart({
      //product__c: item.item.sfid,
      // per_bike_price__c: item.item.price__c,
      //colour__c: form.colour__c,
      //colour_name : HelperService.getNameFromSFID( item.colorList, form.colour__c),

      // "name": item.Name,
      Quantity:
        quantityform.quantity__c && quantityform.quantity__c
          ? quantityform.quantity__c
          : "",
      TotalQuantity:
        quantityform.quantity__c && quantityform.quantity__c
          ? quantityform.quantity__c
          : "",
      ItemGrossPrice: "100",
      PartNo: item.id,
      Name: item.name,
      PartNoDescription: item.Description,
      UnitPrice: item.MRP,
      TotalOrderValue: item.MRP * quantityform.quantity__c,
      Application: item.Application,
      TotalOrderLine: "",
      OrderType1: "Primary Order",
      SalesOrderType: bookorder.ordertype,
      OrderFrom: bookorder.Customer,
      OrderDate: HelperService.dateReadableFormatWithHyphen(),

      // order_header1__c: "a0G9D000003FUxfUAG",
      // recordtypeid__c: "0129D000000lx9hQAA",
    });
    this.props.removeQuantityForm();
    // this.props.changeForm({
    //   edited_field: "quantity__c",
    //   edited_field1:
    //   edited_value: "",
    // })
    // this.props.addPriceProductCart({
    //   Posnr: "000010",
    //   Kwmeng:
    //     bookorder.quantity__c && bookorder.quantity__c.value
    //       ? bookorder.quantity__c.value
    //       : "",
    //   Matnr: item.Material_Code__c,
    //   Uom: "",
    //   Division:
    //     item.Sub_Division__r && item.Sub_Division__r.Code__c
    //       ? item.Sub_Division__r.Code__c
    //       : "",
    //   Brgew: "",
    //   Currency_x: "INR",
    //   ItemCateg: "",
    //   NTGEW: "",
    //   Netwr: "",
    //   Plant: bookorder.plant_code ? bookorder.plant_code : "",
    // });
    // }
  }
  isAddedInCart(item) {
    // console.log(item);
    const { cart, bookorder } = this.props;

    let isPresent = false;

    cart.map((obj) => {
      // console.log(obj, "jjjjghhffgyhfhyhh");

      if (obj.Name == item.name && obj.Application == item.Application) {
        isPresent = true;
      }
    });
    return isPresent;
  }

  onRemoveClick(item) {
    const { cart, bookorder, Pricecart, removeProductCart } = this.props;

    _.map(cart, (obj) => {
      if (obj.Name == item.name && obj.Application == item.Application) {
        id = obj.Application;
      }
    });
    // _.map(Pricecart, (obj) => {
    //   if (obj.Matnr == item.Material_Code__c) {
    //     code = obj.Matnr;
    //   }
    // });
    // console.log("idddd", id);
    removeProductCart({ id });
    // this.props.removePriceProductCart({ code });
  }

  fetchRetailersCall() {
    const {
      token,
      getAllPartMaster,
      productList,
      // userdetail,
      bookorder,
    } = this.props;
    // getAllPartMaster({
    //   token,
    //   vertical: bookorder.vertical,
    //   branch: userdetail.Branch_Master__c,
    // });
  }
  filterResults(list) {
    let searchFilters = this.props.searchProductFilters;

    // let filteredList = HelperService.applySearch(
    //   list,
    //   ["Name", "MRP__c"],
    //   searchFilters["name"]
    // );
    let filteredList = HelperService.searchArrayListFilter(
      list,
      searchFilters["selectedCategories"],
      "Product_Type1"
    );
    filteredList = HelperService.searchArrayListFilter(
      filteredList,
      searchFilters["selectedSubCategories"],
      "Product_Type_2"
    );
    filteredList = HelperService.searchArrayListFilter(
      filteredList,
      searchFilters["selectedSubSubCategories"],
      "Application"
    );
    filteredList = HelperService.searchArrayListFilter(
      filteredList,
      searchFilters["selectedSubSubSubCategories"],
      "Vehicle_Segment"
    );
    filteredList = HelperService.searchArrayListFilter(
      filteredList,
      searchFilters["selectedDivision"],
      "Division_l"
    );

    return filteredList;
  }

  getProductsData() {
    let visibleNode = [];

    const {
      searchProductFilters,
      fetchRetailersLoader,
      retailerSearchFilters,
      getAllPartMasterLoading,
      addProductCart,
      changeForm,
      bookorder,
      quantityform,
      productList,
    } = this.props;

    if (productList && productList.length) {
      let filteredList = this.filterResults(productList);
      if (filteredList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredList}
            renderItem={({ item }) => (
              <ProductsTuple
                item={item}
                id={item.id}
                select={() => {
                  quantityform.quantity__c && quantityform.id == item.id
                    ? quantityform.quantity__c > 10000 &&
                      quantityform.id == item.id
                      ? HelperService.showToast({
                          message: "Quantity can't be more than 10000",
                          duration: 1000,
                          buttonText: "Okay",
                        })
                      : this.onPressAddToCart(item)
                    : HelperService.showToast({
                        message: " Enter Quantity",
                        duration: 1000,
                        buttonText: "Okay",
                      });
                }}
                changeForm={this.props.changeForm}
                form={this.props.quantityform}
                isAddedInCart={this.isAddedInCart(item)}
                onRemoveClick={() => this.onRemoveClick(item)}
                // onPress={() => this.onSelectRetailer({ id: item.sfid, data: item, })}
              />
            )}
            keyExtractor={(item) => item.id}
            refreshing={getAllPartMasterLoading}
            onRefresh={() => this.fetchRetailersCall()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"Not Product Found"} />;
      }
    } else if (getAllPartMasterLoading) {
      visibleNode = <Loading />;
    } else if (
      !productList ||
      (productList && !productList.length && !getAllPartMasterLoading)
    ) {
      visibleNode = (
        <NoDataFound text={"Not Product Found"}>
          <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => this.fetchRetailersCall()}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          />
        </NoDataFound>
      );
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
        <View>
          {/* <View style={{ margin: 5 }}>
            <BlueButton
              style={{
                width: wp("30%"),
                height: hp("4%"),
                borderRadius: 2,
                marginTop: 5,
                marginHorizontal: 20,
                elevation: 5,
                alignSelf: "flex-end",
                marginBottom: 5,
              }}
              rounded
              onPress={() => {
                NavigationService.navigate("BulkOrder"),
                  this.props.clearFilter();
                this.props.clearPart();
              }}
              // onPress={() => {
              //   this.displayModal(true);
              // }}
              large
              title={"BULK ORDER"}
              textStyle={{ fontSize: wp("3.2") }}
            />
          </View> */}
          {/* {this.getProductsData()} */}
          <ProductsTuple/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // type: state.local.type

  token: state.user.token,
  productList: state.user.AllPartMasterList,
  getAllPartMasterLoading: state.user.getAllPartMasterLoading,
  searchProductFilters: state.products.searchFilters,
  // userdetail: state.startday.userDetailList.Employees__r.records[0],
  bookorder: state.products.BookOrderForm,
  quantityform: state.products.primaryQuantity,
  cart: state.products.addtocart,
  Pricecart: state.products.addtoPricecart,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPartMaster: (params) => dispatch(UserActions.getAllPartMaster(params)),
  addProductCart: (params) => dispatch(ProductActions.addProductCart(params)),
  addPriceProductCart: (params) =>
    dispatch(ProductActions.addPriceProductCart(params)),
  removeProductCart: (params) =>
    dispatch(ProductActions.removeProductCart(params)),
  removePriceProductCart: (params) =>
    dispatch(ProductActions.removePriceProductCart(params)),
  changeForm: (params) => dispatch(ProductActions.changeQuantityForm(params)),
  removeQuantityForm: () => dispatch(ProductActions.removeQuantityForm()),
  clearFilter: () => dispatch(ProductActions.clearFilter()),
  clearPart: (params) => dispatch(UserActions.clearPart(params)),
  clearProductFilter: () => dispatch(ProductActions.clearProductFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookOrder);

const Styles = StyleSheet.create({
  dropdown: {
    height: hp("6%"),
    width: wp("45%"),
    borderRadius: 30,
    borderWidth: 0,
    elevation: 10,
    backgroundColor: "white",
    borderColor: "#00000054",
    borderWidth: 0.8,
    marginTop: 5,
    marginHorizontal: 10,
  },
  searchContainer: {
    //paddingVertical: 0,
    // width: '83%',
    borderRadius: 10,
    // paddingHorizontal: 20,
    elevation: 10,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
    //  marginTop:-20,
    height: wp("10%"),
  },
  searchFilterContainer: {
    marginTop: hp(".5%"),
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchFilterTypeBox: {
    marginHorizontal: wp("1%"),
    marginBottom: hp("1%"),
    borderWidth: 1.5,
    width: wp("42%"),
  },
  searchFilterTypeText: {
    fontSize: wp("3.8%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  header: {
    height: hp("18"),
    paddingTop: hp("4%"),
    paddingHorizontal: wp("1%"),
    flexDirection: "column",
    alignItems: "center",
    borderBottomLeftRadius: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
