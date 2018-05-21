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
        firebase.database()
        //ルーティングの時に数字を渡してページを判別して.refの書き換えを行う
        .ref(`medical_term_summary/${currentUser.uid}`)
        .orderByChild('year_month')
        .on('child_added', (data) => {
            this.setState({
                medicalDataTerm: data.val(),
            })
            //loadingSpinnerを設定する（loadが完全に終わったタイミング)
        });
    }
    render() {
        const MedicalTermArray = this.state.medicalDataTerm
        let medicalTermList =[]
        for (key in MedicalTermArray) {
            const yearMonth = key
            medicalTermList.push(
                <RecordListItem
                    date={key}
                    key={key}
                    onPress={() => this.props.navigation.navigate('ShowMedicalList', {yearMonth: yearMonth})}
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
