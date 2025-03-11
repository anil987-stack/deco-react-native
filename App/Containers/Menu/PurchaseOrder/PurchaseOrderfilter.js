import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import InputNumber from "App/Components/FormInput/InputNumber";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
import VisitCard from "App/Containers/Visits/VisitCard";
// import VisitAction from '../VisitsDisplayScreen/VisitAction';
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import ProductActions from "App/Stores/Products/Actions";
import VisitOrderCartCard from "App/Containers/Visits/VisitOrderCartCard";
import ProductCartCard from "App/Components/ProductCartCard";
import SearchBar from "App/Components/SearchBar";
import { Colors } from "App/Theme";
import Style from "./PurchaseOrderFiltersStyles";
import SelectFiltersList from "./SelectFiltersList";
import CategoriesList from "./CategoriesList";
import SubCategoriesList from "./SubCategoriesList";
import SubSubCategoriesList from "./SubSubCategoriesList";
import SubSubSubCategoriesList from "./SubSubSubCategoriesList";
import Division from "./Division";
import _ from "lodash";

class PurchaseOrderfilter extends React.Component {
  onDeselect(params) {
    const {
      changeSearchFilters,
      makeSubCategoryDisplayList,
      makeSubSubCategoryDisplayList,
    } = this.props;

    let list = params.list;
    let value = params.value;
    _.remove(list, (item) => item == value);

    changeSearchFilters({
      edited_field: params.edited_field,
      edited_value: list,
    });

    if (params.edited_field == "selectedCategories") {
      makeSubCategoryDisplayList();
    }

    if (params.edited_field == "selectedSubCategories") {
      makeSubSubCategoryDisplayList();
    }
  }

  onSelect(params) {
    const {
      id,
      token,
      changeSearchFilters,
      fetchProductSubCategories,
      fetchProductSubSubCategories,
      fetchProductSubSubSubCategories,
      productSearchFilters,
    } = this.props;
    let list = params.list;
    let value = params.value;
    list.push(value);

    changeSearchFilters({
      edited_field: params.edited_field,
      edited_value: list,
    });

    // if (params.edited_field == "selectedCategories") {
    //   fetchProductSubCategories({
    //     // agentid: params.value,
    //     token: token,
    //   });
    // }

    // if (params.edited_field == "selectedSubCategories") {
    //   fetchProductSubSubCategories({
    //     productcategory: productSearchFilters.selectedCategories,
    //     token: token,
    //     productseries: params.value,
    //   });
    // }
    // if (params.edited_field == "selectedSubSubCategories") {
    //   fetchProductSubSubSubCategories({
    //     productcategory: productSearchFilters.selectedCategories,
    //     token: token,
    //     productseries: productSearchFilters.selectedSubCategories,
    //     packSize: params.value,
    //   });
    // }
  }

  clearFilters() {
    const {
      changeSearchFilters,
      makeSubCategoryDisplayList,
      makeSubSubCategoryDisplayList,
    } = this.props;

    changeSearchFilters({
      edited_field: "selectedCategories",
      edited_value: [],
    });
    changeSearchFilters({
      edited_field: "selectedSubCategories",
      edited_value: [],
    });
    // changeSearchFilters({
    //   edited_field: "selectedSubSubCategories",
    //   edited_value: [],
    // });
    // changeSearchFilters({
    //   edited_field: "selectedSubSubSubCategories",
    //   edited_value: [],
    // });
    // changeSearchFilters({
    //   edited_field: "selectedDivision",
    //   edited_value: [],
    // });
    changeSearchFilters({ edited_field: "name", edited_value: "" });
    makeSubCategoryDisplayList();
    makeSubSubCategoryDisplayList();
  }

