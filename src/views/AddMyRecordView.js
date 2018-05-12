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
            uri: "",
            imageData: "",
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
                let source = { uri: response.uri}
                let data = { imageData: response}
                this.setState(data)
                this.setState(source)
                console.log('could set state!!')
                console.log(this.state.imageData)
                this.fileUploader()
            }
        })
    }
    fileUploader() {
        // Create a root reference
        const storageRef = firebase.storage().ref();
        // Create file metadata including the content type
        const metadata = {
            contentType: 'image/jpeg',
        };
        const { currentUser } = firebase.auth()
        // Upload the file and metadata to storage
        storageRef.child(`users/${currentUser.uid}/images/${this.state.imageData.fileName}`)
        .putString(this.state.imageData.data,'base64' , metadata)
        .then((snapshot) => {
            console.log(snapshot.downloadURL)
            console.log('storage uploaded!!')
            //upload to database
            firebase.database()
            .ref(`users/${currentUser.uid}/images/`)
            .set(
                snapshot.downloadURL
            )
            console.log('database uploaded!!')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.state.uri}} />
                <TouchableOpacity onPress={this.openPicker.bind(this)}>
                    <Text style={styles.button}>Select a Photo</Text>
                </TouchableOpacity>

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
