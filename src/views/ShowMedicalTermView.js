import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native'
import RecordHeadBar from './elements/RecordHeadBar'
import RecordTermBar from './elements/RecordTermBar'
import RecordListItem from './elements/RecordListItem'
import {
    NAME_OF_RECORD
} from '../Configurations.js'
import firebase from 'firebase'

export default class ShowMedicalTermView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medicalDataTerm: [],
        }
    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        let medicalTerm = firebase.database()
        .ref(`medical_term_summary/${currentUser.uid}`)
        .orderByChild('year_month')
        .on('child_added', (data) => {
            console.log(data.val())
            this.setState({
                medicalDataTerm: data.val(),
            })
        });
    }
    render() {
        const MedicalTermArray = this.state.medicalDataTerm
        let medicalTermList =[]
        for ( key in MedicalTermArray ) {
            medicalTermList.push(
                <RecordListItem
                    date={key}
                    key={key}
                    onPress={() => this.props.navigation.navigate('ShowMedicalList', {termYear: key})}
                />
            )
        }
        return (
            <View style={styles.container}>
                <RecordHeadBar>{NAME_OF_RECORD.Medical}</RecordHeadBar>
                <RecordTermBar>期間</RecordTermBar>
                    <ScrollView>
                        {medicalTermList}
                    </ScrollView>
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
