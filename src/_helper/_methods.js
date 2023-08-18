/* eslint-disable no-undef */
import { toast, ToastContainer } from "react-toastify";
import { fetchWrapper } from "./fetchWrapper";

export const fileUploader = async (files, fileType) => {
  console.log(fileType, "fileType");
  try {
    let formData = new FormData();
    let ids = [];
    let data = {};
    let response;
    for (const key of Object.keys(files)) {
      // let type = null;
      let fileExt =
        files[key].name.split(".")[files[key].name.split(".").length - 1];
      console.log("Checking file extension", fileExt);

      formData.append("filename", files[key].name.split(".")[0]);
      formData.append("file", files[key]);
      response = await fetchWrapper.post("/media-upload/", formData, true);
      ids.push(response.data.id);
      data = response.data;
    }
    return { ids, data };
  } catch (err) {
    ErrorMessageHandler(err);
  }
};
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const ErrorMessageHandler = (error) => {
  let errorObject = error?.error;
  console.log(error);
  toast.error(errorObject);

  if (error.status === 500) {
    return toast.error(error.statusText);
  }

  if (errorObject) {
    toast.error(errorObject);
    if (Array.isArray(errorObject)) {
      errorObject.map((err) => {
        return toast.error(err);
      });
    } else {
      Object.keys(errorObject).map((errorKey) => {
        return toast.error(errorObject[errorKey][0]);
      });
    }
  }
};

export const debounce = (func, delay = 500) => {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

export function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = new Date(startDate);
  stopDate = new Date(stopDate);
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

export function standardTimeConverter(time) {
  time = time.split(":"); // convert to array

  var hours = Number(time[0]);
  var minutes = Number(time[1]);

  // calculate
  var timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours == 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
  timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

  // show
  return timeValue;
}

export function isAdmins(role) {
  if (role === "participant" || role === "resource_person") {
    return false;
  }
  if (role === "cd_admin" || role === "superuser" || role === "executive") {
    return true;
  }
}

export function paramsGenerator({
  pageSize = 50,
  searchEventParam,
  pageNum,
  eventState,
  eventType,
  isMtot,
  isPhysical,
  isVirtual,
  organizer,
  thematicAreas,
  targetedProvinces,
  sectors,
}) {
  let params = "";
  if (pageSize) {
    params += `&limit=${pageSize}`;
  }
  if (searchEventParam) {
    params += searchEventParam;
  }
  if (pageNum) {
    let offSet = (pageNum - 1) * pageSize;
    if (offSet === 0) {
      params += `&page=${pageNum}`;
    } else {
      params += `&offset=${offSet}&page=${pageNum}`;
    }
  }
  if (eventState?.value) {
    params += `&type=${eventState.value}`;
  }
  if (isMtot) {
    params += "&mtot=true";
  }
  if (isPhysical) {
    params += "&nature=physical";
  }
  if (isVirtual) {
    params += "&nature=online";
  }
  if (eventType && eventType !== "clear") {
    params += `&program_type=${eventType}`;
  }
  if (targetedProvinces && targetedProvinces.length > 0) {
    let provincesIdparams = "&provinces=";
    targetedProvinces.forEach((province, i) => {
      if (i + 1 < targetedProvinces.length) {
        provincesIdparams += province.id + "-";
      } else {
        provincesIdparams += province.id;
      }
    });
    params += provincesIdparams;
  }
  if (thematicAreas.length > 0) {
    let thematicAreaParams = "&thematic_areas=";
    thematicAreas.forEach((area, i) => {
      if (i + 1 < thematicAreas.length) {
        thematicAreaParams += area.id + "-";
      } else {
        thematicAreaParams += area.id;
      }
    });
    params += thematicAreaParams;
  }
  if (organizer) {
    params += `&office_type=${organizer.title}`;
  }
  if (sectors?.length > 0) {
    let sectorParams = "&sectors=";
    sectors.forEach((sector, i) => {
      if (i + 1 < sectors.length) {
        sectorParams += sector.id + "-";
      } else {
        sectorParams += sector.id;
      }
    });
    params += sectorParams;
  }
  return params;
}

export function onlyAlphaCharacter(text) {
  const regex = /^[a-zA-Z ]*$/;
  let output = "";

  for (let i = 0; i < text.length; i++) {
    output += text[i].match(regex) ? text[i] : "";
  }

  return output;
}
export function fiscalYearFormat(text) {
  const regex = /^[0-9]$/;
  let output = "";
  for (let i = 0; i < text.length; i++) {
    output += text[i].match(regex) ? text[i] : "";
  }

  return output;
}

export function isNumeric(number) {
  // eslint-disable-next-line no-self-compare
  if (+number === +number) {
    // if is a number
    return true;
  }
  return false;
}

export function convertToNumber(text) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    output += isNumeric(text[i]) ? text[i] : "";
  }
  return output;
}

export const mediaUrlify = (url) => {
  var pattern = /^((http|https|ftp):\/\/)/;

  if (pattern.test(url)) {
    return url;
  } else {
    return process.env.REACT_APP_BASE_URL + url;
  }
};

export function toNepaliNumber(number) {
  const nepaliNumbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  const strNum = String(number);
  let strNepNum = "";
  for (let i = 0; i < strNum.length; i++) {
    strNepNum += nepaliNumbers[parseInt(strNum.substr(i, 1))];
  }
  return strNepNum;
}

export function verifyEmail(email) {
  const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if (pattern.test(email)) {
    return true;
  } else {
    return false;
  }
}
