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

const menuApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function createOnboarding(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.CREATE_ONBOARDING;

  return menuApiClient
    .post(url, formData.form, {
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
      console.log("eeee", error.response);
      return null;
    });
}
function submitForApproval(params) {
  // console.log("params",params.payload.token)

  // let formData = _.cloneDeep(params.payload.payload);
  // formData = HelperService.removeField(formData, 'local_id');
  // formData = HelperService.removeField(formData, 'token');

  let url = Config.MENU_SERVICE.SUBMIT_APPROVAL;

  return menuApiClient
    .post(url, params.payload.payload, {
      headers: {
        Authorization: "Bearer " + params.payload.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        return response["data"];
      }
      return null;
    })
    .catch((error) => {
      console.log("gggffff", error.response);
      return null;
    });
}

function submitForApprovaReject(params) {
  let url = Config.MENU_SERVICE.SEND_APPROV_REJECT;

  url = url.replace("OnboardingId", `'${params.onboardingId}'`);
  url = url.replace("status", `'${params.status}'`);
  console.log("params", params, url);
  return menuApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("response", response);
      if (in200s(response.status)) {
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      console.log("errordgghjgkjdf", error);
      return null;
    });
}

function UploadImage(params) {
  console.log("params ",params);
  let url = Config.MENU_SERVICE.UPLOAD_IMAGE;
  let formData = _.cloneDeep(params.payload);
  // formData = HelperService.removeField(formData, "token");
  return menuApiClient
    .post(url, params.payload.form, {
      headers: {
        Authorization: "Bearer " + params.payload.token,
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
function UpdateOnboarding(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.UPDATE_ONBOARDING;
  return menuApiClient
    .post(url, formData.form, {
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
      console.log(error.response);
      return null;
    });
}
function CreateAgainstVisit(params) {
  let url = Config.MENU_SERVICE.CREATE_AGAINST_VISIT;
  return menuApiClient
    .post(url, params.form, {
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
function getVisitOnboarding(params) {
  let url = Config.MENU_SERVICE.GET_VISIT_ONBOARDING;
  url += `'${params.onboardingId}'`;
  return menuApiClient
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
function getLastVisit(params) {
  let url = Config.MENU_SERVICE.GET_LAST_VISIT;
  url = url.replace("distributorId", `'${params.distributorId}'`);
  url = url.replace("status", `'${params.status}'`);
  // url += `'${params.onboardingId}'`;
  return menuApiClient
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
function getcity(params) {
  let url = Config.MENU_SERVICE.GET_ON_CITY;
  url += `${params.userId}`;
  return menuApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["Cities"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function getCampaign(params) {
  let url = Config.MENU_SERVICE.GET_CAMPAIGN_ATTENDEES;
  url += `'${params.Id}'`;
  return menuApiClient
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
      console.log("error", error.response);
      return null;
    });
}
function getCompetitorScheme(params) {
  let url = Config.MENU_SERVICE.GET_COMPETITOR_SCHEME;
  url += `'${params.Id}'`;
  return menuApiClient
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
      console.log("error", error.response);
      return null;
    });
}
function fetchTicket(params) {
  let url = Config.MENU_SERVICE.FETCH_TICKET;
  url = url.replace("userId", `'${params.userId}'`);
  return menuApiClient
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
      console.log("error", error.response);
      return null;
    });
}
function createTicket(params) {
  let url = Config.MENU_SERVICE.CREATE_TICKET;
  // url = url.replace("userId", `'${params.userId}'`);
  // console.log(url,"url",params);
  return menuApiClient
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

function createCampaign(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.CREATE_CAMPAIGN;

  return menuApiClient
    .post(url, formData.form, {
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
      console.log("eeee", error.response);
      return null;
    });
}

function getCampaignRecord(params) {
  let url = Config.MENU_SERVICE.GET_CAMPAIGN;
  url += `'${params.userId}'`;
  // url = url.replace("user_id", `'${params.userId}'`);
  console.log("urrllll", url);
  return menuApiClient
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
      console.log("error", error.response);
      return null;
    });
}
function competitorMaster(params) {
  let url = Config.MENU_SERVICE.COMPETITOR_MASTER;
console.log("params",params);
  return menuApiClient
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
      console.log("error", error.response);
      return null;
    });
}
function createKycForm(params) {
  let url = Config.MENU_SERVICE.CREATE_KYC;
  // url = url.replace("userId", `'${params.userId}'`);
  console.log(url,params);
  return menuApiClient
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

function createCompetitorScheme(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.CREATE_COMPETITOR_SCHEME;

  return menuApiClient
    .post(url, formData.form, {
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
      console.log("eeee", error.response);
      return null;
    });
}

function createAttendee(params) {
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "local_id");
  formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.CREATE_ATTENDEE;

  return menuApiClient
    .post(url, formData.form, {
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
      console.log("eeee", error.response);
      return null;
    });
}

function updateCampaign(params) {
  console.log("kkkkkkkkkkkkkkk", params);
  // let formData = _.cloneDeep(params);
  // formData = HelperService.removeField(formData, "local_id");
  // formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.UPDATE_CAMPAIGN;

  return menuApiClient
    .post(url, params.payload, {
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
      console.log("eeee", error.response);
      return null;
    });
}

function updateKyc(params) {
  console.log("kkkkkkkkkkkkkkk", params);
  // let formData = _.cloneDeep(params);
  // formData = HelperService.removeField(formData, "local_id");
  // formData = HelperService.removeField(formData, "token");

  let url = Config.MENU_SERVICE.UPDATE_KYC;

  return menuApiClient
    .post(url, params.form, {
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
      console.log("eeee", error.response);
      return null;
    });
}

export const MenuService = {
  createOnboarding,
  UpdateOnboarding,
  UploadImage,
  submitForApproval,
  getVisitOnboarding,
  CreateAgainstVisit,
  getLastVisit,
  getcity,
  submitForApprovaReject,
  getCampaign,
  fetchTicket,
  createTicket,
  getCompetitorScheme,
  createCampaign,
  getCampaignRecord,
  createKycForm,
  competitorMaster,
  createCompetitorScheme,
  createAttendee,
  updateCampaign,
  updateKyc
};
