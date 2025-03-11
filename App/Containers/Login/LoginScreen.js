import React, { Component } from "react";
import {
  View,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ImageBackground } from "react-native";

import { Item, Input, Button, Spinner } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Style from "./LoginScreenStyle";
import BlueButton from "App/Components/BlueButton";
import InputMobile from "App/Components/FormInput/InputMobile";
import InputPassword from "App/Components/FormInput/InputPassword";
import InputText from "App/Components/FormInput/InputText";
import InputTextIcon from "App/Components/FormInput/InputTextIcon";
import { SEND_OTP } from "App/Constants";
import NavigationService from "App/Services/NavigationService";
import UserActions from "App/Stores/User/Actions";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native-elements";
import GenericIcon from "App/Components/GenericIcon";
import { Card } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import ForgetPasswordModal from "./ForgetPasswordModal";
import CommonActions from "App/Stores/Common/Actions";
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      fcmtoken: "",
    };
  }

  submit() {
    Keyboard.dismiss();
    const { loginUser, password, mobile } = this.props;

    // loginUser({
    //   mobile: mobile,
    //   password: password,
    // });

    NavigationService.navigate("DashboardScreen");
  }

  render() {
    const { validation, changeForm, password, loading, mobile } = this.props;
    // const image = { uri: "App/Assets/Images/Login_2.png" };
    //   const input = React.createRef();
    //  input.current.focus();
    return (
      <View style={Style.container}>
        <ImageBackground
          style={Style.imgBackground}
          resizeMode="cover"
          source={require("App/Assets/Images/Login_10.png")}
        >
          {/* //place your now nested component JSX code here */}

          {/* <View style={Style.buttonBox}> */}

          {/* <Image
            source={require("App/Assets/Images/Login_2.png")}
            style={{
              width: wp("80%"),
              height: hp("30%"),
              resizeMode: "contain",
              borderRadius: 10,
              marginLeft: wp("7%"),
              zIndex: 200,
            }}
            PlaceholderContent={<ActivityIndicator />}
          > */}
          {/*  <Image
                            style={{ width: 350, height: 200, resizeMode: 'contain', borderRadius:10,  marginLeft:25, zIndex:200 }}
                            source={require('App/Assets/Images/logo.png')}
                        /> */}

          {/* <Card style={{borderTopLeftRadius:20,borderTopRightRadius:20,elevation:25,marginTop:"55%",borderBottomLeftRadius:20,borderBottomRightRadius:20,color:"",opacity:0.3}}> */}
          {/* <Text
          style={{
            ...ApplicationStyles.screenHeading,
            alignSelf: "flex-start",
            paddingLeft: wp("12%"),
            marginTop: hp("0%"),
            fontSize: hp("4.0%"),
            color: Colors.title,
            textTransform:"uppercase"
          }}
        >
          {"LOGIN"}
        </Text>
        <Text
          style={{
            fontFamily: ApplicationStyles.textMsgFont,
            fontSize: wp("4.4%"),
            color: Colors.subtitle,
            paddingLeft: wp("12%"),
          }}
        >
          {"Please sign in to continue ..."}
        </Text> */}
          <View style={{ ...Style.action }}>
            {/* <TextInput
          placeholder="fggh"
          placeholderTextColor="#9F9F9F"
          // placeHolderTextStyle={{}}
          style={{
            fontSize: 14,
            height: 37,
            color: "white",
            borderColor:"white",
            borderWidth:1,
            backgroundColor:"black",
            
          }}
          // keyboardType={props.keyboardType}
          secureTextEntry={false}
          // defaultValue={props.defaultValue}
          // onChangeText={props.onChangeText}
          // editable={props.editable}
        /> */}
            <InputTextIcon
              iconName={"user"}
              iconSize={wp("8.4%")}
              iconColor={"grey"}
              placeholder={"Employee Code"}
              value={mobile}
              style={Style.inputId}
              onChange={(value) =>
                changeForm({ mobile: value, password: password })
              }
              error={validation.mobile}
            />
            <View style={{ marginTop: "-5%" }}>
              <InputTextIcon
                iconName={"lock"}
                iconSize={wp("8.4%")}
                iconColor={"grey"}
                placeholder={"Password"}
                // secureTextEntry={true}
                value={password}
                style={{ ...Style.inputId }}
                onChange={(value) =>
                  changeForm({ password: value, mobile: mobile })
                }
                error={validation.invalid_password}
                secureTextEntry={this.state.secureTextEntry}
              />
            </View>
            {this.state.secureTextEntry ? (
              <GenericIcon
                name={"visibility-off"}
                style={{
                  color: "grey",
                  fontSize: wp("6.4%"),
                  left: wp("70%"),
                  bottom: hp("7%"),
                  opacity: 0.6,
                }}
                onPress={() => this.setState({ secureTextEntry: false })}
              />
            ) : (
              <GenericIcon
                name={"visibility"}
                style={{
                  color: "grey",
                  fontSize: wp("6.4%"),
                  left: wp("70%"),
                  bottom: hp("7%"),
                }}
                onPress={() => this.setState({ secureTextEntry: true })}
              />
            )}
            {/* </View>  */}
          </View>
          {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5}}> */}
          {/* <BlueButton
          style={{...Style.button,}}
          onPress={() => this.submit()}
          disabled={loading}
          loading={loading}
          textStyle={{fontFamily: "HelveticaNeue_CondensedBold"}}
          title={"LOGIN"}
        /> */}
          {/* </LinearGradient> */}
          <TouchableOpacity
            style={{ ...Style.button }}
            //  this.props.clear();
            onPress={() => this.submit()}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.darkRed]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.7 }}
              style={{
                height: hp("5%"),
                width: wp("35%"),
                left: "0%",
                borderRadius: 10,
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 6,
                  fontSize: wp("5%"),
                }}
              >
                {"LOGIN"}
              </Text>
            </LinearGradient>
            {/* <Text style={{ fontSize: 15, color:"white",fontFamily: "HelveticaNeue_CondensedBold" }}>
                {" "}
                Forgot Password ?
              </Text> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={{ fontSize: 14, marginTop: hp("5%"), marginLeft: hp("5%") }}
            onPress={() => {
              this.props.openModal({
                content3: <ForgetPasswordModal
                onClose={() => {
                 closeModal();
               }} />, 
                heading3: 'FORGOT PASSWORD', 
                bodyFlexHeight3: .80,
                
            })
              //  this.props.clear();
              // NavigationService.navigate("UserScreen");
            }}
          >
            <Text
              style={{
                fontSize: wp("4%"),
                color: "white",
                fontFamily: "HelveticaNeue_CondensedBold",
              }}
            >
              {" "}
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Text
              style={{
                fontSize: wp("4%"),
                color: "white",
                fontFamily: "HelveticaNeue_CondensedBold",
                textAlign:"center",
                marginTop:hp("12%")
              }}
            >
              {/* {" "} */}
              Version 1.01
            </Text>

          {/* /> */}
          {/* </View> */}
          {/* </Image> */}
          {/* </Card> */}
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  mobile: state.user.mobile,
  password: state.user.password,
  loading: state.user.userLoginIsLoading,

  validation: state.user.validation,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(UserActions.loginUser(data)),
  changeForm: (data) => dispatch(UserActions.changeLoginForm(data)),
  openModal:(params)     => dispatch(CommonActions.openModalThree(params)),
  closeModal:(params)    => dispatch(CommonActions.closeModalThree(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
