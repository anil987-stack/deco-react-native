import React, { useState } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity,ImageBackground, StyleSheet} from 'react-native'
import { Icon, AddIcon, } from 'native-base'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
// import Style from '../Menu/MenuInfoTuple/Styles';
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import GenericIcon from 'App/Components/GenericIcon'
import ImagePicker from 'react-native-image-picker'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'




const ImageUploader =({onPress, areas, data, id, Show , onPressLogoout, loading}) => {
    let [image,setImage] = useState("")
    return (
        <View style={{alignSelf:'center', top:'10%', backgroundColor: Colors.black}}>
        {
          image ?
          <Image 
            style={{width:120,height:80,}}
            source={{uri: 'data:image/jpeg;base64,' + image }}
          /> :
          <View style={Styles.userCircle} >
            <Icon
              name={'ios-PlusIcon'}
              ios={'ios-PlusIcon'}
              android={'md-PlusIcon'}
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
          style={Styles.icon}
        >
          <Icon
            name={'ios-AddIcon,'}
            ios={'ios-AddIcon'}
            android={'md-AddIcon'}
            style={{ color: Colors.button, marginTop:'2%' }}
          />
          </TouchableOpacity>
          </View>
    )
}

const Styles = StyleSheet.create({
    userCircle: {
        // marginTop: 80,
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
        borderRadius: 5,
        flexDirection: 'row',
        borderColor:Colors.lightGrey,
        borderWidth:1,
        height: 80,
        justifyContent: 'center',
        width: 120,
      },
      icon: {
        position: 'absolute',
        right: 0,
        top: 60,
       }

})
export default ImageUploader;
