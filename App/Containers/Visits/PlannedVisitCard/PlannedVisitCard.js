import React from "react";
import { Text, View, TouchableWithoutFeedback, Image,TouchableOpacity } from "react-native";
import Style from "./PlannedVisitCardStyles";
import { Icon, Input, Button } from "native-base";
import {
  AREA,
  PREV_ORDER_VAL,
  VISIT_THIS_WEEK,
  MAIN_COMPETETOR,
} from "App/Constants";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import Ratings from "App/Components/Ratings";
import WhiteButton from "App/Components/WhiteButton";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import Address from "App/Components/Address";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";
import SitesPlannedVisitCard from "./SitesPlannedVisitCard";
import InfluencerPlannedVisitCard from "./InfluencerPlannedVisitCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchableDropdown from "../../../Components/SearchableDropdown";

const PlannedVisitCard = ({
  data,
  categoryRatingMapping,
  added,
  onAddClick,
  areas,
  onEditClick,
  onRemoveClick,
  type,
  beat,
  show,
  onPress,
}) => {
  // console.log("added",added);
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={{...Style.box2,marginTop:"-1%"}}>
        <View style={{ ...Style.row, width: wp("50%"), left:"4.5%"}}>
          <Text style={Style.head}>{data.Name}</Text>
          {/* <GenericIcon
              show={true}
              name={"circle"}
              // onPress={() => HelperService.callNumber(data.Phone || "")}
              style={{
                marginTop: 0,
                // width: 20,
                // height: 15,
                fontSize: 18,
                color: Colors.primary,
                position:"absolute",
                left:wp("43%")
                
               
                
              }}
            /> */}

            <View style={{marginLeft:"58%",marginTop:"-2%"}}>
               <GenericIcon
    show={true}
    style={{fontSize:wp('6.8'),fontWeight:'bold',color:"green"}}
    name={'star'}
    />
            </View>

<TouchableOpacity
    // onPress={onPress} 
    style={{width:wp('10'),alignSelf:'flex-end',flexDirection:'row',position:'absolute',bottom:hp('0%'), top: hp('-1.5'),left:"155%"}}>
               
    {/* <GenericIcon
    show={true}
    style={{fontSize:wp('6.8'),fontWeight:'bold',marginTop:10,color:Colors.primary}}
    name={'checkbox-marked-outline'}
    />
    : */}
    <GenericIcon
    show={true}
    style={{fontSize:wp('6.8'),fontWeight:'bold',marginTop:10,color:Colors.primary}}
    name={'checkbox-blank-outline'}
    />
    
    
    </TouchableOpacity>
            
        </View>

        <View style={{ marginTop: 2, marginLeft: "2%",flexDirection: "row",}}>
       
      <GenericIcon
        name={"location-on"}
        style={{ color: "#718b90", fontSize: wp("4%"),marginTop:2.5}}
      />
  
   
          <Text style={{fontSize: wp("3.5%"),color: "#718b90",marginTop:-0.5 }}>
            {data.BillingAddress && data.BillingAddress.city
              ? data.BillingAddress.city
              : "Patiala"}
            ,
            {data.BillingAddress && data.BillingAddress.country
              ? data.BillingAddress.country
              : "India"}
          </Text>
        {/* </View>

         <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "absolute",
            left: wp("77%"),
            top: hp("0%"),
            
          }}
        >
          <View style={{ flexDirection: "row", }}>
            <GenericIcon
              show={true}
              name={"circle"}
              onPress={() => HelperService.callNumber(data.Phone || "")}
              style={{
                marginTop: 3,
                width: 20,
                height: 15,
                fontSize: 18,
                color: Colors.primary,
               
                
              }}
            /> */}
            {/* <Text style={{ color: Colors.primary, marginLeft: 5 }}>Call</Text> */}
          {/* </View>

          <View style={{ flexDirection: "row", marginLeft: 10,}}>
            <GenericIcon
              show={true}
              name={"target"}
              onPress={() => {
                data.Location__c &&
                data.Location__c.latitude &&
                data.Location__c.longitude
                  ? HelperService.showDirectionInGoogleMaps(
                      data.Location__c.latitude,
                      data.Location__c.longitude
                    )
                  : HelperService.showToast({
                      message: "Geo Location Not Available",
                      duration: 2000,
                      buttonText: "Okay",
                    });
              }}
              style={{
                marginTop: 1,
                width: 20,
                height: 17,
                fontSize: 19,
                color: Colors.primary,
                
              }}
            /> */}
            {/* <Text style={{ color: Colors.primary, marginLeft: 4 }}>
              Direction
            </Text> */}
          {/* </View> */}
        </View>

        <View style={{ marginTop: 1,marginLeft:"15%"}}>
          {/* <View style={[Style.keyvalue]}>
            <Text style={Style.key}>Last Order Date:</Text>
            <Text style={Style.value}>
              {data.Orders__r && data.Orders__r.records[0].Order_Date__c
                ? data.Orders__r.records[0].Order_Date__c
                : "2022-02-12"}
            </Text>
          </View> */}

          <View style={[Style.keyvalue]}>
            <Text style={Style.key}>Last Visit Date:</Text>
            <Text style={Style.value}>
              {data.Visits__r && data.Visits__r.records[0].Visit_Date__c
                ? data.Visits__r.records[0].Visit_Date__c
                : ""}
            </Text>
          </View>

          <View style={{marginLeft:"-17%"}}>
          <SearchableDropdown
            dataSource={[
              // { id: "a050w000003PjLbAAK", name: "Architect" },
              // { id: "a050w000003RDvuAAG", name: "ID" },
              // { id: "a050w000003PjLdAAK", name: "Engineer" },
              // { id: "a050w000003PjLgAAK", name: "Contractor" },
              // { id: "a050w000003PjLlAAK", name: "Carpenter" },
            ]}
            placeHolderText={"Purpose Of Visit:"}
            
            // selectedValue={influencersForm.influencer_type__c}
            // selectedValue={data.sfid == form.id ? form.colour__c : ""}
            // onChange={(value) => {
            //   this.props.changeInfluencersForm({
            //     edited_field: "influencer_type__c",
            //     edited_value: value,
            //   });
            //   this.props.changeform({
            //     edited_field: "contact_type",
            //     edited_value: null,
            //   });
            // }}
            placeholder={"Type or Select Purpose"}
            invalid={false}
            dropDownSize={{ marginLeft: 0, width: 14, height: 12 }}
            dropstyle={{left:-8,
              width: wp("3"),
              height: wp("3"),marginTop:1}}
            stylelabel={{
              color: Colors.subtitle,
              marginLeft: 2,
              marginBottom: 18,
              
            }}
          
            customPickerStyles={{
              // width: "95%",
              // height: 30,
              // borderBottomColor: Colors.underline,
              // borderWidth: 0.5,
              // borderColor: "transparent",
              // borderRadius: 0,
              // marginLeft: 5,

              marginTop: "-2%",
		backgroundColor: 'white',
    paddingVertical: 12,
    
		paddingHorizontal: '8%',
		width: '94%',
		flexDirection: 'row',
	//	justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
		borderRadius: 5,
		elevation: 2,
    borderColor:Colors.primary,
    borderWidth:0.5
            }}
            labelStyles={{
            
              

              fontSize: 14,
             
            }}

            // headerStyle={{
            //   fontFamily: ApplicationStyles.textMsgFont,
            //   color: Colors.black,
            //   fontSize: wp("4.4%"),
            //   width: "106%",
            //   textAlign: "left",
            //   marginLeft: wp("2%"),
            // }}
            // customPickerStyles={{

            //   width: "85%",
            //   height: hp("5%"),
            //   elevation: 5,
            //   alignSelf: "center",
            //   backgroundColor: "white",

            // }}
            // key={form.id}
          />
          </View>
          <View style={{ marginTop: "-1%" }}>
          {/* <View style={[Style.keyvalue]}>
            <Text style={Style.key}>Last Order Date:</Text>
            <Text style={Style.value}>
              {data.Orders__r && data.Orders__r.records[0].Order_Date__c
                ? data.Orders__r.records[0].Order_Date__c
                : "2022-02-12"}
            </Text>
          </View> */}

          <View style={{...Style.keyvalue,borderWidth:0,width:"100%",marginLeft:"0%",flex:1,flexDirection:"row",}}>
            <Text style={{...Style.value1,color:"grey",justifyContent:"center",textAlign:"center",marginLeft:"-15%",fontSize:10}}>{"PJP | Category | Partner"}</Text>

          </View>
        </View>
        </View>
       




        <View
          style={{
            borderTopWidth: 0.4,
            borderColor: "black",
            marginTop: hp("0.2"),
          }}
        />
        <View
          style={{
            ...Style.Screen,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            shadowColor: "#000",
            marginTop: 0,
            marginBottom: 0,
            elevation: 0,
          }}
        >
          <TouchableOpacity
            // onPress={() => {
            //   item.Task_data_count != 0 ? getTaskData() : [];
            // }}
            style={{ flexDirection: "row", height: 40, flex: 1 }}
          >
            <View
              style={{
                width: wp("9"),
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <GenericIcon
                show={true}
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: Colors.footerIcon,
                }}
                name={"amazon"}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                }}
              >
                <Text>
                  {/* {item.Task_data_count
                    ? `${item.Task_data_count}/ ${item.close_task_count}`
                    : "0"} */}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   contactinfo();
            // }}
            style={{ flexDirection: "row", height: 40, flex: 1 }}
          >
            <View
              style={{
                width: wp("9"),
                alignSelf: "center",
                flexDirection: "row",
              }}
            >

