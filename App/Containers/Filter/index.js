import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, CheckBox, RefreshControl, } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton/BlueButton";
import { Icon, Input, Button, ListItem, Radio, Left, Right, Label, } from "native-base";
import { connect } from "react-redux";
import NavigationService from "App/Services/NavigationService";
import _, { words } from "lodash";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";
import VisitsActions from "App/Stores/Visits/Actions";
import { Card } from "react-native-paper";
import SearchBar from 'App/Components/SearchBar';
import CommonActions from "App/Stores/Common/Actions";

class Filter extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
const{value, changeFilters}= this.props
    changeFilters({ edited_field: 'parentName', 'edited_value': value })
  }

  onReset() {
    this.props.clearChangeFilters()
    const{value, changeFilters}= this.props
    changeFilters({ edited_field: 'parentName', 'edited_value': value })
    this.props.onreset()
  }

  filterResults(list) {
    const { searchFilter } = this.props;

    let filteredList = HelperService.searchTextListFilter(list, 'name', searchFilter['searchByName']);
    filteredList = HelperService.searchTextListFilter(filteredList, 'parent', searchFilter['parentName']);
    filteredList = HelperService.sortListFilter(filteredList, 'name', 'ASC');
    return filteredList;
  }



  renderChildItem(record) {
    const { listMain, searchFilter } = this.props;

    let dataList = this.filterResults(listMain);

    return dataList.map((item, key) => {

      return (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          key={key}
          onPress={() => {
            if (HelperService.searchInList(searchFilter && searchFilter[item.parent] && searchFilter[item.parent].length ? searchFilter[item.parent] : [],item.parent=='Geographical_Town'|| item.parent=='Territory'? item.id: item.name)) {
              this.removeSelectedOption({ parent: item.parent, item: item.parent=='Geographical_Town'|| item.parent=='Territory'? item.id: item.name })
            }
            else {
              this.addSelectedOption({ parent: item.parent, item:item.parent=='Geographical_Town'|| item.parent=='Territory'? item.id:  item.name })
            }

          }}
        >
          {HelperService.searchInList(searchFilter && searchFilter[item.parent] && searchFilter[item.parent].length ? searchFilter[item.parent] : [],item.parent=='Geographical_Town'|| item.parent=='Territory'? item.id: item.name) ? (
            <GenericIcon
              name={"check-box"}
              style={{ fontSize: wp('5.8'), alignSelf: "center", color: Colors.fadeBlue,marginTop: hp('1') }}
            />
          ) : (
            <GenericIcon
              name={"check-box-outline-blank"}
              style={{ fontSize: wp('5.8'), alignSelf: "center", color: Colors.fadeBlue,marginTop: hp('1') }}
            />
          )}

          <View style={{ borderBottomColor: "grey", borderBottomWidth: 0.5, width: wp("56%"),marginRight: wp('0') }}>
            <Text style={{ fontWeight: "bold", fontSize: wp('3.2'), left: wp("3%"), bottom: "28%", marginTop: "15.5%",  color: Colors.fadeBlue }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );

    });
  }


  addSelectedOption(params) {
    let parentLabel = params.parent
    let item = params.item
    const { changeFilters, searchFilter } = this.props
    // && searchFilter[parentLabel].length&&parentLabel!='Team'
    if (searchFilter && searchFilter[parentLabel]&& searchFilter[parentLabel].length&&parentLabel!='Team_PJP') {
      let arr = _.cloneDeep(searchFilter[parentLabel])

      arr = arr.concat([item])

      changeFilters({ edited_field: parentLabel, edited_value: arr })
    }
    else {
      changeFilters({ edited_field: parentLabel, edited_value: [item] })
    }
  }

  removeSelectedOption(params) {
    let parentLabel = params.parent
    let item = params.item
    const { changeFilters, searchFilter } = this.props
    if (searchFilter && searchFilter[parentLabel] && searchFilter[parentLabel].length) {
      let arr = _.cloneDeep(searchFilter[parentLabel])
      arr = arr.filter((obj) => obj != item)
      changeFilters({ edited_field: parentLabel, edited_value: arr })
    }

  }

  onPressApply() {
    const { changeFilters, searchFilter } = this.props
    let filterData = _.cloneDeep(searchFilter)
    filterData = HelperService.removeField(filterData, 'searchByName')
    filterData = HelperService.removeField(filterData, 'parentName')
    if (filterData && !_.isEmpty(filterData)) {
      if(this.props.setApply){
      this.props.setApply(true)
      }
      let categoryItem = Object.keys(filterData)
     
      for (let obj of categoryItem) {
         if(obj=='Team_PJP' || obj=='Teams')
        {
            this.props.getData(filterData[obj])
        }
        else{ 
        this.props.onChange({ edited_field: obj, edited_value: filterData[obj] })
       }
      }
      this.props.closeModal()
      //this.props.onChange({edited_field: parentLabel, edited_value:arr})
    }
    else {
      HelperService.showToast({
        message: 'No option seleted.',
        duration: 1000,
        buttonText: ''
      });
    }
  }




  render() {
    const {
      listMain,
      changeFilters,
      pjpFilters,
      searchFilter
    } = this.props;

    let parentList = listMain && listMain.length ? HelperService.getParentfromList(listMain) : []

    return (
      <View style={{ flex: 1 }}>



        <View style={{ flexDirection: "row",flex:0.9, justifyContent:'flex-start' }}>
          <View style={{ width: wp("35%"),marginTop:hp('1'),  }}>
            {parentList.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.parent+index.toString()}
                  onPress={() => changeFilters({ edited_field: 'parentName', 'edited_value': item.parent })}
                  style={[
                    styles.menuItem,
                    item.parent === searchFilter['parentName']
                      ? styles.selectedMenuItem
                      : null,
                  ]}
                >
                  <Text style={[styles.menuItemText,
                  item.parent === searchFilter['parentName']
                    ? styles.selectedMenuItemText
                    : null,
                  ]}>{item.parent?item.parent.replace(/_/g, ' '):''}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View>
            <View style={{ flexDirection: "column", marginTop: hp('1') }}>


              <SearchBar
                placeholder={`Search`}
                onInputChange={(text) => changeFilters({ edited_field: 'searchByName', 'edited_value': text })}
                onInputSubmit={(text) => changeFilters({ edited_field: 'searchByName', 'edited_value': text })}
                onInputClear={(text) => changeFilters({ edited_field: 'searchByName', 'edited_value': '' })}
                value={searchFilter['searchByName']}
                ContainerStyles={{ ...styles.searchContainer }}
                inputStyles={{ fontSize: wp('3%'), }}
                IconStyles={{ fontSize: wp('4%') }}

              />

              <TouchableOpacity
                onPress={() => {
                  this.onReset();
                }}
                style={{ zIndex: 200,  }}
              >
                <Text
                  style={{
                    color: Colors.cardblue,
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: wp('3.8'),
                    fontWeight: "bold",
                   marginTop:hp('1'),
                   marginLeft: wp('35')
                 
                  }}
                >
                  {" Reset Filters"}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={{ left: "5%" }}>


              <View style={{ flexDirection: "column", }}>
                {
                  this.renderChildItem()
                }
              </View>



            </ScrollView>



          </View>
        </View>
      <View style={{flexDirection:'row',alignContent:'center', justifyContent:'space-between', bottom:hp('0'), position:'absolute', marginBottom:hp('1')}}>
          <BlueButton
            style={
              styles.button
            }
            title={"CANCEL"}
            onPress={() => {
              this.props.closeModal()
            }}
          />
      

        <BlueButton
          style={
           {... styles.button,
          right: wp('0'), marginLeft: wp('25') } }
          title={"Apply"}
          onPress={() => {
            this.onPressApply()
          }}

        />
    </View>
      </View >
    );
  }
}
const mapStateToProps = (state) => ({
  searchFilter: state.common.searchFilter,
  token: state.user.token,
  agentid: state.user.id,
  area: state.user.agentAreas,

  getAgentTown: state.visits.getAgentTown,
  dayTypeList: state.visits.dayTypeList,

  pjpFilters: state.visits.beatSearch,
});
const mapDispatchToProps = (dispatch) => ({
  changeFilters: (params) => dispatch(CommonActions.changeCommonFilters(params)),
  clearChangeFilters: () => dispatch(CommonActions.clearChangeFilters()),
 

  closeModal: () => dispatch(CommonActions.closeModalTwo()),




});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    top: hp("1%"),

  },

  // menu Column - left
  menuColumn: {
    flex: 0.4,
    flexDirection: "column",
    borderRightColor: "#F8F8FF",
    borderRightWidth: 0.3,
    backgroundColor: "red",
  },
  menuItem: {

    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.5,
    width: wp("30%"),
    height: hp('5'),
  
    
  },
  selectedMenuItem: {

    backgroundColor:  Colors.primary,
    width: wp("30%"),
    color: Colors.white,
    height: hp('5'),
  
 

  },
  selectedMenuItemText: {
    marginLeft: 0,
    alignSelf: 'center',
    color: Colors.white,
    fontSize: wp('3.8'),
   // fontWeight: "bold",
  },

  menuItemText: {
    marginLeft: 0,
    alignSelf: 'center',
    color: Colors.primary,
    fontSize: wp('3.2'),
    fontWeight: "bold",
  },


  settingsColumn: {
    flex: 0.6,
    padding: 15,
    color: Colors.cardblue,
  },

  backarrow: {
    color: Colors.black,
    fontSize: 32,
    paddingTop: 10,
    width: "8%",
  },
  titleText: {
    color: Colors.white,
    fontFamily: "Ubuntu",
    fontSize: 23,
    fontWeight: "bold",
    top: hp("-0.7%"),
    textAlign: "center"
  },
  titleText1: {
    color: Colors.cardblue,
    fontFamily: "Ubuntu",
    fontSize: 13.5,
    fontWeight: "bold",
    left: wp("55%"),
    bottom: hp("7.5%"),
    top: hp("-2.1%"),
    textAlign: "center"
  },
  button: {
    width: wp("35%"),
    height: hp("4.5%"),
    marginTop: hp("0%"),
  
    paddingBottom: 14,
    borderRadius: 5,
    fontSize: 4
  },
  buttonBlue: {
    width: wp("35%"),
    height: hp("5.5%"),
    marginTop: hp("0%"),
   
    paddingBottom: 14,
    borderRadius: 5,
    backgroundColor: Colors.bluebackground,
  },


  buttonBlue1: {
    width: wp("40%"),
    height: hp("5.5%"),
    marginTop: hp("0%"),
    left: wp("-1%"),
    paddingBottom: 14,
    borderRadius: 5,
    backgroundColor: Colors.bluebackground,
  },
  cardstyle: {
    flexDirection: "column",
    paddingTop: hp("2%"),
    paddingBottom: hp("1%"),
    width: wp("100%"),
    paddingLeft: wp("2%"),
    paddingRight: wp("2%"),
    elevation: 10,
    backgroundColor: Colors.primary,
    height: hp("7%"),
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: "8%",
    // borderRadius:10,
    top: "0.1%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  searchContainer: {
    width: wp("59%"),
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingTop: 0,
    elevation: 10,
    backgroundColor: "white",
    fontSize: wp("1%"),

    borderColor: Colors.primary,
    borderWidth: 1,
    height: hp("4.5%"),
  },
}); 