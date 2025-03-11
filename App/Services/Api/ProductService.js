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

const productApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
function getAllProducts(params) {
  // console.log("paramsjjjj",params);
  let url = Config.PRODUCT_SERVICE.GET_PRODUCTS;
  url = url.replace("salesoffice", `${params.SalesOffice}`);
  url = url.replace("plant", `${params.Plant}`);
  url = url.replace("division", `${params.Division}`);
  url = url.replace("ordertype", `${params.OrderType}`);
  url = url.replace("distributor", `${params.Party}`);

  // url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.limit}` : '&limit=4000';
  // url += params.category ? `category=${params.category}` : '';
  // url += `?categories=A1`;
  //url += params.category ? `&pcat=${params.category}` : '';
  //url += params.sub_category ? `&pscat=${params.sub_category}` : '';
  //url += params.sub_sub_category ? `&psscat=${params.sub_sub_category}` : '';
  //url += params.search ? `&search=${params.search}` : '';

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        return response["data"]["items"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getSecondaryProduct(params) {
  // console.log("paramsjjjj",params);
  let url = Config.PRODUCT_SERVICE.GET_SECONDARY_PRODUCTS;
  url = url.replace("salesoffice", `${params.SalesOffice}`);
  url = url.replace("division", `${params.Division}`);
  url = url.replace("ordertype", `${params.OrderType}`);
  url = url.replace("distributor", `${params.Party}`);

  // url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.limit}` : '&limit=4000';
  // url += params.category ? `category=${params.category}` : '';
  // url += `?categories=A1`;
  //url += params.category ? `&pcat=${params.category}` : '';
  //url += params.sub_category ? `&pscat=${params.sub_category}` : '';
  //url += params.sub_sub_category ? `&psscat=${params.sub_sub_category}` : '';
  //url += params.search ? `&search=${params.search}` : '';

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response)
      if (in200s(response.status)) {
        return response["data"]["items"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProductBrands(params) {
  let url = Config.PRODUCT_SERVICE.GET_PRODUCT_BRAND;
  url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.limit}` : '&limit=4000';
  url += params.category ? `category=${params.category}` : "";
  url += `&type=${params.type}`;
  //url += params.category ? `&pcat=${params.category}` : '';
  //url += params.sub_category ? `&pscat=${params.sub_category}` : '';
  //url += params.sub_sub_category ? `&psscat=${params.sub_sub_category}` : '';
  //url += params.search ? `&search=${params.search}` : '';

  return productApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["categories"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProductCategories(params) {
  // console.log("params params.token",params.token);
  let url = Config.PRODUCT_SERVICE.GET_CATEGORIES;
  // url += `?team__c=${params.team__c}`
  // url += `&party=${params.party}`;
  // url += `&type=${params.type}`;

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data[0].items;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProductGsm(params) {
  let url = Config.PRODUCT_SERVICE.GET_PRODUCT_GSM;
  url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.endDate}` : '`&limit=1000';
  url += params.brand ? `brand=${params.brand}` : "";
  url += `&type=${params.type}`;
  url += params.plant__c ? `&plant=${params.plant__c}` : "";
  return productApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["gsm"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProductItem(params) {
  let url = Config.PRODUCT_SERVICE.GET_PRODUCT_ITEM;
  url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.endDate}` : '`&limit=1000';
  url += params.brand ? `brand=${params.brand}` : "";
  url += params.gsm ? `&gsm=${params.gsm}` : "";
  url += params.channel ? `&channel=${params.channel}` : "";
  url += params.machine ? `&machine=${params.machine}` : "";
  url += params.quality ? `&quality=${params.quality}` : "";
  url += params.plant__c ? `&plant=${params.plant__c}` : "";
  url += params.zone ? `&zone=${params.zone}` : "";
  url += params.gsm_name ? `&gsm_name=${params.gsm_name}` : "";
  url += `&type=${params.type}`;
  url += `&order_type=${params.order_type}`;

  return productApiClient
    .get(url, {
      headers: {
        token: params.token,
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["Items"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchProductItemPrice(params) {
  let url = Config.PRODUCT_SERVICE.GET_PRODUCT_ITEM_PRICE;
  url += `?`;
  //url += params.offset ? `offset=${params.offset}` : 'offset=0';
  //url += params.limit ? `&limit=${params.endDate}` : '`&limit=1000';
  url += params.packaging ? `packaging=${params.packaging}` : "";
  url += params.plant ? `&plant=${params.plant}` : "";
  url += params.quality ? `&quality=${params.quality}` : "";
  url += params.width ? `&width=${params.width}` : "";
  url += params.length ? `&length=${params.length}` : "";
  url += params.quantity__c ? `&quantity=${params.quantity__c}` : "";
  url += params.exmill_price ? `&exmill=${params.exmill_price}` : "";
  url += params.gsm ? `&gsm=${params.gsm}` : "";
  url += params.size ? `&size=${params.size}` : "";
  url += `&type=${params.type}`;

  return productApiClient
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

function fetchProductSubSubCategories(params) {
  let url = Config.PRODUCT_SERVICE.GET_SUBSUBCATEGORIES;
  // url += `?`;
  // url += params.offset ? `offset=${params.offset}` : 'offset=0';
  // url += params.limit ? `&limit=${params.endDate}` : '&limit=1000';
  // url += params.category ? `&prodCatId=${params.category}` : '';
  // url += params.sub_category ? `&prodCatSubId=${params.sub_category}` : '';

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["product_sub_sub_cat"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function fetchSchemes(params) {
  let url = Config.PRODUCT_SERVICE.GET_SCHEMES;
  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        agentid: params.agentid,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response["data"]["data"]["schemes"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

function getColorMixMaster(params) {
  let url = Config.PRODUCT_SERVICE.GET_COLORMIX;
  // url = url.replace('ProductCategory',`'${params.productcategory}'`);
  // url = url.replace('ProductSeries',`'${params.productseries}'`);
  // url = url.replace('packSize',`'${params.packSize}'`);
  // url += `&party=${params.party}`;
  // url += `&type=${params.type}`;

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data[0].items;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function getProductSeries(params) {
  // console.log("params params.token",params);
  let url = Config.PRODUCT_SERVICE.GET_PRODUCT_SERIES;
  // url += `'${params.agentid}'`;

  // url += `&party=${params.party}`;
  // url += `&type=${params.type}`;

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data[0].items;
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}
function getAllPackSize(params) {
  //  let product=params.productcategory[0];
  let url = Config.PRODUCT_SERVICE.GET_PACK_SIZE;
  // url = url.replace('ProductCategory',`'${product}'`);
  // url = url.replace('ProductSeries',`'${params.productseries}'`);
  // url += `&party=${params.party}`;
  // url += `&type=${params.type}`;

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (in200s(response.status)) {
        return response.data[0].items;
      }
      return null;
    })
    .catch((error) => {
      console.log("eroorrr", error.response);
      return null;
    });
}
function fetchPlant(params) {
  let url = Config.PRODUCT_SERVICE.FETCH_PLANT;
  url += `'${params.agentid}'`;
  // url += `&party=${params.party}`;
  // url += `&type=${params.type}`;

  return productApiClient
    .get(url, {
      headers: {
        Authorization: "Bearer " + params.token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // console.log("response",response);
      if (in200s(response.status)) {
        return response["data"]["records"];
      }
      return null;
    })
    .catch((error) => {
      return null;
    });
}

export const productService = {
  fetchPlant,
  getAllProducts,
  fetchSchemes,
  fetchProductBrands,
  fetchProductCategories,
  fetchProductGsm,
  fetchProductItem,
  fetchProductSubSubCategories,
  fetchProductItemPrice,
  getColorMixMaster,
  getProductSeries,
  getAllPackSize,
  getSecondaryProduct,
};
