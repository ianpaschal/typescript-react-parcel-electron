import React from "react";
import logo from "../../assets/logo.svg";
import "./App.css";

export default class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code>.
				</p>
			</div>
		);
	}
}
