import React,{Component  } from "react";
import { View,Text,FlatList } from "react-native";
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading'
import { connect } from "react-redux";
import RetailersActions from 'App/Stores/Retailers/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import CommonActions from 'App/Stores/Common/Actions';
import RetailerTuple from 'App/Containers/Retailers/RetailerTuple'
import NavigationService from 'App/Services/NavigationService'
class Lead extends Component{
   
    // componentDidMount() {
    //     this.fetchCall();
    //   }
    
    
    //   fetchCall() {
    //     const {
    //         fetchRetailers,
    //      token
    //     } = this.props
    
    //     fetchRetailers({
    //         token
    //     });
     
    //   }
    filterResults(list){
      const {
        searchByAreaFilters,
        retailerSearchFilters
      } = this.props;
    //  console.log(list);
  
      let
      //  filteredList = HelperService.searchTextListFilter(list, 'area', searchByAreaFilters['beat']);
      // filteredList = HelperService.searchTextListFilter(list, 'Name', searchByAreaFilters['name']);
      filteredList = HelperService.sortListFilter(list, 'Name', 'ASC');
		  filteredList = HelperService.searchTextListFilter(list, 'Beat__c', retailerSearchFilters["beat"]);

      return filteredList;
    }
    searchKeyValueInList(list) {
        // let result = '';
        // result = list.filter((obj) => obj.Account_Type__c == 'Leads'   );
        // console.log(result)
        // return result
        const{Beat__c}=this.props;

    let result = '';
    if(Beat__c){
      result = list.filter((obj) => obj.Account_Type__c == 'Leads' && obj.Beat__c === Beat__c);
    }else{
      result = list.filter((obj) => obj.Account_Type__c == 'Leads');
    }
    
    return result
    }
    

    getDataNode(){

        let visibleNode=[];
        
        const{
            data,
        loading
        }=this.props;
        
        
        if(data && data.length){
          let data1 = this.filterResults(data);
          let filteredSitesList = this. searchKeyValueInList(data1.map((obj) => obj));
        
            if(filteredSitesList.length){
                visibleNode=(
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredSitesList}
                        renderItem={({item})=><RetailerTuple
                        item={item}
                        id={item.sfid}
                       // onPress={() => this.onSelectRetailer({ id: item.sfid, data: item, })}
                      />}
                    keyExtractor={item => item.id}
                    refreshing={loading}
                    onRefresh={() => this.fetchCall()} />
                   
        
                )
            } else {
                visibleNode =<NoDataFound text={' Leads Not  Found'} />
              }
            } else if (loading) {
              visibleNode = <Loading />
            } else if ((!data || (data && !data.length) && !loading)) {
              visibleNode = <NoDataFound text={'Leads Not Found'} />
            }
        
            return visibleNode;
        }
        
        


render(){




return(

    <View style={{flex:1,backgroundColor:'white'}}>

        {this.getDataNode()}

    </View>


)


}

}

const mapStateToProps = (state) => ({
    token: state.user.token,
    agentid: state.user.id,
    agentAreas: state.user.agentAreas,
    loading: state.retailers.fetchRetailersLoader,
    retailerSearchFilters: state.retailers.retailerSearchFilters,
    isConnected: state.network.isConnected,
    data: state.retailers.retailersList,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    selectRetailer: (params) => dispatch(RetailersActions.selectRetailer(params)),
    selectDealer: (params) => dispatch(RetailersActions.selectDealer(params)),
    fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
    extractFormData: (params) => dispatch(RetailersActions.extractFormData(params)),
    clearSelectRetailer: () => dispatch(RetailersActions.clearSelectRetailer()),
    updateSearchFilters: (params) => dispatch(RetailersActions.updateSearchFilters(params)),
    fetchRetailerArea: (params) => dispatch(CommonActions.fetchRetailerArea(params)),
  
  });
  


export default connect(mapStateToProps,mapDispatchToProps)(Lead)
