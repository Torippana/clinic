import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconButton extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const { icon, label, alertComment, alertNumber, onPress } = this.props;
        return(
            <View style={styles.Record}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.button}
                >
                    <Text>
                        <Icon
                            name={icon}
                            size={105}
                            color='lightblue'
                        >
                        </Icon>
                    </Text>
                    <Text style={styles.bigIconText}>
                        {label}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.alertComment}>
                    {alertNumber === 1 ? alertComment : "" }
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    Record: {
        flex: 4,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 0.5,
        padding: 10,
    },
    question: {
        flex: 4,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    bigIconText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'lightblue',
        marginTop: 10,
    },
    alertComment: {
        textAlign: 'center',
        color: 'red',
        marginTop: 15,
    }
});
