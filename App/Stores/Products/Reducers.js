/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { ProductTypes } from "./Actions";
import _ from "lodash";

export const getAllProductsSuccess = (state, { payload }) => {
  return {
    ...state,
    // productList: payload.productSearchableList,
    productList: payload,
    productdetailList: payload,
    getAllProductsLoading: false,
  };
};

export const getAllProductsFailure = (state, { payload }) => {
  return {
    ...state,
    getAllProductsLoading: false,
    productList: [],
    // ProductList:[],
  };
};

export const getAllProductsLoading = (state) => {
  return {
    ...state,
    getAllProductsLoading: true,
  };
};

export const getAllProductsLoadingStop = (state) => {
  return {
    ...state,
    getAllProductsLoading: false,
  };
};

export const fetchProductsBrandFailure = (state, { payload }) => {
  return {
    ...state,
    fetchProductsBrandLoader: false,
    productBrandList: [],
    BrandList: [],
  };
};

export const fetchProductsBrandLoading = (state) => {
  return {
    ...state,
    fetchProductsBrandLoader: true,
  };
};

export const fetchProductsBrandSuccess = (state, { payload }) => {
  return {
    ...state,
    productBrandList: payload.productSearchableList,
    BrandList: payload.successData,
    fetchProductsBrandLoader: false,
  };
};

export const getSecondaryProductFailure = (state, { payload }) => {
  return {
    ...state,
    getSecondaryProductLoader: false,
    secondaryList: [],
  };
};

export const getSecondaryProductLoading = (state) => {
  return {
    ...state,
    getSecondaryProductLoader: true,
  };
};

export const getSecondaryProductSuccess = (state, { payload }) => {
  return {
    ...state,
    secondaryList: payload,
    getSecondaryProductLoader: false,
  };
};

export const fetchProductsBrandLoadingStop = (state) => {
  return {
    ...state,
    fetchProductsBrandLoader: false,
  };
};

export const fetchProductCategoriesSuccess = (state, { payload }) => {
  return {
    ...state,
    productCategoryList: payload,
    fetchCategoryLoader: false,
  };
};

export const fetchProductCategoriesFailure = (state, { payload }) => {
  return {
    ...state,
    fetchCategoryLoader: false,
  };
};

export const fetchProductCategoriesLoading = (state) => {
  return {
    ...state,
    fetchCategoryLoader: true,
  };
};

export const fetchProductCategoriesLoadingStop = (state) => {
  return {
    ...state,
    fetchCategoryLoader: false,
  };
};

export const fetchProductGsmSuccess = (state, { payload }) => {
  return {
    ...state,
    productGsmList: payload,
    fetchGsmLoader: false,
  };
};

export const fetchProductGsmFailure = (state, { payload }) => {
  return {
    ...state,
    fetchGsmLoader: false,
    productGsmList: [],
  };
};

export const fetchProductGsmLoading = (state) => {
  return {
    ...state,
    fetchGsmLoader: true,
  };
};

export const fetchProductGsmLoadingStop = (state) => {
  return {
    ...state,
    fetchGsmLoader: false,
  };
};

export const fetchProductItemSuccess = (state, { payload }) => {
  return {
    ...state,
    productItemList: payload.successData,
    sizeList: payload.removeDuplicateSize,
    packagingList: payload.removeDuplicatePackaging,
    fetchItemLoader: false,
  };
};

export const fetchProductItemFailure = (state, { payload }) => {
  return {
    ...state,
    productItemList: {},
    fetchItemLoader: false,
  };
};

export const fetchProductItemLoading = (state) => {
  return {
    ...state,
    fetchItemLoader: true,
  };
};

export const fetchProductItemLoadingStop = (state) => {
  return {
    ...state,
    fetchItemLoader: false,
  };
};

export const fetchProductSubSubCategoriesSuccess = (state, { payload }) => {
  return {
    ...state,
    productSubSubCategoryList: payload,
    fetchSubSubCategoryLoader: false,
  };
};

export const fetchProductSubSubCategoriesFailure = (state, { payload }) => {
  return {
    ...state,
    fetchSubSubCategoryLoader: false,
  };
};

export const fetchProductSubSubCategoriesLoading = (state) => {
  return {
    ...state,
    fetchSubSubCategoryLoader: true,
  };
};

export const fetchProductSubSubCategoriesLoadingStop = (state) => {
  return {
    ...state,
    fetchSubSubCategoryLoader: false,
  };
};

