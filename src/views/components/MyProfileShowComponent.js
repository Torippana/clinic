import LoginView from '../LoginView'
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'

export default class MyProfileShow extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { title, getValue } = this.props
        return(
            <View style={styles.boxFix}>
                <View style={styles.boxWrapper}>
                    <View style={styles.leftBox}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={styles.item}>
                            {getValue}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    boxFix: {
        height: 50.3,
    },
    boxWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 0.25,
        marginBottom: 1,
        backgroundColor: '#fff',
    },
    leftBox: {
        flex: 2,
        height: 50,
        borderRightColor: '#4c4c4c',
        borderRightWidth: 0.25,
    },
    rightBox: {
        flex: 3,
        height: 50,
    },
    title: {
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 16,
        paddingLeft: 3,
    },
    item: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 50,
        paddingLeft: 3,
    },
});
