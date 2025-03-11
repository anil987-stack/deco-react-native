import { HelperService } from "App/Services/Utils/HelperService";
/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  retailersList: [
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C. - AMRELI",
      Customer_Status__c: "Active",
      Sub_Category__c: "DEALER",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "INFLUENCER",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "RETAILER",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },

    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "SCOUTING",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "TASK",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },

    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "ENROLLMENT",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
  ],
  documentList: [
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C. - AMRELI",
      Customer_Status__c: "Active",
      Sub_Category__c: "DRAFT",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "PENDING",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "REJECT",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },

    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "APPROVED",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "TASK",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },

    {
      attributes: {
        type: "Account",
        url: "/services/data/v54.0/sobjects/Account/0010p0000117EK9AAM",
      },
      Id: "0010p0000117EK9AAM",
      Name: "G.S.R.T.C PAINTS",
      Customer_Status__c: "Active",
      Sub_Category__c: "ENROLLMENT",
      Customer_Created__c: "2006-07-28",
      Address__c: "GUJARAT STATE ROAD TPT.CORPN.-AMRELI DIVISION",
      Location__c: {
        latitude: 13.0160788,
        longitude: 80.2027134,
      },
      Area_Master__c: "a180p000000hbM7AAI",
      Available_Credit_Limit__c: 10000000,
      Overdue_Amount__c: 1000000,
      SAP_Customer_No__c: "500217",
      SAP_number__c: false,
      Visits__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Visits__c",
              url: "/services/data/v54.0/sobjects/Visits__c/a020p00000AkJz7AAF",
            },
            Customer_Name__c: "0010p0000117EK9AAM",
            Id: "a020p00000AkJz7AAF",
            Name: "VI-0005",
            Visit_Date__c: "2022-03-27",
          },
        ],
      },
      Orders__r: {
        totalSize: 1,
        done: true,
        records: [
          {
            attributes: {
              type: "Order__c",
              url: "/services/data/v54.0/sobjects/Order__c/a100p000000YV6FAAW",
            },
            From__c: "0010p0000117EK9AAM",
            Id: "a100p000000YV6FAAW",
            Name: "OR-000194",
          },
        ],
      },
      Area_Master__r: {
        attributes: {
          type: "Area_Master__c",
          url:
            "/services/data/v54.0/sobjects/Area_Master__c/a180p000000hbM7AAI",
        },
        Id: "a180p000000hbM7AAI",
        Name: "A51",
        Area_Name__c: "Amreli",
      },
    },
  ],
  dealersList: [],
  fetchRetailersLoader: false,
  fetchDealersLoader: false,

  fetchCreditLimitLoading: false,
  fetchCreditLimitList: [],

  fetchRetailerCompetitorsLoader: false,
  fetchcompetitorsProductsLoader: false,
  retailerSearchFilters: {
    area: "",
    distributor: "",
    type: "Retailer",
    sortType: "ASC",
    sortBy: "",
    beat: "",
    searchBy: "name",
    searchValue: "",
    selectedTab: 0,
    brand: [],
    selectedMonth: new Date(HelperService.getCurrentTimestamp()).getMonth(),
  },
  openMoreFilters: false,
  retailerForm: {},
  retailerUpdateForm: {},
  ComplaintForm: {},
  retailerFormValidation: {
    invalid: false,
    invalid_field: "",
  },
  createRetailerLoader: false,
  updateRetailerLoader: false,
  fetchRetailerOrdersLoader: false,
  retailerOrders: {}, // {key: value}, key is retailer/dealer id, values is array of orders
  updateRetailerLocationLoader: false,
  selectedRetailer: {},
  selectedDealer: {},
  retailerCompetitors: [],
  Competitorproducts: [],
  retailersOffset: 0,
  retailersLimit: 1000,
  retailerOrdersOffset: 0,
  retailerOrdersLimit: 1000,
  categories: [
    {
      id: "A",
      name: "A",
    },
    {
      id: "B",
      name: "B",
    },
    {
      id: "C",
      name: "C",
    },
  ],
  dealersSearchList: [],
  retailersSearchList: [],
  accountlist: ["DEALER","INFLUENCER","RETAILER","SCOUTING","TASK","ENROLLMENT"],
  retailersBeatSearchList: [],
  retailerDealerSearchByLocationList: [],
  retailerDealerSearchByLocationLoader: [],
  findNearMeLoader: false,
  fetchDealerOrdersLoader: false,
  dealerOrders: {},
  fetchDealerInvoiceLoader: false,
  dealerInvoice: {},
  fetchDealerOutstandingLoader: false,
  dealerOutstanding: {},
  deleteOrderLineLoader: false,
  fetchDealerPaymentsLoader: false,
  dealerPayments: {},
  fetchInvoiceDetailLoader: false,
  allInvoiceDetailsMapping: {}, //id mapping for order details,
  paymentForm: {},
  paymentFormLoader: false,
  paymentModes: [
    {
      id: "Digital",
      name: "Digital",
    },
    {
      id: "Cash",
      name: "Cash",
    },
    {
      id: "Cheque",
      name: "Cheque",
    },
  ],

  countMapping: {},

  agentComplaintType: [],
  fetchComplaintTypeLoading: false,
  fetchComplaintTypeFailure: false,

  agentComplaints: [],
  fetchComplaintsLoading: false,
  fetchComplaintsFailure: false,

  partiesMapping: {},
  createCompetitorLoader: false,
  newCompetitorForm: {},

  fetchDsrLoader: false,
  dsrList: [],

  fetchDsrAreaLoader: false,
  dsrAreaList: [],
  dsrArea: [],

  createDsrLoader: false,

  dsrForm: {},
  dsrFormValidation: {
    invalid: false,
    invalid_field: "",
  },

  dsrAreaForm: {},
  createDsrAreaLoader: false,

  fetchDsrAreaListLoader: false,

  OrderSearchFilters: {
    selectedDateType: "Date", //or Month,
    selectedMonth: new Date(HelperService.getCurrentTimestamp()).getMonth(),
    selectedYear: new Date(HelperService.getCurrentTimestamp()).getFullYear(),
  },

  cartQuantity: {},
  editOrderQuantityLoader: false,
  addOrderLineLoader: false,

  addOrderForm: {
    status: false,
  },
  data: [
    { id: "1", name: "Technical", checked: false, parent: "1" },
    { id: "2", name: "Fitting", checked: false, parent: "2" },
    { id: "3", name: "Commercial", checked: false, parent: "1" },
    { id: "4", name: "Pipes", checked: false, parent: "2" },
  ],

  dealerTicket: [   {
    "attributes": {
        "type": "Ticket__c",
        "url": "/services/data/v45.0/sobjects/Ticket__c/a070p000004slGDAAY"
    },
    "Id": "a070p000004slGDAAY",
    "Complaint_Open_Date__c": "2022-04-26T00:00:00.000+0000",
    "Ticket_Category__c": null,
    "Ticket_Type__c": "Availability of parts",
    "Field_Team_Remarks__c": "Test",
    "Name":"TN_001",
    "Complaint_Status__c": "Open",
    "Complaint_Description__c": "Test",
    "Solution_Provided__c": "test",
    "Close_Date__c": "2022-03-03T00:00:00.000+0000"
},
{
    "attributes": {
        "type": "Ticket__c",
        "url": "/services/data/v45.0/sobjects/Ticket__c/a070p000004slFeAAI"
    },
    "Id": "a070p000004slFeAAI",
    "Complaint_Open_Date__c":"2022-04-26T00:00:00.000+0000",
    "Ticket_Category__c": null,
    "Name":"TN_002",
    "Ticket_Type__c": "Technical Issue",
    "Field_Team_Remarks__c": "Test",
    "Complaint_Status__c": "Open",
    "Complaint_Description__c": "Test",
    "Solution_Provided__c": "test",
    "Close_Date__c": null
},
],
  dealerTicketLoader: false,

  dealerInfo: [],
  dealerInfoLoader: false,

  customerFocus: [],
  customerFocusLoader: false,

  customerGeneral: [],
  customerGeneralLoader: false,

  dealerPoints: [],
  dealerPointsLoader: false,

  dealerGift: [],
  dealerGiftLoader: false,
};
