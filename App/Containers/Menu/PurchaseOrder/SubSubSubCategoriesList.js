import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableHighlight, FlatList, Dimensions} from 'react-native'
import { Button, Text, Icon, List, ListItem, Left, Right, CheckBox, Body } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import VisitsActions from 'App/Stores/Visits/Actions'
import VisitCard from 'App/Containers/Visits/VisitCard'
import ProductCard from 'App/Components/ProductCard'
// import VisitAction from '../VisitsDisplayScreen/VisitAction';
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import GenericIcon from 'App/Components/GenericIcon'
import SearchBar from 'App/Components/SearchBar'
import EditVisitCard from 'App/Containers/Visits/EditVisitCard';
import CommonActions from 'App/Stores/Common/Actions'
import { Colors } from 'App/Theme'
import Style from './SelectFiltersListStyles';


export default class SubSubSubCategoriesList extends React.Component {
	getCardNode(data) {
		const {
			selectedData,
			onDeselect,
			onSelect
		} = this.props;
		
		if (data.header == true) {
			return (
				<ListItem style={Style.listItemDivider}>
	              	<Text style={{...Style.selectedListItemText, ...Style.selectedListItemHeader}}>{data.name}</Text>
	            </ListItem>  
	        )
		}else {
			if (selectedData.indexOf(data.Vehicle_Segment__c) > -1) {
				return (
		            <ListItem selected={true} onPress={() => onDeselect(data.Vehicle_Segment__c)}>
			            <CheckBox checked={true} color={Colors.button}  onPress={() => onDeselect(data.Vehicle_Segment__c)}/>
				            <Body>
				              <Text style={Style.selectedListItemText}>
		                		{data.Vehicle_Segment__c}
		                	</Text>
				        </Body>
	          		</ListItem>

				);	
			}else {
				return (
					<ListItem selected={false} onPress={() => onSelect(data.Vehicle_Segment__c)}>
			            <CheckBox checked={false}  color={Colors.button} onPress={() => onSelect(data.Vehicle_Segment__c)}/>
				            <Body>
				              <Text style={Style.listItemText}>
		                		{data.Vehicle_Segment__c}
		                	</Text>
				        </Body>
	          		</ListItem>
				);
			}
		}
	}

  	render() {
	  	const {
	  		data,
	  		loading
	  	} = this.props;

	  	let visibleNode = [];
	  	if (data && data.length) {
	  		visibleNode = (
	        	<FlatList
	              	data={data}
	              	renderItem={({ item }) => this.getCardNode(item)}
	              	keyExtractor={item => item.id}
            	/>
        	);
	  	}else if(loading){
	  		visibleNode = <Loading />
	  	}
	  	else if(data && !data.length && !loading) {
	  		visibleNode = <NoDataFound text={'No Data Found'}></NoDataFound>
	  	}

	    return (
	    	<View style={{flex: 1}}>
		       	{visibleNode}
		    </View>
	    )
  	}
}

