/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginForm from './screens/loginForm'
import reducers from './reducers';

export default class App extends Component<{}> {
	render() {
		return (
			<Provider store={createStore(reducers)}>
        <LoginForm/>
			</Provider>
		);
	}
}
