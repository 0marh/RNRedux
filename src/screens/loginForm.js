/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { changeEmailText, changePasswordText } from '../actions';
import reducers from '../reducers';

class LoginForm extends Component<{}> {
	onEmailChangeText(text) {
		this.props.changeEmailText(text);
	}
	onPassowrdChangeText(text) {
		this.props.changePasswordText(text);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formStyle}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="username"
							placeholderTextColor="#000"
							onChangeText={this.onEmailChangeText.bind(this)}
							value={this.props.username}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="passowrd"
							secureTextEntry
							placeholderTextColor="#000"
							onChangeText={this.onPassowrdChangeText.bind(this)}
							value={this.props.password}
						/>
					</View>
					<View>
						<Button color="#000" title="login" />
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		username: state.login.username,
		password: state.login.password
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	formStyle: {
		flex: 1 / 2,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 50
	},
	inputContainer: {
		width: '100%',
		height: 50,
		padding: 5,
		color: '#000',
		marginTop: 10,
		marginBottom: 10
	}
});

export default connect(mapStateToProps, {
	changeEmailText,
	changePasswordText
})(LoginForm);
