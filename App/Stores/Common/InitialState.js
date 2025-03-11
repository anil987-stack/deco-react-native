export const INITIAL_STATE = {
  isNetworkBannerVisible: false,
  currentScreen: "SplashScreen",
  absentReasons: ["Planned", "Ad-hoc"],
  categoryRatingMapping: {
    A: 5,
    B: 4,
    C: 3,
  },
  recurringMapping: [
    { id: "Monday", name: "Every Monday" },
    { id: "Tuesday", name: "Every Tuesday" },
    { id: "Wednesday", name: "Every Wednesday" },
    { id: "Thursday", name: "Every Thursday" },
    { id: "Friday", name: "Every Friday" },
    { id: "Saturday", name: "Every Saturday" },
  ],
  genericActionModal: {
    visible: false,
    content: [],
    heading: "",
    bodyFlexHeight: "",
    disable: false,
  },

  
	genericActionModalTwo: {
		visible2: false,
		content2: [],
		heading2: '',
		bodyFlexHeight2: '',
		disable2: false
	},

  genericActionModalThree: {
		visible3: false,
		content3: [],
		heading3: '',
		bodyFlexHeight3: '',
		disable3: false,
    headingStyle3:'',
	},

  agentAreaPjp: [],
  agentPjp: [],
  agentBeatPjp: [],
  fetchAllAreaPjpLoading: false,
  userTerritory: [],
  getUserTerritoryLoading: false,
  objectiveList: [],
  fetchObjectiveLoading: false,

  stateList: [],
  fetchStateLoading: false,

  cityList: [],
  fetchCityLoading: false,

  cityAllList: [],
  fetchAllCityLoading: false,

  TerritoryAllList: [],
  getAllTerritoryLoading: false,

  uploadImageLoader: false,

  uploadImageField: "",

  currentLocation: {
    latitude: "",
    longitude: "",
  },
  fetchCurrentLocationLoader: false,

  agentBeat: [],
  dealerType: [],
  retailerArea: [],
  fetchBeatLoading: false,
  fetchBeatFailure: false,

  fetchRetailerAreaLoading: false,
  fetchDealerTypeLoading: false,

  agentDistChannel: [],
  searchDistChannel: [],
  agentAllPlant: [],
  searchAllPlant: [],
  agentIncoTerm: [],
  agentAllRoute: [],
  agentAllInsurance: [],
  getBillPartyList: [],

  fetchDistChannelLoading: false,
  fetchAllPlantLoading: false,
  fetchIncoTermLoading: false,
  fetchAllRouteLoading: false,
  fetchAllInsuranceLoading: false,
  getBillPartyLoading: false,

  divisionList: [
    { id: "a1B1y000000CUu2EAG", name: "Board" },
    { id: "a1B1y000000CUu1EAG", name: "Paper" },
  ],

  isObjModalVisible: false,
  isAttachmentVisible: false,
  PlanModalVisible: false,
  isObjModalList: {},
  isAttachmentList:{},
  partNo: [],
  partNoLoading: false,
  inventory: [],
  inventoryLoading: false,
  report:[],
  accountReportLoading:false,
  reportForm:{},
  searchFilter:{
    searchByName:"",
    parentName:""
    },
};
