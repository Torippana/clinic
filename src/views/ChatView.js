import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ChatView extends Component {
    state = {
        messages:[],
    };

    componentWillMount() {
        this.setState({
            messages: [
              {
                _id: 1,
                text: 'ご質問をどうぞ',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ],
        })
    }
    renderSend(props) {
            return (
                <Send
                    {...props}
                >
                    <View style={{marginRight: 10, marginBottom: 5}}>
                        <Image style={{width: 20, height: 20}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    </View>
                </Send>
            );
        }

    //Sendボタンが押された時に実行されるメソッド
    onSend = (messages = []) => {
        this.setState((previousState) => ({
            //stateで管理しているmessagesに送信されたメッセージを追加
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => {
                        //send message to your backend
                        this.onSend(messages)
                    }}
                    user={{
                        _id: 1,
                    }}
                    renderSend={this.renderSend}

                />
            </View>
        )
    }
}
