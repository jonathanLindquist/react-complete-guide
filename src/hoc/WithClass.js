import React from 'react';

const WithClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
)

// pure javascript HOC
// const withClass = (WrappedComponent, className) => {
//     return props => (
//         <div className={className}>
//             <WrappedComponent />
//         </div>
//     );
// }

export default WithClass;