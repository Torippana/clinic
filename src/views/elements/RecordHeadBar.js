import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

class RecordHeadBar extends Component {
    render() {
        return (
            <View style={styles.recordHeader}>
                <Text style={styles.recordHeaderTitle}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    recordHeader: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 15,
        marginBottom: 20,
    },
    recordHeaderTitle: {
        fontSize: 18,
    },
})

export default RecordHeadBar
