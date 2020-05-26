import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Person/UserOutput';
import UserInput from './Person/UserInput';

class App extends Component {
	state = {
		persons: [
			{ name: 'davie', age: 30, username: 'default username value' }, //
			{ name: 'Manu', age: 29, username: 'default username value' },
			{ name: 'Alaina', age: 26, username: 'default username value' }
		]
	};

	switchNameHandler = (newName) => {
		// console.log('Was clicked!');
		// DON'T DO THIS!!! this.state.persons[0].name = 'Jonathan';
		this.setState({
			persons: [
				{ name: newName, age: 40 }, //
				{ name: 'Manu', age: 63 },
				{ name: 'Alaina', age: 35 }
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Jonathan', age: 40 }, //
				{ name: event.target.value, age: 63 },
				{ name: 'Alaina', age: 35 }
			]
		});
	};

	changeUsernameHandler = (event) => {
		this.setState({
			// persons[value].username: event.target.value
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, I'm a react App</h1>
				<button style={style} onClick={() => this.switchNameHandler('Jonathan!!')}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					changeUsernameHandler={this.changeUsernameHandler}
					username={this.state.username}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Jonathan!')}
					changed={this.nameChangedHandler}
					changeUsernameHandler={this.changeUsernameHandler}
					username={this.state.username}
				>
					My Hobbies: racing
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
					changeUsernameHandler={this.changeUsernameHandler}
					username={this.state.username}
				/>
			</div>
		);
	}
	// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;

// const app = (props) => {
// 	const [ personsState, setPersonsState ] = useState({
// 		persons: [
// 			{ name: 'davie', age: 30 }, //
// 			{ name: 'Manu', age: 29 },
// 			{ name: 'Alaina', age: 26 }
// 		]
// 	});

// 	const [ otherState, setOtherState ] = useState('some other value');

// 	console.log(personsState, otherState);

// 	const switchNameHandler = () => {
// 		// console.log('Was clicked!');
// 		// DON'T DO THIS!!! this.state.persons[0].name = 'Jonathan';
// 		setPersonsState({
// 			persons: [
// 				{ name: 'davie', age: 30 }, //
// 				{ name: 'Manu', age: 29 },
// 				{ name: 'Alaina', age: 35 }
// 			]
// 		});
// 	};
