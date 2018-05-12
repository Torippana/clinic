
import HomePageView from "./views/HomePageView"

import firebase from 'firebase'
import ENV from '../env.json'

import AsyncStorage from "react-native"


//loginAPI URL
export const LOGIN_API_URL = 'http://192.168.33.13/api/user/login'
//registerAPI URL
export const REGISTER_API_URL = 'http://192.168.33.13/api/user/register'
//Get&Edit User Information API URL
export const USER_DATA_API_URL = 'http://192.168.33.13/api/user?token='
//AsyncStorage Names
export const REMEMBER_TOKEN = 'remember_token'

export const MY_PROFILE_NAME = 'name'
export const MY_PROFILE_NAME_KANA = 'name_kana'
export const MY_PROFILE_GENDER = 'gender'
export const MY_PROFILE_BIRTHDAY = 'birthday'
export const MY_PROFILE_BLOOD = 'blood_type'
export const MY_PROFILE_MAIL = 'email'

export const NAME_OF_RECORD = {
    Medical : '健康診断結果',
    BloodTest : '血液検査結果',
    Receipt : '領収書（医療費控除）',
    Prescription : '処方箋（おくすり）',
}

// Initialize Firebase
export const config = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER_ID
}
firebase.initializeApp(config);
require("firebase/firestore");
