import BackArrowButton from "App/Components/BackArrowButton";
import { Colors, Fonts } from "App/Theme";
import { Body, Button, Header, Left, Right, Text, Title } from "native-base";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuIcon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import NavigationService from "App/Services/NavigationService";
import WhiteButton from "../../../Components/WhiteButton";
import userAction from "../../../Stores/User/Actions";
import ImagePick from "../../../Components/ImagePicker/Imageinbutton";
import MenuActions from "App/Stores/Menu/Actions";

class menuLayout extends React.Component {
  // componentDidMount() {
  //   const { Logout, userdetail, token } = this.props;
  //   this.props.getImageOnboarding({ token });
  // }
  action() {
    const { Logout, userdetail, token } = this.props;
    Logout({
      token: token,
      form: {
        userid: userdetail.Id,
        sessionstatus: "Logged Out",
      },
    });
  }

  render() {
    const {
      userdetail,
      loader,
      imageform,
      changeForm,
      userid,
      token,
      getonboardingImage,
    } = this.props;
    //   console.log( userdetail);
    return (
      <View>
        <View style={Styles.header}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                // marginLeft: wp("6"),
                marginRight: wp("3"),
                // marginTop: hp("3"),
              }}
            >
              <Image
                style={{
                  height: wp("18"),
                  width: wp("18"),
                  marginLeft: wp("6"),
                  marginRight: wp("3"),
                  marginTop: hp("3"),
                  
                }}
                source={require("App/Assets/Images/man.png")}
                // source={{ uri: `data:image/png;base64,${getonboardingImage.Uss?getonboardingImage.Uss:imageform.image}`}}
              />
              <View style={{ zIndex: 10, left: wp("25"), top: hp("-2.6") }}>
                {/* <ImagePick
                  image={imageform.image}
                  // profilepic={getonboardingImage.Uss}
                  // show={true}
                  onImageSuccess={({ image }) => {
                    changeForm({
                      edited_field: "image",
                      edited_value: image,
                    }),
                      this.props.UploadImage({
                        form: {
                          batchRequests: [
                            {
                              method: "PATCH",
                              url: "v45.0/sobjects/User/" + userid,
                              richInput: {
                                Profile_Picture__c:
                                  "<img src=data:image/jpeg;base64," +
                                  image +
                                  "/>",
                              },
                            },
                            {
                              method: "GET",
                              url:
                                "v45.0/sobjects/User/" + userid + "?fields=id",
                            },
                          ],
                        },
                        token,
                      });
                  }}
                /> */}
              </View>
            </View>
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
                  fontSize: hp("2.2"),
                  color: Colors.white,
                  // fontWeight: "bold",
                }}
              >
                9876756789
                {/* {userdetail.MobilePhone} */}
              </Text>
              <Text
                style={{
                  fontSize: hp("2.2"),
                  color: Colors.white,
                  // fontWeight: "bold",
                }}
              >
                prabu@gmail.com
                {/* {userdetail.Email} */}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp("0.5"),
              marginLeft: wp("5"),
              width: "100%",
            }}
          >
            <WhiteButton
              style={{ height: hp("4%"), width: wp("25%") }}
              title={"LogOut"}
              loading={loader}
              onPress={() => NavigationService.navigate("LoginScreen")}
              // onPress={() => this.action()}
              textStyle={{ fontSize: hp("1.5") }}
            />
            <TouchableOpacity
              onPress={() => NavigationService.navigate("ProfileScreen")}
            >
              <Text
                style={{
                  fontSize: hp("1.7"),
                  color: Colors.white,
                  marginTop: 10,
                  marginLeft: wp("48"),
                }}
              >
                View profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.access_token,
  userdetail: state.startday.userDetailList,
  loader: state.user.userLogoutIsLoading,
  imageform: state.menu.imageform,
  userid: state.user.loginDetails.userId,
  getonboardingImage: state.user.getonboardingImage,
});

const mapDispatchToProps = (dispatch) => ({
  Logout: (params) => dispatch(userAction.logoutUser(params)),
  changeForm: (params) => dispatch(MenuActions.changeImageForm(params)),
  UploadImage: (params) => dispatch(MenuActions.UploadImage(params)),
  getImageOnboarding: (params) =>
    dispatch(userAction.getImageOnboarding(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(menuLayout);

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
    width: wp("100%"),
    height: hp("21%"),
    justifyContent: "flex-start",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },
});
