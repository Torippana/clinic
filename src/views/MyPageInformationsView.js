import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class MyPageInformationsView extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'お知らせ',
    }
    render() {
        return (
            <View style={styles.container}>

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
