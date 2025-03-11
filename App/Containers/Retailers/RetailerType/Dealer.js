import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading'
import { connect } from "react-redux";
import RetailersActions from 'App/Stores/Retailers/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import CommonActions from 'App/Stores/Common/Actions';
import RetailerTuple from 'App/Containers/Retailers/RetailerTuple'
import NavigationService from 'App/Services/NavigationService'
import { Colors } from "react-native/Libraries/NewAppScreen";
class Dealer extends Component {

  componentDidMount() {
    this.fetchCall();
  }


  fetchCall() {
    const {
      data,
      fetchRetailers,
      token
    } = this.props
    // console.log(data);
    fetchRetailers({
      token
    });

  }

  onSelectRetailer(params) {
    NavigationService.navigate('RetailerInfoScreen', params);
    this.props.selectRetailer(params);
  }

  searchKeyValueInList(list) {
    // let result = '';
    // result = list.filter((obj) => obj.Account_Type__c == 'Dealer');
    // console.log(result)
    // return result
    const{Beat__c, accounttype}=this.props;

    let result = '';
    if(Beat__c){
      result = list.filter((obj) => obj.Account_Type__c == accounttype[0] && obj.Beat__c === Beat__c);
    }else{
      result = list.filter((obj) => obj.Account_Type__c == accounttype[0] );
    }
   
    return result
  }



    filterResults(list){
      const {
        searchByAreaFilters,
        retailerSearchFilters
      } = this.props;
  
  
      let
      //  filteredList = HelperService.searchTextListFilter(list, 'area', searchByAreaFilters['beat']);
      // filteredList = HelperService.searchTextListFilter(list, 'Name', searchByAreaFilters['name']);
      filteredList = HelperService.sortListFilter(list, 'Name', 'ASC');
		  filteredList = HelperService.searchTextListFilter(list, 'Name', retailerSearchFilters["searchValue"]);
		  filteredList = HelperService.searchTextListFilter(list, 'Beat__c', retailerSearchFilters["beat"]);

      return filteredList;
    }

  //   searchKeyValueInList(list){
  //       let result = '';
  //       result = list.filter((obj) => obj.Account_Type__c == 'Dealer'   );
  // //  console.log(result)
  //       return result;
  //   }
    

    getDataNode(){

        let visibleNode=[];
        
        const{
            data,
        loading
        }=this.props;
      
        if(data && data.length){
        
          let data1 = this.filterResults(data);
          let filteredSitesList = this.searchKeyValueInList(data1.map((obj) => obj));
           let filteredList = this.filterResults(filteredSitesList);
            if(filteredSitesList.length){
             
                visibleNode=(
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filteredSitesList}
                        renderItem={({item})=><RetailerTuple
                        item={item}
                        id={item.sfid}
                       //bgcolor={clor}
                        
                       onPress={() => this.onSelectRetailer({ id: item.Id, data: item, })}
                      />}
                    keyExtractor={item => item.id}
                    refreshing={loading}
                    onRefresh={() => this.fetchCall()} />
                   
        
                )
            } else {
                visibleNode =<NoDataFound text={'Not  Found'} />
              }
            } else if (loading) {
              visibleNode = <Loading />
            } else if ((!data || (data && !data.length) && !loading)) {
              visibleNode = <NoDataFound text={'Not Found'} />
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
  searchByAreaFilters:state.retailers.retailerSearchFilters,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  isConnected: state.network.isConnected,
  data: state.retailers.retailersList,
  accounttype:state.retailers.accountlist,
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



export default connect(mapStateToProps, mapDispatchToProps)(Dealer)
