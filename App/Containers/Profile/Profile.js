import AgentInfo from "App/Components/AgentInfo";
import Loading from "App/Components/Loading";
import ProfileCard from "App/Components/ProfileCard";
import { HelperService } from "App/Services/Utils/HelperService";
import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { connect } from "react-redux";
import Style from "./ProfileStyles";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading,
} from "native-base";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Info from "./info";
import Territory from "./Territory";
import { ApplicationStyles } from "../../Theme";

class ProfileScreen extends React.Component {
  render() {
    const { agentDetails } = this.props;

    let visibleNode = [];
    if (!agentDetails) {
      visibleNode = <Loading />;
    } else {
      visibleNode = (
        <ScrollView style={Style.box}>
          <AgentInfo
            heading={"Manager"}
            value={
              agentDetails.Manager && agentDetails.Manager.Name
                ? agentDetails.Manager.Name
                : ""
            }
          />
          <AgentInfo heading={"Contact No."} value={agentDetails.MobilePhone} />
          <AgentInfo heading={"Employee Name"} value={agentDetails.Username} />
          <AgentInfo heading={"Email"} value={agentDetails.Email} />
        </ScrollView>
      );
    }

    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            width: "85%",
            marginTop: hp("2"),
            height: "96%",
            alignSelf: "center",
            borderWidth: 1,
            ...ApplicationStyles.buttonShadow,
          }}
        >
          <Tabs
            tabBarUnderlineStyle={Style.tabUnderLine}
            style={Style.mainTabs}
            //initialPage={searchFilters['selectedTab']}
          >
            <Tab
              heading="Info"
              textStyle={Style.tabText}
              tabStyle={{ backgroundColor: Colors.white }}
              activeTextStyle={Style.activetabText}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              <Info />
            </Tab>

            {/* <Tab
              heading="Area"
              textStyle={Style.tabText}
              tabStyle={{ backgroundColor: Colors.white }}
              activeTextStyle={Style.activetabText}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              <Territory data={this.props.area} />
            </Tab> */}
          </Tabs>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  agentAreas: state.user.agentAreas,
  agentDetails: state.startday.userDetailList,
  area: state.common.TerritoryAllList,
});

export default connect(mapStateToProps)(ProfileScreen);
