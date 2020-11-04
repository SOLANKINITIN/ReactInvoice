import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyCG29nugKghsXD8j4uFQch6tzEdWzXiWI4',
	authDomain: 'hotel-616bd.firebaseapp.com',
	databaseURL: 'https://hotel-616bd.firebaseio.com',
	projectId: 'hotel-616bd',
	storageBucket: 'hotel-616bd.appspot.com',
	messagingSenderId: '183450632082',
	appId: '1:183450632082:web:2c32597c2ca76a12970b4b',
	measurementId: 'G-WRN2QXW9JB',
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
