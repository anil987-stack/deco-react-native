import React, { Component } from "react";
import { View, Alert, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./BeatScreenStyle";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import { START, ABSENT, GOOD, MORNING } from "App/Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import MenuActions from "App/Stores/Menu/Actions";
import SingleInfo from "App/Components/SingleInfo";
import Separator from "App/Components/Separator";
import DashboardHeading from "App/Components/DashboardHeading";
import CircularProgressBar from "App/Components/CircularProgressBar";
// import AchievedTargets from './AchievedTargets';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading,
} from "native-base";

//<ScrollableTab tabsContainerStyle={Style.tabHeading} underlineStyle={Style.tabUnderLine} style={Style.mainTabs} />

class BeatPlanTabs extends React.Component {
  componentDidMount() {
    const { isASM, selectedBeatFilter, changeMenuSelectedFilters } = this.props;
    // console.log('ASM',state.user.psmList);
    changeMenuSelectedFilters({ edited_field: "selectedTab", edited_value: 0 });
  }
  render() {
    const { isASM, selectedBeatFilter, changeMenuSelectedFilters } = this.props;
    return (
      <Tabs
        onChangeTab={(tab) =>
          changeMenuSelectedFilters({
            edited_field: "selectedTab",
            edited_value: tab.i,
          })
        }
        //tabBarUnderlineStyle={{...Style.tabUnderLine}}
        style={Style.mainTabs}
        initialPage={selectedBeatFilter["selectedTab"]}
      >
        <Tab
          selected={true}
          underlineStyle={Style.tabUnderLine}
          heading={
            <TabHeading style={Style.tabHeading}>
              <Text style={Style.tabText}></Text>
            </TabHeading>
          }
        />
        {isASM.length == 0 ? (
          []
        ) : (
          <Tab
            selected={false}
            underlineStyle={Style.tabUnderLine}
            heading={
              <TabHeading style={Style.tabHeading}>
                <Text style={Style.tabText}>Team Beat Plan</Text>
              </TabHeading>
            }
          />
        )}
      </Tabs>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  isASM: state.user.psmList,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  selectedBeatFilter: state.menu.selectedBeatFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeMenuSelectedFilters: (params) =>
    dispatch(MenuActions.changeMenuSelectedFilters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatPlanTabs);
