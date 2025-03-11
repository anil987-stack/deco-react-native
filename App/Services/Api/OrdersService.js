import axios from "axios";
import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});
const in200s = isWithin(200, 299);

const orderApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function fetchOrderDetails(params) {
  let url = Config.ORDERS_SERVICE.DETAIL;
  url += `?orderid=${params.order_id}`;

  if (!params.order_id) {
    return null;
  }

  return orderApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["order_line"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerOrderDetails(params) {
  let url = Config.ORDERS_SERVICE.DEALER_ORDER_DETAIL;
  url += `?orderid=${params.order_id}`;

  if (!params.order_id) {
    return null;
  }

  return orderApiClient
    .get(url, {
      headers: {
        token: params.token,

        //'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // console.log(response);
        return response["data"]["data"]["order_line"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchAllOrders(params) {
  console.log("jjjjjjjj", params);
  let url = Config.ORDERS_SERVICE.FETCH_ORDERS;
  // let month=HelperService.monthReadableFormat(HelperService.getCurrentTimestamp())
  url = url.replace("ownerid", `'${params.id}'`);
  url = url.replace("type", `'${params.type}'`);
  // url += `?Month=${params.month}`
  // console.log("paramsallorder", params, url);
  return orderApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data.records;
      }
      return null;
    })
    .catch((error) => {
      console.log("API FAIL=", error.response);
      return null;
    });
}
function fetchSecondaryOrders(params) {
  let url = Config.ORDERS_SERVICE.FETCH_SECONDARY_ORDERS;
  url = url.replace("orderid", `'${params.id}'`);
  // url += `?Month=${HelperService.monthReadableFormat(HelperService.getCurrentTimestamp())}`
  //   url += `?Month=${params.month}`;
  // console.log("paramssecondaryorder", params, url);
  return orderApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data.records;
      }
      return null;
    })
    .catch((error) => {
      console.log("API FAIL=", error.response);
      return null;
    });
}

function createPrimaryOrder(params) {
  // console.log("create parama", params);
  let url = Config.ORDERS_SERVICE.CREATE_PRIMARY_ORDER;

  return orderApiClient
    .post(url, params.form, {
      headers: {
        Authorization: "Bearer " + params.token,

        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("error", error.response);
      return null;
    });
}
function createSecondaryOrder(params) {
  // console.log("create parama", params);
  let url = Config.ORDERS_SERVICE.CREATE_SECONDARY_ORDER;

  return orderApiClient
    .post(url, params.form, {
      headers: {
        Authorization: "Bearer " + params.token,

        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("error", error.response);
      return null;
    });
}

function repeatOrder(params) {
  let url = Config.ORDERS_SERVICE.REPEAT_ORDER;
  url += `?order__c=${params.order__c}&order_date__c=${params.order_date__c}`;
  return orderApiClient
    .post(url, params, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getCustomerPrimaryOrder(params) {
  let url = Config.ORDERS_SERVICE.GET_CUSTOMER_PRIMARY_ORDER;

  url = url.replace("partyId", `'${params.partyId}'`);
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return orderApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        console.log(response, "response");
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      console.log("API FAIL=", error.response);
      return null;
    });
}

function OrderPrice(params) {
  let url = Config.ORDERS_SERVICE.ORDER_PRICE;

  // url = url.replace('partyId', `'${params.partyId}'` );
  // url = url.replace('month', `'${params.m}'`);
  console.log("orderPrice", params, url);
  return orderApiClient
    .post(url, params.form, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        console.log(response, "response");
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      console.log("API FAIL=", error.response);
      return null;
    });
}

export const ordersService = {
  repeatOrder,
  fetchAllOrders,
  fetchOrderDetails,
  fetchDealerOrderDetails,
  fetchSecondaryOrders,
  createPrimaryOrder,
  createSecondaryOrder,
  getCustomerPrimaryOrder,
  OrderPrice,
};
