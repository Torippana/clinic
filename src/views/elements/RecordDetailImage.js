import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Image,
} from 'react-native'

class RecordDetailImage extends Component {
    render() {
        return (
            <View style={styles.DetailImage}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                >
                    <Image
                        style={styles.Images}
                        source={this.props.source}
                    />
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    DetailImage: {
        flex: 1,
        alignItems: 'center',
    },
    Images: {
        height: 100,
        width: 100,
    },
})

export default RecordDetailImage
