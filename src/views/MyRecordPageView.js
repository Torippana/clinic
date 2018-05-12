import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native'
import MyRecordIcon from './components/MyRecordIconsComponent'
import FooterIcon from './components/FooterIconComponent'

export default class MyRecordPageView extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'マイレコード',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <MyRecordIcon
                        icon={'file-text-o'}
                        label={'健康診断結果'}
                        onPress={() => this.props.navigation.navigate('ShowMedicalTerm')}
                    />
                    <MyRecordIcon
                        icon={'medkit'}
                        label={'処方箋\n' + '（おくすり）'}
                        onPress={() => this.props.navigation.navigate('ShowPrescriptionTerm')}
                    />
                </View>
                <View style={styles.row}>
                    <MyRecordIcon
                        icon={'yen'}
                        label={'領収書\n' + '（医療費控除）'}
                        onPress={() => this.props.navigation.navigate('ShowReceiptTerm')}
                    />
                    <MyRecordIcon
                        icon={'file-o'}
                        label={'血液検査結果'}
                        onPress={() => this.props.navigation.navigate('ShowBloodTestTerm')}
                    />
                </View>
                <View style={styles.row}>
                </View>
                <View style={styles.footer}>
                    <FooterIcon
                        icon={'home'}
                        label={'ホーム'}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <FooterIcon
                        icon={'plus-circle'}
                        label={'マイレコードの追加'}
                        onPress={() => this.props.navigation.navigate('AddMyRecord')}
                    />
                    <FooterIcon
                        icon={'user'}
                        label={'マイページ'}
                        onPress={() => this.props.navigation.navigate('MyPageList')}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flex: 3,
        flexDirection: 'row',
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 0.5,
    },
    footer: {
        height: 82,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
    },
});
