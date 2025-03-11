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

const visitsApiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function fetchVisits(params) {
  let url = Config.VISITS_SERVICE.FETCH_VISITS_DISPLAY_LIST;
  url = url.replace("userId", `'${params.agentid}'`);
  // / url = url.replace('userId', params.userId);
  url = url.replace(
    "startDate",
    HelperService.dateReadableFormatWithHyphen(params.startDate)
  );
  url = url.replace(
    "endDate",
    HelperService.dateReadableFormatWithHyphen(params.endDate)
  );
  // url += `'${params.userId}'`;
  // console.log(url, "visiturl");

  return visitsApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"]["records"];

        return responseData;
      }
      return null;
    })
    .catch((error) => {
      // console.log("err", error.response);
      return null;
    });
}

function planVisit(params) {
  let url = Config.VISITS_SERVICE.PLAN_VISIT;

  // console.log("jjjjj", params, url);
  return visitsApiClient
    .post(
      url,
      { records: params.form },
      {
        headers: {
          Authorization: "Bearer " + params.token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["results"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("gggg", error.response);
      return null;
    });
}

function cancelVisit(params) {
  let url = Config.VISITS_SERVICE.CANCEL_VISIT;
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  return visitsApiClient
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
      return null;
    });
}

function editVisit(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.VISITS_SERVICE.EDIT_VISIT;

  return visitsApiClient
    .post(url, formData, {
      headers: {
        Authorization: "Bearer " + params.token,
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

function placeOrder(params) {
  let url = Config.VISITS_SERVICE.PLACE_ORDER;
  return visitsApiClient
    .post(url, params.payload, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
        //agentid: params.agentid,
        //'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["orderData"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function addVisitInfo(params) {
  let formData = _.cloneDeep(params);
  //  formData = HelperService.removeField(formData, 'local_id');
  formData = HelperService.removeField(formData, "token");

  let url = Config.VISITS_SERVICE.ADD_VISIT_INFO;

  return visitsApiClient
    .post(url, formData.payload, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["results"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function startVisit(params) {
  console.log("ttttttttttttt",params)
  let url = Config.VISITS_SERVICE.START_VISIT;
  // url += `?`;
  // url += params.visit_id ? `id=${params.visit_id}` : '';
  //url += params.agentid ? `&team__c=${params.agentid }` : '';
  // if (!params.visit_id) {
  // 	return null
  // }

  return visitsApiClient
    .post(url, params.payload, {
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
      HelperService.showToast({
        message: "Error! " + error.response.data.message,
        duration: 3000,
        buttonText: "Okay",
      });

      return null;
    });
}

function endVisit(params) {
  let url = Config.VISITS_SERVICE.END_VISIT;

  return visitsApiClient
    .post(url, params.payload, {
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
      return null;
    });
}

function fetchVisitInfo(params) {
  let url = Config.VISITS_SERVICE.FETCH_VISIT_INFO;
  // url += `?`;
  url += `'${params.visit_id}'`;
  // console.log("urllll", url);
  return visitsApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["records"][0];
      }
      return null;
    })
    .catch((error) => {
      // console.log("erorrrr", error.response);
      return null;
    });
}

function fetchVisitImage(params) {
  let url = Config.VISITS_SERVICE.FETCH_VISIT_IMAGE;
  // url += `?`;
  url += `'${params.id}'`;
  // if (!params.id) {
  // 	return null
  // }

  return visitsApiClient
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

function submitCompetitorForm(params) {
  let formData = _.cloneDeep(params);
  // formData = HelperService.removeField(formData, 'local_id');
  formData = HelperService.removeField(formData, "token");
  formData = HelperService.removeField(formData, "local_id");
  let url = Config.VISITS_SERVICE.SUBMIT_COMPETITOR;
  // console.log("formData",formData)
  return visitsApiClient
    .post(url, formData, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        return response["data"]["results"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("error", error);
      return null;
    });
}

function submitStockForm(params) {
  let url = Config.VISITS_SERVICE.SUBMIT_STOCK;
  url += `?visit__c=${params.visit__c}`;
  return visitsApiClient
    .post(url, params.form, {
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

function submitUpdateStockForm(params) {
  let url = Config.VISITS_SERVICE.UPDATE_STOCK;
  url += `?pg_id__c=${params.id}`;
  return visitsApiClient
    .post(url, params.form, {
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

function submitUpdateCompetitorForm(params) {
  let url = Config.VISITS_SERVICE.UPDATE_COMPETITOR;
  url += `?id=${params.id}`;
  return visitsApiClient
    .post(url, params.form, {
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

function getCompetitor(params) {
  let url = Config.VISITS_SERVICE.GET_COMPETITOR;
  url += `'${params.visitId}'`;

  // if (!params.visit_id) {
  // 	return null
  // }
  return visitsApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"]["records"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      //console.log(error.response)
      return null;
    });
}

function getStock(params) {
  // console.log("visit_id",params)
  let url = Config.VISITS_SERVICE.GET_STOCK;
  url += `?visits__c=${params.visit_id}`;

  if (!params.visit_id) {
    return null;
  }

  return visitsApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"]["visit_info_stock"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getParentAreas(params) {
  let url = Config.VISITS_SERVICE.GET_PARENT_AREAS;
  url += `?sfid=${params.sfid}`;

  if (!params.sfid) {
    return null;
  }

  return visitsApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"]["parents"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function createVisitInfo(params) {
  let formData = _.cloneDeep(params);
  //  formData = HelperService.removeField(formData, "agentid");
  formData = HelperService.removeField(formData, "token");
  formData = HelperService.removeField(formData, "local_id");
  // formData = HelperService.removeField(formData, "team__c");
  // formData = HelperService.removeField(formData.form, 'submitDistributorFormLoader');
  let url = Config.VISITS_SERVICE.VISIT_INFO;
  // url += `?team_c=${params.team_c}`;
  //url += params.type ? `&type=${params.type}` : '';

  return visitsApiClient
    .post(url, formData.form, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // console.log("visitinfooservice", response.data);
        return response.data;
      }
      return null;
    })
    .catch((error) => {
      // console.log("visitinfooerror", error.response);
      return null;
    });
}

function updateVisitInfo(params) {
  let formData = _.cloneDeep(params);
  //  formData = HelperService.removeField(formData, "agentid");
  formData = HelperService.removeField(formData, "token");
  formData = HelperService.removeField(formData, "local_id");
  // formData = HelperService.removeField(formData, "team__c");
  // formData = HelperService.removeField(formData.form, 'submitDistributorFormLoader');
  let url = Config.VISITS_SERVICE.UPDATE_VISIT_INFO;
  // url += `?team_c=${params.team_c}`;
  //url += params.type ? `&type=${params.type}` : '';

  return visitsApiClient
    .post(url, formData.form, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // console.log("visitinfooservice", response.data);
        return response.data;
      }
      return null;
    })
    .catch((error) => {
      // console.log("visitinfooerror", error.response);
      return null;
    });
}

export const visitsService = {
  fetchVisits,
  planVisit,
  cancelVisit,
  editVisit,
  placeOrder,
  addVisitInfo,
  endVisit,
  startVisit,
  fetchVisitInfo,
  fetchVisitImage,
  submitCompetitorForm,
  submitStockForm,
  getCompetitor,
  getStock,
  submitUpdateStockForm,
  submitUpdateCompetitorForm,
  getParentAreas,
  createVisitInfo,
  updateVisitInfo
};
