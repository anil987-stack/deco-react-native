import React, { Component } from "react";
import { View, Text, TouchableOpacity,FlatList } from "react-native";
import Style from "./PendingStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import ComplaintCard from "App/Components/ComplaintComponent/ComplaintCard";
import { connect } from "react-redux";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { heightPercentageToDP } from "react-native-responsive-screen";
import ImageSilder from "../../../Components/Imageslide/Imageslide";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CommonActions from "App/Stores/Common/Actions";
import MenuActions from "App/Stores/Menu/Actions";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import { HelperService } from "App/Services/Utils/HelperService";
class PendingScreen extends Component {
componentDidMount(){
// this.fetchCall()
}

fetchCall(){
  const{getTicket,token}=this.props;
  getTicket({
    token
  })

}
filterResults(list){
  // console.log(list,"llll");
let filteredList = HelperService.sortListFilter(list, "Name", "DSC");
return filteredList
}
filterResult(list) {
  const { token, userid } = this.props;
  const { id } = this.props;
  let result = "";
  result = list.filter((obj) => obj.Complaint_Status__c== id);
  // console.log(result)
  return result;
}

  getDataNode(){

      let visibleNode=[];

      const{
          data,
          loading
      }=this.props;
      const { id } = this.props;
      if(data && data.length){
       let filteredSitesList = this.filterResults(data);
       let filteredList = this.filterResult(filteredSitesList);
      //  console.log(filteredSitesList,"jjjj");
        if(filteredList.length){
              visibleNode=(
                      <FlatList
                      data={filteredList}
                    showsVerticalScrollIndicator={false}
                      renderItem={({item})=>{
  return  <View style={Style.Screen}>
    
  <View style={{ flexDirection: "row" }}>
    <View
      style={{
        marginTop: item.Ticket_Category__c=="Sales Team"?heightPercentageToDP("1%"):heightPercentageToDP("1%"),
        marginLeft: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 46,
            fontWeight: "600",
            textAlign: "left",
            color: Colors.primary,
          }}
        >
        {item.Complaint_Open_Date__c
            ? HelperService.getCurrentDate(item.Complaint_Open_Date__c.substring(0,10))
            : ""}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 20,
          marginLeft: 25,
          marginTop: 1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: Colors.primary,
          }}
        >
         {item.Complaint_Open_Date__c
            ? HelperService.getMonthMappingName(
                HelperService.getCurrentMonth(item.Complaint_Open_Date__c.substring(0,10))
              )
            : ""}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 10,
          marginLeft: 2,
          marginTop: 6,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontWeight: "300",
            color: "#515C6F",
          }}
        >
          Complaint Date
        </Text>
      </View>
    </View>

    <View style={{ marginTop: 20, marginLeft:wp('0') }}>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "left",
              color: "#9A9A9A",
            }}
          >
            Ticket No.
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {item.Name?item.Name:'TI-87'}
          </Text>
        </View>
      </View>

      {item.Ticket_Category__c=="Sales Team"?null:<View
        style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
      >
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "left",
              color: "#9A9A9A",
            }}
          >
            Customer
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {item.Dealer__r&&item.Dealer__r.Name?item.Dealer__r.Name:'M.K Paints'}
          </Text>
        </View>
      </View>}

      <View
        style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
      >
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "left",
              color: "#9A9A9A",
            }}
          >
            Ticket Type
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
           {item.Ticket_Type__c?item.Ticket_Type__c:''}
          </Text>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
      >
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "left",
              color: "#9A9A9A",
            }}
          >
            Remarks
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {item.Field_Team_Remarks__c?item.Field_Team_Remarks__c:''}
          </Text>
        </View>
      </View>

      {/* <View
        style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
      >
        <View style={{ width: "40%" }}>
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "left",
              color: "#9A9A9A",
            }}
          >
            Attachment
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "bold",
              fontSize: 13,
            }}
            onPress={()=>NavigationService.navigate('AttachmentShow',{Id:item.Id})}
          >
           {"View"}
          </Text>
        </View>
      </View> */}
{/* {item.Complaint_Status__c== "Resolved"?
      <View
                  style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                >
                  <View style={{ width: "49%" }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingLeft: 13,
                        textAlign: "left",
                        color: "#9A9A9A",
                      }}
                    >
                      Resolved Date
                    </Text>
                  </View>
                  <View style={{ width: "35%", marginLeft: "6%" }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 13,
                      }}
                    >
                    26/02/2022
                    </Text>
                  </View>
                </View>
                      <View
                      style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
                    >
                      <View style={{ width: "49%" }}>
                        <Text
                          style={{
                            fontSize: 13,
                            paddingLeft: 13,
                            textAlign: "left",
                            color: "#9A9A9A",
                          }}
                        >
                          Solution Provided
                        </Text>
                      </View>
                      <View style={{ width: "35%", marginLeft: "6%" }}>
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 13,
                          }}
                        >
                          Batteries Replaced
                        </Text>
                      </View>
                    </View>   
                     
                     
                    :[] } */}


      {/* <View
        style={{ flexDirection: "row", marginTop: 4, width: "90%" }}
      >
        <GenericDisplayCardStrip
          key={"Image"}
          label={"Image"}
          labelStyle={{
            fontSize: 13,
            paddingLeft: 40,
            textAlign: "left",
            color: "#9A9A9A",
          }}
          value={
            <Text
              style={{
                color: Colors.black,
              }}
              onPress={() => {
                return openModal({
                  content: (
                    <View style={{ flex: 1, alignSelf: "center" }}>
                      <ImageSilder />
                    </View>
                  ),
                  heading: "Preview",
                  bodyFlexHeight: 0.7,
                });
              }}
            >
              {"View"}
            </Text>
          }
          valueStyle={{
            left: wp("14%"),
            color: "black",
            fontWeight: "bold",
            fontSize: 13,
          }}
        />
      </View> */}
    </View>
    
  </View>
 
</View>
                       }}
                  keyExtractor={item => item.id}
                  refreshing={loading}
                  onRefresh={() => this.fetchCall()}
                  />

              )
          } else {
              visibleNode =<NoDataFound text={'Not  Found'} />
            }
          } else if (loading) {
             visibleNode = <Loading />
          } else if ((!data || (data && !data.length) && !loading)) {
            visibleNode = <NoDataFound text={'Not Found'} />
          }

          return visibleNode;
      }

  render() {
    const { openModal } = this.props;
    return (
      <View>
        {this.getDataNode()}
         
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  userid:state.user.loginDetails.userId,
  token: state.user.token,
  data:state.menu.TicketList,
  loading:state.menu.fetchTicketLoading,


});

const mapDispatchToProps = (dispatch) => ({
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
  getTicket: (params) => dispatch(MenuActions.fetchTicket(params)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(PendingScreen);
