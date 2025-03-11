import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	fetchOrderDetails: ['payload'],
	fetchDealerOrderDetails: ['payload'],
	fetchOrderDetailsLoading: null,
	fetchOrderDetailsSuccess: ['payload'],
	fetchOrderDetailsFailure: null,

	fetchAllOrders:['payload'],
	fetchAllOrdersLoading: null,
	fetchAllOrdersSuccess: ['payload'],
	fetchAllOrdersFailure: null,

	selectOrder: ['payload'],
	doNothing: null,	

	createPrimaryOrder: ['payload'],
	createPrimaryOrderSuccess: ['payload'],
	createPrimaryOrderFailure: null,
	createPrimaryOrderLoading: null,
	createPrimaryOrderLoadingStop: null,

	createSecondaryOrder: ['payload'],
	createSecondaryOrderSuccess: ['payload'],
	createSecondaryOrderFailure: null,
	createSecondaryOrderLoading: null,
	createSecondaryOrderLoadingStop: null,

	repeatOrder: ['payload'],
	repeatOrderLoading: ['payload'],
	repeatOrderSuccess: ['payload'],
	repeatOrderFailure: null,


	fetchSecondaryOrder:['payload'],
	fetchSecondaryOrderSuccess:['payload'],
	fetchSecondaryOrderFailure:null,
	fetchSecondaryOrderLoading:null,
	fetchSecondaryOrderLoadingStop:null,

	getCustomerPrimaryOrder:['payload'],
	getCustomerPrimaryOrderSuccess:['payload'],
	getCustomerPrimaryOrderFailure:null,
	getCustomerPrimaryOrderLoading:null,
	
	OrderPrice:['payload'],
	OrderPriceSuccess:['payload'],
	OrderPriceFailure:null,
	OrderPriceLoading:null,


});

export const OrdersTypes = Types
export default Creators
