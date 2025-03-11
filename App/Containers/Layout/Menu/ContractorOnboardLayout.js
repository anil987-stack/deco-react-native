import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import BackArrowButton from "App/Components/BackArrowButton";
import { Colors, Fonts,ApplicationStyles } from "App/Theme";
import { Body, Button, Header, Left, Right, Title } from "native-base";
import { connect } from "react-redux";
import NavigationService from "App/Services/NavigationService";
import GenericIcon from "App/Components/GenericIcon";
import InputText from "App/Components/FormInput/InputText";
import UsersActions from "App/Stores/User/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchBar from "App/Components/SearchBar";
import BlueButton from "App/Components/BlueButton";

class ContractorOnboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
  count: false,
mount: false,
    };
   
  }
  render() {
    const { searchFilters, changeSearchFilters } = this.props;
    return (
      <View>
       <View
          style={{
            width: wp("100%"),
			borderWidth:0.5,
            flexDirection: "row",
            height: hp("6%"),
            backgroundColor: "white",
            alignSelf: "center",
            elevation: 12,
            padding: wp("1.5"),
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
          }}
        >
{ this.state.mount ? (
			 <View style={{ flexDirection:"row"}}>
				<View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
                paddingTop:"0.5%"
              }}
			  onPress={() => this.setState({mount: this.state.mount == false })}
            />
          </View>
			 <SearchBar
			   placeholder={`Search by name`}
			//    onInputChange={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: text,
			// 	 })
			//    }
			//    onInputSubmit={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: text,
			// 	 })
			//    }
			//    onInputClear={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: "",
			// 	 })
			//    }
			//    value={searchFilters["name"]}
			   ContainerStyles={Styles.searchContainer}
			 />
			 </View>
		):
		
		 this.state.mount == false ? (
			<>
       <View
          style={{
           
            flexDirection: "row",
           
          }}
        >
        <View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
              onPress={() => NavigationService.goback()}
            />
          </View>
          <View style={{ alignSelf: "center", width: "80%" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                textAlign: "center",
                fontSize: hp("2.5"),
              }}
            >
              {"Influencer"}
            </Text>
          </View>
		  <View>
            <GenericIcon
              name={"search"}
              style={{
                fontSize: wp("7%"),
                color: Colors.backarrow,
                alignSelf: "center",
                paddingTop:4,
                right:"88%"
              }}
			  onPress={() => this.setState({mount: !this.state.mount })}
            />
          </View>

          <TouchableOpacity
          style={{
            borderRadius: 50,
            top:"13%",
            // bottom: 45,
            // position: "absolute",
            right: "4%",
            borderRadius: 50,
            height: 27,
            width: 27,
            backgroundColor: Colors.primary,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          
            
          }}
          onPress={() => NavigationService.navigate("InfluencerKYCForm")}
        >
          <GenericIcon
            name={"add"}
            style={{
              color: Colors.white,
              fontSize: wp("7%"),
              alignSelf: "center",
              right:"4%"
            }}
          />
        </TouchableOpacity>

       </View>
          </>
		   ):([])}
       </View>
          {/* <View style={{padding: 5,marginBottom:"1%",marginTop:"0.5%"}}>
              <BlueButton
                title={"ADD"}
                textStyle={{ fontSize: wp("4") }}
                style={{
                  borderRadius: 10,
                  alignSelf:"flex-end",
                  justifyContent: "center",
                  width: wp("25%"),
                  height: hp("4.3%"),
                  
                }}
                // disabled={this.props.loading}
                // loading={this.props.loading}
                onPress={() =>
                  NavigationService.navigate("InfluencerKYCForm")
                }
                // onPress={() => this.onCheck()}
              />
            </View> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  visitsDisplayList: state.visits.visitsDisplayList,
  filteredDisplayData: state.visits.filteredDisplayData,
  token: state.user.token,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  monthname: state.user.monthNumber,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(UsersActions.updateSearchFilters(params)),
  // getVisitsDisplayList:(params)     => dispatch(VisitsActions.getVisitsDisplayList(params)),
  // getAllPjp: (params)   => dispatch(UserActions.getAllPjp(params)),
  fetchPjp: (params) => dispatch(UsersActions.fetchPjp(params)),
  updateMonthNumber: (params) =>
    dispatch(UsersActions.updateMonthNumber(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractorOnboardLayout);

const Styles = StyleSheet.create({
  head: {
    height: hp("16%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  t1: {
    fontSize: hp("3.2"),
    fontWeight: "bold",
    marginLeft: 50,
    color: "#FFFFFF",
  },
  t2: {
    fontSize: hp("3.2"),
    fontWeight: "bold",
    marginLeft: 15,
    color: "#343434",
  },
  tt: {
    flexDirection: "row",
    height: hp("5%"),
    backgroundColor: "white",
    width: wp("85%"),
    borderRadius: 5,
    alignSelf: "center",
  },
  card: {
    height: hp("22%"),
    marginVertical: 20,
    width: wp("90%"),
    borderWidth: 0,
    elevation: 3,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    // paddingVertical: 21,
    width: "91.5%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor:"white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "1%",
    // height: hp("6%"),
    borderColor:"grey",
    borderWidth:3,
    marginLeft:"2%",
    // padding
    
  },
});
