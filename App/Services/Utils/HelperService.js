import { Colors } from "App/Theme";
import moment from "moment";
import { Toast } from "native-base";
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from "react-native";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import DeviceInfo from "react-native-device-info";
import Geolocation from "react-native-geolocation-service";
import uuid from "react-native-uuid";
import base64 from "react-native-base64";
import RNFS from "react-native-fs";
import fileExt from "file-extension";
import { getDistance, getPreciseDistance } from "geolib";
var monthMapping = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var monthMap = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var monthMapping1 = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getNext60DayTimestamp() {
  return getCurrentTimestamp() + 60 * 24 * 60 * 60 * 1000;
}

function findDayMessage() {
  var data = [
      [0, 4, "Night"],
      [5, 12, "Morning"],
      [13, 17, "Afternoon"],
      [18, 24, "Night"],
    ],
    hr = new Date().getHours();

  for (var i = 0; i < data.length; i++) {
    if (hr >= data[i][0] && hr <= data[i][1]) {
      return data[i][2];
    }
  }
}

function showToast({
  message = "",
  buttonText = "Okay",
  duration = 1000,
  position = "bottom",
  style = "",
}) {
  if (Platform.OS == "android") {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  } else {
    Toast.show({
      text: message,
      buttonText: buttonText,
      duration: duration,
      position: position,
      style: style,
    });
  }
}

function isToday(timestamp) {
  var today = new Date();
  var dateParameter = new Date(timestamp);
  return (
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth() &&
    dateParameter.getFullYear() === today.getFullYear()
  );
}

function removeArrFromList(arr, toRemove) {
  let myArray = arr;
  for (let i = myArray.length - 1; i >= 0; i--) {
    for (let j = 0; j < toRemove.length; j++) {
      if (myArray[i] && myArray[i].id === toRemove[j].id) {
        myArray.splice(i, 1);
      }
    }
  }
  return JSON.stringify(myArray);
}

async function openLocationDialogBox() {
  let isLocationOn = false;
  try {
    isLocationOn = await LocationServicesDialogBox.checkLocationServicesIsEnabled(
      {
        message: `<h4 color=${Colors.primary}>Turn On Location? </h4`,
        style: {
          // (optional)
          backgroundColor: Colors.white, // (optional)
        },
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
        preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
        providerListener: false, // true ==> Trigger locationProviderStatusChange listener when the location state changes
      }
    );
  } catch (error) {
    console.log(error);
  }

  return isLocationOn;
}

async function requestLocation() {
  var geolocation;
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "App needs access to your location.",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        geolocation = await getGeolocation();
      } else {
        geolocation = "DENIED";
      }
    } catch (error) {
      if (error.code == 2) {
        //Location Provider not present
        const isLocationOn = await openLocationDialogBox();
        if (!isLocationOn) {
          //
          Alert.alert("Please turn On GPS and try again.");
          geolocation = null;
        } else {
          geolocation = await getGeolocation();
        }
      }
    }
  } else if (Platform.OS === "ios") {
    geolocation = await getGeolocation();
  }

  return geolocation;
}
async function requestLocationPermission() {
  //')
  let Permission = false;
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Storage Permission",
          message: "App needs access to your Location.",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Permission = true;
      } else {
        Permission = false;
      }
    } catch (err) {
      console.log(err);
      Permission = false;
    }
  } else if (Platform.OS === "ios") {
    Permission = true;
  }

  return Permission;
}

async function requestStoragePermission() {
  let storagePermission = false;
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message:
            "App needs access to your Storage to access and store photos.",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        storagePermission = true;
      } else {
        storagePermission = false;
      }
    } catch (err) {
      storagePermission = false;
    }
  } else if (Platform.OS === "ios") {
    storagePermission = true;
  }

  return storagePermission;
}

