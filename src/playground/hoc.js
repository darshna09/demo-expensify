/**
 * High Order Function (HOC)
 * A component (HOC) that renders another component.
 * 
 * Advantages of HOC:
 * (1) Reuse code (2) Render hijacking (3) Prop manipulation (4) Abstract state
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Ordinary React Component.
const Info = (props) => {
   return (
       <div>
           <h3>Information</h3>
           <p>Details: {props.info}</p>
       </div>
   );
};

/**
 * High Order Component - JavaScript function.
 * @param {React Component} WrappedComponent 
 * @return {React Component} Enhanced Component
 */
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h2>This is private information. Please don't share!</h2>
            <WrappedComponent {...props} />
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo info='Details will come here.' />, document.getElementById('app'));

// Challenge: Create HOC <AuthInfo />, if authenticated show <Info /> else display message.

// JavaScript Function
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? <WrappedComponent {...props} /> : <p>User is not authenticated.</p> 
            }
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='Details will come here.' />, document.getElementById('app'));