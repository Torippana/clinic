import LoginView from '../LoginView'
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'

export default class MyProfileShowPicker extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { title, getValue, findNumber } = this.props
        return(
            <View style={styles.boxFix}>
                <View style={styles.boxWrapper}>
                    <View style={styles.leftBox}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={styles.rightBox}>
                        <View style={styles.textArea}>
                            <Text style={styles.item}>
                                {getValue}
                            </Text>
                        </View>
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
    },
    leftBox: {
        flex: 1,
        height: 50,
    },
    rightBox: {
        flex: 2,
        height: 50,
    },
    textArea: {
        height: 44,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5,
        backgroundColor:'#fff',
        borderRadius: 5,

        marginTop: 3,
    },
    title: {
        textAlign: 'right',
        lineHeight: 50,
        fontSize: 16,
        paddingLeft: 3,
    },
    item: {
        textAlign: 'left',
        fontSize: 16,
        lineHeight: 44,
        paddingLeft: 3,
        color: 'gray',
    },
});