function getGeolocation() {
  try {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          const location = position;
          resolve({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        },
        (error) => {
          if (Platform.OS === "ios") {
            Alert.alert("Cant get Location, Make sure GPS is on.");
            reject(error);
          } else if (Platform.OS === "android") {
            reject(error);
          }
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  } catch (err) {
    reject(err);
  }
}

const callNumber = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};

const showDirectionInGoogleMaps = (lat, lng, searchLabel) => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${lat},${lng}`;
  const label = searchLabel || "Direction";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

function getHHMMSSform() {
  const Z = "Z";
  const milliseconds = Math.floor(new Date().getMilliseconds());
  const seconds = Math.floor(new Date().getSeconds());
  const minutes = Math.floor(new Date().getMinutes());
  const hours = Math.floor(new Date().getHours());

  return `${hours}:${minutes}:${seconds}.${milliseconds}${Z}`;
}
function getHMS() {
  const seconds = Math.floor(new Date().getSeconds());
  const minutes = Math.floor(new Date().getMinutes());
  const hours = Math.floor(new Date().getHours());

  return `${hours}:${minutes}:${seconds}`;
}

function showElapsedTime(timestamp) {
  // console.log("current",new Date(timestamp));

  //console.log("current",timestamp-new Date().getTime());
  var time = new Date(timestamp);
  time.setHours(time.getHours() - 5);
  time.setMinutes(time.getMinutes() - 30);
  time = Number(time);
  // console.log("current",new Date(time));
  try {
    if (time) {
      const since = time,
        elapsed = (new Date().getTime() - since) / 1000;
      //console.log(elapsed)

      if (elapsed >= 0) {
        let hours = Math.floor((elapsed / 3600) % 24);
        let minutes = Math.floor((elapsed / 60) % 60);
        let seconds = Math.floor(elapsed % 60);

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${hours} : ${minutes} : ${seconds}`;
      } else {
        return "00 : 00 : 00";
      }
    }
  } catch (error) {
    return "00 : 00 : 00";
  }
}

function convertToSearchableListFormat(params) {
  // console.log("convertjjjj",params);
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    return {
      id: obj[id_key],
      name: obj[label_key],
    };
  });

  return list;
}

function convertToSearchableListFormatWithCode(params) {
  // console.log("convertjjjj",params);
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;
  let name_key = params.name_key;

  list = list.map((obj) => {
    return {
      id: obj[id_key],
      name: obj[label_key] + " " + `(${obj[name_key]})`,
    };
  });

  return list;
}
function convertToSearchableListFormatPlant(params) {
  // console.log("convertjjjj",params);
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    // console.log("obj.Plant__r",obj.Plant__r)
    return {
      id: obj.Plant__r[id_key],
      name: obj.Plant__r[label_key],
    };
  });

  return list;
}

function convertToSearchablepjpListFormat(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    return {
      id: obj[id_key],
      name: obj.Beat__r[label_key],
    };
  });

  return list;
}
function convertToSearchablepjpBeatListFormat(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    return {
      id: obj[id_key],
      name: obj.Area_Master__r[label_key],
    };
  });

  return list;
}
function convertToSearchableListFormatLabel(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    return {
      value: obj[id_key],
      label: obj[label_key],
    };
  });

  return list;
}

function convertToSearchableListRetailerFormatLabel(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    console.log("objjjj", obj[id_key] == null);
    return {
      id: obj[id_key],
      name: obj.Area__r[label_key],
    };
  });

  return list;
}
function convertToDropDownListRetailerFormatLabel(params) {
  let list = params.list;
  // list = list.filter((item)=> {
  // 	return item.Account_Type__c == "DBA";
  //   })

  let id_key = params.id_key;
  let label_key = params.label_key;

  list = list.map((obj) => {
    return {
      value: obj[id_key],
      label: obj[label_key],
    };
  });

  return list;
}

function convertToSearchableListPjpFormat(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_key = params.label_key;

  list1 = [];
  list.map((obj) => {
    if (obj[id_key] && obj[label_key])
      list1.push({
        id: obj[id_key],
        name: obj[label_key],
      });
  });

  return list1;
}

function getAreaName(params) {
  let allAreas = params.areas;
  let selectedId = params.id;
  let selectedAreaName = "";
  allAreas.map((area) => {
    if (area.id == selectedId) {
      selectedAreaName = area.name;
    }
  });

  return selectedAreaName;
}

function getNameFromSFID(list, sfid, field = "") {
  let name = "";
  if (sfid) {
    if (field !== "")
      list.map((item) => {
        if (item.Id === sfid) {
          name = item[field];
        }
      });
    else {
      list.map((item) => {
        if (item.Id === sfid) {
          name = item.Name;
        }
      });
    }
  }
  if (name === "") {
    return "None";
  }
  return name;
}

function getSFIDFromName(list, name, field = "") {
  let sfid = "";
  if (name) {
    if (field !== "")
      list.map((item) => {
        if (item.name === name) {
          sfid = item[field];
        }
      });
    else {
      list.map((item) => {
        if (item.name === name) {
          sfid = item.id;
        }
      });
    }
  }
  if (sfid === "") {
    return "None";
  }
  return sfid;
}

