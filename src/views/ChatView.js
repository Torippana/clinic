import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Alert,
    TouchableOpacity,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ChatView extends Component {
    constructor(props) {
        super(props)
        this.maxLength = 100;
        this.state = {
            chatMessage: null,
            textLength: 0,
            memberStatus: 0,
        }
    }
    static navigationOptions = {
        title: 'ドクターへ質問',
    }
    setChatMessage(message){
        this.setState({
            chatMessage: message,
            textLength: message.length,
        })
    }

    sendChatData() {
        Alert.alert('APIへ送る')
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
                keyboardVerticalOffset={50}
                >

                <View style={styles.child1}>
                    <ScrollView>
                        <Text>Hello</Text>
                    </ScrollView>
                </View>
                <View style={styles.chatFormWrapper}>
                    <TextInput
                        style={styles.chatForm}
                        maxLength={this.state.memberStatus === 1 ? 1000 : 100}
                        multiline = {true}
                        onChangeText={(message) => this.setChatMessage(message)}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.textSendButton}
                        onPress={() => this.sendChatData()}
                    >
                        <Text style={{
                            fontSize: 10,
                            color:'#fff',
                            textAlign: 'right'
                        }}>
                            {this.state.textLength}/{this.state.memberStatus === 1 ? 1000 : 100}
                        </Text>
                        <Icon
                            name={'send'}
                            size={30}
                            color='red'
                        >
                        </Icon>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    child1: {
        flex: 7,
        backgroundColor: '#fff',
    },
    chatFormWrapper: {

        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        height: 100,
    },
    chatForm: {
        flex: 5,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textSendButton: {
        flex: 1,
        alignItems: 'center',
    }
});
