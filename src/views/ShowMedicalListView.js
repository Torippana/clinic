import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import RecordHeadBar from './elements/RecordHeadBar'
import RecordTermBar from './elements/RecordTermBar'
import RecordListNameItem from './elements/RecordListNameItem'
import {
    NAME_OF_RECORD
} from '../Configurations.js'
import firebase from 'firebase'

export default class ShowMedicalListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            termYear: null,
        }
    }
    componentWillMount() {
        const { params } = this.props.navigation.state
        console.log( params )
        const termYear = params.termYear
        const startYear = `${termYear}01`
        const endYear = `${termYear}31`
        console.log(termYear)
        const { currentUser } = firebase.auth()
        let medicalTerm = firebase.database()
        .ref(`medical_data/${currentUser.uid}`)
        .orderByChild('timestamp')
        .startAt(startYear)
        .endAt(endYear)
        .on('child_added', function(data) {
            console.log(data.val());
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <RecordHeadBar>{NAME_OF_RECORD.Medical}</RecordHeadBar>
                <RecordTermBar>押された期間の名前にする</RecordTermBar>
                <RecordListNameItem
                    hospitalName={'はるクリニック'}
                    date={'2018/01/23'}
                    onPress={() => this.props.navigation.navigate('ShowMedicalDetai')}
                    alertComment={'再提出'}
                    alertNumber={1}
                />
                <RecordListNameItem
                    hospitalName={'テストクリニック'}
                    date={'2018/01/30'}
                    onPress={() => this.props.navigation.navigate('ShowMedicalList')}
                    alertComment={'再提出'}
                    alertNumber={null}
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
