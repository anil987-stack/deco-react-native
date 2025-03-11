import LocalActions from 'App/Stores/LocalExpense/Actions';
import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService'
// import SalesOrderTrack from './SalesOrderTrack';
import Dash from 'react-native-dash';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView,FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from '../../../Components/Loading';
import DealerOrderCard from './DealerOrderCard';
class DealerOrder extends Component {
    getCardNode(data) {
        return <DealerOrderCard data={data} id={data.Id}
        productdata={this.props.productList}/>
      }
    getDataNode(){

        let visibleNode=[];
        
        const{
            loading,
            loader
        }=this.props;
        // console.log(data,"jkjkjkjkjkj");
        const{
            data,
        }=this.props.navigation.state.params;
        
        
        let data1=data && data.Order_Lines__r&& data.Order_Lines__r.records?data.Order_Lines__r.records:''
        console.log('data1',data1)
        if(data1&&data1.length){
          
        
        
            if(data1.length){
                visibleNode=(
                        <FlatList
                       
                        showsVerticalScrollIndicator={false}
                        data={data1}
                        renderItem={({item})=>this.getCardNode(item) }
                    keyExtractor={item => item.Id}
                    refreshing={loading}
                    onRefresh={() => this.fetchCall()} />
                   
        
                )
            } else {
                visibleNode =<NoDataFound text={'Not  Found'} />
              }
            } else if (loading) {
              visibleNode = <Loading />
            } else if ((!data || (data && !data.length) && !loading)) {
              visibleNode = <NoDataFound text={'Not  Found'} />
            }
        
            return visibleNode;
        }
    render() {
        const{
            data,
        }=this.props.navigation.state.params;
console.log('data',data)
        return (
            <View style={{}}>
                <View style={{ marginVertical: 5 }}>
                    <BackArrowButton />
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:15}}>


