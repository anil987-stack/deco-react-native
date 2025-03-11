import userActions from 'App/Stores/User/Actions';
import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Icon, Container,ScrollableTab,TabHeading,Content } from 'native-base';
import React, { Component } from 'react';
import { ApplicationStyles } from "App/Theme";
import { connect } from 'react-redux';
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
// import { Icon, Input,  ScrollableTab,Container,TabHeading,Tab,Tabs, Content, } from "native-base";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, Modal,FlatList,Alert } from "react-native";
import NavigationService from 'App/Services/NavigationService'
// import KYCForm from './KYCForm';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import GenericIcon from 'App/Components/GenericIcon';
import { HelperService } from 'App/Services/Utils/HelperService';
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import OnboardingCard from '../TeamonboardingCard';
import menuActions from 'App/Stores/Menu/Actions';
class MyBoarding extends Component {
componentDidMount(){

this.fetchcall();

}

    fetchcall(){
const{
    token,
    userid,
    fetchOnBoarding
}=this.props;

fetchOnBoarding({
    token,
    userId:userid,
    asmId:userid,
    draft:"Draft"
})


    }

// onboarding(params){

//     NavigationService.navigate("KYCForm");
// }


    filterResults(list) {
		
        const{
            token,
            userid,
           
        }=this.props;
        let result = '';
        result = list.filter((obj) => obj.OwnerId != userid &&obj.Status__c=="Pending For Approval" );
        // console.log(result)
        return result
      }
    filterResult(list) {
		
        let searchFilters = this.props.searchFilters;
        
        let filteredList = HelperService.sortListFilter(list, 'Name', 'DSC');
     filteredList =HelperService.searchTextListFilter(list, 'Proprietor_name__c', searchFilters['name'] );
        return filteredList;
      }
ss(params){
    NavigationService.navigate("InfluencerKYCForm",{show:true});
this.props.selectonBoarding(params);
}

submit(params){
   
    const {token,userid,managerId, submitForApproval,submitapprove1,approve}=this.props;

    submitapprove1({
        status:'Pending',
        onboardingId:params.Id,
        token,
    })

    Alert.alert(
        'Submit For Approval',
        'Do you want to Approve this Onboarding?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => this.finalsubmission()},
    ],
    {cancelable: false},
);

//  setTimeout(() => {
//   this.finalsubmission()
//  },2000);
 
}
finalsubmission(){

    const {token,userid,managerId, submitForApproval,submitapprove1,approve}=this.props;

    let requestData = {"requests" : [{
        "actionType": "Approve",
        "contextId": approve&&approve[0]&&approve[0].Id?approve[0].Id:'',
        "nextApproverIds": [""],
        "skipEntryCriteria": "false",
        "comments" : "this record is approved"}
        ]}
        
    

submitForApproval({payload:requestData,token})

}
Rejectsubmission(){

    const {token,userid,managerId, submitForApproval,submitapprove1,approve}=this.props;

    let requestData = {"requests" : [{
        "actionType": "Reject",
        "contextId": approve&&approve[0]&&approve[0].Id?approve[0].Id:'',
        "nextApproverIds": [""],
        "skipEntryCriteria": "false",
        "comments" : "this record is approved"}
        ]}
        
    

submitForApproval({payload:requestData,token})

}


