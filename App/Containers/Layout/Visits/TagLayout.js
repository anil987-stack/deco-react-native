import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native'
import BackArrowButton from 'App/Components/BackArrowButton';
import { Colors,Fonts } from 'App/Theme';
 import { Body, Button, Header, Left, Right,  Title } from 'native-base';
import { connect } from 'react-redux';
import NavigationService from "App/Services/NavigationService"
import GenericIcon from 'App/Components/GenericIcon';
import InputText from 'App/Components/FormInput/InputText';
import UsersActions from 'App/Stores/User/Actions'
import VisitsActions from 'App/Stores/Visits/Actions'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SearchBar from 'App/Components/SearchBar';
class TagLayout extends React.Component{

render(){
const{searchFilters,changeSearchFilters}=this.props;
return(

<View>
<View style={Styles.head}>
<TouchableOpacity transparent>
		<GenericIcon
	  		name={'arrow-back'}
	  		onPress={NavigationService.goback}
	    	style={{ color:Colors.white,fontSize: wp('8%'),marginLeft:hp('1'),marginTop:hp('1')}}
		/>

	</TouchableOpacity>
    <View style={{ flexDirection: 'row',marginTop:-20 }}>
                        <Text style={Styles.t1}>Tag</Text>
                        <Text style={Styles.t2}>Manager</Text>
                    </View>
                    <View >
                    <SearchBar
				            placeholder={`Search Name`}
				            onInputChange={(text) => changeSearchFilters({ edited_field: 'name', 'edited_value': text })}
				            onInputSubmit={(text) => changeSearchFilters({ edited_field: 'name', 'edited_value': text })}
				            onInputClear={(text) =>  changeSearchFilters({ edited_field: 'name', 'edited_value': '' })}
				           value={searchFilters['searchValue']}
				            ContainerStyles={Styles.searchContainer}
				          />
                    </View>

  </View>                  

</View>


)

}
}
const mapStateToProps = (state) => ({
	visitsDisplayList: state.visits.visitsDisplayList,
	filteredDisplayData: state.visits.filteredDisplayData,
	token: state.user.token,
	agentid: state.user.id,
	// agentid: state.user.id,
	userid:state.user.loginDetails.userId,
	searchFilters: state.visits.searchFilters,
	isASM: state.user.psmList,
	// psmList: state.user.psmList.concat([{ id: state.user.id, name: 'Self' }]),
	psmList: state.user.psmList ?[{ id: '', name: 'All' }].concat(state.user.psmList.concat([{id: state.user.id, name: 'Self'}])):[],
	agentAreas: state.user.agentCity?[{ id: '', name: 'All' }].concat(state.user.agentCity):[],
	agentAreaPjp				: state.common.agentAreaPjp, 
	// agentBeatPjp				: state.common.agentBeatPjp, 
	data:state.user.pjpList,
	filteredPjpDisplayData:state.user.filteredPjpDisplayData,
	loader: state.common.fetchAllAreaPjpLoading,
	visitCount: state.visits.filteredDisplayData && state.visits.filteredDisplayData.length ? state.visits.filteredDisplayData.length : 0,
	businessChannel: state.user.user_details ? state.user.user_details.business_channel__c : '',
	isManager: state.user.user_details ? state.user.user_details.designation__c : '',
	filteredBeatPjpDisplayData:state.user.filteredBeatPjpDisplayData
});

const mapDispatchToProps = (dispatch) => ({
	changeSearchFilters: (params) => dispatch(VisitsActions.changeSearchFilters(params)),
	getVisitsDisplayList: (params) => dispatch(VisitsActions.getVisitsDisplayList(params)),
	// fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
	getAreaPjp: (params) => dispatch(CommonActions.fetchAllAreaPjp(params)),
	getAllpsm:(params)=> dispatch(UserActions.fetchAllPsm(params)),
	beatList:(params)=> dispatch(UserActions.makePjpSearchList(params)),
	fetchBeatPjp: (params) => dispatch(UserActions.fetchBeatPjp(params)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TagLayout)

const Styles = StyleSheet.create({
    head: {
        height: hp('15%'),
        backgroundColor:Colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
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
    },	searchContainer: {
		//paddingVertical: 0,
		width: '83%',
		borderRadius:5,
		paddingHorizontal: 20,
		elevation: 10,
		backgroundColor: 'white',
		fontSize: wp('3.8%'),
		fontWeight:'700',
		color: Colors.blue,
		alignSelf:'center',
		
		justifyContent:"center",
		marginBottom:10,
		 marginTop:9,
		height:'46%'
	},
});