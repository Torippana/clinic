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
    KeyboardAvoidingView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'firebase'
import {
    LOGIN_API_URL,
    REMEMBER_TOKEN,
} from '../Configurations.js'

export default class SignupView extends React.Component{
        state = {
            mail: '',
            password: '',
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
            firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
            .then((user) => {
                console.log('success',user)
                this.props.navigation.navigate('Home')
                console.log('ここからプロフィール登録',user.uid)
                this.createUserData()
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    createUserData() {
        const db = firebase.database()
        const { currentUser } = firebase.auth()
        db.ref(`users/${currentUser.uid}/profiles`)
        .set({
            name: '',
            nameKana: '',
            gender: '',
            birthday: '',
            bloodType: '',
            email: '',
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return(
            <View style={styles.container} >
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}
                    keyboardVerticalOffset={50}
                >
                <View style={styles.imageWrap} >
                    <Image
                        style={{
                            position: 'absolute',
                            top: 0,
                        }}
                        source={require('../../images/toppageicon.png')}
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
                        メンバー登録
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
                        keyboardType = 'default'
                        value={this.state.password}
                    />
                    <TouchableOpacity onPress = {() => this.checkFormValues()} style={styles.button} >
                        <Text style={styles.buttonTitle}>
                            メンバー登録
                        </Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrap: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        height: 45,
        width: 330,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
        backgroundColor:'#fff',
        borderRadius: 5,
        color: 'gray',
    },
    buttonTitle: {

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
