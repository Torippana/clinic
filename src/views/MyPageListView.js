import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native'
import MyPageList from "./components/MyPageListComponent"

export default class MyPageListView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: null,
        }
    }
    static navigationOptions = {
        title: 'マイページ',
    }
    componentWillMount() {
        const { params } = this.props.navigation.state
        this.setState({ token: params })
    }
    handlePress() {
        const { params } = this.props.navigation.state
        console.log(params)
    }
    render() {
        return (
            <View style={styles.container}>
                <MyPageList
                    title={'マイプロフィール'}
                    onPress={() => this.props.navigation.navigate('ShowMyProfile')}
                />
                <MyPageList
                    title={'パスワードの変更'}
                    onPress={() => this.props.navigation.navigate('ChangePassword')}
                />
                <MyPageList
                    title={'お知らせ'}
                    onPress={() => this.handlePress()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
