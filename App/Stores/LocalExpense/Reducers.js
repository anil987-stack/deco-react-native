/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LocalTypes } from './Actions'
import _ from 'lodash';

// fetch local expenses reducer

export const fetchLocalExpenseLoading = (state) => ({
    ...state,
    fetchLocalExpenseLoader: true
});

export const fetchLocalExpenseSuccess = (state, { payload }) => ({
    ...state,
    localExpenseList: _.cloneDeep(payload),
    fetchLocalExpenseLoader: false
});

export const fetchLocalExpenseFailure = (state) => ({
    ...state,
    fetchLocalExpenseLoader: false,
    localExpenseList: []
});

//fetch local expense item reducer

export const fetchLocalExpenseItemLoading = (state) => ({
    ...state,
    fetchLocalExpenseItemLoader: true
});

export const fetchLocalExpenseItemSuccess = (state, { payload }) => ({
    ...state,
    localExpenseItemList: _.cloneDeep(payload),
    fetchLocalExpenseItemLoader: false
});

export const fetchLocalExpenseItemFailure = (state) => ({
    ...state,
    fetchLocalExpenseItemLoader: false,
    localExpenseItemList: []
});

//fetch team expense reducer

export const fetchTeamExpenseLoading = (state) => ({
    ...state,
    fetchTeamExpenseLoader: true
});

export const fetchTeamExpenseSuccess = (state, { payload }) => ({
    ...state,
    teamExpenseList: _.cloneDeep(payload),
    fetchTeamExpenseLoader: false
});

export const fetchTeamExpenseFailure = (state) => ({
    ...state,
    fetchTeamExpenseLoader: false,
    teamExpenseList: []
});

// fetch team expense item reducer

export const fetchTeamExpenseItemLoading = (state) => ({
    ...state,
    fetchTeamExpenseItemLoader: true
});

export const fetchTeamExpenseItemSuccess = (state, { payload }) => ({
    ...state,
    teamExpenseItemList: _.cloneDeep(payload),
    fetchTeamExpenseItemLoader: false
});

export const fetchTeamExpenseItemFailure = (state) => ({
    ...state,
    fetchTeamExpenseItemLoader: false,
    teamExpenseItemList: []
});

export const fetchRetailerList = (state, { payload }) => ({
    ...state,
    retailerList: _.cloneDeep(payload)
})

export const fetchDealerLIst = (state, { payload }) => ({
    ...state,
    dealerList: _.cloneDeep(payload)
})

//update expense item

export const updateExpenseLoading = (state) => ({
    ...state,
    updateExpenseLoader: true
});

export const updateExpenseSuccess = (state) => ({
    ...state,
    expenseForm: {},
    updateExpenseLoader: false
});

export const updateExpenseFailure = (state) => ({
    ...state,
    updateExpenseDetailLoader: false
});

export const updateExpenseDetailLoading = (state) => ({
    ...state,
    updateExpenseDetailLoader: true
});

export const updateExpenseDetailSuccess = (state) => ({
    ...state,
    expenseForm: {},
    updateExpenseDetailLoader: false
});

export const updateExpenseDetailFailure = (state) => ({
    ...state,
    updateExpenseLoader: false
});

export const approveRejectLoading = (state) => ({
    ...state,
    updateExpenseLoader: true
});

export const approveRejectSuccess = (state) => ({
    ...state,
    expenseForm: {},
    updateExpenseLoader: false
});

export const approveRejectFailure = (state) => ({
    ...state,
    updateExpenseLoader: false
});

export const addRemarkLoading = (state) => ({
    ...state,
    updateExpenseLoader: true
});

export const addRemarkSuccess = (state) => ({
    ...state,
    expenseForm: {},
    updateExpenseLoader: false
});

export const addRemarkFailure = (state) => ({
    ...state,
    updateExpenseLoader: false
});


export const clearLocalExpenseList = (state) => ({
    ...state,
    localExpenseList: []
})

export const clearTeamExpenseList = (state) => ({
    ...state,
    teamExpenseList: []
})

// send for Approval

export const sendApprovalLoading = (state) => ({
    ...state,
    sendApprovalLoader: true
});

export const sendApprovalSuccess = (state) => ({
    ...state,
    sendApprovalLoader: false
});

export const sendApprovalFailure = (state) => ({
    ...state,
    sendApprovalLoader: false
});

export const updateMonthNumber = (state, { payload }) => ({
    ...state,
    monthNumber: _.cloneDeep(payload)
});

export const updateLocalExpenseList = (state, { payload }) => ({
    ...state,
    localExpenseList: _.cloneDeep(payload),
})

export const selectLocalExpense = (state, { payload }) => ({
    ...state,
    selectLocalExpense: _.cloneDeep(payload)
});

