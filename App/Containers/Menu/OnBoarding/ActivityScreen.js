import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import GenericIcon from 'App/Components/GenericIcon';
import { HelperService } from 'App/Services/Utils/HelperService';
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import { ApplicationStyles } from "App/Theme";
import { connect } from 'react-redux';
import Colors from 'App/Theme/Colors';
import menuActions from 'App/Stores/Menu/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import VisitsActions from 'App/Stores/Visits/Actions';
import Styles from "./onBoardingStyle"
import ModalOnboarding from './ModalOnboarding';
import Activitycard from './ActivityScreenCard'

class ActivityScreen extends Component {
    componentDidMount(){
        this.fetchcall();  
    }
    fetchcall(){
    const{getVisitOnboarding,token}=this.props;
    const{data}=this.props.navigation.state.params;
    
    getVisitOnboarding({
        onboardingId: data.Id,
        token
    })
    }  
    
  show(data){
      const{
        showModal
      }=this.props;
      showModal({onboarding:data})
  }

  getDataNode(item){

    

    return (
       <Activitycard item={item} />
    );

  }

 render(){
const{isObjModalVisible,visitsAction,hideModal,loading,activitylist}=this.props;
const{data}=this.props.navigation.state.params;
let visibleNode = [];

		if (activitylist && activitylist.length) {
			// let searchedList = this.filterResult(data);
			// let searchedFilteredList = this.filterResults(searchedList);
			if (activitylist.length) {
				visibleNode = (
					<FlatList
						data={activitylist}
						renderItem={({ item }) => this.getDataNode(item)}
						onRefresh={() => this.fetchcall()}
						refreshing={loading}
						keyExtractor={item => item.Id}

					/>
				)
			} else {
				visibleNode = (
					<NoDataFound text={'No Record found.'}></NoDataFound>
				);
			}
		} else if (loading) {
			visibleNode = <Loading />
		} else if (activitylist && !activitylist.length && !loading) {
			visibleNode = (
				<NoDataFound text={'No Record found.'}>
					<GenericIcon
						name={'refresh'}
						show={true}
						onPress={() => this.fetchcall()}
						style={{ color: Colors.button, fontSize: 35, alignSelf: 'center', padding: 10 }}
					/>
				</NoDataFound>
			)
		}



return(

<View style={{flex:1}}>
    {visibleNode}
<TouchableOpacity
        style={Styles.plusIcon}
        onPress={()=>this.props.showModal({
            data: data,
            modalData: {
              content: (<ModalOnboarding  data={data} />),
              heading: '',
              bodyFlexHeight:.8
            }
        })}>
        <GenericIcon
        name={'add'}
        style={{ color: Colors.white, fontSize: wp('12%'), alignSelf: 'center' }}
          />
        </TouchableOpacity> 
</View>

)
    }
}
const mapStateToProps = (state) => ({
    userid:state.user.loginDetails.userId,
    token: state.user.token,
    isObjModalVisible:state.menu.isShowmodal,
    loading:state.menu.getVisitOnboardingLoading,
    activitylist:state.menu.getVisitAgainstOnboarding,
});

const mapDispatchToProps = (dispatch) => ({
    getVisitOnboarding:(params)=>dispatch(menuActions.getVisitOnboarding(params)),
    showModal:(params)=>dispatch(menuActions.showOnboardingModal(params)),
    hideModal:()=>dispatch(menuActions.hideOnboardingModal()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityScreen)
