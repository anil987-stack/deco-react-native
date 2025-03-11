import React from 'react';
import { Text, View } from 'react-native';
import Style from './StatusLabelScreenStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../Theme';
const StatusLabelScreen = ({ status,show,nameicon, customTextStyles={}, styles={} }) => {
    let customStyles = {};
    switch (status) {
        case 'Draft':
            customStyles = Style.draft
            break;
        case 'Pending for Approval':
            customStyles = Style.pending
            break;
        case 'Pending For Approval':
            customStyles = Style.pending
            break;
        case 'Approved':
            customStyles = Style.approved
            break;
        case 'Rejected':
            customStyles = Style.rejected
            break;
        case 'Started':
            customStyles = Style.approved
            break;
        default:
            customStyles = Style.pending;
    }
    return (
        <View style={{ ...Style.statusBar, ...customStyles,...styles }}>
           {show?<MaterialIcons name={nameicon} size={25} color={Colors.primary}  /> :<Text style={{...Style.statusText, ...customTextStyles}}>{status}</Text>}
        </View>
    );
}

export default StatusLabelScreen
