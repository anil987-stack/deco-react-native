import axios from "axios";
import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
import { Buffer } from "buffer";

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

const localApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function updateExpense(params) {
  // console.log("params",params);
  let url = Config.LOCAL_EXPENSE_SERVICE.UPDATE_EXPENSES;
  return localApiClient
    .post(url, params.data, {
      headers: {
        Authorization: "Bearer " + params.access_token,

        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)

      if (in200s(response.status)) {
        return response.data;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function approveRejectLocalExpense(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.APPROVE_REJECT_EXPENSE;

  return localApiClient
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
      return error;
    });
}

function addRemarkExpense(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.ADD_REMARK;
  url += `?id=${params.sfid}`;
  let formData = _.cloneDeep(params);
  formData = HelperService.removeField(formData, "agentid");
  formData = HelperService.removeField(formData, "token");
  formData = HelperService.removeField(formData, "sfid");
  return localApiClient
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

function sendForApproval(params) {
  // let formData = _.cloneDeep(params);

  // formData = HelperService.removeField(formData, 'token');
  return localApiClient
    .post(Config.LOCAL_EXPENSE_SERVICE.SEND_APPROVAL, params.form, {
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

function fetchLocalExpense(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_EXPENSES;
  url += `'${params.userId}'`;
  url = url.replace("month", `'${params.month}'`);
  console.log("jjjjjjjjjjjj", url);
  // url += `?expense_type=${params.expense_type}&month=${params.month}&type=${params.type}`;
  return localApiClient
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
      console.log("llllllllllll", error.response);
      return null;
    });
}
function fetchTeamExpense(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_TEAM_EXPENSES;
  url += `'${params.userId}'`;
  url = url.replace("month", `'${params.month}'`);
  url = url.replace("pending", `'${params.pending}'`);
  // url += `?expense_type=${params.expense_type}&month=${params.month}&type=${params.type}`;
  return localApiClient
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

function fetchExpenseItem(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_EXPENSE_ITEM;
  url += `${params.date}`;
  url = url.replace("expenseId", `'${params.expenseId}'`);
  console.log("urrlll", url);
  return localApiClient
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

function fetchDocumentId(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_DOCUMENT_ID;
  url += `'${params.id}'`;
  return localApiClient
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

function uploadLocalImage(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.UPLOAD_LOCAL_IMAGE;

  return localApiClient
    .post(url, params.params, {
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

function assignAttachment(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.ASSIGN_ATTACTMENT;

  return localApiClient
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

function fetchLocalImageId(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_LOCAL_IMAGE_ID;
  url += `'${params.id}'`;
  return localApiClient
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

function fetchLocalImageAttach(params) {
  // console.log("params",params)
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_LOCAL_IMAGE_ATTACHMENT;
  url = url.replace("Attach", params.attachmentId);
  // if (params.extension == 'jpeg' || params.extension == 'png'||params.extension == 'jpg') {
  return localApiClient
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + params.token,
      },
      responseType: "arraybuffer",
    })
    .then((response) => {
      if (in200s(response.status)) {
        let buffer = Buffer.from(response.data, "binary").toString("base64");
        return buffer;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
  // }
}

function localExpenseDetails(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.EXPENSE_DETAILS;
  url += `'${params.id}'`;
  return localApiClient
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

function fetchVisitImageAttach(params) {
  let url = Config.LOCAL_EXPENSE_SERVICE.FETCH_LOCAL_IMAGE_ATTACHMENT;
  url = url.replace("Attach", params.attachmentId);
  // if (params.extension == 'jpeg' || params.extension == 'png'||params.extension == 'jpg') {
  return localApiClient
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + params.token,
      },
      responseType: "arraybuffer",
    })
    .then((response) => {
      if (in200s(response.status)) {
        let buffer = Buffer.from(response.data, "binary").toString("base64");
        return buffer;
      }
      return null;
    })
    .catch((error) => {
      console.log(error.response,"hhh");
      return null;
    });
  // }
}
export const LocalExpenseService = {
  fetchLocalExpense,
  updateExpense,
  approveRejectLocalExpense,
  fetchExpenseItem,
  sendForApproval,
  addRemarkExpense,
  uploadLocalImage,
  fetchLocalImageId,
  fetchDocumentId,
  assignAttachment,
  fetchLocalImageAttach,
  fetchTeamExpense,
  localExpenseDetails,
  fetchVisitImageAttach,
};
