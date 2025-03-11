import { ordersService } from "App/Services/Api/OrdersService";
import { getConnectionStatus } from "App/Stores/Common/Selectors";
import OrdersActions from "App/Stores/Orders/Actions";
import ProductActions from "App/Stores/Products/Actions";
import { call, put, select } from "redux-saga/effects";
import { HelperService } from "App/Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";

//fetchOrderDetails
//fetchAllOrders

export function* fetchOrderDetails({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.fetchOrderDetailsLoading());
  try {
    let successData = yield call(ordersService.fetchOrderDetails, payload);
    if (successData) {
      yield put(
        OrdersActions.fetchOrderDetailsSuccess({
          id: payload.order_id,
          data: successData,
        })
      );
    } else {
      yield put(OrdersActions.fetchOrderDetailsFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.fetchOrderDetailsFailure());
  }
}

export function* fetchDealerOrderDetails({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.fetchOrderDetailsLoading());

  try {
    let successData = yield call(
      ordersService.fetchDealerOrderDetails,
      payload
    );
    if (successData) {
      yield put(
        OrdersActions.fetchOrderDetailsSuccess({
          id: payload.order_id,
          data: successData,
        })
      );
    } else {
      yield put(OrdersActions.fetchOrderDetailsFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.fetchOrderDetailsFailure());
  }
}

export function* fetchAllOrders({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.fetchAllOrdersLoading());

  try {
    let successData = yield call(ordersService.fetchAllOrders, payload);
    if (successData) {
      yield put(OrdersActions.fetchAllOrdersSuccess(successData));
    } else {
      yield put(OrdersActions.fetchAllOrdersFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.fetchAllOrdersFailure());
  }
}
export function* fetchSecondaryOrder({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.fetchSecondaryOrderLoading());

  try {
    let successData = yield call(ordersService.fetchSecondaryOrders, payload);
    if (successData && successData.length) {
      yield put(OrdersActions.fetchSecondaryOrderSuccess(successData));
      console.log("successdata", successData);
    } else {
      yield put(OrdersActions.fetchSecondaryOrderFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.fetchSecondaryOrderFailure());
  }
}

export function* repeatOrder({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.repeatOrderLoading(payload.order__c));

  try {
    let successData = yield call(ordersService.repeatOrder, payload);
    if (successData) {
      yield put(OrdersActions.repeatOrderSuccess(successData));
      HelperService.showToast({
        message: "Order created Successfully.",
        duration: 1000,
        buttonText: "",
      });
      NavigationService.navigate("ReOrderInfoScreen", {
        id: payload.data.pg_id__c,
        data: payload.data,
      });
    } else {
      yield put(OrdersActions.repeatOrderFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.repeatOrderFailure());
  }
}

export function* createPrimaryOrder({ payload }) {
  // console.log("kkkkkkkkkk", payload);
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.createPrimaryOrderLoading());

  try {
    let successData = yield call(ordersService.createPrimaryOrder, payload);
    if (successData) {
      // console.log("jjjjjjjjjjjjjj", successData);
      yield put(OrdersActions.createPrimaryOrderSuccess(successData));
      HelperService.showToast({
        message: "Order created Successfully.",
        duration: 1000,
        buttonText: "",
      });
      yield put(ProductActions.ClearCart());
      yield put(ProductActions.clearBookOrderForm());
      if (payload.show == true) {
        NavigationService.navigate("PrimarySuccess")
      }
      else{
        NavigationService.navigate("SecondarySuccess")
      }
    } else {
      yield put(OrdersActions.createPrimaryOrderFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.createPrimaryOrderFailure());
  }
}

export function* createSecondaryOrder({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.createSecondaryOrderLoading());

  try {
    let successData = yield call(ordersService.createSecondaryOrder, payload);
    if (successData) {
      yield put(OrdersActions.createSecondaryOrderSuccess(successData));
    } else {
      yield put(OrdersActions.createSecondaryOrderFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.createSecondaryOrderFailure());
  }
}

export function* OrderPrice({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.OrderPriceLoading());

  try {
    let successData = yield call(ordersService.OrderPrice, payload);
    if (successData) {
      yield put(OrdersActions.OrderPriceSuccess(successData));
      // HelperService.showToast({ message: 'Order created Successfully.', duration: 1000, buttonText: '' });
      // yield put(ProductActions.ClearCart())
      // yield put(ProductActions.clearBookOrderForm())

      //  NavigationService.navigate('PurchaseOrder');
    } else {
      yield put(OrdersActions.OrderPriceFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.OrderPriceFailure());
  }
}

export function* getCustomerPrimaryOrder({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(OrdersActions.doNothing());
    return;
  }

  yield put(OrdersActions.getCustomerPrimaryOrderLoading());

  try {
    let successData = yield call(
      ordersService.getCustomerPrimaryOrder,
      payload
    );
    if (successData) {
      yield put(OrdersActions.getCustomerPrimaryOrderSuccess(successData));
    } else {
      yield put(OrdersActions.getCustomerPrimaryOrderFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(OrdersActions.getCustomerPrimaryOrderFailure());
  }
}
