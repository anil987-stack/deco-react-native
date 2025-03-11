import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Picker } from "native-base";
import Style from "./CardStyle";
import NavigationService from "App/Services/NavigationService";
import StatusLabelScreen from "App/Components/StatusLabel";
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import Address from "App/Components/Address";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import FooterCard from '../FooterCard/FooterCard'
// import FooterCardStrip from '../FooterCard/FooterCardStrip'
const Card = ({
  data,
  item,
  onPressInfo,
  contactinfo,
  dmiModal,
  getTaskData,
  addMore,
  quantityInCart,
  onChangeQuantity,
  onImageClick,
  productName,
  onRemoveClick,
  productSizeForm,
  changeSizeForm,
  onPress1,
  show = false,
  showFoot = false,
  emdPress,
}) => {
  // console.log("filter", item.Task_data.filter((obj) => obj.task_status_name == "Open"))

  // let filters = item.Task_data.filter((obj) => obj.task_status_name == "Open");
  // console.log("cghhj",filters)

  return (
    <TouchableOpacity
    //   onPress={() => {
    //     filters && filters.length == 0
    //       ? HelperService.showToast({
    //           message:
    //             "All the tasks are closed for this lead.Please create one task",
    //           duration: 2000,
    //           buttonText: "Okay",
    //         })
    //       : [],
    //       NavigationService.navigate("LeadScreen", { data: item });
    //     // console.log(onPress1)
    //   }}
    >
      <View style={Style.Screen}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <StatusLabelScreen
            status={"N/A"}
            styles={{
              top: hp("-.5%"),
              left: wp("-1%"),
              height: hp("4%"),
              backgroundColor: Colors.primary,
              width: wp("35%"),
              borderRadius: 0,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />

          <StatusLabelScreen
            status={`${
               "N/A"
            }`}
            styles={{
              top: hp("-.5%"),
              left: wp("1%"),
              height: hp("4%"),
              backgroundColor:
                // item.lead_source_type_name == "RLD"
                //   ? "#FFA500"
                //   : item.lead_source_type_name == "NLD"
                //   ? "#0000FF"
                //   : item.lead_source_type_name == "PLD"
                //   ? "green"
                   "white",
              width: wp("15%"),
              borderRadius: 0,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />

<View style={{marginRight:"12%",marginTop:"0.3%"}}>
               <GenericIcon
    show={true}
    style={{fontSize:wp('6.8'),fontWeight:'bold',color:"green"}}
    name={'star'}
    />
            </View>

<TouchableOpacity
    // onPress={onPress} 
    style={{width:wp('10'),alignSelf:'flex-end',flexDirection:'row',position:'absolute',bottom:hp('0%'), top: hp('-1%'),left:"88%"}}>
               
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

          {/* <View style={{flexDirection:'row',width:wp('40'),justifyContent:'space-between',right:wp('5'),top:hp('.2')}}>
<View style={{borderRadius:50,borderWidth:0.001,width:wp('5'),height:hp('2.5'),elevation:1,backgroundColor:Colors.lightGreyWhite}}></View>
<View style={{borderRadius:50,borderWidth:0.001,width:wp('5'),height:hp('2.5'),elevation:1,backgroundColor:Colors.darkYellow}}></View>
<View style={{borderRadius:50,borderWidth:0.001,width:wp('5'),height:hp('2.5'),elevation:1,backgroundColor:Colors.darkRedPink}}></View>
<View style={{borderRadius:50,borderWidth:0.001,width:wp('5'),height:hp('2.5'),elevation:1,backgroundColor:Colors.darkYellow}}></View>
</View> */}
        </View>
        <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
          {/* {item.owner_number__c ? ( */}
            {/* <TouchableOpacity
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "orange",
                width: wp("8"),
                height: hp("4.5"),
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              // onPress={() => HelperService.callNumber(item.owner_number__c)}
            >
              <GenericIcon
                name={"call"}
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              />
            </TouchableOpacity> */}
          {/* ) : (
            []
          )} */}
          {/* <TouchableOpacity
            //onPress={onImageClick}
            style={{ marginLeft: wp("5%") }}
          >
            <Image
              style={{
                width: wp("12%"),
                height: hp("8%"),
                borderRadius: wp("100"),
              }}
              source={
                // item.site_image_1__c
                //   ? { uri: item.site_image_1__c }
                   require("App/Assets/Images/user2.png")
              }
            />
          </TouchableOpacity> */}
          <View style={{marginLeft:"20%"}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: wp("22") }}>
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 14,
                    marginLeft: wp("2"),
                    color: Colors.subtitle,
                  }}
                >
                  {"Name :"}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: ApplicationStyles.textMsgFont,
                  fontSize: 14,
                  marginLeft: wp("2"),
                  color: Colors.primary,
                }}
              >
                {"N/A"}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: "1%",alignSelf:"center" }}>
              <View style={{ width: wp("22") }}>
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 14,
                    top: hp("1"),
                    marginLeft: wp("2"),
                    color: Colors.subtitle,
                  }}
                >
                  {"Purpose :"}
                </Text>
              </View>
              <View style={{ width: wp("40") }}>
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 14,
                    top: hp("1"),
                    marginLeft: wp("2"),
                    color: Colors.primary,
                  }}
                >
                  {"N/A"}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row",alignSelf:"center" }}>
              <View style={{ width: wp("22") }}>
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 14,
                    top: hp("1"),
                    marginLeft: wp("2"),
                    color: Colors.subtitle,
                  }}
                >
                  {"Whom :"}
                </Text>
              </View>
              <View style={{ width: wp("40") }}>
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 14,
                    top: hp("1"),
                    marginLeft: wp("2"),
                    color: Colors.primary,
                  }}
                >
                  {"N/A"}
                </Text>
              </View>
            </View>
            {/* {item.site_fir && item.site_fir != "Lead" ? ( */}
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: wp("22") }}>
                  <Text
                    style={{
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                      top: hp("1"),
                      marginLeft: wp("2"),
                      color: Colors.subtitle,
                    }}
                  >
                    {"Due Date :"}
                  </Text>
                </View>
                <View style={{ width: wp("40") }}>
                  <Text
                    style={{
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                      top: hp("1"),
                      marginLeft: wp("2"),
                      color: Colors.primary,
                    }}
                  >
                    {"N/A"}
                  </Text>
                </View>
              </View>
            {/* ) : (
              []
            )} */}