function getRemovedObjArrList(list, toRemove, field) {
  let index = [];
  function findIndexInData(data, property, value) {
    for (let i = 0, l = data.length; i < l; i++) {
      if (data[i][property] === value) {
        return i;
      }
    }
    return -1;
  }

  for (let i in toRemove) {
    let value = findIndexInData(list, field, toRemove[i][field]);
    if (value !== -1) {
      index.push(value);
    }
  }

  for (let i = 0; i < index.length; i++) {
    if (i === 0) {
      list.splice(index[i], 1);
    } else {
      index[i] = index[i] - 1;
      list.splice(index[i], 1);
    }
  }

  return list;
}

function convertArrToRNPickerObj(list, field) {
  let transformList = [];
  list.map((item, id) => {
    return transformList.push({ id: item.sfid || id, name: item[`${field}`] });
  });
  return transformList;
}

function getCompetitorName(params) {
  let data = params.data;
  let selectedId = params.id;
  let selectedName = "";
  data.map((obj) => {
    if (obj.id == selectedId) {
      selectedName = obj.name;
    }
  });

  return selectedName;
}

function currencyValue(value) {
  if (!value) return "";
  return "₹" + value;
}

function FixedcurrencyValue(value) {
  if (!value) return "";
  return "₹" + value.toFixed(2);
}

function FixedDecimalValue(value) {
  if (!value) return "";
  return value.toFixed(2);
}

function calculateDiscount(value) {
  if (!value) return "";
  return "₹" + value;
}

function getCurrentDate(field) {
  if (field) {
    return new Date(field).getDate();
  } else {
    return new Date().getDate();
  }
}
function getCurrentMonth(field) {
  if (field) {
    return new Date(field).getMonth();
  } else {
    return new Date().getMonth();
  }
}
function dateReadableFormat(timestamp) {
  if (!timestamp) return "";
  let dateObj = new Date(timestamp);
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  return `${date}/${month}/${year}`;
}

function monthReadableFormat(timestamp) {
  if (!timestamp) return "";
  let dateObj = new Date(timestamp);
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;

  return `${month}`;
}

function yearReadableFormat(timestamp) {
  if (!timestamp) return "";
  let dateObj = new Date(timestamp);
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  return `${year}`;
}

function applySearch(list, searchIndex, searchInputRef) {
  const data = [];
  list.map((dataItem) => {
    let available = false;
    searchIndex &&
      searchIndex.map((index) => {
        if (
          String(dataItem[index])
            .toLowerCase()
            .includes(searchInputRef.toLowerCase())
        )
          available = true;
      });
    if (available) data.push(dataItem);
  });

  if (searchInputRef.length === 0) {
    return list;
  } else {
    return data;
  }
}

function searchTextListFilter(list, field, searchText, field2) {
  let text = searchText.toLowerCase();
  if (!text || text === "") {
    return list;
  }

  let filteredList = [];

  if (field2) {
    filteredList = list.filter((item) => {
      if (item[field] && item[field][field2]) {
        return item[field][field2].toLowerCase().match(text);
      } else {
        return false;
      }
    });
  } else {
    filteredList = list.filter((item) => {
      if (item[field]) {
        return item[field].toLowerCase().match(text);
      } else {
        return false;
      }
    });
  }

  if (!Array.isArray(filteredList) && !filteredList.length) {
    return [];
  }

  return filteredList;
}
function searchTextListVisitFilter(list, field, searchText, field2) {
  // console.log(list, field, searchText, field2)

  // let text = searchText;

  let dateObj = searchText ? new Date(searchText) : new Date();
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  let text = `${year}-${month}-${date}`;

  if (!text || text === "") {
    return list;
  }

  let filteredList = [];

  if (field2) {
    filteredList = list.filter((item) => {
      if (item[field] && item[field][field2]) {
        return item[field][field2].toLowerCase().match(text);
      } else {
        return false;
      }
    });
  } else {
    filteredList = list.filter((item) => {
      // console.log("item",item)
      if (item.PJP_Line__r[field]) {
        // let text_1 = new Date(item.PJP_Line__r[field]);
        // text_1 = text_1.getTime();
        // console.log(text_1)
        return item.PJP_Line__r[field].match(text);
      } else {
        return false;
      }
    });
  }
  // console.log("filteredList ee",filteredList)

  if (!Array.isArray(filteredList) && !filteredList.length) {
    return [];
  }

  return filteredList;
}

function multiFieldSearchText(list, searchText) {
  searchText = String(searchText).toLowerCase();
  return list.filter((o) =>
    Object.entries(o).some((entry) =>
      String(entry[1])
        .toLowerCase()
        .includes(searchText)
    )
  );
}

