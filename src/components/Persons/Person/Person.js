import React, { Component } from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
// import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import Aux from '../../../hoc/Aux';

// import './Person.css';

// const StyledDiv = styled.div`
//             width: 60%;
//             margin: 16px auto;
//             border: 1px solid #eee;
//             box-shadow: 0 2px 3px #ccc;
//             padding: 16px;
//             text-align: center;

//             @media (min-width: 500px) {
//                 width: 450px;
//             }
//         `;

class Person extends Component {
	// const style = {
	//     '@media (min-length: 500px)': {
	//         width: '450px'
	//     }
	// };
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

    // better than AuthContext.Consumer in class-based components
	static contextType = AuthContext;

	componentDidMount() {
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			// <div className="Person" style={style}>
			// <div className={classes.Person}>
			<Aux>
				{
					// <AuthContext.Consumer>
					// 	{(context) => (context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>)}
					// </AuthContext.Consumer>
                }
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					// ref={(inputEl) => {
					// 	this.inputElement = inputEl;
					// }}
					ref={this.inputElementRef}
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Aux>
			// </div>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default Person;