export const selectTeamExpense = (state, { payload }) => ({
    ...state,
    selectTeamExpense: _.cloneDeep(payload)
});

export const selectLocalItemExpense = (state, { payload }) => ({
    ...state,
    selectLocalExpenseItem: _.cloneDeep(payload)
});

export const updateExpenseForm = (state, { payload }) => ({
    ...state,
    expenseForm: _.cloneDeep(payload)
})

export const selectTeamItemExpense = (state, { payload }) => ({
    ...state,
    selectTeamExpenseItem: _.cloneDeep(payload)
});

export const clearSelectLocalExpense = (state) => ({
    ...state,
    selectLocalExpense: {}
});

export const clearSelectTeamExpense = (state) => ({
    ...state,
    selectTeamExpense: {}
});

export const clearSelectLocalItemExpense = (state) => ({
    ...state,
    selectLocalItemExpense: {}
});


export const clearLocalExpenseItemList = (state) => ({
    ...state,
    localExpenseItemList: []
})

export const clearTeamExpenseItemList = (state) => ({
    ...state,
    teamExpenseItemList: []
})

export const clearSelectTeamItemExpense = (state) => ({
    ...state,
    selectTeamItemExpense: {}
});

export const clearExpenseForm = (state) => ({
    ...state,
    expenseForm: {}
})

//details saga by rajan
export const fetchLocalExpanseDetailsSuccess = (state, { payload }) => ({
    ...state,
    localExpanseDetails: _.cloneDeep(payload),
    localExpanseDetailsLoading:false
});



export const fetchLocalExpanseDetailsLoading = (state)=>({
    ...state,
    localExpanseDetailsLoading:true
});
export const fetchLocalExpanseDetailsFailure = (state)=>({
    ...state,
    localExpanseDetailsLoading:false

})

//-------------------------------------------------------

export const updateSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.searchFilters);
    updated_search_filters[payload.edited_field] = payload.edited_value;

    return {
        ...state,
        searchFilters: {
            ...state.searchFilters,
            ...updated_search_filters
        }
    }
};


export const changeExpenseForm = (state, { payload }) => {
    let updated_form = _.cloneDeep(state.expenseForm);
    updated_form[payload.edited_field] = payload.edited_value;
    return {
        ...state,
        expenseForm: {
            ...state.expenseForm,
            ...updated_form
        },
        expenseFormValidation: {
            invalid: false,
            invalid_field: ''
        }
    }
};

export const changeType = (state, { payload }) => {
    return {
        ...state,
        type: payload ? 'other' : 'self'
    }
};

export const expenseFormValidationFailed = (state, { payload }) => ({
    ...state,
    expenseFormValidation: {
        ...payload
    }
});

export const doNothing = (state) => ({
    ...state
});

export const fetchLocalImageLoading = (state) => ({
    ...state,
    fetchLocalImageLoader: true
});

export const fetchLocalImageSuccess = (state, { payload }) => ({
    ...state,
    localImageList: _.cloneDeep(payload),
    fetchLocalImageLoader: false
});

export const fetchLocalImageFailure = (state) => ({
    ...state,
    fetchLocalImageLoader: false,
    localImageList: []
});

export const uploadLocalImageLoading = (state) => ({
    ...state,
    uploadLocalImageLoader: true
});

export const uploadLocalImageSuccess = (state) => ({
    ...state,
    uploadLocalImageLoader: false
});

export const uploadLocalImageFailure = (state) => ({
    ...state,
    uploadLocalImageLoader: false
});


export const fetchExpenseAttachmentsDetailsSuccess = (state, { payload }) => {
    return {
        ...state,
        fetchExpenseAttachmentsDetailsLoader: false,
        ExpenseAttachmentsDetailsList: payload
    }
  }
  
  export const fetchExpenseAttachmentsDetailsFailure = (state, { payload }) => {
    return {
        ...state,
        fetchExpenseAttachmentsDetailsLoader: false,
        ExpenseAttachmentsDetailsList: []
    }
  }
  
  
  export const fetchExpenseAttachmentsDetailsLoading = (state, { payload }) => {
    return {
        ...state,
        fetchExpenseAttachmentsDetailsLoader: payload
    }
  }
  
  
  export const fetchExpenseAttachmentsDetailsLoadingStop = (state, { payload }) => {
    return {
        ...state,
        fetchExpenseAttachmentsDetailsLoader: false
    }
  }


  export const changeLocalSearchFilters = (state, { payload }) => {
    let updated_search_filters = _.cloneDeep(state.searchFilter);
    updated_search_filters[payload.edited_field] = payload.edited_value;
    return {
        ...state,
        searchFilter: {
            ...state.searchFilter,
            ...updated_search_filters
        }
    }
};

