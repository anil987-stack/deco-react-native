import React, { Component } from 'react'
import { View, Text, Alert,TouchableOpacity } from 'react-native'
import { Picker, Card } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WhiteButton from 'App/Components/WhiteButton';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import Styles from './ExistingCompetitorScreenStyle';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon';
// import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from 'App/Constants'
import { smallBottomMargin } from 'App/Theme/Metrics';
import NavigationService from 'App/Services/NavigationService'
// import LayoutScreen from 'App/Layout/LayoutScreen';
import { HelperService } from 'App/Services/Utils/HelperService';
import UserActions from 'App/Stores/User/Actions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Wave from 'App/Components/WaveCurls/Wave';
import Colors from 'App/Theme/Colors';
import Complaintcard from 'App/Components/ComplaintComponent/ComplaintCard'


// import ImagePic from '../../../../Components/ImagePicker/Imageinbutton'
class ExistingCompetitorScreen extends Component {
 

  render() {
    const { area,agentid,token,sfid } = this.props
    
    return (
      <View style={Styles.box1}>
      <View style={{alignSelf:'center',width:'90%'}}>
      <Complaintcard/>
</View>
     
      <TouchableOpacity
        style={Styles.plusIcon}
        onPress={() => NavigationService.navigate('CreateExistingProduct')}
        >
        <GenericIcon
        name={'add'}
        style={{ color: Colors.white, fontSize: wp('11%'), alignSelf: 'center' }}
          />
          
        </TouchableOpacity> 

        </View>
      
    )
  }
}


const mapStateToProps = (state) => ({
  
  token: state.user.access_token,
  agentid: state.user.id,
  sfid: state.user.loginDetails.userId,
})

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExistingCompetitorScreen)

