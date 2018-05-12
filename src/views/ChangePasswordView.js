import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    AlertIOS,
} from 'react-native'
import firebase from 'firebase'

export default class ChangePasswordView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPassword: null,
            password: null,
            passwordConfirm: null,
            passwordAlert: null,
            oldPasswordAlert: null,
        };
    }
    //パスワード検証＆firebaseの関数呼び出し
    sendToAPIPassword() {
        if (this.state.password !== null && this.state.password === this.state.passwordConfirm) {
            //パスワードが一致したら、firebaseへ送信する関数を呼び出す
            this.updatePassword()
        } else {
            this.setState({passwordAlert: 1})
        }
    }
    //パスワード更新処理前のアカウント再認証処理（ログイン時間が開いた場合必須の処理）
    reauthenticate() {
        const user = firebase.auth().currentUser;
        console.log(user)
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            this.state.oldPassword
        );
        user.reauthenticateWithCredential(credential)
        .then(() => {
            console.log('re-authenticated')
            console.log(credential)
            //アカウント再認証が完了したらNEWパスワード一致してるか検証
            this.sendToAPIPassword()
        })
        .catch((error) => {
            // An error happened.
            console.log(error)
            this.setState({
                oldPasswordAlert: 1,
            })
        });
    }
    //firebaseへパスワードの更新処理
    updatePassword() {
        const user = firebase.auth().currentUser;
        var newPassword = this.state.password;
        user.updatePassword(newPassword)
        .then(() => {
            console.log('Update successful')
            console.log(newPassword)
            this.props.navigation.goBack()
            AlertIOS.alert('', '完了！！！', [{text:'OK'}])
        })
        .catch((error) => {
            console.log(error)
        });
    }
    checkFormPassword(password,type) {
        if (type === 'oldPassword') {
            this.setState({oldPassword: password})
        }else if (type === 'password') {
            this.setState({password: password})
        } else if (type === 'confirm') {
            this.setState({passwordConfirm: password})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>
                    現在のパスワードを入力してください
                </Text>
                <TextInput
                    style={styles.passwordForm}
                    onChangeText={(password) => this.checkFormPassword(password,"oldPassword")}
                    placeholder='現在のパスワードを入力してください'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    keyboardType = 'default'
                />
            <TouchableOpacity
                onPress={() => this.reauthenticate()}>
                <Text>
                    {this.state.oldPasswordAlert === 1 ? "現在のパスワードが違います" : "" }
                </Text>
            </TouchableOpacity>
                <Text style={styles.message}>
                    新しいパスワードを入力してください
                </Text>
                <TextInput
                    style={styles.passwordForm}
                    onChangeText={(password) => this.checkFormPassword(password,"password")}
                    placeholder='新しいパスワードを入力してください'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    keyboardType = 'default'
                />
                <Text style={styles.message}>
                    確認のためもう一度入力してください
                </Text>
                <TextInput
                    style={styles.passwordForm}
                    onChangeText={(password) => this.checkFormPassword(password,"confirm")}
                    placeholder='確認用'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    keyboardType = 'default'
                />
                <Text style={styles.alertComment}>
                    {this.state.passwordAlert === 1 ? "新しいパスワードが一致しません" : "" }
                </Text>
                <TouchableOpacity
                    onPress = {() => this.reauthenticate()}
                    style={styles.buttonWrapper}
                >
                    <Text style={styles.button1}>
                        パスワードを変更する
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
    passwordForm: {
        height: 48,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5,
        backgroundColor:'#fff',
        borderRadius: 5,
    },
    buttonWrapper: {
        marginTop: 100,
    },
    button1: {
        height: 50,
        backgroundColor: "lightblue",
        textAlign: 'center',
        lineHeight: 50,
    },
    message: {
        marginTop: 30,
        marginBottom: 5,
    },
    alertComment: {
        textAlign: 'center',
        color: 'red',
        marginTop: 15,
    }
})
