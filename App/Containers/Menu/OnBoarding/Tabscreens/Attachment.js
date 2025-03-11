import BlueButton from 'App/Components/BlueButton';
import WhiteButton from 'App/Components/WhiteButton';
import { ApplicationStyles, Colors, Fonts, Helpers, Metrics } from 'App/Theme';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';
import Select from 'App/Components/Select/Select';
import LocalActions from 'App/Stores/LocalExpense/Actions';
import VisitsActions from 'App/Stores/Visits/Actions';
import Style from './Attachmentstyle';
import FilePicker from 'App/Components/FIlePicker';
import { HelperService } from 'App/Services/Utils/HelperService';
import { Icon } from 'native-base';
import _ from 'lodash';
import { watchPlaceOrder } from 'App/Sagas/VisitsSaga';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import SearchableDropdown from "App/Components/SearchableDropdown";
import ImagePick from 'App/Components/ImagePicker/ImagePick';

let extractData = {};
class Attachment extends Component {
componentDidMount(){
const{fetchLocalImage,token,item,form}=this.props;
fetchLocalImage({
    token,
    id:form.Id
})
}


    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileUri: '',
            objective: "Attach Image",
        }
    }

    submit() {
        const { selectLocalExpenseItem, token, agentid,userid,item,form } = this.props;
    console.log(item,'ggg');
        if (this.state.fileName === '') {
            HelperService.showToast({ message: 'No file selected' });
        } else {
            this.props.uploadLocalImage({
                token: token,
                id:form.Id,
                params: {
                    "Title" : this.state.fileName,
                    "OwnerId":userid,
                    "VersionData": this.state.fileUri,
                    "ContentLocation":"S",
                    "PathOnClient":this.state.fileName,
                },
                type:'expense'
            });
        }
    }

    viewFile(token,attachmentId,FileExtension,file){
        const{fetchVisitImageAttach,selectfile}=this.props;
        selectfile({file});
        fetchVisitImageAttach({token,attachmentId:attachmentId,extension:FileExtension,type:'onboarding'})
        
      }
      
      
      
      
      getAttachmentInfoNode() {
        let visibleNode = [];
        
        const {fetchVisitInfoLoader,form,visitInfoImage,token,fetchVisitImageAttach,imagelist } = this.props;
        let id=form.Id;
        // console.log("visitInfoImage[pgid]",imagelist[id].map((obj,index)=>obj.ContentDocumentId),id);
      
        if (!_.isEmpty(imagelist)) { 
          visibleNode = (
            <ScrollView style={{alignSelf:'center',backgroundColor:'white'}}>
              
              { imagelist&&imagelist.map((obj, index) =>
              <View>
              <View style={{elevation:3,borderWidth:1,backgroundColor:'white',
                paddingLeft: wp('3%'),
                width:wp('90%'),
                
                paddingRight: wp('3%'),
                paddingTop: hp('1%'),
                borderRadius:wp('1'),
                paddingBottom: hp('0%'),marginVertical:'2%',borderColor:'transparent',marginHorizontal:'1%'}}>
      
               <GenericDisplayCardStrip 
               style={{width:'97%',flexDirection:'row'}}
               key={'Attchament'+ index} 
               label={obj.ContentDocument.Title }  
               labelStyle={{ fontSize:wp('3.8%'),width:wp('55%'),color:Colors.primary,fontWeight:'bold'}}
               value={ <Text style={ {textDecorationLine: 'underline', color: '#1890ff'} } 
               onPress={() => this.viewFile(token,obj.ContentDocumentId,obj.ContentDocument.FileExtension,obj)}>{ `View`}</Text> }
               />
               </View>
               </View>
      
               )} 
            </ScrollView>
          )
        } else if (fetchVisitInfoLoader){
          visibleNode = <Loading />;
        }else { 
          visibleNode = [];
        }
      
        return visibleNode;
      }
      
      


    render() {
        const { selectLocalExpense,item,imagelist } = this.props;
        let visibleNode =<ScrollView style={Style.action}>
            <FilePicker onSuccess={({ fileName, fileUri }) => {
                this.setState({ fileName: fileName, fileUri: fileUri })
            }} />

           { <View>
                <TouchableOpacity   onPress={() => this.submit()}>
                <BlueButton
                    style={Style.button}
                    rounded
                    large
                    title={'Upload'}
                    disabled={this.props.uploadLocalImageLoader}
                    loading={this.props.uploadLocalImageLoader}
                  
                />
            </TouchableOpacity>
            </View>}
            </ScrollView>
            
        return (
            <View style={Style.container}>
             <View style={{ height: hp("10%") }}>
          <SearchableDropdown
            dataSource={[
              { id: "Attach Doc", name: "Attach Doc" },
              { id: "Attach Image", name: "Attach Image" },
            ]}
            placeHolderText={"Select One"}
            selectedValue={this.state.objective}
            onChange={(value) => this.setState({ objective: value })}
            placeholder={"Type or Select Type"}
            invalid={false}
            labelStyles={{
              color: Colors.black,
              textAlign: "center",
              //   width: "99%",
              //  padding:5,
              fontSize: 13,
              flexDirection: "row",
            }}
            customPickerStyles={{
            //   ...Style.picker,
              left: wp("0.5%"),
              backgroundColor: "lightgrey",
            }}
            // label={'Reason'}
          />
        </View>

        <View style={{ height: hp("20") }}>
          {this.state.objective == "Attach Doc" ? (
            visibleNode
          ) : (
            <View style={{ marginLeft: wp("30") }}>
              <ImagePick
                onImageSuccess={({ filename, image }) => {
                  this.setState({ fileName: filename, fileUri: image });
                  this.submit();
                }}
              />
              <View>
            
          </View>
            </View>
          )}
        </View>
                          {this.getAttachmentInfoNode()}
            </View >
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    agentid: state.user.id,
    userid:state.user.loginDetails.userId,
    uploadLocalImageLoader: state.local.uploadLocalImageLoader,
    selectLocalExpense: state.local.selectLocalExpense,
    selectLocalExpenseItem: state.local.selectLocalExpenseItem,
    imagelist:state.local.localImageList,
    form: state.menu.createOnboardinglist,

})

const mapDispatchToProps = (dispatch) => ({
    clearSelectLocalItemExpense: (params) => dispatch(LocalActions.clearSelectLocalItemExpense(params)),
    uploadLocalImage: (params) => dispatch(LocalActions.uploadLocalImage(params)),
    fetchLocalImage: (params) => dispatch(LocalActions.fetchLocalImage(params)),
    fetchVisitImageAttach:(params)    =>dispatch(LocalActions.fetchVisitImageAttach(params)),
  selectfile: (params)         => dispatch(VisitsActions.selectFile(params)),
// export function* fetchLocalImage({ payload }) {

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Attachment)

const Styles = StyleSheet.create({
    searchFilterContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchFilterTypeBox: {
        marginHorizontal: 5,
        width: 200,
        borderWidth: 1.5
    },
    searchFilterTypeText: {
        fontSize: 15,
        fontFamily: ApplicationStyles.textMediumFont
    },
});
