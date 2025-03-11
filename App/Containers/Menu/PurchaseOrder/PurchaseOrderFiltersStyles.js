import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: Colors.clrF1F9FF,
    width: Dimensions.get('window').width - 30,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    position: 'relative'
  },
  topContainer: {
  	flex: 1, 
  	height: '100%', 
  	width: '100%', 
  	borderTopWidth: 1, 
  	borderTopColor: Colors.clrF1F9FF
  },
  filtersContainer: {
  	height: '90%', 
  	width: '100%', 
  	flexDirection: 'row'
  },
  leftFiltersContainer: {
  	width: '35%', 
  	height: '100%', 
  	backgroundColor: Colors.clrF1F9FF
  },
  rightFiltersContainer: {
  	width: '65%', 
  	height: '100%', 
  	backgroundColor: Colors.white
  },
  filterActionsContainer: {
  	height: '10%',
	paddingHorizontal: 15,
	borderTopColor: Colors.clrF1F9FF, 
	borderTopWidth: 1,
	flexDirection: 'row', 
	justifyContent: 'space-between', 
	alignItems: 'center'
  },
  filterActionButton: {
  	justifyContent: 'center', 
  	height: 40, 
  	width: '30%',elevation:0
  },
  filterActionButton1: {
  	justifyContent: 'flex-end', 
  	height: 40, 
  	width: '100%',elevation:0,marginTop:-10
  }
})
