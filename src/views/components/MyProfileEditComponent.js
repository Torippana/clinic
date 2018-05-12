import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'

export default class MyProfileEdit extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const { title, editValue, initialValue } = this.props
        return(
            <View style={styles.boxFix}>
                <View style={styles.boxWrapper}>
                    <View style={styles.leftBox}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <View style={styles.rightBox}>
                        <TextInput
                            style={{
                                height: 44,
                                width: 250,
                                borderColor: 'gray',
                                borderWidth: 1,
                                paddingLeft: 5,
                                backgroundColor:'#fff',
                                borderRadius: 5,
                                color: 'gray',
                                marginTop: 3,
                            }}
                            onChangeText={(edit) => this.props.editValue(edit)}
                            value={initialValue}
                        />
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
        backgroundColor: '#fff',
        height: 50,
    },
    rightBox: {
        flex: 2,
        height: 50,
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
        lineHeight: 50,
        paddingLeft: 3,
    },
    item: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 50,
        paddingLeft: 3,
    },
});
