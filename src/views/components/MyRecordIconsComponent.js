import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MyRecordIcon extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { icon, label, onPress } = this.props
        return(
            <View style={styles.icons}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.button}
                >
                    <Text>
                        <Icon
                            name={icon}
                            size={100}
                            color='#305097'
                        >
                        </Icon>
                    </Text>
                    <Text style={styles.bigIconText}>
                        {label}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icons: {
        flex: 1,
        borderRightColor: '#000',
        borderRightWidth: 0.5,
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
    },
    bigIconText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#305097',
        marginTop: 10,
        textAlign: 'center',
    }
});
