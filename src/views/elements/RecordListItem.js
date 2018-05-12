import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
class RecordListItem extends Component {
    sendChatData() {
        Alert.alert('APIへ送る')
    }
    render() {
        const { date, onPress } = this.props
        return (
            <View>
                <TouchableHighlight
                    onPress={onPress}
                    underlayColor='#fff'
                >
                    <View style={styles.recordList}>
                        <Text style={styles.recordListTitle}>
                            {this.props.date}
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

export default RecordListItem
