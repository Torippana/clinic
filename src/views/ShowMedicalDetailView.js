import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import RecordHeadBar from './elements/RecordHeadBar'
import ShowDetailClinicName from './elements/ShowDetailClinicName'
import RecordDetailImage from './elements/RecordDetailImage'
import RecordDetailModal from './elements/RecordDetailModal'
import MyProfileShow from './components/MyProfileShowComponent'
import {
    NAME_OF_RECORD
} from '../Configurations.js'
import firebase from 'firebase'

export default class ShowMedicalDetailView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            medicalDataImageUri: [],
            medicalDataStatus: [],
            medicalDataClinicName: null,
            medicalDataCreateDate: null,
            currentVisibleImageIndex: null,
        }
    }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        firebase.database()
        .ref(`medical_data/${currentUser.uid}/id1`)
        .on('value', (databaseMedicalData) => {
            console.log(databaseMedicalData.val())
            this.setState({
                medicalDataClinicName: databaseMedicalData.val().clinic_name,
                medicalDataDate: databaseMedicalData.val().date,
                medicalDataImageUri: Object.values(databaseMedicalData.val().images),
                medicalDataStatus: databaseMedicalData.val().status,
            })
        })
    }
    openModal(index) {
        this.setState({
            currentVisibleImageIndex: index,
        })
        this.setState({modalVisible:true});
    }
    closeModal() {
    this.setState({modalVisible:false});
    }

    render() {
        const imageArray = this.state.medicalDataImageUri
        let medicalDataImages = []
        for (let i = 0; i < imageArray.length; i++) {
            medicalDataImages[i] = (
                <View key={i}>
                    <RecordDetailImage
                        onPress={() => this.openModal(i)}
                        source={{uri: imageArray[i]}}
                    />
                </View>
            )
        }
        const statusArray = this.state.medicalDataStatus
        let medicalDataStatusList =[]
        for (key in statusArray) {
            medicalDataStatusList.push(
                <MyProfileShow
                    key={key}
                    title={key}
                    getValue={statusArray[key]}
                />
            )
        }
        return (
            <View style={styles.container}>
                <RecordHeadBar>
                    {NAME_OF_RECORD.Medical}
                </RecordHeadBar>
                <ShowDetailClinicName
                    hospitalName={this.state.medicalDataClinicName}
                    date={this.state.medicalDataDate}
                />
                    <View style={styles.DetailImageWrapper}>
                        {medicalDataImages}
                    </View>
                    <View >
                        <Text style={styles.touchMessage}>
                            ※ 画像タップで拡大できます
                        </Text>
                        {medicalDataStatusList}
                    </View>
                    <RecordDetailModal
                        visible={this.state.modalVisible}
                        image={{uri: imageArray[this.state.currentVisibleImageIndex]}}
                        onPress={() => this.closeModal()}
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
    DetailImageWrapper: {
        height: 100,
        flexDirection: 'row',
    },
    touchMessage: {
        padding: 5,
        textAlign: 'right',
    }
})
