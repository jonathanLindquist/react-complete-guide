import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = '';
    if (props.showPersions) {
        buttonClass = classes.Red;
    }

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // assignedClasses = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a react App</h1>
			<p className={assignedClasses.join(' ')}>This is Really working!!</p>
			<button className={buttonClass} onClick={props.clicked}>
				Toggle Person's List
			</button>
		</div>
	);
};

export default Cockpit;