export const fetchVisitImageAttachSuccess = (state, { payload }) => {
    return {
        ...state,
        fetchVisitAttachmentsDetailsLoader: false,
        VisitAttachmentsDetailsList: payload
    }
  }
  
  export const fetchVisitImageAttachFailure = (state, { payload }) => {
    return {
        ...state,
        fetchVisitAttachmentsDetailsLoader: false,
        VisitAttachmentsDetailsList: []
    }
  }
  
  
  export const fetchVisitImageAttachLoading = (state, { payload }) => {
    return {
        ...state,
        fetchVisitAttachmentsDetailsLoader: true
    }
  }
  
  
  export const fetchVisitImageAttachLoadingStop = (state, { payload }) => {
    return {
        ...state,
        fetchVisitAttachmentsDetailsLoader: false
    }
  }
export const reducer = createReducer(INITIAL_STATE, {

    [LocalTypes.UPLOAD_LOCAL_IMAGE_LOADING]: uploadLocalImageLoading,
    [LocalTypes.UPLOAD_LOCAL_IMAGE_SUCCESS]: uploadLocalImageSuccess,
    [LocalTypes.UPLOAD_LOCAL_IMAGE_FAILURE]: uploadLocalImageFailure,

    [LocalTypes.FETCH_LOCAL_IMAGE_LOADING]: fetchLocalImageLoading,
    [LocalTypes.FETCH_LOCAL_IMAGE_SUCCESS]: fetchLocalImageSuccess,
    [LocalTypes.FETCH_LOCAL_IMAGE_FAILURE]: fetchLocalImageFailure,

    [LocalTypes.FETCH_LOCAL_EXPENSE_LOADING]: fetchLocalExpenseLoading,
    [LocalTypes.FETCH_LOCAL_EXPENSE_SUCCESS]: fetchLocalExpenseSuccess,
    [LocalTypes.FETCH_LOCAL_EXPENSE_FAILURE]: fetchLocalExpenseFailure,

    [LocalTypes.FETCH_LOCAL_EXPENSE_LOADING]: fetchLocalExpenseLoading,
    [LocalTypes.FETCH_LOCAL_EXPENSE_SUCCESS]: fetchLocalExpenseSuccess,
    [LocalTypes.FETCH_LOCAL_EXPENSE_FAILURE]: fetchLocalExpenseFailure,


    [LocalTypes.FETCH_LOCAL_EXPENSE_ITEM_LOADING]: fetchLocalExpenseItemLoading,
    [LocalTypes.FETCH_LOCAL_EXPENSE_ITEM_SUCCESS]: fetchLocalExpenseItemSuccess,
    [LocalTypes.FETCH_LOCAL_EXPENSE_ITEM_FAILURE]: fetchLocalExpenseItemFailure,

    [LocalTypes.FETCH_LOCAL_EXPENSE_DETAILS_SUCCESS]:fetchLocalExpanseDetailsSuccess,
    [LocalTypes.FETCH_LOCAL_EXPENSE_DETAILS_FAILURE]:fetchLocalExpanseDetailsFailure,
    [LocalTypes.FETCH_LOCAL_EXPENSE_DETAILS_LOADING]:fetchLocalExpanseDetailsLoading,
    // [LocalTypes.FETCH_LOCAL_EXPENSE_DETAILS_LOADING_STOP]:fetchLocalExpanseDetailsLoadingStop,

    [LocalTypes.FETCH_TEAM_EXPENSE_LOADING]: fetchTeamExpenseLoading,
    [LocalTypes.FETCH_TEAM_EXPENSE_SUCCESS]: fetchTeamExpenseSuccess,
    [LocalTypes.FETCH_TEAM_EXPENSE_FAILURE]: fetchTeamExpenseFailure,

    [LocalTypes.FETCH_RETAILER_LIST]: fetchRetailerList,
    [LocalTypes.FETCH_DEALER_LIST]: fetchDealerLIst,

    [LocalTypes.FETCH_TEAM_EXPENSE_ITEM_LOADING]: fetchTeamExpenseItemLoading,
    [LocalTypes.FETCH_TEAM_EXPENSE_ITEM_SUCCESS]: fetchTeamExpenseItemSuccess,
    [LocalTypes.FETCH_TEAM_EXPENSE_ITEM_FAILURE]: fetchTeamExpenseItemFailure,


    [LocalTypes.UPDATE_EXPENSE_LOADING]: updateExpenseLoading,
    [LocalTypes.UPDATE_EXPENSE_SUCCESS]: updateExpenseSuccess,
    [LocalTypes.UPDATE_EXPENSE_FAILURE]: updateExpenseFailure,

    [LocalTypes.UPDATE_EXPENSE_DETAIL_LOADING]: updateExpenseDetailLoading,
    [LocalTypes.UPDATE_EXPENSE_DETAIL_SUCCESS]: updateExpenseDetailSuccess,
    [LocalTypes.UPDATE_EXPENSE_DETAIL_FAILURE]: updateExpenseDetailFailure,

    [LocalTypes.SEND_APPROVAL_LOADING]: sendApprovalLoading,
    [LocalTypes.SEND_APPROVAL_SUCCESS]: sendApprovalSuccess,
    [LocalTypes.SEND_APPROVAL_FAILURE]: sendApprovalFailure,

    [LocalTypes.APPROVE_REJECT_LOADING]: approveRejectLoading,
    [LocalTypes.APPROVE_REJECT_SUCCESS]: approveRejectSuccess,
    [LocalTypes.APPROVE_REJECT_FAILURE]: approveRejectFailure,

    [LocalTypes.ADD_REMARK_LOADING]: addRemarkLoading,
    [LocalTypes.ADD_REMARK_SUCCESS]: addRemarkSuccess,
    [LocalTypes.ADD_REMARK_FAILURE]: addRemarkFailure,

    [LocalTypes.CHANGE_EXPENSE_FORM]: changeExpenseForm,
    [LocalTypes.EXPENSE_FORM_VALIDATION_FAILED]: expenseFormValidationFailed,

    [LocalTypes.UPDATE_MONTH_NUMBER]: updateMonthNumber,

    [LocalTypes.UPDATE_EXPENSE_FORM]: updateExpenseForm,

    [LocalTypes.CHANGE_TYPE]: changeType,

    [LocalTypes.CLEAR_LOCAL_EXPENSE]: clearLocalExpenseList,
    [LocalTypes.CLEAR_TEAM_EXPENSE]: clearTeamExpenseList,

    [LocalTypes.SELECT_LOCAL_EXPENSE]: selectLocalExpense,
    [LocalTypes.CLEAR_SELECT_LOCAL_EXPENSE]: clearSelectLocalExpense,

    [LocalTypes.SELECT_LOCAL_ITEM_EXPENSE]: selectLocalItemExpense,
    [LocalTypes.CLEAR_LOCAL_EXPENSE_ITEM_LIST]: clearLocalExpenseItemList,
    [LocalTypes.CLEAR_SELECT_LOCAL_ITEM_EXPENSE]: clearSelectLocalItemExpense,

    [LocalTypes.SELECT_TEAM_EXPENSE]: selectTeamExpense,
    [LocalTypes.CLEAR_SELECT_TEAM_EXPENSE]: clearSelectTeamExpense,

    [LocalTypes.SELECT_TEAM_ITEM_EXPENSE]: selectTeamItemExpense,
    [LocalTypes.CLEAR_SELECT_TEAM_ITEM_EXPENSE]: clearSelectTeamItemExpense,
    [LocalTypes.CLEAR_TEAM_EXPENSE_ITEM_LIST]: clearTeamExpenseItemList,

    [LocalTypes.CLEAR_EXPENSE_FORM]: clearExpenseForm,

    [LocalTypes.UPDATE_LOCAL_EXPENSE_LIST]: updateLocalExpenseList,

    [LocalTypes.UPDATE_SEARCH_FILTERS]: updateSearchFilters,

    [LocalTypes.DO_NOTHING]: doNothing,


    [LocalTypes.FETCH_EXPENSE_ATTACHMENTS_DETAILS_SUCCESS]         :fetchExpenseAttachmentsDetailsSuccess,
    [LocalTypes.FETCH_EXPENSE_ATTACHMENTS_DETAILS_FAILURE]         :fetchExpenseAttachmentsDetailsFailure,
    [LocalTypes.FETCH_EXPENSE_ATTACHMENTS_DETAILS_LOADING]         :fetchExpenseAttachmentsDetailsLoading,
    [LocalTypes.FETCH_EXPENSE_ATTACHMENTS_DETAILS_LOADING_STOP]    :fetchExpenseAttachmentsDetailsLoadingStop,


    [LocalTypes.CHANGE_LOCAL_SEARCH_FILTERS]: changeLocalSearchFilters,

    [LocalTypes.FETCH_VISIT_IMAGE_ATTACH_SUCCESS] :fetchVisitImageAttachSuccess,
    [LocalTypes.FETCH_VISIT_IMAGE_ATTACH_FAILURE]:fetchVisitImageAttachFailure,
    [LocalTypes.FETCH_VISIT_IMAGE_ATTACH_LOADING]:fetchVisitImageAttachLoading,
    [LocalTypes.FETCH_VISIT_IMAGE_ATTACH_LOADING_STOP]:fetchVisitImageAttachLoadingStop,

});
