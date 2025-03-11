import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";
import Style from "./ComplaintScreenStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import {
  Icon,
  Input,
  ScrollableTab,
  Container,
  TabHeading,
  Tab,
  Tabs,
  Content,
} from "native-base";
import { ApplicationStyles, Colors } from "App/Theme";
import Pending from "./Pending/PendingScreen";
import Resloved from "./Resloved/ReslovedScreen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchableDropdown from "App/Components/SearchableDropdown";
import WhiteButton from "App/Components/WhiteButton";
import { HelperService } from "App/Services/Utils/HelperService";
class ComplaintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      objective: "",
    };
  }
  onCloseModal() {
    if (this.state.objective == "") {
      HelperService.showToast({ message: "Please Select Objective" });
    } else {
      this.setState({ isVisible: !this.state.isVisible });
      NavigationService.navigate("NewComplaint", { id: this.state.objective });
    }
  }
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.tabs}>
          {/* <Container   >
        <Content  theme={{backgroundColor:"red"}} > */}
          <Tabs
          tabBarUnderlineStyle={{ backgroundColor: Colors.white,
            // width: "18%",
            // marginHorizontal: 10,
            marginBottom: 4,
            borderRadius: 5,}}
           renderTabBar={() => (
            <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
          )}
          >
            <Tab
              heading="Open "
              tabStyle={Style.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Style.tabText}
            activeTextStyle={Style.tabTextStyle}
            >
              <Pending id={"Open"}/>
            </Tab>
            <Tab
              heading="In-Progress"
              tabStyle={Style.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Style.tabText}
            activeTextStyle={Style.tabTextStyle}
            >
              <Pending id={"In-Progress"} />
            </Tab>
            <Tab
              heading="Resolved"
              tabStyle={Style.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Style.tabText}
            activeTextStyle={Style.tabTextStyle}
            >
              <Pending id={"Resolved"} />
            </Tab>
            <Tab
              heading="Cancelled"
              tabStyle={Style.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Style.tabText}
            activeTextStyle={Style.tabTextStyle}
            >
              <Pending id={"Cancelled"} />
            </Tab>
          </Tabs>
          {/* </Content></Container> */}
        </View>

        <TouchableHighlight
          style={Style.plusIcon}
          onPress={() => {
            this.setState({
              isVisible: true,
            });
            // NavigationService.navigate("AttachmentShow")
          }}
          // onPress={() => NavigationService.navigate("NewComplaint")}
        >
          <Icon
            name={"ios-add"}
            ios={"ios-add"}
            android={"md-add"}
            style={{ color: Colors.white, fontSize: 45, alignSelf: "center" }}
          />
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E7F9D7",
              height: 200,
              width: "80%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              marginTop: 250,
              marginLeft: 40,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              style={{ left: wp("30%") }}
            >
              <GenericIcon
                name={"cancel"}
                style={{
                  fontSize: 25,
                  color: Colors.black,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              Select Type
            </Text>
            <View style={{ height: hp("10%") }}>
              <SearchableDropdown
                dataSource={[
                  { id: "Sales Team", name: "Sales Team" },
                  { id: "Customer", name: "Customer" },
                ]}
                placeHolderText={"Select Type"}
                selectedValue={this.state.objective}
                onChange={(value) => this.setState({ objective: value })}
                placeholder={"Type or Select Type"}
                invalid={false}
                labelStyles={{
                  color: Colors.black,
                  textAlign: "center",
                  //   width: "99%",
                  //  padding:5,
                  fontSize: 13,
                  flexDirection: "row",
                }}
                customPickerStyles={{
                  ...Style.picker,
                  left: wp("0.5%"),
                  backgroundColor: "white",
                }}
                // label={'Reason'}
              />
            </View>
            <WhiteButton
              style={{
                backgroundColor: Colors.primary,
                // top: hp("2%"),
                borderRadius: 10,
                height: hp("5%"),
                width: wp("25%"),
              }}
              // onPress={ () => this.props.sendApproval({form: item,token,id:item.Id})}
              onPress={() => {
                this.onCloseModal();
              }}
              title={"SUBMIT"}
              textStyle={{ color: Colors.white, fontSize: 12 }}
            ></WhiteButton>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ComplaintScreen;