                    <View style={Styles.Head}>
                        <Text style={Styles.head_txt}>Order No. : {data.Name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, margin: 20 }}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                           {data.Order_Date__c}
                        </Text>
                        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                            
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: '8%', flexDirection: 'row', minHeight:hp('5.5%'), justifyContent: 'space-between' }}>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>
                                Bill To
                            </Text>
                            <Text style={Styles.t2}>
                               {data.From__r&&data.From__r.Name?data.From__r.Name:''}
                            </Text>
                        </View>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold', }}>
                                Ship To
                            </Text>
                            <Text style={Styles.t2}>
                               {data.To__r&&data.To__r.Name?data.To__r.Name:""}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: '8%', marginTop: 15, flexDirection: 'row', height: hp('7.5%'), justifyContent: 'space-between' }}>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>
                                Distributor
                            </Text>
                            <Text style={Styles.t2}>
                               {}
                            </Text>
                        </View>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold', }}>
                                Dealer
                            </Text>
                            <Text style={Styles.t2}>
                            {data.To__r&&data.To__r.Name?data.To__r.Name:""}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: '8%', marginTop: 15, flexDirection: 'row', height: hp('7.5%'), justifyContent: 'space-between' }}>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>
                                Distributor add/less
                            </Text>
                            <Text style={Styles.t2}>
                                {}
                            </Text>
                        </View>
                        <View style={Styles.v1}>
                            <Text style={{ color: '#9A9A9A', fontWeight: 'bold', }}>
                                Order Price
                            </Text>
                            <Text style={Styles.t2}>
                                {}
                            </Text>
                        </View>
                    </View>

                    <View >
                    {this.getDataNode()}
                    </View>


                   
                    <View style={{ marginTop: 10 }} 
                    >
                       
                        <Dash style={{ width: '95%', height: 1, marginTop: 5, alignSelf: 'center' }} dashColor={'#6666664F'} />
                        <View style={{ flexDirection: 'row', width: '100%', height: hp('4%') }} >
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View>
                                <Image
                                    style={{ width: 45, height: 45, borderRadius: 3 }}
                                    source={require('App/Assets/Images/pdf.png')}
                                />
                            </View>
                            <View>
                                <Text>
                                    5684210452
                                </Text>

                            </View>

                            <Text>
                                34 MT
                            </Text>
                            <View style={{ bottom: 15 }}>
                                <BlueButton textStyle={{ fontSize: 13, textTransform: 'uppercase' }}
                                    title={"SHARE"}
                                    style={{
                                        backgroundColor: Colors.user, height: hp('3.5%'),
                                        borderRadius: 3, width: wp('20%')
                                    }}>

                                </BlueButton>
                            </View>


                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={{ width: wp('110%'), height: hp('15%'), marginVertical: 20 }} >
                                <View style={{ height: 30, width: wp('90%'), justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: wp('93%'), height: 3, marginLeft: 80, backgroundColor: '#9A9A9A', }}></View>
                                    <View style={{ width: wp('95%'), height: 25, position: 'absolute', flexDirection: 'row' }}>
                                        <View style={{
                                            width: 20, height: 22, borderRadius: 11, backgroundColor: '#D71E22',
                                            marginLeft: 40, justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <Text style={{ color: '#fff', fontFamily: 'Rubik-Regular' }}>1</Text>
                                        </View>
                                        <View style={{
                                            width: 20, height: 22, borderRadius: 22,
                                            backgroundColor: '#D71E22',
                                            //  backgroundColor: data.order_status__c == "Pending for Approval from Organization" || data.order_status__c == "Approved By Distributor" || data.order_status__c == "Rejected By Organisation" ? '#D71E22' : '#9A9A9A',
                                            marginLeft: 70, justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <Text style={{ color: '#fff', fontFamily: 'Rubik-Regular' }}>2</Text>
                                        </View>
                                        <View style={Styles.text5}>
                                            <Text style={{ color: '#fff', fontFamily: 'Rubik-Regular' }}>3</Text>
                                        </View>
                                        <View style={Styles.text5}>
                                            <Text style={{ color: '#fff', fontFamily: 'Rubik-Regular' }}>4</Text>
                                        </View>
                                        <View style={Styles.text5}>
                                            <Text style={{ color: '#fff', fontFamily: 'Rubik-Regular' }}>5</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 35, flexDirection: 'row', width: wp('110%') }}>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={Styles.text4}>{"Approved by Distributor"}</Text>
                                    </View>
                                    <View style={{
                                        width: '20%', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text style={Styles.text4}>
                                            Approved by Company
                                        </Text>
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                        <Text style={Styles.text4}>Vehicle loading</Text>
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                        <Text style={Styles.text4}>Dispatched</Text>
                                    </View>
                                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                        <Text style={Styles.text4}>Delivered</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                      <View style={{ flexDirection: 'row', justifyContent:'center', bottom:40}}>
                            <View style={{ flexDirection: 'column' , marginHorizontal:10}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35, borderRadius: 3, tintColor: '#32C71BE3', alignSelf:'center' }}
                                        source={require('App/Assets/Images/phone-call.png')}
                                    />
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold', fontSize:10, textAlign:'center'}}>
                                        Contact Sales Officer
                                    </Text>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold',textAlign:'center', fontSize:14 }}>
                                        Sunil Sharma
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'column', marginHorizontal:10 }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 35, height: 35, borderRadius: 3, tintColor: '#32C71BE3', alignSelf:'center' }}
                                        source={require('App/Assets/Images/phone-call.png')}
                                    />
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold', fontSize:10, textAlign:'center'}}>
                                        Contact Dealer
                                    </Text>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold',textAlign:'center', fontSize:14 }}>
                                        Anil Sharma
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <BlueButton
                                title={'Track Invoive'}
                                textStyle={{ fontSize: 11 }}
                                style={Styles.tt1}>
                            </BlueButton>
                        </View>

                </ScrollView>
            </View>

        )
    }
}


const mapStateToProps = (state) => ({
    token:state.user.token,
    loading:state.orders.fetchAllOrdersLoader,
    selectedRetailer: state.retailers.selectedRetailer,
    productList:state.products.productList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealerOrder)


const Styles = StyleSheet.create({
    Head: {
        height: hp('6%'), width: wp('100%'), backgroundColor: Colors.primary
    },
    head_txt: {
        fontSize: 23, color: 'white', margin: 5, left: 20
    },
    Card: {
        height: hp('12%'),
        width: wp('92%'),
        borderWidth: 1,
        elevation: 3,
        borderRadius: 5, backgroundColor: 'white', alignSelf: 'center',
        marginVertical: 0, marginTop: '10%', borderColor: '#8B8B8B0F'
    },
    Card2: {
        height: hp('12%'),
        width: wp('92%'),
        borderWidth: 1,
        elevation: 3,
        borderRadius: 5, backgroundColor: 'white', alignSelf: 'center',
        marginVertical: 20, borderColor: '#8B8B8B0F'
    },
    t1: {
        color: '#9A9A9A', fontWeight: 'bold'
    }, t2: {
        marginVertical: 10, fontSize: 17, fontWeight: 'bold',width:'100%'
    }, v1: {
        borderBottomColor: '#9A9A9A', borderBottomWidth: 1, width: wp('35%'),
    },
    text4: {
        color: '#707070', fontSize: 11.5, textAlign: 'center'
    }, text5: {
        width: 20, height: 22, borderRadius: 22, backgroundColor: '#9A9A9A', marginLeft: 70, justifyContent: 'center', alignItems: 'center'
    }, tt1:{
        height: hp('3.5%'), width: wp('25%'), borderRadius: 3, backgroundColor: '#E95454', marginLeft: wp('10%') 
    }

});
