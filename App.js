import React  from 'react';
import { StackNavigator } from "react-navigation"
import LoginView from './src/views/LoginView';
import SignupView from './src/views/SignupView'
import HomePageView from "./src/views/HomePageView"
import MyRecordPageView from "./src/views/MyRecordPageView"
import AddMyRecordView from "./src/views/AddMyRecordView"
import MyPageListView from "./src/views/MyPageListView"
import MyPageInformationsView from "./src/views/MyPageInformationsView"
import ChatView from "./src/views/ChatView"
import ShowMyProfileView from "./src/views/ShowMyProfileView"
import EditMyProfileView from "./src/views/EditMyProfileView"
import ChangePasswordView from "./src/views/ChangePasswordView"
import ShowMedicalTermView from "./src/views/ShowMedicalTermView"
import ShowBloodTestTermView from "./src/views/ShowBloodTestTermView"
import ShowReceiptTermView from "./src/views/ShowReceiptTermView"
import ShowPrescriptionTermView from "./src/views/ShowPrescriptionTermView"
import ShowMedicalListView from "./src/views/ShowMedicalListView"
import ShowMedicalDetailView from './src/views/ShowMedicalDetailView'

//Pages were used by StackNavigator
const RootNavigator = StackNavigator({
        Login: {
            screen: LoginView,
            navigationOptions: () => ({
                header: null
            }),
        },
        Signup: {
            screen: SignupView
        },
        Home: {
            screen: HomePageView,
        },
        MyRecord: {
            screen: MyRecordPageView,
        },
        MyPageList: {
            screen: MyPageListView,
        },
        AddMyRecord: {
            screen: AddMyRecordView,
        },
        ShowMyProfile: {
            screen: ShowMyProfileView,
        },
        EditMyProfile: {
            screen: EditMyProfileView,
        },
        ChangePassword: {
            screen: ChangePasswordView,
        },
        MyPageInformations: {
            screen: MyPageInformationsView,
        },
        Chat: {
            screen: ChatView,
        },
        ShowMedicalTerm: {
            screen: ShowMedicalTermView,
        },
        ShowBloodTestTerm: {
            screen: ShowBloodTestTermView,
        },
        ShowReceiptTerm: {
            screen: ShowReceiptTermView,
        },
        ShowPrescriptionTerm: {
            screen: ShowPrescriptionTermView,
        },
        ShowMedicalList: {
            screen: ShowMedicalListView,
        },
        ShowMedicalDetai: {
            screen: ShowMedicalDetailView,
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#305097',
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerBackTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white',
        },
    },
);
export default RootNavigator
