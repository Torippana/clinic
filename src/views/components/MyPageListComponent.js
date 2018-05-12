import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

export default class MyPageList extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const { title, onPress } = this.props
        return(
            <View style={styles.eachBox}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eachBox: {
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 0.25,
        alignSelf: 'stretch',
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        lineHeight: 70,
    },
});
