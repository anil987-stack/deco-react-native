/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  showHideRemark: false,
  showRemarkModal: false,
  remark: "",
  startForm: {},
  startFormValidation: {
    invalid: false,
    invalid_field: "",
  },

  globleList: [],
  access_token: null, //user token after user is logged in, indication that user is loggin or not.
  userName: "",

  fetchOnLeaveList: [],
  fetchOnLeaveLoader: false,

  fetchCheckInList: [],
  fetchCheckInLoader: false,

  fetchInOfficeList: [],
  fetchInOfficeLoader: false,

  shreeDealersList: [],
  nonShreeDealersList: [],

  userDetailList: [
    {
      attributes: {
        type: "User",
        url: "/services/data/v45.0/sobjects/User/0050p000003HmqgAAC",
      },
      Id: "0050p000003HmqgAAC",
      Name: "SANDEEP KUMAR",
      Username: "sandeep@lismail.in",
      Email: "sukhbir.kaur@zoxima.com",
      MobilePhone: "8878163757",
      CompanyName: null,
      ManagerId: "0050p000003cZFnAAM",
      Manager: {
        attributes: {
          type: "User",
          url: "/services/data/v45.0/sobjects/User/0050p000003cZFnAAM",
        },
        Name: "ankita testing",
      },
      Designation__c: "FSO",
      Aadhar_Number__c: null,
      IsActive: true,
      Address: null,
      Date_of_Birth__c: null,
      Date_Of_Joining__c: null,
      Date_of_Leaving__c: null,
      Department__c: null,
      Employee_Category__c: null,
      Employee_Code__c: "1109",
      Father_s_Name__c: null,
      Grade__c: null,
      Married_Date__c: null,
      Martial_Status__c: null,
      Phone: null,
      Spouse_Name__c: null,
      User_Category__c: null,
      Employees__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Employee__c",
              url:
                "/services/data/v45.0/sobjects/Employee__c/a0g0p00000hO9zDAAS",
            },
            Id: "a0g0p00000hO9zDAAS",
            Name: "1109",
            Phone__c: null,
            Branch_Head__c: "0050p000003HmvxAAC",
            Branch_Head__r: {
              attributes: {
                type: "User",
                url: "/services/data/v45.0/sobjects/User/0050p000003HmvxAAC",
              },
              Id: "0050p000003HmvxAAC",
              Name: "DESAI VIRAL ANILKUMAR",
            },
            Vertical_Head__c: "0050p000003HmqhAAC",
            Vertical_Head__r: {
              attributes: {
                type: "User",
                url: "/services/data/v45.0/sobjects/User/0050p000003HmqhAAC",
              },
              Id: "0050p000003HmqhAAC",
              Name: "NAVEEN KUMAR SAXENA",
            },
            President__c: "0050p000003R8HqAAK",
            President__r: {
              attributes: {
                type: "User",
                url: "/services/data/v45.0/sobjects/User/0050p000003R8HqAAK",
              },
              Id: "0050p000003R8HqAAK",
              Name: "President",
            },
            Employee_Name__c: "SANDEEP KUMAR",
            Designation__c: "FSO",
            Email_ID__c: "sukhbir.kaur@zoxima.com",
            Date_of_Birth__c: "2000-03-16",
            Date_Of_Joining__c: "2022-03-02",
            Division__c: null,
            Sales_Office__c: null,
            Region_Master__c: "a160p0000019RNJAA2",
            Region_Master__r: {
              attributes: {
                type: "Region_Master__c",
                url:
                  "/services/data/v45.0/sobjects/Region_Master__c/a160p0000019RNJAA2",
              },
              Name: "R002",
            },
            Vertical__c: "Core",
            Grade__c: "J1",
            Vendor_Code__c: "1144",
            City__c: null,
            City__r: null,
            Sales_Channel__c: null,
            Sales_Channel__r: null,
            Manager__c: "a0g0p00000hOBd7AAG",
            Manager__r: {
              attributes: {
                type: "Employee__c",
                url:
                  "/services/data/v45.0/sobjects/Employee__c/a0g0p00000hOBd7AAG",
              },
              Name: "90888",
            },
            Reporting_Manager__c: null,
            Base_Location_employee__c: "Ahmedabad",
            Branch_Master__c: "a170p000001pw4mAAA",
            Branch_Master__r: {
              attributes: {
                type: "Branch_Master__c",
                url:
                  "/services/data/v45.0/sobjects/Branch_Master__c/a170p000001pw4mAAA",
              },
              Name: "4200",
              Branch_Name__c: "LIS AHMEDABAD",
            },
            Branch_Accountant__c: "0050p000003Hmx2AAC",
            Branch_Accountant__r: {
              attributes: {
                type: "User",
                url: "/services/data/v45.0/sobjects/User/0050p000003Hmx2AAC",
              },
              Name: "SANJAY KUMAR",
            },
          },
        ],
      },
    },
  ],

  agentLoginDetails: {},

  fetchCheckOutLoader: false,
  fetchCheckOutList: [],

  fetchCurrentLocationLoader: false,

  currentLocation: {
    latitude: "",
    longitude: "",
  },

  adminAccessToken: "",
  adminLoginLoader: false,
  validUser: false,

  Brand: [],

  product: [
    {
      label: "NONE",
      value: "None",
    },
    {
      label: "PPC",
      value: "PPC",
    },
    {
      label: "OPC",
      value: "OPC",
    },
  ],

  packing: [
    {
      label: "NONE",
      value: "None",
    },
    {
      label: "HDPE",
      value: "HDPE",
    },
    {
      label: "PAPER",
      value: "PAPER",
    },
  ],
  influencer_type: [
    {
      label: "Engineer",
      value: "Engineer",
    },
    {
      label: "Mason",
      value: "Mason",
    },
    {
      label: "Architect",
      value: "Architect",
    },
    {
      label: "Contractor",
      value: "Contractor",
    },
    {
      label: "Builder",
      value: "Builder",
    },
    {
      label: "Others",
      value: "Others",
    },
  ],

  site_type: [
    {
      label: "Residential",
      value: "Residential",
    },
    {
      label: "School",
      value: "School",
    },
    {
      label: "Healthcare",
      value: "Healthcare",
    },
    {
      label: "Retail",
      value: "Retail",
    },
    {
      label: "Factory",
      value: "Factory",
    },
    {
      label: "Others",
      value: "Others",
    },
  ],

  Plant: [
    {
      label: "Depot",
      value: "D",
    },
    {
      label: "Terminal",
      value: "T",
    },
    {
      label: "Factory",
      value: "F",
    },
  ],

  Prospect: [
    {
      label: "None",
      value: "None",
    },
    {
      label: "Positive",
      value: "Positive",
    },
    {
      label: "Neutral",
      value: "Neutral",
    },

    {
      label: "Negative",
      value: "Negative",
    },
  ],
};