function searchArrayListFilter(list, searchArray, field) {
  if (!searchArray) return list;

  if (!searchArray.length) return list;

  let filteredList = list.filter((item) => {
    return item[field] && searchArray.indexOf(item[field]) > -1;
  });

  if (!Array.isArray(filteredList) && !filteredList.length) {
    return [];
  }

  return filteredList;
}

function searchInList(list, value, field) {
  if (!list) return "";

  if (!list.length) return "";

  if (!value) return "";

  let filteredList = list.filter((item) => {
    return item[field] == value;
  });

  if (!Array.isArray(filteredList) && !filteredList.length) {
    return [];
  }

  return filteredList[0];
}

function sortAsc(list, field) {
  let filteredList = list;
  filteredList.sort((a, b) =>
    a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0
  );
  return filteredList;
}

function sortDesc(list, field) {
  let filteredList = list;
  filteredList.sort((a, b) =>
    a[field] < b[field] ? 1 : b[field] < a[field] ? -1 : 0
  );
  return filteredList;
}
function sortDesc1(list, field) {
  let filteredList = list;
  filteredList.sort((a, b) => b[field] - a[field]);
  return filteredList;
}

function sortListFilter(list, field, sortType) {
  let filteredList = list;

  if (!filteredList.length) {
    return [];
  }

  if (!field || !sortType) {
    return filteredList;
  }

  filteredList =
    sortType == "ASC"
      ? sortAsc(filteredList, field)
      : sortDesc(filteredList, field);
  return filteredList;
}

const decorateWithLocalId = (payload) => ({
  local_id: uuid.v1(),
  ...payload,
});

const decorateWithrefId = (payload) => ({
  referenceId: uuid.v1(),
  ...payload,
});

function getCurrentTimestamp() {
  return new Date().getTime();
}

function convertStringToDate(timestring) {
  return moment(timestring).unix() * 1000;
}

function convertDateToString(timestamp) {
  return new Date(timestamp).toDateString();
}

function getPreviousNDayTimestamp(days, timestamp) {
  if (!timestamp) {
    timestamp = getCurrentTimestamp();
  }
  return timestamp - days * 24 * 60 * 60 * 1000;
}

function getNextNDayTimestamp(days, timestamp) {
  if (!timestamp) {
    timestamp = getCurrentTimestamp();
  }
  return timestamp + days * 24 * 60 * 60 * 1000;
}

function getPrevious7DayTimestamp() {
  return getCurrentTimestamp() - 7 * 24 * 60 * 60 * 1000;
}

function getNext7DayTimestamp() {
  return getCurrentTimestamp() + 7 * 24 * 60 * 60 * 1000;
}

function removeField(obj, fieldName) {
  delete obj[fieldName];
  return obj;
}

function interChangeValue(obj, fieldName, value) {
  //console.log(value)
  //console.log(value)

  obj[fieldName] = value;
  //console.log(obj[fieldName])

  //console.log(obj)
  return obj;
}

function getMonthMappingName(index) {
  return monthMapping[index];
}
function getMonthMappingFullName(index) {
  return monthMapping1[index];
}
function getMonthindex(index) {
  return monthMap[index];
}

function getMonthName(date) {
  let dateObj = new Date();

  if (date) {
    dateObj = new Date(date);
  }

  return monthMapping[dateObj.getMonth()];
}
function getMonthFullName(date) {
  let dateObj = new Date();

  if (date) {
    dateObj = new Date(date);
  }

  return monthMapping1[dateObj.getMonth()];
}

function getPreviousMonth(month) {
  //month index, retuuns Previous Month name
  let currentMonth = month;
  if (currentMonth == 0) {
    currentMonth = monthMapping.length - 1;
  } else {
    currentMonth = currentMonth - 1;
  }

  return currentMonth;
}
function getPreviousFullMonth(month) {
  //month index, retuuns Previous Month name
  let currentMonth = month;
  if (currentMonth == 0) {
    currentMonth = monthMapping1.length - 1;
  } else {
    currentMonth = currentMonth - 1;
  }

  return currentMonth;
}

function getNextMonth(month) {
  //month index, retuuns Next Month name
  let currentMonth = month;
  if (currentMonth == 11) {
    currentMonth = 0;
  } else {
    currentMonth = currentMonth + 1;
  }

  return currentMonth;
}
function getNextFullMonth(month) {
  //month index, retuuns Next Month name
  let currentMonth = month;
  if (currentMonth == 11) {
    currentMonth = 0;
  } else {
    currentMonth = currentMonth + 1;
  }

  return currentMonth;
}

