import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({

    fetchLocalExpenseData: ['payload'],
    fetchLocalItemExpenses: ['payload'],
    fetchTeamExpenses: ['payload'],
    fetchTeamItemExpenses: ['payload'],
    
    fetchLocalExpenseDetails: ['payload'],
    fetchLocalExpenseDetailsSuccess:['payload'],
    fetchLocalExpenseDetailsFailure:null,
    fetchLocalExpenseDetailsLoading:null,
    fetchLocalExpenseDetailsLoadingStop:null,


    uploadLocalImage: ['payload'],
    uploadLocalImageLoading: null,
    uploadLocalImageSuccess: null,
    uploadLocalImageFailure: null,

    fetchLocalImage: ['payload'],
    fetchLocalImageLoading: null,
    fetchLocalImageSuccess: ['payload'],
    fetchLocalImageFailure: null,

    fetchRetailerList: ['payload'],
    fetchDealerList: ['payload'],

    fetchLocalExpenseLoading: null,
    fetchLocalExpenseSuccess: ['payload'],
    fetchLocalExpenseFailure: null,
    fetchLocalExpenseDetailsSuccess: ['payload'],
    fetchLocalExpenseDetailsFailure: null,
    fetchTeamExpenseLoading: null,
    fetchTeamExpenseSuccess: ['payload'],
    fetchTeamExpenseFailure: null,

    fetchLocalExpenseItemLoading: null,
    fetchLocalExpenseItemSuccess: ['payload'],
    fetchLocalExpenseItemFailure: null,

    fetchTeamExpenseItemLoading: null,
    fetchTeamExpenseItemSuccess: ['payload'],
    fetchTeamExpenseItemFailure: null,

    updateExpense: ['payload'],
    updateExpenseLoading: null,
    updateExpenseSuccess: ['payload'],
    updateExpenseFailure: null,

    updateExpenseDetail: ['payload'],
    updateExpenseDetailLoading: null,
    updateExpenseDetailSuccess: ['payload'],
    updateExpenseDetailFailure: null,

    sendApprovalLocalExpense: ['payload'],
    sendApprovalLoading: null,
    sendApprovalSuccess: ['payload'],
    sendApprovalFailure: null,

    approveRejectLocalExpense: ['payload'],
    approveRejectLoading: null,
    approveRejectSuccess: ['payload'],
    approveRejectFailure: null,

    addRemark: ['payload'],
    addRemarkLoading: null,
    addRemarkSuccess: ['payload'],
    addRemarkFailure: null,

    changeType: ['payload'],

    clearLocalExpense: null,
    clearTeamExpense: null,

    changeExpenseForm: ['payload'],
    expenseFormValidationFailed: ['payload'],

    updateMonthNumber: ['payload'],

    updateLocalExpenseList: ['payload'],

    selectLocalExpense: ['payload'],
    selectLocalItemExpense: ['payload'],
    selectTeamExpense: ['payload'],
    selectTeamItemExpense: ['payload'],

    updateExpenseForm: ['payload'],


    clearSelectLocalExpense: null,
    clearSelectLocalItemExpense: null,
    clearSelectTeamExpense: null,
    clearSelectTeamItemExpense: null,
    clearLocalExpenseItemList: null,
    clearTeamExpenseItemList: null,

    clearExpenseForm: null,

    updateSearchFilters: ['payload'],

    changeLocalSearchFilters: ['payload'],

    doNothing: null,


    fetchExpenseAttachmentsDetails: ['payload'],
    fetchExpenseAttachmentsDetailsSuccess: ['payload'],
    fetchExpenseAttachmentsDetailsFailure: null,
    fetchExpenseAttachmentsDetailsLoading: ['payload'],
    fetchExpenseAttachmentsDetailsLoadingStop: null,


    fetchVisitImageAttach: ['payload'],
    fetchVisitImageAttachSuccess: ['payload'],
    fetchVisitImageAttachFailure: null,
    fetchVisitImageAttachLoading: ['payload'],
    fetchVisitImageAttachLoadingStop: null,

});

export const LocalTypes = Types
export default Creators