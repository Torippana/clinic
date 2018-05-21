import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Picker,
} from 'react-native'

export default class MyProfilePickerEdit extends Component{
    constructor(props) {
        super(props)
    }
    render() {
            if (this.props.judgeDrumRollMessage === 1) {
                console.log('性別の文言配列をステートに')
            }
        return(
            <View style={styles.boxFix}>
                <View>
                    <Picker
                        style={{
                            width: '100%',
                            paddingLeft: 5,
                            marginTop: 3,

                        }}
                        onValueChange={(value) => this.props.editValue(value)}
                        selectedValue={this.props.initialValue}
                    >
                        <Picker.Item label="-" value="-" />
                        <Picker.Item label="男性" value="男性" />
                        <Picker.Item label="女性" value="女性" />
                    </Picker>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    picker: {
      backgroundColor: '#FFF',
    },
    pickerItem: {
      color: 'blue'
    },
});
