import React from 'react';
import ReactDOM from 'react-dom';
import './css/fonts.css';
import './css/variables.css';
import './css/global.css';
import App from './App';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAfg9K7Fo6Z0YW6xOcxGxk0PC0d0amD3ko",
    authDomain: "resumeprofile-84731.firebaseapp.com",
    databaseURL: "https://resumeprofile-84731.firebaseio.com",
    projectId: "resumeprofile-84731",
    storageBucket: "resumeprofile-84731.appspot.com",
    messagingSenderId: "710223839649",
    appId: "1:710223839649:web:586177f6262790d994cbe0",
    measurementId: "G-P9H663S1W3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
