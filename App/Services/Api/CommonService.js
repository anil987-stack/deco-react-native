import axios from "axios";
import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";
import { HelperService } from "App/Services/Utils/HelperService";

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

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function getAgentAreaPjp(params) {
  let url = Config.COMMON_SERVICE.AREA_PJP;
  url += `?team_id__c=${params.team__c}`;
  // url += params.date ?`&date=${params.date}` : '';

  return userApiClient
    .get(url, {
      headers: {
        token: params.token,
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

function getObjective(params) {
  let url = Config.COMMON_SERVICE.GET_OBJECTIVE;

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["visitobjective"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function uploadImage(params) {
  let url = Config.COMMON_SERVICE.UPLOAD_IMAGE;
  return userApiClient
    .post(
      url,
      { image: [params.image] },
      {
        headers: {
          token: params.token,
        },
      }
    )
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["url"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getState(params) {
  let url = Config.COMMON_SERVICE.GET_STATE;

  return userApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["state"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getCity(params) {
  let url = Config.COMMON_SERVICE.GET_CITY;

  return userApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["city"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getAllTerritory(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_TERRITORY;
  url += `'${params.userId}'`;

  return userApiClient
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
function getUserTerritory(params) {
  let url = Config.COMMON_SERVICE.GET_USER_TERRITORY;
  url += `'${params.userId}'`;
  console.log("kkkkkkk", url);
  return userApiClient
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

function getAllCity(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_CITY;

  return userApiClient
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

function getBeat(params) {
  let url = Config.COMMON_SERVICE.GET_BEAT;
  url += params.payload.id ? `?id=${params.payload.id}` : "";

  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["beat"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function getRetailerArea(params) {
  let url = Config.COMMON_SERVICE.GET_RETAILER_AREA;
  url += params.payload.city ? `?city=${params.payload.city}` : "";

  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
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

function getDealerType(params) {
  let url = Config.COMMON_SERVICE.GET_DEALER_TYPE;
  url += `?type=${params.type}`;

  return userApiClient
    .get(url, {
      headers: {
        token: "Bearer " + params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["dealer_type"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getDistChannel(params) {
  let url = Config.COMMON_SERVICE.DIST_CHANNEL;
  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["dist_channel"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function getAllPlant(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_PLANT;
  url += `?area__c=${params.team__c}`;

  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["plants"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getIncoTerm(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_INCOTERM;

  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["incoterms"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getAllRoute(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_ROUTE;
  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["routes"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getAllInsurance(params) {
  let url = Config.COMMON_SERVICE.GET_ALL_INSURANCE;
  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["insurancetype"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getBillParty(params) {
  let url = Config.COMMON_SERVICE.GET_BILL_PARTY;
  url += `?id=${params.id}`;

  return userApiClient
    .get(url, {
      headers: {
        token: params.payload.token,
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

function getPartNumber(params) {
  let url = Config.COMMON_SERVICE.GET_PART_NUMBER;
  url = url.replace("part_no", `%25${params.part_no}%25`);
  console.log("kkkkkkkkk", url);
  return userApiClient
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
      return null;
    });
}

function getInventory(params) {
  let url = Config.COMMON_SERVICE.GET_INVENTORY;
  url = url.replace("branch_no", `'${params.branch_no}'`);
  url = url.replace("part_no", `'${params.part_no}'`);
  console.log("kkkkkkkkk", url);
  return userApiClient
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
      return null;
    });
}

function accountReport(params) {
  let url = Config.COMMON_SERVICE.ACCOUNT_REPORT;
  return userApiClient
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
      console.log("error", error.response);
      return null;
    });
}

export const CommonService = {
  getAgentAreaPjp,
  getObjective,
  uploadImage,
  getState,
  getCity,
  getBeat,
  getRetailerArea,
  getDealerType,
  getDistChannel,
  getAllPlant,
  getIncoTerm,
  getAllRoute,
  getAllInsurance,
  getBillParty,
  getAllCity,
  getAllTerritory,
  getUserTerritory,
  getPartNumber,
  getInventory,
  accountReport
};
