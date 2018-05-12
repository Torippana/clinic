import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import RecordHeadBar from './elements/RecordHeadBar'
import RecordTermBar from './elements/RecordTermBar'
import RecordListItem from './elements/RecordListItem'
import {
    NAME_OF_RECORD
} from '../Configurations.js'

export default class ShowPrescriptionTermView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <RecordHeadBar>{NAME_OF_RECORD.Prescription}</RecordHeadBar>
                <RecordTermBar>期間</RecordTermBar>
                    <RecordListItem
                        date={'2017/12'}
                        onPress={() => this.props.navigation.navigate('ShowMedicalList')}
                    />
                    <RecordListItem
                        date={'2017/11'}
                        onPress={() => this.props.navigation.navigate('ShowMedicalList')}
                    />
                    <RecordListItem
                        date={'2017/10'}
                        onPress={() => this.props.navigation.navigate('ShowMedicalList')}
                    />
                    <RecordListItem
                        date={'2017/09'}
                        onPress={() => this.props.navigation.navigate('ShowMedicalList')}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFDF6',
        flex: 1,
    },
})
