import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Picker,
} from 'react-native'
import RecordHeadBar from './elements/RecordHeadBar'
import RecordTermBar from './elements/RecordTermBar'
import RecordListItem from './elements/RecordListItem'
import {
    NAME_OF_RECORD
} from '../Configurations.js'

export default class ShowBloodTestTermView extends Component {
    constructor(props) {
        super(props)
        this.state = {
          job: '',
        }
      }
      render() {
        return (
          <View style={styles.container}>
            <FormPicker
                initialValue={this.state.job}
                editValue={(value) => this.setState({job: value})}
                title={this.state.job}
                />
          </View>
        );
      }
    }

    export class FormPicker extends Component {
        constructor(props) {
            super(props)
          }
          render() {
            const { title, editValue, initialValue } = this.props
            return (
              <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={initialValue}
                  onValueChange={(value) => editValue(value)}
                >
                  <Picker.Item label="アプリ開発" value="アプリ開発" />
                  <Picker.Item label="インフラ構築" value="インフラ構築" />
                  <Picker.Item label="メディア運営" value="メディア運営" />
                  <Picker.Item label="Webデザイン" value="Webデザイン" />
                </Picker>
              </View>
            );
          }
        }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
      },
      picker: {
        width: 200,
        backgroundColor: '#FFF',
        flex: 1,
      },
      text: {
          flex: 3,
      }
    });