<View style={{ marginTop: "6%",marginBottom:"5%" }}>
          {/* <View style={[Style.keyvalue]}>
            <Text style={Style.key}>Last Order Date:</Text>
            <Text style={Style.value}>
              {data.Orders__r && data.Orders__r.records[0].Order_Date__c
                ? data.Orders__r.records[0].Order_Date__c
                : "2022-02-12"}
            </Text>
          </View> */}

          <View style={{...Style.keyvalue,borderWidth:0,width:"100%",marginLeft:"0%",flex:1,flexDirection:"row",}}>
            <Text style={{...Style.value1,color:"grey",justifyContent:"center",textAlign:"center",marginLeft:"-22%",fontSize:10,fontWeight:"bold"}}>{"2022-3-2 | Stage"}</Text>

          </View>
        </View>
          </View>

         
        </View>

        

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: wp("75%"),
            marginTop: "5%",
            marginLeft: "2%",
            marginBottom: hp("1%"),
          }}
        >
         

        
          <Address
            style={{ fontSize: 11 }}
            // value={item.site_address_as_per_gps__c}
            // onPress={() =>
            //   item.site_lat_long__latitude__s &&
            //   item.site_lat_long__longitude__s
            //     ? HelperService.showDirectionInGoogleMaps(
            //         item.site_lat_long__latitude__s,
            //         item.site_lat_long__longitude__s
            //       )
            //     : item.geocoordinate__latitude__s &&
            //       item.geocoordinate__latitude__s
            //     ? HelperService.showDirectionInGoogleMaps(
            //         item.geocoordinate__latitude__s,
            //         item.geocoordinate__latitude__s
            //       )
            //     : HelperService.showToast({
            //         message: "Geo Location Not Available",
            //         duration: 2000,
            //         buttonText: "Okay",
            //       })
            // }
          />
          {/* </View> */}
        {/* </View> */} 

        {/* <View
          style={{
            ...Style.Screen,
            width: "99%",
            marginHorizontal: 2,
            elevation: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 0,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", height: 50, flex: 1 }}>
            <View style={{ width: wp("9"), alignSelf: "center" }}>
             
              <GenericIcon
                show={true}
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: Colors.footerIcon,
                }}
                name={"google-analytics"}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: Colors.subtitle }}>Status</Text>
              <View style={{ width: wp("20%") }}>
                <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                  {"N/A"}
                </Text>
              </View>
            </View>
          </View> */}

          {/* <TouchableOpacity
            // onPress={() => {
            //   !show ? emdPress() : [];
            // }}
            style={{ flexDirection: "row", flex: 1 }}
          >
            <View style={{ width: wp("9"), alignSelf: "center" }}>
              <GenericIcon
                show={true}
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: Colors.footerIcon,
                }}
                name={"calendar"}
              />
            </View> */}

            {/* <View style={{ flexDirection: "column" }}>
              <Text style={{ color: Colors.subtitle }}>EMD</Text>
              <View style={{ width: wp("20%") }}>
                <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                  {"N/A"}
                  {/* {item.site_name != "Lost" && item.site_name != "Inactive"
                    ? item.expected_maturity_date__c
                      ? HelperService.dateReadableFormatWithHyphenDMY(
                          item.expected_maturity_date__c
                        )
                      : ""
                    : ""} */}
                {/* </Text>
              </View>
            </View>
          </TouchableOpacity> */}
          {/* <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{ width: wp("9"), alignSelf: "center", marginTop: 10 }}
            >
              <GenericIcon
                name={"note"}
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: Colors.footerIcon,
                }}
              /> */}
            {/* </View> 
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: Colors.subtitle }}>Site Quality</Text>
              <View style={{ width: wp("20%") }}>
                <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                  {"N/A"}
                </Text>
              </View>
            </View>
          </View>
        </View> */}

        {/* <FooterCard
       dark={false}
       card={Style.card}
       card1={Style.card1}


        content={[
					<FooterCardStrip
					icon={"account-balance-wallet"}
          title={'3.2L'}
          />,
          <FooterCardStrip 
					icon={"arrow-up-down-bold"}
          title={'10'}
          show={true}
          />,
          <FooterCardStrip 
					icon={"note-text"}
          title={'2'}
          show={true}
         // onPress={onPressicon}
          />,
        
          <FooterCardStrip 
					icon={"pencil-box-multiple-outline"}
          title={''}
         // onPress={onEditClick}
          show={true}
          />,
          <FooterCardStrip 
					icon={"more-vert"}
          title={''}
          />,

          	]}
           
                    
        /> */}

        <View
          style={{
            borderTopWidth: 0.4,
            borderColor: "black",
            marginTop: hp("1"),
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
                // show={true}
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 10,
                  color: Colors.footerIcon,
                }}
                name={"call"}
              />
              {/* <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                }}
              >
                <Text>
                  {"0"}
                 
                </Text>
              </View> */}
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
              <FontAwesome5
                style={{
                  fontSize: 23,
                  fontWeight: "bold",
                  marginTop: 10,
                  color:
                  //  !item.dmi_attached
                     Colors.footerIcon
                    // : item.dmi_attached.toLowerCase(),
                }}
                name={"sticky-note"}
              />
              {/* <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                }}
              >
                <Text>
                  {"0"}
                </Text>
              </View> */}
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
                width: wp("11"),
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              {/* <FontAwesome5
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginTop: 10,
                  color:
                  //  item.conversion_verified__c
                  //   ? "green"
                     Colors.footerIcon,
                }}
                name={"stamp"}
              /> */}
              <View
               
              >
                <Text  style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: wp("2"),
                  marginTop: hp("1"),
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  color:
                  
                     Colors.footerIcon,

                }}>
                  {"TT"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>{alert('some')}} style={{flexDirection:'row',flex:1,}}>
<View style={{width:wp('9'),alignSelf:'center',flexDirection:'row'}}>

<FontAwesome5
style={{fontSize:24,fontWeight:'bold',marginTop:10,color:Colors.footerIcon}}
name={'stamp'}
/>
<View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('2'),marginTop:hp('1')}}>
<Text>{130}</Text>
</View>
</View>
</TouchableOpacity> */}
        </View>
        {/* {!showFoot ? ( */}
          <TouchableOpacity
            // onPress={() => {
            //   addMore();
            // }}
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
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"plus-circle"}
            />
          </TouchableOpacity>
        {/* ) : (
          []
        )} */}
      </View>
    </TouchableOpacity>
  );
};
export default Card;