export const changeSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    searchFilters: {
      ...state.searchFilters,
      ...updated_search_filters,
    },
  };
};

export const doNothing = (state) => ({
  ...state,
});

export const makeCategoryDisplayListSuccess = (state, { payload }) => {
  return {
    ...state,
    productCategoryDisplayList: _.cloneDeep(payload),
  };
};

export const makeSubCategoryDisplayListSuccess = (state, { payload }) => {
  return {
    ...state,
    productSubCategoryDisplayList: _.cloneDeep(payload),
  };
};

export const makeSubSubCategoryDisplayListSuccess = (state, { payload }) => {
  return {
    ...state,
    productSubSubCategoryDisplayList: _.cloneDeep(payload),
  };
};

export const fetchSchemesSuccess = (state, { payload }) => {
  return {
    ...state,
    schemes: payload,
    fetchSchemesLoader: false,
  };
};

export const fetchSchemesFailure = (state, { payload }) => {
  return {
    ...state,
    fetchSchemesLoader: false,
  };
};

export const fetchSchemesLoading = (state) => {
  return {
    ...state,
    fetchSchemesLoader: true,
  };
};

export const fetchSchemesLoadingStop = (state) => {
  return {
    ...state,
    fetchSchemesLoader: false,
  };
};

export const changeSchemesSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.schemesSearchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    schemesSearchFilters: {
      ...state.schemesSearchFilters,
      ...updated_search_filters,
    },
  };
};
export const changeSearchProductFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchProductFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    searchProductFilters: {
      ...state.searchProductFilters,
      ...updated_search_filters,
    },
  };
};

export const fetchProductItemPriceSuccess = (state, { payload }) => {
  return {
    ...state,
    productItemPriceList: payload,
    fetchItemPriceLoader: false,
  };
};

export const fetchProductItemPriceFailure = (state, { payload }) => {
  return {
    ...state,
    // productItemPriceList: {},
    fetchItemPriceLoader: false,
  };
};

export const fetchProductItemPriceLoading = (state) => {
  return {
    ...state,
    fetchItemPriceLoader: true,
  };
};

export const fetchProductItemPriceLoadingStop = (state) => {
  return {
    ...state,
    fetchItemPriceLoader: false,
  };
};

export const openDealerDiscountEdit = (state) => ({
  ...state,
  editDealerDiscount: true,
});

export const closeDealerDiscountEdit = (state) => ({
  ...state,
  editDealerDiscount: false,
});

export const changeDealerDiscountSuccess = (state, { payload }) => ({
  ...state,
  cart: payload,
});

export const clearProductFilter = (state) => ({
  ...state,
  // productGsmList: [],
  // productBrandList: [],
  // productItemList: [],
  // productItemPriceList: [],
  // sizeList: [],
  // packagingList: [],
  searchFilters: INITIAL_STATE.searchFilters,
  // sizeSearchFilters: INITIAL_STATE.sizeSearchFilters,
});

export const changeSizeForm = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.productSizeForm);
  updated_search_filters[payload.edited_field] = payload.edited_value.value;
  updated_search_filters[payload.edited_field1] = payload.edited_value.id;
  return {
    ...state,
    productSizeForm: {
      ...state.productSizeForm,
      ...updated_search_filters,
    },
  };
};

export const changeBookOrderForm = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.BookOrderForm);
  updated_search_filters[payload.edited_field] = payload.edited_value;
  //  updated_search_filters[payload.edited_field1] =   payload.edited_value1
  return {
    ...state,
    BookOrderForm: {
      ...state.BookOrderForm,
      ...updated_search_filters,
    },
  };
};

export const changeQuantityForm = (state, { payload }) => {
  // console.log("payloaddddd", payload);
  let updated_form = _.cloneDeep(state.primaryQuantity);
  updated_form[payload.edited_field] = payload.edited_value;
  updated_form[payload.edited_field1] = payload.edited_value1;
  return {
    ...state,
    primaryQuantity: {
      ...state.primaryQuantity,
      ...updated_form,
    },
  };
};

export const removeQuantityForm = (state, { payload }) => {
  return {
    ...state,
    primaryQuantity: INITIAL_STATE.primaryQuantity,
  };
};
export const clearSizeForm = (state, { payload }) => {
  return {
    ...state,
    productSizeForm: INITIAL_STATE.productSizeForm,
  };
};

export const clearBookOrderForm = (state, { payload }) => {
  return {
    ...state,
    BookOrderForm: INITIAL_STATE.BookOrderForm,
  };
};