  render() {
    const {
      token,
      agentid,
      changeSearchFilters,
      categoryFiltersList,
      productSearchFilters,
      productCategoryDisplayList,
      productSubCategoryDisplayList,
      productSubSubCategoryDisplayList,
      productSubSubSubCategoryDisplayList,
      fetchCategoryLoader,
      fetchSubCategoryLoader,
      fetchSubSubCategoryLoader,
      productDivisionList,
    } = this.props;
    let type = this.props.navigation.state.params;
    console.log(type, "jjj");
    let listNode = [];
    switch (productSearchFilters.selectedCategoryParentFilter) {
      case "categories":
        listNode = (
          <CategoriesList
            data={productCategoryDisplayList}
            loading={fetchCategoryLoader}
            selectedData={productSearchFilters.selectedCategories}
            onDeselect={(value) =>
              this.onDeselect({
                list: productSearchFilters.selectedCategories,
                value: value,
                edited_field: "selectedCategories",
              })
            }
            onSelect={(value) =>
              this.onSelect({
                list: productSearchFilters.selectedCategories,
                value: value,
                edited_field: "selectedCategories",
              })
            }
          />
        );
        break;
      case "sub_categories":
        listNode = (
          <SubCategoriesList
            loading={fetchSubCategoryLoader}
            data={productSubCategoryDisplayList}
            selectedData={productSearchFilters.selectedSubCategories}
            onDeselect={(value) =>
              this.onDeselect({
                list: productSearchFilters.selectedSubCategories,
                value: value,
                edited_field: "selectedSubCategories",
              })
            }
            onSelect={(value) =>
              this.onSelect({
                list: productSearchFilters.selectedSubCategories,
                value: value,
                edited_field: "selectedSubCategories",
              })
            }
          />
        );
        break;
      // case "sub_sub_categories":
      //   listNode = (
      //     <SubSubCategoriesList
      //       loading={fetchSubSubCategoryLoader}
      //       data={productSubSubCategoryDisplayList}
      //       selectedData={productSearchFilters.selectedSubSubCategories}
      //       onDeselect={(value) =>
      //         this.onDeselect({
      //           list: productSearchFilters.selectedSubSubCategories,
      //           value: value,
      //           edited_field: "selectedSubSubCategories",
      //         })
      //       }
      //       onSelect={(value) =>
      //         this.onSelect({
      //           list: productSearchFilters.selectedSubSubCategories,
      //           value: value,
      //           edited_field: "selectedSubSubCategories",
      //         })
      //       }
      //     />
      //   );
      //   break;
      // case "segment":
      //   listNode = (
      //     <SubSubSubCategoriesList
      //       loading={fetchSubSubCategoryLoader}
      //       data={productSubSubSubCategoryDisplayList}
      //       selectedData={productSearchFilters.selectedSubSubSubCategories}
      //       onDeselect={(value) =>
      //         this.onDeselect({
      //           list: productSearchFilters.selectedSubSubSubCategories,
      //           value: value,
      //           edited_field: "selectedSubSubSubCategories",
      //         })
      //       }
      //       onSelect={(value) =>
      //         this.onSelect({
      //           list: productSearchFilters.selectedSubSubSubCategories,
      //           value: value,
      //           edited_field: "selectedSubSubSubCategories",
      //         })
      //       }
      //     />
      //   );
      //   break;
      // case "division":
      //   listNode = (
      //     <Division
      //       loading={fetchSubSubCategoryLoader}
      //       data={productDivisionList}
      //       selectedData={productSearchFilters.selectedDivision}
      //       onDeselect={(value) =>
      //         this.onDeselect({
      //           list: productSearchFilters.selectedDivision,
      //           value: value,
      //           edited_field: "selectedDivision",
      //         })
      //       }
      //       onSelect={(value) =>
      //         this.onSelect({
      //           list: productSearchFilters.selectedDivision,
      //           value: value,
      //           edited_field: "selectedDivision",
      //         })
      //       }
      //     />
      //   );
      //   break;
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={Style.topContainer}>
          <View style={Style.filterActionsContainer}>
            <WhiteButton title={"Filter"} style={Style.filterActionButton} />
          </View>
          <View style={Style.filtersContainer}>
            <View style={Style.leftFiltersContainer}>
              <SelectFiltersList
                listData={categoryFiltersList}
                selectedFilter={
                  productSearchFilters.selectedCategoryParentFilter
                }
                onChange={(value) =>
                  changeSearchFilters({
                    edited_field: "selectedCategoryParentFilter",
                    edited_value: value,
                  })
                }
              />
            </View>
            <View style={Style.rightFiltersContainer}>
              <WhiteButton
                onPress={() => this.clearFilters()}
                title={"Reset filter"}
                style={Style.filterActionButton1}
                textStyle={{ fontSize: 11 }}
              />
              {listNode}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <WhiteButton
            onPress={() => {
              this.clearFilters(),
                type.show == "primary"
                  ? NavigationService.navigate("BookOrder")
                  : NavigationService.navigate("SecondaryBookOrder");
            }}
            title={"Cancel"}
            style={{ width: "50%", borderRadius: 0, height: 40 }}
            textStyle={{ fontSize: 13 }}
          />
          <WhiteButton
            onPress={() =>
              type.show == "primary"
                ? NavigationService.navigate("BookOrder")
                : NavigationService.navigate("SecondaryBookOrder")
            }
            title={"Apply"}
            style={{ width: "50%", borderRadius: 0, height: 40 }}
            textStyle={{ fontSize: 13 }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  agentid: state.user.id,
  token: state.user.token,
  productList: state.products.productList,
  productSearchFilters: state.products.searchFilters,
  categoryFiltersList: state.products.categoryFiltersList,
  productCategoryList: state.products.productCategoryList,
  productSubCategoryList: state.products.productSubCategoryList,
  productSubSubCategoryList: state.products.productSubSubCategoryList,
  productCategoryDisplayList: state.products.productCategoryList,
  productSubCategoryDisplayList: state.products.productSeriesList,
  productSubSubCategoryDisplayList: state.products.allPackSizeList,
  productSubSubSubCategoryDisplayList: state.products.colorMixMasteList,
  productDivisionList: state.products.productDivisionList,
  fetchCategoryLoader: state.products.fetchCategoryLoader,
  fetchSubCategoryLoader: state.products.fetchSubCategoryLoader,
  fetchSubSubCategoryLoader: state.products.fetchSubSubCategoryLoader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (params) => dispatch(ProductActions.fetchProducts(params)),
  fetchProductCategories: (params) =>
    dispatch(ProductActions.fetchProductCategories(params)),
  fetchProductSubCategories: (params) =>
    dispatch(ProductActions.getProductSeries(params)),
  fetchProductSubSubCategories: (params) =>
    dispatch(ProductActions.getAllPackSize(params)),
  fetchProductSubSubSubCategories: (params) =>
    dispatch(ProductActions.getColorMixMaster(params)),
  changeSearchFilters: (params) =>
    dispatch(ProductActions.changeSearchFilters(params)),
  makeSubCategoryDisplayList: () =>
    dispatch(ProductActions.makeSubCategoryDisplayList()),
  makeSubSubCategoryDisplayList: () =>
    dispatch(ProductActions.makeSubSubCategoryDisplayList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseOrderfilter);
