import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { OrdersTypes } from './Actions'
import _ from 'lodash';

export const fetchOrderDetailsLoading = (state) => ({
    ...state,
    fetchOrderDetailsLoading: true
}); 


export const fetchOrderDetailsSuccess = (state, {payload}) => {
	let updatedOrderDetailMapping = _.cloneDeep(state.allOrdersDetailsMapping);
	updatedOrderDetailMapping[payload.id] = payload.data
	return {
	    ...state,
	    fetchOrderDetailsLoading: false,
	    allOrdersDetailsMapping: updatedOrderDetailMapping
	}
}; 


export const fetchOrderDetailsFailure = (state) => ({
    ...state,
    fetchOrderDetailsLoading: false,
    allOrdersDetailsMapping:INITIAL_STATE. allOrdersDetailsMapping
}); 


export const fetchAllOrdersLoading = (state) => ({
    ...state,
    fetchAllOrdersLoader: true
}); 


export const fetchAllOrdersSuccess = (state, {payload}) => ({
    ...state,
    fetchAllOrdersLoader: false,
    allOrders: _.cloneDeep(payload)
}); 


export const fetchAllOrdersFailure = (state) => ({
    ...state,
    fetchAllOrdersLoader: false
}); 


export const selectOrder = (state, {payload}) => ({
    ...state,
    selectedOrder: payload
}); 


export const doNothing = (state) => ({
    ...state
});


export const repeatOrderLoading = (state,{payload}) => ({
    ...state,
    repeatOrderLoader: payload
}); 


export const repeatOrderSuccess = (state, {payload}) => ({
    ...state,
    repeatOrderLoader: false
}); 


export const repeatOrderFailure = (state) => ({
    ...state,
    repeatOrderLoader: false
}); 



export const fetchSecondaryOrderLoading = (state,{payload}) => ({
    ...state,
    fetchSecondaryOrderLoader: true
}); 
export const fetchSecondaryOrderLoadingStop = (state,{payload}) => ({
    ...state,
    fetchSecondaryOrderLoader: true
}); 


export const fetchSecondaryOrderSuccess = (state, {payload}) => ({
    ...state,
    secondaryOrder: payload,
    fetchSecondaryOrderLoader:false
}); 


export const fetchSecondaryOrderFailure = (state) => ({
    ...state,
    fetchSecondaryOrderLoader: true,
    secondaryOrder: [],
}); 

export const createPrimaryOrderSuccess = (state, { payload }) => {
    return {
        ...state,
        primaryOrderFormLoader: false,
        primaryOrderForm: payload
    }
  }
  export const createPrimaryOrderFailure = (state, { payload }) => {
    return {
        ...state,
        primaryOrderFormLoader: false
    }
  }
  export const createPrimaryOrderLoading = (state, { payload }) => {
    return {
        ...state,
        primaryOrderFormLoader: true 
    }
  }
  export const createPrimaryOrderLoadingStop = (state, { payload }) => {
    return {
        ...state,
        primaryOrderFormLoader: false 
    }
  }

  export const createSecondaryOrderSuccess = (state, { payload }) => {
    return {
        ...state,
        secondaryOrderFormLoader: false,
        secondaryOrderForm: INITIAL_STATE.secondaryOrderForm
    }
  }
  export const createSecondaryOrderFailure = (state, { payload }) => {
    return {
        ...state,
        secondaryOrderFormLoader: false
    }
  }
  export const createSecondaryOrderLoading = (state, { payload }) => {
    return {
        ...state,
        secondaryOrderFormLoader: true 
    }
  }
  export const createSecondaryOrderLoadingStop = (state, { payload }) => {
    return {
        ...state,
        secondaryOrderFormLoader: false 
    }
  }


  export const getCustomerPrimaryOrderSuccess = (state, { payload }) => {
    return {
        ...state,
        getCustomerPrimaryOrderLoading: false,
        customerprimaryList: payload
    }
  }
  export const getCustomerPrimaryOrderFailure = (state, { payload }) => {
    return {
        ...state,
        getCustomerPrimaryOrderLoading: false
    }
  }
  export const getCustomerPrimaryOrderLoading = (state, { payload }) => {
    return {
        ...state,
        getCustomerPrimaryOrderLoading: true 
    }
  }


  export const OrderPriceSuccess = (state, { payload }) => {
    return {
        ...state,
        OrderPriceLoading: false,
        orderPrice: payload
    }
  }
  export const OrderPriceFailure = (state, { payload }) => {
    return {
        ...state,
        OrderPriceLoading: false
    }
  }
  export const OrderPriceLoading = (state, { payload }) => {
    return {
        ...state,
        OrderPriceLoading: true 
    }
  }



