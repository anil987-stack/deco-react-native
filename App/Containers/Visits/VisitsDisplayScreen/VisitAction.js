import React, { Component } from 'react'
import { View, Alert, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from './VisitsDisplayScreenStyles'
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import VisitsActions from 'App/Stores/Visits/Actions'
import VisitCard from 'App/Containers/Visits/VisitCard'
import Loading from 'App/Components/Loading'
import NoDataFound from 'App/Components/NoDataFound'
import { Colors } from 'App/Theme'




export default class VisitAction extends React.Component {

	goto = (screen) => {
		this.props.closeVisitsAction();
		NavigationService.navigate(screen);
	}

	render() {
		return (
			<View>
				<View style={{ ...Style.iconContainer, ...{ bottom: 205 } }}>
					<BlueButton title={'Plan Visit'} style={{ height: 35,backgroundColor:Colors.primary }} textStyle={{ ...Style.iconMessage }} onPress={() => this.goto('AddPlannedVisitsScreen')} />
					<TouchableOpacity
						style={{ ...Style.plusIcon, ...{ bottom: -8, right: -65 } }}
						onPress={() => this.goto('AddPlannedVisitsScreen')}>
						<Icon
							name={'ios-calendar'}
							ios={'ios-calendar'}
							android={'md-calendar'}
							style={{ color: Colors.white, fontSize: 25, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ ...Style.iconContainer, ...{ bottom: 140 } }}>
					<BlueButton title={'Unplanned Visit'} style={{ height: 35,backgroundColor:Colors.primary }} textStyle={{ ...Style.iconMessage }} onPress={() => this.goto('SearchByAreaScreen')} />
					<TouchableOpacity
						style={{ ...Style.plusIcon, ...{ bottom: -5, right: -65 } }}
						onPress={() => this.goto('SearchByAreaScreen')}>
						<Icon
							name={'ios-pin'}
							ios={'ios-pin'}
							android={'md-pin'}
							style={{ color: Colors.white, fontSize: 25, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}