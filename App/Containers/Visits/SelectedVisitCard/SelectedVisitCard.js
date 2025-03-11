import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Style from './SelectedVisitCardStyles'
import { Icon, Input, Button, ActionSheet } from 'native-base'
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import Ratings from 'App/Components/Ratings';
import WhiteButton from 'App/Components/WhiteButton'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import DatePicker from 'App/Components/DatePicker'
import ActionModal from 'App/Components/ActionModal'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import RecurrenceSelection from 'App/Containers/Visits/RecurrenceSelection'
import { watchPosition } from 'react-native-geolocation-service'

const UnplannedVisitCard = ({ name, type, categoryRatingMapping, onRemoveClick, plannedVisitData, id, sfid, editSelectedVisits, recurringMapping, agentid, psmList }) => {

	let datePickerNode = (
		<Text style={Style.detail}>
			{`${HelperService.dateReadableFormat(plannedVisitData.Visit_Date__c)}  `}
			<GenericIcon
				name="create"
				style={{ ...DatePickerStyles.icon, ...DatePickerStyles.iconActive, ...{ color: Colors.primary, fontSize: 20, marginTop:0 } }}
			/>
			<Text style={{ color: Colors.primary, fontSize: 13 }}> Edit</Text>
		</Text>
	);

	let recurringNode = (
		<View style={Style.strip}>
			<Text style={Style.detail}>{plannedVisitData.recurring_on}</Text>
			<Text style={Style.ttl}>
				<GenericIcon
					name={`repeat`}
					style={{ ...Style.ttlIcon }}
				/>
				{'  Recurring on'}
			</Text>
		</View>
	);

	let recurringDateNode = (
		<View style={Style.strip}>
			<Text style={Style.detail}>{HelperService.dateReadableFormat(plannedVisitData.till_date)}</Text>
			<Text style={Style.ttl}>
				<GenericIcon
					name={`calendar`}
					style={{ ...Style.ttlIcon }}
				/>
				{'  Recurring Till Date'}
			</Text>
		</View>
	);

	recurringNode = plannedVisitData.recurring_on ? recurringNode : [];
	recurringDateNode = plannedVisitData.till_date ? recurringDateNode : [];

	return (
		<View style={Style.box}>
			<View style={Style.tuple}>
				<View style={Style.userDtl}>
					<Text style={Style.title}>{name}</Text>
				</View>
				<GenericIcon
						name="delete"
						onPress={() => onRemoveClick()}
						style={{ color: Colors.primary, fontSize: 20, marginRight: 0,marginLeft: '18%',marginTop:-7}}
					/>
			</View>
			<View style={Style.btmBox}>
				{/* <View style={Style.strip}>
					<Text style={Style.detail}>{type}</Text>
					<Text style={Style.ttl}>
						<GenericIcon
							name={`business`}
							style={{ ...Style.ttlIcon }}
						/>
						{'  Type'}
					</Text>
				</View> */}
				<View style={Style.strip}>

				<Text style={Style.ttl}>
						<GenericIcon
							name={`date-range`}
							style={{ ...Style.ttlIcon }}
						/>
						{'  Visit date'}
					</Text> 

					<DatePicker
						allowRangeSelection={false}
						minDate={HelperService.getNextNDayTimestamp(1)}
						selectedStartDate={plannedVisitData.Visit_Date__c}
						selectedEndDate={plannedVisitData.Visit_Date__c}
						onDateChange={(params) => editSelectedVisits({ id: id, edited_field: 'Visit_Date__c', edited_value: HelperService.dateReadableFormatWithHyphen(params.selectedStartDate) })}
						iconStyle={{ marginBottom: 0 }}>
						{datePickerNode}
					</DatePicker>

				
				</View>
				{/* <View style={Style.strip}>
					<Text style={Style.detail}>{plannedVisitData.Assigned_By__c}</Text> */}
					{/* <Text style={Style.detail}>{plannedVisitData.team_id__c == agentid ? 'Self' : HelperService.findMatchingKeyValueInList(psmList, 'id', plannedVisitData.team_id__c, 'name')}</Text> */}
					{/* <Text style={Style.ttl}>
						<GenericIcon
							name={`person`}
							style={{ ...Style.ttlIcon }}
						/>
						{'  Assigned to'}
					</Text>
				</View> */}
				{recurringNode}
				{recurringDateNode}
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
				
				{/* <WhiteButton selected={false} title={'Remove'} disabled={false} onPress={() => onRemoveClick()} style={{ borderWidth: 1.5, alignSelf: 'center', backgroundColor: Colors.clrF1F9FF, height: 40, width:'50%', marginLeft:'25%' }} textStyle={{ fontSize: 14, fontFamily: ApplicationStyles.textMediumFont }}>
					<GenericIcon
						name="archive"
						style={{ color: Colors.button, fontSize: 20, marginRight: 0, marginLeft: 20 ,}}
					/>
				</WhiteButton> */}
			</View>
		</View>
	)
}

export default UnplannedVisitCard
