import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount(){
		const config = {
			apiKey: 'AIzaSyDU4xxldE8U-Afz9O3f8-KRMiT51Sr1mK8',
			authDomain: 'manager-a3a68.firebaseapp.com',
			databaseURL: 'https://manager-a3a68.firebaseio.com',
			projectId: 'manager-a3a68',
			storageBucket: 'manager-a3a68.appspot.com',
			messagingSenderId: '646482099029'
		};
		firebase.initializeApp(config);
	}


	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
