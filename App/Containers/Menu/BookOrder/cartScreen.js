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
import OrderActions from "App/Stores/Orders/Actions";
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
class cartScreen extends Component {
  // componentDidMount() {
  //   const { orderPrice, token, bookorder, Pricecart } = this.props;
  //   orderPrice({
  //     form: {
  //       Vtweg: bookorder.DB__c,
  //       Auart: "ZORG",
  //       Spart: bookorder.Division_no,
  //       SapId: "1234",
  //       SoldTo: bookorder.SAP_Code__c,
  //       ShipTo: bookorder.SAP_Code__c,
  //       BillTo: bookorder.SAP_Code__c,
  //       Payer: bookorder.SAP_Code__c,
  //       Ort01: bookorder.new_city ? bookorder.new_city : bookorder.Cityname,
  //       Pstlz: bookorder.new_postalcode
  //         ? bookorder.new_postalcode
  //         : bookorder.Pin_code,
  //       Regio: bookorder.new_region
  //         ? bookorder.new_region
  //         : bookorder.region_no,
  //       Stras: bookorder.new_street ? bookorder.new_street : bookorder.Street,
  //       Telf1: bookorder.Phone,
  //       Audat: HelperService.dateReadableFormatWithHyphen(
  //         HelperService.getCurrentTimestamp()
  //       ),
  //       Prsdt: HelperService.dateReadableFormatWithHyphen(
  //         HelperService.getCurrentTimestamp()
  //       ),
  //       Kalsm: "ZDOMES",
  //       Werks: bookorder.plant_code,
  //       Vkorg: "MYKL",
  //       Deliveryline: Pricecart,
  //     },
  //     token,
  //   });
  // }
  //   componentWillUnmount() {
  //     this.props.ClearCart();
  // }
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
  // submit() {
  //   const {
  //     bookorder,
  //     token,
  //     userid,
  //     createPrimaryOrder,
  //     cart,
  //     orderprice,
  //   } = this.props;
  //   createPrimaryOrder({
  //     form: {
  //       GrossWeight: orderprice.Btgew,
  //       NetWeight: orderprice.Ntgew,
  //       OrderDate: HelperService.dateReadableFormatWithHyphen(
  //         HelperService.getCurrentTimestamp()
  //       ), //current date hypen helperservice
  //       City1: bookorder.City, //
  //       ShiptoTerritory: bookorder.Territory,
  //       ShipToTelephone: bookorder.Phone,
  //       ShiptoStreet: bookorder.Street, //address
  //       ShiptoPostalCode: bookorder.Pin_code,
  //       // "OrderType":"Purchase Order",
  //       Status: "Saved",
  //       ShipTo: bookorder.DBA, //party
  //       BillTo: bookorder.DBA, //party
  //       RequestedDeliveryDate: bookorder.delivery_date, //bookform date
  //       ponumber: bookorder.Po_number,
  //       remarks: bookorder.Remarks,
  //       User: userid, //userid of user
  //       NetPrice: orderprice.Netpr,
  //       Tax: orderprice.Mwsbp,
  //       OrderReason: "001",
  //       PricingDate: HelperService.dateReadableFormatWithHyphen(
  //         HelperService.getCurrentTimestamp()
  //       ),
  //       DeliveryPlant: bookorder.plant, //bookorder of select plant
  //       line: cart,
  //     },
  //     token,
  //   });
  // }
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
      return _.omit(object, ["Name", "TotalOrderValue", "Application"]);
    });

    let totaltax = this.getTotalValue(cart) * Number(0.18);
    let totalordervalue =
      this.getTotalValue(cart) + this.getTotalValue(cart) * Number(0.18);
    // console.log(totalordervalue,totaltax,"gggg");
    createPrimaryOrder({
      form: {
        GrossWeight: "",
        OrderType: "Primary Order",
        Status: "Open",
        SalesOrderType: bookorder.ordertype,
        OrderDate: HelperService.dateReadableFormatWithHyphen(),
        OrderFrom: bookorder.Customer,
        OrderTO: "0010p000014AtqNAAS",
        TotalorderQuantity: this.getTotalQuantity(cart),
        SAPOrderID: "",
        Remarks: bookorder.Remarks,
        GrossAmount: this.getTotalValue(cart),
        Discount1: "0",
        Discount2: "0",
        TotalTax: totaltax,
        TotalOrderValue: totalordervalue,
        line: result,
        // GrossWeight: "2001",
        // OrderType: "Primary Order",
        // Status: "Open",
        // SalesOrderType: bookorder.ordertype,
        // OrderFrom: bookorder.Customer,
        // OrderTO: "0010p0000148jmiAAA",
        // TotalorderQuantity: this.getTotalQuantity(cart),
        // SAPOrderID: "12345",
        // Remarks: bookorder.Remarks,
        // GrossAmount: "2000",
        // Discount1: "10",
        // Discount2: "10",
        // TotalTax: "10",
        // TotalOrderValue: "100",
        // line: result,
        // OrderDate: HelperService.dateReadableFormatWithHyphen(),
      },
      token,
      show: true,
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
    // console.log(orderprice, "jjjj");
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            marginBottom: 10,
            elevation: 10,
            borderWidth: 1,
            backgroundColor: "white",
            borderColor: "white",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 15,
              fontWeight: "bold",
              right: wp("1%"),
            }}
          >
            {bookorder.CustomerStatus
              ? "Customer Status is" + bookorder.CustomerStatus
              : ""}
          </Text>
          <View
            style={{
              elevation: 5,
              borderWidth: 1,
              backgroundColor: "white",
              width: "90%",
              alignSelf: "center",
              borderColor: "white",
              paddingBottom: "1%",
            }}
          >
            {/* <View style={{ alignSelf: "center", marginTop: hp("1") }}>
              <ProgressBar progress="0.3" />
            </View> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: hp("1"),
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <View
                  style={{
                    backgroundColor: Colors.primary,
                    width: wp("4"),
                    height: wp("4"),
                    marginTop: hp(".2"),
                    borderRadius: 20,
                  }}
                ></View> */}

                <Text style={{ marginLeft: wp("2") }}>Available Credit</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {/* <View
                  style={{
                    backgroundColor: "#e6ffee",
                    width: wp("4"),
                    height: wp("4"),
                    marginTop: hp(".2"),
                    borderRadius: 20,
                  }}
                ></View> */}

                <Text style={{ marginLeft: wp("2") }}>Overdue Amount</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: hp("1"),
              }}
            >
              <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                {bookorder.AvailableCreditLimit
                  ? "₹" + bookorder.AvailableCreditLimit
                  : "0"}
              </Text>
              <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                {bookorder.OverdueAmount ? "₹" + bookorder.OverdueAmount : "0"}
              </Text>
            </View>
          </View>
        </View>

        {/* <View
            style={{
              width: wp("38%"),
              borderBottomWidth: 1,
              borderColor: "black",
              marginTop: hp("1.5%"),
              height: hp("9%"),
              margin: 15,
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
              Total Qty
            </Text>
            <Text
              style={{
                borderColor: "transparent",
                left: wp("0%"),
                fontFamily: "Segoe UI",
                // color:Colors.black,
                fontSize: 14,
                top: hp("3%"),
                fontWeight: "bold",
              }}
            >
              {"34"} */}
        {/* {this.getTotalQuantity(cartItem)} */}
        {/* </Text>
          </View> */}

        <View
          style={{
            width: wp("38%"),
            top: hp("-2%"),
            left: wp("6.5%"),
            // alignSelf: "center",
            // borderBottomWidth: 1,
            // borderColor: "black",
            // marginTop: hp("1.5%"),
            height: hp("9%"),
            // margin: 15,
            flexDirection: "row",
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
            {/* {"₹234"} */}
            {/* {"₹" + HelperService.FixedDecimalValue(this.getTotalValue(cart))} */}
            {"₹" + "2100"}
          </Text>
        </View>

        <View style={{ top: hp("-3.5%") }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", left: wp("7%") }}>
            Remarks
          </Text>
          <TextArea
            placeholder="Enter Remarks "
            numberOfLines={5}
            style={{
              // marginBottom: hp("1%"),
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
        {/* <Text
            style={{
              width: wp("90"),
              fontWeight: "bold",
              color: Colors.primary,
              marginLeft: wp("5%"),
              marginTop: wp("2%"),
              fontSize: wp("4.4%"),
            }}
          >
            {HelperService.getNameFromSFID(retailerlist, bookorder.DBA)}
          </Text> */}

        {/* <View
            style={{
              paddingHorizontal: wp("22"),
              marginTop: wp("2"),
              marginBottom: "2%",
            }}
          > */}
        {/* <DisplayCardStrip
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
              value={cart && cart.length ? cart.length : ""}
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
              value={this.getTotalQuantity(this.props.cart)}
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
              value={
                orderprice &&
                orderprice.PrRes &&
                orderprice.PrRes.item &&
                orderprice.PrRes.item.Netpr
                  ? orderprice.PrRes.item.Netpr
                  : ""
              }
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            /> */}
        {/* <DisplayCardStrip  label={'Total Amount:'} value={orderprice&&orderprice.PrRes&&orderprice.PrRes.item&&orderprice.PrRes.item.Netpr?orderprice.PrRes.item.Netpr:''}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} /> */}
        {/* <DisplayCardStrip
              label={"Gross weight:"}
              value={
                orderprice &&
                orderprice.PrRes &&
                orderprice.PrRes.item &&
                orderprice.PrRes.item.Btgew
                  ? orderprice.PrRes.item.Btgew
                  : ""
              }
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            /> */}
        {/* <DisplayCardStrip
              label={"Net weight:"}
              value={
                orderprice &&
                orderprice.PrRes &&
                orderprice.PrRes.item &&
                orderprice.PrRes.item.Ntgew
                  ? orderprice.PrRes.item.Ntgew
                  : ""
              }
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            /> */}

        {/* <DisplayCardStrip
              label={"Total Tax:"}
              value={
                orderprice &&
                orderprice.PrRes &&
                orderprice.PrRes.item &&
                orderprice.PrRes.item.Mwsbp
                  ? orderprice.PrRes.item.Mwsbp
                  : ""
              }
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            /> */}
        {/* <DisplayCardStrip  label={'Net Amount:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} /> */}
        {/* <DisplayCardStrip
              label={"Order Weight:"}
              value={this.getTotalweight(this.props.cart)}
              valueStyle={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
                marginLeft: 10,
              }}
              labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
            /> */}
        {/* </View> */}

        {/* {this.getcardNode()} */}
        <Text
          style={{ left: wp("8%"), color: "red",marginBottom:hp("3%"),fontWeight:"bold" }}
          onPress={() => NavigationService.navigate("Offer")}
        >
          View Offers
        </Text>
        <CartCard />
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
            // if (!bookorder.Remarks) {
            //   HelperService.showToast({
            //     message: "Please Enter Remarks",
            //     duration: 500,
            //     buttonText: "",
            //   });
            // } else {
            // this.onPlaceOrder();
            NavigationService.navigate("PrimarySuccess");
            // }
          }}
        />
        {/* <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <BlueButton
            title="Save In Draft"
            textStyle={{ fontSize: hp("2") }}
            style={{ height: hp("5.5") }}
            // loading={this.props.loader}
            disable={this.props.loader}
            textStyle={{ fontSize: hp("2") }}
            onPress={() => this.submitdraft()}
          />
.

          <BlueButton
            style={{ height: hp("5.5") }}
            title="Finalized"
            loading={this.props.loader}
            disable={this.props.loader}
            textStyle={{ fontSize: hp("2") }}
            onPress={() => this.submit()}
          />
        </View> */}
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
  orderPrice: (params) => dispatch(OrderActions.OrderPrice(params)),
  ClearCart: () => dispatch(ProductActions.ClearCart()),
  addProductCart: (params) => dispatch(ProductActions.addProductCart(params)),
  changeCount: (params) => dispatch(ProductActions.changeCount(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(cartScreen);
