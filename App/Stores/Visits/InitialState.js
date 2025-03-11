import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
export const INITIAL_STATE = {
  visitsDisplayList: [
// {name: "shahid ali hasmullah khan",
// id:"5101/00001"

// },
{name:"muhammad shahid ali hasmullah khan",
id:"5101/00002"

}
  ],
  visitsStorageList: {},
  filteredDisplayData: [],
  visitsAction: false,
  fetchVisitsDisplayListLoader: false,
  searchFilters: {
    startDate: HelperService.getCurrentTimestamp(),
    endDate: HelperService.getCurrentTimestamp(),
    psm__c: "",
    area: "",
    name: "",
    beat: "",
  },
  planVisit: {
    searchFilters: {
      name: "",
      area: "",
      retailer_type: "",
      CompEdit: "",
      StockEdit: "",
      beat: "",
    },
    selectedVisitDate: HelperService.getCurrentTimestamp(),
    selectedVisitPSM: "",
    selectedObjective: "",
    startDate: 0,

    selectedPlannedVisits: [],
    submitPlannedVisitsLoader: false,
  },
  unplannedVisit: {
    findNearMeLoader: false,
    nearLocation: {
      latitude: "",
      longitude: "",
    },
    searchByAreaFilters: {
      area: "",
      name: "",
      party_type: "",
      beat: "",
    },
  },
  editVisit: {
    formData: {
      cancelRemarks: "",
      visitDate: null,
      psm: "",
      summary: "",
    },
    cancelVisitLoader: false,
    editVisitLoader: false,
    editVisitValidation: {
      invalid: false,
      invalid_field: "",
    },
  },
  executeVisitData: {},
  placeOrderLoader: false,
  cart: {
    order: {
      from__c: "",
      order_date__c: null, //is set while placing order
      total_payable_amount__c: "", //is set wen in cart
      //"promoted_product_count__c": "0",
      //"retailer__c": "", //is set while placing order
      //"total_product_sku__c": "0",
      //"unique_product_count__c": ""//changes dynamically
    },
    items: [],
  },
  visitInfoForm: {
    // "market_material_required__c": false,
    summary__c: "",
  },

  visitInfoFormMultiple: [
    {
      id: 1,
      visibility_level__c: "",
      top_visible_brand__c: "",
      pricing_and_scheme_info__c: "",
      picture__c: "",
      send_marketing_material__c: "No",
      summary__c: "",
    },
  ],
  visitInfoFormValidation: {
    invalid: false,
    invalid_field: "",
    error_message: "",
  },

  AddCompetitorForm: [
    {
      id: _.uniqueId(),
      attributes: { type: "Visit_Competitor__c", referenceId: _.uniqueId() },
      Competitor__c: "",
      Competitor_Product__c: "",
      Price__c: "",
      Scheme__c: "",
      // "potential_off_take__c" : "",
      // "payment_term__c": "",
      // "quantity__c":""
      Visit__c: "",
      // "competitor_name__c":"",
    },
  ],

  CompetitorSubmitLoader: false,

  CompetitorFormValidation: {
    invalid: false,
    invalid_field: "",
  },

  AddStockForm: [
    {
      id: _.uniqueId(),

      product_family__c: "",

      quantity__c: "",
    },
  ],

  StockSubmitLoader: false,

  StockFormValidation: {
    invalid: false,
    invalid_field: "",
  },
  addVisitInfoLoader: false,
  visibilityLevelList: [
    { value: "", label: "None" },
    { value: "Good", label: "Good" },
    { value: "Bad", label: "Bad" },
  ],
  startVisitLoadingId: "",
  endVisitLoadingId: "",
  startVisitLoader: false,
  endVisitLoader: false,
  fetchVisitInfoLoader: false,
  visitInfoMapping: {},
  visitImageLoader: false,
  visitInfoImage: {},

  UpdateStockSubmitLoader: false,
  UpdateCompetitorSubmitLoader: false,

  visitCompetitor: [],
  getVisitCompetitorLoader: false,

  visitStock: [],
  getVisitStockLoader: false,

  getParentAreasLoader: false,
  parentAreas: {},

  OrderFormValidation: {
    invalid: false,
    invalid_field: "",
  },

  orderHeaderForm: {},
  addVisitData: {},
  bulkData: {},
  addmanager: false,
  tagmanagerList: [],

  visitInfoForm: {},
  visitInfoFormLoader: false,
  showPicker: true,
  showInput: false,
  showButton: false,
  dropPicker: false,
  filelist:{},

  showDescription: false,
  hideDescription: false,
};