function getDeviceId() {
  let uniqueId = DeviceInfo.getUniqueId();
  return uniqueId;
}

function findMatchingKeyValueInList(
  list,
  matchingKey,
  matchingValue,
  matchingValueKey
) {
  let result = [];
  result = list.filter((obj) => obj[matchingKey] == matchingValue);

  if (result && result[0]) {
    return result[0][matchingValueKey];
  }
  return "";
}

function getMonthStartAndEndDateTimestamp(
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) {
  var firstDay = null;
  var lastDay = null;
  firstDay = new Date(year, month, 1);
  lastDay = new Date(year, month + 1, 0);
  return [firstDay.getTime(), lastDay.getTime()];
}

function getFirstName(name) {
  return name
    .split(" ")
    .slice(0, 1)
    .join(" ");
}

function getLastName(name) {
  return name
    .split(" ")
    .slice(1)
    .join(" ");
}

function showAlert({ heading, message, onSuccess }) {
  return new Promise((resolve, reject) => {
    Alert.alert(
      heading,
      message,
      [
        {
          text: "Cancel",
          onPress: () => reject("canceled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: onSuccess ? onSuccess : () => resolve("confirmed"),
        },
      ],
      { cancelable: false }
    );
  });
}

const datesAreOnSameDay = (first, second) => {
  first = new Date(Number(first));
  second = new Date(Number(second));
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};
const getIdFormBeat_c = (list, second) => {
  // first = new Date(Number(first));
  let filteredList = list.filter((item) => {
    // console.log("item",item);
    if (item.Area_Master__c == second) {
      // console.log("item.Id",item.Id)
      return item.Area_Master__c;
    }
    //  else {
    // 	return false
    // }
  });
  return filteredList[0];
};
const datesAreOnSameDay1 = (first, second) => {
  first = new Date(first);
  second = new Date(Number(second));
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

const datesAreOnRangeLess = (first, second) => {
  first = new Date(Number(first));
  second = new Date(Number(second));

  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    //third.getMonth() === second.getMonth()&&

    first.getDate() <= second.getDate()
  );
};

const datesAreOnRangeMore = (first, second) => {
  first = new Date(Number(first));
  second = new Date(Number(second));

  return (
    //third.getMonth() === second.getMonth()&&

    second.getDate() <= first.getDate()
  );
};

const getVisitsDisplayDate = (timestamp) => {
  if (!timestamp) return "";
  let dateObj = new Date(timestamp);
  let date = dateObj.getDate();
  let month = dateObj.getMonth();
  date = date < 10 ? "0" + date : date;
  return isToday(timestamp)
    ? `Today (${date} ${monthMapping[month]})`
    : `(${date} ${monthMapping[month]})`;
};

const getDashboardDisplayDate = (start, end) => {
  return getDisplayDate(start) + "-" + getDisplayDate(end);
};

const getDisplayDate = (timestamp) => {
  if (!timestamp) return "";
  let dateObj = new Date(timestamp);
  let date = dateObj.getDate();
  let month = dateObj.getMonth();
  date = date < 10 ? "0" + date : date;
  return `${date} ${monthMapping[month]}`;
};

const getPreviousDayTimestamp = (timestamp) => {
  return timestamp - 1 * 24 * 60 * 60 * 1000;
};

const getNextDayTimestamp = (timestamp) => {
  return timestamp + 1 * 24 * 60 * 60 * 1000;
};

const convertMomentObjectToUnix = (momentObj) => {
  return momentObj.unix() * 1000 + 5.5 * 60 * 60 * 1000;
};

const convertMomentDateToTimestamp = (date) => {
  return moment(date).valueOf();
};

const getBase64DecodeValue = (data) => {
  if (data) {
    return base64.decode(data);
  }
  return "";
};

function dateReadableFormatWithHyphen(timestamp) {
  let dateObj = timestamp ? new Date(timestamp) : new Date();
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  return `${year}-${month}-${date}`;
}
function dateReadableMonth(timestamp) {
  let dateObj = timestamp ? new Date(timestamp) : new Date();
  let date = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  return `${month}`;
}

function removeTimestringFromDate(date) {
  if (!date) {
    return "";
  }

  date = date.split("T");
  date = date[0]
    .split("-")
    .reverse()
    .join("-");
  return date;
}

function removeTimestringFromDate1(date) {
  if (!date) {
    return "";
  }

  date = date.split("T");
  date = date[0];
  return date;
}

function removeNull(array) {
  return array.filter((x) => x !== null);
}

const moveFileToAbsolutePath = (fileUrl, name) => {
  let abspath = RNFS.DocumentDirectoryPath;
  let ext = fileExt(fileUrl);
  return `${abspath}/${name}.${ext}`;
};

const removeDuplicateVisits = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (!mapping[obj.pg_id__c]) {
      mapping[obj.pg_id__c] = obj;
    }
  });

  let visits = [];

  Object.keys(mapping).map((key) => {
    visits.push(mapping[key]);
  });

  return visits;
};

