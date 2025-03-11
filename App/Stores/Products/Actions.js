import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({
	getAllProducts: ['payload'],
	getAllProductsSuccess: ['payload'],
	getAllProductsFailure: ['payload'],
	getAllProductsLoading: null,
	getAllProductsLoadingStop: null,


	fetchProductsBrand: ['payload'],
	fetchProductsBrandSuccess: ['payload'],
	fetchProductsBrandFailure: ['payload'],
	fetchProductsBrandLoading: null,
	fetchProductsBrandLoadingStop: null,



	fetchProductCategories: ['payload'],
	fetchProductCategoriesSuccess: ['payload'],
	fetchProductCategoriesFailure: ['payload'],
	fetchProductCategoriesLoading: null,
	fetchProductCategoriesLoadingStop: null,

	makeCategoryDisplayList: ['payload'],
	makeSubCategoryDisplayList: ['payload'],
	makeSubSubCategoryDisplayList: ['payload'],


	makeCategoryDisplayListSuccess: ['payload'],
	makeSubCategoryDisplayListSuccess: ['payload'],
	makeSubSubCategoryDisplayListSuccess: ['payload'],


	fetchProductGsm: ['payload'],
	fetchProductGsmSuccess: ['payload'],
	fetchProductGsmFailure: ['payload'],
	fetchProductGsmLoading: null,
	fetchProductGsmLoadingStop: null,

	fetchProductItem: ['payload'],
	fetchProductItemSuccess: ['payload'],
	fetchProductItemFailure: ['payload'],
	fetchProductItemLoading: null,
	fetchProductItemLoadingStop: null,

	fetchProductItemPrice: ['payload'],
	fetchProductItemPriceSuccess: ['payload'],
	fetchProductItemPriceFailure: ['payload'],
	fetchProductItemPriceLoading: null,
	fetchProductItemPriceLoadingStop: null,



	fetchProductSubSubCategories: ['payload'],
	fetchProductSubSubCategoriesSuccess: ['payload'],
	fetchProductSubSubCategoriesFailure: ['payload'],
	fetchProductSubSubCategoriesLoading: null,
	fetchProductSubSubCategoriesLoadingStop: null,



	fetchSchemes: ['payload'],
	fetchSchemesSuccess: ['payload'],
	fetchSchemesFailure: ['payload'],
	fetchSchemesLoading: null,
	fetchSchemesLoadingStop: null,
	changeSchemesSearchFilters: ['payload'],


	changeSearchFilters: ['payload'],
	//changeSearchFiltersSuccess: ['payload'],

	doNothing: null,

	openDealerDiscountEdit: null,
  closeDealerDiscountEdit: null,
  changeDealerDiscount: ['payload'],
  changeDealerDiscountSuccess: ['payload'],

  changeSizeForm:['payload'],
  clearSizeForm: null,


  updateSizeSearchFilters: ['payload'],


  clearProductFilter:null,




  	getColorMixMaster: ['payload'],
	getColorMixMasterSuccess: ['payload'],
	getColorMixMasterFailure: ['payload'],
	getColorMixMasterLoading: null,
	getColorMixMasterLoadingStop: null,

	getProductSeries: ['payload'],
	getProductSeriesSuccess: ['payload'],
	getProductSeriesFailure: ['payload'],
	getProductSeriesLoading: null,
	getProductSeriesLoadingStop: null,

	getAllPackSize: ['payload'],
	getAllPackSizeSuccess: ['payload'],
	getAllPackSizeFailure: ['payload'],
	getAllPackSizeLoading: null,
	getAllPackSizeLoadingStop: null,

	changeBookOrderForm:['payload'],
	clearBookOrderForm:['payload'],

	fetchPlant:['payload'],
	fetchPlantSuccess:['payload'],
	fetchPlantFailure:null,
	fetchPlantLoading:null,
	fetchPlantLoadingStop:null,

	changeSearchProductFilters:['payload'],

	addProductCart:['payload'],
	
	addProductCartSuccess:['payload'],

	removeProductCart:['payload'],
	removeProductCartSuccess:['payload'],
	
	addPriceProductCart:['payload'],
	
	addPriceProductCartSuccess:['payload'],

	removePriceProductCart:['payload'],
	removePriceProductCartSuccess:['payload'],

	ShowMore:null,	
	ShowLess:null,	
	ClearCart:null,

	getSecondaryProduct:['payload'],
	getSecondaryProductSuccess:['payload'],
	getSecondaryProductFailure:null,
	getSecondaryProductLoading:null,

	changeQuantityForm:['payload'],
	removeQuantityForm:null,
	clearFilter:null,
	changeCount: ['payload'],
	changeCountSuccess: ['payload'],
	merchandiseTabFilter: ['payload'],
	InfluencerTabFilter: ['payload'],
});

export const ProductTypes = Types
export default Creators
