import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Image,
    Modal,
    Text,
    ScrollView,
} from 'react-native'

class RecordDetailModal extends Component {
    render() {
        return (
            <View>
                <Modal
                    style={styles.modalWrapper}
                    animationType="fade"
                    visible={this.props.visible}
                    transparent={true}
                >
                    <View style = {styles.modal}>
                        <Image
                            style={styles.bigImages}
                            source={this.props.image}
                        />
                        <TouchableHighlight
                            style={styles.modalTextArea}
                            onPress={this.props.onPress}
                            underlayColor ={'rgba(0,0,0,0.1)'}
                        >
                            <Text style={styles.textStyle}>閉じる</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'rgba(0,0,0,0.5)',
        flex: 1,
    },
    bigImages: {
        height: 400,
        width: '100%',
        marginTop: 60,
        alignItems: 'center',
    },
    modalTextArea: {
        height: 30,
        marginTop: 40,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default RecordDetailModal
