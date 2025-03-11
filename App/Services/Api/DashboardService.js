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

const dashboardApiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function getDashboardSummary(params) {
  let url = Config.DASHBOARD_SERVICE.DASHBOARD_DETAILS;
  url += `'${params.Id}'`;
  // url += "?";
  // url += `sfid=${params.psm__c}`;
  return dashboardApiClient
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

function getDashboardBanner(params) {
  let url = Config.DASHBOARD_SERVICE.DASHBOARD_BANNER;
  //   url += "?";
  //   url += `sfid=${params.psm__c}`;
  return dashboardApiClient
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
      console.log("bannerrr", error.response);
      return null;
    });
}

function getOrderValue(params) {
  let url = Config.DASHBOARD_SERVICE.ORDER_VALUE;
  url += `?`;
  url += params.startDate ? `startDate=${params.startDate}` : "";
  url += params.endDate ? `&endDate=${params.endDate}` : "";
  url += params.psm__c ? `&psm__c=${params.psm__c}` : "";
  url += `&offset=0`;
  url += `&limit=1000`;

  return dashboardApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["counters"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getCounters(params) {
  let url = Config.DASHBOARD_SERVICE.COUNTERS;
  url += `?`;
  url += params.startDate ? `startDate=${params.startDate}` : "";
  url += params.endDate ? `&endDate=${params.endDate}` : "";
  url += params.psm__c ? `&psm__c=${params.psm__c}` : "";
  url += `&offset=0`;
  url += `&limit=1000`;

  return dashboardApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["counters"];
      }
      return null;
    })
    .catch((error) => {
      console.log("API FAIL = ", error);
      return null;
    });
}

function getSiteCount(params) {
  let url = Config.DASHBOARD_SERVICE.SITE_COUNT;
  url += `?`;
  url += params.startDate ? `startDate=${params.startDate}` : "";
  url += params.endDate ? `&endDate=${params.endDate}` : "";
  url += params.psm__c ? `&psm__c=${params.psm__c}` : "";
  url += `&offset=0`;
  url += `&limit=1000`;

  return dashboardApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["counters"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getVisitCount(params) {
  let url = Config.DASHBOARD_SERVICE.VISIT_COUNT;
  url += `?`;
  url += params.startDate ? `startDate=${params.startDate}` : "";
  url += params.endDate ? `&endDate=${params.endDate}` : "";
  url += params.psm__c ? `&psm__c=${params.psm__c}` : "";
  url += `&offset=0`;
  url += `&limit=1000`;

  return dashboardApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["counters"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getEventCount(params) {
  let url = Config.DASHBOARD_SERVICE.EVENTS_COUNT;
  url += `?`;
  url += params.startDate ? `startDate=${params.startDate}` : "";
  url += params.endDate ? `&endDate=${params.endDate}` : "";
  url += params.psm__c ? `&psm__c=${params.psm__c}` : "";
  url += `&offset=0`;
  url += `&limit=1000`;

  return dashboardApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["counters"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getPrimarySummary(params) {
  let url = Config.DASHBOARD_SERVICE.PRIMARY_ORDER_SUMMARY;
  url = url.replace("user_id", `${params.user_id}`);
  return dashboardApiClient
    .get(url, {
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
      console.log("eerrorrr", error);
      return null;
    });
}
function getDashboardCampaign(params) {
  let url = Config.DASHBOARD_SERVICE.DASHBOARD_CAMPAIGN;
  url = url.replace("user_id", `${params.user_id}`);
  return dashboardApiClient
    .get(url, {
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
      console.log("eerrorrr", error);
      return null;
    });
}

function getDashboardVisit(params) {
  let url = Config.DASHBOARD_SERVICE.DASHBOARD_VISIT;
  url = url.replace("user_id", `${params.user_id}`);
  return dashboardApiClient
    .get(url, {
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
      console.log("eerrorrr", error);
      return null;
    });
}

function getSalesGeneral(params) {
  // console.log("jjjjjjjjj", params);
  let url = Config.DASHBOARD_SERVICE.FSO_GENERAL;
  url = url.replace("user_id", `'${params.user_id}'`);
  // console.log("kkkkkkkk", url);
  return dashboardApiClient
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
      // console.log("eerrorrr", error.response);
      return null;
    });
}
function getSalesFocus(params) {
  // console.log("jjjjjjjjj", params);
  let url = Config.DASHBOARD_SERVICE.FSO_FOCUSED;
  url = url.replace("user_id", `'${params.user_id}'`);
  // console.log("kkkkkkkk", url);
  return dashboardApiClient
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
      console.log("eerrorrr", error.response);
      return null;
    });
}

function getDashboardTicker(params) {
  let url = Config.DASHBOARD_SERVICE.DASHBOARD_TICKER;
  //   url += "?";
  //   url += `sfid=${params.psm__c}`;
  return dashboardApiClient
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
      console.log("bannerrr", error.response);
      return null;
    });
}

export const dashboardService = {
  getOrderValue,
  getCounters,
  getSiteCount,
  getVisitCount,
  getEventCount,
  getDashboardSummary,
  getDashboardBanner,
  getPrimarySummary,
  getDashboardCampaign,
  getDashboardVisit,
  getSalesGeneral,
  getSalesFocus,
  getDashboardTicker
};
