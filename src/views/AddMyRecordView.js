import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native'
import firebase from 'firebase'
import ImagePicker from 'react-native-image-picker'

export default class AddMyRecordView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageDataUri: [],
            imageData: [],
        }
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
                    console.log(uploadDate)
                    console.log('database uploaded!!')
                    //画面戻す
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }

    render() {
        let imageList = []
        for (let i = 0; i < this.state.imageDataUri.length; i++) {
            imageList.push(
                <Image key={[i]} style={styles.image} source={{uri: this.state.imageDataUri[i]}} />
            )
        }
        let showbutton = ''
        if (imageList.length < 3) {
            showbutton =
                <TouchableOpacity onPress={() => this.openPicker()}>
                    <Text style={styles.button}>Select a Photo</Text>
                </TouchableOpacity>
        } else {
            showbutton =
                <TouchableOpacity onPress={() => this.fileUploader()}>
                    <Text style={styles.button}>up Load</Text>
                </TouchableOpacity>
            }
        return (
            <View style={styles.container}>
                {imageList}
                {showbutton}
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
    button: {
        padding: 20,

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