<GenericIcon
                show={true}
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: Colors.footerIcon,
                }}
                name={"navigation"}
              />
              {/* <FontAwesome5
                name={"target"}
                style={{
                  color:  Colors.footerIcon,
                  fontSize: hp("3%"),
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              /> */}

              {/* <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                }}
              >
                <Text>{"0"}</Text>
              </View> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   dmiModal();
            // }}
            style={{ flexDirection: "row", height: 40, flex: 1 }}
          >
            <View
              style={{
                width: wp("9"),
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text  style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color:
                   Colors.footerIcon
                   
                }}>{"4"}</Text>
              {/* <FontAwesome5
                style={{
                  fontSize: 23,
                  fontWeight: "bold",
                  marginTop: 10,
                  color:
                   Colors.footerIcon
                   
                }}
                name={"users"}
              /> */}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                }}
              >
                <Text>
                  {/* {item.contractor_architect_count
                    ? item.contractor_architect_count
                    : "0"} */}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => {
            //   if (item.expected_order_count > 0)
            //     NavigationService.navigate("ExpOrdersListScreen", {
            //       data: item,
            //     });
            //   else {
            //     console.log("8");
            //   }
            // }}
            style={{ flexDirection: "row", height: 40, flex: 1 }}
          >
            <View
              style={{
                width: wp("12%"),
                alignSelf: "center",
                marginLeft: wp("-6%"),
                // flexDirection: "row",
              }}
            >
              {/* <FontAwesome5
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginTop: 10,
                 color: Colors.footerIcon,
                }}
                name={"stamp"}
              /> */}
               <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("-2%"),
                  marginTop: hp("0"),
                 
                }}
              >
                <Text style={{ fontSize: 8,color:"grey"}}>
                  {"MTD|YTD"}
                  {/* {item.supply_quantity_count
                    ? item.supply_quantity_count
                    : "0"} */}
                </Text>
              </View>
              <View
               
                  
              
              >
                <Text  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: "-15%",
                   color: Colors.footerIcon,
                  }}>
                  {"1|15"}
                  {/* {item.supply_quantity_count
                    ? item.supply_quantity_count
                    : "0"} */}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        
          </View>
        
      
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate("SuggestionScreen")
            }}
            style={{
              width: wp("10"),
              alignSelf: "flex-end",
              flexDirection: "row",
              position: "absolute",
              bottom: hp("1%"),
            }}
          >
            <GenericIcon
              show={true}
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"plus-circle"}
            />
          </TouchableOpacity>

         

        

      
      
      








        {/* <View style={Style.actionContainer}>
          {show ? (
            []
          ) : (
            <BlueButton
              selected={false}
              title={!added ? "ADD" : ""}
              disabled={false}
              loading={false}
              onPress={() => {
                // added ? onRemoveClick() : onAddClick();
                NavigationService.navigate("SuggestionScreen")
              }}
              style={Style.addActionButton}
              textStyle={Style.addActionButtonText}
            >
              {added ? (
                <GenericIcon name="check" style={Style.addActionButtonIcon} />
              ) : (
                []
              )}
            </BlueButton>
          )}
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PlannedVisitCard;
