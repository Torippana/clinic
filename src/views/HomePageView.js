import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Alert,
    Text,
    AsyncStorage,
} from 'react-native'
import IconButton from './components/PageIconsComponent'
import FooterIcon from './components/FooterIconComponent'
import {
    USER_DATA_API_URL,
    REMEMBER_TOKEN,
    MY_PROFILE_NAME,
    MY_PROFILE_NAME_KANA,
    MY_PROFILE_GENDER,
    MY_PROFILE_BIRTHDAY,
    MY_PROFILE_BLOOD,
    MY_PROFILE_MAIL,
} from '../Configurations.js'

export default class HomePageView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //この値が1だとホームページに不備のメッセージがあがる
            alertFromAddRecord: 0,
            token: null,
            email: null,
            name: null,
        }
    }
    static navigationOptions = {
        title: 'ホーム',
    }
    handlePress() {
        const { params } = this.props.navigation.state
        console.log(params)
        const token = AsyncStorage.getItem('AccessToken')
        .then((result) => {
            console.log(result)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <IconButton
                    icon={'id-card-o'}
                    label={'マイレコードを見る'}
                    alertNumber={this.state.alertFromAddRecord}
                    alertComment={
                        'マイレコードの追加に不備があります\n' + 'マイページより「お知らせ」でご確認ください'
                    }
                    onPress={() => this.props.navigation.navigate('MyRecord')}
                />
                <IconButton
                    icon={'wechat'}
                    label={'ドクターへ質問'}
                    alertNumber={0}
                    onPress={() => this.props.navigation.navigate('Chat')}
                />
                <View style={styles.footer}>
                    <FooterIcon
                        icon={'home'}
                        label={'ホーム'}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <FooterIcon
                        icon={'plus-circle'}
                        label={'マイレコードの追加'}
                        onPress={() => this.props.navigation.navigate('AddMyRecord')}
                    />
                    <FooterIcon
                        icon={'user'}
                        label={'マイページ'}
                        onPress={() => this.props.navigation.navigate('MyPageList')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        flexDirection: 'row',
    },
    footerNavigation: {
        flex: 1,
    },
    bigIconText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#4FA53F',
        marginTop: 5,
    },
    alertComment: {
        textAlign: 'center',
        color: 'red',
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
    },
});