const removeSfidNullitem = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (obj.sfid) {
      mapping[obj.sfid] = obj;
    }
  });

  let items = [];

  Object.keys(mapping).map((key) => {
    items.push(mapping[key]);
  });

  return items;
};

const removeDuplicateitem = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (!mapping[obj.sfid] || !obj.sfid) {
      mapping[obj.sfid] = obj;
    }
  });

  let items = [];

  Object.keys(mapping).map((key) => {
    items.push(mapping[key]);
  });

  return items;
};
function numberWithCommas(x) {
  x = Number(x);
  if (x % 1) {
    //number is a decimal
    return x;
  }

  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res;
}

const removeDuplicateBeat = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (!mapping[obj.id] && obj.id != null) {
      mapping[obj.id] = obj;
    }
  });

  let beats = [];

  Object.keys(mapping).map((key) => {
    beats.push(mapping[key]);
  });

  return beats;
};

const removeDuplicateLabel = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (!mapping[obj.label] && obj.label != null) {
      mapping[obj.label] = obj;
    }
  });

  let beats = [];

  Object.keys(mapping).map((key) => {
    beats.push(mapping[key]);
  });

  return beats;
};

const removeDuplicateProduct = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (!mapping[obj.name] && obj.id != null) {
      mapping[obj.name] = obj;
    }
  });

  let beats = [];

  Object.keys(mapping).map((key) => {
    beats.push(mapping[key]);
  });

  return beats;
};

const visitTypeToAvatarTextAndBgColorMapping = {
  Retailer: {
    text: "R",
    bgColor: Colors.lightBg1,
  },
  Dealer: {
    text: "D",
    bgColor: Colors.lightBg2,
  },
  Sites: {
    text: "L",
    bgColor: Colors.lightBg3,
  },
  Influencer: {
    text: "I",
    bgColor: Colors.lightBg4,
  },
};

const getAvatarTextAndBgColorForVisitType = (visitType) => {
  return visitTypeToAvatarTextAndBgColorMapping[visitType];
};

async function requestMultipleStoragePermission() {
  let storagePermission = false;
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      if (
        granted["android.permission.READ_EXTERNAL_STORAGE"] &&
        granted["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted"
      ) {
        storagePermission = true;
      } else {
        storagePermission = false;
      }
    } catch (err) {
      storagePermission = false;
    }
  } else if (Platform.OS === "ios") {
    storagePermission = true;
  }

  return storagePermission;
}

function getDateTimestamp(date) {
  return new Date(date).getTime();
}

async function requestCameraPermission() {
  let Permission = false;
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera.",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Permission = true;
      } else {
        Permission = false;
      }
    } catch (err) {
      Permission = false;
    }
  } else if (Platform.OS === "ios") {
    Permission = true;
  }

  return Permission;
}
function convertArrayToSearchableListFormat(array) {
  let list = array;
  list = list.map((value) => {
    return {
      id: value,
      name: value,
    };
  });

  return list;
}

function checkAppVersion(latest_version) {
  if (!latest_version) {
    return;
  }

  if (Platform.OS == "android") {
    let app_version = DeviceInfo.getVersion() + "";

    if (app_version == latest_version) {
      return;
    } else {
      showAppUpdatePromptAndroid();
    }
  }
}

function showAppUpdatePromptAndroid(latest_version) {
  Alert.alert(
    "New Version Available",
    "Please, update app to new version to continue",
    [
      {
        text: "Update",
        onPress: () =>
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.jkpaper"
          ),
      },
    ],
    { cancelable: false }
  );
}

function watchLocation({ callback }) {
  try {
    _watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        callback({ latitude, longitude });
      },
      (error) => {
        console.log(error.code, error.message);
        return null;
      },
      {
        enableHighAccuracy: true,
        forceRequestLocation: true,
        distanceFilter: 100,
        interval: 180000,
      }
    );
  } catch (err) {
    reject(error);
  }
}

