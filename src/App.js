import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
	background-color: ${(props) => (props.alt ? 'red' : 'green')};
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
		color: black;
	}
`;

class App extends Component {
	state = {
		persons: [
			{ id: 'asdfasdf', name: 'davie', age: 30, username: 'default username value' }, //
			{ id: 'qwerqerf', name: 'Manu', age: 29, username: 'default username value' },
			{ id: 'ZXczxvff', name: 'Alaina', age: 26, username: 'default username value' }
		],
		showPersons: false
	};

	// switchNameHandler = (newName) => {
	// 	// console.log('Was clicked!');
	// 	// DON'T DO THIS!!! this.state.persons[0].name = 'Jonathan';
	// 	this.setState({
	// 		persons: [
	// 			{ name: newName, age: 40 }, //
	// 			{ name: 'Manu', age: 63 },
	// 			{ name: 'Alaina', age: 35 }
	// 		]
	// 	});
	// };

	nameChangedHandler = (event, id) => {
		// get index by ID
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		// copy of person
		const person = {
			...this.state.persons[personIndex]
		};

		// const person = Object.assign({}, this.state.persons[personIndex]);

		// set name on the copied version
		person.name = event.target.value;

		const persons = [ ...this.state.persons ]; // copy of persons array
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		// const style = {
		// 	backgroundColor: 'green',
		// 	color: 'white',
		// 	font: 'inherit',
		// 	border: '1px solid blue',
		// 	padding: '8px',
		// 	cursor: 'pointer',
		// 	':hover': {
		// 		backgroundColor: 'lightgreen',
		// 		color: 'black'
		// 	}
		// };

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			// style.backgroundColor = 'red';
			// style[':hover'] = {
			// 	backgroundColor: 'salmon',
			// 	color: 'black'
			// };
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red'); // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red', 'bold']
		}

		return (
			<div className="App">
				<h1>Hi, I'm a react App</h1>
				<p className={classes.join(' ')}>This is Really working!!</p>
				<StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
					Toggle Person's List
				</StyledButton>
				{persons}
			</div>
		);
	}
	// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

// <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
// <Person
// name={this.state.persons[1].name}
// age={this.state.persons[1].age}
// click={this.switchNameHandler.bind(this, 'Jonathan!')}
// changed={this.nameChangedHandler}
// >
// My Hobbies: racing
// </Person>
// <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

export default App;

// REACT HOOKS example below

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
