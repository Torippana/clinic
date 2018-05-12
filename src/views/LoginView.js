import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    AlertIOS,
    AsyncStorage,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'firebase'

export default class LoginView extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            mail: 'user1@example.com',
            password: 'password',
        }
    }
    setFormValues(value,type) {
        if (type === 'mail') {
            this.setState({mail: value})
        } else if (type === 'password') {
            this.setState({password: value})
        }
    }
    checkFormValues() {
        const errors = [];
        if (this.state.mail === '') {
            errors.push('メールアドレスが空欄です')
        }
        if (this.state.password === '') {
            errors.push('パスワードが空欄です')
        }
        if (errors.length > 0) {
            AlertIOS.alert('', errors.join('\n'), [{text:'OK'}])
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password)
                .then((user) => {
                    console.log('success',user.uid)
                    ACCESS_TOKEN = user.uid
                    this.props.navigation.navigate('Home')
                    this.setAccessToken(user.uid)

                })
                .catch((error) => {
                    console.log(error)
                })
            }
    }
    async setAccessToken(userID) {
        try {
            AsyncStorage.setItem('AccessToken', userID)
        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        let ACCESS_TOKEN = null
        return(
            <View style={styles.container} >
                <View style={styles.imageWrap} >
                    <Image
                        style={{
                            width: 650,
                            height: 330,
                            position: 'absolute',
                            top: 0,
                        }}
                        source={require('../../images/toppage.jpg')}
                    />
                    <Text
                        style={{
                            fontSize: 35,
                        }}>
                        <Icon
                            name={'heartbeat'}
                            size={30}
                            color='#000'
                        >
                        </Icon>
                        DrChat
                    </Text>
                    <Text
                        style={{
                            marginTop: 6,
                        }}>
                        お医者さまと患者さまをリンクする
                    </Text>
                    <Text
                        style={{
                            marginTop: 6,
                        }}>
                        いつでも専門医のようなカウンセリングを
                    </Text>
                </View>
                <View style={ styles.textWrap }>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => this.setFormValues(value, 'mail')}
                        placeholder={'メールアドレスを入力してください'}
                        keyboardType='default'
                        autoCapitalize='none'
                        value={this.state.mail}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setFormValues(value, 'password')}
                        placeholder='パスワードを入力してください'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        keyboardType = 'default'
                        value={this.state.password}
                    />
                    <TouchableOpacity
                        onPress = {() => this.checkFormValues()}
                        style={styles.button}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'gray',
                                fontSize: 16,
                            }}>
                            ログイン
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Signup')}
                    >
                        <Text
                            style={{
                                marginTop:10,
                                color: 'gray',
                            }}>
                            会員登録はこちら
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginTop:10,
                            color: 'gray',
                        }}>
                        パスワードを忘れた方
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrap: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrap: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        height: 45,
        width: 330,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 5,
        backgroundColor:'#fff',
        borderRadius: 5,
        color: 'gray',
    },
    button: {
        width: 300,
        height: 42,
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#E2F0CB',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        marginTop: 30,
    }
});
