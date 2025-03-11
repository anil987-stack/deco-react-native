import BackArrowButton from 'App/Components/BackArrowButton';
import { Colors,Fonts } from 'App/Theme';
import { Body, Button, Header, Left, Right, Text, Title } from 'native-base';
import React from 'react';
import { StyleSheet, View ,Image, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import MenuIcon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux';
import NavigationService from "App/Services/NavigationService"
import ImagePick from '../../../Components/ImagePicker/Imageinbutton';
 class profileLayout extends React.Component {
    render() {
        const{
            userdetail,getonboardingImage
        }=this.props;
      //  console.log( userdetail);
        return (
            <View>
            <View style={Styles.header}>
              <View style={{ flexDirection: "row" }}>
                {/* <ImagePick/> */}
                <Image
                  style={{
                    height: wp("18"),
                    width: wp("18"),
                    marginLeft: wp("6"),
                    marginRight: wp("3"),
                    marginTop: hp("3"),
                  }}
                  source={require("App/Assets/Images/man.png")}
                  // source={{ uri: `data:image/png;base64,${getonboardingImage.Uss?getonboardingImage.Uss:""}`}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: hp("2.5"),
                      fontFamily: "700",
                      marginTop: hp("3"),
                      fontWeight: "bold",
                      color: Colors.white,
                    }}
                  >
                    Prabhu Mahadevan
                    {/* {userdetail.Name} */}
                  </Text>
                  <Text
                    style={{
                      fontSize: hp("2"),
                      color: Colors.white,
                    //   fontWeight: "bold",
                    }}
                  >
                    9876756789
                    {/* {userdetail.MobilePhone} */}
                  </Text>
                  <Text
                    style={{
                      fontSize: hp("2"),
                      color: Colors.white,
                    //   fontWeight: "bold",
                    }}
                  >
                    prabu@gmail.com
                    {/* {userdetail.Email} */}
                  </Text>
                </View>
              </View>
             
            </View>
            {this.props.children}
          </View>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    userdetail:state.startday.userDetailList,
  getonboardingImage: state.user.getonboardingImage,
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
  
  });

export default connect(mapStateToProps,mapDispatchToProps) (profileLayout)

const Styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        borderBottomWidth: 0,
        width: wp('100%'),
        height:hp('18'),
        justifyContent: 'flex-start',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
      
    }
});
