import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'
import firebase from 'firebase'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddMyRecordView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageDataUri: [],
            imageData: [],
        }
    }
    //アップロード押し下げ後アラート出してOK押したらUPload
    showConfirmAlert() {
        Alert.alert(
            'タイトル',
            '説明説明説明説明',
                [
                {text: 'キャンセル', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '変更を実行', onPress: () => console.log('OK Pressed'), style: 'destructive'},
                ],
            { cancelable: false }
        )
    }
    showAlert() {
        Alert.alert(
         'アップロードが完了しました',
        )
    }
    openPicker = () => {
        ImagePicker.showImagePicker({}, response => {
            console.log(response)
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                this.setState({
                    imageDataUri: [response.uri, ...this.state.imageDataUri],
                    imageData: [response.data, ...this.state.imageData]
                })
                console.log('could set state!!')
                console.log(this.state.imageData)
            }
        })
    }
    fileUploader() {
            const imageData = this.state.imageData
        if (imageData.length > 0) {
            for(let i = 0; i < imageData.length; i++) {
                // Create a root reference
                const storageRef = firebase.storage().ref();
                // Create file metadata including the content type
                const metadata = {
                    contentType: 'image/jpeg',
                };
                const date = new Date()
                const uploadDate = date.toLocaleDateString()
                const uploadTimeStamp = date.getTime()
                const { currentUser } = firebase.auth()
                // Upload the file and metadata to storage
                storageRef.child(`users/${currentUser.uid}/imagesNonEdit/${currentUser.uid}${uploadTimeStamp}`)
                .putString(this.state.imageData[i],'base64' , metadata)
                .then((snapshot) => {
                    console.log('storage uploaded!!')
                    //upload to database
                    firebase.database()
                    .ref(`users/${currentUser.uid}/imagesNonEdit/${currentUser.uid}${uploadTimeStamp}`)
                    .set({
                        uri: snapshot.downloadURL,
                        date: uploadDate
                    })
                    console.log('database uploaded!!')
                    //最後だけ実行させる・・（ページ遷移・要修正）
                    if( i === imageData.length - 1 ){
                        console.log('ループが終わりました。');
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
    fileDeleter() {
        const storageRef = firebase.storage().ref();
        const { currentUser } = firebase.auth()
        storageRef.child(`users/${currentUser.uid}/imagesNonEdit`)
        .delete()
        .then(() => {
            console.log('filedeleted successfully')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        let imageList = []
        for (let i = 0; i < this.state.imageDataUri.length; i++) {
            imageList.push(
                <Image key={[i]} style={styles.image} source={{uri: this.state.imageDataUri[i]}} />
            )
        }
        let showButton = ''
        if (imageList.length < 2) {
            showButton =
                <TouchableOpacity onPress={() => this.openPicker()}>
                    <Icon
                        style={styles.icon}
                        name={'photo'}
                        size={60}
                        color='#000'
                    >
                    </Icon>
                    <Text style={styles.button}>写真をアップロードする</Text>
                </TouchableOpacity>
        } else {
            showButton = null
            }
        let uploadButton = ''
        if (imageList.length >= 1) {
            uploadButton =
                <TouchableOpacity onPress={() => this.fileUploader()}>
                    <Text style={styles.button}>up Loadする</Text>
                </TouchableOpacity>
        } else {
            uploadButton = null
        }
        return (
            <View style={styles.container}>
                {imageList}
                {showButton}
                {uploadButton}
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    image: {
        height: 200,
        width: 200,
        backgroundColor: '#EEE',
    },
    icon: {
            textAlign: 'center',
    },
    button: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    ImageContainer: {
        borderRadius: 10,
        width: 250,
        height: 250,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
    },

  });
