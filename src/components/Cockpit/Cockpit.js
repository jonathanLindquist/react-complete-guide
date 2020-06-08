import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    // useState()
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
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
			<button className={buttonClass} onClick={props.clicked}>
				Toggle Person's List
			</button>
		</div>
	);
};

export default React.memo(Cockpit);
