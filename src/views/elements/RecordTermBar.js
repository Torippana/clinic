import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

class RecordTermBar extends Component {
    render() {
        return (
            <View style={styles.RecordTerm}>
                <Text style={styles.RecordTermTitle}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    RecordTerm: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 15,
    },
    RecordTermTitle: {
        fontSize: 16,
    },
})

export default RecordTermBar