export const reducer = createReducer(INITIAL_STATE, {
	[OrdersTypes.FETCH_ORDER_DETAILS_LOADING]           : fetchOrderDetailsLoading,
	[OrdersTypes.FETCH_ORDER_DETAILS_SUCCESS]           : fetchOrderDetailsSuccess,
	[OrdersTypes.FETCH_ORDER_DETAILS_FAILURE]           : fetchOrderDetailsFailure,
	[OrdersTypes.FETCH_ALL_ORDERS_LOADING]              : fetchAllOrdersLoading,
	[OrdersTypes.FETCH_ALL_ORDERS_SUCCESS]              : fetchAllOrdersSuccess,
	[OrdersTypes.FETCH_ALL_ORDERS_FAILURE]              : fetchAllOrdersFailure,
	[OrdersTypes.DO_NOTHING]               				: doNothing,
	[OrdersTypes.SELECT_ORDER]               			: selectOrder,

    [OrdersTypes.CREATE_PRIMARY_ORDER_SUCCESS]:  createPrimaryOrderSuccess,
    [OrdersTypes.CREATE_PRIMARY_ORDER_FAILURE]:  createPrimaryOrderFailure,
    [OrdersTypes.CREATE_PRIMARY_ORDER_LOADING]:  createPrimaryOrderLoading,
    [OrdersTypes.CREATE_PRIMARY_ORDER_LOADING_STOP]: createPrimaryOrderLoadingStop,

    [OrdersTypes.CREATE_SECONDARY_ORDER_SUCCESS]:  createSecondaryOrderSuccess,
    [OrdersTypes.CREATE_SECONDARY_ORDER_FAILURE]:  createSecondaryOrderFailure,
    [OrdersTypes.CREATE_SECONDARY_ORDER_LOADING]:  createSecondaryOrderLoading,
    [OrdersTypes.CREATE_SECONDARY_ORDER_LOADING_STOP]: createSecondaryOrderLoadingStop,
	//[OrdersTypes.REPEAT_ORDER]               			: repeatOrder,
	[OrdersTypes.REPEAT_ORDER_LOADING]               	: repeatOrderLoading,
	[OrdersTypes.REPEAT_ORDER_SUCCESS]               	: repeatOrderSuccess,
	[OrdersTypes.REPEAT_ORDER_FAILURE]      			: repeatOrderFailure,

    [OrdersTypes.FETCH_SECONDARY_ORDER_LOADING]               	: fetchSecondaryOrderLoading,
    [OrdersTypes.FETCH_SECONDARY_ORDER_LOADING_STOP]               	: fetchSecondaryOrderLoadingStop,
    [OrdersTypes.FETCH_SECONDARY_ORDER_SUCCESS]               	: fetchSecondaryOrderSuccess,
    [OrdersTypes.FETCH_SECONDARY_ORDER_FAILURE]               	: fetchSecondaryOrderFailure,

    [OrdersTypes.GET_CUSTOMER_PRIMARY_ORDER_LOADING]               	: getCustomerPrimaryOrderLoading,
    [OrdersTypes.GET_CUSTOMER_PRIMARY_ORDER_SUCCESS]               	: getCustomerPrimaryOrderSuccess,
    [OrdersTypes.GET_CUSTOMER_PRIMARY_ORDER_FAILURE]               	: getCustomerPrimaryOrderFailure,
  
    [OrdersTypes.ORDER_PRICE_LOADING]               	: OrderPriceLoading,
    [OrdersTypes.ORDER_PRICE_SUCCESS]               	: OrderPriceSuccess,
    [OrdersTypes.ORDER_PRICE_FAILURE]               	: OrderPriceFailure,

});

