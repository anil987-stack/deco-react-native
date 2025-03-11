import React from 'react'
import { Platform, View, ActivityIndicator, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Icon, Text } from 'native-base';
import NavigationService from 'App/Services/NavigationService'
import WhiteButton from 'App/Components/WhiteButton'
import GenericIcon from 'App/Components/GenericIcon'
import { Colors } from 'App/Theme'
import BlueButton from 'App/Components/BlueButton'
import BackArrowButton from 'App/Components/BackArrowButton'
import DatePicker from 'App/Components/DatePicker'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from 'App/Components/Header/index'

class PaymentLayout extends React.Component {
	render() {

		const {
			searchFilters,
		} = this.props;

		return (
			<View>
				{/* <Header title={'PAYMENTS'} /> */}
				<BackArrowButton />

				<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
					<BlueButton
						title="Success"
						textStyle={{}}
						style={{ width: wp('40%'), height: hp('5%'), borderRadius: 20, marginHorizontal: 5 }}
					></BlueButton>
					<BlueButton
						title="Pending"
						textStyle={{ color: '#02ADD7' }}
						style={{
							width: wp('40%'), height: hp('5%'),
							borderRadius: 20, borderWidth: 1, borderColor: '#02ADD7', backgroundColor: '#FFFFFF', marginHorizontal: 5
						}}
					></BlueButton>
				</View>



				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('10%'), position: 'relative', marginTop: '2%' }}>
					<TouchableOpacity
						transparent
					>
						<Icon
							name={'caret-left'}
							ios={'caret-left'}
							android={'caret-left'}
							style={{
								color: Colors.primary,
								fontSize: 50,
								alignSelf: 'center',
								paddingHorizontal: 20
							}}
							type={'FontAwesome5'}
						/>
					</TouchableOpacity>
					<View style={{
						backgroundColor: Colors.primary,
						borderRadius: 10, width: wp('40%'), height: hp('5%')
					}}>
						{/* <DatePicker style={{}}>

						</DatePicker> */}
					</View>
					<TouchableOpacity
						transparent
					>
						<Icon
							name={'caret-right'}
							ios={'caret-right'}
							android={'caret-right'}
							style={{
								color: Colors.primary,
								fontSize: 50,
								alignSelf: 'center',
								paddingHorizontal: 20
							}}
							type={'FontAwesome5'}
						/>
					</TouchableOpacity>
				</View>


			</View>
		)
	}
}

export default PaymentLayout