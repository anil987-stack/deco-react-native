import React,{Component} from'react';
import { View,Text,FlatList,TouchableOpacity } from 'react-native';
import styles from './Last3VisitStyle';
import { connect } from 'react-redux'
import {HelperService} from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService';
import MenuActions from 'App/Stores/Menu/Actions';
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import GenericIcon from 'App/Components/GenericIcon';
import { ApplicationStyles, Colors, Fonts } from 'App/Theme';
class LastVisitTagScreen extends Component {

    getDataNode(){

        let visibleNode=[];
        
        const{
            data,
        }=this.props.navigation.state.params;

        if(data && data.length){
            if(data.length){
                visibleNode=(
                        <FlatList
                       
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({item})=>
                        
                        <View style={styles.Screen}>
                

                           
                     <View style={{flexDirection:'row'}}>
                          <View style={{marginTop:5,marginLeft:20}}>
                            <View style={{width:'100%',height:40,justifyContent:'center'}}>
                            <Text style={{fontSize:46, fontWeight:'600',textAlign:'center',color:Colors.primary}}>{item.Owner&&item.Owner.Name?item.Owner.Name:''}</Text>
                            </View>
                            {/* <View style={{width:'100%',height:24,marginLeft:25,marginTop:0}}><Text style={{fontSize:18,fontWeight:'500',color:Colors.primary}}>{ item.Visit_Date__c?HelperService.getMonthMappingName(HelperService.getCurrentMonth(item.Visit_Date__c)):''}</Text></View> */}
                            {/* <View style={{width:'100%',height:15,marginLeft:15,marginTop:2}}><Text style={{fontSize:11,fontWeight:'300',color:'#515C6F'}}>Visit Date</Text></View> */}
                            
     
                          
                          </View>
        
                        <View style={{marginTop:25,marginLeft:30} }>
                          <View style={{flexDirection:'row'}}>
                            
                            <View style={{width:'35%'}}>
                            <Text  style={{fontSize:13,color:'#9A9A9A'}}>Name</Text>
                            </View>
                            <View style={{width:'40%',marginLeft:1}}>
                            <Text style={{color:'black' ,fontWeight:'bold',fontSize:13}}>{item.Owner&&item.Owner.Name?item.Owner.Name:''}</Text>
                            </View>
                            </View>
                      
        
                            <View style={{flexDirection:'row',marginTop:4}}>
                            <View style={{width:'35%'}}>
                            <Text  style={{fontSize:13,color:'#9A9A9A'}}></Text>
                            </View>
                            <View style={{width:'40%',marginLeft:1}}>
                            <Text style={{color:'black' ,fontWeight:'bold',fontSize:13}}>{}</Text>
                            </View>
                            </View>
                        
                            <View style={{flexDirection:'row',marginTop:4}}>
                            <View style={{width:'35%'}}>
                            <Text  style={{fontSize:13,color:'#9A9A9A'}}></Text>
                            </View>
                            <View style={{width:'40%',marginLeft:1}}>
                            <Text style={{color:'black' ,fontWeight:'bold',fontSize:13}}>{}</Text>
                            </View>
                            </View>
                        
        
                          </View>
                      
                        </View>
            
           
                        </View>
                       
                    }
                    keyExtractor={item => item.Id}
                   // refreshing={loader}
                    //onRefresh={() => this.fetchCall()}
                     />
                   
        
                )
            } else {
                visibleNode =<NoDataFound text={'Not  Found'} />
              }
            }  else if ((!data || (data && !data.length))) {
              visibleNode = <NoDataFound text={'Not Found'} />
            }
        
            return visibleNode;
        }


render(){


    const{
        data,
    }=this.props.navigation.state.params;

console.log(data,"data")
return(

<View style={{flex:1}}>

{this.getDataNode()}

</View>
)
}
}
export default LastVisitTagScreen