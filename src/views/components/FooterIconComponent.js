import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FooterIcon extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { icon, label, onPress } = this.props
        return(
            <View style={styles.footerNavigation}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text>
                        <Icon
                            name={icon}
                            size={40}
                            color='#fff'
                        >
                        </Icon>
                    </Text>
                    <Text style={styles.footerIconText}>
                        {label}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerNavigation: {
        flex: 1
    },
    button: {
        alignItems: 'center',
    },
    footerIconText: {
        fontSize: 12,
        color: '#fff'
    },
});
