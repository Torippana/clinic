import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'
import MyProfileShow from "./components/MyProfileShowComponent"
import firebase from 'firebase'

export default class ShowMyProfileView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: null,
            name: null,
            nameKana: null,
            gender: null,
            birthday: null,
            bloodType: null,
            email: null,
        }
    }
    //常に開いたらfirebaseより同期そしてsetState
    componentWillMount() {
        console.log('ルーティング表示されただけで発動してるのか')
        const db = firebase.firestore()
        const { currentUser } = firebase.auth()
        db.collection(`users/${currentUser.uid}/profiles`).doc('Profile')
            .onSnapshot((doc) => {
                const userData = doc.data()
                    this.setState({
                        name: doc.data().name,
                        nameKana: doc.data().nameKana,
                        gender: doc.data().gender,
                        bloodType: doc.data().bloodType,
                        birthday: doc.data().birthday,
                        email: doc.data().email,
                        userData: userData,
                    })
            })
        }
    render() {
        return (
            <View style={styles.container}>
                <MyProfileShow
                    title={'名前（漢字）：'}
                    getValue={this.state.name}
                />
                <MyProfileShow
                    title={'名前（カナ）：'}
                    getValue={this.state.nameKana}
                />
                <MyProfileShow
                    title={'性別：'}
                    getValue={this.state.gender}
                />
                <MyProfileShow
                    title={'血液型：'}
                    getValue={this.state.bloodType}
                />
                <MyProfileShow
                    title={'生年月日：'}
                    getValue={this.state.birthday}
                />
                <MyProfileShow
                    title={'メールアドレス：'}
                    getValue={this.state.email}
                />
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate('EditMyProfile', this.state.userData)}
                >
                    <Text style={styles.button1}>
                        編集
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button1: {
        height: 50,
        backgroundColor: "lightblue",
        textAlign: 'center',
        lineHeight: 50,
        marginTop: 5,
    },
})
