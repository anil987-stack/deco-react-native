import LocalActions from 'App/Stores/LocalExpense/Actions';
// import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import OrderActions from '../../../Stores/Orders/Actions'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import NoDataFound from 'App/Components/NoDataFound'
import Loading from '../../../Components/Loading';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView,FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import OrderCard from './OrderCard';
import moment from 'moment';

class RejectedCard extends Component {
    // componentDidMount() {
    //     const{fetchSecondaryOrders,token}=this.props;
    //     let monthIndex = moment().format('M') - 1;

    //     fetchSecondaryOrders({
    //         token,
    //         month:HelperService.getMonthindex(monthIndex)

    //     })
  
    //     }
    //     fetchCall(){
    //         const{fetchSecondaryOrders,token}=this.props;
    //         let monthIndex = moment().format('M') - 1;

    //         fetchSecondaryOrders({
    //             token,
    //             month:HelperService.getMonthindex(monthIndex)

    //         })
      

    //     }

        filterResults(list) {
		
            const{
                token,
                userid,
               
            }=this.props;
            let result = '';
            result = list.filter((obj) => obj.Status__c == "Rejected" );
            // console.log(result)
            return result
          }

          getCardNode(data) {
            return <OrderCard data={data} id={data.Id}/>
          }

        getDataNode(){

            let visibleNode=[];
            
            const{
                data,
                loading,
              
                loader
            
            }=this.props;
            
            
            
            
            
            
            if(data && data.length){
            
             // let filteredSitesList = this. searchKeyValueInList(data.map((obj) => obj));
             let searchedFilteredList = this.filterResults(data);

            
                if(searchedFilteredList.length){
                    visibleNode=(
                            <FlatList
                           
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={({item})=>this.getCardNode(item) }
                        keyExtractor={item => item.Id}
                        // refreshing={loading}
                        // onRefresh={() => this.fetchCall()}
                         />
                       
            
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
            





    render() {

        return (
            <View style={{ marginHorizontal: 5 }}>

               {this.getDataNode()}

            </View>

        )
    }
}


const mapStateToProps = (state) => ({
    data:state.orders.secondaryOrder,
    token:state.user.token,
    loading:state.orders.fetchSecondaryOrderLoader
});

const mapDispatchToProps = (dispatch) => ({
    fetchSecondaryOrders: (params) => dispatch(OrderActions.fetchSecondaryOrder(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RejectedCard)