function getTimeFromString(time) {
  // timestamp=getCurrentTimestamp();
  if (!time) return "";
  let dateObj = new Date(time);
  // let date = dateObj.getDate();
  // let month = dateObj.getMonth() + 1;
  // let year = dateObj.getFullYear();
  let seconds = Math.floor(dateObj.getSeconds());
  let minutes = Math.floor(dateObj.getMinutes());
  let hours = Math.floor(dateObj.getHours());
  // date = date < 10 ? ('0' + date) : date;
  // month = month < 10 ? ('0' + month) : month;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
}

const getAccountType = (data) => {
  let mapping = {};
  data.map((obj) => {
    if (obj.Sub_Category__c) {
      if (!mapping[obj.Sub_Category__c]) {
        mapping[obj.Sub_Category__c] = obj.Sub_Category__c;
      }
    }
  });

  let types = [];

  Object.keys(mapping).map((key) => {
    types.push(mapping[key]);
  });

  return types.reverse();
};
function convertToSearchableListFormatNest(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_Key1 = params.label_Key1;
  let label_key = params.label_key;

  list = list.map((obj) => {
    if (obj[label_Key1][id_key] && obj[label_Key1][label_key]) {
      return {
        id: obj[label_Key1][id_key],
        // id: obj[label_key],
        name: obj[label_Key1][label_key],
      };
    } else {
      return {
        id: "",
        name: "",
      };
    }
  });

  return list;
}
function convertToSearchableListFormatNest2(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_Key1 = params.label_Key1;
  let label_key = params.label_key;

  list = list.map((obj) => {
    if (obj[id_key] && obj[label_Key1][label_key]) {
      return {
        // id: obj[label_Key1][id_key],
        id: obj[id_key],
        name: obj[label_Key1][label_key],
      };
    } else {
      return {
        id: "",
        name: "",
      };
    }
  });

  return list;
}
function convertToSearchableListFormatNest3(params) {
  let list = params.list;
  let id_key = params.id_key;
  let label_Key1 = params.label_Key1;
  let label_key = params.label_key;
  let label_key2 = params.label_key2;

  list = list.map((obj) => {
    if (obj[label_Key1][id_key] && obj[label_Key1][label_key2][label_key]) {
      return {
        id: obj[label_Key1][id_key],
        // id: obj[id_key],
        name: obj[label_Key1][label_key2][label_key],
      };
    } else {
      return {
        id: "",
        name: "",
      };
    }
  });

  return list;
}

function getDistanceBetweenTwoLocations(locObj1, locObj2) {
  locObj1.latitude = Number(locObj1.latitude);
  locObj1.longitude = Number(locObj1.longitude);
  locObj2.latitude = Number(locObj2.latitude);
  locObj2.longitude = Number(locObj2.longitude);

  let distance = getPreciseDistance(locObj1, locObj2);
  return distance;
}