export const clearFilter = (state, { payload }) => {
  return {
    ...state,

    searchProductFilters: INITIAL_STATE.searchProductFilters,
  };
};
export const updateSizeSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.sizeSearchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    sizeSearchFilters: {
      ...state.sizeSearchFilters,
      ...updated_search_filters,
    },
  };
};

export const getColorMixMasterSuccess = (state, { payload }) => {
  return {
    ...state,
    colorMixMasteList: payload,
    getColorMixMasterLoader: false,
  };
};

export const getColorMixMasterFailure = (state, { payload }) => {
  return {
    ...state,
    // productItemPriceList: {},
    getColorMixMasterLoader: false,
  };
};

export const getColorMixMasterLoading = (state) => {
  return {
    ...state,
    getColorMixMasterLoader: true,
  };
};

export const getColorMixMasterLoadingStop = (state) => {
  return {
    ...state,
    getColorMixMasterLoader: false,
  };
};

export const getProductSeriesSuccess = (state, { payload }) => {
  return {
    ...state,
    productSeriesList: payload,
    getProductSeries: false,
  };
};

export const getProductSeriesFailure = (state, { payload }) => {
  return {
    ...state,
    // productItemPriceList: {},
    getProductSeries: false,
  };
};

export const getProductSeriesLoading = (state) => {
  return {
    ...state,
    getProductSeries: true,
  };
};

export const getProductSeriesLoadingStop = (state) => {
  return {
    ...state,
    getProductSeries: false,
  };
};

export const getAllPackSizeSuccess = (state, { payload }) => {
  return {
    ...state,
    allPackSizeList: payload,
    getAllPackSize: false,
  };
};

export const getAllPackSizeFailure = (state, { payload }) => {
  return {
    ...state,
    // productItemPriceList: {},
    getAllPackSize: false,
  };
};

export const getAllPackSizeLoading = (state) => {
  return {
    ...state,
    getAllPackSize: true,
  };
};

export const getAllPackSizeLoadingStop = (state) => {
  return {
    ...state,
    getAllPackSize: false,
  };
};
export const fetchPlantSuccess = (state, { payload }) => {
  return {
    ...state,
    plantList: payload,
    plantListLoader: false,
  };
};

export const fetchPlantFailure = (state, { payload }) => {
  return {
    ...state,
    // productItemPriceList: {},
    plantList: [],
    plantListLoader: false,
  };
};

export const fetchPlantLoading = (state) => {
  return {
    ...state,
    plantListLoader: true,
  };
};

export const fetchPlantLoadingStop = (state) => {
  return {
    ...state,
    plantListLoader: false,
  };
};
export const addProductCartSuccess = (state, { payload }) => {
  return {
    ...state,
    addtocart: _.cloneDeep(payload),
  };
};
export const removeProductCartSuccess = (state, { payload }) => {
  return {
    ...state,
    addtocart: _.cloneDeep(payload),
  };
};
export const addPriceProductCartSuccess = (state, { payload }) => {
  return {
    ...state,
    addtoPricecart: _.cloneDeep(payload),
  };
};
export const removePriceProductCartSuccess = (state, { payload }) => {
  return {
    ...state,
    addtoPricecart: _.cloneDeep(payload),
  };
};

export const ShowMore = (state) => {
  return {
    ...state,
    showorders: true,
  };
};
export const ShowLess = (state) => {
  return {
    ...state,
    showorders: false,
  };
};
export const ClearCart = (state) => {
  return {
    ...state,
    addtocart: [],
    addtoPricecart: [],
  };
};

export const changeCountSuccess = (state, { payload }) => ({
  ...state,
  addtocart: _.cloneDeep(payload),
});

export const merchandiseTabFilter = (state, { payload }) => ({
  ...state,
  merchandiseTabFilter: payload,
});
export const InfluencerTabFilter = (state, { payload }) => ({
  ...state,
  InfluencerTabFilter: payload,
});

