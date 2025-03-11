export const INITIAL_STATE = {
    fetchOrderDetailsLoader: false,
    allOrdersDetailsMapping:{}, //id mapping for order details
    allOrders: [],
    fetchAllOrdersLoader: false,
    selectedOrder: {},
    ordersLimit: 1000,
    ordersOffset: 0,
    secondaryOrder:[],
    primaryOrderForm:[
        
    ],
    primaryOrderFormLoader: false,
    secondaryOrderForm:[],
    secondaryOrderFormLoader:false,
    fetchSecondaryOrderLoader:false,
    repeatOrderLoader: false,
    customerprimaryList:[],
    getCustomerPrimaryOrderLoading:false,
    orderPrice:{},
    OrderPriceLoading:false,
}
