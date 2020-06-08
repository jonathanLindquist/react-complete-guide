import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
	// useState()
	// const toggleBtnRef = React.createRef(); NOT SUPPORTED in functional components
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		//http request...
		// const timer = setTimeout(() => {
		//     alert('Saved data to cloud!');
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			// clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect!');
		};
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect!');
		};
	});

	// multiple useEffects is fine
	// useEffect(() => {});

	const assignedClasses = [];
	let buttonClass = '';
	if (props.showPersions) {
		buttonClass = classes.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // assignedClasses = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a react App</h1>
			<p className={assignedClasses.join(' ')}>This is Really working!!</p>
			<button ref={toggleBtnRef} className={buttonClass} onClick={props.clicked}>
				Toggle Person's List
			</button>
			{
				// <AuthContext.Consumer>
				// {context => <button onClick={context.login}>Log In</button>}
				// </AuthContext.Consumer>
            }
            <button onClick={authContext.login}>Log In</button>
		</div>
	);
};

export default React.memo(Cockpit);