Reject(params){
   
    const {token,userid,managerId, submitForApproval,submitapprove1,approve}=this.props;

    submitapprove1({
        status:'Pending',
        onboardingId:params.Id,
        token,
    })
    Alert.alert(
        'Submit For Reject',
        'Do you want to Reject this Onboarding?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => this.Rejectsubmission()},
    ],
    {cancelable: false},
);
}

      getDataNode(item) {
		const {
            data,
            loading,
            searchFilters,
            fetchOnBoarding,
            selectonBoarding,
            loader
		} = this.props;

		return (
			<OnboardingCard
            onboardingdata={item}
          
            submitForApproval={()=>this.submit(item)}
            submitForReject={()=>this.Reject(item)}
            onclickable={()=>this.ss(item)}
			/>
		);
	}
        



    render() {
        const {
            data,
            loading,
            searchFilters,
            fetchOnBoarding
		} = this.props;

		let visibleNode = [];

		if (data && data.length) {
			let searchedList = this.filterResult(data);
			let searchedFilteredList = this.filterResults(searchedList);
			if (searchedFilteredList.length) {
				visibleNode = (
					<FlatList
						data={searchedFilteredList}
						renderItem={({ item }) => this.getDataNode(item)}
						onRefresh={() => this.fetchcall()}
						refreshing={loading}
						keyExtractor={item => item.Id}

					/>
				)
			} else {
				visibleNode = (
					<NoDataFound style={{marginTop:10}} text={'No record  found for selected filter.'}></NoDataFound>
				);
			}
		} else if (loading) {
			visibleNode = <Loading />
		} else if (data && !data.length && !loading) {
			visibleNode = (
				<NoDataFound text={'No Visits for this date.'}>
					<GenericIcon
						
						name={'refresh'}
						show={true}
						onPress={() => this.fetchcall()}
						style={{ color: Colors.button, fontSize: 35, alignSelf: 'center', padding: 10 }}
					/>
				</NoDataFound>
			)
		}









        return (
            <View style={{flex:1}}>

                <View>
                {visibleNode}
                </View>
             
             {/* <TouchableOpacity
          style={Styles.plusIcon}
         onPress={() => NavigationService.navigate('KYCForm',{show:false})}
          >
               <GenericIcon
            name={'add'}
            style={{ color: Colors.white, fontSize: wp('12%'), alignSelf: 'center' }}
          /> */}
          {/* <Image
                        style={{ width: 40, height: 40, borderRadius: 3, tintColor: Colors.white, }}
                        source={require('App/Assets/Images/plus.png')}
                    /> */}
        {/* </TouchableOpacity>  */}
{/*             
                <TouchableOpacity
                onPress={() => NavigationService.navigate('KYCForm')}
                style={{left:hp('40%'), top:hp('30%')}}>
                    <Image
                        style={{ width: 45, height: 45, borderRadius: 3, tintColor: Colors.primary, }}
                        source={require('App/Assets/Images/plus.png')}
                    />
                </TouchableOpacity> */}
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    data:state.user.onboardingList,
    loading:state.user.getOnboardingLoading,
    searchFilters: state.user.searchFilters,
    userid:state.user.loginDetails.userId,
    token: state.user.token,
    managerId:state.startday.userDetailList.Id,
    loader:state.menu.submitForApprovalLoader,
    approve:state.menu.approvereject

});

const mapDispatchToProps = (dispatch) => ({
    changeType: (params) => dispatch(LocalActions.changeType(params)),
    fetchOnBoarding:(params)=>dispatch(userActions.getOnboarding(params)),
    submitForApproval:(params)=>dispatch(menuActions.submitForApproval(params)),
     selectonBoarding:(params)=>dispatch(menuActions.SelectOnboardingList(params)),
     submitapprove1:(params)=>dispatch(menuActions.submitForApprovaReject(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBoarding)

const Styles = StyleSheet.create({
    head: {
        height: hp('23%'),
        backgroundColor: Colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
        flexDirection: 'column'
    }, t1: {
        fontSize: 23, fontWeight: 'bold', marginLeft: 50, color: '#FFFFFF'
    },
    t2: {
        fontSize: 23, fontWeight: 'bold', marginLeft: 15, color: '#343434'
    }, tt: {
        flexDirection: 'row'
        , height: hp('5%'), backgroundColor: 'white', width: wp('85%'), borderRadius: 5, alignSelf: 'center'
    }, card: {
        height: hp('22%'), marginVertical: 20, width: wp('90%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white',
    },
    plusIcon:{
        bottom: 15,
        position: 'absolute',
       // right: 25,
        alignSelf:'flex-end',
        borderRadius: 50,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'12%',
        height:'9%',
        borderWidth:0,
        right:"10%"
    
    },
});    