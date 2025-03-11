import React from "react";
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./ComplaintCardStyle";
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
const ComplaintCard = ({ item }) => {
  // console.log("jjjjjjjjjj",item)
  return (
    <TouchableOpacity
    // onPress={() => NavigationService.navigate('ComplaintSecondScreen')}
    >
      <View style={Style.Screen}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 25, marginLeft: 20 }}>
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
                  textAlign: "right",
                  color: Colors.primary,
                }}
              >
                23
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 20,
                marginLeft: 13,
                marginTop: -5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: Colors.primary,
                }}
              >
                Feb
              </Text>
            </View>
            {/* <View style={{width:'100%',height:10,marginLeft:2,marginTop:6}}><Text style={{fontSize:11,fontWeight:'300',color:'#515C6F'}}>Complaint Date</Text></View> */}
          </View>

          <View style={{ marginTop: 20, marginLeft: 13 }}>
            <View style={{ flexDirection: "row", width: "90%" }}>
              <View style={{ width: "49%" }}>
                <Text
                  style={{
                    fontSize: 13,
                    paddingRight: 13,
                    textAlign: "right",
                    color: "#9A9A9A",
                  }}
                >
                  Type:
                </Text>
              </View>
              <View style={{ width: "35%", marginLeft: 15 }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 13 }}
                >
                  New Product
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 4, width: "90%" }}>
              <View style={{ width: "49%" }}>
                <Text
                  style={{
                    fontSize: 13,
                    paddingRight: 13,
                    textAlign: "right",
                    color: "#9A9A9A",
                  }}
                >
                  Brand:
                </Text>
              </View>
              <View style={{ width: "35%", marginLeft: "6%" }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 13 }}
                >
                  Bajaj
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 4, width: "90%" }}>
              <View style={{ width: "49%" }}>
                <Text
                  style={{
                    fontSize: 13,
                    paddingRight: 13,
                    textAlign: "right",
                    color: "#9A9A9A",
                  }}
                >
                  Part No:
                </Text>
              </View>
              <View style={{ width: "35%", marginLeft: "6%" }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 13 }}
                >
                  1M123
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 4, width: "90%" }}>
              <View style={{ width: "49%" }}>
                <Text
                  style={{
                    fontSize: 13,
                    paddingRight: 13,
                    textAlign: "right",
                    color: "#9A9A9A",
                  }}
                >
                  Application:
                </Text>
              </View>
              <View style={{ width: "35%", marginLeft: "6%" }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 13 }}
                >
                  Test
                </Text>
              </View>
            </View>

            {/* <View style={{flexDirection:'row',marginTop:4,width:'90%'}}>
           <View style={{width:'49%'}}>
           <Text  style={{fontSize:13,paddingRight:13,textAlign:'right',color:'#9A9A9A'}}>Invoice No.</Text>
           </View>
           <View style={{width:'35%',marginLeft:'6%'}}>
           <Text style={{color:'black' ,fontWeight:'bold',fontSize:13}}>INV-16811</Text>
           </View>
           </View>
        */}
            {/* <View style={{flexDirection:'row',marginTop:4,width:'90%'}}>
           <View style={{width:'49%'}}>
           <Text  style={{fontSize:13,paddingRight:13,textAlign:'right',color:'#9A9A9A'}}>Description</Text>
           </View>
           <View style={{width:'35%',marginLeft:'6%'}}>
           <Text style={{color:'black' ,fontWeight:'bold',fontSize:13}}>Foot Mat Damaged</Text>
           </View>
           </View>
        */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ComplaintCard;
