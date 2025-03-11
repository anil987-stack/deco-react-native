import LocalActions from "App/Stores/LocalExpense/Actions";
// import Colors from 'App/Theme/Colors';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
// import Style from './PurchaseStyles';
import BackArrowButton from "App/Components/BackArrowButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
// import Select from '../../../Components/Select/Select'
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
  Alert,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import { TextInput } from "react-native-gesture-handler";
// import ConfirmOrder from './ConfirmOrder';
import SearchBar from "App/Components/SearchBar";
import GenericIcon from "App/Components/GenericIcon";
import _ from "lodash";
import ProductActions from "App/Stores/Products/Actions";
import NoDataFound from "App/Components/NoDataFound";
import DisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CartCard from "./cartcard";
import { HelperService } from "App/Services/Utils/HelperService";
import ProgressBar from "../../../Components/ProgressBar";
import TextArea from "App/Components/FormInput/TextArea";
import OrderActions from "App/Stores/Orders/Actions";
class cartScreen extends Component {
  onRemoveClick(id) {
    const { removeBookOrder } = this.props;

    Alert.alert(
      "Remove Item",
      "Do you want to delete this Item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => removeBookOrder({ id: id }) },
      ],
      { cancelable: false }
    );
  }

  onPlaceOrder() {
    const { removeBookOrder, cart } = this.props;
    this.props.changeCount({ cart: cart.length });
    Alert.alert(
      "Place Order",
      "Do you want to place this order?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => this.submitdraft() },
      ],
      { cancelable: false }
    );
  }
  onChangeQuantity(params) {
    // console.log("paramssqty",params)
    const { addProductCart, removeBookOrder } = this.props;

    if (params.Quantity == 0) {
      removeBookOrder({ id: params });
    } else {
      addProductCart(params);
    }
  }
  getcardNode() {
    const {
      cart,
      show,
      ShowMore,
      ShowLess,
      changeForm,
      productList,
      orderprice,
    } = this.props;
    console.log(cart);
    let visibleNode = [];

    // let filteredPartiesList = productList&&productList.length?this.filterResults(productList):[];
    if (cart.length) {
      visibleNode = (
        <FlatList
          key={"Products"}
          data={cart}
          renderItem={({ item }) => (
            <CartCard
              item={item}
              id={item.Id}
              productdata={productList}
              more={show}
              name={item.Name}
              desc={item.PartNoDescription}
              order={
                orderprice && orderprice.PrRes && orderprice.PrRes.item
                  ? orderprice && orderprice.PrRes && orderprice.PrRes.item
                  : ""
              }
              qty={item.Quantity}
              unit={item.UnitPrice}
              amount={item.TotalOrderValue}
              onChangeQuantity={(quantity) =>
                this.onChangeQuantity({
                  Quantity: quantity,
                  Name: item.Name,
                  Application: item.Application,
                  TotalOrderValue: item.TotalOrderValue,
                })
              }
              // onclick={() => ShowMore()}
              // declick={() => ShowLess()}
              // changeForm={this.props.changeForm}
              onRemoveClick={() => this.onRemoveClick(item.Application)}
              // form={this.props.bookorder}
              // onPress={() => this.onSelectRetailer({ id: item.sfid, data: item, })}
            />
          )}
          keyExtractor={(item) => item.id}
          // onRefresh={() => this.fetchRetailersCall()}
          //   refreshing={getAllProductsLoading}
          ListEmptyComponent={() => <NoDataFound text={"No  Found"} />}
        />
      );
    } else {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }
    return visibleNode;
  }
  submitdraft() {
    const {
      bookorder,
      token,
      userid,
      createPrimaryOrder,
      cart,
      orderprice,
    } = this.props;
    let result = _.map(cart, (object) => {
      return _.omit(object, ["Name", "TotalOrderValue"]);
    });

    let totaltax = this.getTotalValue(cart) * Number(0.18);
    let totalordervalue =
      this.getTotalValue(cart) + this.getTotalValue(cart) * Number(0.18);
    console.log(totalordervalue, totaltax, "gggg");
    createPrimaryOrder({
      form: {
        GrossWeight: "",
        OrderType: "Secondary Order",
        Status: "Fully Delivered/Closed",
        OrderDate: HelperService.dateReadableFormatWithHyphen(),
        OrderFrom: bookorder.orderfrom,
        OrderTO: bookorder.orderto,
        TotalorderQuantity: this.getTotalQuantity(cart),
        SAPOrderID: "",
        Remarks: bookorder.Remarks,
        GrossAmount: this.getTotalValue(cart),
        Discount1: "0",
        Discount2: "0",
        TotalTax: totaltax,
        TotalOrderValue: totalordervalue,
        line: result,
      },
      token,
      show: false,
    });
  }
  getTotalQuantity(items) {
    let quantity = 0;
    items.map((obj) => {
      quantity += Number(obj.TotalQuantity);
    });
    return quantity;
  }
  getTotalValue(items) {
    let quantity = 0;
    items.map((obj) => {
      quantity += Number(obj.TotalOrderValue);
    });
    return quantity;
  }
  render() {
    const { bookorder, retailerlist, cart, orderprice } = this.props;
    console.log(cart, "cart");
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: wp("38%"),
            // borderBottomWidth: 1,
            // borderColor: "black",
            marginTop: hp("1.5%"),
            height: hp("9%"),
            flexDirection: "row",
            left: wp("7%"),
            // margin: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Segoe UI",
              color: "black",
              top: hp("2.5%"),
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Order Value:
          </Text>
          <Text
            style={{
              borderColor: "transparent",
              left: wp("0%"),
              fontFamily: "Segoe UI",
              // color:Colors.black,
              fontSize: 14,
              top: hp("2.5%"),
              fontWeight: "bold",
            }}
          >
            {"₹" + HelperService.FixedDecimalValue(this.getTotalValue(cart))}
          </Text>
        </View>

        <View style={{ top: hp("-1.5%") }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", left: wp("7%") }}>
            Remarks
          </Text>
          <TextArea
            placeholder="Enter Remarks "
            numberOfLines={5}
            style={{
              marginBottom: hp("2%"),
              height: hp("13%"),
              width: wp("87%"),
              fontSize: wp("3.5%"),
              borderWidth: 0.8,
              marginHorizontal: 2,
              elevation: 4,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            value={bookorder.Remarks}
            //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
            onChange={(value) =>
              this.props.changeForm({
                edited_field: "Remarks",
                edited_value: value,
              })
            }
          />
        </View>
        {/* <View style={{ paddingHorizontal: wp("30"), marginTop: wp("2") }}>
            <DisplayCardStrip
              label={"Request Delivery Date:"}
              value={HelperService.dateReadableFormat(
                HelperService.getCurrentTimestamp()
              )}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Items:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Total Quantity:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Total Amount:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Total Discount:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Total Discount:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Total Tax:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Net Amount:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
            <DisplayCardStrip
              label={"Order Weight:"}
              value={""}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            />
          </View> */}

        {this.getcardNode()}
        <BlueButton
          title="Place Order"
          style={{
            height: hp("5.5"),
            width: wp("80%"),
            alignSelf: "center",
            marginBottom: hp("2%"),
          }}
          loading={this.props.loader}
          disable={this.props.loader}
          textStyle={{ fontSize: hp("2.5") }}
          onPress={() => {
            if (!bookorder.Remarks) {
              HelperService.showToast({
                message: "Please Enter Remarks",
                duration: 500,
                buttonText: "",
              });
            } else {
              this.onPlaceOrder();
            }
          }}
        />
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: wp("2%"),
          }}
        >
          {/* <BlueButton title="Save In Draft"  textStyle={{fontSize:hp('2')}}/> */}
        {/* <BlueButton
            title="Confirm Order"
            textStyle={{ fontSize: hp("2"), width: wp("40%") }}
          /> */}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  // type: state.local.type

  token: state.user.token,
  userid: state.user.loginDetails.userId,
  productList: state.products.productList,
  // getAllProductsLoading:state.products.getAllProductsLoading,
  // searchProductFilters:state.products.searchFilters,
  // userdetail:state.startday.userDetailList.Employees__r.records[0],
  // bookorder:state.products.BookOrderForm,
  cart: state.products.addtocart,
  show: state.products.showorders,
  bookorder: state.products.BookOrderForm,
  loader: state.orders.primaryOrderFormLoader,
  // addtocart:state.products.addtocart,
  retailerlist: state.retailers.retailersList,
  Pricecart: state.products.addtoPricecart,
  orderprice: state.orders.orderPrice,
});
const mapDispatchToProps = (dispatch) => ({
  ShowMore: () => dispatch(ProductActions.ShowMore()),
  ShowLess: () => dispatch(ProductActions.ShowLess()),
  changeForm: (params) => dispatch(ProductActions.changeBookOrderForm(params)),
  removeBookOrder: (params) =>
    dispatch(ProductActions.removeProductCart(params)),
  createPrimaryOrder: (params) =>
    dispatch(OrderActions.createPrimaryOrder(params)),
  addProductCart: (params) => dispatch(ProductActions.addProductCart(params)),
  changeCount: (params) =>
  dispatch(ProductActions.changeCount(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(cartScreen);
