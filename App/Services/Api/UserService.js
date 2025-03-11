import axios from "axios";
import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";
import _ from "lodash";
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

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null);
    });
  }

  let number = Math.floor(Math.random() / 0.1) + 1;

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data;
    }

    return null;
  });
}

function loginUser(params) {
  let url = Config.START_DAY_SERVICE.FETCH_GLOBLE_TOKEN_SERVICE;
  url = url.replace("userId", params.username);
  url = url.replace("passwordId", params.password);
  // console.log("urlll", url);
  return userApiClient
    .post(url, {
      headers: {
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
      console.log("jjjjjjjjj", error.response);
      return null;
    });
}

// function loginUser(params) {
//   console.log("params",params);

//  return userApiClient.get(Config.USER_SERVICE.LOGIN_URL, params
//     ).then((response) => {

//     if (in200s(response.status)) {
//       return response.data.data
//     }
//     return null
//   }).catch(error => {
//     return null
//   });
// }

function logoutUser(params) {
  let url = Config.USER_SERVICE.LOG_OUT;
  return userApiClient
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

function startDay(params) {
  //  console.log("hdhdhdhh",params);

  let requestParams = {
    Latitude: String(params.Latitude),
    Longitude: String(params.Longitude),
    AttendanceDate: params.AttendanceDate,
    UserID: params.UserID,
    Type: params.Type,
    StartDay: params.StartDay,
    StartTime: params.StartTime,
    Image: params.Image,
    TravelThrough: params.TravelThrough,
  };

  if (params.PresentType) {
    requestParams["PresentType"] = params.PresentType;
  }

  // console.log(requestParams);
  let url = Config.USER_SERVICE.START_DAY_URL;
  //console.log("rererrerer",requestParams,params.token,url);
  return userApiClient
    .post(url, requestParams, {
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
      // console.log("jjjjjjjjj", error.response);
      return null;
    });
}

// {
//     "recordId":"a04O000000aCt8vIAC",
//     "EndDay":"true",
//     "EndTime":"19:50:00",
//     "Latitude":"83.1474",
//     "Longitude":"89.5227",
//     "AttendanceDate":"2021-07-21",
//     "checkoutAddress":"Sector 17 Bus Stand Road,Najibabad, Uttar Pradesh 246763, India"
// }
function endDay(params) {
  // console.log(params);
  let requestParams = {
    recordId: params.recordId,
    Latitude: String(params.Latitude),
    Longitude: String(params.Longitude),
    EndDay: params.EndDay,
    EndTime: params.EndTime,
  };
  return userApiClient
    .post(Config.USER_SERVICE.END_DAY_URL, requestParams, {
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

function markUserAbsent(params) {
  let requestParams = {
    Latitude: String(params.Latitude),
    Longitude: String(params.Longitude),
    AttendanceDate: params.AttendanceDate,
    UserID: params.UserID,
    Type: params.Type,
    StartDay: params.StartDay,
    StartTime: params.StartTime,
    Image: params.Image,
    TravelThrough: params.TravelThrough,
    absentReason: params.AbsentType,
  };
  return userApiClient
    .post(Config.USER_SERVICE.START_DAY_URL, requestParams, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // todo:  change to (in200s(response.status))

        return response.data;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getAgentAreas(params) {
  //console.log("fetcharea",params);
  let url = Config.USER_SERVICE.FETCH_AREAS_URL;
  url += `?UserId=${params.userId}`;

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        // console.log(response);
        return response["data"]["Beats"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getAgentDetails(params) {
  let url = Config.USER_SERVICE.FETCH_AGENT_DETAILS;
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

function checkAttendance(params) {
  let url = Config.USER_SERVICE.CHECK_ATTENDANCE;
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
        // console.log(response);
        return response["data"]["records"][0];
      }
      return null;
    })
    .catch((error) => {
      // console.log(error.response, "hhhhhh");
      return null;
    });
}

function getAllPSM(params) {
  let url = Config.USER_SERVICE.FETCH_ALL_PSM;
  url += `'${params.userId}'`;

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.payload.token,
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

function getAppVersion(params) {
  // console.log("params, appdata",params)
  let url = Config.USER_SERVICE.GET_APP_VERSION;
  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response, appdata",response)
      if (in200s(response.status)) {
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      // console.log("error, appdata",error)

      return null;
    });
}

function fetchPjp(params) {
  // console.log("params",params)
  let url = Config.USER_SERVICE.FETCH_PJP;

  // console.log(month)
  url = url.replace("userId", `${params.userId}`);
  url = url.replace("month", `${params.m}`);

  // console.log(url);
  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function createPjp(params) {
  let url = Config.USER_SERVICE.CREATE_PJP;
  let formData = _.cloneDeep(params.form);
  formData = HelperService.removeField(formData, "local_id");
  // console.log(formData,"jjjj",url);
  return userApiClient
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
      // console.log("error",error.response);
      return null;
    });
}
function getOnboarding(params) {
  let url = Config.USER_SERVICE.GET_ONBOARDING;
  //  url += `'${params.userId}'`;
  url = url.replace("ownerid", `'${params.userId}'`);
  // url = url.replace("asmId", `'${params.asmId}'`);
  // url = url.replace("draft", `'${params.draft}'`);
  // console.log(url,"url");
  return userApiClient
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
      console.log(error.response, "errorrrrrrrrrr");
      return null;
    });
}
function getImageOnboarding(params) {
  let url = Config.MENU_SERVICE.GET_IMAGE_ONBOARDING;
  url += `${params.userId}`;

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchBeatPjp(params) {
  // console.log("params",params)
  let url = Config.USER_SERVICE.FETCH_BEAT_PJP;
  url = url.replace("beatId", `'${params.beatId}'`);

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        console.log(response,"pjpresponse");
        let responseData = response["data"]["records"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      console.log(error.response,"pjpbeat");
      return null;
    });
}

function fetchTotalOutlet(params) {
  // console.log("params",params)
  let url = Config.USER_SERVICE.FETCH_TOTAL_OUTLET;
  url = url.replace("beatId", `'${params.Beat__c}'`);

  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        let responseData = response["data"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function managerList(params) {
  // console.log("params",params)
  let url = Config.USER_SERVICE.MANAGER_LIST;
  url = url.replace("userId", `${params.userId}`);

  // console.log(url);
  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response["data"]["managers"];
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function submitApproval(params) {
  let url = Config.USER_SERVICE.SUBMIT_APPROVAL;
  let formData = _.cloneDeep(params.payload.form);
  // formData = HelperService.removeField(formData, 'local_id');

  return userApiClient
    .post(url, formData, {
      headers: {
        Authorization: "Bearer " + params.payload.token,
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
      // console.log(error.response,"error");
      return null;
    });
}
function approveRejectPjp(params) {
  let url = Config.USER_SERVICE.APPROVE_REJECT_PJP;
  let formData = _.cloneDeep(params.payload.form);
  // formData = HelperService.removeField(formData, 'local_id');

  return userApiClient
    .post(url, formData, {
      headers: {
        Authorization: "Bearer " + params.payload.token,
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
function getDivision(params) {
  // console.log("params", params);
  let url = Config.USER_SERVICE.GET_DIVISION;
  //  url = url.replace('userId',`${params.userId}`);
  url += `${params.userId}`;
  // console.log(url);
  return userApiClient
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
      // console.log("hhhh", error.response);
      return null;
    });
}

function getBranchMaster(params) {
  // console.log("params", params);
  let url = Config.USER_SERVICE.GET_BRANCH_MASTER;

  return userApiClient
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
      // console.log("hhhh", error.response);
      return null;
    });
}

function getAllPartMaster(params) {
  console.log("params", params);
  let url = Config.USER_SERVICE.GET_PART_MASTER;
  url = url.replace("vertical", `${params.vertical}`);
  url = url.replace("branch", `${params.branch}`);
  params.search ? (url += `&Param=${params.search}`) : null;
  console.log("lllllllll", url);
  return userApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        let responseData = response.data;
        return responseData;
      }
      return null;
    })
    .catch((error) => {
      console.log("hhhh", error.response);
      return null;
    });
}

export const userService = {
  fetchUser,
  loginUser,
  startDay,
  endDay,
  markUserAbsent,
  getAgentAreas,
  getAgentDetails,
  checkAttendance,
  getAllPSM,
  logoutUser,
  getAppVersion,
  fetchPjp,
  createPjp,
  getOnboarding,
  getImageOnboarding,
  fetchBeatPjp,
  fetchTotalOutlet,
  managerList,
  submitApproval,
  approveRejectPjp,
  getDivision,
  getBranchMaster,
  getAllPartMaster,
};
