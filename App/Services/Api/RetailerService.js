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

const retailerApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function createRetailer(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "agentid");
  formData = HelperService.removeField(formData, "token");
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "team__c");
  //formData = HelperService.removeField(formData, 'postal_code');
  let url = Config.RETAILER_SERVICE.CREATE;
  url += `?team__c=${params.team__c}`;
  //url += params.type ? `&type=${params.type}` : '';

  return retailerApiClient
    .post(url, formData, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"][0];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function updateRetailer(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "agentid");
  formData = HelperService.removeField(formData, "token");
  const url = Config.RETAILER_SERVICE.UPDATE;
  url += `?team__c=${params.team__c}`;

  return retailerApiClient
    .post(url, formData, {
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

function EditRetailer(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "token");
  let url = Config.RETAILER_SERVICE.EDIT_RETAILER;
  return retailerApiClient
    .post(url, formData, {
      headers: {
        token: "Bearer " + params.token,
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

function fetchRetailers(params) {
  let url = Config.RETAILER_SERVICE.FETCH_RETAILERS;

  url += `${params.OwnerId}`;
  //url=url.replace('TRUE',params.boolean);

  console.log(url, "retailer");
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["AccList"];
      }
      return null;
    })
    .catch((error) => {
      console.log("error.res", error.response);
      return null;
    });
}

function fetchCreditLimit(params) {
  let url = Config.RETAILER_SERVICE.FETCH_CREDIT_LIMIT;
  url += `?account_id=${params.account_id}`;

  return retailerApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["divisions"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealers(params) {
  let url = Config.RETAILER_SERVICE.FETCH_DEALERS;
  url += `?offset=${params.offset}&limit=${params.limit}&type=Dealer`;
  url += params.area ? `&area_id=${params.area}` : "";
  url += params.search ? `&search=${params.search}` : "";
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchRetailerDealerByLocation(params) {
  let url = Config.RETAILER_SERVICE.SEARCH_BY_LOCATION;
  url += `?offset=${params.offset}&limit=${params.limit}`;
  url += params.latitude ? `&lat=${params.latitude}` : "";
  url += params.longitude ? `&long=${params.longitude}` : "";
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchRetailerOrders(params) {
  let url = Config.RETAILER_SERVICE.FETCH_ORDERS;
  url += `?offset=${params.offset}&limit=${params.limit}&sellerid=${params.seller_id}&type=${params.type}`;
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["orders"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerOrders(params) {
  let url = Config.RETAILER_SERVICE.FETCH_ORDERS;
  url += `?sfid=${params.sfid}&order_date=${params.date}`;
  return retailerApiClient
    .get(url, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function deleteOrderLine(params) {
  let url = Config.RETAILER_SERVICE.DELETE_ORDER_LINE;
  url += `?id=${params.id}`;
  return retailerApiClient
    .get(url, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function editOrderQuantity(params) {
  let url = Config.RETAILER_SERVICE.EDIT_ORDER_LINE;
  //url += `?id=${params.id}`;
  let formData = _.cloneDeep(params);

  formData = HelperService.removeField(formData, "token");

  return retailerApiClient
    .post(url, formData, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function addOrderLine(params) {
  let url = Config.RETAILER_SERVICE.ADD_ORDER_LINE;
  //url += `?id=${params.id}`;
  let formData = _.cloneDeep(params);

  formData = HelperService.removeField(formData, "token");

  return retailerApiClient
    .post(url, formData, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["order_line"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerInvoice(params) {
  let url = Config.RETAILER_SERVICE.FETCH_DEALER_INVOICE;
  url += `?offset=${params.offset}&limit=${params.limit}&sellerid=${params.seller_id}`;
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["dealer-invoices"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerOutstanding(params) {
  let url = Config.RETAILER_SERVICE.FETCH_DEALER_OUTSTANDING;
  url += `?offset=${params.offset}&limit=${params.limit}&sellerid=${params.seller_id}`;
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["outstandings"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerPayments(params) {
  let url = Config.RETAILER_SERVICE.FETCH_DEALER_PAYMENTS;
  url += `?sellerid=${params.seller_id}`;
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["payments"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function updateRetailerLocation(params) {
  // console.log(params,"gggg");
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.RETAILER_SERVICE.UPDATE_LOCATION;
  console.log(formData, "ffddd");

  return retailerApiClient
    .post(url, formData, {
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
      console.log(error.response, "response");
      return null;
    });
}

function fetchRetailerCompetitors(params) {
  // console.log("params",params)
  let url = Config.RETAILER_SERVICE.FETCH_COMPETITORS;
  // url += `?team__c=${params.team__c}`
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProducts(params) {
  let url = Config.RETAILER_SERVICE.FETCH_COMPETITORS_PRODUCTS;
  // url += `'${params.competitorId}'`;
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchInvoiceDetail(params) {
  let url = Config.RETAILER_SERVICE.INVOICE_DETAIL;
  url += `&invoiceid=${params.invoice_id}`;

  if (!params.invoice_id) {
    return null;
  }
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["invoice-line-items"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDealerOrderDetail(params) {
  let url = Config.RETAILER_SERVICE.DEALER_ORDER_DETAILS;
  url += `&orderid=${params.order_id}`;

  if (!params.invoice_id) {
    return null;
  }

  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["dealer-orederLineItems"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function submitPaymentsForm(params) {
  let url = Config.RETAILER_SERVICE.SUBMIT_PAYMENT;
  return retailerApiClient
    .post(
      url,
      { payment: params },
      {
        headers: {
          Authorization: "Bearer " + params.token,
          agentid: params.agentid,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getComplaintType(params) {
  let url = Config.RETAILER_SERVICE.GET_COMPLAINT_TYPE;
  // url += `?team__c=${params.team__c}`

  return userApiClient
    .get(url, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["complainType"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getComplaints(params) {
  let url = Config.RETAILER_SERVICE.GET_COMPLAINTS;
  // url += `?team__c=${params.team__c}`

  return userApiClient
    .get(url, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["complainType"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function createCompetitor(params) {
  let url = Config.RETAILER_SERVICE.CREATE_COMPETITOR;
  return retailerApiClient
    .post(
      url,
      { name: params.Name },
      {
        headers: {
          token: "Bearer " + params.token,
        },
      }
    )
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"][0];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDsr(params) {
  let url = Config.RETAILER_SERVICE.GET_DSR;
  url += `?sfid=${params.sfid}`;
  return retailerApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["DSR"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchDsrArea(params) {
  let url = Config.RETAILER_SERVICE.GET_DSR_AREA;
  url += `?sfid=${params.sfid}`;

  return retailerApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["areas"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function fetchDsrAreaList(params) {
  let url = Config.RETAILER_SERVICE.GET_DSR_AREA_L4;
  url += `?team__c=${params.sfid}`;

  return retailerApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["areas"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function createDsr(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");
  let url = Config.RETAILER_SERVICE.CREATE_DSR;
  return retailerApiClient
    .post(url, formData, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"][0];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function createDsrArea(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.RETAILER_SERVICE.ADD_DSR_AREA;
  url += `?id=${params.id}`;

  return retailerApiClient
    .post(
      url,
      { area: [formData.area__c] },
      {
        headers: {
          token: "Bearer " + params.token,
        },
      }
    )
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getDealerTicket(params) {
  let url = Config.RETAILER_SERVICE.RETAILER_TICKET;

  url = url.replace("dealer_id", `'${params.dealer_id}'`);
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
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

function getDealerInfo(params) {
  let url = Config.RETAILER_SERVICE.RETAILER_INFO;

  url = url.replace("dealer_id", `'${params.dealer_id}'`);
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
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

function getCustomerFocus(params) {
  let url = Config.RETAILER_SERVICE.CUSTOMER_FOCUS;

  url = url.replace("dealer_id", `'${params.dealer_id}'`);
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
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

function getCustomerGeneral(params) {
  let url = Config.RETAILER_SERVICE.CUSTOMER_GENERAL;

  url = url.replace("dealer_id", `'${params.dealer_id}'`);
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // console.log(response, "response");
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("API FAIL=", error.response);
      return null;
    });
}

function getDealerPoints(params) {
  let url = Config.RETAILER_SERVICE.DEALER_POINTS;

  url += `'${params.OwnerId}'`;
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
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

function getDealerGift(params) {
  let url = Config.RETAILER_SERVICE.DEALER_GIFT;

  url += `'${params.OwnerId}'`;
  // url = url.replace("month", `'${params.m}'`);
  // console.log("paramssecondaryorder", params, url);
  return retailerApiClient
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

export const retailerService = {
  createRetailer,
  updateRetailer,
  fetchRetailers,
  fetchDealers,
  fetchRetailerCompetitors,
  fetchRetailerOrders,
  updateRetailerLocation,
  fetchRetailerDealerByLocation,
  fetchDealerOrders,
  fetchDealerInvoice,
  fetchDealerOutstanding,
  fetchDealerPayments,
  fetchInvoiceDetail,
  submitPaymentsForm,

  EditRetailer,
  getComplaintType,
  getComplaints,
  getCustomerFocus,
  getCustomerGeneral,
  createCompetitor,
  fetchDsr,
  fetchDsrArea,
  createDsr,
  createDsrArea,
  fetchDsrAreaList,
  fetchCreditLimit,
  deleteOrderLine,
  editOrderQuantity,
  addOrderLine,
  fetchProducts,
  getDealerTicket,
  getDealerInfo,
  getDealerPoints,
  getDealerGift,
};
