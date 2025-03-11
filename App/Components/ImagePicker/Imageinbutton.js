import { HelperService } from "App/Services/Utils/HelperService";
import React from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "App/Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default class ImagePick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async chooseFile() {
    var options = {
      title: "Select Image",
      quality: 0.05,
      maxWidth: 2080,
      maxHeight: 2080,
      mediaType: "photo",
      storageOptions: {
        skipBackup: false,
        path: "images",
      },
    };

    let permission = await HelperService.requestStoragePermission();
    let cameraPermission = await HelperService.requestCameraPermission();

    if (permission && cameraPermission) {
      ImagePicker.showImagePicker(options, (response) => {
        console.log("Response = ", response);
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
          alert(response.customButton);
        } else {
          const source = { uri: "data:image/jpeg;base64," + response.data };
          this.props.onImageSuccess({
            image: response.data,
            filename: response.fileName,
          });
          this.setState({
            avatarSource: source,
          });
          // console.log("response",response)
          HelperService.showToast({
            message: "uploaded image Successfully.",
            duration: 2000,
            buttonText: "Okay",
          });
        }
      });

      // ImagePicker.launchCamera(options, (response) => {
      // 	console.log('Response = ', response);
      // 	if (response.didCancel) {
      // 		console.log('User cancelled image picker');
      // 	} else if (response.error) {
      // 		console.log('ImagePicker Error: ', response.error);
      // 	} else if (response.customButton) {
      // 		console.log('User tapped custom button: ', response.customButton);
      // 		alert(response.customButton);
      // 	} else {
      // 		const source = { uri: 'data:image/jpeg;base64,' + response.data };
      // 		this.props.onImageSuccess({ image: response.data, filename: response.fileName });
      // 		this.setState({
      // 			avatarSource: source
      // 		});
      //         HelperService.showToast({
      //             message: 'uploaded image Successfully.',
      //             duration: 2000,
      //             buttonText: 'Okay'
      //         });
      // 	}
      // });
    } else {
      Alert.alert(
        "Storage permission Denied.",
        'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Re-Konekt.'
      );
    }
  }

  render() {
    const { image, children} = this.props;
    let imageNode = (
      <Image
        source={this.state.avatarSource}
        style={{
          width: wp("22"),
          height: wp("22"),
          resizeMode: "stretch",
          borderRadius: 1,
        }}
      />
    );
    if (!image) {
      imageNode = [];
    }
    return (
      <View>
        <View style={styles.container}>
          {/* {imageNode ? imageNode : []} */}

          <View
            style={{
              bottom: wp("1%"),
              position: "absolute",
              right: wp("-3%"),
              borderRadius: 1,
              height: 10,
              width: 45,
               backgroundColor:"transparent",
              // flexDirection: 'row',
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp("0%"),
              zIndex: 10,
            }}
          >
            <TouchableOpacity
              transparent
              onPress={!this.props.enable ? () => this.chooseFile() : () => {}}
            >
              {children}
              <Icon
                name={"camera"}
                style={{ color:'white', fontSize: hp("3.5") }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "flex-start",
    width: wp("6"),
    height: wp("5"),
  },
  imagePreviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    position: "relative",
    minHeight: hp("8%"),
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
