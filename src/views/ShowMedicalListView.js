import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
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
            RecordListTerm: null,
            medicalMonthList: [],
        }
    }
    componentWillMount() {
        const { params } = this.props.navigation.state
        this.setState({ RecordListTerm: params.yearMonth })
        //前画面で押された期間に合わせて、orderされた値だけ出す
        console.log(params)
        console.log(params.yearMonth)
        const startYearMonth = Number(`${params.yearMonth}01`)
        const endYearMonth = Number(`${params.yearMonth}31`)
        const { currentUser } = firebase.auth()
        let orderItems = []
        firebase.database()
        .ref(`medical_data/${currentUser.uid}`)
        .orderByChild('timestamp')
        .startAt(startYearMonth)
        .endAt(endYearMonth)
        //ソート後のオブジェクトをFlatListの公式に合わせて配列化
        .on('child_added', (data) => {
            orderItems.push(data.val())
        })
        console.log(orderItems)
        this.setState({medicalMonthList: orderItems})
    }
    _renderItem = ({item}) => (
        <RecordListNameItem
            hospitalName={item.clinic_name}
            date={'2018/01/23'}
            onPress={() => this.props.navigation.navigate('ShowMedicalDetai')}
            alertComment={'再提出'}
            alertNumber={1}
        />
    );
    _keyExtractor = (item, index) => item.clinic_name;
    render() {

        return (
            <View style={styles.container}>
                <RecordHeadBar>{NAME_OF_RECORD.Medical}</RecordHeadBar>
                <RecordTermBar>{this.state.RecordListTerm}</RecordTermBar>

                <FlatList
                    data={this.state.medicalMonthList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
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
