import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class RecordListNameItem extends Component {
    render() {
        const { date, hospitalName, onPress, alertComment, alertNumber } = this.props
        return (
            <View>
                <TouchableHighlight
                    onPress={onPress}
                    underlayColor='#fff'
                >
                    <View style={styles.recordList}>
                        <Text style={styles.recordDate}>
                            {date}
                        </Text>
                        <Text style={styles.alertMessage}>
                            {alertNumber === 1 ? alertComment : "" }
                        </Text>
                        <Text style={styles.recordListTitle}>
                            {hospitalName}
                        </Text>
                        <Text style={styles.recordListIcon}>
                            <Icon
                                name={'arrow-right'}
                                size={30}
                                color='#ddd'
                            >
                            </Icon>
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    recordList: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    recordDate: {
        position: 'absolute',
        top: 1,
        left: 5,
    },
    alertMessage: {
        position: 'absolute',
        top: '37%',
        right: '18%',
        color: 'red',
        fontSize: 16,
    },
    recordListTitle: {
        flex: 8,
        fontSize: 18,
        paddingLeft: 12,
    },
    recordListIcon: {
        flex: 1,
        fontSize: 18,
    },
})

export default RecordListNameItem
