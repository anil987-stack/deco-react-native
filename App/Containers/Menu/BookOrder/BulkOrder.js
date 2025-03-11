import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Input,
  Item,
  Right,
  Badge,
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import Backbutton from "../../../Components/BackArrowButton";
import CommonActions from "App/Stores/Common/Actions";
import UserActions from "App/Stores/User/Actions";
import SearchBar from "App/Components/SearchBar";
import WhiteButton from "App/Components/WhiteButton";
import ProductActions from "App/Stores/Products/Actions";
import BlueButton from "App/Components/BlueButton";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import InputNumber from "App/Components/FormInput/InputNumber";

class BulkOrder extends React.Component {
  fetchCall() {
    const {
      token,
      getAllPartMaster,
      productList,
      userdetail,
      bookorder,
      searchProductFilters,
    } = this.props;
    getAllPartMaster({
      token,
      vertical: bookorder.vertical,
      branch: userdetail.Branch_Master__c,
      search: searchProductFilters["bulk"],
      type: "bulk",
    });
  }
  filterResults(list) {
    let searchFilters = this.props.searchProductFilters;

    let filteredList = list.filter((obj) => obj);

    return filteredList;
  }

  onCheck() {
    const { searchProductFilters } = this.props;
    if (searchProductFilters["bulk"]) {
      if (searchProductFilters["bulk"].length >= 4) {
        this.fetchCall();
      } else {
        HelperService.showToast({
          message: "Please Enter atleast 4 digits",
        });
      }
    } else {
      HelperService.showToast({
        message: "Please Enter Digits to get Part No.",
      });
    }
  }
  isAddedInCart(item) {
    const { cart, bookorder } = this.props;

    let isPresent = false;

    cart.map((obj) => {
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

    removeProductCart({ id });
  }

  onPressAddToCart(item) {
    const { bookorder, addProductCart, quantityform } = this.props;

    this.props.addProductCart({
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
    });
    this.props.removeQuantityForm();
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
              <View style={Styles.Screen1}>
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View style={{ width: wp("35%"), marginLeft: 10 }}>
                    <View
                      style={{
                        justifyContent: "space-between",
                        width: wp("50"),
                        marginTop: hp("3.2%"),
                      }}
                    >
                      <Text
                        style={{
                          ...Fonts.Medium,
                          color: Colors.primary,
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: wp("33%"), marginLeft: 6 }}>
                    <View
                      style={{
                        // justifyContent: "space-between",
                        width: wp("35"),
                        marginTop: hp("2"),
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          ...Fonts.Medium,
                          color: Colors.primary,
                          fontWeight: "700",
                          fontSize: 17,
                          top: hp("1.3%"),
                        }}
                      >
                        Qty
                      </Text>
                      <TextInput
                        style={{
                          height: hp("5%"),
                          width: wp("15%"),
                          borderRadius: 8,
                          margin: 5,
                          // borderWidth: 1,
                          padding: 10,
                          backgroundColor: "#DCDCDC",
                        }}
                        onChangeText={(value) =>
                          changeForm({
                            edited_field: "quantity__c",
                            edited_field1: "id",
                            edited_value: value,
                            edited_value1: item.id,
                          })
                        }
                        value={
                          item.id == quantityform.id
                            ? quantityform.quantity__c
                            : ""
                        }
                        placeholder=""
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: "5%" }}>
                    <TouchableOpacity
                      style={{
                        zIndex: 10,
                      }}
                      onPress={() =>
                        this.isAddedInCart(item)
                          ? this.onRemoveClick(item)
                          : quantityform.quantity__c &&
                            quantityform.id == item.id
                          ? this.onPressAddToCart(item)
                          : HelperService.showToast({
                              message: " Enter Quantity",
                              duration: 1000,
                              buttonText: "Okay",
                            })
                      }
                    >
                      {this.isAddedInCart(item) ? (
                        <GenericIcon
                          name={"check-circle"}
                          style={{
                            // marginLeft: wp("78%"),
                            fontSize: 35,
                            color: Colors.green,
                            top: hp("0.5%"),
                          }}
                        />
                      ) : (
                        <GenericIcon
                          name={"add-circle"}
                          style={{
                            // marginLeft: wp("78%"),
                            fontSize: 35,
                            color: Colors.primary,
                            top: hp("0.5%"),
                          }}
                        />
                      )}

                      {/* )} */}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            refreshing={getAllPartMasterLoading}
            onRefresh={() => this.fetchCall()}
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
        <View style={{ top: hp("6%"), textAlign: "center" }}>
          <Text
            style={{
              width: wp("60%"),
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Enter Part No. and Press Search
          </Text>
          {/* <NoDataFound text={"Not Data Found, Enter Part No. and Press Search"}> */}
          {/* <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => this.fetchRetailersCall()}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          /> */}
          {/* </NoDataFound> */}
        </View>
      );
    }

    return visibleNode;
  }
  render() {
    const {
      changeSearchFilters,
      searchProductFilters,
      cartProduct,
    } = this.props;
    return (
      <View>
        <View style={Styles.header}>
          <View style={{ flexDirection: "row", marginRight: wp("0%") }}>
            <TouchableOpacity transparent>
              <GenericIcon
                name={"arrow-back"}
                onPress={NavigationService.goback}
                style={{
                  color: Colors.white,
                  fontSize: wp("8%"),
                  marginLeft: hp("1"),
                  marginTop: hp("1"),
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginHorizontal: wp("20%"),
                color: Colors.white,
                marginTop: hp("1"),
              }}
            >
              Bulk Order
            </Text>
            <View style={{ flexDirection: "row", right: wp("5%") }}>
              <TouchableOpacity
                transparent
                style={{ marginRight: wp("-1%"), marginTop: hp("1") }}
                onPress={() => NavigationService.navigate("cartScreen")}
              >
                <GenericIcon
                  name={"shopping-cart"}
                  style={{
                    color: Colors.white,
                    fontSize: wp("8%"),
                    marginTop: hp("1"),
                  }}
                />
              </TouchableOpacity>
              <Badge style={Styles.countBadge}>
                <Text style={Styles.countBadgeText}>
                  {cartProduct ? cartProduct.length : "0"}
                </Text>
              </Badge>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: 10,
              height: hp("6"),
              // paddingRight: 10,
              marginTop: hp("2"),
            }}
          >
            <SearchBar
              placeholder={`Search`}
              onInputChange={(text) =>
                changeSearchFilters({
                  edited_field: "bulk",
                  edited_value: text,
                })
              }
              onInputSubmit={(text) =>
                changeSearchFilters({
                  edited_field: "bulk",
                  edited_value: text,
                })
              }
              onInputClear={(text) =>
                changeSearchFilters({ edited_field: "bulk", edited_value: "" })
              }
              value={searchProductFilters["bulk"]}
              ContainerStyles={Styles.searchContainer}
            />
            {/* <Text style={{fontSize:13,marginTop:hp('1.5'),color:Colors.grey}}>filter</Text> */}

