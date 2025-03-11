import React, { useState } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity,ImageBackground } from 'react-native'
import { Icon } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import Style from './Styles'
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import GenericIcon from 'App/Components/GenericIcon'
import ImagePicker from 'react-native-image-picker'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'

const MenuInfoTuple= ({ onPress, areas, data, id, Show , onPressLogoout, loading}) => {
  let [image,setImage] = useState("")
  return (
 
    <View style={[Style.box,{backgroundColor:Colors.lightPink}]} onPress={onPress}>
      <View style={{marginLeft:'0%', marginTop:'0%'}}>
        {
          image ?
          <Image 
            style={{width:120,height:80,}}
            source={{uri: 'data:image/jpeg;base64,' + image }}
          /> :
          <View style={Style.userCircle} >
            <Icon
              name={'ios-person'}
              ios={'ios-person'}
              android={'md-person'}
              style={{ color: Colors.primary ,paddingRight:5,  fontSize: wp('8.8%'),}}
            />
          </View>
        }
        <TouchableOpacity
          onPress={async() => {
            var options = {
              title: 'Select Image',
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            };

            let permission = await HelperService.requestMultipleStoragePermission();

            if (permission) {
              ImagePicker.showImagePicker(options, (response) => {
                if (response.didCancel) {
                } else if (response.error) {

                } else if (response.customButton) {
                  alert(response.customButton);
                } else {
                  setImage(response.data)
                }
              });
            } else {
              Alert.alert(
                "Storage permission Denied.",
                'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Vikas.'
              );
            }
          }}
          style={Style.icon}
        >
          <Icon
            name={'ios-camera'}
            ios={'ios-camera'}
            android={'md-camera'}
            style={{ color: Colors.button, marginTop:'2%' }}
          />
        </TouchableOpacity>
        

      </View>
      <View style={Style.userDtl}>
        <Text style={Style.title}> {data&&data.name?data.name:'Sunil Sharma'}</Text>
        <Text style={Style.desc}>{data&&data.phone_number__c?data.phone_number__c:'7986755067'}</Text>
        <Text style={Style.desc}>{data&&data.email__c?data.email__c:'sunil.sharma@gmail.com'}</Text> 
       
        {  Show? []:   <Text style={Style.desc1} onPress={()=>NavigationService.navigate('MenuDetailScreen')}>View Profile </Text> }
      </View>
     

    </View>
 
);
}
export default MenuInfoTuple
