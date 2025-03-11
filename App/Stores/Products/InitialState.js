export const INITIAL_STATE = {
  productList: [],
  productdetailList: [],
  // ProductList:[],
  getAllProductsLoading: false,
  fetchProductsLoadingStop: false,

  fetchProductsBrandLoader: false,
  fetchCategoryLoader: false,
  fetchGsmLoader: false,
  fetchSubSubCategoryLoader: false,
  fetchSchemesLoader: false,
  fetchItemLoader: false,
  fetchItemPriceLoader: false,
  productBrandList: [],
  BrandList: [],
  productItemList: [],
  productItemPriceList: [],
  schemesSearchFilters: {
    type: "Product Cat Level", //Order Level, Product Cat Level
  },
  filteredProductList: [],
  schemes: [],
  sizeList: [],
  packagingList: [],
  productCategoryList: [],
  productGsmList: [],
  productSubSubCategoryList: [],

  productCategoryDisplayList: [],
  productSubCategoryDisplayList: [],
  productSubSubCategoryDisplayList: [],

  searchFilters: {
    name: "",
    selectedCategories: [],
    selectedSubCategories: [],
    selectedSubSubCategories: [],
    selectedSubSubSubCategories: [],
    selectedDivision: [],
    selectedCategoryParentFilter: "categories",
  },
  categoryOffset: 0,
  categoryLimit: 1000,
  productLimit: 1000,
  productOffset: 0,
  categoryFiltersList: [
    { id: "categories", name: "Product Type 1" },
    { id: "sub_categories", name: "Product Type 2" },
    // { id: "sub_sub_categories", name: "Application" },
    // { id: "segment", name: "Segment" },
    // { id: "division", name: "Division" },
  ],

  productDivisionList: [
    { id: 1, Name: "AE" },
    { id: 2, Name: "FE" },
    { id: 3, Name: "FL" },
    { id: 4, Name: "LU" },
    { id: 5, Name: "PS" },
  ],

  editDiscountEdit: false,

  productSizeForm: {
    length: "",
    width: "",
    id: "",
  },

  sizeSearchFilters: {
    searchBy: "",
    searchValue: "",
  },

  getColorMixMasterLoader: false,
  getProductSeries: false,

  getAllPackSize: false,

  colorMixMasteList: [],
  productSeriesList: [],
  allPackSizeList: [],
  BookOrderForm: {
    cash_discount_available: false,
    quantity__c: "",
  },
  plantList: [],
  showorders: false,
  plantListLoader: false,
  addtocart: [],
  addtoPricecart: [],
  secondaryList: [],
  getSecondaryProductLoader: false,
  searchProductFilters: {
    name: "",
    bulk: "",
  },
  primaryQuantity: {
    id: "",
    quantity__c: "",
  },
  merchandiseTabFilter: "draft",
  InfluencerTabFilter: "draft",
};