            <TouchableOpacity
              style={{
                marginLeft: wp("2%"),
                height: hp("6"),
                marginTop: hp("0"),
                justifyContent: "center",
                backgroundColor: "#C1E1C1",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                width: wp("20%"),
              }}
              onPress={() => this.onCheck()}
            >
              <Text style={{ textAlign: "center" }}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* <View
          style={{ flexDirection: "row", alignSelf: "center", left: wp("20%") }}
        >
          <GenericIcon
            show={true}
            name={"star"}
            style={{
              fontSize: 24,
              color: "#FFD700",
              top: hp("0.5%"),
            }}
          />
          <Text style={{ color: "white", fontSize: 14, top: hp("0.8%") }}>
            Focused Product
          </Text>
        </View> */}
        </View>
        {this.getProductsData()}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  visitsDisplayList: state.visits.visitsDisplayList,
  filteredDisplayData: state.visits.filteredDisplayData,
  token: state.user.token,
  agentid: state.user.id,
  // agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  searchProductFilters: state.products.searchProductFilters,
  cartProduct: state.products.addtocart,
  userdetail: state.startday.userDetailList.Employees__r.records[0],
  bookorder: state.products.BookOrderForm,
  productList: state.user.AllPartBulkMasterList,
  getAllPartMasterLoading: state.user.getAllPartMasterLoading,
  quantityform: state.products.primaryQuantity,
  cart: state.products.addtocart,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(ProductActions.changeSearchProductFilters(params)),
  clearcart: () => dispatch(ProductActions.ClearCart()),
  changeForm: (params) => dispatch(ProductActions.changeBookOrderForm(params)),
  getAllPartMaster: (params) => dispatch(UserActions.getAllPartMaster(params)),
  addProductCart: (params) => dispatch(ProductActions.addProductCart(params)),
  changeForm: (params) => dispatch(ProductActions.changeQuantityForm(params)),
  removeQuantityForm: () => dispatch(ProductActions.removeQuantityForm()),
  removeProductCart: (params) =>
    dispatch(ProductActions.removeProductCart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BulkOrder);
const Styles = StyleSheet.create({
  header: {
    height: hp("20%"),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },

  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  countBadge: {
    backgroundColor: Colors.white,
    padding: 0,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    height: wp("6%"),
    width: wp("6%"),
    top: "15%",
    position: "absolute",
    borderRadius: wp("10%"),
    left: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  countBadgeText: {
    color: Colors.primary,
    fontSize: wp("3%"),
  },
  heading: {
    alignSelf: "center",
    color: "white",
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 15,
    // width: '83%',
    borderRadius: 10,
    // paddingHorizontal: 20,
    //elevation: 10,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
    //  marginTop:-20,
    width: wp("65"),
    height: wp("9%"),
  },
  Screen1: {
    width: "85%",
    paddingBottom: 10,
    backgroundColor: "#fff",
    marginTop: "2%",
    marginBottom: "2%",
    marginHorizontal: 30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 3,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
