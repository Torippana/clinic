import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

class ShowDetailClinicName extends Component {
    render() {
        const { date, hospitalName, onPress, alertComment, alertNumber } = this.props
        return (
            <View>
                <View style={styles.detailHeadBar}>
                    <Text style={styles.detailDate}>
                        {date}
                    </Text>
                    <Text style={styles.hospitalTitle}>
                        {hospitalName}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailHeadBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingLeft: 15,
        alignItems: 'flex-start',

    },
    detailDate: {
        flex: 1,
    },
    hospitalTitle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 12,
    },
})
export default ShowDetailClinicName