function filterTextListFilter(list, field, searchText, field2) {
  let text = searchText;
  if (!text || text === "") {
    return list;
  }

  let filteredList = [];

  if (field2) {
    filteredList = list.filter((item) => {
      if (item[field] && item[field][field2]) {
        // console.log("ghjjkjkkkk", item[field][field2].match(text));
        return item[field][field2].match(text);
      } else {
        return false;
      }
    });
  } else {
    filteredList = list.filter((item) => {
      if (item[field]) {
        return item[field] == text;
      } else {
        return false;
      }
    });
  }

  if (!Array.isArray(filteredList) && !filteredList.length) {
    return [];
  }

  return filteredList;
}
function getTimeSuffix(timestamp) {
  // console.log("ggggggggg",timestamp.getHours())
  let dateObj = timestamp ? new Date(timestamp) : new Date();
  // console.log("kkkkkkkkkkkk",dateObj)
  let hour = dateObj.getHours();
  let TimeType = "";
  if (hour <= 11) {
    TimeType = "AM";
  } else {
    TimeType = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  let minute = dateObj.getMinutes();
  if (minute < 10) {
    minute = "0" + minute.toString();
  }
  let fullTime =
    hour.toString() + ":" + minute.toString() + " " + TimeType.toString();
  return fullTime;
}

function getSuffix(data) {
  // console.log(data)
  let time = data.substring(3, 5);
  let hour = data.substring(0, 2);
  // console.log(hour, time);
  let count = "";
  if (hour > 12) {
    count = hour - 12;
  }
  if (hour == 0) {
    count = 12;
  }
  let TimeType = "";
  if (hour <= 11) {
    TimeType = "AM";
  } else {
    TimeType = "PM";
  }
  let fullTime = count.toString()+":"+time + " " + TimeType.toString();
  return fullTime;
}

function getMonthYear(data) {
  // console.log("data", data);
  let year = data.substring(0, 4);
  let hour = data.substring(5, 7);
  let month = "";
  // console.log("kkkkkk", hour);
  switch (hour) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  // console.log(year, hour, month);
  let fullTime = month + "-" + year;
  return fullTime;
}

function getParentfromList(list) {
 
  //let  parent_key = params.parent_key;
  //let label_key = params.label_key;

  console.log("list", list);

  list = list.map((obj) => {
    return {
    
     parent:obj.parent
    };
  });

  console.log("list", list);


  let mapping = {};
  list.map((obj) => {
    if (!mapping[obj.parent] && obj.parent != null) {
      mapping[obj.parent] = obj;
    }
  });

  console.log("mapping", mapping);

  let finalList = [];

  Object.keys(mapping).map((key) => {
    finalList.push(mapping[key]);
  });

  console.log("finalList", finalList);

  return finalList;

 
}

export const HelperService = {
  getNext60DayTimestamp,
  getParentfromList,
  findDayMessage,
  convertToSearchableListFormatWithCode,
  getSuffix,
  getTimeSuffix,
  filterTextListFilter,
  requestLocation,
  getMonthYear,
  getGeolocation,
  openLocationDialogBox,
  isToday,
  showToast,
  showElapsedTime,
  convertToSearchableListFormat,
  convertToSearchableListFormatPlant,
  decorateWithLocalId,
  getCurrentTimestamp,
  callNumber,
  getAreaName,
  currencyValue,
  FixedcurrencyValue,
  dateReadableFormat,
  getCompetitorName,
  searchTextListFilter,
  searchTextListVisitFilter,
  searchArrayListFilter,
  sortListFilter,
  sortAsc,
  sortDesc,
  sortDesc1,
  removeField,
  showDirectionInGoogleMaps,
  datesAreOnSameDay,
  datesAreOnSameDay1,
  getPrevious7DayTimestamp,
  getNext7DayTimestamp,
  getVisitsDisplayDate,
  getPreviousDayTimestamp,
  getNextDayTimestamp,
  convertMomentObjectToUnix,
  getDisplayDate,
  getPreviousNDayTimestamp,
  getNextNDayTimestamp,
  requestStoragePermission,
  findMatchingKeyValueInList,
  getMonthMappingName,
  getDeviceId,
  getNextMonth,
  getPreviousMonth,
  getDashboardDisplayDate,
  getMonthName,
  multiFieldSearchText,
  getFirstName,
  getLastName,
  getNameFromSFID,
  convertMomentDateToTimestamp,
  getMonthStartAndEndDateTimestamp,
  removeArrFromList,
  showAlert,
  convertArrToRNPickerObj,
  getRemovedObjArrList,
  getBase64DecodeValue,
  moveFileToAbsolutePath,
  convertStringToDate,
  convertDateToString,
  searchInList,
  removeDuplicateVisits,
  dateReadableFormatWithHyphen,
  removeTimestringFromDate,
  removeTimestringFromDate1,
  getAvatarTextAndBgColorForVisitType,
  FixedDecimalValue,
  requestMultipleStoragePermission,
  getDateTimestamp,
  requestCameraPermission,
  getSFIDFromName,
  convertArrayToSearchableListFormat,
  removeDuplicateBeat,
  checkAppVersion,
  removeDuplicateProduct,
  removeDuplicateitem,
  numberWithCommas,
  requestLocationPermission,
  watchLocation,
  convertToSearchableListPjpFormat,
  convertToSearchableListFormatLabel,
  removeDuplicateLabel,
  interChangeValue,
  removeSfidNullitem,
  getCurrentDate,
  getAccountType,
  datesAreOnRangeLess,
  datesAreOnRangeMore,
  getHHMMSSform,
  decorateWithrefId,
  getHMS,
  getMonthMappingFullName,
  getMonthFullName,
  getPreviousFullMonth,
  getNextFullMonth,
  dateReadableMonth,
  getDistanceBetweenTwoLocations,
  convertToSearchablepjpListFormat,
  convertToSearchablepjpBeatListFormat,
  convertToSearchableListRetailerFormatLabel,
  convertToDropDownListRetailerFormatLabel,
  getIdFormBeat_c,
  yearReadableFormat,
  removeNull,
  getCurrentMonth,
  convertToSearchableListFormatNest,
  convertToSearchableListFormatNest2,
  monthReadableFormat,
  getMonthindex,
  applySearch,
  getTimeFromString,
  convertToSearchableListFormatNest3,
};
