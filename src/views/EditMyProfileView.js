import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    AlertIOS,
} from 'react-native'
import MyProfileEdit from "./components/MyProfileEditComponent"
import MyProfileShow from "./components/MyProfileShowComponent"
import MyProfilePickerEdit from "./components/MyProfilePickerEditComponent"
import MyProfileShowPicker from "./components/MyProfileShowPicker"

import firebase from 'firebase'

export default class EditMyProfileView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            nameKana: null,
            gender: null,
            birthday: null,
            bloodType: null,
            email: null,
            created: null,
            showDrumRoll: 0,
        }
    }
    componentWillMount() {
        const { params } = this.props.navigation.state
            this.setState({
                name: params.name,
                nameKana: params.nameKana,
                gender: params.gender,
                bloodType: params.bloodType,
                birthday: params.birthday,
                email: params.email,
            })
    }
    sendEditData() {
        const db = firebase.database()
        const { currentUser } = firebase.auth()
        db.ref(`users/${currentUser.uid}/profiles`)
            .update({
                name: this.state.name,
                nameKana: this.state.nameKana,
                gender: this.state.gender,
                birthday: this.state.birthday,
                bloodType: this.state.bloodType,
                email: this.state.email,
            })
            .then(() => {
                console.log("MyData successflly updated!")
                //完了アラート
                this.props.navigation.goBack()
                this.showAlert()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    showAlert() {
        AlertIOS.alert('', 'プロフィールの変更が完了しました。', [{text: 'OK'}] )
    }
    //子から渡って来たフォーム値を選別してsetState
    setEditValues(edit,type) {
        if (type === 'name') {
            this.setState({name: edit})
        } else if (type === 'nameKana') {
            this.setState({nameKana: edit})
        } else if (type === 'gender') {
            this.setState({gender: edit})
        } else if (type === 'bloodType') {
            this.setState({bloodType: edit})
        } else if (type === 'birthday') {
            this.setState({birthday: edit})
        } else if (type === 'email') {
            this.setState({email: edit})
        }
    }
    //渡って来た数字でドラムロールの文言を
    showDrumRoll(Number) {
        this.setState({
            showDrumRoll: Number,
        })
    }
    render() {
        var drum_roll_view=null;
        if(this.state.showDrumRoll==1){
            drum_roll_view=(<MyProfilePickerEdit
                judgeDrumRollMessage={this.state.showDrumRoll}
                initialValue={this.state.gender}
                editValue={(value) => this.setState({gender: value})}
            />)
        }else if(this.state.showDrumRoll==2){
            drum_roll_view = (<Text>血液型</Text>)
        }
        return (
            <View style={styles.container}>
                <MyProfileEdit
                    title={'名前（漢字）：'}
                    editValue={(edit) => this.setEditValues(edit,'name')}
                    initialValue={this.state.name}
                />
                <MyProfileEdit
                    title={'名前（カナ）：'}
                    editValue={(edit) => this.setEditValues(edit,'nameKana')}
                    initialValue={this.state.nameKana}
                />
                <TouchableOpacity
                    onPress={() => this.showDrumRoll(1)}
                >
                    <MyProfileShowPicker
                        title={'性別：'}
                        getValue={this.state.gender}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.showDrumRoll(2)}
                >
                    <MyProfileShowPicker
                        title={'血液型：'}
                        getValue={this.state.bloodType}
                    />
                </TouchableOpacity>
                <MyProfileEdit
                    title={'生年月日：'}
                    editValue={(edit) => this.setEditValues(edit,'birthday')}
                    initialValue={this.state.birthday}
                />
                <MyProfileEdit
                    title={'メールアドレス：'}
                    editValue={(edit) => this.setEditValues(edit,'email')}
                    initialValue={this.state.email}
                />
                <TouchableOpacity
                    onPress={() => this.sendEditData()}
                    style={styles.buttonWrapper}
                >
                    <Text style={styles.button1}>
                        更新する
                    </Text>
                </TouchableOpacity>
                {drum_roll_view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        marginTop: 5,
    },
    button1: {
        height: 50,
        backgroundColor: "lightblue",
        textAlign: 'center',
        lineHeight: 50,
    },
    button2: {
        height: 50,
        backgroundColor: "lightgray",
        textAlign: 'center',
        lineHeight: 50,
    }
})