export const reducer = createReducer(INITIAL_STATE, {
  // fetchProducts: ['payload'],
  //[ProductTypes.GETALL_PRODUCTS]                       : getAllProducts,
  [ProductTypes.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
  [ProductTypes.GET_ALL_PRODUCTS_FAILURE]: getAllProductsFailure,
  [ProductTypes.GET_ALL_PRODUCTS_LOADING]: getAllProductsLoading,
  [ProductTypes.GET_ALL_PRODUCTS_LOADING_STOP]: getAllProductsLoadingStop,
  // fetchProductsBrand: ['payload'],
  [ProductTypes.FETCH_PRODUCTS_BRAND_SUCCESS]: fetchProductsBrandSuccess,
  [ProductTypes.FETCH_PRODUCTS_BRAND_FAILURE]: fetchProductsBrandFailure,
  [ProductTypes.FETCH_PRODUCTS_BRAND_LOADING]: fetchProductsBrandLoading,
  [ProductTypes.FETCH_PRODUCTS_BRAND_LOADING_STOP]: fetchProductsBrandLoadingStop,

  // fetchProductCategories: ['payload'],
  [ProductTypes.FETCH_PRODUCT_CATEGORIES_SUCCESS]: fetchProductCategoriesSuccess,
  [ProductTypes.FETCH_PRODUCT_CATEGORIES_FAILURE]: fetchProductCategoriesFailure,
  [ProductTypes.FETCH_PRODUCT_CATEGORIES_LOADING]: fetchProductCategoriesLoading,
  [ProductTypes.FETCH_PRODUCT_CATEGORIES_LOADING_STOP]: fetchProductCategoriesLoadingStop,

  [ProductTypes.UPDATE_SIZE_SEARCH_FILTERS]: updateSizeSearchFilters,

  // fetchProductSubCategories: ['payload'],
  [ProductTypes.FETCH_PRODUCT_GSM_SUCCESS]: fetchProductGsmSuccess,
  [ProductTypes.FETCH_PRODUCT_GSM_FAILURE]: fetchProductGsmFailure,
  [ProductTypes.FETCH_PRODUCT_GSM_LOADING]: fetchProductGsmLoading,
  [ProductTypes.FETCH_PRODUCT_GSM_LOADING_STOP]: fetchProductGsmLoadingStop,

  [ProductTypes.FETCH_PRODUCT_ITEM_SUCCESS]: fetchProductItemSuccess,
  [ProductTypes.FETCH_PRODUCT_ITEM_FAILURE]: fetchProductItemFailure,
  [ProductTypes.FETCH_PRODUCT_ITEM_LOADING]: fetchProductItemLoading,
  [ProductTypes.FETCH_PRODUCT_ITEM_LOADING_STOP]: fetchProductItemLoadingStop,

  // fetchProductSubSubCategories: ['payload'],
  [ProductTypes.FETCH_PRODUCT_SUB_SUB_CATEGORIES_SUCCESS]: fetchProductSubSubCategoriesSuccess,
  [ProductTypes.FETCH_PRODUCT_SUB_SUB_CATEGORIES_FAILURE]: fetchProductSubSubCategoriesFailure,
  [ProductTypes.FETCH_PRODUCT_SUB_SUB_CATEGORIES_LOADING]: fetchProductSubSubCategoriesLoading,
  [ProductTypes.FETCH_PRODUCT_SUB_SUB_CATEGORIES_LOADING_STOP]: fetchProductSubSubCategoriesLoadingStop,
  [ProductTypes.CHANGE_SEARCH_FILTERS]: changeSearchFilters,

  [ProductTypes.MAKE_CATEGORY_DISPLAY_LIST_SUCCESS]: makeCategoryDisplayListSuccess,
  [ProductTypes.MAKE_SUB_CATEGORY_DISPLAY_LIST_SUCCESS]: makeSubCategoryDisplayListSuccess,
  [ProductTypes.MAKE_SUB_SUB_CATEGORY_DISPLAY_LIST_SUCCESS]: makeSubSubCategoryDisplayListSuccess,

  [ProductTypes.FETCH_SCHEMES_SUCCESS]: fetchSchemesSuccess,
  [ProductTypes.FETCH_SCHEMES_FAILURE]: fetchSchemesFailure,
  [ProductTypes.FETCH_SCHEMES_LOADING]: fetchSchemesLoading,
  [ProductTypes.FETCH_SCHEMES_LOADING_STOP]: fetchSchemesLoadingStop,
  [ProductTypes.CHANGE_SCHEMES_SEARCH_FILTERS]: changeSchemesSearchFilters,
  [ProductTypes.DO_NOTHING]: doNothing,
  [ProductTypes.CLEAR_FILTER]: clearFilter,

  [ProductTypes.FETCH_PRODUCT_ITEM_PRICE_SUCCESS]: fetchProductItemPriceSuccess,
  [ProductTypes.FETCH_PRODUCT_ITEM_PRICE_FAILURE]: fetchProductItemPriceFailure,
  [ProductTypes.FETCH_PRODUCT_ITEM_PRICE_LOADING]: fetchProductItemPriceLoading,
  [ProductTypes.FETCH_PRODUCT_ITEM_PRICE_LOADING_STOP]: fetchProductItemPriceLoadingStop,

  [ProductTypes.OPEN_DEALER_DISCOUNT_EDIT]: openDealerDiscountEdit,
  [ProductTypes.CLOSE_DEALER_DISCOUNT_EDIT]: closeDealerDiscountEdit,
  [ProductTypes.CHANGE_DEALER_DISCOUNT_SUCCESS]: changeDealerDiscountSuccess,

  [ProductTypes.CLEAR_PRODUCT_FILTER]: clearProductFilter,

  [ProductTypes.CHANGE_SIZE_FORM]: changeSizeForm,
  [ProductTypes.CLEAR_SIZE_FORM]: clearSizeForm,

  [ProductTypes.GET_COLOR_MIX_MASTER_SUCCESS]: getColorMixMasterSuccess,
  [ProductTypes.GET_COLOR_MIX_MASTER_FAILURE]: getColorMixMasterFailure,
  [ProductTypes.GET_COLOR_MIX_MASTER_LOADING]: getColorMixMasterLoading,
  [ProductTypes.GET_COLOR_MIX_MASTER_LOADING_STOP]: getColorMixMasterLoadingStop,

  [ProductTypes.GET_PRODUCT_SERIES_SUCCESS]: getProductSeriesSuccess,
  [ProductTypes.GET_PRODUCT_SERIES_FAILURE]: getProductSeriesFailure,
  [ProductTypes.GET_PRODUCT_SERIES_LOADING]: getProductSeriesLoading,
  [ProductTypes.GET_PRODUCT_SERIES_LOADING_STOP]: getProductSeriesLoadingStop,

  [ProductTypes.GET_ALL_PACK_SIZE_SUCCESS]: getAllPackSizeSuccess,
  [ProductTypes.GET_ALL_PACK_SIZE_FAILURE]: getAllPackSizeFailure,
  [ProductTypes.GET_ALL_PACK_SIZE_LOADING]: getAllPackSizeLoading,
  [ProductTypes.GET_ALL_PACK_SIZE_LOADING_STOP]: getAllPackSizeLoadingStop,

  [ProductTypes.CHANGE_BOOK_ORDER_FORM]: changeBookOrderForm,
  [ProductTypes.CLEAR_BOOK_ORDER_FORM]: clearBookOrderForm,

  [ProductTypes.FETCH_PLANT_SUCCESS]: fetchPlantSuccess,
  [ProductTypes.FETCH_PLANT_FAILURE]: fetchPlantFailure,
  [ProductTypes.FETCH_PLANT_LOADING]: fetchPlantLoading,
  [ProductTypes.FETCH_PLANT_LOADING_STOP]: fetchPlantLoadingStop,
  [ProductTypes.CHANGE_SEARCH_PRODUCT_FILTERS]: changeSearchProductFilters,
  [ProductTypes.ADD_PRODUCT_CART_SUCCESS]: addProductCartSuccess,
  [ProductTypes.REMOVE_PRODUCT_CART_SUCCESS]: removeProductCartSuccess,
  [ProductTypes.ADD_PRICE_PRODUCT_CART_SUCCESS]: addPriceProductCartSuccess,
  [ProductTypes.REMOVE_PRICE_PRODUCT_CART_SUCCESS]: removePriceProductCartSuccess,
  [ProductTypes.SHOW_MORE]: ShowMore,
  [ProductTypes.SHOW_LESS]: ShowLess,
  [ProductTypes.CLEAR_CART]: ClearCart,

  [ProductTypes.GET_SECONDARY_PRODUCT_SUCCESS]: getSecondaryProductSuccess,
  [ProductTypes.GET_SECONDARY_PRODUCT_FAILURE]: getSecondaryProductFailure,
  [ProductTypes.GET_SECONDARY_PRODUCT_LOADING]: getSecondaryProductLoading,

  [ProductTypes.CHANGE_QUANTITY_FORM]: changeQuantityForm,
  [ProductTypes.REMOVE_QUANTITY_FORM]: removeQuantityForm,

  [ProductTypes.CHANGE_COUNT_SUCCESS]: changeCountSuccess,

  [ProductTypes.MERCHANDISE_TAB_FILTER]: merchandiseTabFilter,

  [ProductTypes.INFLUENCER_TAB_FILTER]: InfluencerTabFilter,
});
